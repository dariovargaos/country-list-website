import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Text,
  Flex,
  CardFooter,
  Image,
  VStack,
  Heading,
} from "@chakra-ui/react";

export default function CountryDetails() {
  const { name } = useParams();
  const url = `https://restcountries.com/v3.1/name/${name}`;
  const { data, isPending, error } = useFetch(url);

  console.log(data);
  return (
    <Box p="16px">
      {isPending && <Text>Loading</Text>}
      {data &&
        data.map((country) => (
          <Flex key={country.name.common} gap="200px" justify="center">
            <Card
              key={country.name.common}
              mt="10px"
              color="#333333"
              bg="transparent"
              border="1px solid #333333"
              align="center"
            >
              <CardHeader>
                <Heading>{country.name.common}</Heading>
              </CardHeader>
              <CardBody>
                <Image
                  src={country.flags.png}
                  alt={country.flags.alt}
                  border="1px solid white"
                />
              </CardBody>
              <CardFooter>
                <VStack>
                  <Text>Official name: {country.name.official}</Text>
                  <Text>Region: {country.region}</Text>
                  <Text>Subregion: {country.subregion}</Text>
                  <Text>Capital: {country.capital}</Text>
                  <Text>Population: {country.population}</Text>
                  <Text>Timezone: {country.timezones}</Text>
                  <Text>Driver side: {country.car.side}</Text>
                </VStack>
              </CardFooter>
            </Card>
            <Card border="1px solid #333333">
              <CardBody>
                <Link to={country.maps.googleMaps}>View on Google Maps</Link>
              </CardBody>
            </Card>
          </Flex>
        ))}
    </Box>
  );
}
