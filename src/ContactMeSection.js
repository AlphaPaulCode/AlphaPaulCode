// ContactMeSection.js

import React from "react";
import { Box, Heading, VStack, Button, FormControl, FormLabel, Input, Textarea, FormErrorMessage } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactMeSection = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    type: Yup.string(),
    comment: Yup.string().min(25, "Must be at least 25 characters").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      // Perform API call
      console.log(values);
      setSubmitting(false);
      resetForm();
    },
    validationSchema: validationSchema,
  });

  return (
    <Box id="contactme-section" minHeight="100vh" bg="gray.100" py={16} px={8}>
      <VStack spacing={8}>
        <Heading as="h2" size="xl" textAlign="center" mb={8}>
          Contact Me
        </Heading>
        <Box as="form" onSubmit={formik.handleSubmit} width="100%" maxW="600px">
          <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
            <FormLabel htmlFor="firstName">Name</FormLabel>
            <Input
              type="text"
              id="firstName"
              placeholder="Your name"
              {...formik.getFieldProps("firstName")}
            />
            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.touched.email && formik.errors.email}>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              type="email"
              id="email"
              placeholder="Your email"
              {...formik.getFieldProps("email")}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="type">Type of Enquiry</FormLabel>
            <Input
              type="text"
              id="type"
              placeholder="Type of enquiry"
              {...formik.getFieldProps("type")}
            />
          </FormControl>
          <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
            <FormLabel htmlFor="comment">Message</FormLabel>
            <Textarea
              id="comment"
              placeholder="Your message (min 25 characters)"
              {...formik.getFieldProps("comment")}
            />
            <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
          </FormControl>
          <Button type="submit" colorScheme="blue" isLoading={formik.isSubmitting} mt={4}>
            Submit
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default ContactMeSection;
