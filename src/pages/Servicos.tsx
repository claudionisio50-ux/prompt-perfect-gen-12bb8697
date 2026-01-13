import { motion } from "framer-motion";
import { Globe, Store, RefreshCw, CheckCircle2, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Criação de site institucional",
    description: "Um site profissional para apresentar seu negócio com clareza e credibilidade. Perfeito para empresas que querem fortalecer sua presença digital.",
    benefits: [
      "Design moderno e profissional",
      "Otimizado para aparecer no Google",
      "Responsivo para celular e desktop",
      "Integração com WhatsApp",
    ],
  },
  {
    icon: Store,
    title: "Sites para pequenos e médios comércios",
    description: "Soluções pensadas especialmente para atrair clientes e facilitar o contato. Foco total em conversão e geração de orçamentos.",
    benefits: [
      "Catálogo de produtos ou serviços",
      "Botões de ação estratégicos",
      "Formulários de contato simples",
      "Página de depoimentos",
    ],
  },
  {
    icon: RefreshCw,
    title: "Reformulação de sites existentes",
    description: "Atualização visual e de conteúdo para melhorar resultados. Transforme seu site antigo em uma máquina de gerar contatos.",
    benefits: [
      "Análise do site atual",
      "Novo design mais moderno",
      "Melhoria de velocidade",
      "Conteúdo otimizado",
    ],
  },
];

const Servicos = () => {
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
              Nossos Serviços
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Soluções para seu negócio{" "}
              <span className="text-gradient">crescer online</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Sites profissionais, focados em conversão e pensados para a realidade do pequeno e médio comércio brasileiro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon size={28} className="text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold"
                  >
                    <a
                      href="https://wa.me/5500000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Solicitar orçamento
                      <ArrowRight size={16} />
                    </a>
                  </Button>
                </div>
                <div className={`bg-gradient-card border border-border rounded-2xl p-8 md:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
                    <service.icon size={64} className="text-primary/30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronto para ter seu site profissional?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Entre em contato agora e receba um orçamento personalizado para o seu negócio.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold shadow-glow px-8"
            >
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Fale com a Vitrine Ativa
                <ArrowRight size={18} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
