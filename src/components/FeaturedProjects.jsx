import { Box, Button, Image, Stack, Text, HStack } from "@chakra-ui/react";
import * as React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const FeaturedProjects = ({ projects }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const project = projects[activeIndex];

  return (
    <>
      <Box
        display='flex'
        alignItems='center'
        flexDir={{ base: "column", lg: "row" }}
      >
        <Box
          w={{ base: "256px", md: "524px", lg: "484px" }}
          h={{ base: "256px", md: "382px", lg: "468px" }}
        >
          <Image
            src={project.frontmatter?.coverImage?.publicURL}
            alt='Project covers'
            position='relative'
            bottom={{ base: "-40px", lg: "0" }}
            top={{ base: "0", lg: "-20px" }}
            borderRadius='24px'
            zIndex='1'
            loading='eager'
            h='100%'
            w='100%'
            objectFit='cover'
          />
        </Box>
        <Box
          bg='paleBox'
          padding={{ base: "16px", lg: "40px" }}
          borderRadius='24px'
          textAlign={{ base: "center", md: "left" }}
          width={{ base: "288px", md: "656px" }}
          pl={{ lg: "56px" }}
          position='relative'
          left={{ base: "0", lg: "-40px" }}
          h={{ lg: "484px" }}
        >
          <Text
            textStyle={{ base: "subHeading", md: "smallHeader" }}
            color='primaryDarkGrey'
            mb='16px'
            maxW={{ base: "256px", md: "576px" }}
          >
            {project.frontmatter?.title}
          </Text>
          <Text textStyle='paragraph-1' mb='28px' color='primaryDarkGrey'>
            {project.frontmatter?.description}
          </Text>
          <Text textStyle='smallLabel' color='secondaryMidGray' mb='28px'>
            {project.excerpt}
          </Text>
          <Text textStyle='paragraph-1' color='secondaryMidGray' mb='28px'>
            Participants: {project.frontmatter?.participants}
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            alignItems='center'
            spacing='20px'
            width='100%'
          >
            <Button
              alignSelf='stretch'
              variant='primary'
              width={{ md: "278px" }}
            >
              Contribute
            </Button>
            <Button
              alignSelf='stretch'
              variant='secondary'
              width={{ md: "278px" }}
            >
              Know more
            </Button>
          </Stack>
        </Box>
      </Box>

      <HStack
        justifyContent='center'
        my={{ base: "24px", lg: "" }}
        spacing='36px'
      >
        <Button
          variant='outline'
          borderRadius='100%'
          size='64px'
          onClick={() =>
            activeIndex === 0 ? "" : setActiveIndex(activeIndex - 1)
          }
        >
          <BsArrowLeftShort size='22px' />
        </Button>
        <Text textStyle='paragraph-2' color='secondaryMidGray'>
          {`${activeIndex + 1}/${projects.length}`}
        </Text>
        <Button
          onClick={() =>
            activeIndex === projects.length - 1
              ? ""
              : setActiveIndex(activeIndex + 1)
          }
          variant='outline'
          borderRadius='100%'
          size='64px'
        >
          <BsArrowRightShort size='22px' />
        </Button>
      </HStack>
    </>
  );
};

export default FeaturedProjects;
