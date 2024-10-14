import "./App.css";
import Home from "../src/components/Home.js";
import { UserProvider } from "./TryContent.js";


function App() {
  return (
    <UserProvider>
    <div>
      <h1>MOLEWEB</h1>
      <Home />
    </div>
    </UserProvider>
   
  );
}

export default App;
