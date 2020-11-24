const app = require('express')();
const { v4 } = require('uuid');

app.get('/api/posts', (req, res) => {
  res.json([
    {
      username: "eugenioxo",
      userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",
      postImage:
        "https://cdn.theatlantic.com/static/mt/assets/science/cat_caviar.jpg",
      likes: 36,
      hasBeenLiked: false,
      caption: "When you're ready for summer '18 ☀️",
      filter: "lofi"
    },
    {
      username: "eugenioxo",
      userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",
      postImage:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/tropical_beach.jpg",
      likes: 36,
      hasBeenLiked: false,
      caption: "When you're ready for summer '18 ☀️",
      filter: "perpetua"
    },
    {
      username: "djirdehh",
      userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me2.png",
      postImage:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/downtown.jpg",
      likes: 20,
      hasBeenLiked: false,
      caption: "Views from the six...",
      filter: "clarendon"
    },
    {
      username: "puppers",
      userImage:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg",
      postImage:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/puppers.jpg",
      likes: 49,
      hasBeenLiked: false,
      caption: "Current mood 🐶",
      filter: "lofi"
    }
  ]);
})

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`)
})

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params
  res.end(`Item: ${slug}`)
})

module.exports = app
