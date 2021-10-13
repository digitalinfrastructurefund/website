import { Box, Button, Stack, Text, HStack, Grid } from "@chakra-ui/react";
import { Link } from "gatsby";
import * as React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const FeaturedProjects = ({ projects }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const project = projects[activeIndex];
  const hasCoverImage = project.frontmatter.coverImage ? true : false;

  return (
    <>
      <Grid
        justifyItems='center'
        placeItems='center'
        templateColumns={{ base: "1fr", lg: hasCoverImage ? "1fr 1fr" : "1fr" }}
        w={{
          base: "288px",
          md: "656px",
          lg: "1088px",
        }}
      >
        {hasCoverImage && (
          <Box
            w={{ base: "256px", md: "524px", lg: "484px" }}
            h={{ base: "256px", md: "382px", lg: "468px" }}
            bottom={{ base: "-40px", lg: "0" }}
            top={{ base: "0", lg: "-20px" }}
            borderRadius='24px'
            zIndex='1'
            position='relative'
          >
            <GatsbyImage
              image={getImage(project.frontmatter.coverImage)}
              alt='Project covers image'
              style={{
                height: "100%",
                objectFit: "cover",
                borderRadius: "24px",
              }}
            />
          </Box>
        )}

        <Box
          bg='paleBox'
          padding={{ base: "16px", lg: "40px" }}
          borderRadius='24px'
          textAlign={{ base: "center", md: "left" }}
          pl={{ lg: hasCoverImage ? "96px" : "40px" }}
          position='relative'
          right={{ base: "0", lg: hasCoverImage ? "51px" : "0" }}
          h={{ lg: hasCoverImage ? "484px" : "372px" }}
          maxW={{ lg: hasCoverImage ? "655px" : "100%" }}
        >
          <Text
            textStyle={{ base: "subHeading", md: "smallHeader" }}
            color='primaryDarkGrey'
            mb='16px'
            maxW={{
              base: "256px",
              md: "576px",
              lg: hasCoverImage ? "519px" : "fit-content",
            }}
          >
            {project.frontmatter?.title}
          </Text>
          <Text textStyle='paragraph-1' mb='28px' color='primaryDarkGrey'>
            {project.frontmatter?.description}
          </Text>
          <Text textStyle='smallLabel' color='secondaryMidGray' mb='28px'>
            {project.excerpt}
          </Text>
          {project.frontmatter?.participants && (
            <Text textStyle='paragraph-1' color='secondaryMidGray' mb='28px'>
              Participants: {project.frontmatter?.participants}
            </Text>
          )}

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
              to={`/projects/${project.slug}`}
              as={Link}
            >
              Know more
            </Button>
          </Stack>
        </Box>
      </Grid>

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
