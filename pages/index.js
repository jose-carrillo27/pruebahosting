import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head></Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <h2>
            Evidencia de producto: GA10-220501097-AA6-EV01 archivos cargados en
            la plataforma de producción <span>-&gt;</span>
          </h2>
        </div>
        <div className={styles.center}>
          <h2></h2>
        </div>
        <div className={styles.center}>
          <h2>jose manuel carrillo</h2>
        </div>
      </main>
    </>
  );
}
