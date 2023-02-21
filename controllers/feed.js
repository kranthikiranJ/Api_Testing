exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "first post", content: "This is the first post!" }],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  //create post in db
  res.status(201).json({
    message: "post created Successfully",
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};

//html code
//<button id='get'>Get Posts</button>
//<button id='post'>Create a Post</button>

//javascript code

//const getButton = document.getElementById('get');
// const postButton = document.getElementById('post');

// getButton.addEventListener('click', ()=> {
//   fetch('http://localhost:8090/feed/posts')
//     .then(res=> res.json())
//   .then(resData=> console.log(resData))
//     .catch(err=>console.log(err))
// })
// postButton.addEventListener('click',()=> {
//   fetch('http://localhost:8090/feed/post',{
//     method : "POST",
//     body : JSON.stringify({
//       title : "A codepen Post",
//       content : "Codepen Content"
//     }),
//     headers : {
//       'Content-Type' : "application/json"
//     }
//   })
//   .then(res=> res.json())
//   .then(resData=> console.log(resData))
//     .catch(err=>console.log(err))
// })
