import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  loadCart,
  removeToCart,
  getAllProducts,
} from "../../Actions";
import { Payment } from "./Payment";
import { Container, Button, Box, Text, Image } from "@chakra-ui/react";

export const Cart = ({ payMethod }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    let totalPrice = 0;
    cart?.forEach((g) => {
      totalPrice = totalPrice + g.price * g.quantity;
    });
    setTotal(totalPrice);
  }, [cart]);

  const handleDelete = (id) => {
    dispatch(removeToCart(id));
  };
  const handleClear = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  console.log(cart);

  return (
    <div>
      <Container d="flex" flexDirection="column">
        {cart?.map((g) => {
          return (
            <Box key={g.id} mb="10px" pb="4">
              <Text fontSize="16px" mb="5px" fontWeight="700">
                {g.game?.name}
              </Text>
              <Text fontSize="13px" mb="5px" fontWeight="500">
                {g.store?.name} | {g.platform?.name}
              </Text>
              <Text>
                ${g?.price} x {g?.quantity} = ${g?.price * g.quantity}
              </Text>
              <Image
                w="100%"
                h={{ base: "100%", sm: "300px", lg: "350px" }}
                src={g.image}
                alt="img not found"
                borderRadius="25px"
                fit="cover"
                align="center"
                boxShadow="5px 5px 15px #111111"
                mb="15px"
              />
              <Button variant="red" onClick={() => handleDelete(g.id)}>
                X
              </Button>
              <hr />
            </Box>
          );
        })}
        <Text fontSize="18px" fontWeight="700">
          Total: <b>${total}</b>
        </Text>
        {cart.length && (
          <Button onClick={handleClear} mb="20px" mt="20px">
            Clear all
          </Button>
        )}
        {payMethod && <Payment amount={total} />}
      </Container>
    </div>
  );
};
