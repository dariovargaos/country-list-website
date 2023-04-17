import { Box, Center, Text, Divider, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Center mt="50px">
      <Box>
        <Text color="#333333" mb="10px">
          A country is a distinct part of the world, such as a state, nation, or
          other political entity. It may be a sovereign state or make up one
          part of a larger state.For example, the country of Japan is an
          independent, sovereign state, while the country of Wales is a
          component of a multi-part sovereign state, the United Kingdom. A
          country may be a historically sovereign area (such as Korea), a
          currently sovereign territory with a unified government (such as
          Senegal), or a non-sovereign geographic region associated with certain
          distinct political, ethnic, or cultural characteristics (such as the
          Basque Country). The definition and usage of the word "country" is
          flexible and has changed over time.
          <Link to="https://en.wikipedia.org/wiki/The_Economist">
            The Economist
          </Link>
          wrote in 2010 that "any attempt to find a clear definition of a
          country soon runs into a thicket of exceptions and anomalies."Most
          sovereign states, but not all countries, are members of the United
          Nations. The largest country by area is Russia, while the smallest is
          the microstate Vatican City. The most populous is China, while the
          Pitcairn Islands are the least populous.
        </Text>
        <Divider />
        <Text mb="20px" mt="20px">
          Etymology: The word country comes from Old French contrée, which
          derives from Vulgar Latin (terra) contrata ("(land) lying opposite";
          "(land) spread before"), derived from contra ("against, opposite"). It
          most likely entered the English language after the Franco-Norman
          invasion during the 11th century
        </Text>
        <Divider />
        <Text mb="20px" mt="20px">
          Identification: Symbols of a country may incorporate cultural,
          religious or political symbols of any nation that the country
          includes. Many categories of symbols can be seen in flags, coats of
          arms, or seals. Name :Most countries have a long name and a short
          name. The long name is typically used in formal contexts and often
          describes the country's form of government. The short name is the
          country's common name by which it is typically identified.The names of
          most countries are derived from a feature of the land, the name of a
          historical tribe or person, or a directional description.The
          International Organization for Standardization maintains a list of
          country codes as part of ISO 3166 to designate each country with a
          two-letter country code.The name of a country can hold cultural and
          diplomatic significance. Upper Volta changed its name to Burkina Faso
          to reflect the end of French colonization, and the name of North
          Macedonia was disputed for years due to a conflict with the similarly
          named Macedonia region in Greece. Flags:Originally, flags representing
          a country would generally be the personal flag of its rulers; however,
          over time, the practice of using personal banners as flags of places
          was abandoned in favor of flags that had some significance to the
          nation, often its patron saint. Early examples of these were the
          maritime republics such as Genoa which could be said to have a
          national flag as early as the 12th century.However, these were still
          mostly used in the context of marine identification.Although some
          flags date back earlier, widespread use of flags outside of military
          or naval context begins only with the rise of the idea of the nation
          state at the end of the 18th century and particularly are a product of
          the Age of Revolution. Revolutions such as those in France and America
          called for people to begin thinking of themselves as citizens as
          opposed to subjects under a king, and thus necessitated flags that
          represented the collective citizenry, not just the power and right of
          a ruling family.With nationalism becoming common across Europe in the
          19th century, national flags came to represent most of the states of
          Europe.Flags also began fostering a sense of unity between different
          peoples, such as the Union Jack representing a union between England
          and Scotland, or began to represent unity between nations in a
          perceived shared struggle, for example, the Pan-Slavic colors or later
          Pan-Arab colors. National anthems: A national anthem is a patriotic
          musical composition symbolizing and evoking eulogies of the history
          and traditions of a country or nation.Though the custom of an
          officially adopted national anthem became popular only in the 19th
          century, some national anthems predate this period, often existing as
          patriotic songs long before designation as national anthem.[citation
          needed] Several countries remain without an official national anthem.
          In these cases, there are established de facto anthems played at
          sporting events or diplomatic receptions. These include the United
          Kingdom ("God Save the Queen") and Sweden (Du gamla, Du fria). Some
          sovereign states that are made up of multiple countries or
          constituencies have associated musical compositions for each of them
          (such as with the United Kingdom, Russia, and the former Soviet
          Union). These are sometimes referred to as national anthems even
          though they are not sovereign states (for example, "Hen Wlad Fy
          Nhadau" is used for Wales, part of the United Kingdom).
        </Text>
        <Text>
          Source:
          <Link to="https://en.wikipedia.org/wiki/Country"> Wikipedia</Link>
        </Text>
      </Box>
    </Center>
  );
}
