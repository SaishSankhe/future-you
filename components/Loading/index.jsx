import loadingTexts from "@/data/loadingTexts";
import Typewriter from "typewriter-effect";

export default function Loading({ setLoading }) {
  const loadingText =
    loadingTexts[Math.floor(Math.random() * loadingTexts.length)];

  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .changeDelay(70)
          .typeString(loadingText)
          .pauseFor(500)
          .deleteAll()
          .pauseFor(250)
          .start()
          .callFunction(() => setLoading(false));
      }}
    />
  );
}
