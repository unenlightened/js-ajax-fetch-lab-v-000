function getIssues() {
}

function showIssues(json) {
}

// POST /repos/:owner/:repo/issues

function createIssue() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  let title = $("#title").val()
  let body = $("#body").val()

  fetch(`https://api.github.com/repos/${repo}`, {
    // method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showForkedRepo(json))
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showForkedRepo(json))
}

function showForkedRepo(repo) {
  let repoHTML = `<a href="${repo.html_url}">${repo.name}</a>`
  $("#results").append(repoHTML)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
