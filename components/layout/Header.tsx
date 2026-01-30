import { Briefcase, Building2, Home, Key, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/*  1. ARREGLO BASE */

const navItems = [
  { id: "home", label: "Inicio", href: "/#", icon: Home },
  {
    id: "sale",
    label: "Propiedades",
    href: "/#propiedades-venta",
    icon: Building2,
  },
  { id: "rent", label: "Alquiler", href: "/#propiedades-alquiler", icon: Key },
  { id: "services", label: "Servicios", href: "/#servicios", icon: Briefcase },
  { id: "contact", label: "Contacto", href: "/#contacto", icon: Phone },
];

/* 2. ORDEN POR BREAKPOINT */

// Contacto al centro
const mobileOrder = ["home", "sale", "contact", "rent", "services"];

const mobileMenu = mobileOrder.map(
  (id) => navItems.find((item) => item.id === id)!
);

// Contacto a la derecha
const desktopMenu = navItems;

/* 3. COMPONENTE */

export default function NavBar() {
  return (
    <>
      {/* NAV WEB */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 h-16 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6 gap-8">
          <Link href="/#" className="flex items-center gap-2">
            <Image src="/logo.jpeg" alt="Logo" width={40} height={40} />
          </Link>
          <div className="flex-1"></div>
          {desktopMenu.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition"
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </header>

      {/* Floating Logo */}
      <a
        href="#"
        className="md:hidden fixed top-6 left-6 z-50 flex items-center gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Image src="/logo.jpeg" alt="Logo" width={40} height={40} />
      </a>

      {/* NAV MÓVIL */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-50">
        <ul className="flex items-center justify-between px-2 py-2">
          {mobileMenu.map((item) => {
            const Icon = item.icon;
            const isContact = item.id === "contact";

            return (
              <li key={item.id} className="flex-1">
                <a
                  href={item.href}
                  className={`
                    flex flex-col items-center justify-center gap-1 py-1
                    ${isContact ? "text-blue-600" : "text-gray-500"}
                  `}
                >
                  <Icon
                    size={22}
                    className={isContact ? "stroke-[2.2]" : "stroke-[1.8]"}
                  />
                  {/* Accesibilidad */}
                  <span className="sr-only">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}