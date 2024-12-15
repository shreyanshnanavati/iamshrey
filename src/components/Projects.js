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
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </CardDescription>
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