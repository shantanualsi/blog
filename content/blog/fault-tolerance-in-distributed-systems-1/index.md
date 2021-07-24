---
title: "Fault Tolerance in Distributed Systems: Introduction"
date: 2014-10-28
tags: Distributed Systems, Failure, Fault Tolerance
---

"Fault tolerance" or being able to handle any type of fault in itself is a motivation for distributed systems. This is one of the most widely studied topics in the area of Distributed Systems. It has remained one of the hot areas for some obvious reasons -- If you are talking of a distributed environment of thousands of machines, it is evident that almost always, some will fail. Due to this very obvious fact, failures have become the norm rather than an exception.

> A distributed system is one in which the failure of a computer you didn't
> even know existed can render your own computer unusable.

A poorly designed Distributed System is counter-intuitive and worse than a non- distributed system. Leslie Lamport, known for his seminal work in this area wrote once [in an e-mail](http://research.microsoft.com/en-us/um/people/lamport/pubs/distributed-system.txt)-

```noLineNumbers:leslie-lamport-letter
There has been considerable debate over the years about what
constitutes a distributed system.  It would appear that the following
definition has been adopted at SRC:

A distributed system is one in which the failure of a computer you didn't
even know existed can render your own computer unusable.

The current electrical problem in the machine room is not the culprit--it just highlights
a situation that has been getting progressively worse.  It seems that each new version of
the nub makes my FF more dependent upon programs that run elsewhere.

Having to wait a few seconds for a program to be swapped in is a lot
less annoying than having to wait an hour or two for someone to reboot
the servers.  I therefore propose a development project to make our
system more robust.  I am not proposing any particular approach
(enabling stand-alone operation is just one possibility).

I will begin the effort by volunteering to gather some data on the
problem.  If you know of any instance of user's FF becoming inoperative
through no fault of its own, please send me a message indicating the
user, the time, and the cause (if known).

```

---

#### Failure Models:

Any behavior can be classified in a failure model if it does not comply with the designed protocol or contract.

Lets look at some of the failure models considered in dealing with fault tolerance-

Failure models can be classified into two broad categories-

1. Node failures- Failures caused at individual node participating in a Distributed System.
2. Communication Failures- Failures caused due to unreliable communication channels connecting the nodes.

Let's classify these even further

##### 1. Node Failures

###### a. Crash Failure (Fail-stop)

This is self explanatory and is the model that deals with crash of a node in the system.

###### b. Omission Failure (Fail-silent)

Imagine a node running normally but just misses to send or receive messages; say due to some reasons such as full buffer, slow processing etc. This type of failure is classified into the omission failures model. These failures are challenging to address. Crash failures can be viewed as a special case of Omission failure. Systems that tolerate omission failures will be able to tolerate crash failures. The reverse is not true. An omission failure could be either due to send omission or receive omission. They could also happen due to infinite loops, improper memory management etc.

###### c. Timing Failure

Let's say the server's response lies outside the specified time interval. The server replies too late due to performance issues or the server is provided with data 'too soon' that it does not have enough buffer to hold the data.

###### d. Response Failure

This is one of the serious types of failures where the server's response is simply incorrect. Either it can simply return incorrect data which can be called as "value failure" or can go into a state transition failure in case of an unexpected request; just like calling a bad function into the default case of a switch case block.

###### e. Byzantine Failure/ Arbitrary Failure

This model classifies failures (aberration) caused due to a malicious node that is controlled by some attacker and is the most serious of all. Interestingly, even though big companies such as Google, Facebook, Amazon, etc. are extremely wary about security and expect no Byzantine failures due to malicious behavior per se, they are still concerned about Byzantine failures due to a very different reason. Remember- we are now speaking of data at Google scale. Even smallest order of data corruption at a site can propagate to all the sites leading to a major overhead! Measures to eschew Byzantine failures thus needed for data at large scale. Byzantine failures were first analyzed by Pease et al. (1980) and Lamport et al. (1982).

###### f. Selfish Behavior

In this case, the node is just uncooperative. Consider a P2P distributed scenario of torrent. You are one of the participant but selfish enough to download at full bandwidth but refuse to seed even a bit!

Failure models a,b,c,d, and f are as described in [Cristian (1991)](http://www.ict.kth.se/courses/2G1126/vt03/papers/cristian93understanding.pdf) and [Hadzilacos and Toueg (1993).](http://disi.unitn.it/~montreso/ds/syllabus/papers/FaultTolerantBroadcast.pdf)

##### 2.Communication failures

Communication channels involved can be prone to failures and drop messages transmitted via the network.

Many other failure models can be defined specific to any context. But these definitions are rarely used and hence not documented in the general sense.

Also look at Part 2: Timing models used in distributed context.
