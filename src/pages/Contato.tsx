import { motion } from "framer-motion";
import { MessageCircle, Mail, Instagram, Clock, MapPin } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Resposta rápida",
    action: "Chamar no WhatsApp",
    href: "https://wa.me/5500000000000",
    highlight: true,
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "contato@construsite.com.br",
    action: "Enviar e-mail",
    href: "mailto:contato@construsite.com.br",
    highlight: false,
  },
  {
    icon: Instagram,
    title: "Instagram",
    description: "@construsite",
    action: "Seguir no Instagram",
    href: "https://instagram.com/construsite",
    highlight: false,
  },
];

const Contato = () => {
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
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Contato
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Vamos tirar seu{" "}
              <span className="text-gradient">site do papel</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Entre em contato pelo WhatsApp, explique sua necessidade e receba um orçamento personalizado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group block bg-gradient-card border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 ${
                    method.highlight ? "border-primary shadow-glow" : "border-border"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    method.highlight ? "bg-gradient-primary" : "bg-primary/10"
                  }`}>
                    <method.icon size={28} className={method.highlight ? "text-primary-foreground" : "text-primary"} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {method.description}
                  </p>
                  <span className="text-primary font-medium group-hover:underline">
                    {method.action} →
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Horário de atendimento
                  </h3>
                  <p className="text-muted-foreground">
                    Segunda a sexta, das 9h às 18h.<br />
                    Respondemos mensagens em até 24h úteis.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Localização
                  </h3>
                  <p className="text-muted-foreground">
                    Atendemos todo o Brasil de forma online.<br />
                    Reuniões por videochamada quando necessário.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main CTA */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronto para começar?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              O primeiro passo é simples: envie uma mensagem e conte o que você precisa.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold shadow-glow animate-glow-pulse px-8"
            >
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Peça seu orçamento no WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
