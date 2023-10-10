import closings from "@/data/closings";
import notes from "@/data/notes";
import salutations from "@/data/salutations";

const TOTAL = {
  notes: notes.length - 1,
  closings: closings.length - 1,
  salutations: salutations.length - 1,
};

const getRandom = (max) => {
  return Math.floor(Math.random() * max);
};

export default function getNote() {
  return {
    salutation: salutations[getRandom(TOTAL.salutations)],
    note: notes[getRandom(TOTAL.notes)],
    closing: closings[getRandom(TOTAL.closings)],
  };
}
