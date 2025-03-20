import Image from "next/image";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <About />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Projects />
        <div className="space-y-8">
          <Skills />
          {/* Resume Section */}
          <div className="bg-card dark:bg-card-dark p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Resume</h2>
            <a 
              href="/shreyansh_resume_1.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 
                hover:from-blue-500 hover:to-purple-500
                text-white font-medium shadow-lg hover:shadow-xl 
                transition-all duration-300 py-2 px-4 rounded-md inline-flex items-center gap-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="9" y1="15" x2="15" y2="15"></line>
                <line x1="9" y1="11" x2="15" y2="11"></line>
              </svg>
              Open Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
