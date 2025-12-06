'use client';
import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import "slick-carousel/slick/slick.css";

import LeaderShipCarousel from "./LeaderShipCarousel";
import Contact from "./Contact";

const Leadership = () => {
    return (
        <>
            <Box sx={{
                py: {
                    xs: 5,
                    lg: 10
                }
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={3} alignItems="center" mb={6}>
                        <Grid
                            size={{
                                xs: 12,
                                lg: 5,
                                sm: 8
                            }}
                            sx={{
                                lineHeight: '1.8' // فاصله عمودی کلی
                            }}
                        >
                            <Typography
                                variant="h4"
                                mb={3}
                                sx={{
                                    fontSize: {
                                        lg: '40px',
                                        xs: '35px'
                                    },
                                    // تنظیم فاصله عمودی بین دو خط عنوان
                                    lineHeight: {
                                        lg: '1.4', // فاصله بیشتر برای دسکتاپ
                                        xs: '1.3'  // فاصله کمتر برای موبایل
                                    },
                                    '& br': {
                                        display: { xs: 'none', lg: 'block' } // خط‌شکن فقط در دسکتاپ
                                    }
                                }}
                            >
                                {/* Option 1: اگر واقعاً با تیم‌های بزرگ کار کرده‌ای */}
                                Contributing to <br />
                                Team Success Stories
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: '32px',
                                    fontSize: '18px',
                                    opacity: 0.9
                                }}
                            >

                                Working closely with product, marketing, and engineering teams
                                to build reliable front-end experiences that drive growth.
                            </Typography>
                        </Grid>
                    </Grid>

                    <LeaderShipCarousel />
                </Container>

            </Box>
            <Contact />
        </>
    );
};

export default Leadership;
