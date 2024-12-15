"use client"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaNodeJs, FaReact, FaAws, FaDocker, FaGit } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiNextdotjs, SiExpress, SiNestjs, SiMongodb, SiPostgresql } from 'react-icons/si';
import { motion } from "motion/react";

export default function Skills() {
  const skills = {
    "Languages & Core": [
      { name: "Javascript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "Typescript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    ],
    "Backend & Cloud": [
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "NestJS", icon: <SiNestjs className="text-[#E0234E]" /> },
      { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    ],
    "Architecture & Tools": [
      { name: "Microservices", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "RESTful APIs", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
      { name: "Git", icon: <FaGit className="text-[#F05032]" /> },
    ],
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
            Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-gray-300">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillList.map(({ name, icon }, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-gray-950 to-gray-900 
                          hover:from-gray-900 hover:to-gray-800
                          border border-gray-800/50 hover:border-gray-700/50
                          flex items-center gap-2 rounded-lg text-gray-100"
                      >
                        <span className="text-lg">{icon}</span>
                        <span>{name}</span>
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 