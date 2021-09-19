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
import dayjs from "dayjs";
import { graphql } from "gatsby";
/**
 * Images
 */
import PostImageMD from "../images/post-md.png";

import Layout from "../components/Layout";
import Subscription from "../components/Subscription";

import EventCard from "../components/EventCard";

const EventsPage = ({ data }) => {
  // const events = data.dataJson.events;
  // const nearestEvent = events.reduce((earliestEvent, event) => {
  //   const eventDate = dayjs(event.date);
  //   const currentDate = dayjs();
  //   if (eventDate.isBefore(currentDate)) {
  //     return earliestEvent;
  //   } else if (earliestEvent && dayjs(earliestEvent.date).isBefore(eventDate)) {
  //     return earliestEvent;
  //   }
  //   return event;
  // }, undefined);

  // const lastEvent = events[events.length - 1];

  return (
    <Layout title='Events'>
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
          {/* {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              description={event.description}
              date={event.date}
            />
          ))} */}
        </SimpleGrid>
      </Flex>
      <Flex px={{ base: "16px" }} my={{ lg: "100px" }} justifyContent='center'>
        <Subscription />
      </Flex>
    </Layout>
  );
};

// export const query = graphql`
//   query {
//     dataJson {
//       events {
//         id
//         title
//         date
//         description
//       }
//     }
//   }
// `;

export default EventsPage;
