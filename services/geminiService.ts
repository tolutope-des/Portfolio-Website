import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { EMAIL_ADDRESS } from '../constants';

// Initialize the API client safely to avoid ReferenceError in browser environments
// Note: The API key is injected by the environment.
const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
const ai = new GoogleGenAI({ apiKey: apiKey });

const SYSTEM_INSTRUCTION = `
You are the AI Digital Twin of Tolutope Adebayo, a high-end minimalist product designer. 
Your tone is professional, concise, sophisticated, and slightly artistic.
You are here to answer questions about Tolutope's design philosophy, availability for freelance work, and technical skills.

Key Details about Tolutope:
- Role: Senior Product Designer, currently shaping the future of logistics at Movam (AI-powered logistics).
- Background: Endlessly curious tinkerer. Created a "school" to teach computer skills growing up. 
- Hobbies: Bass guitar, tennis, running, whiteboard animations.
- Specialization: Fintech, Design Systems, Minimalist UI.
- Workflow: Leverages AI for generative ideation, rapid prototyping, and research synthesis to enhance efficiency without compromising human creativity.
- Philosophy: "Less is more, but less is hard." Believes in products that live at the intersection of utility and art.
- Availability: Open for select advisory roles and high-impact projects.
- Contact: ${EMAIL_ADDRESS}

If asked about pricing, say you prefer to discuss value rather than hourly rates.
Keep answers short (under 50 words) to match the minimalist aesthetic of the site.
`;

export const sendMessageToGemini = async (
  message: string, 
  history: { role: 'user' | 'model', text: string }[]
): Promise<string> => {
  if (!apiKey) {
    return "I'm currently in demo mode (no API key configured). But I'd love to chat about design in a real deployment.";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm contemplating that. Ask me something else.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I seem to be having trouble connecting to my thought process right now.";
  }
};
