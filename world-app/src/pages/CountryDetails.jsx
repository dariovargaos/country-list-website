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
  Heading,
  List,
  ListItem,
  ListIcon,
  VStack,
} from "@chakra-ui/react";

//icons
import { FcGlobe } from "react-icons/fc";
import { FaCity } from "react-icons/fa";
import { GiHumanPyramid } from "react-icons/gi";
import { BiTime } from "react-icons/bi";
import { BsFillCarFrontFill } from "react-icons/bs";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

export default function CountryDetails() {
  const { name } = useParams();
  const url = `https://restcountries.com/v3.1/name/${name}`;
  const { data, isPending, error } = useFetch(url);

  return (
    <Box p="16px">
      {isPending && <Text color="white">Loading</Text>}
      {data &&
        data.map((country) => (
          <Flex key={country.name.common} gap="200px" align="center">
            <Card
              key={country.name.common}
              mt="10px"
              color="white"
              bg="transparent"
              border="1px solid white"
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
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdOutlineDriveFileRenameOutline} /> Official
                    name: {country.name.official}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FcGlobe} /> Region: {country.region}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FcGlobe} /> Subregion: {country.subregion}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCity} /> Capital: {country.capital}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={GiHumanPyramid} /> Population:
                    {country.population}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={BiTime} /> Timezone: {country.timezones}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={BsFillCarFrontFill} />
                    Driver side: {country.car.side}
                  </ListItem>
                </List>
              </CardFooter>
            </Card>
            <Card
              border="1px solid white"
              bg="transparent"
              color="white"
              h="50%"
            >
              <CardBody>
                <Link to={country.maps.googleMaps}>View on Google Maps</Link>
                <Link to={country.maps.googleMaps}>
                  <Image
                    src="https://static.vecteezy.com/system/resources/previews/013/948/543/original/google-maps-logo-on-transparent-white-background-free-vector.jpg"
                    width="400px"
                    borderRadius="full"
                  />
                </Link>
              </CardBody>
            </Card>
          </Flex>
        ))}
    </Box>
  );
}
