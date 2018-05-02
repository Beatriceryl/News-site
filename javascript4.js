
url = `https://newsapi.org/v2/everything?q=gym + muscles & from=2018-04-01&language=en&sortBy=publishedAt&apiKey=${key}`

const recievedNews4 = (newsdata) => {
    const articlesDiv = document.querySelector(".senastenytt")
    //articles is an object in the JSON.

    newsdata.articles.forEach((article,index) => {
      //Here we create HTML elements that we add to our HTML file

if(index<8){
      const div = document.createElement("div")
      div.className = "news"
      div.innerHTML = `<h3>${article.title}</h2>
      `

      articlesDiv.appendChild(div)

      const link = document.createElement("a")
      link.href = article.url
      link.innerHTML = "Read more"
      div.appendChild(link)


}
    })
   }


//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.

fetch(url)
  .then(response => response.json())
  .then(recievedNews4)
