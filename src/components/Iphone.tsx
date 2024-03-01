
import iphoneHero from "@/assets/home/iphone/hero_iphone15.jpg";
export function Iphone() {
  return (
    <div>
      <img src={iphoneHero} alt="iphone hero" className="relative bottom-0 left-0 w-full z-[1]"/>

      <div className="flex flex-col items-center -mt-[700px] relative z-10 gap-2">
        <h1 className="text-7xl text-white font-bold">iPhone 15 Pro.</h1>
        <p className="text-4xl text-gray-300">Titanium. So strong. So light. So Pro.</p>
      </div>

    </div>
  );
}