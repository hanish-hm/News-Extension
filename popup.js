document.addEventListener("DOMContentLoaded", function () {
    fetchNews();
  });
  
  function fetchNews() {
    const newsContainer = document.getElementById("news-container");
  
    fetch("https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=a49db6b64cbd48a2bfbd611da78a104a")
      .then((response) => response.json())
      .then((data) => {
        data.articles.slice(0, 3).forEach((article) => {
          const newsItem = document.createElement("div");
          newsItem.className = "news-item";
          newsItem.innerHTML = `<strong>${article.title}</strong><br>${article.description}<br><a href="${article.url}" target="_blank">Read more</a>`;
          newsContainer.appendChild(newsItem);
        });
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        newsContainer.innerHTML = "Error fetching news.";
      });
  }
  