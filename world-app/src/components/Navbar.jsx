import { Container, Flex, Divider } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Container h={12} w="50%" centerContent>
      <Flex gap={8} color="white" p={2}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/countries">Country List</NavLink>
      </Flex>
      <Divider />
    </Container>
  );
}
