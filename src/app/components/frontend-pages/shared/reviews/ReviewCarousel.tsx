"use client";
import React, { useState, useRef } from "react";
import {
  Avatar,
  CardContent,
  Divider,
  Stack,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      className={className}
      sx={{
        cursor: "pointer",
        position: "absolute",
        left: "125px",
        zIndex: 1,
        bottom: "45px",
        right: 0,
        backgroundColor: (theme) => theme.palette.grey[100],
        width: "32px",
        height: "32px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <IconChevronRight strokeWidth={1.5} size={20} />
    </Box>
  );
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      className={className}
      sx={{
        cursor: "pointer",
        position: "absolute",
        left: "48px",
        zIndex: 1,
        bottom: "45px",
        right: "60px",
        backgroundColor: (theme) => theme.palette.grey[100],
        width: "32px",
        height: "32px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <IconChevronLeft strokeWidth={1.5} size={20} />
    </Box>
  );
}

const Reviews = [
  {
    id: 1,
    img: "/images/profile/user-1.jpg",
    name: "Sara Jalili · Product Lead, Doosteweb",
    text: "Seyed Ahmad rebuilt our front-end stack on Next.js, improved Core Web Vitals, and made collaborating with design incredibly fast.",
  },
  {
    id: 2,
    img: "/images/profile/user-2.jpg",
    name: "Hamid Reza · Marketplace Founder",
    text: "He shipped the multi-vendor marketplace MVP end-to-end, wiring custom dashboards, search, and payment flows without missing a deadline.",
  },
  {
    id: 3,
    img: "/images/profile/user-3.jpg",
    name: "Laila Mansouri · E-learning Ops",
    text: "Our LearnDash rollout needed heavy customization—he handled API work, accessibility, and deployment to Vercel flawlessly.",
  },
  {
    id: 4,
    img: "/images/profile/user-4.jpg",
    name: "Ozan Demir · Marketing Lead",
    text: "Content updates, localization, and SEO fixes now take hours instead of days thanks to the CMS workflows he put in place.",
  },
  {
    id: 5,
    img: "/images/profile/user-5.jpg",
    name: "Global Agency Partner",
    text: "We trust Seyed Ahmad with critical front-end sprints—he communicates clearly, documents rigorously, and always hits Lighthouse targets.",
  },
];

const ReviewCarousel = () => {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(1);
  const [activeSlide2, setActiveSlide2] = useState(1);

  let sliderRef = useRef<Slider | null>(null); 

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current: any, next: any) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current: any) => setActiveSlide2(current),
  };

  return (
    <>
      <Slider
        ref={(slider: Slider | null) => {
          sliderRef.current = slider;
        }}
        {...settings}
      >
        {Reviews.map((review, i) => (
          <div key={i}>
            <Paper variant="outlined" sx={{ borderRadius: "16px" }}>
              <CardContent sx={{ p: "48px !important" }}>
                <Typography
                  variant="h4"
                  lineHeight={1.4}
                  mb={3}
                  fontWeight={600}
                  fontSize="24px"
                >
                  Partner stories
                </Typography>
                <Stack direction="row" alignItems="center" gap={3} mb={3}>
                  <Avatar src={review.img} alt="user" />
                  <Typography variant="body1" fontWeight={600}>
                    {review.name}
                  </Typography>
                </Stack>
                <Typography variant="body1" lineHeight={1.8} mb={2}>
                  {review.text}
                </Typography>
                <Divider />

                <Typography fontSize="14px" fontWeight={500} ml={5} mt={3}>
                  {" "}
                  {activeSlide} / {Reviews.length}
                </Typography>
              </CardContent>
            </Paper>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ReviewCarousel;
