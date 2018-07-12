function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
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
  let repoHTML = `<a id="repo-link" data-owner="${repo.author.login}" href="${repo.html_url}">${repo.name}</a>`
  $("#results").append(repoHTML)
  getIssues(repo)
}

function createIssue() {
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value

  const repo = '${owner}/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    title: title,
    body: body,
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
}

function getIssues(repo) {
  const repoLink = repo.author.login + "/" + repo.name
  fetch(`https://api.github.com/repos/${repoLink}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json))
}

function showIssues(issues) {

  $("#results").append(repoHTML)
}
