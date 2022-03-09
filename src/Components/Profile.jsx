import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Text } from "@chakra-ui/react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  function profiler (){
    if(isAuthenticated && !isLoading){
      isLoading ? (
        <div>loading...</div>
      ) : (
        isAuthenticated && (
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        )
      );

    }else{
      <p>You're not logged in</p>
    }
  };

  return (
    <>
    <Box w='90%' ml='9px' textAlign='right' mt='15px'>
    <Text fontSize='13px'>You're logged out.</Text>{profiler()}
     </Box>
  </>
  )
  
};


// function profiler (){
//   if(isAuthenticated && !isLoading){
//     isLoading ? (
//       <div>loading...</div>
//     ) : (
//       isAuthenticated && (
//         <div>
//           <p>{user.name}</p>
//           <p>{user.email}</p>
//         </div>
//       )
//     );

//   }else{
//     <p>You're not logged in</p>
//   }
// };
