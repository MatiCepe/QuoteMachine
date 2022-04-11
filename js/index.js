var randomItem = {
    text : '',
    author : ''
}

var type = 'jokes';

function listing(type,list){
    let randomIndex = randomizeInt(0,99);
    randomItem.text = list[randomIndex];
    type == 'jokes' ? type = 'Joke'  : type = 'Refran';
    randomItem.author = type + "# " + randomIndex;
}

function getColor(){
    var colors = [
        '#7BB5A2',
        '#A0C3A9',
        '#A18B69',
        '#EDAB73',
        '#E5D092',
        '#446072',
        '#B2A68D',
        '#7297A0',
        '#54738E',
        '#82AC7C',
        '#9DBA94'
    ];
    
    return colors[randomizeInt(0,colors.length-1)];
}

function setType(){
    
    type == 'jokes' ? type = 'refranes' : type = 'jokes';
    
}

function changeText(){
    
    retrieveList(type,listing);
    
    var randomColor = getColor();
   
    $('body').animate(
    {
    },

    500);

    $('.button').animate(
    {
        },

    500);

    $('body').css("background-color",randomColor);
    $('body').css("color",randomColor);
    

    $('.quote-text').animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $('#text').text(randomItem.text);
      });
    
      $('.quote-author').animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $('#author').html(randomItem.author);
      });
     let boxShadow = '0.5rem 0.5rem 1rem black';
    $('#quote-box').css('box-shadow', boxShadow);
    
}

$( document ).ready(function(){

    $("#refranes").hide();
    changeText();
    $("#new-quote").on('click',changeText);

    $("#customSwitches").click(function(){
        setType();
        changeText();
        $(this).html(type[0].toUpperCase() + type.substring(1));
    });
});