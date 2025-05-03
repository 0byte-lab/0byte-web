import Image from "next/image";
import tamperEvident from '../../../public/assets/tamper-evident.png';
import { IconShieldCheckFilled } from "@tabler/icons-react";
import { Box, Feather, FileWarning, Share2 } from "lucide-react";
import zkp from '../../../public/assets/zkp.png';
import tamper from '../../../public/assets/tamper.png';
import solana from '../../../public/assets/solana.png';
import block from '../../../public/assets/block.png';
import plug from '../../../public/assets/plug.png';



export const features = [
  {
    // Icon: IconShieldCheckFilled,
    name: "Zero-Knowledge Embedded Proofs",
    description:
      "Prove when and how content was generated — without revealing prompts, models, or internal logic.",
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 lg:h-[740px]",
    background: (
     <Image src={zkp} className="p-6 object-contain" /> 
    )
  },
  {
    // Icon: FileWarning,
    name: "Tamper-Evident Media",
    description:
      "Embedded proofs break on edits — alerting platforms and users of manipulation or spoofing.",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    background: (
      <Image src={tamper} className=" p-6 object-contain" />
    )
  },
  {
    // Icon: Feather,
    name: "Portable & Metadata-Free",
    description:
      "No reliance on metadata. Proofs stay intact across reposts, screenshots, and platforms.",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    background: (
      <Image src={block} className=" p-6 object-contain" />
    )
  },
  {
    // Icon: Box,
    name: "On-Chain Anchoring",
    description: "Every proof is immutably anchored on-chain for transparent, timestamped verification — ensuring end-to-end content integrity.",
    className: "lg:col-start-4 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    background: (
      <Image src={solana} className="h-full mx-auto object-cover" />
    )
  },
  {
    // Icon: Share2,
    name: "Plug-and-Play SDK",
    description:
      "Embed cryptographic trust into your AI workflow in minutes. Fully developer-friendly.",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    background: (
      <Image src={plug} className=" p-4 object-contain" />
    )
  },
];