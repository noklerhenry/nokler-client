import React from "react";
import { Cart } from "../Cart/Cart";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
//   Link,
  useDisclosure,
  useColorModeValue,
  Box
} from "@chakra-ui/react";
import { FaBars, FaShoppingCart } from "react-icons/fa";


const CartDrawer = ({ Open, toggle, str }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("#ffffff", "#121019");
  const btnRef = React.useRef();
  
  const cart = useSelector((state) => state.cart)
  
  /* const openCartCloseSideBar = () => {
    onOpen()
    toggle()
  } */

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        size="sm"
        mt="0px"
        ml="9px"
        border="none"
        color={Open ? "#8c06f7" : ""}
        fontSize="25px"
        fontWeight="300"
      >
        <Box mr="10px">
          <FaShoppingCart size="21" />
        </Box>
        {str}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent bg={bg}>
          <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>

          <DrawerBody>
            <Cart />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              isDisabled={cart.length >= 1 ? false : true}
            >
              <Link to={cart.length >= 1 && "/checkout"}>Checkout</Link>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartDrawer;
