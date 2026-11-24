"use server";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({}); // Reads process.env.GEMINI_API_KEY on the server

export async function sendMessageToGemini(prompt: string): Promise<string> {
  const response = await ai.models.generateContent({
    model: "gemini-3.8-flash",
    contents: prompt,
  });

  return response.text ?? "No response received.";
}