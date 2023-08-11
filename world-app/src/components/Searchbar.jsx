import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function Searchbar() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?countryName=${term}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        display="flex"
        alignItems="center"
        w={{ base: "80%", sm: "60%", md: "90%", lg: "100%" }}
      >
        <FormLabel color="white">Search:</FormLabel>
        <Input
          type="text"
          id="search"
          color="white"
          size="sm"
          onChange={(e) => setTerm(e.target.value)}
          isRequired
        />
      </FormControl>
    </form>
  );
}
