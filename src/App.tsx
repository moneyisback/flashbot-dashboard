// dashboard/client/src/App.tsx
import { useEffect, useState } from "react";
import "./App.css";

interface Opportunity {
  timestamp: string;
  block: string;
  token: string;
  spread: string;
  profit: string;
  dex: string; // ✅ Ajouté
}

function App() {
  const [data, setData] = useState<Opportunity[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/opportunities")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="App">
      <h1>📈 Opportunités Arbitrage</h1>
      <table>
        <thead>
          <tr>
            <th>🕒 Horodatage</th>
            <th>⛓️ Bloquer</th>
            <th>💰 Jeton</th>
            <th>📊 Écart %</th>
            <th>🧠 Bénéfice (ETH)</th>
            <th>🏛️ DEX</th> {/* ✅ Ajouté */}
          </tr>
        </thead>
        <tbody>
          {data.map((entry, idx) => (
            <tr key={idx}>
              <td>{new Date(entry.timestamp).toLocaleTimeString()}</td>
              <td>{entry.block}</td>
              <td>{entry.token}</td>
              <td>{entry.spread}%</td>
              <td>{entry.profit}</td>
              <td>{entry.dex}</td> {/* ✅ Ajouté */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
