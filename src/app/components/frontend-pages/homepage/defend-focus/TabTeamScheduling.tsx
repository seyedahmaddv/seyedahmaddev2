"use client";
import * as React from "react";
import { Box, Divider, Typography, Grid, Button } from "@mui/material";

import { styled } from "@mui/material/styles";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";

const StyledAccordian = styled(Accordion)(() => ({
  boxShadow: "none",
  marginBottom: "0 !important",
  "&.Mui-expanded": {
    margin: "0",
  },
  "& .MuiAccordionSummary-root": {
    padding: 0,
    minHeight: "60px",
  },
  "& .MuiAccordionDetails-root": {
    padding: "0 0 20px",
  },
}));

const TabTeamScheduling = () => {
  const [expanded, setExpanded] = useState(true);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

  const handleChange2 = () => {
    setExpanded(!expanded);
  };

  const handleChange3 = () => {
    setExpanded2(!expanded2);
  };

  const handleChange4 = () => {
    setExpanded3(!expanded3);
  };

  return (
    <Grid container spacing={{ xs: 3, lg: 8 }}>
      <Grid
        size={{
          xs: 12,
          lg: 6
        }}>
        <Image
          src="/images/frontend-pages/homepage/accordian1.jpg"
          width={500}
          height={500}
          style={{
            width: "100%",
            height: "auto",
          }}
          alt="img"
        />
      </Grid>
      <Grid
        size={{
          xs: 12,
          lg: 6
        }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              lg: "40px",
              xs: "35px",
            },
          }}
          fontWeight="700"
          mt={5}
        >
          Discovery & architecture planning
        </Typography>
        <Box mt={4}>
          <StyledAccordian expanded={expanded2} onChange={handleChange3}>
            <AccordionSummary
              expandIcon={
                expanded2 ? (
                  <IconMinus size="21" stroke="1.5" />
                ) : (
                  <IconPlus size="21" stroke="1.5" />
                )
              }
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography fontSize="17px" fontWeight="600">
                Audit the current experience
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Review Lighthouse, Core Web Vitals, accessibility, and code structure to surface the quickest wins.
              </Typography>
            </AccordionDetails>
          </StyledAccordian>
          <Divider />
          <StyledAccordian expanded={expanded} onChange={handleChange2}>
            <AccordionSummary
              expandIcon={
                expanded ? (
                  <IconMinus size="21" stroke="1.5" />
                ) : (
                  <IconPlus size="21" stroke="1.5" />
                )
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography fontSize="17px" fontWeight="600">
                Define measurable goals
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Align on conversion targets, engagement KPIs, or internal tooling gains so we can design toward outcomes.
              </Typography>
            </AccordionDetails>
          </StyledAccordian>
          <Divider />
          <StyledAccordian expanded={expanded3} onChange={handleChange4}>
            <AccordionSummary
              expandIcon={
                expanded3 ? (
                  <IconMinus size="21" stroke="1.5" />
                ) : (
                  <IconPlus size="21" stroke="1.5" />
                )
              }
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography fontSize="17px" fontWeight="600">
                Plan phased delivery
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Break features into remote-friendly sprints, mapping owners, dependencies, and review cadences.
              </Typography>
            </AccordionDetails>
          </StyledAccordian>
          <Divider />
          <Box mt={3}>
            <Button variant="contained" color="primary" size="large">
              See discovery playbook
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default TabTeamScheduling;
