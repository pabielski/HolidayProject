import Logo from "./components/logo";
import "./App.css";
import Form from "./components/Form";
import PackingList from "./components/Packinglist";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
