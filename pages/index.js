import ModeButton from "@/components/ModeButton";
import Note from "@/components/Note";
import getNote from "@/utils/getRandomNote";

import { Delius } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";

const delius = Delius({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const note = getNote();
    setNote(note);
    setLoading(false);
  }, []);

  const handleButtonClick = () => {
    const newNote = getNote();
    setNote(newNote);
  };

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
        <ModeButton />
        <div className="note flex flex-col mx-10 md:m-auto md:max-w-2xl text-2xl md:text-3xl min-h-screen">
          {loading && <p className="m-auto">Loading...</p>}
          {!loading && <Note note={note} />}
        </div>
      </main>
    </>
  );
}
