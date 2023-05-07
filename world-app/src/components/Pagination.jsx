import { NavLink } from "react-router-dom";

//chakra components
import { Container, List, ListItem } from "@chakra-ui/react";

export default function Pagination({
  countriesPerPage,
  totalCountries,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const activeStyle = {
    color: "red",
    textDecoration: "underline",
  };
  return (
    <Container centerContent>
      <List display="flex" color="white" gap={5}>
        {pageNumbers.map((pageNumber) => (
          <ListItem
            key={pageNumber}
            color={"gray.400"}
            fontSize="18px"
            _hover={{
              fontSize: "20px",
              textDecoration: "underline",
              color: "white",
            }}
          >
            <NavLink to="#" onClick={() => paginate(pageNumber)}>
              {pageNumber}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
