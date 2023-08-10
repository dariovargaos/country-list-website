import { NavLink as RouterNavLink } from "react-router-dom";
import { Flex, Link } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex gap={8} color="white" p={2} borderBottom="1px solid gray">
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
  );
}
