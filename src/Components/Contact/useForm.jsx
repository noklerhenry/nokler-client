import { useState } from "react";
import { useDispatch } from "react-redux";
import { postContactForm } from "../../Actions";
import { useAuth0 } from "@auth0/auth0-react";


const useForm = () => {
    const {
      user,
      loginWithPopup,
      isAuthenticated
    } = useAuth0();
    
  const dispatch = useDispatch()
  
  const [input, setInput] = useState({
      name: isAuthenticated ? user.name : "",
      email: isAuthenticated ? user.email : "",
      message: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handlerInputChange = (e) => {
    const { name, value } = e.target
    setInput({
        ...input,
        [name]: value
    });
    console.log(input)
  };
  
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(postContactForm({
        contactForm: {
            ...input
        }
    }));
    setSubmitted(true);
    console.log(input);
    setInput({
        ...input,
        message: "",
    });
  };
   
  return {
    input,
    submitted,
    setSubmitted,
    handlerInputChange,
    handlerSubmit
  }
};

export default useForm;
