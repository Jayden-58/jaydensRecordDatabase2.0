import React from "react";
import { Box } from "@mui/material";
import LoadingSpinner from "../Common/LoadingSpinner";
import PropTypes from "prop-types";

const LoadingPage = ({ loading }) => {
  return loading ? (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        width: "100vw",
        height: "100vh",
        // backgroundColor: 'black',
        // opacity: .9,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // pointerEvents: 'none'
      }}
    >
      <LoadingSpinner />
    </Box>
  ) : (
    <></>
  );
};

LoadingPage.propTypes = {
  loading: PropTypes.func.isRequired,
};
export default LoadingPage;
