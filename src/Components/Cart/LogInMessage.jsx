import { Box, Heading, Text, Stack, Button } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export default function WarningLogInMessage() {
  const {
    loginWithRedirect,
    isAuthenticated,
  } = useAuth0();
  
  return (
    <Box textAlign="center" py={10} px={6} m="10rem 0 5rem 0">
      <WarningTwoIcon boxSize={"100px"} color={"orange.300"} />
      <Stack flex={1} spacing={{ base: 5, md: 5 }} mt="2rem">
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          textAlign="center"
        >
          <Text as={"span"} position={"relative"}>
            You have to Log In{" "}
          </Text>
          <Text as={"span"} color={"yellow.500"}>
            to make the purchase !
          </Text>
        </Heading>
      </Stack>
      <Text color={"gray.500"} mt="2rem">
        Please register to complete your order
      </Text>
      <Box mt="2rem">
        <Link to="/">
          <Button rounded={"full"} px={6} onClick={loginWithRedirect}>
            Log In
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
