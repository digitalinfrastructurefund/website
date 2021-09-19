import * as React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "gatsby";

const ProjectCard = ({ frontmatter, excerpt, slug }) => (
  <Box
    width={{ base: "288px", md: "340px" }}
    boxShadow='0px 1px 4px 1px rgba(49, 50, 51, 0.1)'
    borderRadius='24px'
  >
    <Box
      w='100%'
      h={{ base: "120px" }}
      borderTopRadius='24px'
      background={
        frontmatter.coverImage
          ? `url(${frontmatter.coverImage.publicURL}) no-repeat`
          : ""
      }
      backgroundSize='cover'
      mb='24px'
    />
    <Box px='24px' h='200px'>
      <Text textStyle='subHeading' mb='12px' color='neutralTint'>
        {frontmatter.title}
      </Text>
      <Text textStyle='paragraph-1' mb='32px' color='neutralTint-600'>
        {excerpt}
      </Text>
    </Box>
    <Box p='24px'>
      <Button as={Link} variant='primary' width='100%' to={`/projects/${slug}`}>
        Read more
      </Button>
    </Box>
  </Box>
);

export default ProjectCard;
