import * as React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "gatsby";

const renderParticipants = (participants) => {
  const participantsList = participants.split(",");
  if (participantsList.length <= 3) {
    return participants;
  }

  const firstTwo = participantsList.splice(0, 3);
  return `${firstTwo.join(",")} and ${participantsList.length} more...`;
};

const ProjectCard = ({ frontmatter, excerpt, slug }) => {
  return (
    <Box
      width={{ base: "288px", md: "340px" }}
      boxShadow='0px 1px 4px 1px rgba(49, 50, 51, 0.1)'
      borderRadius='24px'
      pt={frontmatter.coverImage ? "unset" : "24px"}
    >
      {frontmatter.coverImage && (
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
      )}

      <Box px='24px' h='240px'>
        <Text
          noOfLines={3}
          textStyle='subHeading'
          mb='12px'
          color='neutralTint'
        >
          {frontmatter.title}
        </Text>
        {frontmatter.participants && (
          <Text textStyle='smallLabel' mb='12px' color='primaryBlue'>
            {renderParticipants(frontmatter.participants)}
          </Text>
        )}
        <Text
          textStyle='paragraph-1'
          mb='32px'
          color='neutralTint-600'
          noOfLines={3}
        >
          {excerpt}
        </Text>
      </Box>
      <Box p='24px'>
        <Button
          as={Link}
          variant='primary'
          width='100%'
          to={`/projects/${slug}`}
        >
          Read more
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectCard;
