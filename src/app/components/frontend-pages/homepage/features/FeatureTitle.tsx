'use client';
import React from "react";
import { Box, Grid, Typography, Link, Chip } from "@mui/material";


const FeatureTitle = () => {
    return (
        <Grid container spacing={3} justifyContent="center">
            <Grid
                textAlign="center"
                size={{
                    xs: 12,
                    lg: 6
                }}>
                <Typography variant="body1">
                    Shipping remote-friendly interfaces with <Box fontWeight={500} component="span">React.js, Next.js, and modern tooling</Box> so product teams stay fast, accessible, and SEO-ready.
                </Typography>
            </Grid>
        </Grid>
    );
};

export default FeatureTitle;
