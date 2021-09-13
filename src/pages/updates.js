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
import updateCardCover from "../images/update-card-cover.png";
import PostImageMD from "../images/post-md.png";

import Layout from "../components/Layout";
import Subscription from "../components/Subscription";

const UpdatesPage = () => {
  return (
    <Layout>
      <Flex
        px={{ base: "16px", sm: "32px" }}
        justifyContent={{ lg: "center" }}
        alignItems={{ lg: "center" }}
      >
        <VStack
          spacing='16px'
          alignItems={{ base: "center", md: "flex-start" }}
          textAlign='center'
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
            Updates
          </Text>
          <Text
            textStyle={{ base: "paragraph-1", lg: "bigQuote" }}
            color='primaryBlue'
          >
            Read through the latest updates from our projects
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
            <Text textStyle='subHeading' color='primaryBlue'>
              Latest Update
            </Text>
            <Text textStyle='smallHeader' mt='32px' color='primaryDarkGrey'>
              Security Ramifications of Open Source Software
            </Text>
            <Text my='24px' textStyle='bigQuote' color='secondaryMidGray'>
              What are the security ramifications of the extensive use of
              open-source software in modern software supply chains & how can
              security be improved?
            </Text>
            <Text textStyle='smallLabel' color='primaryBlue'>
              Aug 14th 2021 • By Anushah Hossain
            </Text>
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
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
        </SimpleGrid>
      </Flex>
      <Flex px={{ base: "16px" }} my={{ lg: "100px" }} justifyContent='center'>
        <Subscription />
      </Flex>
    </Layout>
  );
};

export const UpdateCard = () => (
  <Box
    width={{ base: "288px", md: "340px" }}
    boxShadow='0px 1px 4px 1px rgba(49, 50, 51, 0.1)'
    borderRadius='24px'
  >
    <Image
      src={updateCardCover}
      alt='Up'
      w='100%'
      h='120px'
      borderTopRadius='24px'
    />
    <Box p='24px'>
      <Text textStyle='subHeading' color='neutralTint'>
        Digital Infrastructure Community Call
      </Text>
      <Text my='12px' textStyle='xSmallLabel' color='primaryBlue'>
        <Text as='span'>Aug 14th 2021 • </Text>
        <Text as='span'>By Anushah Hossain</Text>
      </Text>
      <Text textStyle='paragraph-1' color='neutralTint-600'>
        Regular, open call for digital infrastructure project updates, news,
        questions and goings on.
      </Text>
      <Button variant='primary' width='100%' mt='40px'>
        Read more
      </Button>
    </Box>
  </Box>
);

export default UpdatesPage;
