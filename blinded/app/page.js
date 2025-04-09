import Image from "next/image";
import styles from "./page.module.css";
import { localFont } from 'next/font/local'

const titlePageFont = localFont({
  src: "fonts/VCR_OSD_MONO_1.001.ttf",
});

export default function Home() {
  return (
    <div style={{ backgroundImage: "url(login_background.png)", width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div className="centerBox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div className="Title" style={{ color: "white", fontSize:"10vh", font: titlePageFont}}> BLINDED </div>
        <div className="Buttons"></div>
      </div>
    </div>
  );
}
