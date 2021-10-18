import * as React from "react";
import { Avatar, Text, HStack, VStack } from "@chakra-ui/react";

const TeamMemberCard = ({ name, role, image }) => (
  <HStack spacing='24px'>
    <Avatar
      borderRadius='24px'
      w='104px'
      h='104px'
      src={image?.publicURL}
      alt={name}
      name={name}
    />
    <VStack alignItems='flex-start'>
      <Text textStyle='paragraph-1' color='primaryDarkGrey'>
        {name}
      </Text>
      <Text textStyle='paragraph-2' color='secondaryMidGray'>
        {role}
      </Text>
    </VStack>
  </HStack>
);

export default TeamMemberCard;
