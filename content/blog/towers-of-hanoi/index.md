---
id: 200
title: Picking apart Towers of Hanoi
date: 2018-02-24T23:11:12+08:00
tags:
  - algorithms
  - computers
  - problems
  - recursion
  - towersofhanoi
---

### 1. Background

As a legend goes, there's a spacious room in Kashi Vishwanath, India that consists of posts surrounded by 64 golden disks, each smaller than the other. Priests at the temple have been moving the disks according to the perpetual rules of Lord Brahma. It is believed that once the last move of this puzzle is completed, the world will end.

![Kashi Vishwanath - Towers of Brahma](./00-kashivishwanath.jpg)

If you're already biting your nails in worry that the its apocalypse any moment now, relax. Even if the priests move the rings at one per second, it will take them 585 billion years to complete the puzzle, which is supposedly 42 times the current age of the universe.

---

### 2. Rules of the game

![Rules of Towers of Hanoi](./01-rules-of-the-game.png)

Rules of the game are simple.

There are three posts A, B, C. One of them, say A has 4 discs, each bigger than the other. You are supposed to move all discs from A to C, using B as auxiliary. You are not however, in any step, allowed to place a bigger disc over a smaller one.

---

### 3. A Recursive Strategy

Let's try to examine the problem; in the problem of 4 discs, lets glue the largest yellow disc for the time being. We will move the remaining 3 discs to tower B, using C as the auxiliary.  After all remaining three are on B, we can easily move the largest disc to C. One step complete! We have remaining three discs on tower B, which can be viewed as a similar problem - move all these three to tower C, using A as auxiliary. Which is a problem of 2 discs, if the largest amongst these the green disc is kept glued.

Do you notice the pattern?

In general, a problem of N discs can be divided into a problem of N-1 discs. We have a recursion. We will continue our recursion only till we hit a base case of n = 1.

A method can be defined as -;

```java
func towersOfHanoi(numberOfDiscs, from, to, using) {
  if(n > 0) {
    towersOfHanoi(numberOfDiscs-1, A, B, C);
    System.print("Moving disc from " + from + " to " + to);
    towersOfHanoi("numberOfDiscs-1, B, C, A);
  }
}
```

Quite simple so far. Let's try to figure out some math.

---

### 4. Solving the Recurrence

The first and third line divide the problem into sub-problem that is 1 less than our original problem. Thus, if<img src="//s0.wp.com/latex.php?latex=T_%7Bn%7D+&#038;bg=ffffff&#038;fg=000&#038;s=0" alt="T_{n} " title="T_{n} " class="latex" /> is the original problem,  we now have two sub-problems, each<img src="//s0.wp.com/latex.php?latex=T_%7Bn-1%7D+&#038;bg=ffffff&#038;fg=000&#038;s=0" alt="T_{n-1} " title="T_{n-1} " class="latex" /> size. The middle step is just some output operation which we will treat as constant time O(1). So, we have-

<img
  src="//s0.wp.com/latex.php?latex=T_%7Bn%7D+%3D+%5Cbegin%7Bcases%7D+2T_%7Bn-1%7D+%2B+1%2C+%26+%5Ctext%7Bif+n%5Ctextgreater0%7D+%5C%5C+0+%26+%5Ctext%7Bif+n+%3D+0%7D+%5Cend%7Bcases%7D+&#038;bg=ffffff&#038;fg=000&#038;s=0"
  alt="T_{n} = &#92;begin{cases} 2T_{n-1} + 1, & &#92;text{if n&#92;textgreater0} &#92;&#92; 0 & &#92;text{if n = 0} &#92;end{cases} "
  title="T_{n} = &#92;begin{cases} 2T_{n-1} + 1, & &#92;text{if n&#92;textgreater0} &#92;&#92; 0 & &#92;text{if n = 0} &#92;end{cases} "
  class="latex"
/>

As per recursion-

<img
  src="//s0.wp.com/latex.php?latex=T_%7Bn-1%7D+%3D+2T_%7Bn-2%7D+%2B+1+&#038;bg=ffffff&#038;fg=000&#038;s=0"
  alt="T_{n-1} = 2T_{n-2} + 1 "
  title="T_{n-1} = 2T_{n-2} + 1 "
  class="latex"
/>

<img
  src="//s0.wp.com/latex.php?latex=T_%7Bn%7D+%3D+2+%28+2+T_%7Bn-2%7D+%2B+1%29+%2B+1+&#038;bg=ffffff&#038;fg=000&#038;s=0"
  alt="T_{n} = 2 ( 2 T_{n-2} + 1) + 1 "
  title="T_{n} = 2 ( 2 T_{n-2} + 1) + 1 "
  class="latex"
/>
<img
  src="//s0.wp.com/latex.php?latex=T_%7Bn%7D+%3D+2%5E%7B2%7DT_%7Bn-2%7D+%2B+2+%2B+1+&#038;bg=ffffff&#038;fg=000&#038;s=0"
  alt="T_{n} = 2^{2}T_{n-2} + 2 + 1 "
  title="T_{n} = 2^{2}T_{n-2} + 2 + 1 "
  class="latex"
/>
<img
  src="//s0.wp.com/latex.php?latex=T_%7Bn%7D+%3D+2%5E%7B3%7DT_%7Bn-2%7D+%2B+2%5E%7B2%7D+%2B+2%5E%7B1%7D+%2B+2%5E%7B0%7D+&#038;bg=ffffff&#038;fg=000&#038;s=0"
  alt="T_{n} = 2^{3}T_{n-2} + 2^{2} + 2^{1} + 2^{0} "
  title="T_{n} = 2^{3}T_{n-2} + 2^{2} + 2^{1} + 2^{0} "
  class="latex"
/>
<img
  src="//s0.wp.com/latex.php?latex=T_%7Bn%7D+%3D+2%5E%7Br%7DT_%7Bn-r%7D+%2B%C2%A0+...%C2%A0+%2B+2%5E%7B3%7D+%2B+2%5E%7B2%7D+%2B+2%5E%7B1%7D+%2B+2%5E%7B0%7D+&#038;bg=ffffff&#038;fg=000&#038;s=0"
  alt="T_{n} = 2^{r}T_{n-r} +  ...  + 2^{3} + 2^{2} + 2^{1} + 2^{0} "
  title="T_{n} = 2^{r}T_{n-r} +  ...  + 2^{3} + 2^{2} + 2^{1} + 2^{0} "
  class="latex"
/>

We know the base case<img src="//s0.wp.com/latex.php?latex=T_%7B0%7D+%3D+0+&#038;bg=ffffff&#038;fg=000&#038;s=0" alt="T_{0} = 0 " title="T_{0} = 0 " class="latex" /> which comes at<img src="//s0.wp.com/latex.php?latex=r+%3D+n+&#038;bg=ffffff&#038;fg=000&#038;s=0" alt="r = n " title="r = n " class="latex" /> .

<img
  src="//s0.wp.com/latex.php?latex=%5Ctherefore+T_%7Bn%7D+%3D+2%5E%7Bn%7DT_%7Bn%7D%C2%A0%2B%C2%A02%5E%7Bn-1%7DT_%7Bn-1%7D+%2B+...%C2%A0+%2B2%5E%7B3%7DT_%7Bn-3%7D+%2B+2%5E%7B2%7D+%2B+2%5E%7B1%7D+%2B+2%5E%7B0%7D+&#038;bg=ffffff&#038;fg=000&#038;s=0"
  alt="&#92;therefore T_{n} = 2^{n}T_{n} + 2^{n-1}T_{n-1} + ...  +2^{3}T_{n-3} + 2^{2} + 2^{1} + 2^{0} "
  title="&#92;therefore T_{n} = 2^{n}T_{n} + 2^{n-1}T_{n-1} + ...  +2^{3}T_{n-3} + 2^{2} + 2^{1} + 2^{0} "
  class="latex"
/>

This looks like a Geometric series-

<img
  src="//s0.wp.com/latex.php?latex=%5Ctherefore+T_%7Bn%7D+%3D+2%5E%7Bn%7D-1+&#038;bg=ffffff&#038;fg=000&#038;s=0"
  alt="&#92;therefore T_{n} = 2^{n}-1 "
  title="&#92;therefore T_{n} = 2^{n}-1 "
  class="latex"
/>

And we have a closed form for our recurrence.

As it is obvious from that, the algorithm that we have here runs in<img src="//s0.wp.com/latex.php?latex=%5Ctheta%282%5E%7Bn%7D%29+&#038;bg=ffffff&#038;fg=000&#038;s=0" alt="&#92;theta(2^{n}) " title="&#92;theta(2^{n}) " class="latex" /> time.

---

### 5. Towers of Hanoi and Graphs

Here's the most interesting part of the problem. The game can be represented as an undirected graph, at times called the state space graph.

Lets take a 1 disc Hanoi Puzzle. We will represent the possibilities that the only disc can be on with nodes in the graph - alternatively can be termed as states in the game. The edges denote the state transitions meaning the discs can move between those games.

The picture below shows three possibilities of the green disc. It can move freely from A to B to C and back to A.

![Towers of Hanoi](./02-green-disk-possibilities.png)

Lets now consider 2 discs. To do this, we will keep the bigger green disc constant. As the yellow one is smaller, it can move freely from A to B to C to A. The yellow disc can behave in a similar manner when the green one is on B or C. However, when the yellow one is on C, the green can move only to B.

The graph beside the towers is what get when we draw the transition graph for 2 disc puzzle. Here, we denote two letters to denote the smaller disc followed by bigger disc. eg. CA means the yellow disc is on C and green one on A.

Possible states and graph for 2 discs Towers of Hanoi puzzle
![Possible states and graph for 2 discs Towers of Hanoi puzzle](./03-step1.png)

Here's a similar ready-made state space graph for 3 disc Towers of Hanoi puzzle. It is evident that the graph contains 3 nodes for 1 disc, 9 nodes for 2 discs, 27 nodes for 3 discs and so on. In general, the graph contains<img src="//s0.wp.com/latex.php?latex=3%5E%7Bn%7D+&#038;bg=ffffff&#038;fg=000&#038;s=0" alt="3^{n} " title="3^{n} " class="latex" /> nodes for n discs. It shows all the possible states the game can end up in, with the final states as the end of the vertices of the bigger triangle &#8212; AAA, BBB and CCC wherein all the discs are on a single post.

![State Graph for 3 disc Tower of Hanoi puzzle](./04-state-graph.png)

#### 5.1 The most efficient solution

![Shortest path- Most effecient solution to move all discs from A to C](./05-most-effecient-solution.png)

This isn't just a depiction of states. It is not difficult to determine that the most efficient solution, the one with the fewest steps is the edge of the bigger triangle from the start state to the end state. Here's an example - You got all discs on A, which is AAA. start with moving the smallest one to C, you get CAA and continue along the right edge of the triangle marked as red. You will reach the solution in exactly<img src="//s0.wp.com/latex.php?latex=2%5E%7Bn%7D-1+&#038;bg=ffffff&#038;fg=000&#038;s=0" alt="2^{n}-1 " title="2^{n}-1 " class="latex" /> steps which is the closed form of our recurrence we obtained!

#### 5.2 The worst solution

![Worst solution from AAA to CCC](./06-worst-solution.png)

What's the worst you can do (provided you don't go back to the same state again, in which case its<img src="//s0.wp.com/latex.php?latex=%5Cinfty+&#038;bg=ffffff&#038;fg=000&#038;s=0" alt="&#92;infty " title="&#92;infty " class="latex" /> ) ?. The answer is to try out all the possible states in the graph before ending up in the winning state. That's equivalent to visiting all<img src="//s0.wp.com/latex.php?latex=3%5E%7Bn%7D+&#038;bg=ffffff&#038;fg=000&#038;s=0" alt="3^{n} " title="3^{n} " class="latex" /> vertices in our graph exactly once. This is incidentally also the most optimized solution to a constrained Towers of Hanoi problem wherein you are allowed to move discs only to adjacent posts. ie. move from A to C and C to A is illegal.

####

![Large number of discs](./07-serpinskis.jpg)
Fun fact - The graphical representation of the game with some arbitrary large number discs is a beautiful large triangular fractal structure known as Sierpinski's Triangle.

In addition to being a fundamental problem in learning recursion, the Towers of Hanoi puzzle is also used in neuropsychological diagnosis in analyzing deficits in frontal lobe of our brain.
