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

export default function CountryList() {
  const { data, isPending, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  const imageStyles = {
    border: "1px solid white",
    htmlHeight: "300px",
    htmlWidth: "200px",
    ":hover": {
      cursor: "pointer",
    },
  };

  return (
    <Box w="100%" mt="16px">
      {isPending && <p>Loading...</p>}
      <SimpleGrid minChildWidth="300px" spacing="40px" p="10px">
        {data &&
          data.map((country) => (
            <Card
              key={country.name.common}
              align="center"
              bg="transparent"
              border="1px solid white"
              color="white"
            >
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
                <VStack>
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
