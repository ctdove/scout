console.log('Client-side code running');

var button = $('.btn');

$('.btn').addClass('btn-danger');

//click function
button.click(function() {
    console.log('button was clicked');
});