import getNote from "@/utils/getRandomNote";
import { Architects_Daughter } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";

const architectsDaughter = Architects_Daughter({
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
        {/* <meta property="og:image" content={"preview.png"} /> */}
      </Head>
      <main
        className={`flex flex-col mx-10 md:m-auto md:max-w-lg text-2xl min-h-screen ${architectsDaughter.className}`}
      >
        {loading && <p className="m-auto">Loading...</p>}
        {!loading && (
          <div className="m-auto leading-normal md:leading-8">
            <p>{note.salutation},</p>
            <p className="my-4">{note.note}</p>
            <p>{note.closing},</p>
            <p>Future you</p>
          </div>
        )}
        <br />
        {/* <button className="border border-black p-2" onClick={handleButtonClick}>
        Generate Random Name
      </button> */}
      </main>
    </>
  );
}
