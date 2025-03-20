"use client"
import { Dialog } from "@/components/ui/dialog"; 
import React from "react";
import Link from "next/link";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
      <Dialog.Content className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            {project.link && (
              <Link 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 text-xs font-normal bg-blue-500/10 px-2 py-0.5 rounded-full text-blue-400 hover:bg-blue-500/20 transition-colors border border-blue-500/20"
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
          </div>
          
          {project.image && (
            <img src={project.image} alt={project.title} className="mb-4 rounded" />
          )}
          <p className="mb-4">{project.description}</p>
          
          <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </Dialog.Content>
    </Dialog>
  );
};

export default ProjectModal; 