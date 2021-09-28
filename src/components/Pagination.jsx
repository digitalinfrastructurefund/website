import { Box, Button, Flex } from "@chakra-ui/react";
import * as React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const StyledPaginateContainer = styled.div`
  .pagination {
    display: flex;
    align-items: center;
  }
  .pagination > li,
  .nextButton,
  .previousButton,
  .pageList {
    list-style: none;
  }
  .pageList {
    list-style: none;
    margin-right: 12px;
    margin-left: 12px;
  }
  .pageLink {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1px;
    color: #55555f;
  }
  .break-me {
    cursor: default;
  }
  .activeLink {
    box-sizing: border-box;
    background: rgba(17, 50, 117, 0.1);
    mix-blend-mode: normal;
    border-radius: 50%;
    padding: 10px 15px;
    width: 40px;
  }
`;

const Pagination = ({ pageCount }) => {
  return (
    <Flex
      px={{ base: "16px", md: "32px" }}
      justifyContent='center'
      alignItems='center'
      my='48px'
    >
      <Box
        alignSelf='center'
        as={StyledPaginateContainer}
        maxWidth={{ lg: "1088px" }}
      >
        <ReactPaginate
          pageLinkClassName='pageLink'
          containerClassName='pagination'
          pageClassName='pageList'
          activeClassName='active'
          activeLinkClassName='activeLink'
          pageCount={pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          previousClassName='previousButton'
          nextClassName='nextButton'
          previousLabel={
            <Button variant='outline' borderRadius='100%' size='64px'>
              <BsArrowLeftShort size='22px' />
            </Button>
          }
          nextLabel={
            <Button variant='outline' borderRadius='100%' size='64px'>
              <BsArrowRightShort size='22px' />
            </Button>
          }
        />
      </Box>
    </Flex>
  );
};

export default Pagination;
