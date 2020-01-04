//check off and change color to gray to specific todo list by clicking
//check in and color black and remove line through
//ul is added because in jquery we can only add listeners to elemts 
//that exist already when page loads
//li may or maynot be on page (when more are added)
//so we need to add event listerner to whole ul parent
//when we click on ul event will fire except
//due to second argument (li) only when li is clicked it will run the code below 
$("ul").on("click","li",function(){
    //togge bw the class in css when clicked
    $(this).toggleClass("done");
});
//same goes for span (for new li that r added )
//only when a span is clicked this event will fire
$("ul").on("click","span",function(event){
    //bubbling triggers li event also and other elements 
    //surrounding  its scope
    //alert("hasdf");
    //so we can use stopPropagation jq method that will
    //stop events from bubbling up
    event.stopPropagation();//its a asyntax as it is 
    //we need to remove li  element
    //use parent(selects the other elements other than span)
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
        //we have to use callback func remove which will
        //initiate only after fadeout func is done 
        //here this refers to the li elem.
        //other than span as we used parent 
        //so it first fades out and then removes 
    });
    //fading out doesnt remove it ,
    //it just hides it by display none
});
//selecting all input with type =text ;
$("input[type='text']").keypress(function(event){
    //check whether the keypressed on keyboard is enter
    //event.which return the number asssigned to the key

    if(event.which===13){
        //take text extract and make new li out of it
        //using .val() ==
        //get the curreent value of first element in set of 
        //matched elements or set it 
        //save it to a variable
        var todotext=$(this).val();
        //empties the input for the next output
        $(this).val("");
        //create a new li and add to ul;
        //usng append ( meand add something to the end)
        //take the string of html and add it whatever we selected (ul)
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todotext + "</li>");
    }
});
//selecting class plus and adding event to toggle fade on input 
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})