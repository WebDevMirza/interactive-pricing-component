import "./assets/styles/app.css";
import Card from "./compo/Card";

function App() {
  return (
    <>
      <main>
        <div className="intro">
          <h1>Simple, traffic-based pricing</h1>
          <p>Sign-up for our 30-day trial. No credit card required.</p>
        </div>
        <Card />
      </main>
    </>
  );
}

export default App;
