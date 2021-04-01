//jumbotron date 
var today = document.querySelector("#currentDay");
today.innerHTML = moment().format('dddd[,] MMMM Do YYYY');
// jumbotron time
var time = document.querySelector("#currentTime")
setInterval(function(){
    time.innerHTML=moment().format('LTS') 
}, 1000);
//check current hour
var currentHour = moment().hour();
function colorizer(){
$(".row").each(function(){
    var rowHour = parseInt($(this).attr("id").split("-")[1])
    console.log(currentHour)
    console.log(rowHour)
    if (currentHour > rowHour) {
        $(this).children(".entertext").addClass("past")
    }
    else if (currentHour === rowHour){
        $(this).children(".entertext").addClass("present")
        $(this).children(".entertext").removeClass("past")
    }
    else{
        $(this).children(".entertext").addClass("future")
        $(this).children(".entertext").removeClass("present")
    }
})
}

colorizer()

$(".saveBtn").on("click", function(){
var hour=$(this).parent().attr("id");
console.log (hour);
var activity = $(this).siblings(".entertext").val();
console.log (activity);
localStorage.setItem(hour, activity);
}
)
$("#hour-7 .entertext").val(localStorage.getItem("hour-7"))
$("#hour-8 .entertext").val(localStorage.getItem("hour-8"))
$("#hour-9 .entertext").val(localStorage.getItem("hour-9"))
$("#hour-10 .entertext").val(localStorage.getItem("hour-10"))
$("#hour-11 .entertext").val(localStorage.getItem("hour-11"))
$("#hour-12 .entertext").val(localStorage.getItem("hour-12"))
$("#hour-13 .entertext").val(localStorage.getItem("hour-13"))
$("#hour-14 .entertext").val(localStorage.getItem("hour-14"))
$("#hour-15 .entertext").val(localStorage.getItem("hour-15"))
$("#hour-16 .entertext").val(localStorage.getItem("hour-16"))
$("#hour-17 .entertext").val(localStorage.getItem("hour-17"))
$("#hour-18 .entertext").val(localStorage.getItem("hour-17"))
$("#hour-19 .entertext").val(localStorage.getItem("hour-19"))

if(moment().hour() === 1){
    localStorage.clear()
}