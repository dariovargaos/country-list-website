import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

//components
import Home from "./pages/Home";
import CountryList from "./pages/CountryList";
import CountryDetails from "./pages/CountryDetails";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";

//styles
import "./App.css";

function App() {
  return (
    <Box className="App" align="center">
      <BrowserRouter>
        <Box maxW="860px" minHeight="100vh" p="10px">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countrylist" element={<CountryList />} />
            <Route path="/countrylist/:name" element={<CountryDetails />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
