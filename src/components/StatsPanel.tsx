import React, { useEffect, useState } from "react";
import "./../styles/StatsPanel.css";

interface Opportunity {
  timestamp: string;
  block: string;
  token: string;
  spread: string;
  profit: string;
}

export const StatsPanel: React.FC = () => {
  const [data, setData] = useState<Opportunity[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/opportunities");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Erreur lors du fetch :", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(); // chargement initial
  }, []);

  const totalProfit = data.reduce((sum, item) => sum + parseFloat(item.profit), 0);
  const latestBlock = data.length > 0 ? data[0].block : "-";

  // Profits par token
  const profitsByToken: Record<string, number> = {};
  data.forEach((op) => {
    profitsByToken[op.token] = (profitsByToken[op.token] || 0) + parseFloat(op.profit);
  });

  return (
    <div className="stats-panel">
      <h2>📊 Statistiques</h2>
      <p><strong>Dernier block analysé :</strong> {latestBlock}</p>
      <p><strong>Profit Total :</strong> {totalProfit.toFixed(6)} ETH</p>

      <h3>💰 Profits par Token :</h3>
      <ul>
        {Object.entries(profitsByToken).map(([token, profit]) => (
          <li key={token}>
            {token}: {profit.toFixed(6)} ETH
          </li>
        ))}
      </ul>

      <button onClick={fetchData} disabled={isLoading} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
        {isLoading ? "Chargement..." : "🔄 Rafraîchir"}
      </button>
    </div>
  );
};
