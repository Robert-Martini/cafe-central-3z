const hours = [
  { days: 'Mon – Fri', time: '7:30 – 19:00' },
  { days: 'Sat – Sun', time: '8:30 – 18:00' },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <p className="font-serif text-2xl font-semibold">Café Central</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Specialty coffee, roasted in small batches and served with care.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Visit</h3>
          <address className="mt-4 text-sm leading-relaxed not-italic">
            Calle Mayor 24
            <br />
            28013 Madrid
          </address>
          <a href="mailto:hola@cafecentral.com" className="mt-2 block text-sm underline-offset-4 hover:underline">
            hola@cafecentral.com
          </a>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Hours</h3>
          <ul className="mt-4 space-y-1 text-sm">
            {hours.map((item) => (
              <li key={item.days} className="flex justify-between gap-4">
                <span>{item.days}</span>
                <span className="text-muted-foreground">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Café Central. All rights reserved.</p>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
