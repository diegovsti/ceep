//var $cardColors = document.querySelectorAll('.card-colors');

//for (var index = 0; index < $cardColors.length; index++) {
//$cardColors[index].addEventListener('click', function(){
//  var $card = this.parentNode.parentNode.parentNode;

//console.log($card.dataset.color);

//$card.dataset.color = this.dataset.color;

//for (var position = 0; position < $cardColors.length; position++) {
//  $cardColors[position].classList.remove('isActive');
//};
//  this.classList.add('isActive');
//  });
//};

  var $cards = document.querySelectorAll('.card');
  var $cardColors = document.querySelectorAll('.card-colors');
    for (var index = 0; index < $cards.length; index++)
    {
      $cards[index].addEventListener('click', function(event)
      {
        var $this = event.target;

         console.log($this.classList.contains('card-colors'));
          if ($this.classList.contains('card-colors'))
           {
                var $card = this;
                $card.dataset.color = $this.dataset.color;
                  for (var position = 0; position < $cardColors.length; position++)
                   {
                    $cardColors[position].classList.remove('isActive');
                   }
                   $this.classList.add('isActive');
            };
      });
    };
