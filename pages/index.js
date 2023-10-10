import getNote from "@/utils/getRandomNote";
import { Architects_Daughter, Shantell_Sans } from "next/font/google";
import { useEffect, useState } from "react";

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

const shantellSans = Shantell_Sans({
  subsets: ["latin"],
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
    <main
      className={`flex flex-col mx-10 md:m-auto md:max-w-lg text-2xl min-h-screen ${architectsDaughter.className}`}
    >
      {loading && <p>Loading...</p>}
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
  );
}
