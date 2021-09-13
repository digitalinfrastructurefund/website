import "@fontsource/urbanist";
import * as React from "react";
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

/**
 * Images
 */
import projectCardCover from "../images/project-card-cover.png";

import Layout from "../components/Layout";
import Subscription from "../components/Subscription";
import { Link } from "gatsby";

const ProjectsPage = () => {
  return (
    <Layout>
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
        <Stack
          direction={{ base: "column", md: "row" }}
          alignItems='center'
          spacing={{ base: "40px", md: "24px" }}
          flexWrap='wrap'
          w={{ lg: "1088px" }}
        >
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Stack>
      </Flex>
      <Flex px={{ base: "16px", sm: "32px" }} my='40px' justifyContent='center'>
        <Subscription />
      </Flex>
    </Layout>
  );
};

export const ProjectCard = () => (
  <Box
    width={{ base: "288px", md: "340px" }}
    boxShadow='0px 1px 4px 1px rgba(49, 50, 51, 0.1)'
    borderRadius='24px'
  >
    <Box
      w='100%'
      h={{ base: "120px" }}
      borderTopRadius='24px'
      background={`url(${projectCardCover}) no-repeat`}
      backgroundSize='contain'
    />
    <Box px='24px'>
      <Text textStyle='subHeading' mb='12px' color='neutralTint'>
        Municipal Digital Infrastructure
      </Text>
      <Text textStyle='paragraph-1' mb='32px' color='neutralTint-600'>
        How do we build, sustain & improve city-led open source infrastructure
        projects?
      </Text>
      <Button as={Link} variant='primary' width='100%' to='/project/'>
        Read more
      </Button>
    </Box>
  </Box>
);

export default ProjectsPage;
