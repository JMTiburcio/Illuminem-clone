import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import NavLink from "./NavLink";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            {isSmallScreen ? (
              <IconButton edge="end" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <NavLink label="One Stop" selected={false} />
                <NavLink label="Illuminem Voice" selected={false} />
                <NavLink label="Explorer" selected={false} />
                <NavLink label="Categories" selected={false} />
                <NavLink label="NewsLetter" selected={false} />
                <NavLink label="More" selected={false} />
                <NavLink label="About" selected={false} />
              </>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
