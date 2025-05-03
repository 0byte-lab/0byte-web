import { BrainCircuit, Newspaper, Code } from "lucide-react";
import Image from "next/image";
import brain from '../../../public/assets/brain.png'
import news from '../../../public/assets/news.png'
import code from '../../../public/assets/code.png'

export const useCases = [
    {
        Icon: BrainCircuit,
        title: "AI Model Providers",
        description:
            "Embed ZK-proofs into every generated asset — proving origin without revealing prompt or model internals.",
        background: (
            <Image src={brain} className="object-cover p-4 opacity-20" />
        )
    },
    {
        Icon: Newspaper,
        title: "Newsrooms & Media",
        description:
            "Ensure that AI-generated visuals or audio used in journalism are cryptographically verified and timestamped.",
        background: (
            <Image src={news} className="object-contain h-full pt-4 opacity-20" />
        )
    },
    {
        Icon: Code,
        title: "Developer Platforms",
        description:
            "Use our SDK and APIs to offer built-in content authenticity — no blockchain knowledge required.",
        background: (
            <Image src={code} className="object-cover p-4 opacity-20" />   
        )
    },
];