import HomeAbout from "@/components/home/about";
import Header from "@/components/home/header";
import HomeCourses from "@/components/home/courses";
import HomeProducts from "@/components/home/products";

export default function Home() {
  return (
    <>
      <Header />
      <HomeCourses />
      <HomeAbout />
      <HomeProducts />
    </>
  );
}
