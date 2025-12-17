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
} from "@mui/material";

interface Comment {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
}

interface CommentsProps {
  postId: string;
}

const BlogComments: React.FC<CommentsProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState({
    author_name: "",
    author_email: "",
    content: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/comments?post_id=${postId}`);
      const data = await response.json();

      if (data.success) {
        setComments(data.data);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          post_id: postId,
          ...newComment,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({
          type: "success",
          text: "✅ نظر شما برای بررسی ارسال شد",
        });
        setNewComment({ author_name: "", author_email: "", content: "" });
      } else {
        setMessage({
          type: "error",
          text: data.error || "خطا در ارسال نظر",
        });
      }
    } catch (error: any) {
      setMessage({
        type: "error",
        text: "خطا در اتصال به سرور",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        نظرات ({comments.length})
      </Typography>

      {/* Comments List */}
      <Stack spacing={2} mb={4}>
        {loading ? (
          <Typography>در حال بارگذاری نظرات...</Typography>
        ) : comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item={true} xs={12} sm="auto">
                    <Avatar>{comment.author_name.charAt(0)}</Avatar>
                  </Grid>
                  <Grid item xs={12} sm>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {comment.author_name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {new Date(comment.created_at).toLocaleDateString("fa-IR")}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {comment.content}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography color="text.secondary">هنوز نظری نیست</Typography>
        )}
      </Stack>

      {/* Add Comment Form */}
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight={600} mb={2}>
            نظر خود را بنویسید
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="نام"
                value={newComment.author_name}
                onChange={(e) =>
                  setNewComment({ ...newComment, author_name: e.target.value })
                }
                required
                size="small"
              />
              <TextField
                fullWidth
                type="email"
                label="ایمیل"
                value={newComment.author_email}
                onChange={(e) =>
                  setNewComment({
                    ...newComment,
                    author_email: e.target.value,
                  })
                }
                required
                size="small"
              />
              <TextField
                fullWidth
                multiline
                rows={4}
                label="نظر"
                value={newComment.content}
                onChange={(e) =>
                  setNewComment({ ...newComment, content: e.target.value })
                }
                required
              />

              <Button
                type="submit"
                variant="contained"
                disabled={
                  submitting ||
                  !newComment.author_name ||
                  !newComment.author_email ||
                  !newComment.content
                }
              >
                {submitting ? "در حال ارسال..." : "ارسال نظر"}
              </Button>

              {message && (
                <Alert
                  severity={message.type}
                  onClose={() => setMessage(null)}
                >
                  {message.text}
                </Alert>
              )}
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BlogComments;
