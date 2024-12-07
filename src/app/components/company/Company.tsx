import Image from 'next/image'

export default function CompanyLogos() {
  const companies = [
    { name: 'Zapier', logo: '/heroSection/Logo.png' },
    { name: 'Pipedrive', logo: '/heroSection/Logo (1).png' },
    { name: 'CIB Bank', logo: '/heroSection/Logo (2).png' },
    { name: 'Company', logo: '/heroSection/Logo (3).png' },
    { name: 'Burnt Toast', logo: '/heroSection/Logo (4).png' },
    { name: 'PandaDoc', logo: '/heroSection/Logo (5).png' },
    { name: 'MOZ', logo: '/heroSection/Logo (6).png' },
  ]

  return (
    <section className="w-full bg-white pb-20 pt-[7rem] font-inter">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={60}
                height={90}
                className="h-[80px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

