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
  Link,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Subscription from "../components/Subscription";

import EventCard from "../components/EventCard";
import { formatDate } from "../lib/date";
import Pagination from "../components/Pagination";

const EventsTemplate = ({ data }) => {
  const events = data.allIndexJson.eventData;
  const pageInfo = data.allIndexJson.pageInfo;
  const nearestEvent = events.reduce((earliestEvent, { event }) => {
    const eventDate = dayjs(event.date);
    const currentDate = dayjs();

    if (!earliestEvent && eventDate.isAfter(currentDate)) {
      return event;
    }

    if (
      earliestEvent &&
      eventDate.isAfter(currentDate) &&
      eventDate.isBefore(dayjs(earliestEvent.date))
    ) {
      return event;
    }

    return earliestEvent;
  }, undefined);

  const eventList = events
    .filter(({ event }) => event.id !== nearestEvent?.id)
    // Sort from the most recent first
    .map((event, index, arr) => {
      event.id = index+1
      return event
    })

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

      {nearestEvent && pageInfo.currentPage <= 1 && (
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
              lg: nearestEvent.coverImage ? "center" : "flex-start",
            }}
            width={{ lg: "1088px" }}
          >
            {nearestEvent.coverImage && (
              <Image
                w={{ md: "704px", lg: "520px" }}
                h='400px'
                src={nearestEvent.coverImage.publicURL}
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
                  {nearestEvent.title}
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
                {nearestEvent.description}
              </Text>
              <Text textStyle='smallLabel' color='primaryBlue'>
                {formatDate(nearestEvent.date, "MMMM Do YYYY Z a")}
              </Text>
              {nearestEvent.eventLink && (
                <Button
                  href={nearestEvent.eventLink}
                  as={Link}
                  target='_blank'
                  my='24px'
                  width='244px'
                  variant='primary'
                >
                  Register
                </Button>
              )}
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
          {eventList.map(({ event }, index) => (
            <EventCard {...event} key={index.toString()} />
          ))}
        </SimpleGrid>
      </Flex>
      <Pagination {...pageInfo} pagePath='/events' />
      <Flex
        px={{ base: "16px", sm: "32px" }}
        my={{ base: "100px", md: "100px" }}
        justifyContent={{ md: "center", lg: "center" }}
        alignItems={{ lg: "center" }}
      >
        <VStack
          spacing='24px'
          alignItems={{ base: "center", md: "center" }}
          textAlign={{ base: "center", md: "center" }}
          width={{ lg: "1088px" }}
        >
          <Text
            textStyle={{ base: "paragraph-2", lg: "bigQuote" }}
            color='primaryDarkGrey'
            spacing='24px'
          >
            All of our events are subject to the <a href="https://www.contributor-covenant.org/" rel="noreferrer" target="_blank">Contributor Covenant Code of Conduct</a>.{" "}
          </Text>
        </VStack>
      </Flex>
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
          # eventLink
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
