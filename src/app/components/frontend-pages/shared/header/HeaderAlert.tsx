"use client";
import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Link,
  Chip,
  Button,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IconX, IconBrandWhatsapp } from "@tabler/icons-react";

const NotificationBg = styled(Box)(() => ({
  position: "absolute",
  right: "20%",
  top: 0,
}));

const NotificationBg2 = styled(Box)(() => ({
  position: "absolute",
  right: 0,
  top: 0,
}));

const NotificationBg3 = styled(Box)(() => ({
  position: "absolute",
  left: 0,
  bottom: "-5px",
}));

const HeaderAlert = () => {
  // State to track if the div should be shown or hidden
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  // Function to toggle the visibility
  const handleAlert = () => {
    setIsAlertVisible(false);
  };

  // Sidebar
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  // WhatsApp link - Update this with your actual WhatsApp number
  const whatsappLink = "https://wa.me/989123456789?text=سلام%20من%20درباره%20داشبورد%20مدرن%20سوال%20دارم";

  return (
    <>
      {isAlertVisible ? (
        <Box
          bgcolor="primary.main"
          borderRadius={0}
          textAlign="center"
          py="11px"
          position="relative"
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing="16px"
            justifyContent="center"
            alignItems="center"
          >
            {lgUp ? (
              <Chip
                label="Security Advisory"
                size="small"
                icon={<Box sx={{ color: "#FF6B6B !important" }}>⚠️</Box>}
                sx={{
                  backgroundColor: "rgba(255, 107, 107, 0.2)",
                  color: "white",
                  borderRadius: "8px",
                  fontWeight: 600,
                }}
              />
            ) : null}

            <Typography
              variant="body1"
              color="white"
              fontWeight={500}
              sx={{
                opacity: "0.85",
              }}
              fontSize="13px"
            >
              🔒 Next.js Security Update Required: CVE-2025-66478 - Please upgrade to latest version
            </Typography>

            <Link
              href="https://www.linkedin.com/posts/seyedahmaddv_security-advisory-cve-2025-66478-activity-7403666520083451904-yDzY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB5obwQB2ou-vHQ0XDq1YpcEii5-V2YGrMM"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                color="secondary"
                size="small"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "12px",
                  px: "12px",
                  py: "6px",
                }}
              >
                Learn More
              </Button>
            </Link>

            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: "none" }}
            >
              <Button
                variant="outlined"
                startIcon={<IconBrandWhatsapp size={16} />}
                size="small"
                sx={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.3)",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "12px",
                  px: "12px",
                  py: "6px",
                }}
              >
                Contact via WhatsApp
              </Button>
            </Link>
          </Stack>

          <IconButton
            onClick={handleAlert}
            color="secondary"
            sx={{
              zIndex: 1,
              position: "absolute",
              right: "6px",
              top: "6px",
            }}
          >
            <IconX size={18} color="white" />
          </IconButton>

          <>
            {lgUp ? (
              <>
                <NotificationBg>
                  <Image
                    src="/images/frontend-pages/homepage/notification-top-right.png"
                    alt="img"
                    width={325}
                    height={30}
                  />
                </NotificationBg>
                <NotificationBg2>
                  <Image
                    src="/images/frontend-pages/homepage/notification-right.png"
                    alt="img"
                    width={200}
                    height={44}
                  />
                </NotificationBg2>
                <NotificationBg3>
                  <Image
                    src="/images/frontend-pages/homepage/notification-left.png"
                    alt="img"
                    width={325}
                    height={44}
                  />
                </NotificationBg3>
              </>
            ) : null}
          </>
        </Box>
      ) : null}
    </>
  );
};

export default HeaderAlert;
