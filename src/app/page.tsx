import HomeAbout from "@/components/home/about";
import Header from "@/components/home/header";
import HomeCourses from "@/components/home/homeCourses";
import Introduction from "@/components/home/introduction";
import HomeManInTango from "@/components/home/manInTango";
import HomePhilosophy from "@/components/home/philosophy";
import HomeWomanInTango from "@/components/home/womanInTango";
// import HomeProducts from "@/components/home/products";

export default function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <HomeManInTango />
      <HomeWomanInTango />
      <HomePhilosophy />
      <HomeCourses />
      <HomeAbout />
      {/* <HomeProducts /> */}
    </>
  );
}
