import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function About() {
  return (
    <Card className="w-full bg-card dark:bg-card-dark border-0">
      <CardHeader>
        <div className="flex items-center gap-8">
          <div className="w-32 h-32 relative rounded-2xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary/20 to-primary/40 dark:from-primary-dark/20 dark:to-primary-dark/40 flex items-center justify-center">
            <div className="text-6xl select-none">
              👨‍💻
            </div>
          </div>
          <div className="flex-1">
            <CardTitle className="text-2xl font-bold mb-2 text-primary dark:text-primary-dark">
              About Me
            </CardTitle>
            <CardDescription className="text-base text-foreground dark:text-foreground-dark">
              Full Stack Software Engineer with 7 years of experience in building scalable web applications. Proficient in Node.js, Express.js, React, and AWS. Strong focus on maintainable code and efficient CI/CD pipelines.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}