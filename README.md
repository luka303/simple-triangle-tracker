# simple-triangle-tracker
This is a simple triangle tracker program
# Description
This is a simple program that requires the user to enter three digits in the input spaces provided.The program will run to determine if the digits can form a triangle and if so it will give the type of triangle formed
# Set-up/Installation instructions
To install this program go to github.com and clone the link from https://github.com/luka303/simple-triangle-tracker.git
run it in a separate folder
# Using it
##### 1.enter a numerical value in the input space 
##### 2.Enter a different or similar digit in the second input space
##### 3.Enter a third numerical value in the provided input space
##### 4.click the try out button below to run the program
##### 5.if the values entered are not numerical values the user will be immediately informed
##### 6.if the sum of any two sides of the triangle is equal to or less than remaining side then a triangle cannot be formed using the values
# Technologies used
The program incorporates use of simple html to make up the business logic which is styled by a custom made stylesheet.The program itself is written in javascript
# BDD
|Behaviour             | Input               |Output              |
|---------------------:|--------------------:|--------------------|
| All sides are equal  |sideA=sideB=sideC    |Equilateral triangle|
| Two sides are equal  |sideA=sideB!sideC    |isosceles triangle  |
| no side is equal     |sideA!sideB!sideC    |scalene triangle    |    
# Author
The program was made and is updated by Luka Wandanje
# Active site
https://luka303.github.io/simple-triangle-tracker/

# license information
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
