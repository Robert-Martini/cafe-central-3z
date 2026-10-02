import Image from 'next/image'

const highlights = [
  { value: '12', label: 'Origins on rotation' },
  { value: '48h', label: 'From roast to cup' },
  { value: '2014', label: 'Brewing since' },
]

export function Intro() {
  return (
    <section id="about" className="scroll-mt-20 bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src="/images/barista-pour.png"
            alt="A barista preparing a pour-over coffee with a gooseneck kettle"
            fill
            sizes="(min-width: 768px) 540px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Our story</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight font-medium text-balance md:text-5xl">
            A neighbourhood café built around the craft of coffee.
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              We work directly with small farms to source seasonal, traceable beans, then roast them in small
              batches to bring out what makes each one distinct.
            </p>
            <p>
              Our space is simple on purpose: warm wood, living plants, natural light, and a bar where you can
              watch every cup being made.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {highlights.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <dt className="text-xs leading-snug text-muted-foreground">{item.label}</dt>
                <dd className="order-first font-serif text-3xl font-medium md:text-4xl">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
