import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { PlusIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion"

const items = [
  {
    id: "1",
    title: "What is 0byte?",
    content:
      "0byte is a cryptographic infrastructure layer that embeds invisible, tamper-evident zero-knowledge proofs into AI-generated content—without revealing prompts, models, or metadata. Think of it as SSL for AI content.",
  },
  {
    id: "2",
    title: "How does 0byte prevent content manipulation?",
    content:
      "0byte embeds cryptographic proofs directly into the content. Any modification—whether it's cropping, editing, or tampering—will invalidate the proof, alerting platforms or consumers that the media is no longer trustworthy.",
  },
  {
    id: "3",
    title: "Do I need to share prompts or models to verify content?",
    content:
      "No. 0byte uses zero-knowledge cryptography to prove how and when content was generated without exposing any sensitive input, model, or logic.",
  },
  {
    id: "4",
    title: "Does 0byte store anything on-chain?",
    content:
      "Only timestamped, hashed commitments of the proof are anchored on-chain (e.g. Solana). No actual media or private data is stored, ensuring user privacy and minimal cost.",
  },
  {
    id: "5",
    title: "Can 0byte be used across platforms and formats?",
    content:
      "Yes. Proofs are embedded in a portable, metadata-free format that survives reposts, screenshots, and transfers across platforms while maintaining verifiability.",
  },
  {
    id: "6",
    title: "How do developers integrate 0byte?",
    content:
      "Using our plug-and-play SDK. It takes just minutes to embed verifiable proofs into your AI generation pipeline, whether you're building with images, text, or audio.",
  },
  {
    id: "7",
    title: "What types of content does 0byte support?",
    content:
      "Currently, 0byte supports image and video outputs, with support for text and audio coming soon. All content types retain proof integrity even when circulated offline or in compressed form.",
  },
  {
    id: "8",
    title: "Why does this matter for AI-generated media?",
    content:
      "As synthetic media floods the internet, platforms and users need a way to distinguish authentic, unaltered content from manipulated or spoofed versions. 0byte makes this possible without harming privacy or creative freedom.",
  },
  {
    id: "9",
    title: "Is verification open to anyone?",
    content:
      "Yes. Anyone can verify proof integrity through our API or verification page—no account or platform lock-in required.",
  },
  {
    id: "10",
    title: "Does 0byte slow down content generation?",
    content:
      "Not at all. Our system is designed for minimal computational overhead, ensuring real-time or near-instant integration into AI workflows."
  }
];

export default function FaqAccordion() {
  return (
    <div className="space-y-4 max-w-3xl mx-auto py-10">
      {/* <h2 className="text-xl font-bold">W/ plus-minus</h2> */}
      <Accordion type="single" collapsible className="w-full" defaultValue="1">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-2">
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                {item.title}
                <PlusIcon
                  size={16}
                  className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="text-muted-foreground pb-2">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
