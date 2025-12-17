'use client';
import React from 'react';
import Container from '@mui/material/Container';
import { Grid, Box } from '@mui/material';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import NewsletterSubscriber from '@/app/components/shared/NewsletterSubscriber';

const Footer = () => {
  return (
    (<Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center" mt={4}>
        {/* Newsletter Section */}
        <Grid
          textAlign="center"
          size={{
            xs: 12,
            sm: 5,
            lg: 4
          }}>
          <Box mb={4}>
            <NewsletterSubscriber />
          </Box>
        </Grid>

        {/* Footer Info */}
        <Grid
          textAlign="center"
          size={{
            xs: 12,
            sm: 5,
            lg: 4
          }}>
          <Image src="/images/logos/logoIcon.svg" alt="icon" width={50} height={50} />
          <Typography fontSize="16" color="textSecondary" mt={1} mb={4}>
            All rights reserved by Modernize. Designed & Developed by
            <Link target="_blank" href="https://seyedahmaddev.ir/">
              <Typography color="textSecondary" component="span" display="inline">
                {' '}
                Seyed Ahmad
              </Typography>{' '}
            </Link>
            .
          </Typography>
        </Grid>
      </Grid>
    </Container>)
  );
};

export default Footer;
