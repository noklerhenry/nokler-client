import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Button,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { getRefundId } from "../../Actions";

export default function RefundAproval() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const refundId = useSelector((state) => state.refundId);

  useEffect(() => {
    dispatch(getRefundId(id));
  }, [dispatch, id]);

  console.log(refundId);

  return (
    <Center py={6} mt={"200px"}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Text
          color={
            refundId.status === "FINISHED"
              ? "green.600"
              : refundId.status === "CANCEL"
              ? "red.600"
              : "yellow.600"
          }
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"sm"}
          letterSpacing={1.1}
        >
          {refundId.status === "FINISHED"
            ? "APPROVED"
            : refundId.status === "CANCEL"
            ? "DENIED"
            : "PENDING"}
        </Text>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar
            src="https://st2.depositphotos.com/1797936/8641/v/600/depositphotos_86419330-stock-illustration-purple-icon-isolated-on-a.jpg"
            alt={"Author"}
            backgroundColor={"#000000"}
          />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>{refundId.userName}</Text>
            <Text color={"gray.500"}>{refundId.userEmail}</Text>
          </Stack>
        </Stack>
        <Stack>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"lg"}
            fontFamily={"body"}
            mt={6}
          >
            Code: {refundId.charge}
          </Heading>
          <Text color={"gray.500"} fontSize={"xl"} mt={6}>
            {refundId.about}
          </Text>
        </Stack>
        {refundId.status === "PENDING" ? (
          <Stack direction="row" spacing={4} mt={6}>
            <Button colorScheme="red" variant="ghost" size="lg">
              Denie
            </Button>
            <Button colorScheme="green" variant="ghost" size="lg">
              Approve
            </Button>
          </Stack>
        ) : null}
      </Box>
    </Center>
  );
}
