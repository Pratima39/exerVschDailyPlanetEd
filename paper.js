/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.
In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var Enemies=["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];
// var enemies = ["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"]; // would start enemies lowercase

funtion Who_Wins(is-there-kryptonite,enemy_name) // function whoWins(isThereKryptonite, enemyName)
{
if (!is-there-kryptonite) // if (!isThereKryptonite)
{
    return "Superman beats " +enemyName+ ", of course";
}

else{
    return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemyname +" could possibly win this one."; //enemyName
}
{
for (var i=0;i<enemies.length;i++) // put opening curly brace on this line

    var is_there_kryptonite: //var is_there_kryptonite: needs = and value, should end with ;
    if (i%2=== 0) {
        is_there_kryptonite = true;
} else {
        is_there_kryptonite = false;
}
    console.log(Who_Wins(is_there_kryptonite,enemies[i]));
}

function HowAttractedIsLoisLaneToMe () // start lower case?
{
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Mat.random()*10)+1); // return Math.floor((Math.random()*10)+1);
}

consol.log( HowAttractedIsLoisLaneToMe ()) ;

var clarkKent =true; //var clarkKent = true;
var superman =false; // var superman = false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange =Math.random(); // var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange>= 0.5) {
        clarkKent=false;
        superman=true;
        console.log("Now I'm Superman!");}} // console.log("Now I'm Superman!");}