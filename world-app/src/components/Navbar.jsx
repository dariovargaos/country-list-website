import { Box, Container, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Container h={12} w="50%" borderBottom="1px solid gray" centerContent>
      <Flex gap={8} color="gray.400" p={2}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/countries">Countries</NavLink>
      </Flex>
    </Container>
  );
}
