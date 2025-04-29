import Image from "next/image";
import tamperEvident from '../../../public/assets/tamper-evident.png';
import { IconShieldCheckFilled } from "@tabler/icons-react";
import { Box, Feather, FileWarning, Share2 } from "lucide-react";



export const features = [
  {
    Icon: IconShieldCheckFilled,
    name: "Zero-Knowledge Embedded Proofs",
    description:
      "Prove when and how content was generated — without revealing prompts, models, or internal logic.",
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: FileWarning,
    name: "Tamper-Evident Media",
    description:
      "Embedded proofs break on edits — alerting platforms and users of manipulation or spoofing.",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    // background: (
    //   <Image src={tamperEvident} className=" bg-cover" />
    // )
  },
  {
    Icon: Feather,
    name: "Portable & Metadata-Free",
    description:
      "No reliance on metadata. Proofs stay intact across reposts, screenshots, and platforms.",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Box,
    name: "On-Chain Anchoring",
    description: "Every proof is immutably anchored on-chain for transparent, timestamped verification — ensuring end-to-end content integrity.",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Share2,
    name: "Plug-and-Play SDK",
    description:
      "Embed cryptographic trust into your AI workflow in minutes. Fully developer-friendly.",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];