import { motion } from "framer-motion";
import { Target, Users, MessageSquare, Zap } from "lucide-react";

const differentials = [
  {
    icon: Target,
    title: "Foco total em conversão",
    description: "Sites criados para gerar contatos e orçamentos, não apenas para \"estar na internet\".",
  },
  {
    icon: Users,
    title: "Pensado para pequenos negócios",
    description: "Entendemos a realidade do seu negócio e criamos soluções que cabem no seu bolso.",
  },
  {
    icon: MessageSquare,
    title: "Linguagem simples",
    description: "Sem termos técnicos ou complicação. Você entende tudo do início ao fim.",
  },
  {
    icon: Zap,
    title: "Entrega rápida e objetiva",
    description: "Seu site pronto em tempo recorde, sem enrolação e com qualidade profissional.",
  },
];

export const Differentials = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Por que a Construsite
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Nossos diferenciais
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
