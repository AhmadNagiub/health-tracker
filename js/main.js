
$(".clk").on( "click" ,function (e) { 
    $(".login").fadeToggle(1000,function(){
        $("body").css("overflow", "hidden");
    }) ;

});


$(".close").on("click" , function(e){

        $(".login").fadeOut(1000,function(){
            $("body").css("overflow", "auto");
        });
    
});

$(".clk2").on( "click" ,function (e) { 
    $(".signup").fadeToggle(1000,function(){
        $("body").css("overflow", "hidden");
    }) ;
});
$(".close").on("click" , function(e){

        $(".signup").fadeOut(1000,function(){
            $("body").css("overflow", "auto");
        });
    
});