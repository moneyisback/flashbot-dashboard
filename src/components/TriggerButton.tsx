// TriggerButton.tsx
import { useState } from "react";
import axios from "axios";

const TriggerButton = () => {
  const [status, setStatus] = useState("");

  const handleTrigger = async () => {
    setStatus("⏳ Lancement en cours...");
    try {
      const res = await axios.post(import.meta.env.VITE_API_TRIGGER_URL || "/api/trigger");
      setStatus(`✅ ${res.data || "Lancement réussi"}`);
    } catch (err) {
      console.error(err);
      setStatus("❌ Erreur lors du déclenchement");
    }
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <button
        onClick={handleTrigger}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          fontWeight: "bold",
          background: "#00ff99",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ⚡ Lancer Arbitrage Flashloan
      </button>
      {status && <p style={{ marginTop: "10px" }}>{status}</p>}
    </div>
  );
};

export default TriggerButton;
