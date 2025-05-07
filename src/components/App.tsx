import OpportunityTable from './OpportunityTable';
import ProfitChart from './ProfitChart';
import TriggerButton from './TriggerButton';

function App() {
  return (
    <div style={{ 
      padding: "30px", 
      backgroundColor: "#0a0a0a", 
      color: "#e0e0e0", 
      fontFamily: "Fira Code, monospace", 
      minHeight: "100vh" 
    }}>
      <h1 style={{ fontSize: "2.5rem", color: "#00ffe0" }}>📊 Opportunités Arbitrage</h1>

      <TriggerButton />

      <div style={{ marginTop: "40px" }}>
        <OpportunityTable />
      </div>

      <div style={{ marginTop: "50px" }}>
        <ProfitChart />
      </div>
    </div>
  );
}

export default App;
