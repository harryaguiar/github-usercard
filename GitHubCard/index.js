import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

let resArray = [];
axios
  .get(`https://api.github.com/users/harryaguiar`)
  .then((res) => {
    // if the call is successful, it runs this callback
    console.log('Here is the res: ', res);
  
    resArray = res.data;
    console.log(`Array:`, resArray);
    cards.appendChild(githubCard(resArray));
    // res.data.forEach((e) => {
    //   cards.append(githubCard(e));
    //   });

  })
  .catch((err) => {
    // if the call is unsuccessful, it runs this callback
    console.log('Here is the err: ', err);
  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

let followersArray = [];

axios
  .get(`https://api.github.com/users/tetondan`)
  .then((res) => {
    // if the call is successful, it runs this callback
    console.log('Here is the res: ', res);
  
    followersArray = res.data;
    console.log(`Array:`, resArray);
    cards.appendChild(githubCard(followersArray));
    // res.data.forEach((e) => {
    //   cards.append(githubCard(e));
    //   });

  })
  .catch((err) => {
    // if the call is unsuccessful, it runs this callback
    console.log('Here is the err: ', err);
  });

  axios
  .get(`https://api.github.com/users/dustinmyers`)
  .then((res) => {
    // if the call is successful, it runs this callback
    console.log('Here is the res: ', res);
  
    followersArray = res.data;
    console.log(`Array:`, resArray);
    cards.appendChild(githubCard(followersArray));
    // res.data.forEach((e) => {
    //   cards.append(githubCard(e));
    //   });

  })
  .catch((err) => {
    // if the call is unsuccessful, it runs this callback
    console.log('Here is the err: ', err);
  });

  axios
  .get(`https://api.github.com/users/devbrunopaula`)
  .then((res) => {
    // if the call is successful, it runs this callback
    console.log('Here is the res: ', res);
  
    followersArray = res.data;
    console.log(`Array:`, resArray);
    cards.appendChild(githubCard(followersArray));
    // res.data.forEach((e) => {
    //   cards.append(githubCard(e));
    //   });

  })
  .catch((err) => {
    // if the call is unsuccessful, it runs this callback
    console.log('Here is the err: ', err);
  });

  axios
  .get(`https://api.github.com/users/bigknell`)
  .then((res) => {
    // if the call is successful, it runs this callback
    console.log('Here is the res: ', res);
  
    followersArray = res.data;
    console.log(`Array:`, resArray);
    cards.appendChild(githubCard(followersArray));
    // res.data.forEach((e) => {
    //   cards.append(githubCard(e));
    //   });

  })
  .catch((err) => {
    // if the call is unsuccessful, it runs this callback
    console.log('Here is the err: ', err);
  });
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function githubCard(object){
  const card = document.createElement('div');
  card.classList.add('card');
  const img = document.createElement('img');
  img.src = object.avatar_url;
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = object.name;

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = object.login;

  const location = document.createElement('p');
  location.textContent = `Location: ${object.location}`;

  const profile = document.createElement('p');
  profile.textContent = `Profile: `

  const githubPage = document.createElement('a');
  githubPage.href = object.html_url;
  githubPage.textContent = object.html_url;

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${object.followers}`;

  const following = document.createElement('p');
  following.textContent = `Followers: ${object.following}`;

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${object.bio}`;
  
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(githubPage);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);


return card;

};


// console.log(githubCard());

const cards = document.querySelector('.cards');



// resArray.forEach(items => {
//   cards.appendChild(githubCard(items));
// });


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
