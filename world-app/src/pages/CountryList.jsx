import { useFetch } from "../hooks/useFetch";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

export default function CountryList() {
  // fetch("https://restcountries.com/v3.1/all")
  //   .then((res) => res.json())
  //   .then((data) => initialize(data))
  //   .catch((err) => console.log("Error: ", err));

  // let countries;
  // const initialize = (countriesData) => {
  //   countries = countriesData;
  //   console.log(countries[0].name);
  // };

  const { data, isPending, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  console.log(data);

  return (
    <Box w="100%" mt="16px">
      {isPending && <p>Loading...</p>}
      <SimpleGrid minChildWidth="300px" spacing="40px" p="10px">
        {data &&
          data.map((country) => (
            <Card key={country.name.common}>
              <CardHeader>{country.name.common}</CardHeader>
              <CardBody>
                <Image src={country.flags.png} />
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          ))}
      </SimpleGrid>
    </Box>
  );
}
