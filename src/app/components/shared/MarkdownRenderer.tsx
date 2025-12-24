"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import CodeBlock from "./CodeBlock";
import {
  Typography,
  Box,
  Divider,
  Link as MuiLink,
} from "@mui/material";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <Box
      sx={{
        lineHeight: 1.8,
        "& h1": { fontSize: "2.5rem", my: 4 },
        "& h2": { fontSize: "2.1rem", my: 3 },
        "& h3": { fontSize: "1.8rem", my: 2.5 },
        "& h4": { fontSize: "1.6rem", my: 2 },
        "& p": { fontSize: "1.15rem", mb: 2.5 },
        "& ul, & ol": { pl: 4, mb: 2.5 },
        "& li": { mb: 1.5 },
        "& blockquote": {
          borderLeft: "5px solid",
          borderColor: "primary.main",
          pl: 3,
          py: 1,
          my: 3,
          fontStyle: "italic",
          color: "text.secondary",
        },
        "& code": {
          background: "rgba(93, 135, 255, 0.15)",
          px: 0.5,
          borderRadius: 1,
        },
        "& pre": {
          background: "#1e1e1e",
          p: 3,
          borderRadius: 2,
          overflowX: "auto",
          my: 3,
        },
        "& a": {
          color: "primary.main",
          textDecoration: "underline",
        },
        "& img": {
          maxWidth: "100%",
          borderRadius: 2,
          my: 4,
        },
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => <Typography variant="h1" gutterBottom>{children}</Typography>,
          h2: ({ children }) => <Typography variant="h2" gutterBottom>{children}</Typography>,
          h3: ({ children }) => <Typography variant="h3" gutterBottom>{children}</Typography>,
          h4: ({ children }) => <Typography variant="h4" gutterBottom>{children}</Typography>,
          p: ({ children }) => <Typography variant="body1" paragraph>{children}</Typography>,
          li: ({ children }) => (
            <li>
              <Typography component="span">{children}</Typography>
            </li>
          ),
          a: ({ href, children }) => (
            <MuiLink href={href} target="_blank" rel="noopener">
              {children}
            </MuiLink>
          ),
          blockquote: ({ children }) => (
            <Box component="blockquote" sx={{ my: 3, pl: 3, borderLeft: "5px solid", borderColor: "primary.main" }}>
              <Typography variant="body1" fontStyle="italic" color="text.secondary">
                {children}
              </Typography>
            </Box>
          ),
          
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
};

export default MarkdownRenderer;