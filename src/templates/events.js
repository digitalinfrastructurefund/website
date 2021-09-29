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

import Layout from "../components/Layout";
import Subscription from "../components/Subscription";

import EventCard from "../components/EventCard";
import { formatDate } from "../lib/date";
import Pagination from "../components/Pagination";

const EventsTemplate = ({ data, pageContext }) => {
  const events = data.allIndexJson.eventData;
  const pageInfo = data.allIndexJson.pageInfo;
  const nearestEvent = events.reduce((earliestEvent, event) => {
    const eventDate = dayjs(event.date);
    const currentDate = dayjs();
    if (eventDate.isBefore(currentDate)) {
      return earliestEvent;
    } else if (earliestEvent && dayjs(earliestEvent.date).isBefore(eventDate)) {
      return earliestEvent;
    }
    return event;
  }, undefined);

  return (
    <Layout title='Events' activePage='events'>
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

      {nearestEvent && (
        <Flex
          display={{ base: "none", md: "flex" }}
          mt='40px'
          px={{ base: "16px", sm: "32px" }}
          justifyContent={{ lg: "center" }}
          alignItems={{ lg: "center" }}
        >
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent={{
              lg: nearestEvent.event.coverImage ? "center" : "flex-start",
            }}
            width={{ lg: "1088px" }}
          >
            {nearestEvent.event.coverImage && (
              <Image
                w={{ md: "704px", lg: "520px" }}
                h='400px'
                src={nearestEvent.event.coverImage.publicURL}
                alt='Update laptop image'
                mb='32px'
              />
            )}
            <Box ml={{ lg: "24px" }} maxW='728px'>
              <Flex
                alignItems='flex-start'
                flexDirection={{ base: "column", lg: "column-reverse" }}
              >
                <Text
                  textStyle='smallHeader'
                  color='primaryDarkGrey'
                  my={{ lg: "24px" }}
                >
                  {nearestEvent.event.title}
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
                {nearestEvent.event.description}
              </Text>
              <Text textStyle='smallLabel' color='primaryBlue'>
                {formatDate(nearestEvent.event.date, "MMMM Do YYYY Z a")}
              </Text>
              <Button my='24px' width='244px' variant='primary'>
                Add to calendar
              </Button>
            </Box>
          </Flex>
        </Flex>
      )}

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
          {events.map(({ event }, index) => (
            <EventCard {...event} key={index.toString()} />
          ))}
        </SimpleGrid>
      </Flex>
      <Pagination {...pageInfo} pagePath='/events' />
      <Flex px={{ base: "16px" }} my={{ lg: "100px" }} justifyContent='center'>
        <Subscription />
      </Flex>
    </Layout>
  );
};

export const eventQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allIndexJson(
      limit: $limit
      skip: $skip
      sort: { fields: date, order: DESC }
    ) {
      eventData: edges {
        event: node {
          id
          description
          date
          title
          coverImage {
            publicURL
          }
        }
      }
      pageInfo {
        currentPage
        totalCount
        perPage
        pageCount
        itemCount
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;
export default EventsTemplate;
