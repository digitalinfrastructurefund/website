import "@fontsource/urbanist";
import * as React from "react";
import { Box, Flex, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/Layout";
import { ArrowBackIcon } from "@chakra-ui/icons";

import Section from "../../components/Section";
import Subscription from "../../components/Subscription";
import MDXCustomRenderer from "../../components/MDXRenderer";
import UpdateCard from "../../components/UpdateCard";

const UpdatePage = ({ data }) => {
  const { post, updateData } = data;
  const updates = updateData.updates;

  return (
    <Layout title={post.frontmatter.title}>
      <Flex
        px={{ base: "16px", sm: "32px" }}
        mb='40px'
        justifyContent={{ base: "flex-start", lg: "center" }}
      >
        <Box width={{ lg: "1088px" }} textAlign={{ lg: "left" }}>
          {/* To DO: use actual updates */}
          <Link to='/updates/'>
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
              <MDXCustomRenderer page='updates'>{post.body}</MDXCustomRenderer>
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
      </Section>

      <Flex px={{ base: "16px" }} my={{ lg: "100px" }} justifyContent='center'>
        <Subscription />
      </Flex>
    </Layout>
  );
};

export const updateQuery = graphql`
  query ($id: String) {
    post: mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }

    updateData: allMdx(
      filter: { frontmatter: { type: { eq: "update" } }, id: { ne: $id } }
      limit: 3
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

export default UpdatePage;
