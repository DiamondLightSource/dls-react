// Adapted from https://github.com/DiamondLightSource/web-ui-components
import {Avatar, Button, Box, Link, Stack, Typography, useTheme, Paper} from "@mui/material";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {ReactNode, useState} from "react";

import { MdLogin } from "react-icons/md";

export interface AuthState {
  fedid: string;
  name?: string;
}

export interface UserProps {
  user: AuthState | null;
  onLogin?: () => void;
  onLogout?: () => void;
  avatar?: ReactNode,
  color?: string
}

export const User = ({ user, onLogin, onLogout, avatar, color }: UserProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    
    setAnchorEl(null);
  };

  const theme = useTheme();
  
  return (
    <>
      <Box flexGrow={1} />
      {user ? (
        <>
          <Button
            aria-label="User Avatar"
            onClick={handleClick}
            sx={{
              border: "none",
              cursor: "pointer",
              minWidth: 0,
              "&:hover": {
                opacity: 0.8,
              },
            }}
          >
            <Stack direction="row" alignItems="center">
              {avatar ||
                  <Avatar
                      alt={user.name + " avatar"}
                      variant="rounded"
                      sx={{
                        backgroundColor: theme.palette.primary.light,
                        color: color || "textPrimary",
                        height: 35,
                        width: 35
                      }}
                  />
              }
              <div style={{ padding: 10 }}>
                <Typography
                    fontSize="0.75rem"
                    textTransform="none"
                    textAlign="left"
                    pl={"1px"}
                    color={color || "textPrimary" }
                >{user.name ? user.name : user.fedid}</Typography>
                {user.name && <Typography
                    fontSize="0.75rem"
                    textTransform="none"
                    textAlign="left"
                    pl={"1px"}
                    color={color || "textPrimary"}
                >{user.fedid}</Typography>}
              </div>
            </Stack>
          </Button>
          <Menu
            id="menu-list"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={onLogout} aria-label="Logout">
              <Link sx={{ textDecoration: "none" }}>Logout</Link>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Button
          onClick={onLogin}
          startIcon={<MdLogin />}
          sx={{
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText}}
        >
          Login
        </Button>
      )}
    </>
  );
};
