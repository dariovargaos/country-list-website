import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, VStack } from "@chakra-ui/react";

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
    <VStack sx={backgroundImageStyles}>
      <BrowserRouter>
        <Box
          w={{ base: "90%", sm: "90%", md: "90%", lg: "70%" }}
          minHeight="100vh"
          p="10px"
          display="flex"
          flexDir="column"
          gap={8}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countrylist" element={<CountryList />} />
            <Route path="/countrylist/:name" element={<CountryDetails />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </VStack>
  );
}

export default App;
