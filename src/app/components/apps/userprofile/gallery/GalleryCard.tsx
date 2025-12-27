"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import BlankCard from "../../../../components/shared/BlankCard";
import { IconSearch } from "@tabler/icons-react";
import { format } from "date-fns";
import { portfolioItems } from "@/data/portfolioData"; // داده‌های ثابت
import FsLightbox from "fslightbox-react";
import MuiLink from "@mui/material/Link";
import NextLink from "next/link";

const GalleryCard = () => {
  const [search, setSearch] = useState("");
  const [toggler, setToggler] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const filteredItems = portfolioItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const openLightbox = (image: string) => {
    setCurrentImage(image);
    setToggler(!toggler);
  };

  return (
    <>
      {/* جستجو */}
      <Box mb={4}>
        <TextField
          placeholder="Search Projects..."
          size="medium"
          variant="outlined"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <IconSearch size="20" />
                </InputAdornment>
              ),
            },
          }}
          sx={{ maxWidth: 500 }}
        />
      </Box>

      {/* گالری */}
      <Grid container spacing={4}>
        {filteredItems.map((item) => (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={item.id}>
            <BlankCard className="hoverCard" sx={{ overflow: 'hidden' }}>
              <CardMedia
                component="img"
                height="300"
                image={item.cover}
                alt={item.name}
                onClick={() => openLightbox(item.cover)}
                sx={{
                  cursor: "pointer",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                  '&:hover': { transform: 'scale(1.08)' },
                }}
              />
              <Box p={3}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {format(new Date(item.time), "MMMM yyyy")}
                </Typography>
                <Typography color="text.secondary">
                  {item.link ? (
                    <MuiLink
                      component={NextLink}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      color="inherit"
                    >
                      {item.link}
                    </MuiLink>
                  ) : (
                    <span>{item.link}</span>
                  )}
                </Typography>
              </Box>
            </BlankCard>
          </Grid>
        ))}
      </Grid>

      {/* لایت‌باکس */}
      <FsLightbox
        toggler={toggler}
        sources={currentImage ? [currentImage] : []}
      />
    </>
  );
};

export default GalleryCard;