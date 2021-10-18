import "@fontsource/urbanist";
import * as React from "react";
import { Box, Flex, Text, Image, VStack, SimpleGrid } from "@chakra-ui/react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/Layout";
import { ArrowBackIcon } from "@chakra-ui/icons";

import postIllustration from "../../images/post-illustration.png";

import Section from "../../components/Section";
import UpdateCard from "../../components/UpdateCard";
import Subscription from "../../components/Subscription";
import MDXCustomRenderer from "../../components/MDXRenderer";
import TeamMemberCard from "../../components/TeamMemberCard";
import ResourcesCard from "../../components/ResourceCard";
import ProjectCard from "../../components/ProjectCard";

const ProjectPage = ({ data }) => {
  const { post, updateData, projectData } = data;
  const team = post.exports?.team;
  const resources = post.exports?.resources;
  const updates = updateData.updates;
  const projects = projectData.projects;

  return (
    <Layout title={post.frontmatter.title}>
      <Flex
        px={{ base: "16px", sm: "32px" }}
        mb='40px'
        justifyContent={{ base: "flex-start", lg: "center" }}
      >
        <Box width={{ lg: "1088px" }} textAlign={{ lg: "left" }}>
          <Link to='/projects/'>
            <Text
              textStyle='buttonLabel'
              textTransform='uppercase'
              color='primaryBlue'
              display='flex'
              alignItems='center'
            >
              <ArrowBackIcon />
              <Text as='span' mx='8px'>
                all Projects
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
          {post.frontmatter.coverImage && (
            <Image
              src={post.frontmatter.coverImage.publicURL}
              alt='Post Image'
              mb='40px'
            />
          )}
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            alignItems='center'
          >
            <VStack
              alignItems='flex-start'
              spacing='24px'
              textAlign='left'
              width={{ base: "288px", md: "704px", lg: "718px" }}
            >
              <Text
                textStyle={{ base: "paragraph-1", md: "bigQuote" }}
                color='primaryBlue'
              >
                {post.frontmatter.author}
              </Text>
              <MDXCustomRenderer>{post.body}</MDXCustomRenderer>
            </VStack>
            <Image
              display={{ base: "none", lg: "block" }}
              src={postIllustration}
              alt='Post Illustration'
              w='328px'
              h='185px'
              ml='24px'
            />
          </Flex>
        </Box>
      </Flex>
      <Section
        title={
          <Flex
            flexDirection='column-reverse'
            alignItems={{ base: "center", md: "flex-start" }}
          >
            <Text textStyle='paragraph-1' color='primaryBlue'>
              From this Project
            </Text>
            <Text
              textAlign='center'
              as='h3'
              textStyle={{ base: "subHeading", md: "smallHeader" }}
              color='neutralTint'
            >
              Latest Updates
            </Text>
          </Flex>
        }
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
          {updates.map((update) => (
            <UpdateCard {...update} key={update.id} />
          ))}
        </SimpleGrid>
      </Section>

      {team && (
        <Section
          title={
            <VStack alignItems={{ base: "center", md: "flex-start" }}>
              <Text textStyle='paragraph-1' color='primaryBlue'>
                This is
              </Text>
              <Text
                textAlign='center'
                as='h3'
                textStyle={{ base: "subHeading", md: "smallHeader" }}
                color='neutralTint'
              >
                Our team
              </Text>
            </VStack>
          }
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
            {team.map((member, index) => (
              <TeamMemberCard {...member} key={index.toString()} />
            ))}
          </SimpleGrid>
        </Section>
      )}
      {resources && (
        <Section
          title={
            <VStack
              flexDirection='column-reverse'
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Text textStyle='paragraph-1' color='primaryBlue'>
                From this project
              </Text>
              <Text
                textAlign='center'
                as='h3'
                textStyle={{ base: "subHeading", md: "smallHeader" }}
                color='neutralTint'
              >
                Resources
              </Text>
            </VStack>
          }
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
            {resources.map((resource, index) => (
              <ResourcesCard
                {...resource}
                quote={resource.quote || post.frontmatter.title}
                key={index.toString()}
              />
            ))}
          </SimpleGrid>
        </Section>
      )}

      <Section
        title={
          <VStack alignItems={{ base: "center", md: "flex-start" }}>
            <Text textStyle='paragraph-1' color='primaryBlue'>
              View more
            </Text>
            <Text
              textAlign='center'
              as='h3'
              textStyle={{ base: "subHeading", md: "smallHeader" }}
              color='neutralTint'
            >
              Projects
            </Text>
          </VStack>
        }
        linkText='view all projects'
        link='/projects/'
      >
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
      </Section>

      <Flex px={{ base: "16px" }} my={{ lg: "100px" }} justifyContent='center'>
        <Subscription />
      </Flex>
    </Layout>
  );
};

export const projectQuery = graphql`
  query ($id: String) {
    post: mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        coverImage {
          publicURL
        }
      }
      body
      exports {
        team {
          name
          role
          image {
            publicURL
          }
        }
        resources {
          quote
          author
          title
          linkText
          link
        }
      }
    }

    updateData: allMdx(
      filter: { frontmatter: { type: { eq: "update" } } }
      sort: { fields: frontmatter___date, order: DESC }
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
        id
        excerpt(pruneLength: 72, truncate: true)
      }
    }

    projectData: allMdx(
      filter: { id: { ne: $id }, frontmatter: { type: { eq: "project" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
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
    }
  }
`;

export default ProjectPage;
