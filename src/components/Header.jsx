import * as React from "react";
import {
  Flex,
  Heading,
  Box,
  Text,
  HStack,
  // Link,
  SimpleGrid,
} from "@chakra-ui/layout";
import { Button, Collapse, useDisclosure } from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { TiMicrophone, TiSocialTwitter } from "react-icons/ti";
import { IoLogoSlack, IoMdClose } from "react-icons/io";
import { Link } from "gatsby";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position='relative' mb='32px'>
      <Flex
        padding='16px'
        justifyContent='space-between'
        minH={{
          base: "56px",
          md: "88px",
        }}
        alignItems='center'
        px={{
          sm: "20px",
          lg: "32px",
        }}
        py={{
          md: "16px",
        }}
      >
        <Logo />
        <Button
          display={{ md: "none" }}
          background='transparent'
          outline='none'
          onClick={onToggle}
        >
          {isOpen ? (
            <IoMdClose color='#55555F' size='20px' />
          ) : (
            <HiMenu color='#55555F' size='20px' />
          )}
        </Button>
        <Box display={{ base: "none", md: "inline-block" }}>
          <NavLinks />
        </Box>
      </Flex>
      <MobileNav isOpen={isOpen} />
    </Box>
  );
};

const MobileNav = ({ isOpen }) => {
  return (
    <Collapse in={isOpen} animateOpacity>
      <Flex
        p='16px 16px 24px'
        flexDir='column'
        alignItems='center'
        borderBottomRadius='16px'
        boxShadow='0px 8px 12px rgba(20, 20, 20, 0.16)'
        position='absolute'
        zIndex='11'
        top='56px'
        bg='white'
        width='100%'
      >
        <NavLinks />
        <Box>
          <Text
            textStyle='paragraph-2'
            color='primaryBlue'
            textAlign='center'
            maxW='288px'
          >
            Creating a sustainable future for the technology that powers our
            world.
          </Text>
        </Box>
        <Box textAlign='center' mt='24px'>
          <HStack spacing='12px' justifyContent='center'>
            <Button
              h='40px'
              w='40px'
              p='8px'
              variant='outline'
              borderRadius='100px'
              borderColor='neutralTint-400'
              borderWidth='1px'
            >
              <TiMicrophone size='20px' color='#C0C5CC' />
            </Button>
            <Button
              h='40px'
              w='40px'
              p='8px'
              variant='outline'
              borderRadius='100px'
              borderColor='neutralTint-400'
              borderWidth='1px'
            >
              <TiSocialTwitter size='20px' color='#C0C5CC' />
            </Button>
            <Button
              h='40px'
              w='40px'
              p='8px'
              variant='outline'
              borderRadius='100px'
              borderColor='neutralTint-400'
              borderWidth='1px'
            >
              <IoLogoSlack size='20px' color='#C0C5CC' />
            </Button>
          </HStack>
          <Text textStyle='paragraph-2' color='secondaryMidGray' mt='16px'>
            2021 - All rights reserved
          </Text>
        </Box>
      </Flex>
    </Collapse>
  );
};

const Logo = () => (
  <Link to='/'>
    <Heading
      fontSize='16px'
      lineHeight='24px'
      letterSpacing='0.4px'
      fontWeight='600'
      color='primaryDarkgray'
    >
      Digital • Infrastructure •
      <Text as='span' color='primaryBlue'>
        Fund
      </Text>
    </Heading>
  </Link>
);

const NavLinks = () => (
  <SimpleGrid
    templateColumns={{
      base: "1fr 1fr",
      md: "repeat(4, 1fr)",
    }}
    gridGap={{
      base: "24px",
      md: "8px",
    }}
    my={{
      base: "32px",
      md: "0",
    }}
  >
    <Link to='/projects/'>
      <Text
        padding='11px 16px'
        textStyle='smallLabel'
        color='primaryDarkGrey'
        fontWeight='600'
      >
        Projects
      </Text>
    </Link>
    <Link to='/updates/'>
      <Text
        padding='11px 16px'
        textStyle='smallLabel'
        color='primaryDarkGrey'
        fontWeight='600'
      >
        Updates
      </Text>
    </Link>

    <Link to='/events/'>
      <Text
        padding='11px 16px'
        textStyle='smallLabel'
        color='primaryDarkGrey'
        fontWeight='600'
      >
        Events
      </Text>
    </Link>
    <Link to='/resources/'>
      <Text
        padding='11px 16px'
        textStyle='smallLabel'
        color='primaryDarkGrey'
        fontWeight='600'
      >
        Resources
      </Text>
    </Link>
  </SimpleGrid>
);

export default Header;
