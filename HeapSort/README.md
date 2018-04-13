#Heapsort

Heapsort has a running time of O(nlog<sub>2<sub>n)

The role of heapsort is used to sort a heap data structure
..* A heap is a data structure that an array object that we percieve as an almost complete binary search tree

##Properties of nearly complete binary trees

* The root of our almost complete tree is A[1]
* If we're give a node of index i, we can easily compute the indicies of its 
..* parent: Math.floor(i/2) 
..* left child: 2i
..* right child 2i + 1

example:
                o 
            *       o
          o   o   o   


In this case, i = 2
parent = Math.floor(2/2) = 1
left child = 2 * 2 = 4
right child = 2 * 2 + 1 = 5

By index:
                1 
            *       3
          4   5   6   

Our array:

[1, * , 3, 4, 5 , 6]

Lets give this tree some random numbers:

                16 
            143     3
          46  85  60

Our array now: 

[16, 143, 3, 46, 85, 60]

#Heap

Our heap, as we've seen is an array object represented as A[]

Our heap has two attributes:
..* length(A)
..* heap-size(A)




