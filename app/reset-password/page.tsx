'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ResetPasswordContent() {
  const params    = useSearchParams();
  const userId    = params.get('userId') ?? '';
  const secret    = params.get('secret') ?? '';

  const [password,  setPassword]  = useState('');
  const [confirm,   setConfirm]   = useState('');
  const [status,    setStatus]    = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [message,   setMessage]   = useState('');

  const validate = () => {
    if (password.length < 8)
      return 'A senha deve ter pelo menos 8 caracteres.';
    if (!/[0-9]/.test(password))
      return 'A senha deve conter pelo menos um número.';
    if (password !== confirm)
      return 'As senhas não coincidem.';
    return null;
  };

  const handleReset = async () => {
    const err = validate();
    if (err) { setMessage(err); setStatus('error'); return; }

    if (!userId || !secret) {
      setMessage('Link inválido ou expirado. Solicita um novo email de recuperação.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('https://nyc.cloud.appwrite.io/v1/account/recovery', {
        method: 'PUT',
        headers: {
          'Content-Type':       'application/json',
          'X-Appwrite-Project': '6921bac2003624668e3b',
        },
        body: JSON.stringify({
          userId,
          secret,
          password,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setMessage('Senha redefinida com sucesso! Podes agora entrar na app MOVAGO com a nova senha.');
      } else {
        const data = await res.json();
        throw new Error(data.message ?? 'Erro ao redefinir senha.');
      }
    } catch (e: any) {
      setStatus('error');
      setMessage(e.message ?? 'Erro inesperado. Tenta novamente.');
    }
  };

  return (
    <main style={{
      minHeight: '100vh',
      background: '#0A0F1E',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <div style={{
        background: '#111827',
        borderRadius: '16px',
        padding: '40px 32px',
        width: '100%',
        maxWidth: '420px',
        border: '1px solid #1F2937',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '28px', fontWeight: '800', color: '#F97316', marginBottom: '8px' }}>
            MOVAGO
          </div>
          <p style={{ color: '#9CA3AF', fontSize: '14px', margin: 0 }}>
            Redefinir senha
          </p>
        </div>

        {/* Sucesso */}
        {status === 'success' && (
          <div style={{
            background: '#065F46', border: '1px solid #10B981',
            borderRadius: '12px', padding: '20px', textAlign: 'center',
          }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>✅</div>
            <p style={{ color: '#F9FAFB', fontWeight: '600', margin: '0 0 8px' }}>
              Senha redefinida!
            </p>
            <p style={{ color: '#6EE7B7', fontSize: '13px', margin: 0 }}>
              {message}
            </p>
          </div>
        )}

        {/* Formulário */}
        {status !== 'success' && (
          <>
            {/* Erro */}
            {status === 'error' && (
              <div style={{
                background: '#7F1D1D', border: '1px solid #EF4444',
                borderRadius: '8px', padding: '12px 16px', marginBottom: '20px',
                color: '#FCA5A5', fontSize: '13px',
              }}>
                {message}
              </div>
            )}

            {/* Nova senha */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', color: '#9CA3AF', fontSize: '13px', marginBottom: '8px' }}>
                Nova senha
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Mínimo 8 caracteres"
                style={{
                  width: '100%', padding: '14px 16px',
                  background: '#1F2937', border: '1px solid #374151',
                  borderRadius: '10px', color: '#F9FAFB', fontSize: '16px',
                  outline: 'none', boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Confirmar senha */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', color: '#9CA3AF', fontSize: '13px', marginBottom: '8px' }}>
                Confirmar senha
              </label>
              <input
                type="password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                placeholder="Repete a nova senha"
                style={{
                  width: '100%', padding: '14px 16px',
                  background: '#1F2937', border: '1px solid #374151',
                  borderRadius: '10px', color: '#F9FAFB', fontSize: '16px',
                  outline: 'none', boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Botão */}
            <button
              onClick={handleReset}
              disabled={status === 'loading'}
              style={{
                width: '100%', padding: '16px',
                background: status === 'loading' ? '#374151' : '#F97316',
                color: '#fff', border: 'none', borderRadius: '10px',
                fontSize: '16px', fontWeight: '700',
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              }}
            >
              {status === 'loading' ? 'A redefinir...' : 'Redefinir Senha'}
            </button>

            <p style={{ textAlign: 'center', color: '#6B7280', fontSize: '12px', marginTop: '16px' }}>
              🔒 Seguro via MOVAGO
            </p>
          </>
        )}
      </div>
    </main>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <main style={{ minHeight: '100vh', background: '#0A0F1E', display: 'flex',
        alignItems: 'center', justifyContent: 'center', color: '#F97316',
        fontFamily: 'system-ui', fontSize: '18px' }}>
        A carregar...
      </main>
    }>
      <ResetPasswordContent />
    </Suspense>
  );
}