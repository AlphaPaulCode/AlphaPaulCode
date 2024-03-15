// Header.js

import React from "react";
import { HStack, IconButton, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";

const socials = [
  { name: "GitHub", icon: faGithub, link: "https://github.com/yourusername" },
  { name: "Twitter", icon: faTwitter, link: "https://twitter.com/yourusername" },
  { name: "LinkedIn", icon: faLinkedin, link: "https://linkedin.com/in/yourusername" },
];

const Header = () => {
  const handleClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box as="header" bg="black" color="white" py={4} px={8} position="fixed" top={0} left={0} right={0} zIndex={999}>
      <HStack spacing={8} justify="space-between">
        <HStack spacing={4}>
          {socials.map((social, index) => (
            <IconButton
              key={index}
              icon={<FontAwesomeIcon icon={social.icon} size="2x" />}
              variant="ghost"
              onClick={() => window.open(social.link, "_blank")}
            />
          ))}
        </HStack>
        <HStack spacing={8}>
          <Link to="projects-section" smooth={true} duration={500}>
            Projects
          </Link>
          <Link to="contactme-section" smooth={true} duration={500}>
            Contact Me
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
