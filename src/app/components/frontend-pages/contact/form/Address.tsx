'use client';
import React from "react";
import { Box, Typography, Container, Grid, MenuItem, Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";

const ShapeBg = styled(Box)(() => ({
    position: 'absolute',
    right: 0,
    top: 0
}));

const Address = () => {

    return (
        <Box bgcolor="primary.main" borderRadius="12px" position="relative">
            <ShapeBg>
                <Image src='/images/frontend-pages/contact/shape1.png' alt="img" width={200} height={250} />
            </ShapeBg>
            <Box p="30px" zIndex={1}>
                {/* <Typography fontSize="20px" fontWeight={700} color="white" mb={2}>Reach Out Today</Typography>
                <Typography variant="body1" color="white" lineHeight={1.6}>Have questions or need assistance? We&apos;re just a message away.</Typography> */}
                
                <Typography fontSize="20px" fontWeight={700} color="white" mb={2}>Get in Touch Quickly</Typography>
                <Typography variant="body1" color="white" lineHeight={1.6}>
                  Have a project in mind or need help with your frontend?<br />
                  I'm ready to discuss your needs and provide a tailored plan.
                </Typography>

                <Divider sx={{ opacity: 0.3, my: "40px" }} />

                <Typography fontSize="20px" fontWeight={700} color="white" mb={2}>
                    Get in Touch Quickly
                </Typography>
                <Typography variant="body1" color="white" lineHeight={1.6}>
                    Have a project in mind or need help with your frontend?<br />
                  I'm ready to discuss your needs and provide a tailored plan.
                    <Typography variant="body2">
                    <strong>Email:</strong>{" "}
                    <Link href="mailto:seyedahmaddev@gmail.com" target="_blank" color="white">
                      seyedahmaddev@gmail.com
                    </Link>
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    <strong>LinkedIn:</strong>{" "}
                    <Link href="https://linkedin.com/in/seyedahmaddv" target="_blank" color="white">
                      linkedin.com/in/seyedahmaddv
                    </Link>
                  </Typography>
                </Typography>

            </Box>
        </Box>
    );
};

export default Address;
