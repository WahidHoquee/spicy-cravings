import Head from "next/head";
import HomeScreen from "@/components/Home";
import SplashScreen from "@/components/Loader";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Spicy Cravings</title>
        <meta name="description" content="Something hot. Something tasty." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{loading ? <SplashScreen /> : <HomeScreen />}</main>
    </>
  );
}
