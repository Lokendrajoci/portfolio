import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Card className="w-full max-w-md overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/myimage.jpg?height=400&width=400"
                  alt="Developer portrait"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover aspect-square"
                />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Frontend Developer</h3>
            <p className="text-muted-foreground">
              I'm a passionate frontend developer with a keen eye for design and
              a commitment to creating intuitive user experiences. Currently
              seeking internship opportunities to apply and expand my skills.
            </p>
            <p className="text-muted-foreground">
              I specialize in building responsive web applications using modern
              JavaScript frameworks and libraries. My goal is to create clean,
              efficient, and accessible web experiences that solve real-world
              problems.
            </p>
            <div className="pt-4">
              <Button variant="outline" className="gap-2">
                <Link href="/lokendrajoshicv.pdf" download>
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
