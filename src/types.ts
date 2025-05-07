// client/src/types.ts

export interface Opportunity {
    timestamp: string;
    block: string;
    token: string;
    spread: string;
    profit: string;
    dex: string; // ✅ ajouté pour dashboard multi-DEX
  }
  