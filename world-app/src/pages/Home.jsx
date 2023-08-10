import { Link as RouterLink } from "react-router-dom";
import { Text, Flex, Image, Container, VStack, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Home() {
  const flexStyles = {
    padding: "10px",
    alignItems: "center",
    gap: "10px",
    borderTop: "1px solid gray",
    backgroundColor: "blackAlpha.400",
    flexDirection: {
      base: "column",
      sm: "column",
      md: "row",
      lg: "row",
    },
  };
  return (
    <VStack color="white">
      <Flex sx={flexStyles}>
        <Container>
          <Text>
            A country is a distinct part of the world, such as a state, nation,
            or other political entity. It may be a sovereign state or make up
            one part of a larger state. For example, the country of Japan is an
            independent, sovereign state, while the country of Wales is a
            component of a multi-part sovereign state, the United Kingdom. The
            largest country by area is Russia, while the smallest is the
            microstate Vatican City. The most populous is China, while the
            Pitcairn Islands are the least populous.
          </Text>
        </Container>
        <Image
          src="/img/ourworld.jpg"
          fallback="Picture of all countries."
          width="400px"
        />
      </Flex>
      <Flex sx={flexStyles}>
        <Image src="/img/etymology.jpg" width="400px" height="400px" />
        <Container>
          <Text>
            <b>Etymology:</b> The word country comes from Old French contrée,
            which derives from Vulgar Latin (terra) contrata ("(land) lying
            opposite"; "(land) spread before"), derived from contra ("against,
            opposite"). It most likely entered the English language after the
            Franco-Norman invasion during the 11th century.
          </Text>
        </Container>
      </Flex>
      <Flex sx={flexStyles}>
        <Container>
          <Text>
            <b>Identification:</b> Symbols of a country may incorporate
            cultural, religious or political symbols of any nation that the
            country includes. Many categories of symbols can be seen in flags,
            coats of arms, or seals.
          </Text>
        </Container>
        <Image src="/img/symbols.jpeg" width="400px" />
      </Flex>
      <Flex sx={flexStyles}>
        <Image src="/img/country-names.webp" width="400px" />
        <Container>
          <Text>
            <b>Name:</b> Most countries have a long name and a short name. The
            long name is typically used in formal contexts and often describes
            the country's form of government. The short name is the country's
            common name by which it is typically identified.The names of most
            countries are derived from a feature of the land, the name of a
            historical tribe or person, or a directional description.
          </Text>
        </Container>
      </Flex>
      <Flex sx={flexStyles}>
        <Container>
          <Text>
            <b>Flags:</b> Originally, flags representing a country would
            generally be the personal flag of its rulers; however, over time,
            the practice of using personal banners as flags of places was
            abandoned in favor of flags that had some significance to the
            nation, often its patron saint. Early examples of these were the
            maritime republics such as Genoa which could be said to have a
            national flag as early as the 12th century. Although some flags date
            back earlier, widespread use of flags outside of military or naval
            context begins only with the rise of the idea of the nation state at
            the end of the 18th century.
          </Text>
        </Container>
        <Image src="/img/flags.jpg" width="400px" />
      </Flex>
      <Flex sx={flexStyles} borderBottom="1px solid gray">
        <Image src="/img/anthem.jpg" width="400px" />
        <Container>
          <Text>
            <b>National anthems:</b> A national anthem is a patriotic musical
            composition symbolizing and evoking eulogies of the history and
            traditions of a country or nation.Though the custom of an officially
            adopted national anthem became popular only in the 19th century,
            some national anthems predate this period, often existing as
            patriotic songs long before designation as national anthem.Several
            countries remain without an official national anthem. In these
            cases, there are established de facto anthems played at sporting
            events or diplomatic receptions. These include the United Kingdom
            ("God Save the Queen") and Sweden (Du gamla, Du fria).
          </Text>
        </Container>
      </Flex>
      <Text>
        Source:
        <Link
          as={RouterLink}
          to="https://en.wikipedia.org/wiki/Country"
          isExternal
          fontWeight="bold"
        >
          {" "}
          Wikipedia <ExternalLinkIcon mx="2px" />
        </Link>
      </Text>
    </VStack>
  );
}
