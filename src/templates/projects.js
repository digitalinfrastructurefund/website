import "@fontsource/urbanist";
import * as React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  SimpleGrid,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { graphql } from "gatsby";
import * as JsSearch from "js-search";

import Layout from "../components/Layout";
import Subscription from "../components/Subscription";
import ProjectCard from "../components/ProjectCard";
import { AiOutlineSearch } from "react-icons/ai";

const getSearch = (projects) => {
  const search = new JsSearch.Search("id");
  search.addIndex(["frontmatter", "title"]);
  search.addIndex(["frontmatter", "participants"]);
  search.addIndex(["exports", "team", "name"]);
  search.addDocuments(projects);
  return search;
};

const ProjectsPage = ({ data }) => {
  const { projectData } = data;
  const projects = projectData.projects;
  const [searchQuery, setSearchQuery] = React.useState("");
  const [search, setSearch] = React.useState([]);

  React.useEffect(() => {
    if (!projects.length) {
      return;
    }

    const search = getSearch(projects);
    setSearch(search);
  }, [projects]);

  const projectsInView = React.useMemo(() => {
    let allProjects = projects;

    if (searchQuery) {
      allProjects = search.search(searchQuery);
    }

    return allProjects;
  }, [projects, searchQuery, search]);

  return (
    <Layout title='Projects' activePage='projects'>
      <Flex
        px={{ base: "16px", sm: "32px" }}
        mb='40px'
        justifyContent={{ base: "center", md: "flex-start", lg: "center" }}
      >
        <Box w={{ lg: "1088px" }}>
          <VStack
            spacing='16px'
            alignItems={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "left" }}
            width='100%'
          >
            <Text
              textStyle={{
                base: "subHeading",
                md: "smallHeader",
                lg: "defaultHeader",
              }}
              color='primaryDarkGrey'
            >
              Projects
            </Text>
            <Text
              textStyle={{ base: "paragraph-1" }}
              color='primaryBlue'
              maxW={{ base: "288px", md: "472px" }}
            >
              Filling gaps in understanding how digital infrastructure is built,
              maintained, and sustained.
            </Text>
          </VStack>
        </Box>
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        my='48px'
        px={{ base: "16px", sm: "32px" }}
      >
        <Box w={{ lg: "1088px" }}>
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
                placeholder='Search by name or authors'
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
        </Box>
      </Flex>
      <Flex px={{ base: "16px", sm: "32px" }} justifyContent='center'>
        <SimpleGrid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: "40px", md: "24px" }}
          flexWrap='wrap'
          w={{ lg: "1088px" }}
          justifyItems='center'
        >
          {projectsInView.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </SimpleGrid>
      </Flex>
      <Flex px={{ base: "16px", sm: "32px" }} my='40px' justifyContent='center'>
        <Subscription />
      </Flex>
    </Layout>
  );
};

export const projectPageQuery = graphql`
  query {
    projectData: allMdx(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      projects: nodes {
        frontmatter {
          title
          participants
          date
          description
          path
          type
          coverImage {
            publicURL
          }
        }
        exports {
          team {
            name
          }
        }
        id
        slug
        excerpt(pruneLength: 72, truncate: true)
      }
      pageInfo {
        currentPage
        totalCount
        perPage
        pageCount
        itemCount
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;

export default ProjectsPage;
