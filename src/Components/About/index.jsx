import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  Icon,
  useColorModeValue,
  Container,
  Heading,
  Stack,
  Text,
  Link,
  SimpleGrid,
  useMediaQuery
} from "@chakra-ui/react";

import { TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";
import { GoMail } from "react-icons/go";

const About = () => { 
  const cards = [
    {
      name: "Gonzalo Soria",
      img: "https://avatars.githubusercontent.com/u/87502686?v=4",
      rol: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/gonzalosoria-fullstack-developer/",
      github: "https://github.com/gonsoria",
      mail: "gonzalosoria.sg@gmail.com",
    },
    {
      name: "Mariano Zanetto",
      img: "https://avatars.githubusercontent.com/u/80788269?v=4",
      rol: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/marzanett/",
      github: "https://github.com/MarZanett",
      mail: "marzanett@gmail.com",
    },
    {
      name: "Patricio Zubiri",
      img: "https://avatars.githubusercontent.com/u/91157301?v=4",
      rol: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/patriciozubiri-dev/",
      github: "https://github.com/zpzub",
      mail: "bonjour@patriciozubiri.com",
    },
    {
      name: "Bruno Marinich",
      img: "https://avatars.githubusercontent.com/u/87373945?v=4",
      rol: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/bruno-marinich-6b7686222/",
      github: "https://github.com/brun0m4r",
      mail: "brunomarinich@gmail.com",
    },
    {
      name: "Maximiliano Cidron",
      img: "https://avatars.githubusercontent.com/u/88686680?v=4",
      rol: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/maximiliano-e-cidron-00876b169/",
      github: "https://github.com/MaximilianoCidron",
      mail: "maximilianocidron@gmail.com",
    },
    {
      name: "Ivan Miranda",
      img: "https://avatars.githubusercontent.com/u/86531814?v=4",
      rol: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/ivanmiranda10/",
      github: "https://github.com/ivanmiranda10",
      mail: "ivanmiranda.contact@gmail.com",
    },
    {
      name: "Mariano Schmidt",
      img: "https://avatars.githubusercontent.com/u/89479663?v=4",
      rol: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/mariano-schmidt-fullstackdev/",
      github: "https://github.com/MdSchmidt39",
      mail: "marianodc2000@hotmail.com",
    },
  ];
  
  return (
    <>
      <Container maxW={"5xl"} mt="5rem">
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Meet the Team{" "}
            <Text as={"span"} color={"pink.500"}>
              Behind Nøkler
            </Text>
          </Heading>
        </Stack>
      </Container>
      <SimpleGrid columns={[1, 1, 1, 1, 2, 3, 4, 4]}>
       {cards?.map((el, index) => {
           return (
             <Flex
               //   bg={useColorModeValue("#F9FAFB", "gray.600")}
               p="20px 20px 90px 20px"
               w="100%"
               alignItems="center"
               justifyContent="center"
               mt="-4rem"
               key={index}
             >
               <Box
                 w="full"
                 mx="auto"
                 bg={useColorModeValue("white", "gray.800")}
                 shadow="lg"
                 rounded="lg"
                 overflow="hidden"
               >
                 <Image
                   w="full"
                   h="100%"
                   fit="cover"
                   // objectPosition="center"
                   objectFit="contain"
                   src={el.img}
                   alt="avatar"
                 />
                 <Box py={4} px={6}>
                   <chakra.h1
                     fontSize={el.name === "Maximiliano Cidron" ? "lg" : "xl"}
                     fontWeight="bold"
                     color={useColorModeValue("gray.800", "white")}
                   >
                     {el.name}
                   </chakra.h1>

                   <chakra.p
                     py={2}
                     color={useColorModeValue("gray.700", "gray.400")}
                   >
                     {el.rol}
                   </chakra.p>

                   <Flex
                     alignItems="center"
                     mt={4}
                     color={useColorModeValue("gray.700", "gray.200")}
                   >
                     <Icon as={TiSocialLinkedin} h={6} w={6} mr={2} size="sm" />

                     <chakra.h1 px={0} fontSize="sm">
                       <Link
                         href={el.linkedin}
                         isExternal
                       >
                         <Text _hover={{ bg: "transparent" }}>Linkedin</Text>
                       </Link>
                     </chakra.h1>
                   </Flex>

                   <Flex
                     alignItems="center"
                     mt={4}
                     color={useColorModeValue("gray.700", "gray.200")}
                   >
                     <Icon as={TiSocialGithub} h={6} w={6} mr={2} />

                     <chakra.h1 px={0} fontSize="sm">
                       <Link href={el.github} isExternal>
                         <Text _hover={{ bg: "transparent" }}>Github</Text>
                       </Link>
                     </chakra.h1>
                   </Flex>
                   <Flex
                     alignItems="center"
                     mt={4}
                     color={useColorModeValue("gray.700", "gray.200")}
                   >
                     <Icon as={GoMail} h={6} w={6} mr={2} />

                     <chakra.h1 px={0} fontSize="14px">
                       {el.mail}
                     </chakra.h1>
                   </Flex>
                 </Box>
               </Box>
             </Flex>
           );
       })}
      </SimpleGrid>
    </>
  );
};

export default About;
