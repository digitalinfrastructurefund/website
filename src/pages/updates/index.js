import "@fontsource/urbanist";
import * as React from "react";
import { Box, Flex, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import Subscription from "../../components/Subscription";
import UpdateCard from "../../components/UpdateCard";
import { formatDate } from "../../lib/date";

const UpdatesPage = ({ data }) => {
  console.log(data);
  const { updateData } = data;
  const updates = updateData.updates;

  const featuredUpdate = updates[0];

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
          {featuredUpdate.frontmatter.coverImage && (
            <Image
              w={{ md: "704px", lg: "520px" }}
              h='400px'
              src={featuredUpdate.frontmatter.coverImage.publicURL}
              alt='Update laptop image'
              mb='32px'
              borderRadius='24px'
            />
          )}
          <Box ml={{ lg: "24px" }}>
            <Text textStyle='subHeading' color='primaryBlue'>
              Latest Update
            </Text>
            <Text textStyle='smallHeader' mt='32px' color='primaryDarkGrey'>
              {featuredUpdate.frontmatter.title}
            </Text>
            <Text my='24px' textStyle='bigQuote' color='secondaryMidGray'>
              {featuredUpdate.excerpt}
            </Text>
            <Text textStyle='smallLabel' color='primaryBlue'>
              {formatDate(featuredUpdate.frontmatter.date)} • By{" "}
              {featuredUpdate.frontmatter.author}
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
          {updates.map((update, index) => (
            <UpdateCard {...update} key={index.toString()} />
          ))}
        </SimpleGrid>
      </Flex>
      <Flex px={{ base: "16px" }} my={{ lg: "100px" }} justifyContent='center'>
        <Subscription />
      </Flex>
    </Layout>
  );
};

export const updatesQuery = graphql`
  query {
    updateData: allMdx(
      filter: { frontmatter: { type: { eq: "update" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 10
    ) {
      updates: nodes {
        frontmatter {
          title
          author
          date
          path
          type
          coverImage {
            publicURL
          }
        }
        slug
        excerpt(pruneLength: 72, truncate: true)
      }
    }
  }
`;

export default UpdatesPage;
