import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Home from "./pages/Home";
import CountryList from "./pages/CountryList";

//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<CountryList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
