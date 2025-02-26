// Create web server

const express = require('express');
const app = express();

let comments = [
  { id: 1, author: 'John', body: 'Hello world!' },
  { id: 2, author: 'Jane', body: 'Hi, planet!' }
];

app.use(express.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  newComment.id = comments.length + 1;
  comments.push(newComment);
  res.json(newComment);
});

app.delete('/comments/:id', (req, res) => {
  const commentId = Number(req.params.id);
  comments = comments.filter(comment => comment.id !== commentId);
  res.json({ status: 'ok' });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});