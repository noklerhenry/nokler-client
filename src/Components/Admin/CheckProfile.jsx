import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

export default function checkRole(){

    const { user } = useAuth0();

     //let email = user.email;
     let [userData, setUserData] = useState()

     useEffect(() => {
        axios.get('https://nokler-api.herokuapp.com/getUserByEmail?email=' + user?.email)
        .then((response) =>{
            setUserData(response.data[0])
            //return response;
          })
        }, []);

      console.log('im userdata', userData)
      console.log('im useremail', user.email)

    if(userData?.rol === 'ADMIN'){
        return 'ADMIN'
    } if (userData?.rol === 'USER'){
        return 'USER'
    } else {return 'NOT USER'}
    
}