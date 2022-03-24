import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import AdminHeader from "../Admin/AdminHeader";
import { getRefund } from "../../Actions";
import {
  Container,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Divider,
  useColorModeValue,
  Flex,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

export default function RefundList() {
  const dispatch = useDispatch();
  const refund = useSelector((state) => state.refund);

  const bg3 = useColorModeValue("gray.100", "gray.900");

  useEffect(() => {
    dispatch(getRefund());
  }, [dispatch]);

  console.log(refund);

  return (
    <Container p="5" maxW={"8xl"}>
      <Box>
        <AdminHeader />
      </Box>

      <Flex w="full" p={"5"} alignItems="center" justifyContent="center" flexDirection='column'>
      <Text fontSize="30px" mb="15px" mt="15px">
              Refund petitions
            </Text>
            <SimpleGrid mt="30px" columns={{sm:2, md:2, lg:3, xl:4}} spacing='2'>
            {refund?.map((refund) => {
              return (
                <Box p='20px' bg={bg3} borderRadius='20px'>
                <Link to={`/refundaproval/${refund.id}`}>
                  <Text fontSize='10px'>PETITION ID: {refund.id}</Text>
                   
                  <Text fontSize='11px'>EMAIL: </Text>
                    <Text fontSize='15px'><b>{refund.userEmail}</b></Text>
                  <Text fontSize='12px' mt='10px'>NAME </Text>
                    <Text>{refund.userName}</Text>
                    <Divider />
                  <Text fontSize='12px' mt='10px'>STATUS</Text>
                    <Text>&#9679;  {refund.status === "FINISHED"
                      ? "APPROVED"
                      : refund.status === "CANCEL"
                      ? "DENIED"
                      : "PENDING"}
                  </Text>
                  </Link>
                </Box>
              );
            })}
            </SimpleGrid>
       
      </Flex>
    </Container>
  );
}
