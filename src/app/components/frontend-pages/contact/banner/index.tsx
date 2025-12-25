'use client';
import React from "react";
import { Box, Typography, Container, Grid, Link } from "@mui/material";
import { IconButton } from '@mui/material';
import { motion } from "framer-motion";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter'; // یا XIcon اگر دارید

const MotionIconButton = motion(IconButton);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // فاصله زمانی بین انیمیشن هر آیکون
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
};

const Banner = () => {
    return (
        <>
            <Box bgcolor="primary.light" sx={{
                paddingTop: { xs: '40px', lg: '100px' },
                paddingBottom: { xs: '40px', lg: '200px' },
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={3} justifyContent="center">
                        <Grid alignItems="center" textAlign="center" size={{ xs: 12, lg: 8 }}>
                            <Typography color="primary.main" textTransform="uppercase" fontSize="13px">
                                Contact us
                            </Typography>
                            <Typography variant="h1" mb={3} lineHeight={1.4} fontWeight={700} sx={{
                                fontSize: { xs: '34px', sm: '48px', lg: '56px' },
                            }}>
                                We'd love to hear from you
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ mt: { lg: '-150px' } }}>
                <Container maxWidth="lg">
                    {/* بخش جدید: لینک‌های کانال‌ها با انیمیشن Framer Motion */}
                    <Box
                        component={motion.div}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        sx={{
                            bgcolor: 'background.paper',
                            borderRadius: '16px',
                            py: 8,
                            px: { xs: 4, md: 8 },
                            boxShadow: 3,
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h5" mb={4} fontWeight={600}>
                           Follow Me on Social Media
                        </Typography>

                        <Grid container spacing={4} justifyContent="center">
                            {/* تلگرام */}
                            <Grid>
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <IconButton
                                        component={Link}
                                        href="https://t.me/coderoof"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        size="large"
                                        sx={{
                                            bgcolor: '#0088cc',
                                            color: 'white',
                                            '&:hover': { bgcolor: '#006699' },
                                        }}
                                    >
                                        <TelegramIcon fontSize="large" />
                                    </IconButton>
                                </motion.div>
                            </Grid>

                            
                            {/* اینستاگرام */}
                            <Grid>
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.2, rotate: -10 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <IconButton
                                        component={Link}
                                        href="https://instagram.com/coderoof"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        size="large"
                                        sx={{ bgcolor: '#E4405F', color: 'white', '&:hover': { bgcolor: '#C13550' } }}
                                    >
                                        <InstagramIcon fontSize="large" />
                                    </IconButton>
                                </motion.div>
                            </Grid>

                            {/* واتس‌اپ */}
                            <Grid>
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <IconButton
                                        component={Link}
                                        href="https://wa.me/989034260454"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        size="large"
                                        sx={{ bgcolor: '#25D366', color: 'white', '&:hover': { bgcolor: '#128C7E' } }}
                                    >
                                        <WhatsAppIcon fontSize="large" />
                                    </IconButton>
                                </motion.div>
                            </Grid>

                            {/* یوتیوب */}
                            <Grid>
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <IconButton
                                        component={Link}
                                        href="https://wa.me/989034260454"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        size="large"
                                        sx={{ bgcolor: '#FF0000', color: 'white', '&:hover': { bgcolor: '#CC0000' } }}
                                    >
                                        <YouTubeIcon fontSize="large" />
                                    </IconButton>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* اگر هنوز می‌خواهید نقشه را نگه دارید، کامنت را بردارید */}
                    {/* <iframe ... /> */}
                </Container>
            </Box>
        </>
    );
};

export default Banner;