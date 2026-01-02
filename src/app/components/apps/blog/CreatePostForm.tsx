"use client";
import React, { useState } from 'react';
import { Card, CardContent, Grid, TextField, Button, Alert, MenuItem, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  RichTextEditorProvider,
  RichTextField,
  MenuControlsContainer,
  MenuSelectHeading,
  MenuDivider,
  MenuButtonBold,
  MenuButtonItalic,
  MenuButtonStrikethrough,
  MenuButtonOrderedList,
  MenuButtonBulletedList,
  MenuButtonBlockquote,
  MenuButtonCode,
  MenuButtonHorizontalRule,
  MenuButtonUndo,
  MenuButtonRedo,
  MenuButtonRemoveFormatting,
} from 'mui-tiptap';
import { supabase } from '@/utils/supabase/client';

const CreatePostForm: React.FC = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState('General');
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const editor = useEditor({ extensions: [StarterKit], content: '' });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setCoverFile(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    if (!title || !editor) return setMessage({ type: 'error', text: 'Title and content required' });

    setLoading(true);
    try {
      const content = editor.getHTML();
      const formData = new FormData();
      formData.append('title', title);
      formData.append('slug', slug);
      formData.append('excerpt', excerpt);
      formData.append('category', category);
      formData.append('content', content);
      formData.append('published', 'false');
      if (coverFile) formData.append('cover', coverFile);

      const { data: sessionData } = await supabase.auth.getSession();
      const token = (sessionData as any)?.session?.access_token;

      const res = await fetch('/api/dashboard/blog', {
        method: 'POST',
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        body: formData,
      });

      const result = await res.json();
      if (!res.ok) {
        console.error('server error', result);
        setMessage({ type: 'error', text: result.error || 'Failed to create post' });
      } else {
        setMessage({ type: 'success', text: 'Post created (draft). Redirecting...' });
        setTimeout(() => router.push('/apps/blog/post'), 900);
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: 'error', text: 'Unexpected error during create' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card variant="outlined">
      <CardContent>
        {message && <Alert severity={message.type} sx={{ mb: 2 }}>{message.text}</Alert>}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid  size={{xs:12}}>
              <TextField fullWidth label="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </Grid>
            <Grid  size={{xs:12, sm:6}}>
              <TextField fullWidth label="Slug (optional)" value={slug} onChange={(e) => setSlug(e.target.value)} />
            </Grid>
            <Grid  size={{xs:12, sm:6}}>
              <TextField select fullWidth label="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <MenuItem value="General">General</MenuItem>
                <MenuItem value="Tech">Tech</MenuItem>
                <MenuItem value="News">News</MenuItem>
              </TextField>
            </Grid>
            <Grid  size={{xs:12}}>
              <TextField fullWidth multiline rows={3} label="Excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
            </Grid>

            <Grid  size={{xs:12}}>
              <RichTextEditorProvider editor={editor}>
                <RichTextField
                  controls={<MenuControlsContainer>
                    <MenuSelectHeading />
                    <MenuDivider />
                    <MenuButtonBold />
                    <MenuButtonItalic />
                    <MenuButtonStrikethrough />
                    <MenuDivider />
                    <MenuButtonOrderedList />
                    <MenuButtonBulletedList />
                    <MenuDivider />
                    <MenuButtonBlockquote />
                    <MenuButtonCode />
                    <MenuButtonHorizontalRule />
                    <MenuDivider />
                    <MenuButtonUndo />
                    <MenuButtonRedo />
                    <MenuDivider />
                    <MenuButtonRemoveFormatting />
                  </MenuControlsContainer>}
                />
              </RichTextEditorProvider>
            </Grid>

            <Grid  size={{xs:12}}>
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </Grid>

            <Grid  size={{xs:12}}>
              <Button type="submit" variant="contained" disabled={loading}>
                {loading ? <CircularProgress size={20} /> : 'Create Post'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreatePostForm;
