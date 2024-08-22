// QUESTION 1
// var char=prompt("Enter a character");
// var asciicode=char.charCodeAt(0);

// if(asciicode >=48 && asciicode <=57)
// {
//     alert("The character is in number");
// }
// else if(asciicode >=65 && asciicode <=90)
// {
//     alert("The character is in upper case letter");
// }
// else if(asciicode >=97 && asciicode <=122)
// {
//      alert("The character is in lower case letter");
// }
// else
// {
//     alert("The character is neither a number nor a letter");
// }

// QUESTION 2
// var input1=parseFloat(prompt("Enter first integer"));
// var input2=parseFloat(prompt("Enter second integer"));

// if(input1 > input2)
// {
//     alert(input1+" is greater");
// }
// else if(input2 > input1)
// {
//         alert(input2+" is greater");
// }
// else if(input1 == input2)
// {
//         alert("Both are equal");
// }

// QUESTION 3
// var number=prompt("Enter a number to check (positive/negative/zero)");
// if(number > 0)
// {
//     alert("Number is positive");
// }
// else if(number < 0)
// {
//     alert("Number is negative");
// }
// else
// {
//     alert("Inputted number is Zero");
// }

// QUESTION 4
// var character=prompt("Enter character to check if its vowel or not");
// if(character.length> 1)
// {
//     alert("Enter valid character(not more than 1)");
// }
// else if(character=='a' || character=='e' || character=='i' || character=='o' || character=='u')
// {
//     alert("True,inputted character is vowel");
// }
// else
// {
//     alert("False,inputted character is not a vowel")
// }

// QUESTION 5
// const correctPass="bushrairfan123";
// var userPass=prompt("Enter your password: ");

// if(userPass == correctPass)
// {
//     alert("Correct! The password you entered matches the original password");
// }
// else
// {
//     alert("Incorrect password");
// }

// QUESTION 6
// var greeting;
// var hour = 13;
// if (hour < 18) 
// {
//      greeting = "Good day";
//      alert(greeting);
// }
// else
// {
//       greeting = "Good evening";
//       alert(greeting);
// }

// QUESTION 7
// var time = prompt("Enter the time in 24-hour format (e.g., 1900 for 7:00 PM):");

// if (time < 0 || time > 2359 || time % 100 >= 60) 
// {
//             alert("Please enter a valid time in 24-hour format.");
// }
// else 
// {
//             if (time >= 0 && time < 1200)
//             {
//                 alert("Good Morning!");
//             } 
//             else if (time >= 1200 && time < 1700) 
//             {
//                 alert("Good Afternoon!");
//             } 
//             else if (time >= 1700 && time < 2100) 
//             {
//                 alert("Good Evening!");
//             } 
//             else if (time >= 2100 && time <= 2359)
//             {
//                 alert("Good Night!");
//             }
// }
