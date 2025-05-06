import { NextResponse } from "next/server";
import FormData from "form-data";
import axios from "axios";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const formData = new FormData();
    formData.append("prompt", prompt);
    formData.append("output_format", "webp");

    const response = await axios.post(
      "https://api.stability.ai/v2beta/stable-image/generate/ultra",
      formData,
      {
        responseType: "arraybuffer",
        headers: {
          ...formData.getHeaders(),
          Authorization: `Bearer ${process.env.STABILITY_AI_API_KEY}`,
          Accept: "image/*",
        },
      }
    );

    if (response.status === 200) {
      const base64Image = Buffer.from(response.data).toString("base64");
      return NextResponse.json({
        image: `data:image/webp;base64,${base64Image}`,
      });
    } else {
      return NextResponse.json(
        { error: "Failed to generate image" },
        { status: response.status }
      );
    }
  } catch (err) {
    console.error("Image generation failed:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}