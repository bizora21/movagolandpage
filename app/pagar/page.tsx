'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Loader2, CheckCircle, XCircle, Smartphone } from 'lucide-react';

function PaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [msisdn, setMsisdn] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [polling, setPolling] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'waiting'>('idle');
  const [message, setMessage] = useState('');
  
  // Get query params
  const driverId = searchParams.get('ref') || '';
  const amount = searchParams.get('amount') || '499';
  const phone = searchParams.get('phone') || '';

  useEffect(() => {
    if (phone) {
      setMsisdn(phone);
    }
  }, [phone]);

  // Format phone number to M-Pesa format (258XXXXXXXXX)
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const cleaned = value.replace(/\D/g, '');
    
    // Check if starts with country code
    if (cleaned.startsWith('258')) {
      return cleaned.substring(0, 12);
    }
    
    // If starts with 84, 85, 86, or 87, add 258 prefix
    if (cleaned.match(/^(84|85|86|87)/)) {
      return '258' + cleaned.substring(0, 9);
    }
    
    // Otherwise just return cleaned with 258 prefix
    return '258' + cleaned.substring(0, 9);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setMsisdn(formatted);
  };

  const validatePhone = (phone: string) => {
    // Must be 258 followed by 84, 85, 86, or 87, then 7 digits
    const regex = /^258(84|85|86|87)\d{7}$/;
    return regex.test(phone);
  };

  const initiatePayment = async () => {
    if (!validatePhone(msisdn)) {
      setMessage('Por favor, insira um número M-Pesa válido (ex: 258841234567)');
      setStatus('error');
      return;
    }

    if (!driverId) {
      setMessage('Referência do motorista não encontrada');
      setStatus('error');
      return;
    }

    // Ensure all values are defined and safe
    const safeAmount = amount || '499';
    const safeMsisdn = msisdn || '';
    const safeDriverId = driverId || '';

    setIsProcessing(true);
    setStatus('waiting');
    setMessage('A iniciar pagamento...');

      try {
      // Call Appwrite Function to initiate payment
      const response = await fetch(
        'https://nyc.cloud.appwrite.io/v1/functions/69b588ae003858b2a03a/executions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Appwrite-Project': '6921bac2003624668e3b',
          },
          body: JSON.stringify({
            path: '/initiate',
            method: 'POST',
            body: JSON.stringify({ 
              msisdn:    String(safeMsisdn), 
              amount:    String(safeAmount), 
              reference: String(safeDriverId) 
            }),
          }),
        }
      );

      const execution = await response.json();
      console.log('Appwrite response:', JSON.stringify(execution));
      const responseBody = execution.responseBody ?? execution.response ?? '{}';
      const data = JSON.parse(responseBody || '{}');

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Falha ao iniciar pagamento');
      }

      setMessage('Pagamento iniciado! Verifique o seu telemóvel e insira o PIN M-Pesa.');
      setPolling(true);
      
      // Start polling for payment confirmation
      startPolling();
      
    } catch (error: any) {
      console.error('Payment initiation error:', error);
      setMessage(error.message || 'Erro ao iniciar pagamento. Tente novamente.');
      setStatus('error');
      setPolling(false);
    } finally {
      setIsProcessing(false);
    }
  };

  const startPolling = () => {
    let attempts = 0;
    const maxAttempts = 24; // 2 minutes (24 * 5 seconds)

    const pollInterval = setInterval(async () => {
      attempts++;

      if (attempts >= maxAttempts) {
        clearInterval(pollInterval);
        setPolling(false);
        setStatus('error');
        setMessage('Tempo esgotado. Se pagou, feche esta janela e abra o app MOVAGO.');
        return;
      }

      try {
        const response = await fetch(
          'https://nyc.cloud.appwrite.io/v1/functions/69b588ae003858b2a03a/executions',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Appwrite-Project': '6921bac2003624668e3b',
            },
            body: JSON.stringify({
              path: `/status?driverId=${driverId}`,
              method: 'GET',
              body: '',
            }),
          }
        );

        const execution = await response.json();
        const responseBody = execution.responseBody ?? execution.response ?? '{}';
        const data = JSON.parse(responseBody || '{}');

        if (data.status === 'active' || data.status === 'trial') {
          clearInterval(pollInterval);
          setPolling(false);
          setStatus('success');
          setMessage('Pagamento confirmado! Subscrição activa por 30 dias.');
          
          // Redirect back to app after 3 seconds
          setTimeout(() => {
            window.close();
          }, 3000);
        }
      } catch (error) {
        console.error('Polling error:', error);
      }
    }, 5000); // Poll every 5 seconds
  };

  if (!driverId) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#0A0F1E' }}>
        <div className="max-w-md w-full text-center text-white">
          <XCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold mb-2">Erro</h1>
          <p className="text-gray-400">Referência do motorista não encontrada.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ backgroundColor: '#0A0F1E' }}>
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">MOVAGO</h1>
          <p className="text-gray-400">Subscrição de Motorista</p>
        </div>

        {/* Payment Card */}
        <div className="rounded-2xl p-6 shadow-2xl" style={{ backgroundColor: '#1A2332' }}>
          {/* Amount Display */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-1">Valor a pagar</p>
            <p className="text-4xl font-bold text-white">{amount} MZN</p>
            <p className="text-gray-400 text-sm mt-2">Subscrição mensal</p>
          </div>

          {/* Status Messages */}
          {status !== 'idle' && (
            <div className={`mb-6 p-4 rounded-lg ${
              status === 'success' ? 'bg-green-900/30 border border-green-500' :
              status === 'error' ? 'bg-red-900/30 border border-red-500' :
              'bg-blue-900/30 border border-blue-500'
            }`}>
              {status === 'success' && <CheckCircle className="h-6 w-6 text-green-500 mb-2" />}
              {status === 'error' && <XCircle className="h-6 w-6 text-red-500 mb-2" />}
              {status === 'waiting' && <Loader2 className="h-6 w-6 text-blue-500 mb-2 animate-spin" />}
              <p className={`text-sm ${
                status === 'success' ? 'text-green-400' :
                status === 'error' ? 'text-red-400' :
                'text-blue-400'
              }`}>{message}</p>
            </div>
          )}

          {/* Phone Input */}
          {status === 'idle' && (
            <>
              <div className="mb-6">
                <label className="block text-gray-400 text-sm mb-2">
                  Número M-Pesa
                </label>
                <div className="relative">
                  <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <input
                    type="tel"
                    value={msisdn}
                    onChange={handlePhoneChange}
                    placeholder="258841234567"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-colors"
                    disabled={isProcessing}
                  />
                </div>
                <p className="text-gray-500 text-xs mt-2">
                  Formato: 25884XXXXXXX (Vodacom M-Pesa)
                </p>
              </div>

              {/* Pay Button */}
              <button
                onClick={initiatePayment}
                disabled={isProcessing || !validatePhone(msisdn)}
                className="w-full py-4 rounded-lg font-semibold text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-orange-500/25 active:scale-[0.98]"
                style={{
                  backgroundColor: isProcessing ? '#6B7280' : '#F97316',
                }}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    A processar...
                  </span>
                ) : (
                  `Pagar ${amount} MZN com M-Pesa`
                )}
              </button>
            </>
          )}

          {/* Polling Indicator */}
          {polling && (
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                <Loader2 className="h-4 w-4 animate-spin" />
                Aguardando confirmação...
              </div>
            </div>
          )}

          {/* Success State */}
          {status === 'success' && (
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm mb-4">
                Pode fechar esta página e voltar ao app MOVAGO.
              </p>
              <button
                onClick={() => window.close()}
                className="px-6 py-3 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                Fechar
              </button>
            </div>
          )}

          {/* Error State - Retry */}
          {status === 'error' && !polling && (
            <div className="mt-6">
              <button
                onClick={() => {
                  setStatus('idle');
                  setMessage('');
                }}
                className="w-full py-3 rounded-lg font-semibold text-white bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                Tentar Novamente
              </button>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            Pagamento seguro via M-Pesa • MOVAGO © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0A0F1E' }}>
        <Loader2 className="h-8 w-8 text-orange-500 animate-spin" />
      </div>
    }>
      <PaymentContent />
    </Suspense>
  );
}