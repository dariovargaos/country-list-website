import { useState, useMemo } from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

//icons
import { FcGlobe } from "react-icons/fc";
import { FaCity } from "react-icons/fa";
import { GiHumanPyramid } from "react-icons/gi";

//chakra components
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Image,
  Heading,
  List,
  ListItem,
  ListIcon,
  Text,
  Flex,
  Select,
} from "@chakra-ui/react";

//components
import Searchbar from "../components/Searchbar";
import Pagination from "../components/Pagination";
import SearchbarTwo from "../components/SearchbarTwo";

export default function CountryList({ countryName }) {
  const { data, isPending, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(20);
  const [selectedRegion, setSelectedRegion] = useState("all");

  const handleChangeSelect = (e) => {
    setSelectedRegion(e.target.value);
    setCurrentPage(1);
  };

  // get current countries
  if (data) {
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    var filteredData =
      selectedRegion === "all"
        ? data
        : data.filter(
            (country) => country.region.toLowerCase() === selectedRegion
          );
    var currentCountries = filteredData.slice(
      indexOfFirstCountry,
      indexOfLastCountry
    );

    var totalCountries = filteredData.length;
  }

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //scroll to top
  useMemo(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  const imageStyles = {
    border: "1px solid white",
    htmlHeight: "300px",
    htmlWidth: "200px",
    ":hover": {
      cursor: "pointer",
    },
  };

  const cardStyles = {
    alignItems: "center",
    bg: "transparent",
    border: "1px solid white",
    color: "white",
  };

  const selectStyles = {
    color: "white",
    bg: "transparent",
  };

  return (
    <Box>
      {isPending && <Text color="white">Loading...</Text>}
      {error && <Text color="white">{error}</Text>}
      <Flex
        gap={4}
        justify="center"
        flexDir={{ base: "column", sm: "row", md: "row", lg: "row" }}
      >
        {!isPending && <Searchbar />}
        {!isPending && (
          <Select
            onChange={handleChangeSelect}
            size="sm"
            w={{ base: "70%", sm: "30%", md: "40%", lg: "40%", xl: "30%" }}
            sx={selectStyles}
          >
            <option value="all" style={{ color: "black" }}>
              All
            </option>
            <option value="africa" style={{ color: "black" }}>
              Africa
            </option>
            <option value="americas" style={{ color: "black" }}>
              Americas
            </option>
            <option value="antarctic" style={{ color: "black" }}>
              Antarctic
            </option>
            <option value="asia" style={{ color: "black" }}>
              Asia
            </option>
            <option value="europe" style={{ color: "black" }}>
              Europe
            </option>
            <option value="oceania" style={{ color: "black" }}>
              Oceania
            </option>
          </Select>
        )}
      </Flex>

      <SimpleGrid minChildWidth="250px" spacing="20px" p="10px">
        {countryName
          ? countryName?.map((countryName) => (
              <Card key={countryName?.name?.common} sx={cardStyles}>
                <CardHeader>
                  <Heading
                    size="lg"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    {countryName?.name?.common}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Link to={`/countrylist/${countryName?.name?.common}`}>
                    <Image src={countryName?.flags?.png} sx={imageStyles} />
                  </Link>
                </CardBody>
                <CardFooter>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={FcGlobe} /> Region: {countryName?.region}
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCity} /> Capital: {countryName?.capital}
                    </ListItem>
                    <ListItem>
                      <ListIcon as={GiHumanPyramid} /> Population:
                      {countryName?.population}
                    </ListItem>
                  </List>
                </CardFooter>
              </Card>
            ))
          : data &&
            currentCountries?.map((country) => (
              <Card key={country?.name?.common} sx={cardStyles}>
                <CardHeader>
                  <Link to={`/countrylist/${country?.name?.common}`}>
                    <Heading size="lg">{country?.name?.common}</Heading>
                  </Link>
                </CardHeader>
                <CardBody>
                  <Link to={`/countrylist/${country?.name?.common}`}>
                    <Image src={country?.flags?.png} sx={imageStyles} />
                  </Link>
                </CardBody>
                <CardFooter>
                  <List color="white" spacing={3}>
                    <ListItem>
                      <ListIcon as={FcGlobe} /> Region: {country?.region}
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCity} /> Capital: {country?.capital}
                    </ListItem>
                    <ListItem>
                      <ListIcon as={GiHumanPyramid} /> Population:{" "}
                      {country?.population}
                    </ListItem>
                  </List>
                </CardFooter>
              </Card>
            ))}
      </SimpleGrid>
      {!countryName && (
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={totalCountries}
          paginate={paginate}
        />
      )}
    </Box>
  );
}
