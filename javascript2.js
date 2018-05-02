
url = `https://newsapi.org/v2/everything?q=sleep + brain + recovery &from=2018-03-01&language=en&sortBy=publishedAt&apiKey=${key}`

const recievedNews2 = (newsdata) => {
    const articlesDiv = document.querySelector(".articles2")
    //articles is an object in the JSON.

    newsdata.articles.forEach((article,index) => {
      //Here we create HTML elements that we add to our HTML file

if(index<2){
      const div = document.createElement("div")
      div.className = "news"
      div.innerHTML = `<h2>${article.title}</h2>
      `

      articlesDiv.appendChild(div)

      //This fetches and add images to our articles

      const imgdiv = document.createElement("div")
      imgdiv.className = "image-div"
            imgdiv.style = "background-image: url('" + article.urlToImage + "'); background-size:cover;"
            div.appendChild(imgdiv)

      const description = document.createElement("p")
      description.innerHTML = article.description
      div.appendChild(description)

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
  .then(recievedNews2)
