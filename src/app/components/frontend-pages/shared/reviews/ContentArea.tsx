'use client';
import React from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';

const ContentArea = () => {
    return (
        <>

            <Typography
                variant="h4" lineHeight={1.4}
                mb={3} fontWeight={700}
                sx={{
                    fontSize: {
                        lg: '40px',
                        xs: '35px',
                    },
                    mr: {
                        xs: 0, lg: 4
                    }
                }}
            >
                Feedback from product teams I&apos;ve partnered with <Image src='/images/logos/logoIcon.svg' alt="logo" width={40} height={40} style={{ margin: '0 8px', verticalAlign: 'middle' }} />
            </Typography>
            <Typography variant="body1" lineHeight={1.8}>Leads, founders, and agencies rely on me to turn designs into performant React and Next.js experiences. Here is what a few of them shared.</Typography>

        </>
    );
};

export default ContentArea;
