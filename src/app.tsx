import { Iphone } from "./components/Iphone";
import { Navbar } from "./components/navbar";
import { VisionPro } from "./components/vision-pro";

export function App() {
  return (
    <main className="">
      <div className="">
        <Navbar />
      </div>
      <VisionPro />
      <div className="my-8"/>
      <Iphone />
    </main>
  );
}
