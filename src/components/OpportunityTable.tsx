import { useEffect, useState } from "react";
import axios from "axios";

type Opportunity = {
  timestamp: string;
  block: string;
  token: string;
  spread: string;
  profit: string;
  dex: string;
};

export default function OpportunityTable() {
  const [data, setData] = useState<Opportunity[]>([]);

  const fetchData = () => {
    axios.get("http://localhost:3001/api/opportunities")
      .then(res => setData(res.data))
      .catch(err => console.error("Failed to fetch data:", err));
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // ⏱️ Refresh toutes les 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>📈 Opportunités Arbitrage (Live)</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>⏱️ Horodatage</th>
            <th>🔢 Block</th>
            <th>🪙 Jeton</th>
            <th>📊 Écart %</th>
            <th>🧠 Bénéfice (ETH)</th>
            <th>🏛️ DEX</th>
          </tr>
        </thead>
        <tbody>
          {data.map((op, i) => (
            <tr key={i}>
              <td>{op.timestamp}</td>
              <td>{op.block}</td>
              <td>{op.token}</td>
              <td>{op.spread}%</td>
              <td>{op.profit}</td>
              <td>{op.dex}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
