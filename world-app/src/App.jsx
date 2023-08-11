import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

//components
import Home from "./pages/Home";
import CountryList from "./pages/CountryList";
import CountryDetails from "./pages/CountryDetails";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";

const backgroundImageStyles = {
  backgroundImage: `url("/img/bg.jpg")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

function App() {
  return (
    <Flex sx={backgroundImageStyles} justifyContent="center" minH="100vh">
      <Flex
        w={{ base: "90%", sm: "90%", md: "90%", lg: "70%" }}
        flexDir="column"
        gap={8}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countrylist" element={<CountryList />} />
            <Route path="/countrylist/:name" element={<CountryDetails />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </Flex>
    </Flex>
  );
}

export default App;
