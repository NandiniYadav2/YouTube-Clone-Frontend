import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "../Components/VideoCard";
import { VideoGrid } from "@/Components/VideoGrid";
import { AppBar } from "@/Components/AppBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* <VideoCard
      title={"지민 (Jimin) Closer Than This Official MV"} 
      author={"Hybe Labels"}
      image={"HybeLogo.jpg"}
      thumbImage={"PhotoJimin.png"}
      views={"146M"}
      timestamp={"13 days ago"}
      ></VideoCard> */}
      <AppBar/>
      <VideoGrid/>

    </div>
  )}

 
   