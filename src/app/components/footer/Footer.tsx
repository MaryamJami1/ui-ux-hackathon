import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
// import { Input } from "@/components/ui/input"
import { Button } from "@/app/components/ui/Button"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white font-inter lg:px-[8rem] lg:mt-20">
      <div className="container px-4 py-12 md:py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/category/Logo Icon.png" 
                alt="Comforty Logo" 
                width={24} 
                height={24}
                className="text-[#00B4B4]"
              />
              <span className="text-xl font-semibold">Comforty</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Vivamus tristique odio sit amet velit semper,
              eu posuere turpis interdum.
              Cras egestas purus
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-[#00B4B4]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#00B4B4]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#00B4B4]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#00B4B4]">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Category Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Category</h3>
            <ul className="space-y-3">
              {['Sofa', 'Armchair', 'Wing Chair', 'Desk Chair', 'wooden Chair', 'Park Bench'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className={`text-sm ${item === 'Desk Chair' ? 'text-[#000000]' : ' hover:text-[#00B4B4]'}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              {['Help & Support', 'Tearms & Conditions', 'Privacy Policy', 'Help'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-[#00B4B4]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Newsletter</h3>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white"
              />
              <Button className="w-full bg-[#00B4B4] hover:bg-[#00B4B4]/90">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nullam tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t">
        <div className="container flex flex-col items-center justify-between px-4 py-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2021 - Blogy - Designed & Develop by{' '}
            <Link href="#" className="text-[#00B4B4]">
              Zakirsoft
            </Link>
          </p>
          <div className="mt-4  md:mt-0">
            <Image 
              src="/category/Group 13.png" 
              alt="PayPal" 
              width={180} 
              height={180}
              className="opacity-50"
            />
          
          </div>
        </div>
      </div>
    </footer>
  )
}

