import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import { getOrders } from "../../Actions";
import {
  Heading,
  Button,
  Text,
  Container,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Divider,
  Link,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export default function Admin() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  let gamesList = useSelector((state) => state.games);

  const [game, setGame] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/api/?game=" + game).then((response) => {
      setGame(response.data);
    });

    axios.get("http://localhost:3000/api/?user=" + user).then((response) => {
      setUser(response.data);
    });

    return () => {
      setGame(null);
    };
  }, [game]);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const todayOrders = orders?.dateOrder?.reduce((result, order) => {
    const day = moment(order.dateOrder.slice(0, 10)).format("YYYY-MM-DD");
    if (!result[day]) {
      result[day] = 0;
    }
    result[day]++;
    return result;
    console.log(result);
  });

  console.log(todayOrders);

  return (
    <Container p="5" maxW={"8xl"}>
      <Box>
        <AdminHeader />

        <Text fontSize="30px" mb="15px" mt="15px">
          Nokler Stats
        </Text>
        <Divider mb="15px" />
        <StatGroup>
          <Stat>
            <StatLabel>Keys sold</StatLabel>
            <StatNumber>{orders?.length}</StatNumber>
            <StatHelpText></StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Keys sold today</StatLabel>
            <StatNumber>{todayOrders}</StatNumber>
            <StatHelpText></StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Total Income</StatLabel>
            <StatNumber>
              ${orders?.reduce((result, order) => result + order.price, 0)}
            </StatNumber>
            <StatHelpText></StatHelpText>
          </Stat>
        </StatGroup>

        <Table>
          <TableCaption fontSize="xl">Keys sold</TableCaption>
          <Thead>
            <Tr>
              <Th fontSize="xxl">Date</Th>
              <Th fontSize="xxl">Sale ID</Th>
              <Th fontSize="xxl">Mail</Th>
              <Th fontSize="xxl">Game</Th>
              <Th fontSize="xxl">Store</Th>
              <Th fontSize="xxl">Key</Th>
              <Th fontSize="xxl" isNumeric>
                Price
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders?.map((order) => {
              return (
                <Tr>
                  <Td>{order.dateOrder.slice(0, 10)}</Td>
                  <Td>{order.id}</Td>
                  <Td>{order.user.email}</Td>
                  <Td>{order.game}</Td>
                  <Td>{order.store}</Td>
                  <Td>{order.key}</Td>
                  <Td isNumeric>${order.price}</Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th fontSize="xxl">Date</Th>
              <Th fontSize="xxl">Sale ID</Th>
              <Th fontSize="xxl">Mail</Th>
              <Th fontSize="xxl">Game</Th>
              <Th fontSize="xxl">Store</Th>
              <Th fontSize="xxl">Key</Th>
              <Th fontSize="xxl" isNumeric>
                Price
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </Box>
    </Container>
  );
}
