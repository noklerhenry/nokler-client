import { ReactNode } from "react";
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  border='none'
                  outline='0'
                  boxShadow='0'
                  _focus={{ outline: '0', boxShadow: '0', border: 'none' }}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center color='#fff'>
                    <p>Welcome</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <Link to='/admin'>
                     <MenuItem color="#fff">Admin</MenuItem>
                  </Link>
                  <Link to='/admin-products'>
                     <MenuItem color="#fff">Admin-Products</MenuItem>
                  </Link>
                  <Link to='/admin-users'>
                     <MenuItem color="#fff">Admin-Users</MenuItem>
                  </Link>
                  <Link to='/addgame'>
                     <MenuItem color="#fff">Add Games</MenuItem>
                  </Link>
                  {/* <MenuItem color="#fff">Account Settings</MenuItem> */}
                  <MenuItem color="#fff">Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
