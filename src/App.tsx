import "./App.css";
import OpportunityTable from "./components/OpportunityTable";
import TriggerButton from "./components/TriggerButton";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "monospace", color: "#fff", background: "#000", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        📊 Opportunités Arbitrage
      </h1>

      {/* Bouton d'exécution Flashloan */}
      <TriggerButton />

      {/* Table des opportunités */}
      <OpportunityTable />
    </div>
  );
}

export default App;
