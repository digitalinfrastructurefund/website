import * as React from "react";
import { Avatar, Text, HStack, VStack } from "@chakra-ui/react";
import { Link } from "gatsby";

const TeamMemberCard = ({ name, role, image, localImagePath, link }) => {
  const linkProp = {};
  if (link) {
    linkProp.to = link;
    linkProp.as = Link;
    linkProp.target = "_blank";
  }

  return (
    <HStack spacing='24px' {...linkProp}>
      <Avatar
        borderRadius='24px'
        w='104px'
        h='104px'
        src={image || localImagePath?.publicURL}
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
};

export default TeamMemberCard;
