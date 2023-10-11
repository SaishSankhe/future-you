import closings from "@/data/closings";
import messages from "@/data/messages";
import salutations from "@/data/salutations";

const TOTAL = {
  messages: messages.length - 1,
  closings: closings.length - 1,
  salutations: salutations.length - 1,
};

const getRandom = (max) => {
  return Math.floor(Math.random() * max);
};

export default function getNote() {
  return {
    salutation: salutations[getRandom(TOTAL.salutations)],
    body: messages[getRandom(TOTAL.messages)],
    closing: closings[getRandom(TOTAL.closings)],
  };
}
