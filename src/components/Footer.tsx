import { Link } from "react-router-dom";
import { Instagram, Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-foreground">
                Vitrine <span className="text-gradient">Ativa</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Criamos sites profissionais para pequenos e médios comércios, ajudando empresas a atrair mais clientes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@vitrineativa.com.br"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={18} />
                  <span>E-mail</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/vitrineativa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram size={18} />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Vitrine Ativa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
