var newsAccordion = document.getElementById("newsAccordion");

let headlines = {
  apiKey: "ac33785863764469b3c8efb55b183743",
  fetchNews: function () {
    console.log("p-1; s-1");
    fetch("https://newscatcher.p.rapidapi.com/v1/latest_headlines?lang=en&media=True", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "b0eb293ee1msh8170a9e5aa01e2fp192f4ejsn40ecbc90804f",
        "x-rapidapi-host": "newscatcher.p.rapidapi.com"
      }
    })
      .then(response => {
        console.log("p-1; s-2");
        console.log(response);
        console.log(response.json);
        return response.json();
      })

      .then((data) => {
        console.log("p-1; s-3");
        console.log(data);
        this.fetchContent(data);
      })

      .catch(err => {
        console.error(err);
      });
  },

  fetchContent: (data) => {

    console.log("rendering data for headlines...");



    var { media, published_date, topic, title, link, summary } = data.articles[0]
    document.querySelector(".headlines").children[0].innerHTML = `<a href="${link}"> <img src="${media}" alt="img">
     <div><br><h4>${topic} / ${published_date}</h4>  <p>${title}</p> </div></a> `;

    var { media, published_date, topic, title, link, summary } = data.articles[1]
    document.querySelector(".headlines").children[1].innerHTML = `<a href="${link}"> <img src="${media}" alt="img">
     <div><br><h4>${topic} / ${published_date}</h4>  <p>${title}</p> </div></a> `;

    var { media, published_date, topic, title, link, summary } = data.articles[2]
    document.querySelector(".headlines").children[2].innerHTML = `<a href="${link}"> <img src="${media}" alt="img">
     <div><br><h4>${topic} / ${published_date}</h4>  <p>${title}</p> </div></a> `;

    var { media, published_date, topic, title, link, summary } = data.articles[3]
    document.querySelector(".headlines").children[3].innerHTML = `<a href="${link}"> <img src="${media}" alt="img">
     <div><br><h4>${topic} / ${published_date}</h4>  <p>${title}</p> </div></a> `;

    var { media, published_date, topic, title, link, summary } = data.articles[4]
    document.querySelector(".headlines").children[4].innerHTML = `<a href="${link}"> <img src="${media}" alt="img">
     <div><br><h4>${topic} / ${published_date}</h4>  <p>${title}</p> </div></a> `;


  }
};




var featured = {

  fetchNews: function () {
    console.log("p-2; s-1");
    fetch("https://bing-news-search1.p.rapidapi.com/news?textFormat=Raw&safeSearch=Off", {
      "method": "GET",
      "headers": {
        "x-bingapis-sdk": "true",
        "x-rapidapi-key": "b0eb293ee1msh8170a9e5aa01e2fp192f4ejsn40ecbc90804f",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com"
      }
    })
      .then(response => {
        console.log("p-2; s-2");
        console.log(response);
        console.log(response.json);
        return response.json();
      })

      .then((data) => {
        console.log("p-2; s-3");
        console.log(data);
        this.fetchContent(data);
      })

      .catch(err => {
        console.error(err);
      });
  },

  fetchContent: (data) => {

    console.log("rendering data for more_news...");

    var { datePublished, name, url } = data.value[0];
    var { contentUrl } = data.value[0].image.thumbnail;
    var { provider } = data.value[0];
    document.querySelector(".more_news").children[1].innerHTML = `<a href="${url}"> <img src="${contentUrl}" alt="img">
     <div><br><h4>${provider[0].name} / ${datePublished}</h4>  <p>${name}</p> </div></a> `;

    var { datePublished, name, url } = data.value[1]
    var { contentUrl } = data.value[1].image.thumbnail;
    var { provider } = data.value[1];
    document.querySelector(".more_news").children[2].innerHTML = `<a href="${url}"> <img src="${contentUrl}" alt="img">
     <div><br><h4>${provider[0].name} / ${datePublished}</h4>  <p>${name}</p> </div></a> `;

    var { datePublished, name, url } = data.value[2]
    var { contentUrl } = data.value[2].image.thumbnail;
    var { provider } = data.value[2];
    document.querySelector(".more_news").children[3].innerHTML = `<a href="${url}"> <img src="${contentUrl}" alt="img">
     <div><br><h4>${provider[0].name} / ${datePublished}</h4>  <p>${name}</p> </div></a> `;

    var { datePublished, name, url } = data.value[3]
    var { contentUrl } = data.value[3].image.thumbnail;
    var { provider } = data.value[3];
    document.querySelector(".more_news").children[4].innerHTML = `<a href="${url}"> <img src="${contentUrl}" alt="img">
     <div><br><h4>${provider[0].name} / ${datePublished}</h4>  <p>${name}</p> </div></a> `;

    var { datePublished, name, url } = data.value[4]
    var { contentUrl } = data.value[4].image.thumbnail;
    var { provider } = data.value[4];
    document.querySelector(".more_news").children[5].innerHTML = `<a href="${url}"> <img src="${contentUrl}" alt="img">
     <div><br><h4>${provider[0].name} / ${datePublished}</h4>  <p>${name}</p> </div></a> `;

    var { datePublished, name, url } = data.value[5]
    var { contentUrl } = data.value[5].image.thumbnail;
    var { provider } = data.value[05];
    document.querySelector(".more_news").children[6].innerHTML = `<a href="${url}"> <img src="${contentUrl}" alt="img">
     <div><br><h4>${provider[0].name} / ${datePublished}</h4>  <p>${name}</p> </div></a> `;


    console.log("rendering data for most_view...");

    var { datePublished, name, url } = data.value[6]
    var { contentUrl } = data.value[6].image.thumbnail;
    var { provider } = data.value[6];
    document.querySelector(".most_view").children[2].innerHTML = `<a href="${url}"> <img src="${contentUrl}" alt="img">
     <div><br><h4>${provider[0].name} / ${datePublished}</h4>  <p>${name}</p> </div></a> `;

    var { datePublished, name, url } = data.value[7]
    var { contentUrl } = data.value[0].image.thumbnail;
    var { provider } = data.value[7];
    document.querySelector(".most_view").children[3].innerHTML = `<a href="${url}"> <img src="${contentUrl}" alt="img">
     <div><br><h4>${provider[0].name} / ${datePublished}</h4>  <p>${name}</p> </div></a> `;

    var { datePublished, name, url } = data.value[8]
    var { contentUrl } = data.value[8].image.thumbnail;
    var { provider } = data.value[8];
    document.querySelector(".most_view").children[4].innerHTML = `<a href="${url}"> <img src="${contentUrl}" alt="img">
     <div><br><h4>${provider[0].name} / ${datePublished}</h4>  <p>${name}</p> </div></a> `;

    var { datePublished, name, url } = data.value[9]
    var { contentUrl } = data.value[9].image.thumbnail;
    var { provider } = data.value[9];
    document.querySelector(".most_view").children[5].innerHTML = `<a href="${url}"> <img src="${contentUrl}" alt="img">
     <div><br><h4>${provider[0].name} / ${datePublished}</h4>  <p>${name}</p> </div></a> `;

    var { datePublished, name, url } = data.value[10]
    var { contentUrl } = data.value[10].image.thumbnail;
    var { provider } = data.value[10];
    document.querySelector(".most_view").children[6].innerHTML = `<a href="${url}"> <img src="${contentUrl}" alt="img">
     <div><br><h4>${provider[0].name} / ${datePublished}</h4>  <p>${name}</p> </div></a> `;

    var { datePublished, name, url } = data.value[11]
    var { contentUrl } = data.value[11].image.thumbnail;
    var { provider } = data.value[11];
    document.querySelector(".most_view").children[7].innerHTML = `<a href="${url}"> <img src="${contentUrl}" alt="img">
     <div><br><h4>${provider[0].name} / ${datePublished}</h4>  <p>${name}</p> </div></a> `;


  }


}












headlines.fetchNews();
featured.fetchNews();
