import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Heading, Box, Text, Flex, Container } from "@chakra-ui/react";

//components
import CountryList from "./CountryList";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("countryName");

  const url = `https://restcountries.com/v3.1/name/${query}`;

  const { data, isPending, error } = useFetch(url);

  return (
    <Box>
      {error && <Text color="white">{error}</Text>}
      {isPending && <Text color="white">Loading...</Text>}
      <Flex justify="center">
        <Heading size={{ base: "sm", sm: "lg", md: "xl" }} color="white">
          Your search for: {query}
        </Heading>
      </Flex>

      {data && <CountryList countryName={data} />}
    </Box>
  );
}
