import { useParams, Link as RouterLink, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Text,
  Flex,
  Image,
  Heading,
  List,
  ListItem,
  ListIcon,
  Button,
  Link,
} from "@chakra-ui/react";

//icons
import { FcGlobe } from "react-icons/fc";
import { FaCity } from "react-icons/fa";
import { GiHumanPyramid } from "react-icons/gi";
import { BiTime } from "react-icons/bi";
import { BsFillCarFrontFill } from "react-icons/bs";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function CountryDetails() {
  const { name } = useParams();
  const url = `https://restcountries.com/v3.1/name/${name}`;
  const { data, isPending, error } = useFetch(url);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const cardStyles = {
    color: "white",
    backgroundColor: "transparent",
    height: "100%",
    width: "100%",
  };

  return (
    <Box p="10px">
      {isPending && <Text color="white">Loading...</Text>}
      {error && <Text color="white">{error}</Text>}
      {data &&
        data?.map((country) => (
          <Flex
            key={country?.name?.common}
            align="center"
            flexDir="column"
            justify="center"
            gap={6}
          >
            <Flex
              flexDir={{ base: "column", sm: "column", md: "row", lg: "row" }}
            >
              <Card key={country?.name?.common} sx={cardStyles}>
                <CardHeader>
                  <Heading fontWeight="500">{country?.name?.common}</Heading>
                </CardHeader>
                <CardBody>
                  <Image
                    src={country?.flags?.png}
                    alt={country?.flags?.alt}
                    border="1px solid white"
                    width={{ base: "70%", sm: "70%", md: "80%", lg: "80%" }}
                  />
                </CardBody>
              </Card>
              {country.coatOfArms.svg ? (
                <Card sx={cardStyles}>
                  <CardHeader>
                    <Heading fontWeight="500">Coat of arms</Heading>
                  </CardHeader>
                  <CardBody>
                    <Image
                      src={country?.coatOfArms?.svg}
                      alt="National army symbol."
                      border="1px solid white"
                      width={{ base: "70%", sm: "70%", md: "100%", lg: "80%" }}
                    />
                  </CardBody>
                </Card>
              ) : (
                <Card sx={cardStyles} border="1px solid white">
                  <CardHeader>
                    <Text>No available army symbol.</Text>
                  </CardHeader>
                </Card>
              )}
            </Flex>

            <Card border="1px solid white" sx={cardStyles}>
              <CardBody>
                <List spacing={3}>
                  {country.name.official ? (
                    <ListItem>
                      <ListIcon as={MdOutlineDriveFileRenameOutline} /> Official
                      name: {country?.name?.official}
                    </ListItem>
                  ) : (
                    <ListItem>
                      <ListIcon as={MdOutlineDriveFileRenameOutline} />
                      Official name: no data
                    </ListItem>
                  )}
                  {country.region ? (
                    <ListItem>
                      <ListIcon as={FcGlobe} /> Region: {country?.region}
                    </ListItem>
                  ) : (
                    <ListItem>
                      <ListIcon as={FcGlobe} />
                      Region: no data
                    </ListItem>
                  )}
                  {country.subregion ? (
                    <ListItem>
                      <ListIcon as={FcGlobe} /> Subregion: {country?.subregion}
                    </ListItem>
                  ) : (
                    <ListItem>
                      <ListIcon as={FcGlobe} />
                      Subregion: no data
                    </ListItem>
                  )}
                  {country.capital ? (
                    <ListItem>
                      <ListIcon as={FaCity} /> Capital: {country?.capital}
                    </ListItem>
                  ) : (
                    <ListItem>
                      <ListIcon as={FaCity} />
                      Capital: no data
                    </ListItem>
                  )}
                  {country.population ? (
                    <ListItem>
                      <ListIcon as={GiHumanPyramid} /> Population:
                      {country?.population}
                    </ListItem>
                  ) : (
                    <ListItem>
                      <ListIcon as={GiHumanPyramid} />
                      Population: no data
                    </ListItem>
                  )}
                  {country.timezones ? (
                    <ListItem>
                      <ListIcon as={BiTime} /> Timezone: {country?.timezones}
                    </ListItem>
                  ) : (
                    <ListItem>
                      <ListIcon as={BiTime} />
                      Timezone: no data
                    </ListItem>
                  )}
                  {country.car.side ? (
                    <ListItem>
                      <ListIcon as={BsFillCarFrontFill} />
                      Driver side: {country?.car?.side}
                    </ListItem>
                  ) : (
                    <ListItem>
                      <ListIcon as={BsFillCarFrontFill} />
                      Driver side: no data
                    </ListItem>
                  )}

                  {country.currencies ? (
                    <ListItem>
                      <ListIcon as={BsCurrencyBitcoin} />
                      Currency:{" "}
                      {
                        country?.currencies[
                          Object?.keys(country?.currencies)[0]
                        ].name
                      }
                    </ListItem>
                  ) : (
                    <ListItem>
                      <ListIcon as={BsCurrencyBitcoin} />
                      Currency: no data
                    </ListItem>
                  )}
                  {country.maps.googleMaps ? (
                    <ListItem>
                      <ListIcon as={BiMap} />
                      <Link as={RouterLink} to={country?.maps?.googleMaps}>
                        View on Google Maps
                      </Link>
                    </ListItem>
                  ) : (
                    <ListItem>
                      <ListIcon as={BiMap} />
                      View on Google Maps: no data.
                    </ListItem>
                  )}
                  {/* <ListItem>
                    Languages:{" "}
                    {
                      country.languages[
                        Object?.keys(country.languages).map((key) => (
                          <Text key={key}>{key}</Text>
                        ))
                      ]
                    }
                  </ListItem> */}
                </List>
              </CardBody>
            </Card>
            <Button
              onClick={handleGoBack}
              leftIcon={<AiOutlineArrowLeft />}
              variant="outline"
              size="sm"
              bg="transparent"
              color="white"
              _hover={{ backgroundColor: "gray.700" }}
            >
              Go back
            </Button>
          </Flex>
        ))}
    </Box>
  );
}
