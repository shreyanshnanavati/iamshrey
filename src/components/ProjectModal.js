"use client"
import { Dialog } from "@/components/ui/dialog"; 
import React from "react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
      <Dialog.Content className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          {project.image && (
            <img src={project.image} alt={project.title} className="mb-4 rounded" />
          )}
          <p className="mb-4">{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            Visit Project
          </a>
          <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </Dialog.Content>
    </Dialog>
  );
};

export default ProjectModal; 