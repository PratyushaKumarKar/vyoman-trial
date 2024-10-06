import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Research from '@/components/Research'
import ParticleTypes from '@/components/ParticleTypes'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Research />
      <ParticleTypes />
    </main>
  )
}