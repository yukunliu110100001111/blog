---
layout: page
title: Bookshelf
---

<script setup>
import { data as books } from '../.vitepress/data/books.data.js'
</script>

<div class="book-intro">
  <h1>📚 My Reading List</h1>
  <p>I always love talking about books I’ve read.<br>
  Here is a list of every review I’ve written, in chronological order:</p>
</div>

<style>
.book-intro {
  text-align: center;
  margin-top: 1.5em;
  margin-bottom: 2em;
}
.book-intro h1 {
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 0.6em;
  color: #1a1a1a;
}
.book-intro p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
}
</style>

---

<style>
.book-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 2em;
}
.book-table th, .book-table td {
  border-bottom: 1px solid #e0e0e0;
  padding: 12px 8px;
  text-align: left;
}
.book-table th {
  font-weight: 600;
  color: #555;
}
.book-table td a {
  font-weight: 600;
  color: #1a1a1a;
  text-decoration: none;
}
.book-table td a:hover {
  text-decoration: underline;
  color: #0078ff;
}
.book-tag {
  background-color: #f5f5f5;
  border-radius: 6px;
  padding: 2px 8px;
  font-size: 0.85rem;
  color: #555;
}
</style>

<table class="book-table" v-if="books.length">
  <thead>
    <tr>
      <th>#</th>
      <th>Date</th>
      <th>Title</th>
      <th>Author</th>
      <th>Tag</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(book, index) in books" :key="book.url">
      <td>{{ index + 1 }}</td>
      <td>{{ book.date }}</td>
      <td><a :href="book.url">{{ book.title }}</a></td>
      <td>{{ book.author }}</td>
      <td><span class="book-tag">{{ book.tag }}</span></td>
    </tr>
  </tbody>
</table>

<p v-else style="text-align:center;color:#777;margin-top:2em;">📖 No book reviews found yet.</p>