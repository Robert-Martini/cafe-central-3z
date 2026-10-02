import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function CallToAction() {
  return (
    <section id="visit" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="rounded-2xl border border-border bg-card px-6 py-12 md:px-14 md:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Vení a visitarnos</p>
        <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight font-medium text-balance text-foreground md:text-5xl">
          Tu mesa te espera. El primer café corre por nuestra cuenta.
        </h2>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
          Abrimos todos los días desde las 7:30. Estamos en Av. de Mayo 1240, Buenos Aires — buscá la puerta de
          madera.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://maps.google.com/?q=Av.+de+Mayo+1240+Buenos+Aires"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants(), 'h-12 rounded-full px-7 text-sm')}
          >
            Cómo llegar
          </a>
          <a
            href="mailto:hola@cafecentral.com.ar"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'h-12 rounded-full border-primary/30 bg-transparent px-7 text-sm text-foreground hover:bg-secondary',
            )}
          >
            Escribinos
          </a>
        </div>
      </div>
    </section>
  )
}
