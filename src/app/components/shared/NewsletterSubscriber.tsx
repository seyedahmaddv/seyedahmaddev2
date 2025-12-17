"use client";
import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

const NewsletterSubscriber = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          language: "fa",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({
          type: "success",
          text: "✅ تشکر! شما با موفقیت عضو خبرنامه شدید",
        });
        setEmail("");
        setName("");
      } else {
        setMessage({
          type: "error",
          text: data.error || "خطا در ثبت‌نام. لطفا دوباره تلاش کنید",
        });
      }
    } catch (error: any) {
      setMessage({
        type: "error",
        text: "خطا در اتصال به سرور",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubscribe}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
      }}
    >
      <Typography variant="h6" fontWeight={600}>
        عضویت در خبرنامه
      </Typography>

      <Stack spacing={2}>
        <TextField
          fullWidth
          label="نام"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="نام خود را وارد کنید"
          size="small"
        />
        <TextField
          fullWidth
          type="email"
          label="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ایمیل خود را وارد کنید"
          required
          size="small"
        />
      </Stack>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={loading || !email}
      >
        {loading ? "در حال ثبت‌نام..." : "عضویت"}
      </Button>

      {message && (
        <Alert severity={message.type} onClose={() => setMessage(null)}>
          {message.text}
        </Alert>
      )}
    </Box>
  );
};

export default NewsletterSubscriber;
