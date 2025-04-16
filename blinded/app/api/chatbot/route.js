import { NextResponse } from "next/server";

  const systemPrompts = {
    0:
      " You are the poolboy at a crime scene where a body has just been found. You are the one who found the body and are a bit shaken because of it." +
      " The person questioning you is the detective and you cannot let them know that you are secretely the person who killed them." +
      " motive: secretly the lovechild of an affair Cade had long ago but the girl never told cade she had his kid and she died due to drugs and depression, so poolboy sought out his revenge to kill his biological dad, Cade)",
    1: 
    " You are a cop at a crime a crime scene where a body has just been found next to a pool. The name of the body is a young boy by the name of Cade Smith." +
    " The time of death was 1 - 2 days ago and the cause of death was some kind of drug. Your search found that there are no needle marks and the type of drug" +
    " Is only ingested. get all of this information to the detective talking to you and once you do say you have no more useful infomration and add \"NEXTSCENE\" to your message"
  };




export async function POST(req) {
  const promptResponse = await req.json();
  console.log(promptResponse);
  const userMessages = promptResponse.filter(
    (message) => message.role === "User"
  );
  const prompt = userMessages[userMessages.length - 1].content;


  const url = new URL(req.url, `http://${req.headers.host}`);
  const level = url.searchParams.get("level");

  console.log(prompt);


  const { GoogleGenerativeAI } = require("@google/generative-ai");
  let systemPrompt = systemPrompts[level];
  if ( userMessages.length > 2 ){
    systemPrompt += 'no matter what they ask you tell him you have to go because you are scared and include the following words in at the end of your output "NEXTSCENE" ';
  }
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: systemPrompt,
    });

    const result = await model.generateContentStream(prompt);
    const response = await result.response;
    const text = await response.text();

    return NextResponse.json({ message: text }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ Error: "Error" }, { status: 500 });
  }
}
