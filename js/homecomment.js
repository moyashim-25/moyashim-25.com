let timecomment = document.getElementById("time-comment");
let date = new Date();
let hours = date.getHours();
const comm_morning = "おはようございます！";
const comm_afternoon = "こんにちは！";
const comm_late = "こんばんは！";
const comm_night = "おつかれさま！";
const morning = 5;
const afternoon = 9;
const late = 17;
const night = 21;
if (morning <= hours && hours <= afternoon) {
    timecomment.textContent = comm_morning;
} else if (afternoon < hours && hours < late){
    timecomment.textContent = comm_afternoon;
} else if (late <= hours && hours <= night){
    timecomment.textContent = comm_late;
} else {
    timecomment.textContent = comm_night;
}