"use client";
import Prompt from "@/data/Prompt";
// import axios from "axios";

export default function Home() {
  const messages = { content: "make a new app", role: "user" };

  const handleSubmit = async () => {
    const aiPrompt = messages.content + " " + Prompt.CODE_GEN_PROMPT;
    // const fetch = await axios.post("api/ai-code", {
    //   prompt: aiPrompt,
    // });
    const prompt = {
      // prompt: "very well let's see if this works",
      prompt: aiPrompt,
    };
    console.log(Prompt.CODE_GEN_PROMPT);
    const res = await fetch("api/ai-code", {
      method: "POST",
      body: JSON.stringify(prompt),
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
