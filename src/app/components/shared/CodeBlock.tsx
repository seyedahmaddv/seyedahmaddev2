"use client";

import React, { useState } from "react";
import { IconButton, Tooltip, Box, Typography } from "@mui/material";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
interface CodeBlockProps {
  children: React.ReactNode;
  codeString: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, codeString, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <Box sx={{ position: "relative", my: 3 }}>
      <Tooltip title={copied ? "Copied!" : "Copy code"}>
        <IconButton
          onClick={handleCopy}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 10,
            bgcolor: "background.paper",
            "&:hover": { bgcolor: "action.hover" },
          }}
        >
          {copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
        </IconButton>
      </Tooltip>

      <Box
        component="pre"
        sx={{
          m: 0,
          p: 3,
          bgcolor: "#1e1e1e",
          borderRadius: 2,
          overflowX: "auto",
        }}
      >
        <code style={{ color: "#e6e6e6" }}>{children}</code>
      </Box>

      {language && (
        <Typography variant="caption" sx={{ position: "absolute", top: 8, left: 16, color: "text.secondary" }}>
          {language}
        </Typography>
      )}
    </Box>
  );
};

export default CodeBlock;