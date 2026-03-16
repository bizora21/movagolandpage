import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Política de Privacidade — MOVAGO",
  description: "Política de privacidade da MOVAGO. Saiba como recolhemos, usamos e protegemos os seus dados pessoais.",
};

export default function PrivacidadePage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Política de <span className="gradient-text">Privacidade</span>
            </h1>
            <p className="text-xl text-[rgb(var(--color-text-muted))]">
              Última actualização: Março de 2026
            </p>
          </div>

          <div className="space-y-8">
            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Introdução</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed mb-4">
                  A MOVAGO ("nós", "nosso") está comprometida em proteger a sua privacidade.
                  Esta política de privacidade explica como recolhemos, usamos, partilhamos e protegemos
                  as suas informações pessoais quando utiliza a nossa aplicação móvel e serviços.
                </p>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed">
                  Ao utilizar a MOVAGO, você concorda com a recolha e uso de informações de acordo com esta política.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Dados Recolhidos</h2>
                <div className="space-y-4 text-[rgb(var(--color-text-muted))]">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">2.1 Dados Pessoais</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Nome e número de telefone</li>
                      <li>Endereço de email</li>
                      <li>Foto de perfil (opcional)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">2.2 Dados de Localização</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>GPS em tempo real durante viagens</li>
                      <li>Origem e destino da viagem</li>
                      <li>Histórico de trajetos</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">2.3 Dados de Uso</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Histórico de viagens</li>
                      <li>Preferências e configurações</li>
                      <li>Dados de dispositivo e app</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Finalidade do Tratamento</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed mb-4">
                  Utilizamos os seus dados para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[rgb(var(--color-text-muted))]">
                  <li>Fornecer os serviços de transporte</li>
                  <li>Verificar motoristas e utilizadores</li>
                  <li>Garantir a segurança durante viagens</li>
                  <li>Melhorar os nossos serviços</li>
                  <li>Comunicar consigo sobre o serviço</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Partilha de Dados</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed mb-4">
                  Podemos partilhar os seus dados com:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[rgb(var(--color-text-muted))]">
                  <li><strong>Motoristas:</strong> Nome, foto e avaliações para conclusão da viagem</li>
                  <li><strong>Mapbox:</strong> Para fornecer serviços de navegação e mapas</li>
                  <li><strong>Autoridades:</strong> Quando legalmente requerido ou para proteger a segurança</li>
                </ul>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed mt-4">
                  Nunca vendemos os seus dados pessoais a terceiros.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Pagamentos</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed mb-4">
                  O MOVAGO não processa pagamentos directamente dentro da aplicação. 
                  Todos os pagamentos são realizados através de serviços externos, 
                  nomeadamente o M-Pesa da Vodacom Moçambique, num browser externo 
                  fora da aplicação MOVAGO.
                </p>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed mb-4">
                  Ao efectuar um pagamento, o utilizador é redirecionado para uma 
                  página segura onde completa a transacção directamente com o 
                  prestador de serviços de pagamento. O MOVAGO não armazena dados 
                  de cartões bancários nem credenciais de pagamento.
                </p>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed">
                  Os dados da transacção (referência, valor, data) são registados 
                  para controlo de subscrições e suporte ao cliente.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Segurança dos Dados</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger os seus dados,
                  incluindo encriptação SSL, autenticação segura e acesso restrito. No entanto, nenhum sistema
                  é 100% seguro e não podemos garantir segurança absoluta.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Seus Direitos</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed mb-4">
                  Tem direito a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[rgb(var(--color-text-muted))]">
                  <li>Aceder aos seus dados pessoais</li>
                  <li>Corrigir dados incompletos ou incorrectos</li>
                  <li>Eliminar os seus dados (quando legalmente permitido)</li>
                  <li>Opor-se ao processamento dos seus dados</li>
                  <li>Solicitar portabilidade dos dados</li>
                  <li>Retirar consentimento a qualquer momento</li>
                </ul>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed mt-4">
                  Para exercer estes direitos, contacte-nos em: privacidade@movago.co.mz
                </p>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Retenção de Dados</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed">
                  Mantemos os seus dados apenas pelo tempo necessário para fornecer os serviços e cumprir
                  obrigações legais. Os dados de viagens são mantidos por 2 anos após a última viagem.
                  Dados de conta podem ser mantidos por até 5 anos após o encerramento da conta.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Crianças</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed">
                  A MOVAGO não é destinada a menores de 18 anos. Não recolhemos intencionalmente
                  informações de crianças. Se descobrirmos que recolhemos dados de uma criança,
                  tomaremos medidas para os eliminar.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Alterações a Esta Política</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed">
                  Podemos actualizar esta política periodicamente. Notificaremos os utilizadores sobre
                  alterações significativas via email ou notificação na app. O uso continuado da app
                  após alterações constitui aceitação da nova política.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">11. Contacto</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed">
                  Para questões sobre privacidade ou exercer seus direitos, contacte:
                </p>
                <div className="mt-4 space-y-2 text-[rgb(var(--color-text-muted))]">
                  <p>Email: <a href="mailto:privacidade@movago.co.mz" className="text-[rgb(var(--color-primary))] hover:underline">privacidade@movago.co.mz</a></p>
                  <p>Endereço: Av. Julius Nyerere, 1234, Maputo, Moçambique</p>
                  <p>Telefone: +258863181415</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}