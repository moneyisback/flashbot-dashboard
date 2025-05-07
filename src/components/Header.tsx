// dashboard/client/src/components/Header.tsx
import React from "react";
import "./../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>⚡ DeFi Arbitrage Scanner</h1>
      <p>🧠 Monitor live les spreads et opportunités cross-DEX.</p>
    </header>
  );
};

export default Header;
