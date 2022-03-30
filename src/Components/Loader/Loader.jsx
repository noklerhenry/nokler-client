import React from "react";
import { Box, Spinner, useColorModeValue } from "@chakra-ui/react";

export default function Loader() {
  return (
    <Box>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor={useColorModeValue("gray.900", "gray.100")}
        color={useColorModeValue("#8c06f7", "#8c06f7")}
        size="xl"
      />
    </Box>
  );
}
