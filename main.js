$(document).ready(function(){

  var quoteArray = ['The web is our future. Let\'s build it together.',
                'Smile, and the world smiles back.',
                'It\'s the journey, not the destination, that matters.',
                'Do what you love and do it often. Life is more exciting that way.',
                'It’s not about what you know. It’s about what you can figure out.'];

  var index = 0;

  var correctIndex = function(index){
    if (index == quoteArray.length)
      {return 0;}
    else if (index < 0)
      {return quoteArray.length - 1;}
    else
      {return index;}
  };

   var displayNextQuote = function(index){
    $("#quote").fadeOut("fast", function(){
      $("#quote").text('"' + quoteArray[index] + '"').fadeIn("slow");
    });
  };

  $('.arrow').on('click', function(e){
    e.preventDefault();
    if ($(this).attr('id') == 'left')
      {index--;}
    else
      {index++;}
    index = correctIndex(index);
    displayNextQuote(index);
  });
});
