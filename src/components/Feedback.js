import React, { useState, useEffect } from 'react';
import { Button, TextField, List, ListItem, ListItemText, IconButton, Typography, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReplyIcon from '@mui/icons-material/Reply';
import { formatDistanceToNow } from 'date-fns';
import feedbackImage from './Assets/feedback.gif';
import bg2 from './Assets/bg2.jpg';

const CommentSection = () => {
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem('comments');
    return savedComments ? JSON.parse(savedComments) : [];
  });
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = {
      id: Date.now(),
      text: newComment,
      name: name || 'Anonymous',
      email: email,
      date: new Date(),
      upvotes: 0,
      downvotes: 0,
      replies: [],
    };
    setComments([...comments, comment]);
    setNewComment('');
    setName('');
    setEmail('');
  };

  const handleDelete = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  const handleEdit = (id, newText) => {
    setComments(comments.map(comment => 
      comment.id === id ? { ...comment, text: newText } : comment
    ));
  };

  const handleVote = (id, type) => {
    setComments(comments.map(comment => {
      if (comment.id === id) {
        if (type === 'upvote') {
          return { ...comment, upvotes: comment.upvotes + 1 };
        } else {
          return { ...comment, downvotes: comment.downvotes + 1 };
        }
      }
      return comment;
    }));
  };

  const handleReply = (id, replyText) => {
    const reply = {
      id: Date.now(),
      text: replyText,
      date: new Date(),
    };
    setComments(comments.map(comment => 
      comment.id === id ? { ...comment, replies: [...comment.replies, reply] } : comment
    ));
  };

  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'left', 
      backgroundImage: `url(${bg2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '90vh',
    }}>
      <Box sx={{ padding: 3 }}>
        <Box display="flex" alignItems="center" mb={1}>
          <Typography variant="h4" sx={{ fontFamily: 'Be Vietnam Pro', marginBottom: '1rem', fontWeight: 'bold' }}>
            FEEDBACK
          </Typography>
          <img src={feedbackImage} alt="Example" style={{ marginLeft: '1rem', height: '80px' }} />
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            value={name}
            onChange={handleNameChange}
            placeholder="Nama"
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: 1,
              padding: '10px',
              marginBottom: 2
            }}
          />
          <TextField
            fullWidth
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: 1,
              padding: '10px',
              marginBottom: 2
            }}
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            value={newComment}
            onChange={handleInputChange}
            placeholder="Tulis Komentar..."
            required
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: 1,
              padding: '10px'
            }}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>Kirim</Button>
        </form>
        <List sx={{ marginTop: 2 }}>
          {comments.map(comment => (
            <ListItem key={comment.id} alignItems="flex-start">
              <ListItemText
                primary={comment.text}
                secondary={`${comment.name}${comment.email ? ` (${comment.email})` : ''} - ${formatDistanceToNow(new Date(comment.date))} ago`}
              />
              <IconButton onClick={() => handleVote(comment.id, 'upvote')}>
                <ThumbUpIcon /> {comment.upvotes}
              </IconButton>
              <IconButton onClick={() => handleVote(comment.id, 'downvote')}>
                <ThumbDownIcon /> {comment.downvotes}
              </IconButton>
              <IconButton onClick={() => {
                const newText = prompt("Edit your comment:", comment.text);
                if (newText) handleEdit(comment.id, newText);
              }}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(comment.id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={() => {
                const replyText = prompt("Reply:", "");
                if (replyText) handleReply(comment.id, replyText);
              }}>
                <ReplyIcon />
              </IconButton>
              <List sx={{ paddingLeft: 4 }}>
                {comment.replies.map(reply => (
                  <ListItem key={reply.id}>
                    <ListItemText
                      primary={reply.text}
                      secondary={`Anonymous - ${formatDistanceToNow(new Date(reply.date))} ago`}
                    />
                  </ListItem>
                ))}
              </List>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default CommentSection;