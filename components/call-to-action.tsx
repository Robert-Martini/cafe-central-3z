import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function CallToAction() {
  return (
    <section id="visit" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="rounded-2xl bg-primary px-6 py-14 text-center text-primary-foreground md:px-16 md:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.3em] opacity-70">Come say hello</p>
        <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-tight font-medium text-balance md:text-5xl">
          Your table is waiting. The first pour is on us.
        </h2>
        <p className="mx-auto mt-5 max-w-lg leading-relaxed opacity-80">
          Open every day from 7:30 am. Find us at Calle Mayor 24 — just look for the green door.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="https://maps.google.com/?q=Calle+Mayor+24+Madrid"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'secondary' }), 'h-12 rounded-full px-7 text-sm')}
          >
            Get directions
          </a>
          <a
            href="mailto:hola@cafecentral.com"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'h-12 rounded-full border-primary-foreground/40 bg-transparent px-7 text-sm text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground',
            )}
          >
            Email us
          </a>
        </div>
      </div>
    </section>
  )
}
