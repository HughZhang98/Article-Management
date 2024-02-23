const express = require('express')
const app = express()

app.use(require('cors')())
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/element-admin', {
    // useNewUrlParser: true,
    // useFindAndModify: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true
})
const Article = mongoose.model('Article', new mongoose.Schema({
  title: { type: String},
  body: { type: String},
}))

app.get('/', async (req, res) => res.send('Index'))
//Create Articles
app.post('/api/articles', async (req, res) => {
 const article = await Article.create(req.body)
 res.send(article)
})
//Show Articles list
app.get('/api/articles', async (req, res) => {
  const articles = await Article.find()
  res.send(articles)
})
//Delete Articles
app.delete('/api/articles/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.send({
    status: true
  })
})
//Articles Info
app.get('/api/articles/:id', async (req, res) => {
  const article = await Article.findById(req.params.id)
  res.send(article)
})
//Update Articles
app.put('/api/articles/:id', async (req, res) => {
  const article = await Article.findByIdAndUpdate(req.params.id, req.body)
  res.send(article)
})

app.listen(3001, () => console.log('http://localhost:3001'))