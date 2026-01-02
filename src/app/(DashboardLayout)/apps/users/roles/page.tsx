"use client";
import React, { useEffect, useState } from 'react';
import RequireRole from '@/app/components/auth/RequireRole';
import { supabase } from '@/utils/supabase/client';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Select, MenuItem, Button, Alert, CircularProgress } from '@mui/material';

const RolesPage: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const token = (sessionData as any)?.session?.access_token;
      const res = await fetch('/api/admin/users', { headers: token ? { Authorization: `Bearer ${token}` } : {} });
      const json = await res.json();
      if (!res.ok) {
        setMessage({ type: 'error', text: json.error || 'Failed to fetch users' });
      } else {
        setUsers(json.users || []);
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: 'error', text: 'Failed to fetch users' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  const setRole = async (userId: string, role: string) => {
    setSaving(userId);
    setMessage(null);
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const token = (sessionData as any)?.session?.access_token;
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: Object.assign({ 'Content-Type': 'application/json' }, token ? { Authorization: `Bearer ${token}` } : {}),
        body: JSON.stringify({ userId, role }),
      });
      const json = await res.json();
      if (!res.ok) {
        setMessage({ type: 'error', text: json.error || 'Failed to set role' });
      } else {
        setMessage({ type: 'success', text: 'Role updated' });
        fetchUsers();
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: 'error', text: 'Failed to set role' });
    } finally { setSaving(null); }
  };

  return (
    <RequireRole roles={["admin"]}>
      <Box>
        <Typography variant="h4" gutterBottom>Role Management</Typography>
        {message && <Alert severity={message.type} sx={{ mb: 2 }}>{message.text}</Alert>}
        {loading ? <CircularProgress /> : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((u) => (
                <TableRow key={u.id}>
                  <TableCell>{u.email}</TableCell>
                  <TableCell>{u.username || u.full_name || '-'}</TableCell>
                  <TableCell>
                    <Select value={u.role || 'subscriber'} onChange={(e) => setRole(u.id, e.target.value as string)}>
                      <MenuItem value="admin">admin</MenuItem>
                      <MenuItem value="author">author</MenuItem>
                      <MenuItem value="editor">editor</MenuItem>
                      <MenuItem value="subscriber">subscriber</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Button size="small" variant="outlined" disabled={saving === u.id} onClick={() => setRole(u.id, u.role || 'subscriber')}>Save</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Box>
    </RequireRole>
  );
};

export default RolesPage;
