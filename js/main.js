$(document).ready(function(){

let $btns = $('.project-area .button-group button');

$btns.click(function(e){
    $('.project-area .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
        filter : selector
    });
    return false;
    })

    // sticky navigation area
    let nav_offset_top = $('.header-menu').height() + 50;

    function navBarFixed(){
        if ($('.header-menu').length){
            $(window)
        }
    }
});
