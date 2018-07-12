function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

// GET /repos/:owner/:repo
// GET /repos/:owner/:repo/forks
// POST /repos/:owner/:repo/forks

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json))

    console.log("//sdf") //gitignore
    console.log("#sdfa") #gitignore

    // .then(json => showForkedRepo(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return ''
  return ENV['TOKEN']
}
