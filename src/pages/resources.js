import "@fontsource/urbanist";
import * as React from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import * as JsSearch from "js-search";
import { uniq } from "lodash";

import Layout from "../components/Layout";
import Subscription from "../components/Subscription";
import { graphql } from "gatsby";
import ResourcesCard from "../components/ResourceCard";
import { filterResources, getAllResources, sortResources } from "../lib/util";

const getSearch = (resources) => {
  const search = new JsSearch.Search("id");
  search.addIndex("title");
  search.addIndex("quote");
  search.addIndex("author");
  search.addDocuments(resources);
  return search;
};

const ResourcesPage = ({ data }) => {
  const { resourcesData } = data;
  const resourcesNodes = resourcesData.nodes;
  const [resources] = React.useState(getAllResources(resourcesNodes));
  const [sortBy, setSortBy] = React.useState("MOST_RECENT");
  const [filterBy, setFilterBy] = React.useState("");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [search, setSearch] = React.useState([]);

  React.useEffect(() => {
    if (!resources.length) {
      return;
    }

    const search = getSearch(resources);
    setSearch(search);
  }, [resources]);

  const types = React.useMemo(() => {
    if (!resources.length) {
      return ["All Resources"];
    }

    const allTypes = uniq(resources.filter((r) => r?.type).map((r) => r.type));

    return ["All Resources", ...allTypes];
  }, [resources]);

  const resourcesInView = React.useMemo(() => {
    let allResources = resources;

    if (searchQuery) {
      allResources = search.search(searchQuery);
    }

    allResources = sortResources(allResources, sortBy);

    if (filterBy) {
      allResources = filterResources(allResources, filterBy);
    }

    return allResources;
  }, [resources, searchQuery, filterBy, sortBy, search]);

  return (
    <Layout title='Resources' activePage='resources'>
      <Flex
        px={{ base: "16px", sm: "32px" }}
        justifyContent={{ md: "flex-start", lg: "center" }}
        alignItems={{ lg: "center" }}
      >
        <VStack
          spacing='16px'
          alignItems={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          width={{ lg: "1088px" }}
        >
          <Text
            textStyle={{
              base: "subHeading",
              md: "smallHeader",
              lg: "defaultHeader",
            }}
            color='primaryDarkGrey'
          >
            Resources
          </Text>
          <Text
            textStyle={{ base: "paragraph-1", lg: "bigQuote" }}
            color='primaryBlue'
            spacing='24px'
            maxW={{ lg: "880px" }}
          >
            Talks, publications, and more from the projects supported by our
            funders
          </Text>
        </VStack>
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        my='48px'
        px={{ base: "16px", sm: "32px" }}
      >
        <Stack
          width='100%'
          spacing={"16px"}
          direction={{ base: "column", md: "row" }}
          alignItems={"center"}
          maxW={{ lg: "1088px" }}
        >
          <FormControl maxW={{ lg: "666px" }}>
            <FormLabel fontStyle='paragraph-2' color='formLabel' mb='8px'>
              Search
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<AiOutlineSearch color='gray.300' />}
              />
              <Input
                type='text'
                placeholder='Search by project'
                borderRadius={"100px"}
                borderWidth={"0.5px"}
                borderColor={"#B7C2D9"}
                fontStyle='paragraph-2'
                color='#141415'
                onChange={({ target }) => setSearchQuery(target.value)}
                value={searchQuery}
              />
            </InputGroup>
          </FormControl>
          <FormControl maxW={{ md: "195px" }}>
            <FormLabel fontStyle='paragraph-2' color='formLabel' mb='8px'>
              Sort by
            </FormLabel>
            <Select
              borderRadius={"100px"}
              borderWidth={"0.5px"}
              borderColor={"#B7C2D9"}
              fontStyle='paragraph-2'
              color='#141415'
              defaultValue={sortBy}
              onChange={({ target }) => setSortBy(target.value)}
            >
              <option value='MOST_RECENT'>Most recent</option>
              <option value='LEAST_RECENT'>Least recent</option>
            </Select>
          </FormControl>
          <FormControl maxW={{ md: "195px" }}>
            <FormLabel fontStyle='paragraph-2' color='formLabel' mb='8px'>
              Type
            </FormLabel>
            <Select
              borderRadius={"100px"}
              borderWidth={"0.5px"}
              borderColor={"#B7C2D9"}
              fontStyle='paragraph-2'
              color='#141415'
              onChange={({ target }) => setFilterBy(target.value)}
            >
              {types.map((t, i) => (
                <option key={i.toString()} value={t}>
                  {t}
                </option>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Flex>
      <Flex
        px={{ base: "16px", md: "32px" }}
        justifyContent='center'
        alignItems='center'
      >
        <SimpleGrid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          columnGap={{ base: "24px", lg: "16px" }}
          rowGap='40px'
          mb='40px'
          width={{ lg: "1088px" }}
        >
          {resourcesInView.map((resource, index) => (
            <ResourcesCard {...resource} key={index.toString()} />
          ))}
        </SimpleGrid>
      </Flex>
      <Flex px={{ base: "16px" }} my={{ lg: "100px" }} justifyContent='center'>
        <Subscription />
      </Flex>
    </Layout>
  );
};

export const resourcesQuery = graphql`
  query {
    resourcesData: allMdx(
      filter: { exports: { resources: { elemMatch: { title: { ne: null } } } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        exports {
          resources {
            author
            link
            linkText
            quote
            title
            type
          }
        }
        frontmatter {
          title
          date
        }
      }
    }
  }
`;

export default ResourcesPage;
