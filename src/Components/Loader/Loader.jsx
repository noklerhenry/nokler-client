import React from "react"
import {Spinner} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import { Box } from "@chakra-ui/react";

export default function Loader() {
    return (
        <Box>
            <Spinner color="dark"/>
        </Box>
    );    
}