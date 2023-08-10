import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function Searchbar() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?countryName=${term}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl display="flex" alignItems="center">
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
