import Categories from "./components/category/Categories";
import CompanyLogos from "./components/company/Company";
import FeaturedProducts from "./components/feature/Product";
import Header from "./components/hero-section";
import HotProduct from "./components/hotproducts/HotProduct";
import OurProduct from "./components/ourproducts/OurProduct";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:px-[6rem]">
      <Header />
      <CompanyLogos/>
      <FeaturedProducts/>
      <Categories/>
      <HotProduct/>
      <OurProduct/>
    </main>
  )
}

