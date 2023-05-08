import { Container, Flex, Divider, textDecoration } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Container h={12} w="50%" centerContent>
      <Flex gap={8} color="white" p={2}>
        <NavLink to="/" _hover={{ textDecoration: "underline" }}>
          Home
        </NavLink>
        <NavLink to="/countrylist">Country List</NavLink>
      </Flex>
      <Divider />
    </Container>
  );
}
