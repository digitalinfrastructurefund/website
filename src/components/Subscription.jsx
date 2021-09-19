import { Button, Input, Text, Flex } from "@chakra-ui/react";
import * as React from "react";

import subscriptionIllustration from "../images/subscription-illustration.png";

const Subscription = () => {
  const [email, setEmail] = React.useState("");

  return (
    <Flex justifyContent='center' alignItems='center'>
      <Flex
        backgroundColor='subscriptionCard'
        p={{ base: "24px", md: "55px 89px" }}
        textAlign='center'
        boxShadow='0px 1px 4px 1px rgba(49, 50, 51, 0.1)'
        borderRadius='24px'
        backgroundImage={{ lg: `url(${subscriptionIllustration})` }}
        backgroundRepeat='no-repeat'
        backgroundSize='237px 132px'
        backgroundPosition='bottom right'
        width={{ lg: "1088px" }}
        flexDir='column'
        alignItems='center'
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
        >
          By clicking the Subscribe Button you confirming that you agree with
          our terms and conditions.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Subscription;
