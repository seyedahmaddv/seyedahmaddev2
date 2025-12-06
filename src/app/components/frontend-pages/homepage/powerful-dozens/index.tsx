'use client';
import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import DozensCarousel from "./DozensCarousel";

const features = [
    {
        title: 'End-to-end ownership',
        subtext: 'From backlog shaping to deployment, I cover UX handoff, development, QA, and release notes so your team stays focused.'
    },
    {
        title: 'Data-driven UI delivery',
        subtext: 'Hook into REST, GraphQL, or headless CMS sources and surface clean dashboards, filtered listings, and actionable insights.'
    },
    {
        title: 'Trusted remote partner',
        subtext: 'Seasoned in English, Arabic, and Turkish collaboration, comfortable working async across time zones and toolchains.'
    },
]

const PowerfulDozens = () => {
    return (
        <>
            <Container sx={{
                maxWidth: '1400px !important', mt: {
                    xs: '40px',
                    lg: '90px',
                }
            }}>
                <Box bgcolor="primary.light" borderRadius="24px" sx={{
                    py: {
                        xs: '40px',
                        lg: '70px'
                    }
                }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={3} alignItems="center" >
                            <Grid
                                size={{
                                    xs: 12,
                                    lg: 6,
                                    sm: 9
                                }}>
                                <Typography variant="h4" mb="55px" fontWeight={700} fontSize="40px" lineHeight="1.3" sx={{
                                    fontSize: {
                                        lg: '40px',
                                        xs: '35px'
                                    }
                                }}>Product-ready sections for every front-end surface</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                    <DozensCarousel />
                    <Container maxWidth="lg">
                        <Grid container spacing={3} mt={5}>
                            {features.map((feature, i) => (
                                <Grid
                                    textAlign="center"
                                    key={i}
                                    size={{
                                        xs: 12,
                                        lg: 4,
                                        sm: 4
                                    }}>
                                    <Typography variant="h4" mb="16px" fontWeight={700} sx={{
                                        fontSize: {
                                            xs: '17px'
                                        }
                                    }}>{feature.title}</Typography>
                                    <Typography variant="body1" lineHeight="28px">{feature.subtext}</Typography>
                                </Grid>
                            ))}

                        </Grid>

                    </Container>

                </Box>
            </Container>
        </>
    );
};

export default PowerfulDozens;
