"use client";
import React from 'react';
import { useAuth } from '@/app/context/AuthContext';
import { Alert, CircularProgress, Box } from '@mui/material';

const RequireRole: React.FC<{ roles: string[]; children: React.ReactNode }> = ({ roles, children }) => {
  const { role, loading } = useAuth();

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}><CircularProgress /></Box>;

  if (!role || !roles.includes(role)) {
    return <Alert severity="error">Access denied. You don&apos;t have permission to view this page.</Alert>;
  }

  return <>{children}</>;
};

export default RequireRole;
