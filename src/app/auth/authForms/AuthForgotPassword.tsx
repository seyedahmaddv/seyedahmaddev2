'use client'
import { Button, Stack } from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";

export default function AuthForgotPassword(){
 return (
  <>
    <Stack mt={4} spacing={2}>
      <CustomFormLabel htmlFor="reset-email">Email Adddress</CustomFormLabel>
      <CustomTextField id="reset-email" variant="outlined" fullWidth />

      <Link
        href="/"
        style={{
          display: "inline-block",
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
        Forgot Password
      </Link>
      <Link
        href="/auth/auth1/login"
        style={{
          display: "inline-block",
          padding: "12px 16px",
          backgroundColor: "transparent",
          color: "rgb(33, 150, 243)",
          textDecoration: "none",
          borderRadius: "4px",
          fontWeight: "500",
          textAlign: "center",
          fontSize: "15px",
          border: "1px solid rgb(33, 150, 243)",
        }}
      >
        Back to Login
      </Link>
    </Stack>
  </>
)};
