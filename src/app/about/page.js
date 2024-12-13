import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

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
    <div className="container mx-auto p-4 md:p-8">
      <Card className="w-full bg-card dark:bg-card-dark border-0 mb-4 md:mb-8">
        <CardHeader>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
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
                Results-driven Full Stack Software Engineer with 7 years of experience architecting and delivering scalable web applications. Specialized in building robust backend systems using Node.js and Express.js while maintaining proficiency in frontend technologies like React and NextJs. Extensive experience with both SQL and NoSQL databases, and proven expertise in AWS cloud infrastructure.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card className="w-full bg-card dark:bg-card-dark border-0">
        <CardHeader>
          <CardTitle className="text-xl font-bold mb-4 text-primary dark:text-primary-dark">
            Professional Experience
          </CardTitle>
          <div className="relative">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-6 relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/20 dark:bg-primary-dark/20" />
                <div className="ml-4 md:ml-6">
                  <h3 className="font-semibold text-foreground dark:text-foreground-dark">
                    {exp.position} at {exp.company}
                  </h3>
                  <p className="text-muted-foreground dark:text-muted-foreground-dark text-sm mb-2">
                    {exp.location} | {exp.date}
                  </p>
                  <ul className="space-y-1">
                    {exp.summary.map((item, idx) => (
                      <li key={idx} className="text-foreground/80 dark:text-foreground-dark/80 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}