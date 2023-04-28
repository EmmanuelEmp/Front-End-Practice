/*
1. Build a function constructor called Question to describe a question. A question should include: a) 
question itself b) the answers from which the player can choose the correct one (choose an adequate data 
structure here, array, object, etc.) c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each 
question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number 
of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or not 
(Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all
your code is private and doesn't interfere with the other programmers code (Hint: we learned a special
technique to do exactly that).

ADD ON
1. After you display the result, display the next random question, so that the game never ends.

2. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from Task 8.

3. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score.

3. Display the score in the console. Use yet another method for this.

*/

//Create a function constructor
const Question = function(question, answer, correctAnswer){
    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
}
// Display question
Question.prototype.displayQuestion = function(){
    console.log(this.question);
    for(var i = 0; i < this.answer.length; i++){
        console.log(i + ': ' + this.answer[i]);
    }
}
// Display answer
Question.prototype.displayAnswer = function(ans){
    if(ans === this.correctAnswer){
        console.log('Correct Answer');
    }else{
        console.log('Wrong Answer')
    }
}

let q1 = new Question('Is javascript the coolest programming language in the world?', ['Yes', 'No'], 0);

let q2 = new Question('What does best coding describe', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

let q3 = new Question('What is the name of this course\'s teacher', ['John', 'James', 'Emmanuel'], 2);

let questions = [q1, q2, q3];

let n = Math.floor(Math.random()* questions.length);
console.log(n)
questions[n].displayQuestion();

let answer = parseInt(prompt('Please select the correct answer'));
questions[n].displayAnswer(answer);