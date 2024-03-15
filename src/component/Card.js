import React from "react";
import { Box, Heading, Text, Image, Button, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ project }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
      <Image src={project.imageUrl} alt={project.title} />
      <Box mt={4}>
        <Heading as="h3" size="md">{project.title}</Heading>
        <Text mt={2}>{project.description}</Text>
        <Link href="#" mt={2} color="blue.500" display="flex" alignItems="center">
          View Details <FontAwesomeIcon icon={faArrowRight} size="sm" ml={1} />
        </Link>
      </Box>
    </Box>
  );
};

export default Card;
