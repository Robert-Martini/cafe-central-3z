import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Roasted with care</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] font-medium text-balance md:text-6xl lg:text-7xl">
            Coffee worth slowing down for.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Single-origin beans, brewed by hand in a quiet corner of the city. Pull up a chair and stay a while.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#about" className={cn(buttonVariants(), 'h-12 rounded-full px-7 text-sm')}>
              Our story
            </a>
            <a
              href="#visit"
              className={cn(buttonVariants({ variant: 'outline' }), 'h-12 rounded-full bg-transparent px-7 text-sm')}
            >
              Visit us
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[5/4]">
            <Image
              src="/images/hero-coffee.png"
              alt="A flat white with latte art on a wooden counter beside green plants"
              fill
              priority
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover object-[70%_center]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
