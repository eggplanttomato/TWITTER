
let tweets = document.querySelector(".tweets")
const tabs = document.querySelectorAll('.tab')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
  })
})
let totalUsers=2
let allTweets = [].concat(user1.tweets, user2.tweets).sort(byDate)



var flatval = function (value) {
  var temp = [];
  if (typeof value == "object") {
    // ARRAY
    if (Array.isArray(value)) {
      for (let i of value) { temp = temp.concat(flatval(i)); }
    }
    // OBJECT
    else {
      for (let i in value) { temp = temp.concat(flatval(value[i])); }
    }
  }
  // FLAT STRING, NUMBER, OR BOOLEAN
  else { temp.push(value); }
  return temp;
};
 var flattened = flatval(user1);

function byDate(a,b){
let d1 = new Date(a.timestamp)
let d2 = new Date(b.timestamp)
return d2.getDate() - d1.getDate()
}

for (var i = 0; i < allTweets.length; i++) {
  let month = new Date(allTweets[i].timestamp)
  let day = month.getDate()
  const tweet = document.createElement('div')
  tweet.className = 'tweet-container'
  if (flattened.includes(allTweets[i].text)){
    user = user1
    userParam = '?user=user1'
  }
  else{user=user2
  userParam = '?user=user2'}

console.log(userParam)
  tweet.innerHTML = `<div class="box"><div><a href="index.html${userParam}"><img class="small-avatar" src="${user.avatarURL}" alt="check"/></a></div>
<div class ="small-text"><a href="index.html${userParam}"><h3>${user.displayName} </h3></a><img class= "small-icon" src="assets/check.png" alt="check"/></div>
<span class="user-info">${user.userName} • ${month.toLocaleString('default', { month: 'short' })} ${day}</span>
<div class = "dots"><span class="three-dots">•••</span></div></div>

<div class="tweet-box"><div class="tweet-content"><p>${allTweets[i].text}</p><div class="icon-set">
<a class="blue-icon" href="#"><i class="fa-regular fa-comment"></i></a>
<a class="blue-icon" href="#"> <i class="fa-solid fa-retweet"></i></a>
<a class="red-icon" href="#"><i class="fa-regular fa-heart"></i></a>
<a class="blue-icon" href="#"><i class="fa-solid fa-arrow-up-from-bracket"></i></a>
</div></div></div>`
  tweets.appendChild(tweet)

}
