import { Box, Typography, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="h1"
        style={{ fontSize: "3rem", letterSpacing: ".3em" }}
      >
        INITIATIVE TRACKER
      </Typography>
      <Button
        variant="contained"
        style={{ width: "14em" }}
        onClick={() => dispatch({ type: "form/open" })}
      >
        Add Character
      </Button>
    </Box>
  );
};

export default Header;
