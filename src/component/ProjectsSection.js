import React from "react";
import { Box, Heading, SimpleGrid, VStack, Text, Button } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/images/photo1.jpg", // Change the image URL as needed
  },
  {
    id: 2,
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/images/photo2.jpg", // Change the image URL as needed
  },
  {
    id: 3,
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/images/photo3.jpg", // Change the image URL as needed
  },
  {
    id: 4,
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/images/photo4.jpg", // Change the image URL as needed
  },
];

const ProjectsSection = () => {
  return (
    <Box id="projects-section" minHeight="100vh" bg="white" py={16} px={8}>
      <VStack spacing={8}>
        <Heading as="h2" size="xl" textAlign="center" mb={8}>
          Featured Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </SimpleGrid>
        <Box textAlign="center">
          <Button colorScheme="blue">View More</Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default ProjectsSection;
