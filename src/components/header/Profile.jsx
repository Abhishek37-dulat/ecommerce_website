import { Box, MenuItem, Menu, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Component = styled(Menu)`
  margin-top: 5px;
`;

const Logouts = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    console.log(e.currentTarget);
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Logout = () => {
    setAccount("");
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, cursor: "pointer" }}>
          {account}
        </Typography>
      </Box>
      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            Logout();
          }}
        >
          <PowerSettingsNewIcon
            sx={{
              color: "#f51344",
            }}
            fontSize="small"
          />
          <Logouts>Logout</Logouts>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
