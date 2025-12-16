'use client';
import * as React from 'react';
import { Box, Divider, Typography, Grid, Button } from '@mui/material';

import { styled } from "@mui/material/styles";
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useState } from 'react';


const StyledAccordian = styled(Accordion)(() => ({
    boxShadow: 'none',
    marginBottom: '0 !important',
    '&.Mui-expanded': {
        margin: '0'
    },
    '& .MuiAccordionSummary-root': {
        padding: 0,
        minHeight: '60px'
    },
    '& .MuiAccordionDetails-root': {
        padding: '0 0 20px'
    }
}));


const TabEmbedding = () => {

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
        <Grid container spacing={{xs: 3, lg: 8}}>
            <Grid
                size={{
                    xs: 12,
                    lg: 6
                }}>
                <Image src="/images/frontend-pages/homepage/accordian1.webp" width={500} height={500} style={{
                    width: '100%', height: 'auto'
                }} alt="img" />
            </Grid>
            <Grid
                size={{
                    xs: 12,
                    lg: 6
                }}>
                <Typography variant='h4' sx={{
                    fontSize: {
                        lg: '40px',
                        xs: '35px'
                    },
                    lineHeight: "1.6",
                }} fontWeight="700" mt={5}>Design systems & accessibility </Typography>
                <Box mt={4}>
                    <StyledAccordian expanded={expanded3} onChange={handleChange4}>
                        <AccordionSummary
                            expandIcon={expanded3 ? <IconMinus size="21" stroke="1.5" /> : <IconPlus size="21" stroke="1.5" />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography fontSize="17px" fontWeight="600">Design tokens & component libraries</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Build scalable UI kits in MUI, Shadcn/UI, or Radix with consistent spacing, color, and motion tokens.
                            </Typography>
                        </AccordionDetails>
                    </StyledAccordian>
                    <Divider />
                    <StyledAccordian expanded={expanded} onChange={handleChange2}>
                        <AccordionSummary
                            expandIcon={expanded ? <IconMinus size="21" stroke="1.5" /> : <IconPlus size="21" stroke="1.5" />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography fontSize="17px" fontWeight="600">Reusable interaction patterns</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Translate Figma prototypes into production-ready components, tabs, dialogs, and charts.
                            </Typography>
                        </AccordionDetails>
                    </StyledAccordian>
                    <Divider />
                    <StyledAccordian expanded={expanded2} onChange={handleChange3}>
                        <AccordionSummary
                            expandIcon={expanded2 ? <IconMinus size="21" stroke="1.5" /> : <IconPlus size="21" stroke="1.5" />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography fontSize="17px" fontWeight="600">Accessibility & localization</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Ship WCAG-compliant semantics, keyboard support, RTL layouts, and multi-language experiences.
                            </Typography>
                        </AccordionDetails>
                    </StyledAccordian>
                    <Divider />

                    <Box mt={3}>
                        <Button variant='contained' color="primary" size="large">Preview design system</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};
export default TabEmbedding;
