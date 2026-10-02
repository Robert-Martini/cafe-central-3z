import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Intro } from '@/components/intro'
import { CallToAction } from '@/components/call-to-action'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <CallToAction />
      </main>
      <SiteFooter />
    </>
  )
}
