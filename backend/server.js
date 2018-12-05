var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var logger = require('morgan')
var mongoose = require('mongoose')
var auth = require('./auth.js')
 

var app = express()

var User = require('./models/User.js')
var Post = require('./models/Post.js')

app.use(cors())
app.use(bodyParser.json());
app.use(logger('dev'))

app.get('/posts/:id', async (req, res) => {
    var authorId = req.params.id;
    var posts = await Post.find( {authorId} )
    res.send(posts)
});

app.post('/post', (req, res) => {
    var postData = req.body
    postData.authorId = "5c026b44548db24dd469bd51";
    var post = new Post(postData)
    post.save((err, result) => {
        if (err) {
            console.log('Post saving error')
            return res.status(500).send({message: 'Post saving error'})
        }
        res.sendStatus(200)
    })

})

app.get('/users', async (req, res) => {
    try {
    var users = await User.find({}, '-password -__v' )
    res.send(users)
    } catch (error){
        console.error(error)
        res.sendStatus(500)
    }
});

app.get('/profile/:id', async (req, res) => {
    try {
    var user = await User.findById(req.params.id, '-password -__v' )
    res.send(user)
    } catch (error){
        console.error(error)
        res.sendStatus(500)
    }
});

 
 
mongoose.connect('mongodb://Oshie:Altessa1@ds121624.mlab.com:21624/social', { useNewUrlParser: true }, (err) => {
    if (!err){
        console.log('connected to Mongo')
    }
})
app.use('/auth', auth)
app.listen(3000)

