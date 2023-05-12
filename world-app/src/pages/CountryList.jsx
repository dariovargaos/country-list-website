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

  return (
    <Box mt="16px">
      {isPending && <Text color="white">Loading...</Text>}
      {error && <Text color="white">{error}</Text>}
      <Flex justify="center" gap={8}>
        {!isPending && <Searchbar />}
        {/* {!isPending && <SearchbarTwo data={data} />} */}
        {!isPending && (
          <label>
            <span>Filter by region:</span>
            <select onChange={handleChangeSelect}>
              <option value="all">All</option>
              <option value="africa">Africa</option>
              <option value="americas">Americas</option>
              <option value="antarctic">Antarctic</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </label>
        )}
      </Flex>

      <SimpleGrid minChildWidth="300px" spacing="40px" p="10px">
        {countryName
          ? countryName?.map((countryName) => (
              <Card key={countryName?.name?.common} sx={cardStyles}>
                <CardHeader>
                  <Heading size="lg" _hover={{ cursor: "pointer" }}>
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
