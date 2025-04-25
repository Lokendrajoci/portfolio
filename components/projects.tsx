import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "Movix - Movie Search App",
      description:
        "Millions of movies, TV shows, and people to discover. Explore Now.",
      image: "/Movix.png?height=300&width=500",
      tags: ["React", "Tailwind CSS", "API Integration", "Responsive Design"],
      demoLink: "https://movie-site-chi-one.vercel.app/",
      repoLink: "https://github.com/Lokendrajoci/Movie-Site",
    },
    {
      title: "Invoice Generator",
      description:
        "Automates invoice creation with client details, pricing, taxes, and formatting.",
      image: "/invoice.png?height=300&width=500",
      tags: ["React", "npm", "Tailwind CSS", "Responsive Design"],
      demoLink: "https://invoice-generator-rho-ten.vercel.app/",
      repoLink: "https://github.com/Lokendrajoci/invoice-generator",
    },
    {
      title: "Rapido clone",
      description:
        "App for quick bike taxi bookings, fast rides, and affordable transportation.",

      image: "/rapido.png?height=300&width=500",
      tags: ["Next.js", "Tailwind CSS", "Responsive Design"],
      demoLink: "https://rapido-clone-nu.vercel.app/",
      repoLink: "https://github.com/Lokendrajoci/Rapido-clone",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="mt-auto flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
