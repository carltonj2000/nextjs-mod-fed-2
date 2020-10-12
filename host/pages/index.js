import Head from "next/head";
import DogImage from "../components/DogImage";
import DogCaptionRemote from "../components/DogCaptionRemote";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Host</div>
      <DogImage />
      <DogCaptionRemote name="Fredo" />
    </div>
  );
}
