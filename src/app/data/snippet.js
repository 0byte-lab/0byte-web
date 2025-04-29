export const snippet = `export const function Snippet() {
  import { createZeroByte } from '0byte-sdk';

  // Initialize with optional config (e.g. Solana key or storage method)
  const zeroByte = createZeroByte({
    network: 'devnet', // or 'mainnet'
    anchorProofsOnChain: false,
  });

  // Generate a proof from prompt + metadata
  const proof = await zeroByte.generateProof({
    prompt: "an astronaut riding a tiger",
    model: "StableDiffusion-XL",
    creator: "0xSidhanth",
    timestamp: Date.now(),
  });

  // Embed the proof into an image file (returns a new buffer or file path)
  await zeroByte.embedProofIntoImage("original.png", proof, {
    output: "verified-output.png",
  });

  // (Optional) Verify a file and check if it's been tampered
  const result = await zeroByte.verifyFile("verified-output.png");
  console.log(result); // { verified: true, creator: "0xSidhanth", timestamp: 1710000000 }
}`