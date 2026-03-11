import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Termos de Uso — MOVAGO",
  description: "Termos de uso da MOVAGO. Condições de utilização da plataforma de transporte urbano.",
};

export default function TermosPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Termos de <span className="gradient-text">Uso</span>
            </h1>
            <p className="text-xl text-[rgb(var(--color-text-muted))]">
              Última actualização: Março de 2026
            </p>
          </div>

          <div className="space-y-8">
            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed">
                  Ao baixar, instalar ou usar a aplicação MOVAGO, você concorda em ficar vinculado
                  por estes Termos de Uso. Se não concordar com estes termos, não deve utilizar a nossa aplicação.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Descrição do Serviço</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed mb-4">
                  A MOVAGO é uma plataforma que conecta passageiros e motoristas para serviços de
                  transporte urbano em Moçambique. Os nossos serviços incluem:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[rgb(var(--color-text-muted))]">
                  <li>Solicitação de viagens através da aplicação móvel</li>
                  <li>Conexão com motoristas independentes</li>
                  <li>Rastreamento de viagens em tempo real</li>
                  <li>Sistema de avaliação de passageiros e motoristas</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Responsabilidades do Utilizador</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed mb-4">
                  Como utilizador da MOVAGO, você concorda em:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[rgb(var(--color-text-muted))]">
                  <li>Fornecer informações verdadeiras e accurate</li>
                  <li>Ter idade mínima de 18 anos</li>
                  <li>Respeitar os motoristas e outros utilizadores</li>
                  <li>Seguir as leis locais durante as viagens</li>
                  <li>Não usar a aplicação para actividades ilegais</li>
                  <li>Manter a segurança da sua conta</li>
                  <li>Estar pronto no local e hora acordados</li>
                  <li>Pagar pelas viagens realizadas</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Responsabilidades do Motorista</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed mb-4">
                  Os motoristas da MOVAGO concordam em:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[rgb(var(--color-text-muted))]">
                  <li>Ter carteira de condução válida e experiência mínima</li>
                  <li>Manter o veículo em boas condições</li>
                  <li>Seguir o trajeto mais seguro e eficiente</li>
                  <li>Respeitar os passageiros e fornecer serviço profissional</li>
                  <li>Aceitar pagamentos apenas através da plataforma</li>
                  <li>Manter classificações médias acima de 4.5 estrelas</li>
                  <li>Não discriminar passageiros</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Preços e Pagamentos</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed mb-4">
                  Os preços das viagens são calculados com base em:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[rgb(var(--color-text-muted))]">
                  <li>Distância percorrida</li>
                  <li>Tempo estimado da viagem</li>
                  <li>Taxa de base aplicável</li>
                  <li>Procura no momento (preços dinâmicos)</li>
                </ul>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed mt-4">
                  Aceitamos pagamentos em dinheiro. O preço é exibido antes de confirmar a viagem.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Cancelamento e Reembolso</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed mb-4">
                  <strong>Cancelamento pelo Passageiro:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-[rgb(var(--color-text-muted))] mb-4">
                  <li>Grátis nos primeiros 2 minutos após solicitar</li>
                  <li>Taxa de MZN 50 após 2 minutos e antes do motorista chegar</li>
                  <li>Taxa total se o motorista já estiver no local</li>
                </ul>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed mb-4">
                  <strong>Cancelamento pelo Motorista:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-[rgb(var(--color-text-muted))]">
                  <li>Sem penalização se cancelado nos primeiros 2 minutos</li>
                  <li>O passageiro recebe reembolso completo + compensação</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Conduta e Segurança</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed mb-4">
                  É proibido:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[rgb(var(--color-text-muted))]">
                  <li>Transportar passageiros adicionais além da capacidade do veículo</li>
                  <li>Consumir álcool ou drogas durante viagens</li>
                  <li>Usar linguagem ofensiva ou comportamento agressivo</li>
                  <li>Solicitar ou realizar contacto físico inadequado</li>
                  <li>Fumar dentro do veículo</li>
                  <li>Transportar animais sem autorização prévia</li>
                  <li>Transportar objectos perigosos ou ilegais</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Propriedade Intelectual</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed">
                  A MOVAGO e todos os seus conteúdos, funcionalidades e design são propriedade
                  exclusiva da MOVAGO ou dos seus licenciadores. Não é permitido copiar, modificar,
                  distribuir ou criar trabalhos derivados sem autorização expressa.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Limitação de Responsabilidade</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed">
                  A MOVAGO não é responsável por: danos indirectos ou incidentais; perdas de lucros;
                  interrupções do serviço; atrasos ou cancelamentos; acidentes ou lesões; ou comportamento
                  de motoristas ou passageiros. A MOVAGO actua apenas como intermediária e não é
                  transportadora.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Suspensão e Encerramento</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed mb-4">
                  Reservamo-nos o direito de suspender ou encerrar contas que:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[rgb(var(--color-text-muted))]">
                  <li>Violem estes Termos de Uso</li>
                  <li>Envolvam-se em actividades fraudulentas</li>
                  <li>Coloquem em risco a segurança de outros</li>
                  <li>Tenham classificações consistentemente baixas</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">11. Alterações aos Termos</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed">
                  Podemos modificar estes termos a qualquer momento. Os utilizadores serão notificados
                  sobre alterações significativas. O uso continuado da aplicação após alterações
                  constitui aceitação dos novos termos.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">12. Lei Aplicável</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed">
                  Estes termos são regidos pelas leis da República de Moçambique. Quaisquer litígios
                  serão resolvidos nos tribunais de Maputo, Moçambique.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">13. Contacto</h2>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed">
                  Para questões sobre estes termos, contacte-nos em:
                </p>
                <div className="mt-4 space-y-2 text-[rgb(var(--color-text-muted))]">
                  <p>Email: <a href="mailto:legal@movago.co.mz" className="text-[rgb(var(--color-primary))] hover:underline">legal@movago.co.mz</a></p>
                  <p>Endereço: Av. Julius Nyerere, 1234, Maputo, Moçambique</p>
                  <p>Telefone: +258 84 123 4567</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}