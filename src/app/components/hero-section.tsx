import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'

export default function Header() {
  return (
    <header className="relative w-full overflow-hidden bg-[#F0F2F3] px-4 py-12 md:px-6 lg:px-24 xl:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-4">
            <span className="font-inter text-sm tracking-wide text-[#2A2754]">
              WELCOME TO CHAIRY
            </span>
            <h1 className="font-inter text-4xl font-bold tracking-tight text-[#2A2754] md:text-5xl lg:text-6xl lg:leading-[1.2]">
              Best Furniture Collection For Your Interior.
            </h1>
            <Link
              href="#"
              className="group mt-4 inline-flex items-center gap-2 rounded-md bg-[#00BFB3] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#00BFB3]/90"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="relative h-[500px] w-full lg:h-[600px]">
            <Image
              src="/heroSection/Product Image.png"
              alt="Modern armchair"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  )
}

