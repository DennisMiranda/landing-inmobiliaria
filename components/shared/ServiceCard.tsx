import { Service } from '@/models/property';
import { BadgeDollarSign, Building2, FileCheck, Hammer, Key, LucideIcon, Scale } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const iconMap: Record<string, LucideIcon> = {
  Scale,
  FileCheck,
  Hammer,
  Building2,
  BadgeDollarSign,
  Key,
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const IconComponent = iconMap[service.icon] || Scale;

  return (
    <article className=" flex flex-col items-center group p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-card)]">
      {/* Icon */}
      <div className="w-18 h-18 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <IconComponent className="  w-10 h-10 text-blue-900 group-hover:text-primary-foreground transition-colors" />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg text-foreground font-heading mb-2">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed text-center">
        {service.description}
      </p>
    </article>
  );
};

export default ServiceCard;
