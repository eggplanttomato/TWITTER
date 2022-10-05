
let url = new URLSearchParams(location.search);
if (url.has('user') == false) {
  user = user1
}
if (url.has('user')) {
  user = window[url.get('user')]
}
if (url.has('user') && url.get("user").substr(4, 1) > 2) {
  user = user1
}
// console.log(url.get('user').substr(4, 1))

let header = document.querySelector(".header")
let userNameText = `<div class = "head-text"><h3>${user.displayName} </h3><img class= "icon" src="assets/check.png" alt="check"/></div>`
header.innerHTML = `<div class = "head-text"><a href="timeline.html"><i class="arrow fa-solid fa-arrow-left"></i></a>${userNameText}</div>
<div class="total-tweets">${user.tweets.length} Tweets</div>`

let photo = document.querySelector(".photo")
photo.innerHTML = `<div class="coverImg"><img src="${user.coverPhotoURL}" alt="coverPhoto"/></div>
<div class = "avatar"><img src="${user.avatarURL}" alt="avatar"/></div>
<div class="btn"><button class= 'follow-button' type="button">Following</button></div>`


let n = user.followerCount

function abbreviate(n, config = {}) {
  if (typeof config !== 'object') config = {}
  if (!config.hasOwnProperty('factor')) config.factor = 2
  if (!config.hasOwnProperty('absolute')) config.absolute = true
  if (!config.hasOwnProperty('unit'))
    config.unit = ['', 'K', 'M']
  if (!config.hasOwnProperty('numeric')) config.numeric = false
  let value = String(n).replace(/(\.|\)|\(|\,)/g, '')
  let length = value.length - 1
  const unit_index = ~~(length / 3)
  value = eval(
    `parseFloat(${value} / 1e${unit_index * 3}).toFixed(${config.factor})`
  )
  if (!!config.absolute) value = value.replace(/\.(\d+)$/, '')
  return !!config.numeric ? +value : `${value}${config.unit[unit_index]}`
}

let profile = document.querySelector(".profile")

profile.innerHTML = `${userNameText}
<p class="profile-text">${user.userName}</p>
<div class="joined-text"><img class= "icon" src="assets/calendar.png" alt="calendar"/><p class="profile-text">Joined ${user.joinedDate}</p></div>
<div class = "following-followers"><div class="following"><p class="profile-text"><span class="following-count">${user.followingCount}</span> Following</div><div class="followers"><p class="profile-text"><span class="follower-count">${abbreviate(n, {absolute: false, factor: 1})}</span> Followers</p></div>
</div>`

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


for (var i = 0; i < user.tweets.length; i++) {
  let month = new Date(user.tweets[i].timestamp)
  let day = month.getDate()
  const tweet = document.createElement('div')
  tweet.className = 'tweet-container'
  tweet.innerHTML = `<div class="box"><div><img class="small-avatar" src="${user.avatarURL}" alt="check"/></div>
<div class ="small-text"><h3>${user.displayName} </h3><img class= "small-icon" src="assets/check.png" alt="check"/></div><span class="user-info">${user.userName} • ${month.toLocaleString('default', { month: 'short' })} ${day}</span><div class = "dots"><span class="three-dots">•••</span></div></div>

<div class="tweet-box"><div class="tweet-content"><p>${user.tweets[i].text}</p><div class="icon-set">
<a class="blue-icon" href="#"><i class="fa-regular fa-comment"></i></a>
<a class="blue-icon" href="#"> <i class="fa-solid fa-retweet"></i></a>
<a class="red-icon" href="#"><i class="fa-regular fa-heart"></i></a>
<a class="blue-icon" href="#"><i class="fa-solid fa-arrow-up-from-bracket"></i></a>
</div></div></div>`
  tweets.appendChild(tweet)

}
