import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  SimpleGrid,
  Image,
  Heading,
  VStack,
} from "@chakra-ui/react";

//components
import Searchbar from "../components/Searchbar";

export default function CountryList({ countryName }) {
  const { data, isPending, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  const imageStyles = {
    border: "1px solid black",
    htmlHeight: "300px",
    htmlWidth: "200px",
    ":hover": {
      cursor: "pointer",
    },
  };

  const cardStyles = {
    alignItems: "center",
    bg: "transparent",
    border: "1px solid #333333",
    color: "#333333",
  };

  return (
    <Box mt="16px">
      {isPending && <p>Loading...</p>}
      <Searchbar />
      <SimpleGrid minChildWidth="300px" spacing="40px" p="10px">
        {countryName
          ? countryName.map((countryName) => (
              <Card key={countryName.name.common} sx={cardStyles}>
                <CardHeader>
                  <Heading size="lg" _hover={{ cursor: "pointer" }}>
                    {countryName.name.common}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Link to={`/countries/${countryName.name.common}`}>
                    <Image src={countryName.flags.png} sx={imageStyles} />
                  </Link>
                </CardBody>
                <CardFooter>
                  <VStack>
                    <Text>Region: {countryName.region}</Text>
                    <Text>Capital: {countryName.capital}</Text>
                    <Text>Population: {countryName.population}</Text>
                  </VStack>
                </CardFooter>
              </Card>
            ))
          : data &&
            data.map((country) => (
              <Card key={country.name.common} sx={cardStyles}>
                <CardHeader>
                  <Heading size="lg" _hover={{ cursor: "pointer" }}>
                    {country.name.common}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Link to={`/countries/${country.name.common}`}>
                    <Image src={country.flags.png} sx={imageStyles} />
                  </Link>
                </CardBody>
                <CardFooter>
                  <VStack color="#333333">
                    <Text>Region: {country.region}</Text>
                    <Text>Capital: {country.capital}</Text>
                    <Text>Population: {country.population}</Text>
                  </VStack>
                </CardFooter>
              </Card>
            ))}
      </SimpleGrid>
    </Box>
  );
}
