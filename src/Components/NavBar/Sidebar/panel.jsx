// import { useDisclosure, IconButton, Box, Flex, Button } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { FaBars, FaTimes } from 'react-icons/fa';

// export default function Panel() {
//   const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
//   const [hidden, setHidden] = useState(!isOpen);

//   return (
//     <div>
//       <Box
//         as="aside"
//         pos="fixed"
//         zIndex="999"
//         w="100%"
//         h="100%"
//         transition="0.3s ease-in-out"
//       >
//         <IconButton
//           {...getButtonProps()}
//           border="none"
//           fontSize="1.8rem"
//           icon={<FaBars />}
//           outline="none"
//           boxShadow="none"
//         />
//         <motion.div
//           {...getDisclosureProps()}
//           hidden={hidden}
//           initial={false}
//           onAnimationStart={() => setHidden(false)}
//           onAnimationComplete={() => setHidden(!isOpen)}
//           animate={{ width: isOpen ? 305 : 0 }}
//           style={{
//             background: "black",
//             overflow: "hidden",
//             whiteSpace: "nowrap",
//             position: "absolute",
//             left: "-20px",
//             height: "150vh",
//             top: "-18px",
//           }}
//           zIndex='999'
//         >
//           <Box
//             pos="absolute"
//             top="1.2rem"
//             right="1.5rem"
//             bg="transparent"
//             fontSize="2rem"
//             cursor="pointer"
//             outline="none"
//           >
//             <IconButton
//               aria-label="Close Menu"
//               icon={<FaTimes color="#fff" font-size="1.8rem" />}
//               {...getButtonProps()}
//               border="none"
//               bg="transparent"
//             />
//           </Box>
//           <Flex
//             mt="7rem"
//             flexDirection="column"
//             align="center"
//             justifyContent="center"
//           >
//             <Box>
//               <Button>Home</Button>
//             </Box>
//             <Box mt="20px">
//               <Button>Whislist</Button>
//             </Box>
//             <Box mt="20px">
//               <Button>On Sale</Button>
//             </Box>
//             <Box mt="20px">
//               <Button>Profile</Button>
//             </Box>
//             <Box mt="20px">
//               <Button>Help</Button>
//             </Box>
//             <Box mt="7rem">
//               <Button bg="#EC1DFA" color="white">
//                 Log In
//               </Button>
//             </Box>
//           </Flex>
//         </motion.div>
//       </Box>
//     </div>
//   );
// }
