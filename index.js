// variable that interacts with the button
var button = document.getElementById('time')

// variable that stores the theme from localStorage if it already exist
var theme = window.localStorage.getItem('theme')

// if there is no theme stored in localStorage
if (theme === null) {
  // sets body to day-theme class
  document.body.setAttribute('class', 'day-theme')
  // if there is a theme stored in localStorage it will set the body to that theme
} else {
  document.body.setAttribute('class', theme)
}

function usetheme (theme) {
  document.body.setAttribute('class', theme)
  // sets localStorage to night-theme
  window.localStorage.setItem('theme', theme)
}
// gets the theme that is stored in localStorage and switches the theme when clicked
button.addEventListener('click', function () {
  window.localStorage.getItem('theme')
  if (document.body.getAttribute('class') === 'day-theme') {
    // if body them is day-theme, sets body to class night-theme
    usetheme('night-theme')
  } else {
    // if body them is day-theme, sets body to class day-theme
    usetheme('day-theme')
  }
})

// variable that stores times visited in local localStorage if it already exists
var visited = parseInt(window.localStorage.getItem('storedVisited'))

// check if visited isNaN
if (isNaN(visited)) {
  visited = 0
}

// if first time visiting the website
var output = document.getElementById('visited')
// adds 1 to visit everytime you visit
visited += 1
// sets the variable visited to the key storedVisited
parseInt(window.localStorage.setItem('storedVisited', visited))
// outputes the variable visited
output.innerHTML = visited
