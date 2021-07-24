---
title: "Fault Tolerance in Distributed Systems: Timing Models"
date: 2014-10-29T15:04:38+08:00
author: shantanualshi
tags: Failure, Fault Tolerance, Timing Models
---

In the last post, I wrote about fault tolerance in Distributed Systems and how failure models are classified. This post will describe the timing models that need to be considered while studying fault tolerance.

Roughly, a timing model is simply the way a distributed model behaves with respect to time.

###### 1. Synchronous timing model

Consider this model as a function where all the bounds (with respect to time) are known and are provided as arguments to the function. In this model, message delay is bounded and node processing speed is guaranteed. If the sender does not receive an acknowledgement after a certain period of time, either the message is considered lost, or the ACK is lost or the recipient node is considered dead or even experiencing a Byzantine failure. Of all these possibilities, if the communication channels are reliable, we are sure that there is a Node failure.This model helps in accurate failure detection.

###### 2. Asynchronous timing model

This is the opposite of the Synchronous model where message delay is unbounded and node processing speed is not guaranteed. Theoretically, the message propagation delay may tend to infinity in case a node is retrying to establish connection with a failed node. Practically, considering the Internet as an example, although the delay can be bounded by high values (say 1 year), making a node wait for 1 year before it realises that the recipient has failed is impractical. Hence, message delay in the theoretical case and the Internet in the later are examples of Asynchronous models and closely mimic the real world scenarios. The sad part is that, these are very poor at failure detection that makes designing real distributed systems challenging.

We just saw two distinct timing models in addition to the failure models in the last post. It is extremely critical that you are clear about the failure model and timing models used in your system for algorithms for one model do not extend to other models.

Next, in series - Distributed Consensus
