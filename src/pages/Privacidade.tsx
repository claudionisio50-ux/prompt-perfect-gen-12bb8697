import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";

const Privacidade = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Política de Privacidade
            </h1>
            <p className="text-lg text-muted-foreground">
              Última atualização: Janeiro de 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto prose prose-invert prose-lg"
          >
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
                <p>
                  A Vitrine Ativa está comprometida em proteger sua privacidade. Esta política explica como coletamos, usamos e protegemos suas informações pessoais de forma simples e clara.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Informações que coletamos</h2>
                <p>Podemos coletar as seguintes informações quando você entra em contato conosco:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Nome e nome da empresa</li>
                  <li>E-mail e telefone/WhatsApp</li>
                  <li>Informações sobre seu negócio para elaboração de orçamento</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Como usamos suas informações</h2>
                <p>Utilizamos suas informações apenas para:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Responder suas solicitações e dúvidas</li>
                  <li>Elaborar e enviar orçamentos</li>
                  <li>Entrar em contato sobre nossos serviços</li>
                  <li>Melhorar nosso atendimento</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartilhamento de dados</h2>
                <p>
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. Seus dados são usados exclusivamente para a prestação de nossos serviços.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Segurança</h2>
                <p>
                  Adotamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Seus direitos</h2>
                <p>Você tem direito a:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Solicitar acesso aos seus dados pessoais</li>
                  <li>Solicitar correção de dados incorretos</li>
                  <li>Solicitar exclusão de seus dados</li>
                  <li>Retirar seu consentimento a qualquer momento</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Contato</h2>
                <p>
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato pelo e-mail{" "}
                  <a href="mailto:contato@vitrineativa.com.br" className="text-primary hover:underline">
                    contato@vitrineativa.com.br
                  </a>{" "}
                  ou pelo WhatsApp.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Alterações nesta política</h2>
                <p>
                  Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer mudanças.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacidade;
