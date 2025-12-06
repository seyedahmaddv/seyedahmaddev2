"use client";
import React from "react";
import { Box, Stack, Typography, Container, Grid, Button } from "@mui/material";
import Link from "next/link";

const Banner = () => {
  return (
    <Box
      bgcolor="primary.light"
      sx={{
        paddingTop: {
          xs: "40px",
          lg: "100px",
        },
        paddingBottom: {
          xs: "40px",
          lg: "100px",
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          <Grid
            alignItems="center"
            size={{
              xs: 12,
              lg: 6
            }}>
            <Typography
              variant="h1"
              mb={3}
              lineHeight={1.4}
              fontWeight={700}
              sx={{
                fontSize: {
                  xs: "34px",
                  sm: "48px",
                },
              }}
            >
              Let's Discuss Collaboration Opportunities
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                href="https://linkedin.com/in/seyedahmaddv"
              >
                Connect in Linkedin
              </Button>
              <Button
                variant="outlined" 
                size="large"
                component={Link}
                href="/blog">
                View My Posts
              </Button>
            </Stack>
          </Grid>
          <Grid
            display="flex"
            alignItems="center"
            size={{
              xs: 12,
              lg: 5
            }}>
            <Typography lineHeight={1.9}>
              Looking for a professional developer and technical writer for your next project?
              With expertise in modern web technologies and a commitment to clean, maintainable
              code, I'm ready to bring your ideas to life. Connect with me on LinkedIn to
              discuss potential collaborations and project opportunities.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
