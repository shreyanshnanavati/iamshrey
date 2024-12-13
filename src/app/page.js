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
            <button className="bg-primary text-white px-4 py-2 rounded-md">
              Open
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
