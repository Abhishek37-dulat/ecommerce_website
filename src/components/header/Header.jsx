import React, { useState } from "react";
import shome from "../../shopme3.png";

import {
  AppBar,
  Box,
  styled,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
//components
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";

const StyledHeader = styled(AppBar)`
  background: #f51344;
  height: 55px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: white;
`;
const SubHeader = styled(Box)`
  font-size: 25px;
  font-style: italic;
  margin-top: 25px;
  font-family: "Alkatra", cursive;
`;

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const list = () => (
    <Box style={{ width: 200 }} onClick={handleClose}>
      <List>
        <ListItem button>
          <CustomButtons />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <MenuButton color="inherit" onClick={handleOpen}>
          <Menu />
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        <Component to="/">
          <img
            src={shome}
            alt="logo"
            style={{
              width: 45,
            }}
          />
          <SubHeader>ShopMe</SubHeader>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
