import * as React from "react";
import {
  Box,
  Button,
  Text,
  Flex,
  VStack,
  Input,
  Textarea,
  Stack,
} from "@chakra-ui/react";
import isEmail from "validator/lib/isEmail";

import contactUsBgIllustrationLG from "../images/contactus-illustration-lg.png";
import contactUsBgIllustrationMD from "../images/contactus-illustration-md.png";
import contactUsBgIllustrationSM from "../images/contactus-illustration-sm.png";

const ContactUs = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleOnSubmit = ({ event }) => {
    event.preventDefault();
    const { name, email, message } = state;
    if (!(name && email && message)) {
      setError("All fields are required");
    }

    if (!isEmail(email)) {
      setError("Email is invalid");
    }
    setError("");

    // Handle contact form
  };

  return (
    <Flex
      px='16px'
      flexDir='column'
      alignItems='center'
      my={{ base: "32px", md: "100px" }}
      id='contactUs'
      mt={{ base: "140px" }}
    >
      <Box position='relative'>
        <Box
          position='absolute'
          backgroundImage={{
            base: `url(${contactUsBgIllustrationSM})`,
            md: `url(${contactUsBgIllustrationMD})`,
            lg: `url(${contactUsBgIllustrationLG})`,
          }}
          backgroundRepeat='no-repeat'
          backgroundSize='contain'
          w={{ base: "226px", lg: "410px" }}
          h={{ base: "213px", lg: "396px" }}
          zIndex='111'
          right={{ base: "10%", sm: "20%", md: "0", lg: "-90px" }}
          top={{ base: "-140px", md: "-40px", lg: "-70px" }}
        />
        <Box
          padding={{ base: "16px", md: "32px 64px", lg: "90px 96px 68px" }}
          borderRadius={{ base: "24px", lg: "40px" }}
          backgroundColor='subscriptionCard'
          w={{ md: "704px", lg: "1088px" }}
          pt={{ base: "72px" }}
        >
          <Box mb='34px' textAlign={{ base: "center", md: "left" }}>
            <Text
              textStyle={{
                base: "subHeading",
                md: "smallHeader",
                lg: "mainHeader",
              }}
              color='primaryDarkGrey'
              mb='8px'
            >
              Contact us
            </Text>
            <Text
              textStyle={{ base: "paragraph-1", md: "bigQuote" }}
              color='secondaryMidGray'
              maxW={{ md: "419px", lg: "568px" }}
            >
              Feel free to contact us if you want to be alerted when there's
              funding/be a funder. You can also contact us for any feedback, to
              say hi, or to show support to us or any of the projects.
            </Text>
          </Box>
          <VStack
            alignItems='flex-start'
            spacing='20px'
            as='form'
            onSubmit={handleOnSubmit}
          >
            <Stack
              direction={{ base: "column", md: "row" }}
              alignSelf='stretch'
              spacing={{ base: "16px", lg: "40px" }}
            >
              <VStack alignItems='flex-start' w={{ base: "100%" }}>
                <Text textStyle='inputLabel' color='neutralTint'>
                  Your name
                </Text>
                <Input
                  bg='white'
                  borderRadius='32px'
                  type='text'
                  placeholder='Full Name'
                  value={state.name}
                  onChange={({ target }) =>
                    setState({ ...state, name: target.value })
                  }
                />
              </VStack>
              <VStack alignItems='flex-start' w={{ base: "100%" }}>
                <Text textStyle='inputLabel' color='neutralTint'>
                  Email
                </Text>
                <Input
                  bg='white'
                  borderRadius='32px'
                  type='email'
                  placeholder='Email'
                  value={state.email}
                  onChange={({ target }) =>
                    setState({ ...state, email: target.value })
                  }
                />
              </VStack>
            </Stack>
            <VStack alignItems='flex-start' w={{ base: "100%" }}>
              <Text textStyle='inputLabel' color='neutralTint'>
                Message
              </Text>
              <Textarea
                bg='white'
                borderRadius='24px'
                placeholder='Enter your message'
                border='1px solid #DCDEE0 '
                boxShadow='0px 2px 0px 0px #3132330D inset'
                minH='132px'
                p='16px'
                value={state.message}
                onChange={({ target }) =>
                  setState({ ...state, message: target.value })
                }
              />
            </VStack>
            <Button
              w={{ base: "100%", lg: "209px" }}
              variant='primary'
              type='submit'
            >
              Send message
            </Button>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactUs;
