import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000000] ">
      <Navbar/>
   <div class="container mx-auto px-12 p-y4">
   <Hero/> 
  
    </div> 
    <Footer/>
    </main>
  );
}
