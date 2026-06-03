import AboutHome from "@/components/about-home";
import BlogHome from "@/components/blog-home";
import Hero from "@/components/hero";
import OurImpact from "@/components/our-impact";
import TimelineComponent from "@/components/timeline";

export default async function Page() {
  return (
    <>
      {/* TODO: delete all the height constants from all the sections */}
      <section className="space-y-60">
        <Hero />
        <AboutHome />
        <OurImpact />
        <TimelineComponent />
        <BlogHome />
      </section>
    </>
  );
}
