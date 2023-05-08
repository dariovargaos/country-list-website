import { Box, Center, Text, Divider, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box mt="50px">
      <Divider />
      <Flex color="white" p="8px" gap={4} align="center">
        <Text mb="10px">
          A country is a distinct part of the world, such as a state, nation, or
          other political entity. It may be a sovereign state or make up one
          part of a larger state.For example, the country of Japan is an
          independent, sovereign state, while the country of Wales is a
          component of a multi-part sovereign state, the United Kingdom. Most
          sovereign states, but not all countries, are members of the United
          Nations. The largest country by area is Russia, while the smallest is
          the microstate Vatican City. The most populous is China, while the
          Pitcairn Islands are the least populous.
        </Text>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/f/f7/World_Map_%28political%29.svg"
          fallback="Picture of all countries."
          width="400px"
        />
      </Flex>
      <Divider />
      <Flex color="white" p="8px" gap={4} align="center">
        <Image
          src="https://www.worldatlas.com/r/w768/upload/3d/34/02/country-names.jpg"
          width="400px"
        />
        <Text>
          Etymology: The word country comes from Old French contrée, which
          derives from Vulgar Latin (terra) contrata ("(land) lying opposite";
          "(land) spread before"), derived from contra ("against, opposite"). It
          most likely entered the English language after the Franco-Norman
          invasion during the 11th century
        </Text>
      </Flex>
      <Divider />
      <Flex color="white" p="8px" gap={4} align="center">
        <Text>
          Identification: Symbols of a country may incorporate cultural,
          religious or political symbols of any nation that the country
          includes. Many categories of symbols can be seen in flags, coats of
          arms, or seals.
        </Text>
        <Image
          src="https://www.gannett-cdn.com/-mm-/9953fe21788ac85c187c4e26ba432b475d2bdff9/c=0-135-3340-2014/local/-/media/2021/01/07/USATODAY/usatsports/gettyimages-840213124.jpg"
          width="400px"
        />
      </Flex>
      <Divider />
      <Flex color="white" p="8px" gap={4} align="center">
        <Image
          src="https://www.worldatlas.com/r/w768/upload/3d/34/02/country-names.jpg"
          width="400px"
        />
        <Text>
          Name: Most countries have a long name and a short name. The long name
          is typically used in formal contexts and often describes the country's
          form of government. The short name is the country's common name by
          which it is typically identified.The names of most countries are
          derived from a feature of the land, the name of a historical tribe or
          person, or a directional description.
        </Text>
      </Flex>
      <Divider />
      <Flex color="white" p="8px" gap={4} align="center">
        <Text>
          Flags: Originally, flags representing a country would generally be the
          personal flag of its rulers; however, over time, the practice of using
          personal banners as flags of places was abandoned in favor of flags
          that had some significance to the nation, often its patron saint.
          Early examples of these were the maritime republics such as Genoa
          which could be said to have a national flag as early as the 12th
          century.However, these were still mostly used in the context of marine
          identification.Although some flags date back earlier, widespread use
          of flags outside of military or naval context begins only with the
          rise of the idea of the nation state at the end of the 18th century
          and particularly are a product of the Age of Revolution.{" "}
        </Text>
        <Image
          src="https://assets.weforum.org/article/image/BG0pfzM90_bsl3pWCLD2ZvvspIYSUwrhYlc5QyRO96E.jpg"
          width="400px"
        />
      </Flex>
      <Divider />
      <Flex color="white" p="8px" gap={4} align="center">
        <Image
          src="https://images.news18.com/ibnlive/uploads/2022/11/ap22331659470373.jpg?impolicy=website&width=0&height=0"
          width="400px"
        />
        <Text>
          National anthems: A national anthem is a patriotic musical composition
          symbolizing and evoking eulogies of the history and traditions of a
          country or nation.Though the custom of an officially adopted national
          anthem became popular only in the 19th century, some national anthems
          predate this period, often existing as patriotic songs long before
          designation as national anthem.Several countries remain without an
          official national anthem. In these cases, there are established de
          facto anthems played at sporting events or diplomatic receptions.
          These include the United Kingdom ("God Save the Queen") and Sweden (Du
          gamla, Du fria). Some sovereign states that are made up of multiple
          countries or constituencies have associated musical compositions for
          each of them (such as with the United Kingdom, Russia, and the former
          Soviet Union).
        </Text>
      </Flex>
      <Divider />
      <Text color="white" mt="6px">
        Source:
        <Link to="https://en.wikipedia.org/wiki/Country"> Wikipedia</Link>
      </Text>
    </Box>
  );
}
