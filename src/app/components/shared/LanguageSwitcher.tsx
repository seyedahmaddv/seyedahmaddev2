"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Menu,
  MenuItem,
  Button,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface LanguageOption {
  code: string;
  name: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fa", name: "فارسی", flag: "🇮🇷" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "ch", name: "中文", flag: "🇨🇳" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    // Set document direction for RTL languages
    if (languageCode === "fa" || languageCode === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = languageCode;
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = languageCode;
    }
    handleClose();
  };

  const currentLanguage = languages.find(
    (lang) => lang.code === i18n.language
  );

  return (
    <>
      <Button
        onClick={handleClick}
        sx={{
          textTransform: "none",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "text.primary",
          "&:hover": {
            backgroundColor: "action.hover",
          },
        }}
      >
        <span style={{ fontSize: "18px" }}>{currentLanguage?.flag}</span>
        <Typography variant="body2" sx={{ display: { xs: "none", sm: "inline" } }}>
          {currentLanguage?.name}
        </Typography>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            selected={i18n.language === language.code}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "20px" }}>{language.flag}</span>
            <Typography variant="body2">{language.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
