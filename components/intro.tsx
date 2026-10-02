import Image from 'next/image'

const highlights = [
  { value: '12', label: 'Orígenes en rotación' },
  { value: '48 h', label: 'Del tueste a la taza' },
  { value: '2014', label: 'Preparando café desde' },
]

export function Intro() {
  return (
    <section id="about" className="scroll-mt-20 border-y border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:gap-16 md:py-16">
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
            Un lugar para tomar un buen café y quedarse un rato más.
          </h2>
          <div className="mt-6 max-w-md space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              En Café Central creemos que un buen café también es una forma de hacer una pausa. Elegimos nuestros granos con cuidado y buscamos que cada taza tenga su propio carácter.
            </p>
            <p>
              Un espacio cálido, sencillo y pensado para disfrutar sin apuro, ya sea para empezar el día, encontrarse con alguien o simplemente sentarse a tomar un buen café.
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-6">
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
