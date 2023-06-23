import { Typography, Box, styled, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { imageURL } from "../../constants/data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../cart/CartItem";
import { removeFromCart } from "../../reducer/actions/cartAction";

const Component = styled(Box)`
  width: 80%;
  height: 65vh;
  background: #fff;
  margin: 80px 140px;
`;

const Container = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;
const Image = styled("img")({
  width: "15%",
});
const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgba(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: 40%;
  background: #fb641b;
  color: #fff;
  width: 250px;
  height: 51px;
`;
const Checkout = ({ checkoutItems }) => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const [checkItems, setCheckItems] = useState(checkoutItems);
  const dispatch = useDispatch();
  useEffect(() => {
    if (checkoutItems.length === 0) {
      navigate("/");
    } else {
      cartItems.map((data) => {
        dispatch(removeFromCart(data.id));
      });
    }
  }, []);
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  return (
    <Component>
      <Container>
        <Image src={imgurl} alt="empty" />
        <Typography>Thank You for ordering</Typography>
        <Typography component="span">
          <b style={{ color: "green" }}>Your has been placed successfully!</b>
        </Typography>
        <Typography>
          {checkItems?.map((item) => (
            <CartItem item={item} />
          ))}
          <ButtonWrapper>
            <StyledButton
              sx={{
                "&:hover": {
                  backgroundColor: "#fb641b",
                  opacity: 0.7,
                },
              }}
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </StyledButton>
          </ButtonWrapper>
        </Typography>
      </Container>
    </Component>
  );
};

export default Checkout;
