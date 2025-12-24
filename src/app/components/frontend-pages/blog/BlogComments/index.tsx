"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Stack,
  Typography,
  Card,
  CardContent,
  Alert,
  Avatar,
  Grid,
  CircularProgress,
} from "@mui/material";
import { supabase } from "@/utils/supabase/client";

interface Comment {
  id: string;
  author_name: string;
  author_email: string;
  content: string;
  created_at: string;
}

interface BlogCommentsProps {
  postSlug: string;
}

const BlogComments: React.FC<BlogCommentsProps> = ({ postSlug }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const [newComment, setNewComment] = useState({
    author_name: "",
    author_email: "",
    content: "",
  });

  // Load comments
  useEffect(() => {
    fetchComments();
  }, [postSlug]);

  const fetchComments = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('blog_comments')
      .select('id, author_name, content, created_at')
      .eq('post_slug', postSlug)
      .eq('approved', true)  // Only approved comments
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Error fetching comments:", error);
      setComments([]);
    } else {
      setComments((data as Comment[]) || []);
    }
    setLoading(false);
  };

  // Submit new comment
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.author_name || !newComment.author_email || !newComment.content) return;

    setSubmitting(true);
    setMessage(null);

    const { error } = await supabase.from('blog_comments').insert({
      post_slug: postSlug,
      author_name: newComment.author_name,
      author_email: newComment.author_email,
      content: newComment.content,
      approved: false,  // Pending moderation – approve manually later
    });

    if (error) {
      setMessage({ type: "error", text: "Error submitting comment. Please try again." });
      console.error(error);
    } else {
      setMessage({
        type: "success",
        text: "Your comment has been submitted successfully and will appear after review.",
      });
      setNewComment({ author_name: "", author_email: "", content: "" });
      // No refresh needed as approved=false, so it won't show yet
    }

    setSubmitting(false);
  };

  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" fontWeight={600} mb={4}>
        Comments ({comments.length})
      </Typography>

      {/* Comments List */}
      {loading ? (
        <CircularProgress />
      ) : comments.length === 0 ? (
        <Typography color="text.secondary" mb={4}>
          No comments yet for this post. Be the first to comment!
        </Typography>
      ) : (
        <Stack spacing={3} mb={6}>
          {comments.map((comment) => (
            <Card key={comment.id} variant="outlined">
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 2, md: 1 }}>
                    <Avatar>{comment.author_name[0]?.toUpperCase()}</Avatar>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 10, md: 11 }}>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {comment.author_name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {new Date(comment.created_at).toLocaleDateString("en-US")}
                    </Typography>
                    <Typography variant="body1" mt={1} sx={{ whiteSpace: "pre-wrap" }}>
                      {comment.content}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}

      {/* Comment Form */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" fontWeight={600} mb={3}>
            Write your comment
          </Typography>

          {message && (
            <Alert severity={message.type} onClose={() => setMessage(null)} sx={{ mb: 3 }}>
              {message.text}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Your Name"
                  value={newComment.author_name}
                  onChange={(e) => setNewComment({ ...newComment, author_name: e.target.value })}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  type="email"
                  label="Your Email (will not be published)"
                  value={newComment.author_email}
                  onChange={(e) => setNewComment({ ...newComment, author_email: e.target.value })}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  label="Your Comment"
                  value={newComment.content}
                  onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BlogComments;