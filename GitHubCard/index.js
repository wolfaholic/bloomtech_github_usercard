import axios from 'axios';

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/wolfaholic
*/
axios
    .get(`https://api.github.com/users/wolfaholic`)
    .then(response => {
            console.log(response);
        })
        .catch(error => {console.log("Error Message", error);
      });
    



        /* Step 2: Inspect and study the data coming back, this is YOUR 
           github info! You will need to understand the structure of this 
           data in order to use it to build your component function 

           Skip to Step 3.
        */

        /* Step 4: Pass the data received from Github into your function, 
                   create a new component and add it to the DOM as a child of .cards
        */
        function cardCreator(profileInfo) {

            const card = document.createElement('div');
            const img = document.createElement('img');
            const cardInfo = document.createElement('div');
            const name = document.createElement('h3');
            const userName = document.createElement('p');
            const location = document.createElement('p');
            const profile = document.createElement('p');
            const profileLink = document.createElement('a');
            const followers = document.createElement('p');
            const following = document.createElement('p');
            const bio = document.createElement('p');

            card.classList.add('card')
            cardInfo.classList.add('card-info')
            name.classList.add('name')
            userName.classList.add('userName')

            card.appendChild(img)
            card.appendChild(cardInfo)
            cardInfo.appendChild(name)
            cardInfo.appendChild(userName)
            cardInfo.appendChild(location)
            cardInfo.appendChild(profile)
            cardInfo.appendChild(profileLink)
            cardInfo.appendChild(followers)
            cardInfo.appendChild(following)
            cardInfo.appendChild(bio)

            img.src = profileInfo.avatar_url
            location.textContent = profileInfo.location
            name.textContent = profileInfo.name
            userName.textContent = profileInfo.login
            const theProfileLink = `URL: ${profileInfo.url}`
            profileLink.innerHTML = theProfileLink.link(profileInfo.url)
            followers.textContent = `Followers: ${profileInfo.followers}`
            following.textContent = `Following: ${profileInfo.following}`
            bio.textContent = `BIO: ${profileInfo.bio}`

            return card;

        }



        /* Step 5: Now that you have your own card getting added to the DOM, either 
                  follow this link in your browser https://api.github.com/users/Wolfaholic/followers 
                  , manually find some other users' github handles, or use the list found 
                  at the bottom of the page. Get at least 5 different Github usernames and add them as
                  Individual strings to the friendsArray below.
                  
                  Using that array, iterate over it, requesting data for each user, creating a new card for each
                  user, and adding that card to the DOM.
        */

        const followersArray = [
            'eaczechova',
            'kmilliner888',
            'BFlorence28',
            'marksayers46',
            'flowersfaerie',
        ];

        followersArray.forEach(user => {
            axios.get(`https://api.github.com/users/${user}`)
                .then(data => {
                    const card = cardCreator(data.data)
                    const cards = document.querySelector('.cards')
                    cards.appendChild(card)
                })
                .catch(error => {console.log("Error Message", error);
              });
        })

        /* Step 3: Create a function that accepts a single object as its only argument,
                  Using DOM methods and properties, create a component that will return the following DOM element:

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

        /* List of LS Instructors Github username's: 
          tetondan
          dustinmyers
          justsml
          luishrd
          bigknell
        */
