import axios from "axios";

export default function TriggerButton() {
  const handleClick = async () => {
    try {
      const res = await axios.post("http://localhost:3001/api/trigger");
      alert("🚀 Executor lancé !");
      console.log(res.data);
    } catch (err) {
      console.error("❌ Erreur de déclenchement :", err);
      alert("Erreur lors de l'exécution");
    }
  };

  return (
    <div style={{ margin: "30px 0" }}>
      <button
        onClick={handleClick}
        style={{
          background: "#00ffe0",
          color: "#000",
          fontSize: "16px",
          fontWeight: "bold",
          padding: "12px 24px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          transition: "background 0.3s ease"
        }}
      >
        ⚡ Lancer Arbitrage Manuellement
      </button>
    </div>
  );
}
