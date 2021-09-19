import * as React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { graphql, Link } from "gatsby";

/**
 * Image files
 */
import digitalInfrastructureIllustration from "../images/digital-infrastructure-sm.png";
import digitalInfrastructureIllustrationMd from "../images/digital-infrastructure-md.png";
import digitalInfrastructureIllustrationLg from "../images/digital-infrastructure-lg.png";
import contactUsBgIllustration from "../images/contactus-illustration.png";
import openCollectiveLogo from "../images/opencollective-logo.png";
import mozillaLogo from "../images/mozilla-logo.png";
import omidyarNetwork from "../images/on-logo.png";
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
              Digital infrastructure is the code, policies and standards
              powering the technology that permeates every aspect of life, such
              as hospitals, banking and social media.
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
            src={digitalInfrastructureIllustration}
            maxW={{ md: "400px" }}
            mx={{ lg: "25px" }}
          />
          <VStack
            spacing={{ md: "32px" }}
            textAlign={{ base: "center", lg: "left" }}
            maxW={{ md: "576px", lg: "380px" }}
          >
            <Text textStyle='paragraph-1' color='secondaryMidGray'>
              We’re creating a community of researchers an practitioners to be
              understand the problem and to work together toward our common
              goal: a commons of technology, sustainably developed and
              maintained, for the benefit of everyone.
            </Text>
            <Text textStyle='paragraph-1' color='secondaryMidGray'>
              Our partners fund work in this space regularly, if you’d like to
              propose a project or join our funding partners contact us using
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
        <Stack
          justifyContent='flex-start'
          alignItems='center'
          direction={{ base: "column", md: "row" }}
          spacing='24px'
          alignSelf='stretch'
        >
          {events.map(({ event }) => (
            <EventCard key={event.id} {...event} />
          ))}
        </Stack>
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
        <Flex flexDirection='column'>
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
        <Stack
          justifyContent='flex-start'
          alignItems='center'
          direction={{ base: "column", md: "row" }}
          spacing='24px'
          alignSelf='stretch'
        >
          {getAllResources(resourcesNodes)
            .slice(0, 3)
            .map((resource, index) => (
              <ResourcesCard {...resource} key={index.toString()} />
            ))}
        </Stack>
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
        <HStack my='35px' spacing='36px'>
          <Image h='73px' w='73px' src={openSocietyLogo} />
          <Image h='73px' w='73px' src={openCollectiveLogo} />
          <Image src={logo2} h='73px' w='73px' />
          <Image src={mozillaLogo} h='73px' w='73px' />
          <Image src={omidyarNetwork} h='73px' w='73px' />
        </HStack>
      </Flex>
      <Flex
        px='16px'
        flexDir='column'
        alignItems='center'
        my={{ base: "32px", md: "100px" }}
        id='contactUs'
      >
        <Box position='relative'>
          <Box
            display={{ base: "none", lg: "inline-block" }}
            position='absolute'
            backgroundImage={{
              lg: `url(${contactUsBgIllustration})`,
            }}
            backgroundRepeat='no-repeat'
            backgroundSize='contain'
            backgroundPosition='-20px -30px'
            w='410px'
            h='396px'
            zIndex='111'
            right='-90px'
            top='-50px'
          />
          <Box
            padding={{ base: "16px", md: "32px 64px", lg: "90px 96px 68px" }}
            borderRadius={{ base: "24px", lg: "40px" }}
            backgroundColor='subscriptionCard'
            w={{ md: "704px", lg: "1088px" }}
          >
            <Box mb='34px' textAlign={{ base: "center", md: "left" }}>
              <Text
                textStyle={{
                  base: "subHeading",
                  md: "smallHeader",
                  lg: "mainHeader",
                }}
                color='primaryDarkGrey'
                mb='8px'
              >
                Contact us
              </Text>
              <Text
                textStyle={{ base: "paragraph-1", md: "bigQuote" }}
                color='secondaryMidGray'
                maxW={{ lg: "568px" }}
              >
                Feel free to contact us if you want to be alerted when there's
                funding/be a funder. You can also contact us for any feedback,
                to say hi, or to show support to us or any of the projects.
              </Text>
            </Box>
            <VStack alignItems='flex-start' spacing='20px' as='form'>
              <Stack
                direction={{ base: "column", md: "row" }}
                alignSelf='stretch'
                spacing={{ base: "16px", lg: "40px" }}
              >
                <VStack alignItems='flex-start' w={{ base: "100%" }}>
                  <Text textStyle='inputLabel' color='neutralTint'>
                    Your name
                  </Text>
                  <Input
                    bg='white'
                    borderRadius='32px'
                    type='text'
                    placeholder='Full Name'
                  />
                </VStack>
                <VStack alignItems='flex-start' w={{ base: "100%" }}>
                  <Text textStyle='inputLabel' color='neutralTint'>
                    Email
                  </Text>
                  <Input
                    bg='white'
                    borderRadius='32px'
                    type='email'
                    placeholder='Email'
                  />
                </VStack>
              </Stack>
              <VStack alignItems='flex-start' w={{ base: "100%" }}>
                <Text textStyle='inputLabel' color='neutralTint'>
                  Message
                </Text>
                <Textarea
                  bg='white'
                  borderRadius='24px'
                  placeholder='Enter your message'
                  border='1px solid #DCDEE0 '
                  boxShadow='0px 2px 0px 0px #3132330D inset'
                  minH='132px'
                  p='16px'
                />
              </VStack>
              <Button w={{ base: "100%", lg: "209px" }} variant='primary'>
                Send message
              </Button>
            </VStack>
          </Box>
        </Box>
      </Flex>
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
            publicURL
          }
        }
        excerpt
      }
    }
    allIndexJson(limit: 3) {
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
      }
    }
  }
`;

export default IndexPage;
