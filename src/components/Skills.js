import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaNodeJs, FaReact, FaAws, FaDocker, FaGit } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiNextdotjs, SiExpress, SiNestjs, SiMongodb, SiPostgresql } from 'react-icons/si';

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
    <Card className="w-full bg-card dark:bg-card-dark border-0">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-primary dark:text-primary-dark">
          Skills
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-base font-medium text-muted-foreground/80">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map(({ name, icon }, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm font-medium bg-[#1a1f2e] border border-[#2a2f3e] 
                      hover:bg-[#2a2f3e] hover:border-[#3a3f4e] transition-all duration-300 
                      hover:scale-105 flex items-center gap-2 rounded-lg text-gray-200"
                  >
                    <span className="text-base">{icon}</span>
                    <span>{name}</span>
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 