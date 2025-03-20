"use client"
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const contactOptions = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "shreyanshnanavati@gmail.com",
      link: "mailto:shreyanshnanavati@gmail.com",
      color: "blue"
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "github.com/shreyanshnanavati",
      link: "https://github.com/shreyanshnanavati",
      color: "purple"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/shreyansh-nanavati",
      link: "www.linkedin.com/in/shreyansh-nanavati",
      color: "blue"
    },
    {
      icon: FaTwitter,
      title: "X",
      value: "x.com/shreyanshnanavt",
      link: "https://x.com/shreyanshnanavt",
      color: "purple"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-8"
    >
      <Card className="backdrop-blur-sm bg-gray-900/90 dark:bg-black/90 shadow-xl border border-gray-800/50">
        <CardHeader className="p-6">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </CardTitle>
          <CardDescription className="text-gray-400">
            Connect with me through any of these platforms. I'd love to hear from you!
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 grid gap-6 md:grid-cols-2">
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={option.link}
                target={option.title !== "Email" ? "_blank" : ""}
                rel={option.title !== "Email" ? "noopener noreferrer" : ""}
                className="block"
              >
                <Card className={`group hover:shadow-xl transition-all duration-300 
                  bg-gradient-to-r from-gray-950 to-gray-900 
                  hover:from-gray-900 hover:to-gray-800
                  border border-gray-800/50 hover:border-gray-700/50
                  cursor-pointer overflow-hidden`}
                >
                  <CardContent className="p-6 relative">
                    {/* Gradient overlay effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-${option.color}-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`h-12 w-12 flex items-center justify-center rounded-lg
                        bg-${option.color}-500/10 group-hover:bg-${option.color}-500/20 
                        text-${option.color}-300 transition-colors duration-300
                        border border-${option.color}-500/20`}
                      >
                        <option.icon className="h-5 w-5" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold text-gray-100 group-hover:text-${option.color}-300 transition-colors duration-300`}>
                          {option.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1">
                          {option.value}
                        </p>
                      </div>
                      
                      <Badge 
                        variant="outline"
                        className={`bg-gradient-to-r from-${option.color}-500/10 to-purple-500/10 
                          text-${option.color}-300 border border-${option.color}-500/20
                          group-hover:from-${option.color}-500/20 group-hover:to-purple-500/20`}
                      >
                        Connect
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
} 