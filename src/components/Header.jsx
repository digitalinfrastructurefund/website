import * as React from "react";
import {
  Flex,
  Heading,
  Box,
  Text,
  HStack,
  SimpleGrid,
} from "@chakra-ui/layout";
import { Button, Collapse, useDisclosure } from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { TiMicrophone, TiSocialTwitter } from "react-icons/ti";
import { IoLogoSlack, IoMdClose } from "react-icons/io";
import { Link } from "gatsby";

const Header = ({ activePage }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position='relative' mb='32px'>
      <Box
        display={{ lg: "flex" }}
        justifyContent={{ lg: "center" }}
        alignItems={{ lg: "center" }}
      >
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
          width={{ lg: "1188px" }}
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
            <NavLinks activePage={activePage} />
          </Box>
        </Flex>
      </Box>
      <MobileNav isOpen={isOpen} activePage={activePage} />
    </Box>
  );
};

const MobileNav = ({ isOpen, activePage }) => {
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
        <NavLinks activePage={activePage} />
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

const NavLinks = ({ activePage }) => (
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
    <Box padding='11px 16px' as={Link} to='/projects/'>
      <Text
        textStyle='smallLabel'
        color='primaryDarkGrey'
        fontWeight='600'
        borderBottom='4px solid'
        borderBottomColor={
          activePage === "projects" ? "secondaryLime" : "transparent"
        }
        as='span'
      >
        Projects
      </Text>
    </Box>
    <Box as={Link} padding='11px 16px' to='/updates/'>
      <Text
        textStyle='smallLabel'
        color='primaryDarkGrey'
        fontWeight='600'
        borderBottom='4px solid'
        borderBottomColor={
          activePage === "updates" ? "secondaryLime" : "transparent"
        }
        as='span'
      >
        Updates
      </Text>
    </Box>

    <Box padding='11px 16px' as={Link} to='/events/'>
      <Text
        as='span'
        textStyle='smallLabel'
        color='primaryDarkGrey'
        fontWeight='600'
        borderBottom='4px solid'
        borderBottomColor={
          activePage === "events" ? "secondaryLime" : "transparent"
        }
      >
        Events
      </Text>
    </Box>
    <Box padding='11px 16px' as={Link} to='/resources/'>
      <Text
        as='span'
        textStyle='smallLabel'
        color='primaryDarkGrey'
        fontWeight='600'
        borderBottom='4px solid'
        borderBottomColor={
          activePage === "resources" ? "secondaryLime" : "transparent"
        }
      >
        Resources
      </Text>
    </Box>
  </SimpleGrid>
);

export default Header;
