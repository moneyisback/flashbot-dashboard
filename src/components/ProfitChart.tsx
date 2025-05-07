import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function ProfitChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchChartData = () => {
      axios.get("http://localhost:3001/api/opportunities")
        .then(res => {
          const parsed = res.data.map((item: any) => ({
            time: new Date(item.timestamp).toLocaleTimeString(),
            profit: parseFloat(item.profit),
          }));
          setData(parsed.reverse().slice(0, 20)); // Limite à 20 points récents
        });
    };

    fetchChartData();
    const interval = setInterval(fetchChartData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>📉 Historique Profits (ETH)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={["dataMin", "dataMax"]} />
          <Tooltip />
          <Line type="monotone" dataKey="profit" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
