import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Music2,
  Phone,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                <span className=" font-bold text-lg font-heading">
                <Image
                  src="/logo-white.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                </span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
             Encuentra tu nuevo hogar con nosotros.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61567507243512"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/amirainmobiliaria/"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@amirainmobiliaria"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Music2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 font-heading">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#propiedades-venta"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Propiedades en Venta
                </a>
              </li>
              <li>
                <a
                  href="#alquiler"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Propiedades en Alquiler
                </a>
              </li>
              {/* <li>
                <a
                  href="#proyectos"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Proyectos
                </a>
              </li> */}
              <li>
                <a
                  href="#servicios"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 font-heading">
              Servicios
            </h4>
            <ul className="space-y-2">
              <li className="text-background/70 text-sm">Asesoría Legal</li>
              <li className="text-background/70 text-sm">
                Saneamiento de Predios
              </li>
              <li className="text-background/70 text-sm">Construcción</li>
              <li className="text-background/70 text-sm">
                Vende tu Propiedad
              </li>
              <li className="text-background/70 text-sm">
                Alquila tu Propiedad
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 font-heading">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70">APV Viñani III.</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+51982743773"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  +51 982 743 773
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:ventas.amirainmobiliaria@gmail.com"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  ventas.amirainmobiliaria@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Lun - Sáb: 8:30 AM - 5:30 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm text-background/50">
          <p>
            © {currentYear} Amira Inmobiliaria. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
