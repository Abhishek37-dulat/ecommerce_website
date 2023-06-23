import { Box, Grid, Typography, styled, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../../reducer/actions/cartAction";
import Checkout from "../checkout/Checkout";

const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  [theme.breakpoints.down("md")]: {
    padding: "15px 0",
  },
}));
const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;
const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgba(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  width: 250px;
  height: 51px;
`;
const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("md")]: {
    marginBottom: 15,
  },
}));

const Cart = () => {
  const navigate = useNavigate();
  const [condition, setCondition] = useState(true);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleCheckout = () => {
    navigate("/checkout");

    setCondition(false);
  };
  return (
    <>
      {cartItems?.length ? (
        <Container container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems.length})</Typography>
            </Header>
            {cartItems?.map((item) => (
              <CartItem item={item} condition={condition} />
            ))}
            <ButtonWrapper>
              <StyledButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#fb641b",
                    opacity: 0.7,
                  },
                }}
                onClick={() => handleCheckout()}
              >
                Place Order
              </StyledButton>
            </ButtonWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
