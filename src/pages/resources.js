import "@fontsource/urbanist";
import * as React from "react";
import { Box, Button, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";

import Layout from "../components/Layout";
import Subscription from "../components/Subscription";

const ResourcesPage = () => {
  return (
    <Layout>
      <Flex
        px={{ base: "16px", sm: "32px" }}
        justifyContent={{ md: "flex-start", lg: "center" }}
        alignItems={{ lg: "center" }}
      >
        <VStack
          spacing='16px'
          alignItems={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          width={{ lg: "1088px" }}
        >
          <Text
            textStyle={{
              base: "subHeading",
              md: "smallHeader",
              lg: "defaultHeader",
            }}
            color='primaryDarkGrey'
          >
            Resources
          </Text>
          <Text
            textStyle={{ base: "paragraph-1", lg: "bigQuote" }}
            color='primaryBlue'
            spacing='24px'
            maxW={{ lg: "880px" }}
          >
            Talks, publications, and more from the projects supported by our
            funders
          </Text>
        </VStack>
      </Flex>

      <Flex
        px={{ base: "16px", md: "32px" }}
        justifyContent='center'
        alignItems='center'
      >
        <SimpleGrid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          columnGap={{ base: "24px", lg: "16px" }}
          rowGap='40px'
          my='40px'
          width={{ lg: "1088px" }}
        >
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
        </SimpleGrid>
      </Flex>
      <Flex px={{ base: "16px" }} my={{ lg: "100px" }} justifyContent='center'>
        <Subscription />
      </Flex>
    </Layout>
  );
};

export const ResourceCard = () => (
  <Box
    padding='24px'
    borderRadius='24px'
    boxShadow='0px 1px 4px 1px rgba(49, 50, 51, 0.3)'
    width={{ base: "288px", md: "340px" }}
  >
    <VStack alignItems='flex-start' spacing='16px'>
      <Text textStyle='paragraph-1' color='primaryBlue'>
        "Name of Project that goes in two lines”
      </Text>
      <Text textStyle='subHeading' color='neutralTint'>
        Addiction When Gambling Becomes A Problem.
      </Text>
      <Text textStyle='paragraph-2' color='neutralTint-600'>
        Author Name
      </Text>
    </VStack>
    <Button variant='primary' width='100%' mt='48px'>
      Read more
    </Button>
  </Box>
);

export default ResourcesPage;
