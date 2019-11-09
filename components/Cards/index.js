// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.




// axios.get('https://lambda-times-backend.herokuapp.com/articles')
// .then(result => {
//     console.log(result);
//     article(result);

// })

// .catch(err => {
//     console.log(err);
// });


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    // console.log(response);
    let js = response.data.articles.javascript;
    const bootstrap = response.data.articles.bootstrap;
    const technology = response.data.articles.technology;
    const jquery = response.data.articles.jquery;
    const node = response.data.articles.node;


    js.forEach(item => {
        entryPoint.appendChild(article(item));

    })

    bootstrap.forEach(item => {
        entryPoint.appendChild(article(item));
    })

    technology.forEach(item => {
        entryPoint.appendChild(article(item));
    })

    jquery.forEach (item => {
        entryPoint.appendChild(article(item));
    })

    node.forEach (item => {
        entryPoint.appendChild(article(item));
    })
})

.catch (error => {
    console.log(error);
})

    // Object.keys(response.data.articles).forEach(item =>
    //     item.forEach(item => {
    //         entryPoint.appendChild(article(item))
    //     })
    // })
    // .catch(error => {
    //     console.log(error);
    // })





function article (user) {

    const articleCard = document.createElement('div');
    const articleHead = document.createElement('div');
    const articleAuthor = document.createElement('div');
    const articleImgCon = document.createElement('div');
    const articleImg = document.createElement('img');
    const articleSpan = document.createElement('span');

    // Class

    articleCard.classList.add('card');
    articleHead.classList.add('headline');
    articleAuthor.classList.add('author');
    articleImgCon.classList.add('img-container');


    // Content

    articleImg.src = user.authorPhoto;
    articleHead.textContent = user.headline;
    articleSpan.textContent = user.authorname;


    // Append 

    articleCard.appendChild(articleHead);
    articleCard.appendChild(articleAuthor);
    articleAuthor.appendChild(articleImgCon);
    articleAuthor.appendChild(articleSpan);
    articleImgCon.appendChild(articleImg);
    // document.querySelector('.cards-container').appendChild(articleCard);

    return articleCard;

}
const entryPoint = document.querySelector('.cards-container');

