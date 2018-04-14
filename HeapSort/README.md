# Heapsort

Heapsort has a running time of O(nlog<sub>2</sub>n)

The role of heapsort is used to sort a heap data structure
..* A heap is a data structure that an array object that we percieve as an almost complete binary search tree

## Properties of nearly complete binary trees

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

# Heap

Our heap, as we've seen is an array object represented as A[]

* Our heap has two attributes:
..* length(A)
..* heap-size(A)

A heap is an _almost complete_ binary tree that satisfies either the min-heap or max-heap property

## Max Heap vs Min heap

* min-heap
..* The value of the parent is **less** than or equal to that of its children

* max-heap
..* The value of the parent is **more** than or equal to that of its children

# Height of a heap

This height of a heap is the number of nodes down from the longest path towards a leaf

* The height of a heap is the height of its root

If we have a heap of n elements, its height is Big Omega (log n)

# The 5 procedures

* Heapify: Maintains the heap property
* Build-Heap: builds a heap from an unordered array
* HeapSort: Sorts an array in place
* Extract-Max: selects a new element
* Insert: Inserts a new element



# Heapify example

Lets say we have a given heap (assume we build heap already):

[16, 11, 9, 10, 5, 6, 8, 1, 2, 4]

                16
          11          9
       10    5      6   8
      1  2  4

And we want to sort this heap.

**Step 1: Exchange A[1] value with i in for loop starting with A.length**

                4
          11          9
       10    5      6   8
      1  2  16

**Step 2: Decrease heap size, which will in turn remove the leaf you just swapped with the root**

                4
          11          9
       10    5      6   8
      1  2 ~~16~~

**Step 3: Run max heapify so our tree becomes a heap again**

                11
          10          9
       4    5      6   8
     1  2 ~~16~~