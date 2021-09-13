import "@fontsource/urbanist";
import * as React from "react";
import {
  Box,
  Flex,
  Link,
  Text,
  Image,
  VStack,
  Stack,
  HStack,
  Avatar,
} from "@chakra-ui/react";

import Layout from "../components/Layout";
import { ArrowBackIcon } from "@chakra-ui/icons";

import PostImageXS from "../images/post-xs.png";
import PostImageMD from "../images/post-md.png";
import PostImageLG from "../images/post-lg.png";
import roxieAvatar from "../images/avatar.png";
import postIllustration from "../images/post-illustration.png";

import Section from "../components/Section";
import { UpdateCard } from "./updates";
import { ResourceCard } from "./resources";
import { ProjectCard } from "./projects";
import Subscription from "../components/Subscription";

const ProjectPage = () => {
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
                Sedhaitu, Philipines
              </Text>
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
                How do technical decision-makers assess the security
                ramifications of open source software components before adopting
                them in their projects and where can systemic interventions to
                the FOSS ecosystem be targeted to collectively improve its
                security?
                <Text
                  as='span'
                  display='block'
                  my={{ base: "16px", md: "32px" }}
                >
                  Security is a critical part of the often overlooked area of
                  open source software maintenance. While the benefits of FOSS
                  are well recognized, there is no widespread understanding of
                  the security tradeoffs of pervasive software reuse. This
                  project will use a mix of qualitative research to examine
                  attitudes of technical decision-makers towards the security of
                  FOSS components, and empirical analysis to study their
                  security failures at an infrastructural level to identify and
                  proactively respond to systemic issues in the FOSS ecosystem
                  that underpin these failures.
                </Text>
              </Text>
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
        <Stack direction={{ base: "column" }}>
          <HStack spacing='24px'>
            <Avatar
              borderRadius='24px'
              w='104px'
              h='104px'
              src={roxieAvatar}
              alt='Roxie Myers'
            />
            <VStack alignItems='flex-start'>
              <Text textStyle='paragraph-1' color='primaryDarkGrey'>
                Roxie Myers
              </Text>
              <Text textStyle='paragraph-2' color='secondaryMidGray'>
                Position
              </Text>
            </VStack>
          </HStack>
        </Stack>
      </Section>

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
        <Stack
          justifyContent='flex-start'
          alignItems='center'
          direction={{ base: "column", md: "row" }}
          spacing='24px'
          alignSelf='stretch'
        >
          <ResourceCard />
          <ResourceCard />
        </Stack>
      </Section>

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
        <Stack
          justifyContent='flex-start'
          alignItems='center'
          direction={{ base: "column", md: "row" }}
          spacing='24px'
          alignSelf='stretch'
        >
          <ProjectCard />
          <ProjectCard />
        </Stack>
      </Section>
      <Flex px={{ base: "16px" }} my={{ lg: "100px" }} justifyContent='center'>
        <Subscription />
      </Flex>
    </Layout>
  );
};

export default ProjectPage;
