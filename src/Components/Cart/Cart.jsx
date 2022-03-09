import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, loadCart, removeToCart } from "../../Actions";
import { Payment } from "./Payment";
import { Container, Button, Box, Text } from "@chakra-ui/react";

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

  return (
    <div>
      <Container d="flex" flexDirection="column">
        {cart?.map((g) => {
          return (
            <Box key={g.id} mb="10px" pb="4">
              <Text fontSize="16px" mb="5px" fontWeight="700">
                {g.name}
              </Text>
              <Text>
                ${g.price} x {g.quantity} = ${g.price * g.quantity}
              </Text>
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
        <Button onClick={handleClear} mb="20px" mt="20px">
          Clear all
        </Button>
        {payMethod && <Payment amount={total} />}
      </Container>
    </div>
  );
};
