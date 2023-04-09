import { Box, styled } from "@mui/material";
import React from "react";
import Slide from "./Slide";

const Component = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)(({ theme }) => ({
  width: "83%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
const RightComponent = styled(Box)(({ theme }) => ({
  background: "#fff",
  padding: 5,
  marginTop: 10,
  marginLeft: 10,
  width: "17%",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
    width: "0%",
  },
}));

const MidSlide = ({ products, title, timer }) => {
  const adURL =
    "https://1.bp.blogspot.com/-42aTUTQa9aw/YT9SljYv44I/AAAAAAAAB0g/FWcIqtj4hYU-cg0Yt0rhWx9QuLG1CGbzACLcBGAsYHQ/s1728/IMG_20210913_190032.jpg";
  return (
    <Component>
      <LeftComponent>
        <Slide products={products} title={title} timer={timer} />
      </LeftComponent>
      <RightComponent>
        <img src={adURL} alt="ad" style={{ width: 217 }} />
      </RightComponent>
    </Component>
  );
};

export default MidSlide;
