
  
//   console.log("Animals", images[0])
    
// images.animalCoders.forEach((animalCoder) => {
//         console.log("list of animals: ", animalCoder);
//        })


//     //    It took me a while to get array working, realised I was missing a comma between the objects
//     // for.each seems to work, now it's just a matter of including the html
//     // As I'm writing this, I forgot to do the pseudo code... oops

// // I could not get the terminal to work - still says command not found

// // I rewatched the tutorial, but could not work out how to get the db.json array and objects displayed.

//   const animalCodersPosts = {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(animalCoder)
//   }
  
//     fetch('http://localhost:3000/images', animalCodersPosts)
//   .then(response => response.json())
//   .then(data => console.log(data));
  
  
  

fetch("http://localhost:3000/images")
.then(response => response.json())
  .then(animalCodersList => {
    console.log("Inside GET Fetch: ", animalCodersList[0])
    // renderAnimalCodersList()
    renderAnimalCoderCard(animalCodersList[0])
    // Do something with products
  })

// Should I keep this here, grouping the fetches and linking the aniimalCoderLike Button?
// Edit - keep this within the button, within the function
// const fetchLikes = {
//     method: "PATCH",
//     headers: {
//     "Content-Type": "application/json"
//   },
  
//     body: JSON.stringify({likes: animalCoderCard.likes + 1})
  
//    };
  
//     fetch(`http://localhost:3000/images/${animalCoderCard.id}`, fetchLikes)
//     .then((response) => response.json())
//     .then((addedLikes) => {
//     console.log("addedLikes: ", addedLikes);
//   // .innerHTML? 
//     spanEl.innerText = `${animalCoderCard.likes += 1} likes`;
  
  // Link to animalCoderLikeButton here?

//     });
  
  
  // renderAnimalCodersList()

  // input: an array of images
  // output: a <section element

  const animalCodersListEl = document.querySelector(".image-container")
  const animalCoderCardEl = document.querySelector(".image-card")
  
  
  function renderAnimalCodersList(animalCodersList) {
  console.log("Inside renderImagesList: ", animalCodersList)

  animalCodersListEl.innerHTML = ""

  const animalCodersListEl = document.createElement("section");
  animalCodersListEl.className = "image-card" 
  
  animalCodersListEl.append(animalCodersListEl)
  console.log("animal-list: ", animalCodersListEl)
  }
  // renderAnimalCodersList(animalCodersList)

  // input: an object 
  // output: an article element 
  function renderAnimalCoderCard(animalCoderCard) {
    console.log("Inside animalCoderCard: ", animalCoderCard)

    const animalCoderCardEl = document.createElement("article");
    console.log("animalCoderCardEl: ", animalCoderCardEl)

    const animalCoderHeaderEl = document.createElement("h2");
    animalCoderHeaderEl.innerText = animalCoderCard.title
    animalCoderHeaderEl.className = "title"

    const animalCoderImageEl = document.createElement("img")
    animalCoderImageEl.src = `assets/${animalCoderCard.image}`;
    animalCoderImageEl.alt = animalCoderCard.name;

  const animalCoderDivEl = document.createElement("div")
  animalCoderDivEl.className = "likes-section"

  const animalCoderSpanEl = document.createElement("span")
  animalCoderSpanEl.innerText = animalCoderCard.likes
  // how do you write the word likes after? corrected
  animalCoderSpanEl.innerHTML = "likes"
  animalCoderSpanEl.className = "likes"

  const animalCoderLikeButtonEl = document.createElement("button")
  animalCoderLikeButtonEl.className = "like-button"
  animalCoderLikeButtonEl.innerHTML = "???"

  animalCoderLikeButtonEl.addEventListener("click", () => {
  // or images?
  console.log("clicked", animalCoderCard.id, animalCoderCard.likes);

  const fetchLikes = {
  method: "PATCH",
  headers: {
  "Content-Type": "application/json"
},

  body: JSON.stringify({likes: animalCoderCard.likes + 1})

 };

  fetch(`http://localhost:3000/images/${animalCoderCard.id}`, fetchLikes)
  .then((response) => response.json())
  .then((addedLikes) => {
  console.log("addedLikes: ", addedLikes);
// .innerHTML? 
  spanEl.innerText = `${animalCoderCard.likes += 1} likes`;


  });

})

const animalCoderUlEl = document.createElement("ul")
animalCoderUlEl.className = "comments"

const animalCoderLiEl = document.createElement("li")

const animalCoderFormEl = document.createElement("form")
animalCoderFormEl.className = "comment-form"

const animalCoderInputEl = document.createElement("input")
animalCoderInputEl.className = "comment-input"
animalCoderInputEl.type = "text"
animalCoderInputEl.name = "comment"
animalCoderInputEl.placeholder = "Add a comment"

const animalCoderCommentButtonEl = document.createElement("button")
animalCoderCommentButtonEl.className = "comment-button"
animalCoderCommentButtonEl.type = "submit"
animalCoderCommentButtonEl.innerHTML = "Post"

 animalCoderCardEl.append(animalCoderHeaderEl)
 animalCoderCardEl.append(animalCoderImageEl)
 animalCoderCardEl.append(animalCoderDivEl)
 animalCoderDivEl.append(animalCoderSpanEl)
 animalCoderDivEl.append(animalCoderLikeButtonEl)
 animalCoderCardEl.append(animalCoderUlEl)
 animalCoderUlEl.append(animalCoderLiEl)
 animalCoderCardEl.append(animalCoderInputEl)
 animalCoderCardEl.append(animalCoderCommentButtonEl)
 
}

    // <h2 class="title">Title of image goes here</h2>
    // <img src="./assets/image-placeholder.jpg" class="image" />
    // <div class="likes-section">
    //   <span class="likes">0 likes</span>
    //   <button class="like-button">???</button>
    // </div>
    // <ul class="comments">
    //   <li>Get rid of these comments</li>
    //   <li>And replace them with the real ones</li>
    //   <li>From the server</li>
    // </ul>
    // <form class="comment-form">
    //   <input
    //     class="comment-input"
    //     type="text"
    //     name="comment"
    //     placeholder="Add a comment..."
    //   />
    //   <button class="comment-button" type="submit">Post</button>


  