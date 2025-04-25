import {
  Box,
  Code,
  Database,
  FileJson,
  Github,
  Globe,
  Layout,
  Layers,
  Network,
  Palette,
  Server,
  Smartphone,
  FileCode,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Skills() {
  const skills = [
    { name: "HTML5", icon: <Globe className="h-8 w-8" /> },
    { name: "CSS3", icon: <Palette className="h-8 w-8" /> },
    { name: "JavaScript", icon: <FileJson className="h-8 w-8" /> },
    { name: "Bootstrap", icon: <Layers className="h-8 w-8 text-purple-500" /> },
    { name: "shadcn/ui", icon: <Box className="h-8 w-8" /> },
    { name: "React", icon: <Code className="h-8 w-8" /> },
    { name: "Next.js", icon: <Layout className="h-8 w-8" /> },
    { name: "Tailwind CSS", icon: <Layers className="h-8 w-8" /> },
    { name: "Responsive Design", icon: <Smartphone className="h-8 w-8" /> },
    { name: "Git & GitHub", icon: <Github className="h-8 w-8" /> },
    { name: "Node.js", icon: <Server className="h-8 w-8" /> },
    { name: "Express", icon: <Server className="h-8 w-8 rotate-45" /> },
    { name: "MongoDB", icon: <Database className="h-8 w-8" /> },
    { name: "Python", icon: <FileCode className="h-8 w-8" /> },
    { name: "C", icon: <Code className="h-8 w-8" /> },
    { name: "C++", icon: <FileCode className="h-8 w-8" /> },
    { name: "DSA", icon: <Network className="h-8 w-8" /> },
   
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="border-primary/20 hover:border-primary transition-colors"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                <div className="text-primary mb-3">{skill.icon}</div>
                <h3 className="font-medium">{skill.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
