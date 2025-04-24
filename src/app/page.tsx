import About from "@/components/home/about";
import Header from "@/components/home/header";
import Packages from "@/components/home/packages";
import Products from "@/components/home/products";

export default function Home() {
  return (
    <>
      <Header />
      <Packages />
      <About />
      <Products />
    </>
  );
}
