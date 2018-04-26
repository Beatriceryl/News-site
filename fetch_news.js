const key = "8c2fb61b59994b20a6093df0a36e6eac"

/* Example url: https://newsapi.org/v2/top-headlines?q=bitcoin */
const url = `https://newsapi.org/v2/everything?q=cleaneating AND (brain OR muscles OR exercise) NOT diet & from=2018-04-01&language=en&sortBy=publishedAt&apiKey=${key}`

const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".articles")
    //articles is an object in the JSON.

    newsdata.articles.forEach((article) => {
      //Here we create HTML elements that we add to our HTML file
      const div = document.createElement("div")
      div.className = "news"
      div.innerHTML = `<h2>${article.title}</h2>
<h3>${article.author}
<h4>${article.publishedAt}

      `
      articlesDiv.appendChild(div)

      //This fetches and add images to our articles
const img = document.createElement("img")
      img.src = article.urlToImage
      div.appendChild(img)

      const description = document.createElement("p")
      description.innerHTML = article.description
      div.appendChild(description)

      const link = document.createElement("a")
      link.href = article.url
      link.innerHTML = "Read more"
      div.appendChild(link)

    })
}

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.

fetch(url)
  .then(response => response.json())
  .then(recievedNews)
