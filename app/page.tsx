import Hero from "@/components/Hero";
import Range from "@/components/Range";


export default function Home() {
  return (
    <div className="flex w-[100%] flex-col 2xl:w-[1440px] items-center justify-center mx-auto overflow-hidden">
      <Hero/>
      <Range/>
    </div>
  );
}
