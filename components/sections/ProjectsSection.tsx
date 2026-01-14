
"use client"
import ProjectCard from '@/components/shared/ProjectCard';
import { projects } from '@/data/properties';
import { useRef } from 'react';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="section-container space-y-6 sm:space-y-8">
        {/* Header */}
        <div ref={titleRef} className="space-y-2">
          <h2 className="heading-primary">Proyectos Inmobiliarios</h2>
          <p className="text-muted-foreground">
            Habilitaciones urbanas, construcción y desarrollos exclusivos
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
