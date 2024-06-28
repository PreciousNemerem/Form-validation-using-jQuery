// $("document").ready(function(){
// // console.log($("p")[0]);
// $("button").click(function(){
// console.log(this);
// })
// // $("#btn1").on({
// //     mouseenter: function
// // })

// let data =$("h1").html("<i>hello world</i>")

// })

// // change event and input event

$("document").ready(function(){
    $("form").submit(function(e){
        e.preventDefault()
        const inputValue1 = $(".first").val()
        const inputValue2 = $(".last").val()
        const inputValue3 = $(".email").val()
        const inputValue4 = $(".num").val()
        const inputValue5 = $(".pass").val()

        if(inputValue1 ==="") {
            $(".err1").text("first name is required")
        }else{
            $(".err1").text("")
        }

        if(inputValue2 ==="") {
            $(".err2").text("last name is required")
        }else{
            $(".err2").text("")
        }

        if(inputValue3 ==="") {
            $(".err3").text("email is required to process the form")
        }else{
            $(".err3").text("") 
        }
.t
        if(inputValue4 ==="") {
            $(".err4").text("input your phone number")
        }else{
            $(".err4").text("")
        }
        if(inputValue5 ==="") {
            $(".err5").text("enter your password")
        }else{
            $(".err5").text("")
        }
    })
})