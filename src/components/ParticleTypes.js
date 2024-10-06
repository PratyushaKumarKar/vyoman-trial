import Image from 'next/image'

const particleTypes = [
  {
    name: 'BLACK CARBON',
    description: 'Black carbon is the sooty black material emitted from gas and diesel engines, coal-fired power plants, and other sources that burn fossil fuel.',
    image: '/black-carbon.jpg',
  },
  {
    name: 'PARTICULATE MATTER',
    description: 'Particulate matter (PM) consists of tiny solid particles and liquid droplets in the air. PM2.5 and PM10 are affecting air quality and health.',
    image: '/particulate-matter.jpg',
  },
  {
    name: 'OZONE PARTICLE',
    description: 'Ground-level ozone is a harmful secondary pollutant formed when two primary pollutants react in sunlight and stagnant air.',
    image: '/ozone-particle.jpg',
  },
]

export default function ParticleTypes() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {particleTypes.map((particle, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={particle.image}
                  alt={particle.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{particle.name}</h3>
              <p className="text-sm">{particle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}