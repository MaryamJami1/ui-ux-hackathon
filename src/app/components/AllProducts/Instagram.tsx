import { Inter } from 'next/font/google'
import Image from 'next/image'
import { Button } from "@/app/components/ui/Button"

const inter = Inter({ subsets: ['latin'] })

export default function NewsletterInstagram() {
  return (
    <section className={`${inter.className} max-w-7xl mx-auto px-4 pb-8 pt-[10rem] space-y-16`}>
      {/* Newsletter Section */}
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl text-center font-medium">
          Or Subscribe To The Newsletter
        </h2>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Email Address..."
            className="flex-1 text-base border-black focus:ring-0 rounded-none border-t-0 border-x-0 border-b-2 px-0 focus-visible:ring-0"
          />
          <Button 
            type="submit"
            variant="ghost"
            className="text-black hover:bg-transparent hover:text-gray-600 font-medium px-0"
          >
            SUBMIT
          </Button>
        </form>
      </div>

      {/* Instagram Section */}
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl text-center font-medium">
          Follow Products And Discounts On Instagram
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/category/Image (9).png"
              alt="Wooden stools with black legs"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/product/Image (9).png"
              alt="Beige office chair with wooden base"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/category/Image (10).png"
              alt="Pink accent chair"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/product/Image (5).png"
              alt="White classic dining chair"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/product/Image (10).png"
              alt="Orange modern chair"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/category/Image (11).png"
              alt="Green office chair"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

