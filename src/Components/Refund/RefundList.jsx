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
  useColorModeValue,
  Flex,
  Text,
} from "@chakra-ui/react";

export default function RefundList() {
  const dispatch = useDispatch();
  const refund = useSelector((state) => state.refund);

  useEffect(() => {
    dispatch(getRefund());
  }, [dispatch]);

  console.log(refund);

  return (
    <Container p="5" maxW={"8xl"}>
      <Box>
        <AdminHeader />
      </Box>

      <Flex w="full" p={"5"} alignItems="center" justifyContent="center">
        <Table
          mt={20}
          variant="striped"
          w="full"
          borderWidth="1px"
          display={{
            base: "block",
            md: "table",
          }}
          sx={{
            "@media print": {
              display: "table",
            },
          }}
        >
          <TableCaption>Refund claims</TableCaption>
          <Thead
            display={{
              base: "none",
              md: "table-header-group",
            }}
            sx={{
              "@media print": {
                display: "table-header-group",
              },
            }}
          >
            <Tr>
              <Th fontSize="xl">PETITION ID</Th>
              <Th fontSize="xl">MAIL</Th>
              <Th fontSize="xl">NAME</Th>
              <Th fontSize="xl">STATUS</Th>
            </Tr>
          </Thead>
          <Tbody
            display={{
              base: "block",
              lg: "table-row-group",
            }}
            sx={{
              "@media print": {
                display: "table-row-group",
              },
            }}
          >
            {refund?.map((refund) => {
              return (
                <Box>
                  <Link to={`/refundaproval/${refund.id}`}>
                    <Text>PETITION ID: {refund.id}</Text>
                    <Text>MAIL: {refund.userEmail}</Text>
                    <Text>NAME: {refund.userName}</Text>
                    <Text>
                      STATUS:
                      {refund.status === "FINISHED"
                        ? "APPROVED"
                        : refund.status === "CANCEL"
                        ? "DENIED"
                        : "PENDING"}
                    </Text>
                  </Link>
                </Box>
              );
            })}
          </Tbody>
        </Table>
      </Flex>
    </Container>
  );
}
