import * as React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
  Link as ChakraLink,
  SimpleGrid,
} from "@chakra-ui/react";
import { graphql, Link } from "gatsby";

/**
 * Image files
 */
import digitalInfrastructureIllustration from "../images/digital-infrastructure-sm.png";
import digitalInfrastructureIllustrationMd from "../images/digital-infrastructure-md.png";
import digitalInfrastructureIllustrationLg from "../images/digital-infrastructure-lg.png";
import whatIsDIIllustrationSM from "../images/what-is-DI-sm.png";
import mozillaLogo from "../images/mozilla-logo.png";
import omidyarNetwork from "../images/on-logo.png";
import fordFoundation from "../images/ford-logo.jpg";
import logo2 from "../images/logo-2.png";
import openSocietyLogo from "../images/open-society-logo.png";
import Layout from "../components/Layout";
import Subscription from "../components/Subscription";
import FeaturedProjects from "../components/FeaturedProjects";
import Section from "../components/Section";
import EventCard from "../components/EventCard";
import UpdateCard from "../components/UpdateCard";
import { getAllResources } from "../lib/util";
import ResourcesCard from "../components/ResourceCard";
import ContactUs from "../components/ContactUs";

// markup
const IndexPage = ({ data }) => {
  const { updateData, projectData, allIndexJson, resourcesData } = data;
  const events = allIndexJson.eventData;
  const updates = updateData.updates;
  const projects = projectData.projects;
  const resourcesNodes = resourcesData.nodes;

  return (
    <Layout title='Digital • Infrastructure • Fund'>
      <Flex
        flexDirection='column'
        px={{
          base: "16px",
          sm: "32px",
        }}
        alignItems='center'
        textAlign='center'
      >
        <Text
          textStyle={{
            base: "subHeading",
            md: "smallHeader",
            lg: "mainHeader",
          }}
          as='h1'
          maxW={{
            base: "288px",
            md: "528px",
            lg: "994px",
          }}
          color='primaryDarkGrey'
        >
          Digital Infrastructure
          <br />
          Research and Development
        </Text>
        <Text
          textStyle={{
            base: "paragraph-1",
            lg: "bigQuote",
          }}
          mt={{
            base: "16px",
            md: "24px",
          }}
          color='primaryBlue'
        >
          Creating a sustainable future for the technology that powers our world
        </Text>
        <Image
          my={{
            base: "16px",
            md: "56px",
          }}
          alt='Digital Infrastructure illustration'
          srcSet={`${digitalInfrastructureIllustration} 576w, ${digitalInfrastructureIllustrationMd} 1408w, ${digitalInfrastructureIllustrationLg} 2160w`}
          sizes={
            "(min-width: 320px) calc(100vw - 32px), (min-width: 768px) 704px, (min-width: 1280px) 1080px"
          }
          src={digitalInfrastructureIllustration}
          maxW={{
            lg: "1080px",
          }}
        />
        <Button as={Link} to='/updates/' variant='primary'>
          see latest updates
        </Button>
      </Flex>
      <Flex
        mt='40px'
        px={{
          base: "16px",
          sm: "32px",
        }}
        flexDir='column'
        alignItems='center'
      >
        <Box textAlign='center'>
          <Text
            textStyle={{ base: "paragraph-1", md: "bigQuote" }}
            color='primaryBlue'
            my='8px'
          >
            What is
          </Text>
          <Text
            as='h3'
            mb={{
              base: "8px",
              md: "24px",
            }}
            textStyle={{
              base: "subHeading",
              md: "smallHeader",
              lg: "defaultHeader",
            }}
            color='primaryDarkGrey'
          >
            Digital Infrastructure
          </Text>
          <Box maxW={{ md: "576px", lg: "1016px" }}>
            <Text
              textStyle={{ base: "paragraph-1", md: "bigQuote" }}
              color={{ base: "secondaryMidGray", md: "primaryDarkGrey" }}
            >
              Digital infrastructure is the code, policies, and standards
              powering the technology that permeates every aspect of life, such
              as hospitals, banking, and social media.
            </Text>
            <Text
              textStyle={{ base: "paragraph-1", md: "bigQuote" }}
              color={{ base: "secondaryMidGray", md: "primaryDarkGrey" }}
            >
              This infrastructure is under-maintained and undermined in ways
              that often favor corporate and government interests over the needs
              of the public.
            </Text>
          </Box>
        </Box>
        <Flex
          direction={{ base: "column", md: "column-reverse", lg: "row" }}
          mt={{ md: "40px" }}
          alignItems='center'
        >
          <Image
            my='16px'
            alt='Digital Infrastructure illustration'
            src={whatIsDIIllustrationSM}
            maxW={{ md: "400px" }}
            mx={{ lg: "25px" }}
          />
          <VStack
            spacing={{ md: "32px" }}
            textAlign={{ base: "center", lg: "left" }}
            maxW={{ md: "576px", lg: "380px" }}
          >
            <Text textStyle='paragraph-1' color='secondaryMidGray'>
              We’re creating a community of researchers and practitioners to
              better understand the problem and to work together toward our
              common goal: a commons of technology, sustainably developed and
              maintained, for the benefit of everyone.
            </Text>
            <Text textStyle='paragraph-1' color='secondaryMidGray'>
              Our partners fund work in this space regularly. If you’d like to
              propose a project or join our funding partners, contact us using
              the form below, and we’ll be in touch.
            </Text>
          </VStack>
        </Flex>
        <Button
          as={ChakraLink}
          href='#contactUs'
          variant='primary'
          my={{ base: "16px", lg: "40px" }}
        >
          Contact us
        </Button>
      </Flex>

      {/* Events */}
      <Section title='Events' linkText='view all events' link='/events/'>
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
          {events.map(({ event }) => (
            <EventCard key={event.id} {...event} />
          ))}
        </SimpleGrid>
      </Section>
      {/* Updates */}
      <Section title='Updates' linkText='view all updates' link='/updates/'>
        <Stack
          justifyContent='flex-start'
          alignItems='center'
          direction={{ base: "column", md: "row" }}
          spacing='24px'
          alignSelf='stretch'
        >
          {updates.map((update, index) => (
            <UpdateCard {...update} key={index.toString()} />
          ))}
        </Stack>
      </Section>
      {/* Subscription */}
      <Flex flexDir='column' px='16px' my={{ lg: "100px" }}>
        <Subscription />
      </Flex>
      {/* Projects */}
      <Section title='Projects' linkText='view all projects' link='/projects/'>
        <Flex
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <FeaturedProjects projects={projects} />
        </Flex>
      </Section>
      {/* Resources */}
      <Section
        title={
          <VStack alignItems='flex-start'>
            <Text textStyle='paragraph-1' color='primaryBlue'>
              Latest
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
        linkText='view all resources'
        link='/resources/'
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
          {getAllResources(resourcesNodes)
            .slice(0, 3)
            .map((resource, index) => (
              <ResourcesCard {...resource} key={index.toString()} />
            ))}
        </SimpleGrid>
      </Section>

      <Flex
        px='16px'
        flexDir='column'
        alignItems='center'
        my={{ base: "32px", md: "100px" }}
      >
        <Text
          textStyle={{
            base: "subHeading",
            md: "smallHeader",
            lg: "defaultHeader",
          }}
          mb='24px'
          color='neutralTint'
        >
          Our funders
        </Text>

        <VStack
          textAlign='center'
          spacing='20px'
          maxW={{ md: "576px", lg: "830px" }}
        >
          <Text textStyle='paragraph-1' color='secondaryMidGray'>
            Building toward a more diverse and well-funded ecosystem for
            critical digital infrastructure, the Ford Foundation and Alfred P.
            Sloan Foundation came together in 2018 to fund thirteen research
            projects that fill gaps in understanding of how digital
            infrastructure is built, maintained, and sustained.
          </Text>
          <Text textStyle='paragraph-1' color='secondaryMidGray'>
            To continue to advance this agenda, Ford Foundation, Sloan
            Foundation, Mozilla, Omidyar Network and Open Society Foundations
            launched a 2020 Digital Infrastructure RFP to further study the
            maintenance of digital infrastructure.
          </Text>
        </VStack>
        <SimpleGrid
          templateColumns={{
            base: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
          }}
          columnGap={{ base: "24px", lg: "16px" }}
          rowGap='36px'
          my='35px'
          width={{ md: "704px", lg: "1088px" }}
          justifyItems='center'
        >
          <ChakraLink href='https://sloan.org/' isExternal>
            <Image
              src={logo2}
              h='73px'
              w='73px'
              alt='Alfred P. Sloan Foundation'
            />
          </ChakraLink>
          <ChakraLink href='https://www.fordfoundation.org/' isExternal>
            <Image
              src={fordFoundation}
              h='73px'
              w='73px'
              alt='Ford Foundation'
            />
          </ChakraLink>
          <ChakraLink href='https://foundation.mozilla.org/en/' isExternal>
            <Image
              src={mozillaLogo}
              h='73px'
              w='73px'
              alt='Mozilla Foundation'
            />
          </ChakraLink>
          <ChakraLink href='https://omidyar.com/' isExternal>
            <Image
              src={omidyarNetwork}
              h='73px'
              w='73px'
              alt='Omidyar Network'
            />
          </ChakraLink>
          <ChakraLink href='https://www.opensocietyfoundations.org' isExternal>
            <Image
              h='73px'
              w='73px'
              src={openSocietyLogo}
              alt='Open Society Foundations'
            />
          </ChakraLink>
        </SimpleGrid>
      </Flex>
      <ContactUs />
    </Layout>
  );
};

export const IndexPageQuery = graphql`
  query {
    updateData: allMdx(
      filter: { frontmatter: { type: { eq: "update" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 2
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
    projectData: allMdx(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 10
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
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
        slug
        excerpt
      }
    }
    allIndexJson(limit: 3, sort: { fields: [date], order: [DESC] }) {
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
    }

    resourcesData: allMdx(
      filter: { exports: { resources: { elemMatch: { title: { ne: null } } } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        exports {
          resources {
            author
            link
            linkText
            quote
            title
          }
        }
        frontmatter {
          title
        }
      }
    }
  }
`;

export default IndexPage;
