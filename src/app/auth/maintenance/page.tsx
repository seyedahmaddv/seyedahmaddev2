import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Maintenance = () => (
  <Box
    display="flex"
    flexDirection="column"
    height="100vh"
    textAlign="center"
    justifyContent="center"
  >
    <Container maxWidth="md">
      <Image
        src={"/images/backgrounds/maintenance2.svg"}
        alt="404"
        width={500}
        height={500}
        style={{ width: "100%", maxWidth: "500px", maxHeight: "500px" }}
      />
      <Typography align="center" variant="h1" mb={4}>
        Maintenance Mode!!!
      </Typography>
      <Typography align="center" variant="h4" mb={4}>
        Website is Under Construction. Check back later!
      </Typography>
      <Link
        href="/"
        style={{
          display: "inline-block",
          padding: "10px 24px",
          backgroundColor: "rgb(33, 150, 243)",
          color: "white",
          textDecoration: "none",
          borderRadius: "4px",
          fontWeight: "500",
        }}
      >
        Go Back to Home
      </Link>
    </Container>
  </Box>
);

export default Maintenance;
