import Loading from "@/components/Loading";
import Note from "@/components/Note";
import getNote from "@/utils/getNoteFromDb";
import dynamic from "next/dynamic";
import { Delius } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";
const ThemeToggle = dynamic(() => import("@/components/ThemeToggle"), {
  ssr: false,
});

const delius = Delius({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNoteFromDb = async () => {
      const note = await getNote();
      setNote(note);
    };
    getNoteFromDb();
  }, []);

  // const handleButtonClick = () => {
  //   const newNote = getNote();
  //   setNote(newNote);
  // };

  return (
    <>
      <Head>
        <title>From, Future You</title>
        <meta property="og:url" content="https://fromfutureyou.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="From, Future You" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="A note of inspiration from future you!"
        />
        <meta
          property="og:image:alt"
          content="A note of inspiration from future you!"
        />
        <meta property="og:image" content={"linkpreview.jpg"} />
      </Head>
      <main className={`${delius.className}`}>
        <ThemeToggle />

        <div className="flex flex-col justify-center items-center mx-10 md:m-auto md:max-w-xl text-2xl md:text-2xl min-h-screen">
          {loading ? <Loading setLoading={setLoading} /> : <Note note={note} />}
        </div>
      </main>
    </>
  );
}
