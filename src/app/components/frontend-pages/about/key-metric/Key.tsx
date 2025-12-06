'use client';
import React from "react";
import { Grid, Typography } from "@mui/material";

const keys = [
    {
        text: 'Started Coding',
        title: '2015',
        subtext: 'The year I wrote my first line of code and began this journey',
    },
    {
        text: 'Growth Rate',
        title: '400%+',
        subtext: 'Year-over-year increase in project complexity and impact',
    },
    {
        text: 'Community Reach',
        title: '50K+',
        isMargin: true,
        subtext: 'Developers and professionals reached through tutorials and open-source work',
    },
    {
        text: 'Projects Delivered',
        title: '200+',
        isMargin: true,
        subtext: 'Successful projects, components, and solutions built and deployed',
    },
]

const Key = () => {

    return (
        (<Grid container spacing={2}>
            {keys.map((key, i) => (
                <Grid
                    key={i}
                    sx={{
                        marginTop: {
                            lg: key.isMargin ? '32px' : 0
                        }
                    }}
                    size={{
                        xs: 6,
                        sm: 6
                    }}>
                    <Typography color="primary.main" textTransform="uppercase" fontSize="13px">{key.text}</Typography>
                    <Typography variant="h4" sx={{
                        fontSize: {
                            xs: '34px', sm: '48px'
                        }
                    }} my={1} lineHeight={1} fontWeight={700} >{key.title}</Typography>
                    <Typography variant="body1">{key.subtext}</Typography>
                </Grid>
            ))}
        </Grid>)
    );
};

export default Key;
