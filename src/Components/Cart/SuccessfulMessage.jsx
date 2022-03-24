import { Box, Heading, Text, Stack, Button } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';

export default function SuccessMessage() {
  return (
    <Box textAlign="center" py={10} px={6} m="10rem 0 5rem 0">
      <CheckCircleIcon boxSize={"100px"} color={"green.500"} />
      <Stack flex={1} spacing={{ base: 5, md: 5 }} mt="2rem">
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          textAlign="center"
        >
          <Text as={"span"} position={"relative"}>
            Successful{" "}
          </Text>
          <Text as={"span"} color={"green.500"}>
            Purchase !
          </Text>
        </Heading>
      </Stack>
      <Text color={"gray.500"} mt="2rem">
        Thank you for trusting us, we hope you enjoy your game. <br />
        We'll send you an email with the information of your purchase. <br />
        Remember that you have access to your shopping history{" "}
        <Link to="/profile">
          <strong>here.</strong>
        </Link>
      </Text>
      <Box mt='2rem'>
        <Link to="/">
          <Button rounded={"full"} px={6}>
            Go Back
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
