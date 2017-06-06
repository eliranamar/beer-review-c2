var ascending = true;

// test comment - beer review
function BeerReviewApp() {
  var beers = [];

  function addBeer(name, category, rating) {
    beers.push({
      name: name,
      category: category,
      rating: rating
    });
  }

  function updateBeers() {
    $('ul.beers-list li').remove();
    for (var i = 0; i < beers.length; i++) {
      $('.beers-list').append(
        "<li class='list-group-item'>Name: " +
        beers[i].name +
        " , Categoty: " +
        beers[i].category +
        " , Rating: " +
        beers[i].rating +
        "." +
        "</li>"
      );
    }
  }

  function sortBeers() {
    // debugger;
    if (ascending) {
      beers.sort(function (a, b) {
        return b.rating - a.rating
      });
      ascending = false;
      console.log(beers);
    } else {
      beers.sort(function (a, b) {
        return a.rating - b.rating
      });
      console.log(beers);
      ascending = true;
    }
  }

  return {
    addBeer: addBeer,
    updateBeers: updateBeers,
    sortBeers: sortBeers
  }
}

function clearFields() {
  $('.beer-input').val("");
  $('.category-input').val("");
  $('.beer-rating').val("Rate Beer");
}

var app = BeerReviewApp();

$('.post-beer').on('click', function () {
  var name = $('.beer-input').val();
  var category = $('.category-input').val();
  var rating = $('.beer-rating').val();
  if ((!name || !category) || rating == "Rate Beer") {
    alert("Please fill b33r details and rating.");
  } else {
    app.addBeer(name, category, rating);
    app.updateBeers();
    clearFields();
  }
});


$('.sort-beer').on('click', function () {
  // debugger;
  app.sortBeers();
  app.updateBeers();
});