
// import './App.css';
import CardSensor from "./components/CardSensor";
function App() {
  return (
    <div className="App">
      <div class="flex flex-row mt-10">

        <div class="flex-none md:flex-1 ...">
        <CardSensor title="Volume Infus" />
        </div>
        <div class="flex-none md:flex-1 ...">
        <CardSensor title="Kecepatan Cairan " />
        </div>

      </div>
    </div>
  );
}

export default App;
