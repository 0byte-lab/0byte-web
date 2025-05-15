import React from "react";
import solana from "../../public/assets/solana-logo.png"
import Image from "next/image";
import logo from "../../public/logos/logo-dark.png"
export default function ArchitectureGrid() {
  return (
    <div className="grid grid-cols-3 min-h-screen bg-background border rounded-lg border-dashed p-4 font-mono">
      {/* Left Column */}
      <div className="flex flex-col justify-between items-center h-full border rounded-l-lg">
        <div className="border border-dashed my-5 p-3 h-fit w-fit rounded-lg">

          <div className="flex flex-col lg:h-60 lg:w-60 opacity-60 w-auto bg-neutral-900 justify-between border gap-4">
            <Image
              src={logo}
              alt="Logo"
              className="h-20 grayscale w-auto ml-auto opacity-70" // <-- Constrain height, let width auto-scale
            />
            <div className="flex items-center gap-3 text-muted-foreground px-6 py-2 text-sm w-full justify-start"><div className="h-2 w-2 rounded-full bg-green-500" /> 0BYTE </div>
          </div>
        </div>
        <div>
          <h1 className="text-xs px-4 text-muted-foreground opacity-70">Brand layer — <br /> Represents the 0byte identity and SDK entry point.</h1>
        </div>
        <div className="h-60 w-full relative border-t overflow-hidden bg-black">
          <div className="absolute inset-0 z-0" style={{
            backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.09) 0px, rgba(255,255,255,0.09) 1px, transparent 1px, transparent 8px)"
          }} />
        </div>
      </div>

      {/* Middle Column */}
      <div className="flex flex-col items-center justify-center gap-6 border-r border-white/10">
        <div className="border-b border-t flex flex-col justify-between text-muted-foreground px-6 py-2 text-sm h-full w-full">
          <h1 className="opacity-70">PYTHON SDK</h1>
          <p className="text-xs text-muted-foreground opacity-70">The interface developers interact with. Controls everything under the hood.
          </p>
        </div>
        <div className="border-t border-b flex flex-col justify-between text-muted-foreground px-6 py-2 text-sm h-full w-full">
          <h1 className="opacity-70">GEN AI</h1>
          <p className="text-xs text-muted-foreground opacity-70">Handles generation metadata — model name, prompt, output hash.</p>
        </div>
        <div className="border-t border-b flex flex-col justify-between text-muted-foreground px-6 py-2 text-sm h-full w-full">
          <h1 className="opacity-70">PROOF ENGINE</h1>
          <p className="text-xs text-muted-foreground opacity-70">Generates zero-knowledge proofs for the media.</p>
        </div>
        <div className="border-t border-b flex flex-col justify-between  text-muted-foreground px-6 py-2 text-sm h-full w-full">
          <h1 className="opacity-70">ZKP</h1>
          <p className="text-xs text-muted-foreground opacity-70">Core cryptographic layer — generates and validates the zero-knowledge proofs.</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col flex-wrap border-t border-b border-r rounded-r-lg text-muted-foreground py-6">
        <div className="mt-4 flex flex-col h-full justify-between w-full flex-wrap text-center">
          <div className="flex">
            <div className="grid grid-cols-3 px-4 gap-2">
              <div className="h-6 w-6 rounded-full border bg-neutral-900 opacity-80" />
              <div className="h-6 w-6 rounded-full border bg-neutral-900 opacity-60" />
              <div className="h-6 w-6 rounded-full border bg-neutral-900 opacity-50" />
              <div className="h-6 w-6 rounded-full border bg-neutral-900 opacity-40" />
              <div className="h-6 w-6 rounded-full border bg-neutral-900 opacity-30" />
              <div className="h-6 w-6 rounded-full border bg-neutral-900 opacity-20" />
            </div>
            <Image src={solana} alt="Solana" className="w-32 grayscale opacity-70 ml-auto px-4 mb-2" />
          </div>
          <div className="text-3xl w-full">
            <p className="text-xs text-muted-foreground ml-auto opacity-70 text-left px-4">Final anchoring layer. Verifies trust on-chain using Solana’s performance layer.</p>
          </div>
          <div className="border-t border-b w-full py-8 relative overflow-hidden bg-black">
            <div className="absolute inset-0 z-0" style={{
              backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.09) 0px, rgba(255,255,255,0.09) 1px, transparent 1px, transparent 8px)"
            }} />
            <div className=" text-xs tracking-widest opacity-70">POWERED BY SOLANA</div>
          </div>
        </div>
      </div>
    </div>
  );
}