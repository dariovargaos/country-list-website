import { useState, useEffect } from "react";
import {
  Heading,
  Box,
  Text,
  Progress,
  SimpleGrid,
  GridItem,
  Image,
} from "@chakra-ui/react";

export default function SearchbarTwo({ data }) {
  const [country, setCountry] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleChangeInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    setCountry(
      data.filter((country) =>
        country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  return (
    <Box>
      <form>
        <label>
          <span>Search: </span>
          <input type="text" value={searchInput} onChange={handleChangeInput} />
        </label>
      </form>

      {country?.length === 0 ? (
        <Progress colorScheme="pink" size="xs" isIndeterminate />
      ) : (
        <Box w="100%">
          <SimpleGrid
            columns={[1, null, 4]}
            spacing={10}
            pt="100"
            pr="50"
            pl="50"
          >
            {data?.map((x) => (
              <GridItem key={x?.name?.common}>
                <Box
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Image
                    src={x?.flags?.svg}
                    alt={x?.name?.common}
                    height="200px"
                    width="100%"
                  />
                  <Box p="6">
                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                    >
                      {x?.name?.common}
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                    >
                      Population: {x?.population}
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                    >
                      Region: {x?.region}
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                    >
                      Capital: {x?.capital}
                    </Box>
                  </Box>
                </Box>
              </GridItem>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
}
