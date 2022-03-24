import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Flex
} from "@chakra-ui/react";

const FAQs = () => {
  return (
    <>
      <Container maxW={"5xl"} mt="6rem">
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
            Frecuent{" "}
            <Text as={"span"} color={"pink.500"}>
              Questions
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            Doubts about Nøkler? We have some answers for you!
          </Text>
        </Stack>
      </Container>
      <Accordion allowMultiple w="60%" m="-3rem 0 9rem 15rem">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize={"x-large"}>
                What is Nøkler?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text color={"gray.500"}>
              Nøkler is an online platform dedicated to the sale of digital keys
              for games. Here you will be able to find a wide variety of action
              games, adventures, puzzles and much more from small developers to
              the largest. Every gaming enthusiast will be able to find the key
              of the game they want, and at a good price! <br />
              Just pick the key of the game you want and change it in your
              favorite store like Steam, EpicGames, GOG, etc. <br />
              Our Support Team can help you in case you have specific questions.
              Click{" "}
              <Link to="/contact">
                <strong>Here</strong>
              </Link>
            </Text>
          </AccordionPanel>
        </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={"x-large"}>
                  Do I need to register to buy on Nøkler?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text color={"gray.500"}>
                Yes. Then you can easily start shopping in our store. Just
                choose the product you like the most, add it to the cart and buy
                it by pressing the "Checkout" button and finally the "Buy"
                button. <br />
                Registration will also give you access to better features when
                exploring Nøkler, to the shopping history of the games you've
                purchased for example, and much more!
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={"x-large"}>
                  How do I register?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text color={"gray.500"}>
                If you want to register on our website, click on "Log Up".{" "}
                <br />
                Enter your email and password. <br />
                Confirm your email and you're ready! <br />
                The next time you enter on Nøkler you'll be log in already, but
                in case you want to log out then you just will need to log in
                again, with the account registered previously.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={"x-large"}>
                  What does it mean that a product is digital?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text color={"gray.500"}>
                Digital goods are the opposite of physical ones, meaning you
                can’t touch them. <br /> They are usually in the form of a code
                (a series of letters and digits, ABCD-1234-XY96 for example).{" "}
                <br /> A code can be activated on various platforms and apps
                (like Steam) so you can easily download the content from there.
                This is a huge time-saver, since you don’t have to go to the
                store or wait for the delivery of the product. <br /> The code
                for the digital product you bought on Nøkler is sent to you via
                e-mail, so the process is almost instant.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={"x-large"}>
                  How can I buy a product?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text color={"gray.500"}>
                If you're new to Nøkler or not sure how to get started, don't
                worry! We have this little guide for you to quickly learn how to
                buy that game you love so much. <br />
                First step, you need to be registered on our website to buy, Now
                that you have an account, you are ready to buy your favorite
                games! You can browse through the categories, select a price
                range, consult the most popular, the platform... all in Nøkler.{" "}
                <br />
                Once you find the game you'd like to play, you can purchase it
                through the product page (detail of it). <br />
                Make sure that the game you are going to buy is from the
                platform you want. <br />
                Once you have chosen the game, click on "Add to cart". If you
                want to continue browsing press the "Continue Browsing" button
                or on "Checkout now!", this last button will take you
                immediately to the checkout section. <br />
                In the next step, select the payment method and fill in the
                details. When the payment goes through, voila! You will have the
                key for your game. You can copy this key from the email that you
                will receive.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={"x-large"}>
                  What are the payment methods available in Nøkler?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text color={"gray.500"}>
                The payment methods available on the checkout page are limited
                at the moment, we accept credit cards and debit cards as well.{" "}
                <br />
                Soon we'll expand the available payment methods with the purpose
                of provide the best service and satisfaction to our customers.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={"x-large"}>
                  What should I do if my transaction has failed?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text color={"gray.500"}>
                In case your transaction has been declined, please make sure
                that: <br />
                You have available balance <br />
                You have configured right your personal information in the
                checkout section. <br />
                If you checked these requirements and still have problems,
                please contact our Support Team.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={"x-large"}>
                  Where can I find the product I have purchased?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text color={"gray.500"}>
                After purchasing a game in Nøkler you will receive your product
                key in two places: <br />
                In your Nøkler account, in the Shopping History section (only
                available if you are a registered user) <br />
                Your email
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={"x-large"}>
                  I have not received any email confirmation of my purchase.
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text color={"gray.500"}>
                Please check that you used a correct email address when you made
                the purchase. You can also check the spam folder. <br />
                You can check your orders in the Shopping history section where
                you will find all the information, including the key provided.{" "}
                <br />
                If you still cannot find any information about purchases please
                contact our Support Team.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={"x-large"}>
                  I purchased a wrong product (wrong platform or multiple
                  copies) What can I do?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text color={"gray.500"}>
                Remember to always check the details of a game before
                purchasing. Anyways, in Nøkler you can refound your purchase in
                case you need to.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={"x-large"}>
                  My Nøkler account has been suspended. What should I do?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text color={"gray.500"}>
                Our goal is to ensure that our users are protected and our
                marketplace ecosystem safe for everyone. This means that – in
                some rare situations – your account on Nøkler may be suspended
                due to security-related concerns. <br /> In order to make sure
                that this doesn't happen because of network connection security
                problems, please go through the following steps: <br /> Use your
                own, private Internet connection. <br /> Do not use public
                networks, as they are highly unsafe.
                <br /> Make sure that you aren't using any VPNs or proxy
                software. <br /> Try using your mobile Internet connection.{" "}
                <br /> Delete cookie files and clear the cache of your browser.{" "}
                <br /> If your account is still suspended even after following
                the instructions above, please contact our Support Team.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={"x-large"}>
                  I think I found a bug, where should I report it?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text color={"gray.500"}>
                You can report this to our Support Team. <br />
                We appreciate your input and feedback!
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={"x-large"}>
                  I need to contact the Support Team
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text color={"gray.500"}>
                In case you cannot find the answers you are looking for in this
                section or you are experiencing problems, our Support is
                available 24/7. Depending on your questions or the problems you
                are having, you can contact us{" "}
                <Link to="/contact">
                  <strong>Here</strong>
                </Link>
                . <br />
                All you have to do is fill the required information and send it.
                Write all the details that can help us solve the case!
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </>
  );
}

export default FAQs