var beers = [];
var ascending = true;

function addBeer(name, category, rating) {
  beers.push({
    name: name,
    category: category,
    rating: rating
  });
}
function compare(a,b) {
  if (ascending)
    return 1;
  if (!ascending)
    return -1;
  return 0;
}
function clearFields(){
    $('.beer-input').val("");
    $('.category-input').val("");
    $('.beer-rating').val("Rate Beer");
}
function updateBeers() {
  $('ul.beers-list li').remove();
  for (var i = 0; i < beers.length; i++) {
    $('.beers-list').append("<li class='list-group-item'>Name: " + beers[i].name + " , Categoty: " + beers[i].category + " , Rating: " + beers[i].rating + "." + "</li>");
  }
}

$('.post-beer').on('click', function () {
  var name = $('.beer-input').val();
  var category = $('.category-input').val();
  var rating = $('.beer-rating').val();
  if ((!name || !category) || rating == "Rate Beer") {
    alert("Please fill b33r details and rating.");
  } else {
    addBeer(name, category, rating);
    updateBeers();
    clearFields();
  }
});

$('.sort-beer').on('click', function () {
  // debugger;
  if (ascending) {
  beers.sort(function(a, b){return b.rating-a.rating});   
  ascending = false; 
  console.log(beers);
  updateBeers();
  } else {
  beers.sort(function(a, b){return a.rating-b.rating});   
  console.log(beers);
  ascending = true;
  updateBeers();
  }
});
