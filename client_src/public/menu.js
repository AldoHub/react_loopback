$(function(){

    //on click set the left value to 0, to show the menu
    $("#menu").on("click",(e)=>{
     e.stopPropagation();
        $("nav").css({
            "left": "0"
        })
    });


    //when clicking the close button "x", set the value to the default
    $("#close").on("click",()=>{
        $("nav").css({
            "left": ""
        }) 
    });

});