import { Button, Input, Text, Flex, Box } from "@chakra-ui/react";
import * as React from "react";

import subscriptionIllustrationLG from "../images/subscription-illustration-lg.png";
import subscriptionIllustrationMD from "../images/subscription-illustration-md.png";
import subscriptionIllustrationSM from "../images/subscription-illustration-sm.png";

const Subscription = () => {
  const [email, setEmail] = React.useState("");

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      position='relative'
      mt={{ base: "36px", md: "200px", lg: "100px" }}
    >
      <Box position='relative' width={{ lg: "1088px" }}>
        <Box
          position='absolute'
          backgroundImage={{
            base: `url(${subscriptionIllustrationSM})`,
            md: `url(${subscriptionIllustrationMD})`,
            lg: `url(${subscriptionIllustrationLG})`,
          }}
          backgroundRepeat='no-repeat'
          width={{
            base: "259px",
            md: "345px",
            lg: "413px",
          }}
          height={{
            base: "158px",
            md: "210px",
            lg: "252px",
          }}
          backgroundSize='contain'
          top={{ base: "-90px", md: "-170px", lg: "-120px" }}
          right={{ base: "0", lg: "123px" }}
          left={{ md: "0", lg: "unset" }}
          mx={{ base: "auto", lg: "unset" }}
        />
        <Flex
          backgroundColor='subscriptionCard'
          p={{ base: "24px", md: "55px 89px", lg: "56px 48px 72px" }}
          textAlign='center'
          boxShadow='0px 1px 4px 1px rgba(49, 50, 51, 0.1)'
          borderRadius='24px'
          width={{ md: "704px", lg: "1088px" }}
          flexDir='column'
          alignItems={{ base: "center", lg: "flex-start" }}
          pt={{ base: "89px", md: "61px", lg: "56px" }}
        >
          <Text
            as='h3'
            textStyle={{ base: "subHeading", md: "smallHeader" }}
            color='primaryDarkGrey'
          >
            Subscribe for Updates
          </Text>

          <Text
            mb='16px'
            textStyle={{ base: "paragraph-1", md: "paragraph-2" }}
            color='primaryDarkGrey'
            width={{ base: "240px", md: "485px" }}
          >
            Enter your email to be the first to know about our latest updates
          </Text>
          <Box display={{ lg: "flex" }} alignItems={{ lg: "center" }}>
            <Flex
              as='form'
              flexDirection={{ base: "column", md: "row" }}
              alignItems='center'
            >
              <Input
                bg='white'
                placeholder='e.g. johndoe@gmail.com'
                borderRadius='24px'
                width={{ md: "397px" }}
                p='16px 12px'
                pr='35px'
                onChange={({ target }) => setEmail(target.value)}
                value={email}
              />
              <Button
                variant='primary'
                width='164px'
                my='8px'
                position='relative'
                left={{ md: "-30px" }}
                zIndex='1'
                type='submit'
              >
                Subscribe
              </Button>
            </Flex>
            <Text
              textStyle={{ base: "paragraph-2", md: "smallLabel" }}
              color='primaryBlue'
              w={{ base: "240px", md: "502px" }}
              textAlign={{ lg: "left" }}
              maxW={{ lg: "426px" }}
            >
              By clicking the Subscribe Button you confirming that you agree
              with our terms and conditions.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Subscription;
