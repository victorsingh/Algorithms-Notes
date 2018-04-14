# Quicksort

Quick sort is a divde and conquor algorithm, much like heap sort.

* The idea behind quick sort is we divide our array into two sub arrays, so all the values on the left are smaller than all the values on the right
..* We repeat this process until our sub arrays have only 1 element left in them 

Quick sort is highly dependant on its pivot 

When we finish going through our first pivot, we split the array into two pieces. 

* Split two arrays from 
..* lowest value (after first pivot this value will be the start of the whole array) and pi (i+1) - 1
..* pi (i + 1) + 1 and the highest value (the end of our array)