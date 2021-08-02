const images = { 
    animalCoders: [
    {
      id: 1,
      title: "Coder dog",
      likes: 7,
      image: "./assets/coder-dog.png",
      comments: [
        {
          id: 1,
          content: "What a cute dog!",
          imageId: 1
        },
        {
          imageId: 1,
          content: "Funny dog!!",
          id: 4
        },
        {
          imageId: 1,
          content: "Hes a good boy!!",
          id: 5
        }, 
      ]
    },
    {
        id: 2,
        title: "Coder Cats",
        likes: 4,
        image: "./assets/coder-dog.png",
        comments: [
          {
            id: 1,
            content: "What a cute dog!",
            imageId: 1
          },
          {
            imageId: 1,
            content: "Funny dog!!",
            id: 4
          },
          {
            imageId: 1,
            content: "Hes a good boy!!",
            id: 5
          } 
        ]
      },
      {
        id: 2,
        title: "Coder are cool",
        likes: 4,
        image: "./assets/coder-dog.png",
        comments: [
          {
            id: 1,
            content: "What a cute dog!",
            imageId: 1
          },
          {
            imageId: 1,
            content: "Funny dog!!",
            id: 4
          },
          {
            imageId: 1,
            content: "Hes a good boy!!",
            id: 5
          } 
        ]
      },
]
};
  
  console.log("Animals", images[0])
    
images.animalCoders.forEach((animalCoder) => {
        console.log("list of animals: ", animalCoder);
       })


    //    It took me a while to get array working, realised I was missing a comma between the objects
    // for.each seems to work, now it's just a matter of including the html
    // As I'm writing this, I forgot to do the pseudo code... oops