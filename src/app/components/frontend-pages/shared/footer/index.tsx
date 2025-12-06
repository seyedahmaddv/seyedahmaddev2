"use client";
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Divider,
  Stack,
  Tooltip,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

// آیکون‌های MUI برای پلتفرم‌های حرفه‌ای
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import ArticleIcon from '@mui/icons-material/Article';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import DescriptionIcon from '@mui/icons-material/Description';

// لینک‌های حرفه‌ای شما - ساختار به‌روزشده
const professionalLinks = [
  {
    id: 1,
    children: [
      {
        title: true,
        titleText: 'My Works',
      },
      {
        title: false,
        titleText: 'GitHub Projects',
        link: 'https://github.com/seyedahmad',
        icon: <GitHubIcon fontSize="small" sx={{ mr: 1 }} />,
      },
      {
        title: false,
        titleText: 'Portfolio Website',
        link: 'https://seyedahmaddev.ir',
        icon: <LanguageIcon fontSize="small" sx={{ mr: 1 }} />,
      },
      {
        title: false,
        titleText: 'Live Projects',
        link: 'https://seyedahmaddev.ir/projects',
        icon: <CodeIcon fontSize="small" sx={{ mr: 1 }} />,
      },
      {
        title: false,
        titleText: 'Technical Articles',
        link: 'https://dev.to/seyedahmaddv',
        icon: <ArticleIcon fontSize="small" sx={{ mr: 1 }} />,
      },
    ],
  },
  {
    id: 2,
    children: [
      {
        title: true,
        titleText: 'Professional Profile',
      },
      {
        title: false,
        titleText: 'LinkedIn Resume',
        link: 'https://linkedin.com/in/seyedahmaddv',
        icon: <LinkedInIcon fontSize="small" sx={{ mr: 1 }} />,
      },
      {
        title: false,
        titleText: 'Technical Writing',
        link: 'https://virgool.io/@seyedahmaddv',
        icon: <DescriptionIcon fontSize="small" sx={{ mr: 1 }} />,
      },
      {
        title: false,
        titleText: 'Stack Overflow',
        link: 'https://stackoverflow.com/users/...', // لینک خودت رو اضافه کن
        icon: <CodeIcon fontSize="small" sx={{ mr: 1 }} />,
      },
      {
        title: false,
        titleText: 'Medium Publications',
        link: 'https://medium.com/@seyedahmaddv', // لینک خودت رو اضافه کن
        icon: <ArticleIcon fontSize="small" sx={{ mr: 1 }} />,
      },
    ],
  },
  {
    id: 3,
    children: [
      {
        title: true,
        titleText: 'Contact & Connect',
      },
      {
        title: false,
        titleText: 'Direct Message',
        link: 'https://t.me/seyedahmaddv',
        icon: <TelegramIcon fontSize="small" sx={{ mr: 1 }} />,
      },
      {
        title: false,
        titleText: 'Email Contact',
        link: 'mailto:your-email@example.com', // ایمیل خودت رو اضافه کن
        icon: <DescriptionIcon fontSize="small" sx={{ mr: 1 }} />,
      },
      {
        title: false,
        titleText: 'Twitter/X Profile',
        link: 'https://twitter.com/seyedahmaddv', // لینک خودت رو اضافه کن
        icon: <GitHubIcon fontSize="small" sx={{ mr: 1 }} />,
      },
      {
        title: false,
        titleText: 'YouTube Channel',
        link: 'https://youtube.com/@CodeRoof', // لینک خودت رو اضافه کن
        icon: <LanguageIcon fontSize="small" sx={{ mr: 1 }} />,
      },
    ],
  },
];

// پلتفرم‌های اجتماعی برای بخش Follow Us
const socialPlatforms = [
  {
    name: "GitHub",
    icon: <GitHubIcon sx={{ fontSize: '24px' }} />,
    link: "https://github.com/seyedahmad",
    color: "#333",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon sx={{ fontSize: '24px' }} />,
    link: "https://linkedin.com/in/seyedahmaddv",
    color: "#0077B5",
  },
  {
    name: "Telegram",
    icon: <TelegramIcon sx={{ fontSize: '24px' }} />,
    link: "https://t.me/seyedahmaddv",
    color: "#0088cc",
  },
  {
    name: "Dev.to",
    icon: <CodeIcon sx={{ fontSize: '24px' }} />,
    link: "https://dev.to/seyedahmaddv",
    color: "#0a0a0a",
  },
];

const Footer = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          pt: {
            xs: "30px",
            lg: "60px",
          },
        }}
      >
        <Grid container spacing={3} justifyContent="space-between" mb={7}>
          {professionalLinks.map((section, i) => (
            <Grid
              key={i}
              size={{
                xs: 6,
                sm: 4,
                lg: 3
              }}>
              {section.children.map((item, index) => (
                <React.Fragment key={index}>
                  {item.title ? (
                    <Typography fontSize="17px" fontWeight="600" mb="22px" color="primary.main">
                      {item.titleText}
                    </Typography>
                  ) : (
                    <Link 
                      href={`${item.link}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "10px 0",
                          fontSize: "15px",
                          color: (theme) => theme.palette.text.primary,
                          "&:hover": {
                            color: (theme) => theme.palette.primary.main,
                            transform: "translateX(5px)",
                            transition: "all 0.2s ease",
                          },
                        }}
                      >
                        {item.icon}
                        <Typography component="span">
                          {item.titleText}
                        </Typography>
                      </Box>
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </Grid>
          ))}
          
          <Grid
            size={{
              xs: 12,
              sm: 12,
              lg: 3
            }}
            sx={{ mt: { xs: 3, lg: 0 } }}
          >
            <Typography fontSize="17px" fontWeight="600" mb="22px" color="primary.main">
              Connect With Me
            </Typography>

            <Stack direction="row" gap="15px" flexWrap="wrap">
              {socialPlatforms.map((platform, index) => (
                <Tooltip key={index} title={platform.name}>
                  <IconButton
                    component={Link}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-3px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {platform.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
            
            <Typography variant="body2" sx={{ mt: 3, opacity: 0.8 }}>
              Developer & Technical Writer
              <br />
              Open to collaborations and tech discussions
            </Typography>
          </Grid>
        </Grid>

        <Divider />

        <Box
          py="40px"
          flexWrap="wrap"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" gap={1} alignItems="center">
            <Image
              src="/images/logos/logoIcon.svg"
              width={24}
              height={24}
              alt="logo"
            />
            <Typography variant="body1" fontSize="15px">
              © {new Date().getFullYear()} SeyedAhmad. All rights reserved.
            </Typography>
          </Stack>
          <Typography variant="body1" fontSize="15px">
            Crafted with passion by{" "}
            <Typography 
              component={Link} 
              color="primary.main" 
              href="https://linkedin.com/in/seyedahmaddv"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
            >
              Seyed Ahmad
            </Typography>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Footer;