import { ArrowDown } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="top" className="min-h-screen flex flex-col justify-center px-6 pt-28">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr,280px] gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-balance">
              Quentin Lecomte
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl">
              Data Engineer
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
              Engineering graduate specialized in Artificial Intelligence, with expertise in{" "}
              <span className="italic text-foreground">Data Engineering</span>, Data Science, Cloud and DevOps.
              Based in France, with professional experience in Switzerland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="group">
                <a href="#about">
                  Learn more about me
                  <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View projects</a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border border-border bg-muted">
              <Image
                src="/img/1722965938896.jpg"
                alt="Portrait"
                fill
                priority
                sizes="(max-width: 768px) 192px, 224px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
