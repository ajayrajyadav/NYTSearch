$(document).ready(function () {
$('.btn-primary').on('click', function (event) {
  event.preventDefault();
    var searchWord = $('#search-input').val().trim()
    var queryURL =  `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchWord}&api-key=lLQSwGu8x97Vpxb82jDq9NHWxswIqhiq`
$.ajax({
    url: queryURL,
   method: "GET"
 }).then(function (response){
   console.log(response)
   var results = response.response.docs;
   console.log(results);
  let i=0;
   results.forEach(function(result){
     var newdivs = $('<div>');
     newdivs.attr("id", "article-number2"+result)
     i++;
   });
  
  //  for (let i=0; i < results.length; i++) {
  //    newdivs.attr("Id", i)
  //  }

   $('#search-input').get(0).reset()
   
 });
})
})