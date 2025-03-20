"use client"
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from 'next/link';
import { motion } from "motion/react";

const experiences = [
  {
    company: "Mindwell (AI Health Tech)",
    position: "Senior Software Engineer",
    location: "Remote",
    date: "2023 - Present",
    summary: [
      "Designed data-intensive health analytics pipeline, maintaining 99.9% uptime.",
      "Architected a high-performance system with containerized microservices and Message-Queue, resulting in 40% lower latency.",
      "Decreased database query times by 60% through implementation of compound indexes.",
      "Integrated and customized ChatGPT API layer to enhance AI capabilities.",
      "Developed a comprehensive admin portal for real-time monitoring."
    ],
  },
  {
    company: "Clientjoy (CRM Platform)",
    position: "Lead Software Engineer",
    location: "India, Gujarat, Ahmedabad",
    date: "2020 - 2023",
    summary: [
      "Led end-to-end architecture of AWS infrastructure for the core CRM product.",
      "Engineered high-performance solution for processing large-scale third-party email data.",
      "Integrated multiple payment gateways (Stripe, PayPal, Razorpay).",
      "Led a 6-member development team, implementing agile methodologies.",
      "Developed unified API gateway supporting 10+ third-party integrations."
    ],
  },
  {
    company: "Pivoting Software Limited (now momentum91)",
    position: "Software Engineer",
    location: "India, Gujarat, Ahmedabad",
    date: "2017 - 2020",
    summary: [
      "Developed and maintained RESTful APIs for multiple projects.",
      "Designed and optimized MySQL database schemas ensuring scalability.",
      "Progressed to team lead role, managing client communications.",
      "Successfully delivered multiple web applications including e-commerce platforms."
    ],
  },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-8"
    >
      <Card className="backdrop-blur-sm bg-gray-900/90 dark:bg-black/90 shadow-xl border border-gray-800/50 mb-6">
        <CardHeader className="p-6">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </CardTitle>
          <CardDescription className="text-gray-400">
            Results-driven Full Stack Software Engineer with 7 years of experience architecting and delivering scalable web applications. Specialized in building robust backend systems using Node.js and Express.js while maintaining proficiency in frontend technologies like React and NextJs. Extensive experience with both SQL and NoSQL databases, and proven expertise in AWS cloud infrastructure.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="backdrop-blur-sm bg-gray-900/90 dark:bg-black/90 shadow-xl border border-gray-800/50">
        <CardHeader className="p-6">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="relative">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6 relative"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400" />
                <div className="ml-4 md:ml-6">
                  <h3 className="font-semibold text-gray-100">
                    {exp.position} at {exp.company}
                  </h3>
                  <p className="text-blue-300 text-sm mb-2">
                    {exp.location} | {exp.date}
                  </p>
                  <ul className="space-y-1">
                    {exp.summary.map((item, idx) => (
                      <motion.li 
                        key={idx} 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 + idx * 0.05 }}
                        className="text-gray-400 text-sm"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}