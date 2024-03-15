// LandingSection.js

import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

const greeting = "Hello, I'm John Doe";
const bio1 = "I'm a passionate developer";
const bio2 = "Welcome to my portfolio!";

const LandingSection = () => {
  return (
    <Box id="landing-section" minHeight="100vh" bg="gray.100" py={16} px={8}>
      <Flex direction="column" align="center">
        <Heading as="h1" size="xl" mb={4}>
          {greeting}
        </Heading>
        <Text fontSize="lg" textAlign="center" mb={8}>
          {bio1} <br /> {bio2}
        </Text>
        <Image src="https://i.pravatar.cc/150?img=7" alt="Avatar" borderRadius="full" boxSize="150px" mb={8} />
      </Flex>
    </Box>
  );
};

export default LandingSection;
