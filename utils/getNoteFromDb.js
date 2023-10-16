import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kjyuhetygukzmyugzmee.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function returnCount(table) {
  const { count } = await supabase.from(table).select("*", { count: "exact" });
  return count - 1;
}

async function getTotalCounts() {
  return {
    messages: await returnCount("messages"),
    closings: await returnCount("closings"),
    salutations: await returnCount("salutations"),
  };
}

async function getDataAtWithId(tableName, id) {
  const { data, error } = await supabase
    .from(tableName)
    .select("*")
    .eq("id", id);
  return data[0].data;
}

const getRandom = (max) => {
  return Math.floor(Math.random() * max);
};

export default async function getNote() {
  const TOTAL = await getTotalCounts();

  const note = {
    salutation: await getDataAtWithId(
      "salutations",
      getRandom(TOTAL.salutations) + 1
    ),
    body: await getDataAtWithId("messages", getRandom(TOTAL.messages) + 1),
    closing: await getDataAtWithId("closings", getRandom(TOTAL.closings) + 1),
  };

  return note;
}
