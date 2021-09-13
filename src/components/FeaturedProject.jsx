import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import * as React from "react";

import projectImageCover from "../images/project-cover-sm.png";

const FeaturedProject = () => (
  <Box
    display='flex'
    alignItems='center'
    flexDir={{ base: "column", lg: "row" }}
  >
    <Image
      w={{ base: "256px", md: "524px", lg: "484px" }}
      h={{ base: "256px", md: "382px", lg: "468px" }}
      src={projectImageCover}
      alt='Project covers'
      position='relative'
      bottom={{ base: "-40px", lg: "0" }}
      right={{ base: "0", lg: "-59px" }}
      top={{ base: "0", lg: "-20px" }}
      zIndex='1'
    />
    <Box
      bg='paleBox'
      padding={{ base: "16px", lg: "40px" }}
      borderRadius='24px'
      textAlign={{ base: "center", md: "left" }}
      width={{ base: "288px", md: "656px" }}
      pl={{ lg: "96px" }}
    >
      <Text
        textStyle={{ base: "subHeading", md: "smallHeader" }}
        color='primaryDarkGrey'
        mb='16px'
        maxW={{ base: "256px", md: "576px" }}
      >
        Building International Open Source Communities
      </Text>
      <Text textStyle='paragraph-1' mb='28px' color='primaryDarkGrey'>
        What factors encourage and sustain international communities of
        contributors to open source projects?
      </Text>
      <Text textStyle='smallLabel' color='secondaryMidGray' mb='28px'>
        Studies of code repositories often suggest little open source activity
        originating in South Asia, yet regional communities continue to form
        around major projects. What is the nature of participation in open
        source software in these regional communities?
      </Text>
      <Text textStyle='paragraph-1' color='secondaryMidGray' mb='28px'>
        Participants: Anushah Hossain @ Uni. Berkeley
      </Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        alignItems='center'
        spacing='20px'
        width='100%'
      >
        <Button alignSelf='stretch' variant='primary' width={{ md: "278px" }}>
          Contribute
        </Button>
        <Button alignSelf='stretch' variant='secondary' width={{ md: "278px" }}>
          Know more
        </Button>
      </Stack>
    </Box>
  </Box>
);

export default FeaturedProject;
