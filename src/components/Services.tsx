import { motion } from "framer-motion";
import { Globe, Store, RefreshCw, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Criação de site institucional",
    description: "Um site profissional para apresentar seu negócio com clareza e credibilidade. Ideal para quem quer fortalecer a presença digital.",
  },
  {
    icon: Store,
    title: "Sites para pequenos e médios comércios",
    description: "Soluções pensadas para atrair clientes e facilitar o contato. Foco total em conversão e geração de orçamentos.",
  },
  {
    icon: RefreshCw,
    title: "Reformulação de sites existentes",
    description: "Atualização visual e de conteúdo para melhorar resultados. Transforme seu site antigo em uma máquina de gerar contatos.",
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            O que a Vitrine Ativa faz por você
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 shadow-card"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button
            asChild
            variant="outline"
            className="border-border text-foreground hover:bg-card hover:text-primary"
          >
            <Link to="/servicos" className="flex items-center gap-2">
              Ver todos os serviços
              <ArrowRight size={16} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
