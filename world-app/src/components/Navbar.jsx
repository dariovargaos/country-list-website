import { NavLink as RouterNavLink } from "react-router-dom";
import { Box, Flex, Link } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box align="center">
      <Flex
        justify="center"
        gap={8}
        color="white"
        p={2}
        borderBottom="1px solid gray"
        w={{ base: "60%", sm: "50%", md: "40%", lg: "30%" }}
      >
        <Link
          as={RouterNavLink}
          to="/"
          _hover={{ textDecoration: "underline" }}
          _activeLink={{ textDecoration: "underline" }}
        >
          Home
        </Link>
        <Link
          as={RouterNavLink}
          to="/countrylist"
          _hover={{ textDecoration: "underline" }}
          _activeLink={{ textDecoration: "underline" }}
        >
          Country List
        </Link>
      </Flex>
    </Box>
  );
}
