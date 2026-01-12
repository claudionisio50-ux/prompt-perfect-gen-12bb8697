import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tenha um site profissional que{" "}
            <span className="text-gradient">trabalha para o seu negócio</span>{" "}
            todos os dias
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Vamos conversar sobre o seu projeto? Entre em contato pelo WhatsApp e receba um orçamento personalizado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                <MessageCircle size={20} />
                Quero meu site profissional
                <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
