import * as React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { Link } from "gatsby";

const Section = ({ title, link, linkText, children }) => {
  const titleIsReactElement = React.isValidElement(title);
  return (
    <Flex
      px={{ base: "16px", md: "32px" }}
      flexDir='column'
      alignItems='center'
      my='32px'
      justifyContent='center'
    >
      <Box width={{ lg: "1088px" }}>
        <Flex
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems='center'
          mt='8px'
          mb='40px'
          width='100%'
        >
          {titleIsReactElement ? (
            <> {title} </>
          ) : (
            <Text
              textAlign='center'
              as='h3'
              textStyle={{ base: "subHeading", md: "smallHeader" }}
              color='neutralTint'
            >
              {title}
            </Text>
          )}
          {linkText && (
            <Box
              as={Link}
              to={link}
              display={{ base: "none", md: "inline-block" }}
            >
              <Text
                textStyle='buttonLabel'
                textTransform='uppercase'
                color='primaryBlue'
                letterSpacing='2.4px'
              >
                {linkText}
              </Text>
            </Box>
          )}
        </Flex>
        {children}
      </Box>
      {linkText && (
        <Box as={Link} to={link} my='50px' display={{ md: "none" }}>
          <Text
            textStyle='buttonLabel'
            textTransform='uppercase'
            color='primaryBlue'
            letterSpacing='2.4px'
          >
            {linkText}
          </Text>
        </Box>
      )}
    </Flex>
  );
};

export default Section;
