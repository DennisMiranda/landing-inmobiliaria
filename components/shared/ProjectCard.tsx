import { Project } from '@/models/property';
import { MapPin, Home, TrendingUp } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const getTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      'habilitacion-urbana': 'Habilitación Urbana',
      'construccion': 'Proyecto de Construcción',
      'desarrollo': 'Desarrollo Inmobiliario',
    };
    return types[type] || type;
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'en-venta': 'bg-green-500',
      'proximamente': 'bg-secondary',
      'agotado': 'bg-muted-foreground',
    };
    return colors[status] || 'bg-muted';
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      'en-venta': 'En Venta',
      'proximamente': 'Próximamente',
      'agotado': 'Agotado',
    };
    return labels[status] || status;
  };

  return (
    <article
      className="card-property cursor-pointer group"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="tag-badge tag-project">
            {getTypeLabel(project.type)}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className={`tag-badge text-white ${getStatusColor(project.status)}`}>
            {getStatusLabel(project.status)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="font-semibold text-lg text-foreground font-heading line-clamp-1">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span>{project.province}</span>
        </div>

        {/* Details */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          {project.units && (
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Home className="w-4 h-4" />
              <span>{project.units} unidades</span>
            </div>
          )}
          {project.priceFrom && (
            <div className="flex items-center gap-1.5 text-sm font-semibold text-primary">
              <TrendingUp className="w-4 h-4" />
              <span>Desde ${project.priceFrom.toLocaleString()}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
