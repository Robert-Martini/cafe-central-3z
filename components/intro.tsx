import Image from 'next/image'

const highlights = [
  { value: '12', label: 'Orígenes en rotación' },
  { value: '48 h', label: 'Del tueste a la taza' },
  { value: '2014', label: 'Preparando café desde' },
]

export function Intro() {
  return (
    <section id="about" className="scroll-mt-20 border-y border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
          <Image
            src="/images/barista-pour.png"
            alt="Un barista preparando un café filtrado con una pava de pico fino"
            fill
            sizes="(min-width: 768px) 540px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Nuestra historia</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight font-medium text-balance text-foreground md:text-5xl">
            Un café de barrio construido alrededor del buen café.
          </h2>
          <div className="mt-6 max-w-md space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Trabajamos directamente con pequeños productores para conseguir granos de estación y trazables, y los
              tostamos en lotes chicos para resaltar lo que hace único a cada uno.
            </p>
            <p>
              Nuestro espacio es simple a propósito: madera cálida, plantas, luz natural y una barra donde podés ver
              cómo se prepara cada taza.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {highlights.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <dt className="text-xs leading-snug text-muted-foreground">{item.label}</dt>
                <dd className="order-first font-serif text-3xl font-medium text-primary md:text-4xl">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
