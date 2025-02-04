// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a list of comments
const comments = [
  {
    id: 1,
    text: 'This is a comment'
  }];