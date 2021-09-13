import "@fontsource/urbanist";
import * as React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

/**
 * Images
 */
import eventCover from "../images/event-cover.png";
import PostImageMD from "../images/post-md.png";

import Layout from "../components/Layout";
import Subscription from "../components/Subscription";

const EventsPage = () => {
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
            Events
          </Text>
          <Text
            textStyle={{ base: "paragraph-1", lg: "bigQuote" }}
            color='primaryBlue'
            spacing='24px'
            maxW={{ lg: "880px" }}
          >
            Building a community of researchers and practitioners working to
            build a sustainable future for digital infrastructure.{" "}
          </Text>
        </VStack>
      </Flex>

      <Flex
        display={{ base: "none", md: "flex" }}
        mt='40px'
        px={{ base: "16px", sm: "32px" }}
        justifyContent={{ lg: "center" }}
        alignItems={{ lg: "center" }}
      >
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={{ lg: "center" }}
          width={{ lg: "1088px" }}
        >
          <Image
            w={{ md: "704px", lg: "520px" }}
            h='400px'
            src={PostImageMD}
            alt='Update laptop image'
            mb='32px'
          />
          <Box ml={{ lg: "24px" }}>
            <Flex
              alignItems='flex-start'
              flexDirection={{ base: "column", lg: "column-reverse" }}
            >
              <Text
                textStyle='smallHeader'
                color='primaryDarkGrey'
                my={{ lg: "24px" }}
              >
                Digital Infrastructure Community Call
              </Text>
              <Box
                bg='secondaryLime'
                px='16px'
                py='9px'
                borderRadius='24px'
                w='161px'
                my={{ md: "24px", lg: "0" }}
              >
                <Text textStyle='buttonLabel' color='primaryDarkGrey'>
                  NEXT EVENT
                </Text>
              </Box>
            </Flex>
            <Text mb='24px' textStyle='bigQuote' color='secondaryMidGray'>
              Regular, open call for digital infrastructure project updates,
              news, questions and goings on
            </Text>
            <Text textStyle='smallLabel' color='primaryBlue'>
              Aug 14th 2021 • By Anushah Hossain
            </Text>
            <Button my='24px' width='244px' variant='primary'>
              Add to calendar
            </Button>
          </Box>
        </Flex>
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
          <EventCard />
          <EventCard />
          <EventCard />
        </SimpleGrid>
      </Flex>
      <Flex px={{ base: "16px" }} my={{ lg: "100px" }} justifyContent='center'>
        <Subscription />
      </Flex>
    </Layout>
  );
};

export const EventCard = () => (
  <Box
    width={{ base: "288px", md: "340px" }}
    borderRadius='24px'
    boxShadow=' 0px 1px 4px 1px rgba(49, 50, 51, 0.1)'
  >
    <Box
      width='100%'
      borderTopRadius='24px'
      backgroundImage={`url(${eventCover})`}
      backgroundSize='cover'
      backgroundRepeat='no-repeat'
      h='120px'
      display='flex'
      justifyContent='flex-end'
      alignItems='center'
    >
      <Box bg='secondaryLime' px='16px' py='9px' borderLeftRadius='24px'>
        <Text textStyle='buttonLabel' color='primaryDarkGrey'>
          NEXT EVENT
        </Text>
      </Box>
    </Box>
    <Box padding='24px'>
      <Text textStyle='paragraph-2' color='neutralTint-600'>
        June 22nd 4pm UTC
      </Text>
      <Text as='h3' textStyle='subHeading' my='12px' color='neutralTint'>
        Digital Infrastructure Community Call
      </Text>
      <Text textStyle='paragraph-1' color='neutralTint-600' mb='20px'>
        Regular, open call for digital infrastructure project updates, news,
        questions and goings on.
      </Text>
      <Button width='100%' variant='primary'>
        Add to calendar
      </Button>
    </Box>
  </Box>
);

export default EventsPage;
