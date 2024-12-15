"use client"
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { motion } from "motion/react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4"
    >
      <Card className="backdrop-blur-sm bg-gray-900/90 dark:bg-black/90 shadow-xl border border-gray-800/50">
        <CardHeader className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              className="w-48 h-48 md:w-56 md:h-56 relative rounded-3xl overflow-hidden flex-shrink-0 
                bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 
                shadow-xl border border-gray-800/50
                hover:shadow-2xl hover:border-gray-700/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/my_dp.png"
                alt="Profile"
                fill
                className="object-cover transition-all duration-500
                  hover:scale-110 hover:rotate-2"
                priority
              />
            </motion.div>
            <motion.div 
              className="flex-1 space-y-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Hello World!
              </CardTitle>
              <CardDescription className="text-lg leading-relaxed text-gray-300">
                I'm a Full Stack Software Engineer with 7 years of experience in building scalable web applications. 
                Proficient in Node.js, Express.js, React, and AWS. Strong focus on maintainable code and efficient CI/CD pipelines.
              </CardDescription>
              <div className="flex gap-4 pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/about" 
                    className="inline-flex items-center px-6 py-3 rounded-full 
                      bg-gradient-to-r from-blue-600 to-purple-600 
                      hover:from-blue-500 hover:to-purple-500
                      text-white font-medium shadow-lg hover:shadow-xl 
                      transition-all duration-300"
                  >
                    Know More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
}