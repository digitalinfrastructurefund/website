import * as React from "react";
import { Box, Button, Text, Link, VStack } from "@chakra-ui/react";

const ResourcesCard = ({ quote, author, title, link, linkText }) => (
  <Box
    padding='24px'
    borderRadius='24px'
    boxShadow='0px 1px 4px 1px rgba(49, 50, 51, 0.3)'
    width={{ base: "288px", md: "340px", lg: "348px" }}
  >
    <VStack alignItems='flex-start' spacing='16px' height='240px'>
      <Text textStyle='paragraph-1' color='primaryBlue' noOfLines={2}>
        {quote}
      </Text>
      <Text textStyle='subHeading' color='neutralTint' noOfLines={3}>
        {title}
      </Text>
      <Text textStyle='paragraph-2' color='neutralTint-600'>
        {author}
      </Text>
    </VStack>
    <Button
      as={Link}
      href={link}
      target='_blank'
      variant='primary'
      width='100%'
      mt='20px'
    >
      {linkText ? linkText : "Read more"}
    </Button>
  </Box>
);

export default ResourcesCard;
