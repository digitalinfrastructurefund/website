import * as React from "react";
import {
  Flex,
  Box,
  Text,
  HStack,
  Button,
  VStack,
  Image,
  Link as ChakraLink
} from "@chakra-ui/react";
import { TiMicrophone, TiSocialTwitter } from "react-icons/ti";
import { IoLogoSlack } from "react-icons/io";

import ocLogo from "../images/oc-full-logo.png";
import ccDesignLogo from "../images/cc-design.svg";

const Footer = () => (
  <Flex px='16px' flexDir='column' alignItems='center' my='32px'>
    <Box
      display={{ lg: "flex" }}
      justifyContent={{ lg: "center" }}
      alignItems={{ lg: "center" }}
    >
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent='space-between'
        width={{ base: "100%", lg: "1088px" }}
        alignItems={{ base: "center", lg: "flex-start" }}
        pt='40px'
        borderTop='4px solid'
        borderTopColor='secondaryLime'
      >
        <Box>
          <Box textAlign={{ base: "center", lg: "left" }}>
            <Text textStyle='paragraph-1' color='primaryDarkGrey' mb='8px'>
              Digital • Infrastructure •{" "}
              <Text as='span' color='primaryBlue'>
                Fund
              </Text>
            </Text>
            <Text textStyle='paragraph-2' color='primaryBlue' mb='24px'>
              Creating a sustainable future for the technology that powers our
              world.
            </Text>
          </Box>
          <Box
            textAlign={{ base: "center", lg: "left" }}
            mt='24px'
            mb={{ base: "64px", lg: "0" }}
            display={{ lg: "flex" }}
            flexDirection='row-reverse'
            justifyContent='flex-end'
            alignItems='center'
          >
            <Text
              mx={{ lg: "10px" }}
              textStyle='paragraph-2'
              color='secondaryMidGray'
              mb={{ base: "16px", lg: "0" }}
            >
              <Text as='span' display={{ base: "none", lg: "inline-block" }}>
                •
              </Text>{" "}
              2021 - All rights reserved
            </Text>
            <HStack spacing='12px' justifyContent='center'>
              <ChakraLink href='https://dif.fireside.fm' isExternal>
                <Button
                  h='40px'
                  w='40px'
                  p='8px'
                  variant='outline'
                  borderRadius='100px'
                  borderColor='neutralTint-400'
                  borderWidth='1px'
                  alt='Digital Infrastructure Fund Podcast'
                >
                  <TiMicrophone size='20px' color='#76777A' />
                </Button>
              </ChakraLink>
              <ChakraLink href='https://twitter.com/DigInfFund/' isExternal>
                <Button
                  h='40px'
                  w='40px'
                  p='8px'
                  variant='outline'
                  borderRadius='100px'
                  borderColor='neutralTint-400'
                  borderWidth='1px'
                  alt='@DigInfFund'
                >
                  <TiSocialTwitter size='20px' color='#76777A' />
                </Button>
              </ChakraLink>
              <ChakraLink href='https://digi-infrastructure.slack.com' isExternal>
                <Button
                  h='40px'
                  w='40px'
                  p='8px'
                  variant='outline'
                  borderRadius='100px'
                  borderColor='neutralTint-400'
                  borderWidth='1px'
                  alt='@DigInfFund'
                >
                  <IoLogoSlack size='20px' color='#76777A' />
                </Button>
              </ChakraLink>
            </HStack>
          </Box>
        </Box>
        <VStack
          spacing='16px'
          alignItems={{ base: "center", lg: "flex-start" }}
        >
          <Text textStyle='smallLabel' color='neutralTint'>
            Powered by:
          </Text>
          <ChakraLink
            href='https://opencollective.com'
            isExternal
          >
            <Image w='151px' h='29px' src={ocLogo} alt='Open collective logo' />
          </ChakraLink>
          <ChakraLink
            href='https://www.figma.com/file/omAmFnZDmHFfWPxqOQqp4a/Digital-Infrastructure-Fund---Website?node-id=376%3A13923'
            isExternal
          >
            <Image
              w='144px'
              h='36px'
              src={ccDesignLogo}
              alt='Design available'
            />
          </ChakraLink>
        </VStack>
      </Flex>
    </Box>
  </Flex>
);

export default Footer;
