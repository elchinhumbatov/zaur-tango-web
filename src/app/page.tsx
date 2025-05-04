import HomeAbout from "@/components/home/about";
import Header from "@/components/home/header";
import HomePackages from "@/components/home/packages";
import HomeProducts from "@/components/home/products";

export default function Home() {
  return (
    <>
      <Header />
      <HomePackages />
      <HomeAbout />
      <HomeProducts />
    </>
  );
}
