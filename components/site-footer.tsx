const hours = [
  { days: 'Lun – Vie', time: '7:30 – 19:00' },
  { days: 'Sáb – Dom', time: '8:30 – 18:00' },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <p className="font-serif text-2xl font-semibold text-foreground">Café Central</p>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-accent">Café de especialidad</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Café de especialidad, tostado en pequeños lotes y servido con dedicación.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Visitanos</h3>
          <address className="mt-4 text-sm leading-relaxed not-italic text-foreground">
            Av. de Mayo 1240
            <br />
            C1085 Buenos Aires
          </address>
          <a
            href="mailto:hola@cafecentral.com.ar"
            className="mt-2 block text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            hola@cafecentral.com.ar
          </a>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Horarios</h3>
          <ul className="mt-4 space-y-1 text-sm">
            {hours.map((item) => (
              <li key={item.days} className="flex justify-between gap-4">
                <span className="text-foreground">{item.days}</span>
                <span className="text-muted-foreground">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Café Central. Todos los derechos reservados.</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
