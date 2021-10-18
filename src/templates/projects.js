import "@fontsource/urbanist";
import * as React from "react";
import { Box, Flex, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Subscription from "../components/Subscription";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = ({ data }) => {
  const { projectData } = data;
  const projects = projectData.projects;

  return (
    <Layout title='Projects' activePage='projects'>
      <Flex
        px={{ base: "16px", sm: "32px" }}
        mb='40px'
        justifyContent={{ base: "center", md: "flex-start", lg: "center" }}
      >
        <Box w={{ lg: "1088px" }}>
          <VStack
            spacing='16px'
            alignItems={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "left" }}
            width='100%'
          >
            <Text
              textStyle={{ base: "subHeading", md: "smallHeader" }}
              color='primaryDarkGrey'
            >
              Projects
            </Text>
            <Text
              textStyle={{ base: "paragraph-1" }}
              color='primaryBlue'
              maxW={{ base: "288px", md: "472px" }}
            >
              Filling gaps in understanding how digital infrastructure is built,
              maintained, and sustained.
            </Text>
          </VStack>
        </Box>
      </Flex>
      <Flex px={{ base: "16px", sm: "32px" }} justifyContent='center'>
        <SimpleGrid
          templateColumns={{ lg: "repeat(3, 1fr)" }}
          gap={{ base: "40px", md: "24px" }}
          flexWrap='wrap'
          w={{ lg: "1088px" }}
          justifyItems='center'
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </SimpleGrid>
      </Flex>
      <Flex px={{ base: "16px", sm: "32px" }} my='40px' justifyContent='center'>
        <Subscription />
      </Flex>
    </Layout>
  );
};

export const projectPageQuery = graphql`
  query {
    projectData: allMdx(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      projects: nodes {
        frontmatter {
          title
          author
          date
          description
          path
          type
          coverImage {
            publicURL
          }
        }
        id
        slug
        excerpt(pruneLength: 72, truncate: true)
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

export default ProjectsPage;
