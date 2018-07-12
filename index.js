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
  let repoHTML = `<a id="repo-link" href="${repo.html_url}">${repo.name}</a>`
  $("#results").append(repoHTML)
}





//   createIssue()
//   const url = fetchSpy.calls[0].arguments[0]
//   expect(url).toMatch(/javascript-fetch-lab\/issues/)
//   expect(url).toNotMatch(/learn-co-curriculum/)
//   const opts = fetchSpy.calls[0].arguments[1]
//   expect(opts.method).toMatch(/post/)
//   expect(opts.headers).toMatch(/Authorization: token\s./)
//   expect(opts.body).toMatch(/test body/)
// })


// POST /repos/:owner/:repo/issues

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

function getIssues() {
  const repo = '${owner}/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json))
}

// it('fetches the get issues api', () => {
//   getIssues()
//   const url = fetchSpy.calls[0].arguments[0]
//   expect(url).toMatch(/javascript-fetch-lab\/issues/)
//   expect(url).toNotMatch(/learn-co-curriculum/)
// })
