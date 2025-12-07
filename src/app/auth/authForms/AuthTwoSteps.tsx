"use client";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import { Stack } from "@mui/system";

const AuthTwoSteps = () => (
  <>
    <Box mt={4}>
      <Stack mb={3}>
        <CustomFormLabel htmlFor="code">
          Type your 6 digits security code{" "}
        </CustomFormLabel>
        <Stack spacing={2} direction="row">
          <CustomTextField id="code" variant="outlined" fullWidth />
          <CustomTextField id="code" variant="outlined" fullWidth />
          <CustomTextField id="code" variant="outlined" fullWidth />
          <CustomTextField id="code" variant="outlined" fullWidth />
          <CustomTextField id="code" variant="outlined" fullWidth />
          <CustomTextField id="code" variant="outlined" fullWidth />
        </Stack>
      </Stack>
      <Link
        href="/"
        style={{
          display: "inline-block",
          width: "100%",
          padding: "12px 16px",
          backgroundColor: "rgb(33, 150, 243)",
          color: "white",
          textDecoration: "none",
          borderRadius: "4px",
          fontWeight: "500",
          textAlign: "center",
          fontSize: "15px",
        }}
      >
        Verify My Account
      </Link>

      <Stack direction="row" spacing={1} mt={3}>
        <Typography color="textSecondary" variant="h6" fontWeight="400">
          Didn&apos;t get the code?
        </Typography>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "rgb(33, 150, 243)",
            fontWeight: "500",
          }}
        >
          Resend
        </Link>
      </Stack>
    </Box>
  </>
);

export default AuthTwoSteps;
