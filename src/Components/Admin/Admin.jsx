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
  Flex,
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
  SimpleGrid,
  useColorModeValue
} from "@chakra-ui/react";
import { FaChartBar, FaUser, FaCalendar } from "react-icons/fa";

export default function Admin() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  let gamesList = useSelector((state) => state.games);

  const [scrollBehavior, setScrollBehavior] = useState("inside");

  const bg3 = useColorModeValue("gray.100", "gray.900");

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
    <Flex margin='0 3%'>
      <Box>
        <AdminHeader />

        <Flex flexDirection='row' mb="15px" mt="15px" alignItems='center'>
        <FaChartBar size='28' mr='10px'/>
        <Text fontSize="30px" ml='10px' >
          Nokler Stats
        </Text>
        </Flex>

        <Divider mb="15px" />

        <StatGroup w='70%'>
          <Stat borderRight='1px solid #8c06f7' p='0 10px' >
            <StatLabel>Keys sold</StatLabel>
            <StatNumber>{orders?.length}</StatNumber>
            <StatHelpText></StatHelpText>
          </Stat>

          {/* <Stat borderRight='1px solid #cccccc' p='0 10px'>
            <StatLabel>Keys sold today</StatLabel>
            <StatNumber>#{todayOrders}</StatNumber>
            <StatHelpText>
              
            </StatHelpText>
          </Stat> */}

          <Stat borderRight='1px solid #8c06f7' p='0 10px'>
            <StatLabel>Total Income</StatLabel>
            <StatNumber>
              ${orders?.reduce((result, order) => result + order.price, 0)}
            </StatNumber>
            <StatHelpText></StatHelpText>
          </Stat>
        </StatGroup>

          <Text fontSize='29px' mt='35px'>Latest Purchases</Text>
          <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing='2' mt='15px' mb='45px'>
          {orders?.map((order) => {
              return (
                <Box p='20px' bg={bg3} borderRadius='20px'>
                  <Flex flexDirection='row' alignItems='center'>
                  <FaCalendar size='15' />
                  <Text flexWrap='wrap' ml='5px' fontSize='14px'>{order.dateOrder.slice(0, 10)}</Text>
                    </Flex>
                  
                  <Text fontSize='21px' fontWeight='600' lineHeight='27px' mt='10px' mb='10px'>{order.game}</Text>
                  <Flex flexDirection='row' alignItems='center' mb='10px'>
                  <FaUser size='15' />
                  <Text flexWrap='wrap' >{order.user.email}</Text>
                    </Flex>
                  
                  <Text> <b>Order Id</b> — {order.id}</Text>
                  <Text><b>Store</b> — {order.store}</Text>
                  <Text><b>Key</b> —{order.key}</Text>
                  <Text isNumeric><b>Price</b> — ${order.price}</Text>
                </Box>
              );
            })}

          </SimpleGrid>



        
      </Box>
    </Flex>
  );
}
