import { Service } from '@/models/property';
import { Scale, FileCheck, Hammer, Building2, BadgeDollarSign, Key, LucideIcon } from 'lucide-react';

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
    <article className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-card)]">
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <IconComponent className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg text-foreground font-heading mb-2">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {service.description}
      </p>
    </article>
  );
};

export default ServiceCard;
