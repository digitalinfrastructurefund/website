import "@fontsource/urbanist";
import * as React from "react";
import { Box, Flex, Link, Text, Image, VStack, Stack } from "@chakra-ui/react";

import Layout from "../components/Layout";
import { ArrowBackIcon } from "@chakra-ui/icons";

import PostImageXS from "../images/post-xs.png";
import PostImageMD from "../images/post-md.png";
import PostImageLG from "../images/post-lg.png";

import Section from "../components/Section";
import { UpdateCard } from "./updates";
import Subscription from "../components/Subscription";

const UpdatePage = () => {
  return (
    <Layout>
      <Flex
        px={{ base: "16px", sm: "32px" }}
        mb='40px'
        justifyContent={{ base: "flex-start", lg: "center" }}
      >
        <Box width={{ lg: "1088px" }} textAlign={{ lg: "left" }}>
          <Link>
            <Text
              textStyle='buttonLabel'
              textTransform='uppercase'
              color='primaryBlue'
              display='flex'
              alignItems='center'
            >
              <ArrowBackIcon />
              <Text as='span' mx='8px'>
                all updates
              </Text>
            </Text>
          </Link>
        </Box>
      </Flex>
      <Flex
        flexDir='column'
        px={{ base: "16px", sm: "32px" }}
        justifyContent={{ base: "flex-start", lg: "center" }}
        alignItems={{ lg: "center" }}
      >
        <Box width={{ lg: "1088px" }}>
          <Image
            src={PostImageXS}
            srcSet={`${PostImageXS} 576w, ${PostImageMD} 1408w, ${PostImageLG} 2176w`}
            sizes={
              "(min-width: 320px) calc(100vw - 32px), (min-width: 768px) 704px, (min-width: 1280px) 1080px"
            }
            alt='Post Image'
            mb='40px'
          />
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            alignItems='center'
            justifyContent='center'
          >
            <VStack
              alignItems='flex-start'
              spacing='24px'
              textAlign='left'
              width={{ base: "288px", md: "704px", lg: "670px" }}
            >
              <Text
                textStyle={{ base: "subHeading", md: "defaultHeader" }}
                color='primaryDarkGrey'
              >
                Security Ramifications of Open Source Software
              </Text>

              <Text
                textStyle={{ base: "paragraph-1", md: "bigQuote" }}
                color='secondaryMidGray'
              >
                What are the security ramifications of the extensive use of
                open-source software in modern software supply chains & how can
                security be improved?
              </Text>

              <Text
                textStyle={{ base: "paragraph-1", md: "bigQuote" }}
                color='primaryBlue'
              >
                <Text as='span' display='block'>
                  Aug 14th 2021
                </Text>
                <Text as='span' display='block' my='8px'>
                  By Anushah Hossain
                </Text>
                <Text as='span' display='block'>
                  Open Source in Public Service Delivery in India
                </Text>
              </Text>

              <Text
                textStyle={{ base: "paragraph-1", md: "bigQuote" }}
                color='secondaryMidGray'
              >
                LCD screens are uniquely modern in style, and the liquid
                crystals that make them work have allowed humanity to create
                slimmer, more portable technology than we’ve ever had access to
                before.
                <Text
                  as='span'
                  display='block'
                  my={{ base: "16px", md: "32px" }}
                >
                  From your wrist watch to your laptop, a lot of the on the go
                  electronics that we tote from place to place are only possible
                  because of their thin, light LCD display screens.
                </Text>
                <Text
                  as='span'
                  display='block'
                  my={{ base: "16px", md: "32px" }}
                >
                  Photographs are a way of preserving a moment in our lives for
                  the rest of our lives. Many of us have at least been tempted
                  at the flashy array of photo printers which seemingly leap off
                  the shelves at even the least tech-savvy. It surely seems old
                  fashioned to talk about 35mm film and non-digital cameras in
                  today’s day and age. To our children, cameras not so feature
                  rich with LCD screens and built in Wi-Fi is as foreign as
                  Atari. However, the innovation of home photo printing is
                  bringing about a new way of preserving our most precious
                  memories.
                </Text>
                <Text
                  as='span'
                  display='block'
                  my={{ base: "16px", md: "32px" }}
                >
                  Not only do we have digital copies to keep with us for the
                  rest of our days across hundreds of different archives, thanks
                  to printer manufacturers such as Epson, Hewlett Packard, and
                  Canon, we now have the ability to fill our photo albums, right
                  from the comfort of our living rooms.
                </Text>
                <Text
                  as='span'
                  display='block'
                  my={{ base: "16px", md: "32px" }}
                >
                  Whether it is Hewlett Packard with the award winning
                  Photosmart 8250, Canon, with the sleek and stylish Selphy
                  DS810, or Epson’s PictureMate Express Edition, it seems
                  everyone wants a slice of the home photo printing pie.
                </Text>
                <Text
                  as='span'
                  display='block'
                  my={{ base: "16px", md: "32px" }}
                >
                  Behind the looks, style, and hype of these printers are the
                  facts. For example, Hewlett Packard’s Photosmart 8250 has
                  become a legend in its own right for its amazing ability to
                  print a 4″ x 6″ photograph in only 14 seconds. All ringing in
                  around the same price, (Hewlett Packard Photosmart 8250
                  $179.99 MSRP, Canon Selphy DS810 $149.99 MSRP, and Epson
                  PictureMate Express Edition $149.99) Hewlett Packard’s
                  leadership and innovation in the field has brought them to the
                  top of the list.
                </Text>
              </Text>
            </VStack>
          </Flex>
        </Box>
      </Flex>
      <Section
        title={
          <Flex
            flexDirection='column'
            alignItems={{ base: "center", md: "flex-start" }}
          >
            <Text textStyle='paragraph-1' color='primaryBlue'>
              Latest
            </Text>
            <Text
              textAlign='center'
              as='h3'
              textStyle={{ base: "subHeading", md: "smallHeader" }}
              color='neutralTint'
            >
              Updates
            </Text>
          </Flex>
        }
        linkText='view all updates'
        link='/updates/'
      >
        <Stack
          justifyContent='flex-start'
          alignItems='center'
          direction={{ base: "column", md: "row" }}
          spacing='24px'
          alignSelf='stretch'
        >
          <UpdateCard />
          <UpdateCard />
        </Stack>
      </Section>

      <Flex px={{ base: "16px" }} my={{ lg: "100px" }} justifyContent='center'>
        <Subscription />
      </Flex>
    </Layout>
  );
};

export default UpdatePage;
