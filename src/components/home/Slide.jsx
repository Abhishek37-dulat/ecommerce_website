import { Box, Typography, styled, Button, Divider } from "@mui/material";
import Carousel from "react-multi-carousel";
import Countdown from "react-countdown";

import "react-multi-carousel/lib/styles.css";
// import clock from "../../clock.png";
import { Link } from "react-router-dom";

const Component = styled(Box)`
  margin-top: 10px;
  background: #fff;
`;
const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;
const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  align-items: center;
  color: #fff;
  background: #f51344;
  padding: 2px 10px;
  border-radius: 2px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`;
const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right: 25px;
  line-height: 32px;
`;
const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #f51344;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
`;
const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Image = styled("img")({
  width: "auto",
  height: 150,
});

const Slide = ({ products, title, timer }) => {
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {" "}
        {hours} : {minutes} : {seconds} Left{" "}
      </Box>
    );
  };
  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            {/* <img src={clock} alt="clock" style={{ width: 24 }} /> */}
            <Countdown date={Date.now() + 4.32e7} renderer={renderer} />
          </Timer>
        )}
        <ViewAllButton
          variant="contained"
          sx={{
            ":hover": {
              bgcolor: "#F62E5A",
              color: "white",
            },
          }}
        >
          View All
        </ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products?.map((product, index) => (
          <Link
            to={`product/${product.id}`}
            style={{ textDecoration: "none" }}
            key={index}
          >
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <Image src={product.url} alt="product" />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {product.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{product.discount}</Text>
              <Text style={{ color: "#212121", opacity: ".6" }}>
                {product.tagline}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};

export default Slide;
