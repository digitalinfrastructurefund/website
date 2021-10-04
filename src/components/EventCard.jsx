import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { formatDate } from "../lib/date";

const EventCard = ({ title, description, date, coverImage, isNextEvent }) => {
  const dateObj = dayjs(date);
  const isPastEvent = dateObj.isBefore(dayjs());

  return (
    <Box
      width={{ base: "288px", md: "340px" }}
      borderRadius='24px'
      boxShadow=' 0px 1px 4px 1px rgba(49, 50, 51, 0.1)'
      border='2px solid transparent'
      _hover={{
        borderColor: "primaryBlue",
      }}
    >
      <Box
        width='100%'
        borderTopRadius='24px'
        backgroundImage={coverImage ? `url(${coverImage.publicURL})` : ""}
        backgroundSize='cover'
        backgroundRepeat='no-repeat'
        h='120px'
        display='flex'
        justifyContent='flex-end'
        alignItems='center'
      >
        {(isNextEvent || isPastEvent) && (
          <Box
            bg={isNextEvent ? "secondaryLime" : "primaryPaleBlue"}
            px='16px'
            py='9px'
            borderLeftRadius='24px'
          >
            <Text
              textStyle='buttonLabel'
              color={"primaryDarkGrey"}
              textTransform='uppercase'
            >
              {isNextEvent ? "next event" : "past event"}
            </Text>
          </Box>
        )}
      </Box>
      <Box padding='24px'>
        <Text textStyle='paragraph-2' color='neutralTint-600'>
          {formatDate(date, "MMMM Do YYYY Z a")}
        </Text>
        <Text as='h3' textStyle='subHeading' my='12px' color='neutralTint'>
          {title}
        </Text>
        <Text textStyle='paragraph-1' color='neutralTint-600' mb='20px'>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default EventCard;
