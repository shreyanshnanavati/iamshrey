"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
// import ProjectModal from "./ProjectModal";
import projects from "@/data/projectsData"; // Import the centralized projects data

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Card className="w-full h-full bg-card dark:bg-card-dark border-0 overflow-auto">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold text-primary dark:text-primary-dark">
            Featured Projects
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {projects.slice(0, 2).map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 
                bg-secondary dark:bg-card-dark border-0"
              onClick={() => openModal(project)}
            >
              <CardContent className="p-4">
                <div className="flex flex-col gap-2">
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
                  <h3 className="text-xl font-bold text-foreground dark:text-foreground-dark">
                    {project.title}
                  </h3>
                  <CardDescription className="text-sm text-foreground/80 dark:text-foreground-dark/80">
                    {project.description}
                  </CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">Solves:</span>
                    <Badge 
                      variant="outline"
                      className="bg-gradient-to-r from-violet-100 to-indigo-100 
                        dark:from-violet-950 dark:to-indigo-950 
                        text-violet-700 dark:text-violet-300 
                        border-0 shadow-sm"
                    >
                      {project.solves}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          <Link href="/projects" className="w-full">
            <Button 
              className="w-full bg-primary text-white dark:bg-primary-dark dark:text-background-dark hover:bg-primary/90 dark:hover:bg-primary-dark/90 transition-colors"
            >
              View All Projects
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* <ProjectModal project={selectedProject} onClose={closeModal} /> */}
    </>
  );
} 