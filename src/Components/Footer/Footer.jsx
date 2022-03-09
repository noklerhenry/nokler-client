import React from "react";
import facebookLogo from "../../noklerutils/footer_icon_facebook.png"
import igLogo from "../../noklerutils/footer_icon_instagram.png"
import linkedinLogo from "../../noklerutils/footer_icon_linkedin.png"
import twitchLogo from "../../noklerutils/footer_icon_twitch.png"
import ytLogo from "../../noklerutils/footer_icon_youtube.png"
import noklerLogo from "../../noklerutils/footer_nokler_logo.png"
import { Box, Flex, Link, Text, Image, Container, Divider } from "@chakra-ui/react";

export default function Footer(){
    return(
        <>
        <Flex wrap='wrap' flexDirection='row'>
        <Container d='flex'flexDirection='row' justifyContent='space-around' mt='15px' mb='15px'>
                <Link>Home</Link>
                <Link>Games</Link>
                <Link>FAQ</Link>
                <Link>About Us</Link>
                <Link>Login</Link>
                <Link>Sign Up</Link>
            </Container>
        </Flex>
        <Divider />
        <Flex wrap='wrap' flexDirection='row'>
            <Container d='flex' flexDirection='row' justifyContent='space-around' mt='15px' mb='15px' >
                <Box d='flex'flexDirection='row'>
                <Image alt="facebookicon" src={facebookLogo} height='35px'/>
                <Image alt="igicon" src={igLogo} height='35px'/>
                <Image alt="Liicon" src={linkedinLogo} height='35px'/>
                <Image alt="Twitcjicon" src={twitchLogo} height='35px'/>
                <Image alt="YTicon" src={ytLogo} height='35px'/>
                </Box>

                
            </Container>
        </Flex>
        </>
    )
}