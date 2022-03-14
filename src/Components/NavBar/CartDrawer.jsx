import React from "react";
import { Cart } from "../Cart/Cart";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Link,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBars, FaShoppingCart } from "react-icons/fa";


const CartDrawer = ({ Open, toggle }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("#ffffff", "#121019");
  const btnRef = React.useRef();
  
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
        mt="20px"
        ml="9px"
        border='none'
        color={Open ? '#000' : ''}
      >
        <FaShoppingCart size='20'/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
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
            <Button colorScheme="blue"><Link href='/checkout'>Checkout</Link></Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartDrawer;
