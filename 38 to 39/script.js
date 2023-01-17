
// link of github 
// https://github.com/melsayedahmed
// Dont forget follow 

// link of Youtube Channel
// https://www.youtube.com/channel/UCo92JwtW5CbyN3XO6O0qocA
// Dont forget Subscribe

let day = "   friday  ";
day = day.trim();
day = day.charAt(0).toUpperCase() + day.slice(1)

// You Need To Remove Spaces And Make First Letter Capital => Friday

switch (day){
    case "Friday" :
    case "Saturday" :
    case "Sunday" :
        console.log("No Appointments Available");
        break;
    case "Monday" :
    case "Thursday" :
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Teusday" :
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday" :
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default :
        console.log("Its Not A Valid Day");
}
