import "./App.css";
import Home from "../src/components/Home.js";
import { UserProvider } from "./TryContent.js";
import Call from "./components/Call.jsx";


function App() {


  return (
    <UserProvider>
    <div>
      {/* <Call/> */}
      <h1>MOLEWEB  </h1>
      <Home />
    </div>
    </UserProvider>
   
  );
}

export default App;
