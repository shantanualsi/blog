---
title: The Monster known as VIM
date: 2016-07-03
categories:
  - Tutorials
  - VIM
tags: vim
---

In March 2017, <a href="https://stackoverflow.blog/2017/05/23/stack-overflow-helping-one-million-developers-exit-vim/" target="_blank" rel="noopener">Stack Overflow published an article</a> that during weekdays, there are about 80 people per hour who struggle to exit out from the editor, and that's just Stack Overflow's traffic. VIM can be real daunting and unfriendly to the beginner. It mysteriously does things right when you start typing in it. Unless you press 'i' or some other special key, it just refuses to type in a new file. Some say its a good random string generator! It is this recondite nature of VIM scares tyro developers off the editor.  But once you get the hang of it, its like a jetpack right inside your keyboard.

![Rules of Towers of Hanoi](./troll.jpg)

I started using it 2 years ago, and have been addicted to it since. So much so, that even my Sublime text operates in VIM mode. To start loving VIM, you must first learn to speak its language.

Wait! Why VIM? you might ask.

Once you start programming, you will start noticing that the component that drastically slows down your programming speed is not your computer's memory or your own. Its the mouse. With VIM, your fingers rarely will have to leave the home row, which means you'll be able to edit text real quick. You might as well completely ditch that mouse. Moreover, VIM is ubiquitous. It is present on all \*nix systems, and is lightweight and fast. It is powerful as it supports multiple registers, macros, plugins, themes, selections, and much more.

My objective in this post is to get you familiar with the style in which VIM commands are constructed so that you make them on your own without having to mug up a list of useful commands. I would suggest you to open a sample document in VIM and start playing around as you read.

Let's dive right in.

## **Modes**

First some theory. What makes VIM really powerful are it's modes and registers. There are several modes in vim. Three of the most useful being -

1. Normal Mode: This is vim's default mode when you fire up the editor. There is a reason why it is called the 'Normal' mode. This is the one in which you speak with the Vim diction.
2. Visual Mode and Block visual modes: Allows you to manipulate and speak to VIM on selections of texts.
3. Command Mode: Allows you to issue editor commands to vim

So how do you speak the vim lingo? Here are some things to get started -

## The Alphabet

The table below shows the alphabet in normal mode.

<table style="border-collapse: collapse; width: 669px; height: 295px;" border="0" width="261" cellspacing="0" cellpadding="0">
  <colgroup> <col style="width: 65pt;" span="3" width="87" /> </colgroup> <tr style="height: 16pt;">
    <td style="height: 16pt; width: 65pt;" width="87" height="21">
      <span style="color: #0000ff;">a: append</span>
    </td>
    
    <td style="width: 65pt;" width="87">
      <span style="color: #993300;">j: down</span>
    </td>
    
    <td style="width: 65pt;" width="87">
      <span style="color: #0000ff;">s: substitute character</span>
    </td>
  </tr>
  
  <tr style="height: 16pt;">
    <td style="height: 16pt;" height="21">
      <span style="color: #993300;">b: back</span>
    </td>
    
    <td>
      <span style="color: #993300;">k: up</span>
    </td>
    
    <td>
      <span style="color: #008000;">t: to / till</span>
    </td>
  </tr>
  
  <tr style="height: 16pt;">
    <td style="height: 16pt;" height="21">
      <span style="color: #0000ff;">c: cut </span>
    </td>
    
    <td>
      <span style="color: #993300;">l: right</span>
    </td>
    
    <td>
      <span style="color: #993300;">u: undo</span>
    </td>
  </tr>
  
  <tr style="height: 16pt;">
    <td style="height: 16pt;" height="21">
      <span style="color: #008000;">d: delete</span>
    </td>
    
    <td>
      <span style="color: #008000;">m: mark</span>
    </td>
    
    <td>
      <span style="color: #008000;">v: visual</span>
    </td>
  </tr>
  
  <tr style="height: 16pt;">
    <td style="height: 16pt;" height="21">
      <span style="color: #993300;">e: end (of the word)</span>
    </td>
    
    <td>
      <span style="color: #993300;">n: next (search)</span>
    </td>
    
    <td>
      <span style="color: #993300;">w: word</span>
    </td>
  </tr>
  
  <tr style="height: 16pt;">
    <td style="height: 16pt;" height="21">
      <span style="color: #008000;">f: find</span>
    </td>
    
    <td>
      <span style="color: #0000ff;">o: open line</span>
    </td>
    
    <td>
      <span style="color: #993300;">x: cut (character)</span>
    </td>
  </tr>
  
  <tr style="height: 16pt;">
    <td style="height: 16pt;" height="21">
      <span style="color: #993300;">h: left</span>
    </td>
    
    <td>
      <span style="color: #993300;">p: paste below</span>
    </td>
    
    <td>
      <span style="color: #008000;">y: yank</span>
    </td>
  </tr>
  
  <tr style="height: 16pt;">
    <td style="height: 16pt;" height="21">
      <span style="color: #0000ff;">i: insert</span>
    </td>
    
    <td>
      <span style="color: #008000;">r: replace</span>
    </td>
    
    <td>
      <span style="color: #008000;">z: position line</span>
    </td>
  </tr>
</table>

We will divide these into four categories -

<span style="text-decoration: underline;">Category 1:</span> Verbs that are marked in red - *b (back), e (end), h(left) , j(down), k(up) ,l(right), n (next),  p(paste), u(undo), w(word), x(cut) * do not need any objects. They act immediately on the position below the cursor.

<span style="text-decoration: underline;">Category 2</span>: Others marked in green - d(delete),  f(find),  m(mark), t(till), v(visual), z(position) first character issued in normal mode tells the verb (action) to be done. The next character tells vim the object for the verb to act upon.

<span style="text-decoration: underline;">Category 3:</span> The remaining marked in blue a(append), c(cut), i(insert), o(open line), s(substitute character) act accordingly while simultaneously switch VIM to Insert Mode.

<span style="text-decoration: underline;">Category 4:</span> Special characters -

<table style="height: 296px;" width="765">
  <tr>
    <td width="87">
      <span style="color: #0000ff;"><strong>#</strong> </span>(Pound): Find previous occurence of word under cursor
    </td>
    
    <td width="87">
      <span style="color: #0000ff;">*</span> (Astrix):  Find next occurence of word under cursor
    </td>
    
    <td width="87">
      <strong><span style="color: #0000ff;">^</span></strong> (Caret): First Non-empty character in the current line
    </td>
  </tr>
  
  <tr>
    <td>
      <span style="color: #0000ff;"><strong>>></strong></span>: Indent to Right
    </td>
    
    <td>
      <strong><span style="color: #0000ff;"><<</span></strong>: Indent to left
    </td>
    
    <td>
      <strong><span style="color: #0000ff;">/</span></strong>: Find in document
    </td>
  </tr>
  
  <tr>
    <td>
      <span style="color: #0000ff;"><strong>$</strong></span>: End of the line
    </td>
    
    <td>
      <strong><span style="color: #0000ff;">~</span></strong>(Tilde): Convert to uppercase
    </td>
    
    <td>
      <strong><span style="color: #0000ff;">`</span></strong>(Backtick): Convert to lowercase
    </td>
  </tr>
  
  <tr>
    <td>
      <span style="color: #0000ff;"><strong>[[</strong></span>: Start of the document
    </td>
    
    <td>
      <strong><span style="color: #0000ff;">]]</span></strong>: End of the document
    </td>
    
    <td>
      <strong><span style="color: #0000ff;">: </span></strong>(Colon): Accept a vim command
    </td>
  </tr>
  
  <tr>
    <td>
      <span style="color: #0000ff;"><strong>{</strong></span>: Previous blank line
    </td>
    
    <td>
      <strong><span style="color: #0000ff;">}</span></strong>: Next blank line
    </td>
    
    <td>
      <span style="color: #0000ff;"><strong>.</strong></span>(Dot): Repeat last action
    </td>
  </tr>
</table>

## Imperatives

Now that we know a bit of the alphabet, let's start talking.  Have a look at some of the commands

<table width="648">
  <tr>
    <td width="648">
      d$: <strong>Delete</strong> till <strong>end of the line</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      d^: <strong>Delete</strong> till <strong>start of the line</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      d}: <strong>Delete</strong> till the <strong>next blank line</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      d]]: <strong>Delete</strong> till the <strong>end of the document</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      dw: <strong>Delete</strong> till <strong>start of next word</strong> (Excluding that char)
    </td>
  </tr>
  
  <tr>
    <td>
      de: <strong>Delete</strong> till the <strong>end of current word</strong> (Including last char)
    </td>
  </tr>
  
  <tr>
    <td>
      fd: <strong>Find</strong> character 'd' (in the current line)
    </td>
  </tr>
  
  <tr>
    <td>
      v$: <strong>Visual</strong> till the<strong> end of the line</strong>
    </td>
  </tr>
</table>

Do you see a pattern?

Like the subject, verb and object make a sentence in English, an imperative in VIM consists of just a Verb or Verb + Object. The subject is always assumed to be the position under your cursor.

Its usually Category 2 or 3 commands again followed by a category 2, 3 or 4 command or any character.

Go on.. Try constructing some more commands like these and see if they work.

## **Prepositions**

You might have noticed the 'till' word in the descriptions of the commands above. Sometimes it isn't so obvious. For instance, to delete till next occurrence of the word 'd', You cannot use 'dd' as that will delete the complete line. Most of the times, in cases where the object is not a special character, we use 't' to denote till.

<table width="648">
  <tr>
    <td width="648">
      dtd: Delete till next 'd'
    </td>
  </tr>
  
  <tr>
    <td>
      dt.: Delete till next full-stop
    </td>
  </tr>
</table>

Another useful preposition is 'in'. Apart from entering into insert mode, letter 'i' also denotes 'in'. We use this especially with special characters that come in pairs - quotes, single quotes, braces, brackets etc. Look at these commands -

<table width="648">
  <tr>
    <td width="648">
      ci{ : Cut (Delete and switch to insert mode) everything inside curly braces
    </td>
  </tr>
  
  <tr>
    <td>
      di": Delete everything inside quotes
    </td>
  </tr>
</table>

This is extremely useful while editing code - deleting parameters or arguments inside parentheses, deleting function code blocks, replacing contents inside an array etc.

I hope this post helped you get started with VIM and understand the logic behind its commands. You will be faster when you spend some more time using VIM and trying hard to not use it as a usual text editor.

And yeah, before you go, here's how you exit that shit -

<table width="388">
  <tr>
    <td width="388">
      :w  Write (Save)
    </td>
  </tr>
  
  <tr>
    <td>
      :wq Write and quit (Save and quit)
    </td>
  </tr>
  
  <tr>
    <td>
      :q! Quit without saving
    </td>
  </tr>
</table>

Cheers!
