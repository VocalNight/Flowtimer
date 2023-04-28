import FlowTimeMainWindow from "./Components/FlowtimeMainWindow";
import Header from "./Components/Header";
import './style/mainLayout.css'

function App() {
  return (
    <div id="mainView">
        <Header />
        <hr/>
        <FlowTimeMainWindow />
    </div>
  );
}

export default App;
