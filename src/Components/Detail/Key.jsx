import {
  Box,
  chakra,
  Container,
  Divider,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  HStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  Link,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getGameDetails } from "../../Actions";
import { useHistory } from "react-router-dom";

export const Key = ({ g, handleCart, nameid }) => {
  const [disabled, setDisabled] = useState(false);
  const bg = useColorModeValue("#efefef", "#18181880");

  const history = useHistory();

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const details = useSelector((state) => state.videogame);

  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getGameDetails(nameid));
    // console.log(details)
  }, []);

  useEffect(() => {
    validate();
  }, [cart, details]);

  const validate = () => {
    const product = cart.find((e) => e.id === g?.id);
    console.log(g?.key?.length);
    console.log(product);
    if (!product && g?.key?.length) {
      setDisabled(false);
    } else {
      product?.quantity < g?.key?.length
        ? setDisabled(false)
        : setDisabled(true);
    }
  };

  return (
    <Box>
      <Flex
        key={g?.id}
        bg={bg}
        padding="19px"
        borderRadius="20px"
        mt="10px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box mr="20px">
          <Text mt="-7px">
            <Text fontSize="7px">STORE</Text> {g?.store?.name}
          </Text>
          <Text mt="-3px">
            {" "}
            <Text fontSize="7px">PLATFORM</Text>
            {g?.platform?.name}
          </Text>
        </Box>
        <Box mr="20px">
          <Text mt="-3px">
            {" "}
            <Text fontSize="7px">REGION</Text>
            {g?.region}
          </Text>
          <Text fontSize="13px">&#8594; {g?.key.length} KEYS AVAILABLE</Text>
        </Box>
        <Text fontSize="22px" fontWeight="700">
          <Text fontSize="7px">PRICE</Text>$ {g?.price}
        </Text>
        <Button
          disabled={disabled}
          onClick={() => {
            handleCart(g?.id);
            onCartOpen();
            //   console.log(g.id);
          }}
          ml="4"
          bg="none"
          padding="1px 7px"
          h="22px"
          fontSize="14px"
        >
          Add to cart
        </Button>
      </Flex>
      <SimpleGrid columns={"2"} margin={"20px"}>
        <HStack>
          <Box>
            <Box fontSize={"xl"}>
              {/* $ {details?.price}
                  <Button
                    onClick={() => {
                      onCartOpen();
                      handleCart(details.id);
                    }}
                    ml="4"
                  >
                    Add to cart
                  </Button> */}
              <Modal
                isCentered
                onClose={onCartClose}
                isOpen={isCartOpen}
                motionPreset="slideInBottom"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader fontSize="9xl"></ModalHeader>
                  <ModalCloseButton />
                  <ModalBody fontSize="2xl">
                    <FaCartPlus size={23} />
                    You added one item to your cart!
                  </ModalBody>
                  <ModalFooter>
                    <Button mr={3} onClick={onCartClose}>
                      Continue Browsing
                    </Button>
                    <Button onClick={() => history.push("/checkout")}>
                      Checkout Now!
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Box>
        </HStack>
        {/* <HStack>
          <Box>
            Premium price:
            <Box fontSize={"x-large"}>
              $ 431.99
              <Button>Pay with premium!</Button>
            </Box>
          </Box>
        </HStack> */}
      </SimpleGrid>
    </Box>
  );
};
