import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Foco em resultado",
    description: "Cada site que criamos é pensado para gerar contatos e oportunidades de negócio reais.",
  },
  {
    icon: Heart,
    title: "Atendimento próximo",
    description: "Tratamos cada cliente de forma única, entendendo sua realidade e necessidades.",
  },
  {
    icon: Lightbulb,
    title: "Simplicidade",
    description: "Sem termos técnicos ou processos complicados. Você entende tudo do início ao fim.",
  },
];

const Sobre = () => {
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
              Sobre Nós
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Conheça a{" "}
              <span className="text-gradient">Vitrine Ativa</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Uma empresa que nasceu para ajudar pequenos e médios comércios a terem presença digital profissional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Quem somos
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  A Vitrine Ativa ajuda pequenos e médios comércios a se posicionarem melhor na internet por meio de sites profissionais, modernos e objetivos.
                </p>
                <p>
                  Nosso foco é criar presença digital que realmente gere contato e oportunidades de negócio. Acreditamos que todo negócio, independente do tamanho, merece um site que trabalhe por ele.
                </p>
                <p>
                  Com linguagem simples, atendimento próximo e processos descomplicados, transformamos a ideia do seu site em realidade de forma rápida e eficiente.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12"
            >
              <div className="aspect-square bg-muted/30 rounded-lg flex items-center justify-center">
                <span className="text-6xl font-bold text-gradient">VA</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nossa missão
            </h2>
            <p className="text-xl text-muted-foreground">
              Democratizar o acesso a sites profissionais, ajudando pequenos negócios a competir no mundo digital com as mesmas ferramentas das grandes empresas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossos valores
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Vamos conversar?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Estamos prontos para ajudar seu negócio a crescer no mundo digital.
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

export default Sobre;
