import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Box, Text } from "@chakra-ui/react";

export default function CountryDetails() {
  const { name } = useParams();
  const url = `https://restcountries.com/v3.1/name/${name}`;
  const { data, isPending, error } = useFetch(url);

  console.log(data);
  return (
    <Box>
      {isPending && <Text>Loading</Text>}
      {data && data.map((country) => <Text>{country.name.common}</Text>)}
    </Box>
  );
}
