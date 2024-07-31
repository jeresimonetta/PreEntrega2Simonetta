import * as React from "react";
import { AppBar, Box, Toolbar, IconButton } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CartWidget from "../cartWidget/CartWidget";
import { Link } from "react-router-dom";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="error">
      <Container width="100%">
        <Toolbar disableGutters>
          <Box>
            <img
              src="https://res.cloudinary.com/dptry1l5s/image/upload/v1711649917/Captura_de_pantalla_69_yxvzkl.png"
              alt=""
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/categoria/remeras">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Remeras
              </Button>
            </Link>

            <Link to="/categoria/buzos">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Buzos
              </Button>
            </Link>

            <Link to="/categoria/prints">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Prints
              </Button>
            </Link>

            <Link to="/">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Todas las categorías
              </Button>
            </Link>

            <Link to="/">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Contactanos
              </Button>
            </Link>
          </Box>
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
