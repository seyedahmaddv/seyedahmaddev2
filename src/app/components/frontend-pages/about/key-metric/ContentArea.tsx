'use client';
import React from "react";
import { Typography } from "@mui/material";

const ContentArea = () => {

    return (
        <>
            <Typography variant="h1" mb={2} lineHeight={1.4} fontWeight={700} sx={{
                fontSize: {
                    xs: '34px', sm: '40px'
                }
            }}>My Journey in Numbers</Typography>
            <Typography lineHeight={1.9} >From the beginning of my professional path to the community I&apos;ve built and the consistent growth I&apos;ve achieved &ndash; these numbers reflect my dedication and progress at a glance. They represent the tangible results of my commitment to excellence in development and technical writing.</Typography>
        </>
    );
};

export default ContentArea;
