import * as React from "react";
import { Box, Button, Text, Image } from "@chakra-ui/react";

import { Link } from "gatsby";
import { formatDate } from "../lib/date";

const UpdateCard = ({ excerpt, frontmatter, slug }) => {
  return (
    <Box
      width={{ base: "288px", md: "340px" }}
      boxShadow='0px 1px 4px 1px rgba(49, 50, 51, 0.1)'
      borderRadius='24px'
    >
      {frontmatter.coverImage && (
        <Image
          src={frontmatter.coverImage.publicURL}
          alt='Up'
          w='100%'
          h='120px'
          borderTopRadius='24px'
        />
      )}
      <Box p='24px'>
        <Box minH='200px'>
          <Text textStyle='subHeading' color='neutralTint'>
            {frontmatter.title}
          </Text>
          <Text my='12px' textStyle='xSmallLabel' color='primaryBlue'>
            <Text as='span'>{formatDate(frontmatter.date)} • </Text>
            <Text as='span'>By {frontmatter.author}</Text>
          </Text>
          <Text textStyle='paragraph-1' color='neutralTint-600'>
            {excerpt}
          </Text>
        </Box>
      </Box>
      <Box p='24px'>
        <Button
          as={Link}
          to={`/updates/${slug}/`}
          variant='primary'
          width='100%'
        >
          Read more
        </Button>
      </Box>
    </Box>
  );
};

export default UpdateCard;
