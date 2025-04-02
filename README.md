# odin-etch-a-sketch
The Odin Project - Foundations Course: Etch-a-Sketch project


This is the initail version 2025.03.30
Updated 2025.04.01


the function generateGrid() is used to create the grid based on the playerInput variable (initially set at 16). 
Grid squares are generated with for loops; one generating the required number of squares per row, and the other the required rows. 
This approach seemed easier than trying to generate the total amount of sqaures needed then arranging them in the right positions. 

The eventListener for the button starts with a validation check on the input to make sure it's a number and also that it is a value of 1 to 100. If the input is not valid, an alert is used to ask for anoter input attempt.
Then the eventListener runs the generateGrid() function using the value supplied by the player.

I used an eventListener to change the backgroundColor of the squares.

I also have created the button and a small amount of text for explanation.



To do:

CSS styling. Everything is very basic at the moment. Will correct as time allows.

Extra cedit assignment
