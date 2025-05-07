// dashboard/client/src/components/StatsOverview.tsx
import React, { useEffect, useState } from "react";
import { Opportunity } from "../types";
import "./../styles/StatsOverview.css";

export const StatsOverview: React.FC = () => {
  const [stats, setStats] = useState({
    totalProfit: 0,
    totalOpportunities: 0,
    uniqueTokens: 0,
  });

  const fetchStats = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/opportunities");
      const data: Opportunity[] = await res.json();

      const totalProfit = data.reduce((sum, op) => sum + parseFloat(op.profit), 0);
      const totalOpportunities = data.length;
      const uniqueTokens = new Set(data.map((op) => op.token)).size;

      setStats({
        totalProfit,
        totalOpportunities,
        uniqueTokens,
      });
    } catch (err) {
      console.error("❌ Erreur chargement stats:", err);
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 30000); // Refresh all 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stats-overview">
      <h2>📊 Statistiques Globales</h2>
      <div className="stat">
        <strong>💸 Profit Total :</strong> {stats.totalProfit.toFixed(6)} ETH
      </div>
      <div className="stat">
        <strong>🔁 Opportunités :</strong> {stats.totalOpportunities}
      </div>
      <div className="stat">
        <strong>🪙 Tokens uniques :</strong> {stats.uniqueTokens}
      </div>
    </div>
  );
};
