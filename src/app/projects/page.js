"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import projects from "@/data/projectsData"; // Import the centralized projects data

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-8">
      <Card className="w-full bg-card dark:bg-card-dark border-0">
        <CardHeader className="pb-2">
          <CardTitle className="text-3xl font-bold text-primary dark:text-primary-dark">
            All Projects
          </CardTitle>
          <CardDescription className="text-lg text-foreground/80 dark:text-foreground-dark/80">
            A collection of my personal and professional projects
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 
                bg-secondary dark:bg-card-dark border-0"
            >
              <CardContent className="p-6">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary dark:bg-primary-dark/10 dark:text-primary-dark"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="group-hover:text-primary dark:group-hover:text-primary-dark transition-colors"
                  >
                    <h3 className="text-xl font-bold text-foreground dark:text-foreground-dark">
                      {project.title}
                    </h3>
                  </a>
                  <CardDescription className="text-sm text-foreground/80 dark:text-foreground-dark/80">
                    {project.description}
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
} 