import visionPro from "@/assets/home/vision/hero_apple_vision_pro.jpg";
import visionProLogo from "@/assets/home/vision/hero_logo_apple_vision_pro.png";
import { HomeLinks } from "@/components/home-links";

export function VisionPro() {
  return (
    <>
      <div className="bg-transparent w-full h-[600px] text-center flex justify-end flex-col z-10 relative">
        <div className="flex flex-col gap-2">
          <h2 className="w-52 mx-auto">
            <span className="sr-only">Vision Pro</span>
            <img src={visionProLogo} alt="Vision Pro" className="" />
          </h2>
          <h2 className="text-center text-stone-800 text-4xl">
            Welcome to the era of spatial computing.
          </h2>
          <HomeLinks />
        </div>
      </div>
      <img
        src={visionPro}
        alt="apple products"
        className="bg-inherit bg-center mx-auto absolute bottom-0 top-0 left-0 right-0 z-[1]"
      />
    </>
  );
}