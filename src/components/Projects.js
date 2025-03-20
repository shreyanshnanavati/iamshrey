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
import { motion } from "motion/react";
import projects from "@/data/projectsData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4"
    >
      <Card className="backdrop-blur-sm bg-gray-900/90 dark:bg-black/90 shadow-xl border border-gray-800/50">
        <CardHeader className="p-6">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {projects.slice(0, 2).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="group hover:shadow-xl transition-all duration-300 
                  bg-gradient-to-r from-gray-950 to-gray-900 
                  hover:from-gray-900 hover:to-gray-800
                  border border-gray-800/50 hover:border-gray-700/50
                  cursor-pointer overflow-hidden"
                onClick={() => openModal(project)}
              >
                <CardContent className="p-6 relative">
                  {/* Gradient overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex flex-col gap-4 relative z-10">
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-blue-300 transition-colors duration-300 flex items-center gap-2">
                      {project.title}
                      {project.link && (
                        <Link 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()} 
                          className="inline-flex items-center gap-1 text-xs font-normal bg-blue-500/10 px-2 py-0.5 rounded-full text-blue-300 hover:bg-blue-500/20 transition-colors border border-blue-500/20"
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="12" 
                            height="12" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                          GitHub
                        </Link>
                      )}
                    </h3>
                    <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </CardDescription>
                    
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="px-3 py-1 text-sm bg-blue-500/10 text-blue-300
                              border border-blue-500/20 hover:bg-blue-500/20"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-xs uppercase tracking-wider text-gray-500">
                        Solves:
                      </span>
                      <Badge 
                        variant="outline"
                        className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                          text-purple-300 border border-purple-500/20
                          hover:from-purple-500/20 hover:to-blue-500/20"
                      >
                        {project.solves}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/projects" className="w-full block">
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 
                  hover:from-blue-500 hover:to-purple-500
                  text-white font-medium shadow-lg hover:shadow-xl 
                  transition-all duration-300 py-6"
              >
                View All Projects
              </Button>
            </Link>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 