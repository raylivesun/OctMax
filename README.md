<!DOCTYPE html>
<html><!-- Created by GNU Texinfo 7.0.3, https://www.gnu.org/software/texinfo/ --><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<meta name="description" content="Top (GNU Octave (version 8.4.0))">
<meta name="keywords" content="Top (GNU Octave (version 8.4.0))">
<meta name="resource-type" content="document">
<meta name="distribution" content="global">
<meta name="Generator" content="makeinfo">
<meta name="viewport" content="width=device-width,initial-scale=1">

<link href="#Top" rel="start" title="Top">
<link href="https://docs.octave.org/latest/Concept-Index.html" rel="index" title="Concept Index">
<link href="#SEC_Contents" rel="contents" title="Table of Contents">
<link href="https://docs.octave.org/latest/Preface.html" rel="next" title="Preface">
<style type="text/css">
<!--
ul.toc-numbered-mark {list-style: none}
-->
</style>
<link rel="stylesheet" type="text/css" href="README_files/octave.css">


</head>

<body lang="en">

























<p>Copyright © 1996-2023 The Octave Project Developers
</p>
<p>Permission is granted to make and distribute verbatim copies of
this manual provided the copyright notice and this permission notice
are preserved on all copies.
</p>

<p>Permission is granted to copy and distribute modified versions of
this manual under the conditions for verbatim copying, provided that
the entire resulting derived work is distributed under the terms of
a permission notice identical to this one.
</p>
<p>Permission is granted to copy and distribute translations of this
manual into another language, under the above conditions for
modified versions.
</p>


<div class="top-level-extent" id="Top">
<div class="nav-panel">
<p>
Next: <a href="https://docs.octave.org/latest/Preface.html" accesskey="n" rel="next">Preface</a> &nbsp; [<a href="#SEC_Contents" title="Table of contents" rel="contents">Contents</a>][<a href="https://docs.octave.org/latest/Concept-Index.html" title="Index" rel="index">Index</a>]</p>
</div>
<hr>
<a class="top" id="SEC_Top"></a>
<p>This manual documents how to run, install and port GNU Octave, as well
as its new features and incompatibilities, and how to report bugs.
It corresponds to GNU Octave version 8.4.0.
</p>





<div class="element-contents" id="SEC_Contents">
<h2 class="contents-heading">Table of Contents</h2>

<div class="contents">

<ul class="toc-numbered-mark">
  <li><a id="toc-Preface-1" href="https://docs.octave.org/latest/Preface.html">Preface</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Acknowledgements-1" href="https://docs.octave.org/latest/Acknowledgements.html">Acknowledgements</a></li>
    <li><a id="toc-Citing-Octave-in-Publications-1" href="https://docs.octave.org/latest/Citing-Octave-in-Publications.html">Citing Octave in Publications</a></li>
    <li><a id="toc-How-You-Can-Contribute-to-Octave-1" href="https://docs.octave.org/latest/How-You-Can-Contribute-to-Octave.html">How You Can Contribute to Octave</a></li>
    <li><a id="toc-Distribution-1" href="https://docs.octave.org/latest/Distribution.html">Distribution</a></li>
  </ul></li>
  <li><a id="toc-A-Brief-Introduction-to-Octave" href="https://docs.octave.org/latest/Introduction.html">1 A Brief Introduction to Octave</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Running-Octave-1" href="https://docs.octave.org/latest/Running-Octave.html">1.1 Running Octave</a></li>
    <li><a id="toc-Simple-Examples-1" href="https://docs.octave.org/latest/Simple-Examples.html">1.2 Simple Examples</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Elementary-Calculations" href="https://docs.octave.org/latest/Simple-Examples.html#Elementary-Calculations">1.2.1 Elementary Calculations</a></li>
      <li><a id="toc-Creating-a-Matrix" href="https://docs.octave.org/latest/Simple-Examples.html#Creating-a-Matrix">1.2.2 Creating a Matrix</a></li>
      <li><a id="toc-Matrix-Arithmetic" href="https://docs.octave.org/latest/Simple-Examples.html#Matrix-Arithmetic">1.2.3 Matrix Arithmetic</a></li>
      <li><a id="toc-Solving-Systems-of-Linear-Equations" href="https://docs.octave.org/latest/Simple-Examples.html#Solving-Systems-of-Linear-Equations">1.2.4 Solving Systems of Linear Equations</a></li>
      <li><a id="toc-Integrating-Differential-Equations" href="https://docs.octave.org/latest/Simple-Examples.html#Integrating-Differential-Equations">1.2.5 Integrating Differential Equations</a></li>
      <li><a id="toc-Producing-Graphical-Output" href="https://docs.octave.org/latest/Simple-Examples.html#Producing-Graphical-Output">1.2.6 Producing Graphical Output</a></li>
      <li><a id="toc-Help-and-Documentation" href="https://docs.octave.org/latest/Simple-Examples.html#Help-and-Documentation">1.2.7 Help and Documentation</a></li>
      <li><a id="toc-Editing-What-You-Have-Typed" href="https://docs.octave.org/latest/Simple-Examples.html#Editing-What-You-Have-Typed">1.2.8 Editing What You Have Typed</a></li>
    </ul></li>
    <li><a id="toc-Conventions-1" href="https://docs.octave.org/latest/Conventions.html">1.3 Conventions</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Fonts-1" href="https://docs.octave.org/latest/Fonts.html">1.3.1 Fonts</a></li>
      <li><a id="toc-Evaluation-Notation-1" href="https://docs.octave.org/latest/Evaluation-Notation.html">1.3.2 Evaluation Notation</a></li>
      <li><a id="toc-Printing-Notation-1" href="https://docs.octave.org/latest/Printing-Notation.html">1.3.3 Printing Notation</a></li>
      <li><a id="toc-Error-Messages-1" href="https://docs.octave.org/latest/Error-Messages.html">1.3.4 Error Messages</a></li>
      <li><a id="toc-Format-of-Descriptions-1" href="https://docs.octave.org/latest/Format-of-Descriptions.html">1.3.5 Format of Descriptions</a>
      <ul class="toc-numbered-mark">
        <li><a id="toc-A-Sample-Function-Description-1" href="https://docs.octave.org/latest/A-Sample-Function-Description.html">1.3.5.1 A Sample Function Description</a></li>
        <li><a id="toc-A-Sample-Command-Description-1" href="https://docs.octave.org/latest/A-Sample-Command-Description.html">1.3.5.2 A Sample Command Description</a></li>
      </ul></li>
    </ul></li>
  </ul></li>
  <li><a id="toc-Getting-Started-1" href="https://docs.octave.org/latest/Getting-Started.html">2 Getting Started</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Invoking-Octave-from-the-Command-Line-1" href="https://docs.octave.org/latest/Invoking-Octave-from-the-Command-Line.html">2.1 Invoking Octave from the Command Line</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Command-Line-Options-1" href="https://docs.octave.org/latest/Command-Line-Options.html">2.1.1 Command Line Options</a></li>
      <li><a id="toc-Startup-Files-1" href="https://docs.octave.org/latest/Startup-Files.html">2.1.2 Startup Files</a></li>
    </ul></li>
    <li><a id="toc-Quitting-Octave-1" href="https://docs.octave.org/latest/Quitting-Octave.html">2.2 Quitting Octave</a></li>
    <li><a id="toc-Commands-for-Getting-Help" href="https://docs.octave.org/latest/Getting-Help.html">2.3 Commands for Getting Help</a></li>
    <li><a id="toc-Command-Line-Editing-1" href="https://docs.octave.org/latest/Command-Line-Editing.html">2.4 Command Line Editing</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Cursor-Motion-1" href="https://docs.octave.org/latest/Cursor-Motion.html">2.4.1 Cursor Motion</a></li>
      <li><a id="toc-Killing-and-Yanking-1" href="https://docs.octave.org/latest/Killing-and-Yanking.html">2.4.2 Killing and Yanking</a></li>
      <li><a id="toc-Commands-for-Changing-Text" href="https://docs.octave.org/latest/Commands-for-Text.html">2.4.3 Commands for Changing Text</a></li>
      <li><a id="toc-Letting-Readline-Type-for-You" href="https://docs.octave.org/latest/Commands-for-Completion.html">2.4.4 Letting Readline Type for You</a></li>
      <li><a id="toc-Commands-for-Manipulating-the-History" href="https://docs.octave.org/latest/Commands-for-History.html">2.4.5 Commands for Manipulating the History</a></li>
      <li><a id="toc-Customizing-readline-1" href="https://docs.octave.org/latest/Customizing-readline.html">2.4.6 Customizing <code class="code">readline</code></a></li>
      <li><a id="toc-Customizing-the-Prompt-1" href="https://docs.octave.org/latest/Customizing-the-Prompt.html">2.4.7 Customizing the Prompt</a></li>
      <li><a id="toc-Diary-and-Echo-Commands-1" href="https://docs.octave.org/latest/Diary-and-Echo-Commands.html">2.4.8 Diary and Echo Commands</a></li>
    </ul></li>
    <li><a id="toc-How-Octave-Reports-Errors" href="https://docs.octave.org/latest/Errors.html">2.5 How Octave Reports Errors</a></li>
    <li><a id="toc-Executable-Octave-Programs-1" href="https://docs.octave.org/latest/Executable-Octave-Programs.html">2.6 Executable Octave Programs</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Passing-Arguments-to-Executable-Scripts-1" href="https://docs.octave.org/latest/Passing-Arguments-to-Executable-Scripts.html">2.6.1 Passing Arguments to Executable Scripts</a></li>
      <li><a id="toc-Dual_002dPurpose-Executable-Scripts-and-Octave-Functions-1" href="https://docs.octave.org/latest/Dual_002dPurpose-Executable-Scripts-and-Octave-Functions.html">2.6.2 Dual-Purpose Executable Scripts and Octave Functions</a></li>
    </ul></li>
    <li><a id="toc-Comments-in-Octave-Programs" href="https://docs.octave.org/latest/Comments.html">2.7 Comments in Octave Programs</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Single-Line-Comments-1" href="https://docs.octave.org/latest/Single-Line-Comments.html">2.7.1 Single Line Comments</a></li>
      <li><a id="toc-Block-Comments-1" href="https://docs.octave.org/latest/Block-Comments.html">2.7.2 Block Comments</a></li>
      <li><a id="toc-Comments-and-the-Help-System-1" href="https://docs.octave.org/latest/Comments-and-the-Help-System.html">2.7.3 Comments and the Help System</a></li>
    </ul></li>
  </ul></li>
  <li><a id="toc-Data-Types-1" href="https://docs.octave.org/latest/Data-Types.html">3 Data Types</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Built_002din-Data-Types-1" href="https://docs.octave.org/latest/Built_002din-Data-Types.html">3.1 Built-in Data Types</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Numeric-Objects-1" href="https://docs.octave.org/latest/Numeric-Objects.html">3.1.1 Numeric Objects</a></li>
      <li><a id="toc-Missing-Data-1" href="https://docs.octave.org/latest/Missing-Data.html">3.1.2 Missing Data</a></li>
      <li><a id="toc-String-Objects-1" href="https://docs.octave.org/latest/String-Objects.html">3.1.3 String Objects</a></li>
      <li><a id="toc-Data-Structure-Objects-1" href="https://docs.octave.org/latest/Data-Structure-Objects.html">3.1.4 Data Structure Objects</a></li>
      <li><a id="toc-Cell-Array-Objects-1" href="https://docs.octave.org/latest/Cell-Array-Objects.html">3.1.5 Cell Array Objects</a></li>
    </ul></li>
    <li><a id="toc-User_002ddefined-Data-Types-1" href="https://docs.octave.org/latest/User_002ddefined-Data-Types.html">3.2 User-defined Data Types</a></li>
    <li><a id="toc-Object-Sizes-1" href="https://docs.octave.org/latest/Object-Sizes.html">3.3 Object Sizes</a></li>
  </ul></li>
  <li><a id="toc-Numeric-Data-Types-1" href="https://docs.octave.org/latest/Numeric-Data-Types.html">4 Numeric Data Types</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Matrices-1" href="https://docs.octave.org/latest/Matrices.html">4.1 Matrices</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Empty-Matrices-1" href="https://docs.octave.org/latest/Empty-Matrices.html">4.1.1 Empty Matrices</a></li>
    </ul></li>
    <li><a id="toc-Ranges-1" href="https://docs.octave.org/latest/Ranges.html">4.2 Ranges</a></li>
    <li><a id="toc-Single-Precision-Data-Types-1" href="https://docs.octave.org/latest/Single-Precision-Data-Types.html">4.3 Single Precision Data Types</a></li>
    <li><a id="toc-Integer-Data-Types-1" href="https://docs.octave.org/latest/Integer-Data-Types.html">4.4 Integer Data Types</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Integer-Arithmetic-1" href="https://docs.octave.org/latest/Integer-Arithmetic.html">4.4.1 Integer Arithmetic</a></li>
    </ul></li>
    <li><a id="toc-Bit-Manipulations-1" href="https://docs.octave.org/latest/Bit-Manipulations.html">4.5 Bit Manipulations</a></li>
    <li><a id="toc-Logical-Values-1" href="https://docs.octave.org/latest/Logical-Values.html">4.6 Logical Values</a></li>
    <li><a id="toc-Automatic-Conversion-of-Data-Types-1" href="https://docs.octave.org/latest/Automatic-Conversion-of-Data-Types.html">4.7 Automatic Conversion of Data Types</a></li>
    <li><a id="toc-Predicates-for-Numeric-Objects-1" href="https://docs.octave.org/latest/Predicates-for-Numeric-Objects.html">4.8 Predicates for Numeric Objects</a></li>
  </ul></li>
  <li><a id="toc-Strings-1" href="https://docs.octave.org/latest/Strings.html">5 Strings</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Escape-Sequences-in-String-Constants-1" href="https://docs.octave.org/latest/Escape-Sequences-in-String-Constants.html">5.1 Escape Sequences in String Constants</a></li>
    <li><a id="toc-Character-Arrays-1" href="https://docs.octave.org/latest/Character-Arrays.html">5.2 Character Arrays</a></li>
    <li><a id="toc-String-Operations-1" href="https://docs.octave.org/latest/String-Operations.html">5.3 String Operations</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Common-String-Operations-1" href="https://docs.octave.org/latest/Common-String-Operations.html">5.3.1 Common String Operations</a></li>
      <li><a id="toc-Concatenating-Strings-1" href="https://docs.octave.org/latest/Concatenating-Strings.html">5.3.2 Concatenating Strings</a></li>
      <li><a id="toc-Splitting-and-Joining-Strings-1" href="https://docs.octave.org/latest/Splitting-and-Joining-Strings.html">5.3.3 Splitting and Joining Strings</a></li>
      <li><a id="toc-Searching-in-Strings-1" href="https://docs.octave.org/latest/Searching-in-Strings.html">5.3.4 Searching in Strings</a></li>
      <li><a id="toc-Searching-and-Replacing-in-Strings-1" href="https://docs.octave.org/latest/Searching-and-Replacing-in-Strings.html">5.3.5 Searching and Replacing in Strings</a></li>
    </ul></li>
    <li><a id="toc-Converting-Strings-1" href="https://docs.octave.org/latest/Converting-Strings.html">5.4 Converting Strings</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-String-encoding-1" href="https://docs.octave.org/latest/String-encoding.html">5.4.1 String encoding</a></li>
      <li><a id="toc-Numerical-Data-and-Strings-1" href="https://docs.octave.org/latest/Numerical-Data-and-Strings.html">5.4.2 Numerical Data and Strings</a></li>
      <li><a id="toc-JSON-data-encoding_002fdecoding-1" href="https://docs.octave.org/latest/JSON-data-encoding_002fdecoding.html">5.4.3 JSON data encoding/decoding</a></li>
    </ul></li>
    <li><a id="toc-Character-Class-Functions-1" href="https://docs.octave.org/latest/Character-Class-Functions.html">5.5 Character Class Functions</a></li>
  </ul></li>
  <li><a id="toc-Data-Containers-1" href="https://docs.octave.org/latest/Data-Containers.html">6 Data Containers</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Structures-1" href="https://docs.octave.org/latest/Structures.html">6.1 Structures</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Basic-Usage-and-Examples-1" href="https://docs.octave.org/latest/Basic-Usage-and-Examples.html">6.1.1 Basic Usage and Examples</a></li>
      <li><a id="toc-Structure-Arrays-1" href="https://docs.octave.org/latest/Structure-Arrays.html">6.1.2 Structure Arrays</a></li>
      <li><a id="toc-Creating-Structures-1" href="https://docs.octave.org/latest/Creating-Structures.html">6.1.3 Creating Structures</a></li>
      <li><a id="toc-Manipulating-Structures-1" href="https://docs.octave.org/latest/Manipulating-Structures.html">6.1.4 Manipulating Structures</a></li>
      <li><a id="toc-Processing-Data-in-Structures-1" href="https://docs.octave.org/latest/Processing-Data-in-Structures.html">6.1.5 Processing Data in Structures</a></li>
    </ul></li>
    <li><a id="toc-containers_002eMap-1" href="https://docs.octave.org/latest/containers_002eMap.html">6.2 containers.Map</a></li>
    <li><a id="toc-Cell-Arrays-1" href="https://docs.octave.org/latest/Cell-Arrays.html">6.3 Cell Arrays</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Basic-Usage-of-Cell-Arrays-1" href="https://docs.octave.org/latest/Basic-Usage-of-Cell-Arrays.html">6.3.1 Basic Usage of Cell Arrays</a></li>
      <li><a id="toc-Creating-Cell-Arrays-1" href="https://docs.octave.org/latest/Creating-Cell-Arrays.html">6.3.2 Creating Cell Arrays</a></li>
      <li><a id="toc-Indexing-Cell-Arrays-1" href="https://docs.octave.org/latest/Indexing-Cell-Arrays.html">6.3.3 Indexing Cell Arrays</a></li>
      <li><a id="toc-Cell-Arrays-of-Strings-1" href="https://docs.octave.org/latest/Cell-Arrays-of-Strings.html">6.3.4 Cell Arrays of Strings</a></li>
      <li><a id="toc-Processing-Data-in-Cell-Arrays-1" href="https://docs.octave.org/latest/Processing-Data-in-Cell-Arrays.html">6.3.5 Processing Data in Cell Arrays</a></li>
    </ul></li>
    <li><a id="toc-Comma_002dSeparated-Lists-1" href="https://docs.octave.org/latest/Comma_002dSeparated-Lists.html">6.4 Comma-Separated Lists</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Comma_002dSeparated-Lists-Generated-from-Cell-Arrays-1" href="https://docs.octave.org/latest/Comma_002dSeparated-Lists-Generated-from-Cell-Arrays.html">6.4.1 Comma-Separated Lists Generated from Cell Arrays</a></li>
      <li><a id="toc-Comma_002dSeparated-Lists-Generated-from-Structure-Arrays-1" href="https://docs.octave.org/latest/Comma_002dSeparated-Lists-Generated-from-Structure-Arrays.html">6.4.2 Comma-Separated Lists Generated from Structure Arrays</a></li>
    </ul></li>
  </ul></li>
  <li><a id="toc-Variables-1" href="https://docs.octave.org/latest/Variables.html">7 Variables</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Global-Variables-1" href="https://docs.octave.org/latest/Global-Variables.html">7.1 Global Variables</a></li>
    <li><a id="toc-Persistent-Variables-1" href="https://docs.octave.org/latest/Persistent-Variables.html">7.2 Persistent Variables</a></li>
    <li><a id="toc-Status-of-Variables-1" href="https://docs.octave.org/latest/Status-of-Variables.html">7.3 Status of Variables</a></li>
  </ul></li>
  <li><a id="toc-Expressions-1" href="https://docs.octave.org/latest/Expressions.html">8 Expressions</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Index-Expressions-1" href="https://docs.octave.org/latest/Index-Expressions.html">8.1 Index Expressions</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Advanced-Indexing-1" href="https://docs.octave.org/latest/Advanced-Indexing.html">8.1.1 Advanced Indexing</a></li>
    </ul></li>
    <li><a id="toc-Calling-Functions-1" href="https://docs.octave.org/latest/Calling-Functions.html">8.2 Calling Functions</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Call-by-Value-1" href="https://docs.octave.org/latest/Call-by-Value.html">8.2.1 Call by Value</a></li>
      <li><a id="toc-Recursion-1" href="https://docs.octave.org/latest/Recursion.html">8.2.2 Recursion</a></li>
      <li><a id="toc-Access-via-Handle-1" href="https://docs.octave.org/latest/Access-via-Handle.html">8.2.3 Access via Handle</a></li>
    </ul></li>
    <li><a id="toc-Arithmetic-Operators" href="https://docs.octave.org/latest/Arithmetic-Ops.html">8.3 Arithmetic Operators</a></li>
    <li><a id="toc-Comparison-Operators" href="https://docs.octave.org/latest/Comparison-Ops.html">8.4 Comparison Operators</a></li>
    <li><a id="toc-Boolean-Expressions-1" href="https://docs.octave.org/latest/Boolean-Expressions.html">8.5 Boolean Expressions</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Element_002dby_002delement-Boolean-Operators-1" href="https://docs.octave.org/latest/Element_002dby_002delement-Boolean-Operators.html">8.5.1 Element-by-element Boolean Operators</a></li>
      <li><a id="toc-Short_002dcircuit-Boolean-Operators-1" href="https://docs.octave.org/latest/Short_002dcircuit-Boolean-Operators.html">8.5.2 Short-circuit Boolean Operators</a></li>
    </ul></li>
    <li><a id="toc-Assignment-Expressions" href="https://docs.octave.org/latest/Assignment-Ops.html">8.6 Assignment Expressions</a></li>
    <li><a id="toc-Increment-Operators" href="https://docs.octave.org/latest/Increment-Ops.html">8.7 Increment Operators</a></li>
    <li><a id="toc-Operator-Precedence-1" href="https://docs.octave.org/latest/Operator-Precedence.html">8.8 Operator Precedence</a></li>
  </ul></li>
  <li><a id="toc-Evaluation-1" href="https://docs.octave.org/latest/Evaluation.html">9 Evaluation</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Calling-a-Function-by-its-Name-1" href="https://docs.octave.org/latest/Calling-a-Function-by-its-Name.html">9.1 Calling a Function by its Name</a></li>
    <li><a id="toc-Evaluation-in-a-Different-Context-1" href="https://docs.octave.org/latest/Evaluation-in-a-Different-Context.html">9.2 Evaluation in a Different Context</a></li>
  </ul></li>
  <li><a id="toc-Statements-1" href="https://docs.octave.org/latest/Statements.html">10 Statements</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-The-if-Statement-1" href="https://docs.octave.org/latest/The-if-Statement.html">10.1 The if Statement</a></li>
    <li><a id="toc-The-switch-Statement-1" href="https://docs.octave.org/latest/The-switch-Statement.html">10.2 The switch Statement</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Notes-for-the-C-Programmer-1" href="https://docs.octave.org/latest/Notes-for-the-C-Programmer.html">10.2.1 Notes for the C Programmer</a></li>
    </ul></li>
    <li><a id="toc-The-while-Statement-1" href="https://docs.octave.org/latest/The-while-Statement.html">10.3 The while Statement</a></li>
    <li><a id="toc-The-do_002duntil-Statement-1" href="https://docs.octave.org/latest/The-do_002duntil-Statement.html">10.4 The do-until Statement</a></li>
    <li><a id="toc-The-for-Statement-1" href="https://docs.octave.org/latest/The-for-Statement.html">10.5 The for Statement</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Looping-Over-Structure-Elements-1" href="https://docs.octave.org/latest/Looping-Over-Structure-Elements.html">10.5.1 Looping Over Structure Elements</a></li>
    </ul></li>
    <li><a id="toc-The-break-Statement-1" href="https://docs.octave.org/latest/The-break-Statement.html">10.6 The break Statement</a></li>
    <li><a id="toc-The-continue-Statement-1" href="https://docs.octave.org/latest/The-continue-Statement.html">10.7 The continue Statement</a></li>
    <li><a id="toc-The-unwind_005fprotect-Statement-1" href="https://docs.octave.org/latest/The-unwind_005fprotect-Statement.html">10.8 The unwind_protect Statement</a></li>
    <li><a id="toc-The-try-Statement-1" href="https://docs.octave.org/latest/The-try-Statement.html">10.9 The try Statement</a></li>
    <li><a id="toc-Continuation-Lines-1" href="https://docs.octave.org/latest/Continuation-Lines.html">10.10 Continuation Lines</a></li>
  </ul></li>
  <li><a id="toc-Functions-and-Scripts-1" href="https://docs.octave.org/latest/Functions-and-Scripts.html">11 Functions and Scripts</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Introduction-to-Function-and-Script-Files-1" href="https://docs.octave.org/latest/Introduction-to-Function-and-Script-Files.html">11.1 Introduction to Function and Script Files</a></li>
    <li><a id="toc-Defining-Functions-1" href="https://docs.octave.org/latest/Defining-Functions.html">11.2 Defining Functions</a></li>
    <li><a id="toc-Returning-from-a-Function-1" href="https://docs.octave.org/latest/Returning-from-a-Function.html">11.3 Returning from a Function</a></li>
    <li><a id="toc-Multiple-Return-Values-1" href="https://docs.octave.org/latest/Multiple-Return-Values.html">11.4 Multiple Return Values</a></li>
    <li><a id="toc-Variable_002dlength-Return-Lists-1" href="https://docs.octave.org/latest/Variable_002dlength-Return-Lists.html">11.5 Variable-length Return Lists</a></li>
    <li><a id="toc-Variable_002dlength-Argument-Lists-1" href="https://docs.octave.org/latest/Variable_002dlength-Argument-Lists.html">11.6 Variable-length Argument Lists</a></li>
    <li><a id="toc-Ignoring-Arguments-1" href="https://docs.octave.org/latest/Ignoring-Arguments.html">11.7 Ignoring Arguments</a></li>
    <li><a id="toc-Default-Arguments-1" href="https://docs.octave.org/latest/Default-Arguments.html">11.8 Default Arguments</a></li>
    <li><a id="toc-Validating-Arguments-1" href="https://docs.octave.org/latest/Validating-Arguments.html">11.9 Validating Arguments</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Validating-the-number-of-Arguments-1" href="https://docs.octave.org/latest/Validating-the-number-of-Arguments.html">11.9.1 Validating the number of Arguments</a></li>
      <li><a id="toc-Validating-the-type-of-Arguments-1" href="https://docs.octave.org/latest/Validating-the-type-of-Arguments.html">11.9.2 Validating the type of Arguments</a></li>
      <li><a id="toc-Parsing-Arguments-1" href="https://docs.octave.org/latest/Parsing-Arguments.html">11.9.3 Parsing Arguments</a></li>
    </ul></li>
    <li><a id="toc-Function-Files-1" href="https://docs.octave.org/latest/Function-Files.html">11.10 Function Files</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Manipulating-the-Load-Path-1" href="https://docs.octave.org/latest/Manipulating-the-Load-Path.html">11.10.1 Manipulating the Load Path</a></li>
      <li><a id="toc-Subfunctions-1" href="https://docs.octave.org/latest/Subfunctions.html">11.10.2 Subfunctions</a></li>
      <li><a id="toc-Private-Functions-1" href="https://docs.octave.org/latest/Private-Functions.html">11.10.3 Private Functions</a></li>
      <li><a id="toc-Nested-Functions-1" href="https://docs.octave.org/latest/Nested-Functions.html">11.10.4 Nested Functions</a></li>
      <li><a id="toc-Overloading-and-Autoloading-1" href="https://docs.octave.org/latest/Overloading-and-Autoloading.html">11.10.5 Overloading and Autoloading</a></li>
      <li><a id="toc-Function-Locking-1" href="https://docs.octave.org/latest/Function-Locking.html">11.10.6 Function Locking</a></li>
      <li><a id="toc-Function-Precedence-1" href="https://docs.octave.org/latest/Function-Precedence.html">11.10.7 Function Precedence</a></li>
    </ul></li>
    <li><a id="toc-Script-Files-1" href="https://docs.octave.org/latest/Script-Files.html">11.11 Script Files</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Publish-Octave-Script-Files-1" href="https://docs.octave.org/latest/Publish-Octave-Script-Files.html">11.11.1 Publish Octave Script Files</a></li>
      <li><a id="toc-Publishing-Markup-1" href="https://docs.octave.org/latest/Publishing-Markup.html">11.11.2 Publishing Markup</a>
      <ul class="toc-numbered-mark">
        <li><a id="toc-Using-Publishing-Markup-in-Script-Files-1" href="https://docs.octave.org/latest/Using-Publishing-Markup-in-Script-Files.html">11.11.2.1 Using Publishing Markup in Script Files</a></li>
        <li><a id="toc-Text-Formatting-1" href="https://docs.octave.org/latest/Text-Formatting.html">11.11.2.2 Text Formatting</a></li>
        <li><a id="toc-Sections-1" href="https://docs.octave.org/latest/Sections.html">11.11.2.3 Sections</a></li>
        <li><a id="toc-Preformatted-Code-1" href="https://docs.octave.org/latest/Preformatted-Code.html">11.11.2.4 Preformatted Code</a></li>
        <li><a id="toc-Preformatted-Text-1" href="https://docs.octave.org/latest/Preformatted-Text.html">11.11.2.5 Preformatted Text</a></li>
        <li><a id="toc-Bulleted-Lists-1" href="https://docs.octave.org/latest/Bulleted-Lists.html">11.11.2.6 Bulleted Lists</a></li>
        <li><a id="toc-Numbered-Lists-1" href="https://docs.octave.org/latest/Numbered-Lists.html">11.11.2.7 Numbered Lists</a></li>
        <li><a id="toc-Including-File-Content-1" href="https://docs.octave.org/latest/Including-File-Content.html">11.11.2.8 Including File Content</a></li>
        <li><a id="toc-Including-Graphics-1" href="https://docs.octave.org/latest/Including-Graphics.html">11.11.2.9 Including Graphics</a></li>
        <li><a id="toc-Including-URLs-1" href="https://docs.octave.org/latest/Including-URLs.html">11.11.2.10 Including URLs</a></li>
        <li><a id="toc-Mathematical-Equations-1" href="https://docs.octave.org/latest/Mathematical-Equations.html">11.11.2.11 Mathematical Equations</a></li>
        <li><a id="toc-HTML-Markup-1" href="https://docs.octave.org/latest/HTML-Markup.html">11.11.2.12 HTML Markup</a></li>
        <li><a id="toc-LaTeX-Markup-1" href="https://docs.octave.org/latest/LaTeX-Markup.html">11.11.2.13 LaTeX Markup</a></li>
      </ul></li>
      <li><a id="toc-Jupyter-Notebooks-1" href="https://docs.octave.org/latest/Jupyter-Notebooks.html">11.11.3 Jupyter Notebooks</a></li>
    </ul></li>
    <li><a id="toc-Function-Handles-and-Anonymous-Functions-1" href="https://docs.octave.org/latest/Function-Handles-and-Anonymous-Functions.html">11.12 Function Handles and Anonymous Functions</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Function-Handles-1" href="https://docs.octave.org/latest/Function-Handles.html">11.12.1 Function Handles</a></li>
      <li><a id="toc-Anonymous-Functions-1" href="https://docs.octave.org/latest/Anonymous-Functions.html">11.12.2 Anonymous Functions</a></li>
    </ul></li>
    <li><a id="toc-Command-Syntax-and-Function-Syntax-1" href="https://docs.octave.org/latest/Command-Syntax-and-Function-Syntax.html">11.13 Command Syntax and Function Syntax</a></li>
    <li><a id="toc-Organization-of-Functions-Distributed-with-Octave" href="https://docs.octave.org/latest/Organization-of-Functions.html">11.14 Organization of Functions Distributed with Octave</a></li>
  </ul></li>
  <li><a id="toc-Errors-and-Warnings-1" href="https://docs.octave.org/latest/Errors-and-Warnings.html">12 Errors and Warnings</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Handling-Errors-1" href="https://docs.octave.org/latest/Handling-Errors.html">12.1 Handling Errors</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Raising-Errors-1" href="https://docs.octave.org/latest/Raising-Errors.html">12.1.1 Raising Errors</a></li>
      <li><a id="toc-Catching-Errors-1" href="https://docs.octave.org/latest/Catching-Errors.html">12.1.2 Catching Errors</a></li>
      <li><a id="toc-Recovering-From-Errors-1" href="https://docs.octave.org/latest/Recovering-From-Errors.html">12.1.3 Recovering From Errors</a></li>
    </ul></li>
    <li><a id="toc-Handling-Warnings-1" href="https://docs.octave.org/latest/Handling-Warnings.html">12.2 Handling Warnings</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Issuing-Warnings-1" href="https://docs.octave.org/latest/Issuing-Warnings.html">12.2.1 Issuing Warnings</a></li>
      <li><a id="toc-Enabling-and-Disabling-Warnings-1" href="https://docs.octave.org/latest/Enabling-and-Disabling-Warnings.html">12.2.2 Enabling and Disabling Warnings</a></li>
    </ul></li>
  </ul></li>
  <li><a id="toc-Debugging-1" href="https://docs.octave.org/latest/Debugging.html">13 Debugging</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Entering-Debug-Mode-1" href="https://docs.octave.org/latest/Entering-Debug-Mode.html">13.1 Entering Debug Mode</a></li>
    <li><a id="toc-Leaving-Debug-Mode-1" href="https://docs.octave.org/latest/Leaving-Debug-Mode.html">13.2 Leaving Debug Mode</a></li>
    <li><a id="toc-Breakpoints-1" href="https://docs.octave.org/latest/Breakpoints.html">13.3 Breakpoints</a></li>
    <li><a id="toc-Debug-Mode-1" href="https://docs.octave.org/latest/Debug-Mode.html">13.4 Debug Mode</a></li>
    <li><a id="toc-Call-Stack-1" href="https://docs.octave.org/latest/Call-Stack.html">13.5 Call Stack</a></li>
    <li><a id="toc-Profiling-1" href="https://docs.octave.org/latest/Profiling.html">13.6 Profiling</a></li>
    <li><a id="toc-Profiler-Example-1" href="https://docs.octave.org/latest/Profiler-Example.html">13.7 Profiler Example</a></li>
  </ul></li>
  <li><a id="toc-Input-and-Output-1" href="https://docs.octave.org/latest/Input-and-Output.html">14 Input and Output</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Basic-Input-and-Output-1" href="https://docs.octave.org/latest/Basic-Input-and-Output.html">14.1 Basic Input and Output</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Terminal-Output-1" href="https://docs.octave.org/latest/Terminal-Output.html">14.1.1 Terminal Output</a>
      <ul class="toc-numbered-mark">
        <li><a id="toc-Paging-Screen-Output-1" href="https://docs.octave.org/latest/Paging-Screen-Output.html">14.1.1.1 Paging Screen Output</a></li>
      </ul></li>
      <li><a id="toc-Terminal-Input-1" href="https://docs.octave.org/latest/Terminal-Input.html">14.1.2 Terminal Input</a></li>
      <li><a id="toc-Simple-File-I_002fO-1" href="https://docs.octave.org/latest/Simple-File-I_002fO.html">14.1.3 Simple File I/O</a>
      <ul class="toc-numbered-mark">
        <li><a id="toc-Saving-Data-on-Unexpected-Exits-1" href="https://docs.octave.org/latest/Saving-Data-on-Unexpected-Exits.html">14.1.3.1 Saving Data on Unexpected Exits</a></li>
      </ul></li>
    </ul></li>
    <li><a id="toc-C_002dStyle-I_002fO-Functions-1" href="https://docs.octave.org/latest/C_002dStyle-I_002fO-Functions.html">14.2 C-Style I/O Functions</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Opening-and-Closing-Files-1" href="https://docs.octave.org/latest/Opening-and-Closing-Files.html">14.2.1 Opening and Closing Files</a></li>
      <li><a id="toc-Simple-Output-1" href="https://docs.octave.org/latest/Simple-Output.html">14.2.2 Simple Output</a></li>
      <li><a id="toc-Line_002dOriented-Input-1" href="https://docs.octave.org/latest/Line_002dOriented-Input.html">14.2.3 Line-Oriented Input</a></li>
      <li><a id="toc-Formatted-Output-1" href="https://docs.octave.org/latest/Formatted-Output.html">14.2.4 Formatted Output</a></li>
      <li><a id="toc-Output-Conversion-for-Matrices-1" href="https://docs.octave.org/latest/Output-Conversion-for-Matrices.html">14.2.5 Output Conversion for Matrices</a></li>
      <li><a id="toc-Output-Conversion-Syntax-1" href="https://docs.octave.org/latest/Output-Conversion-Syntax.html">14.2.6 Output Conversion Syntax</a></li>
      <li><a id="toc-Table-of-Output-Conversions-1" href="https://docs.octave.org/latest/Table-of-Output-Conversions.html">14.2.7 Table of Output Conversions</a></li>
      <li><a id="toc-Integer-Conversions-1" href="https://docs.octave.org/latest/Integer-Conversions.html">14.2.8 Integer Conversions</a></li>
      <li><a id="toc-Floating_002dPoint-Conversions-1" href="https://docs.octave.org/latest/Floating_002dPoint-Conversions.html">14.2.9 Floating-Point Conversions</a></li>
      <li><a id="toc-Other-Output-Conversions-1" href="https://docs.octave.org/latest/Other-Output-Conversions.html">14.2.10 Other Output Conversions</a></li>
      <li><a id="toc-Formatted-Input-1" href="https://docs.octave.org/latest/Formatted-Input.html">14.2.11 Formatted Input</a></li>
      <li><a id="toc-Input-Conversion-Syntax-1" href="https://docs.octave.org/latest/Input-Conversion-Syntax.html">14.2.12 Input Conversion Syntax</a></li>
      <li><a id="toc-Table-of-Input-Conversions-1" href="https://docs.octave.org/latest/Table-of-Input-Conversions.html">14.2.13 Table of Input Conversions</a></li>
      <li><a id="toc-Numeric-Input-Conversions-1" href="https://docs.octave.org/latest/Numeric-Input-Conversions.html">14.2.14 Numeric Input Conversions</a></li>
      <li><a id="toc-String-Input-Conversions-1" href="https://docs.octave.org/latest/String-Input-Conversions.html">14.2.15 String Input Conversions</a></li>
      <li><a id="toc-Binary-I_002fO-1" href="https://docs.octave.org/latest/Binary-I_002fO.html">14.2.16 Binary I/O</a></li>
      <li><a id="toc-Temporary-Files-1" href="https://docs.octave.org/latest/Temporary-Files.html">14.2.17 Temporary Files</a></li>
      <li><a id="toc-End-of-File-and-Errors" href="https://docs.octave.org/latest/EOF-and-Errors.html">14.2.18 End of File and Errors</a></li>
      <li><a id="toc-File-Positioning-1" href="https://docs.octave.org/latest/File-Positioning.html">14.2.19 File Positioning</a></li>
    </ul></li>
  </ul></li>
  <li><a id="toc-Plotting-1" href="https://docs.octave.org/latest/Plotting.html">15 Plotting</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Introduction-to-Plotting-1" href="https://docs.octave.org/latest/Introduction-to-Plotting.html">15.1 Introduction to Plotting</a></li>
    <li><a id="toc-High_002dLevel-Plotting-1" href="https://docs.octave.org/latest/High_002dLevel-Plotting.html">15.2 High-Level Plotting</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Two_002dDimensional-Plots-1" href="https://docs.octave.org/latest/Two_002dDimensional-Plots.html">15.2.1 Two-Dimensional Plots</a>
      <ul class="toc-numbered-mark">
        <li><a id="toc-Axis-Configuration-1" href="https://docs.octave.org/latest/Axis-Configuration.html">15.2.1.1 Axis Configuration</a></li>
        <li><a id="toc-Two_002ddimensional-Function-Plotting-1" href="https://docs.octave.org/latest/Two_002ddimensional-Function-Plotting.html">15.2.1.2 Two-dimensional Function Plotting</a></li>
        <li><a id="toc-Two_002ddimensional-Geometric-Shapes-1" href="https://docs.octave.org/latest/Two_002ddimensional-Geometric-Shapes.html">15.2.1.3 Two-dimensional Geometric Shapes</a></li>
      </ul></li>
      <li><a id="toc-Three_002dDimensional-Plots-1" href="https://docs.octave.org/latest/Three_002dDimensional-Plots.html">15.2.2 Three-Dimensional Plots</a>
      <ul class="toc-numbered-mark">
        <li><a id="toc-Aspect-Ratio-1" href="https://docs.octave.org/latest/Aspect-Ratio.html">15.2.2.1 Aspect Ratio</a></li>
        <li><a id="toc-Three_002ddimensional-Function-Plotting-1" href="https://docs.octave.org/latest/Three_002ddimensional-Function-Plotting.html">15.2.2.2 Three-dimensional Function Plotting</a></li>
        <li><a id="toc-Three_002ddimensional-Geometric-Shapes-1" href="https://docs.octave.org/latest/Three_002ddimensional-Geometric-Shapes.html">15.2.2.3 Three-dimensional Geometric Shapes</a></li>
      </ul></li>
      <li><a id="toc-Plot-Annotations-1" href="https://docs.octave.org/latest/Plot-Annotations.html">15.2.3 Plot Annotations</a></li>
      <li><a id="toc-Multiple-Plots-on-One-Page-1" href="https://docs.octave.org/latest/Multiple-Plots-on-One-Page.html">15.2.4 Multiple Plots on One Page</a></li>
      <li><a id="toc-Multiple-Plot-Windows-1" href="https://docs.octave.org/latest/Multiple-Plot-Windows.html">15.2.5 Multiple Plot Windows</a></li>
      <li><a id="toc-Manipulation-of-Plot-Objects-1" href="https://docs.octave.org/latest/Manipulation-of-Plot-Objects.html">15.2.6 Manipulation of Plot Objects</a></li>
      <li><a id="toc-Manipulation-of-Plot-Windows-1" href="https://docs.octave.org/latest/Manipulation-of-Plot-Windows.html">15.2.7 Manipulation of Plot Windows</a></li>
      <li><a id="toc-Use-of-the-_0022interpreter_0022-Property-1" href="https://docs.octave.org/latest/Use-of-the-_0022interpreter_0022-Property.html">15.2.8 Use of the "interpreter" Property</a>
      <ul class="toc-numbered-mark">
        <li><a id="toc-_0022none_0022-interpreter-1" href="https://docs.octave.org/latest/_0022none_0022-interpreter.html">15.2.8.1 "none" interpreter</a></li>
        <li><a id="toc-_0022tex_0022-interpreter-1" href="https://docs.octave.org/latest/_0022tex_0022-interpreter.html">15.2.8.2 "tex" interpreter</a></li>
        <li><a id="toc-_0022latex_0022-interpreter-1" href="https://docs.octave.org/latest/_0022latex_0022-interpreter.html">15.2.8.3 "latex" interpreter</a></li>
      </ul></li>
      <li><a id="toc-Printing-and-Saving-Plots-1" href="https://docs.octave.org/latest/Printing-and-Saving-Plots.html">15.2.9 Printing and Saving Plots</a></li>
      <li><a id="toc-Interacting-with-Plots-1" href="https://docs.octave.org/latest/Interacting-with-Plots.html">15.2.10 Interacting with Plots</a></li>
      <li><a id="toc-Test-Plotting-Functions-1" href="https://docs.octave.org/latest/Test-Plotting-Functions.html">15.2.11 Test Plotting Functions</a></li>
    </ul></li>
    <li><a id="toc-Graphics-Data-Structures-1" href="https://docs.octave.org/latest/Graphics-Data-Structures.html">15.3 Graphics Data Structures</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Introduction-to-Graphics-Structures-1" href="https://docs.octave.org/latest/Introduction-to-Graphics-Structures.html">15.3.1 Introduction to Graphics Structures</a></li>
      <li><a id="toc-Graphics-Objects-1" href="https://docs.octave.org/latest/Graphics-Objects.html">15.3.2 Graphics Objects</a>
      <ul class="toc-numbered-mark">
        <li><a id="toc-Creating-Graphics-Objects" href="https://docs.octave.org/latest/Graphics-Objects.html#Creating-Graphics-Objects">15.3.2.1 Creating Graphics Objects</a></li>
        <li><a id="toc-Handle-Functions" href="https://docs.octave.org/latest/Graphics-Objects.html#Handle-Functions">15.3.2.2 Handle Functions</a></li>
      </ul></li>
      <li><a id="toc-Graphics-Object-Properties-1" href="https://docs.octave.org/latest/Graphics-Object-Properties.html">15.3.3 Graphics Object Properties</a>
      <ul class="toc-numbered-mark">
        <li><a id="toc-Root-Properties-1" href="https://docs.octave.org/latest/Root-Properties.html">15.3.3.1 Root Properties</a></li>
        <li><a id="toc-Figure-Properties-1" href="https://docs.octave.org/latest/Figure-Properties.html">15.3.3.2 Figure Properties</a></li>
        <li><a id="toc-Axes-Properties-1" href="https://docs.octave.org/latest/Axes-Properties.html">15.3.3.3 Axes Properties</a></li>
        <li><a id="toc-Legend-Properties-1" href="https://docs.octave.org/latest/Legend-Properties.html">15.3.3.4 Legend Properties</a></li>
        <li><a id="toc-Line-Properties-1" href="https://docs.octave.org/latest/Line-Properties.html">15.3.3.5 Line Properties</a></li>
        <li><a id="toc-Text-Properties-1" href="https://docs.octave.org/latest/Text-Properties.html">15.3.3.6 Text Properties</a></li>
        <li><a id="toc-Image-Properties-1" href="https://docs.octave.org/latest/Image-Properties.html">15.3.3.7 Image Properties</a></li>
        <li><a id="toc-Patch-Properties-1" href="https://docs.octave.org/latest/Patch-Properties.html">15.3.3.8 Patch Properties</a></li>
        <li><a id="toc-Scatter-Properties-1" href="https://docs.octave.org/latest/Scatter-Properties.html">15.3.3.9 Scatter Properties</a></li>
        <li><a id="toc-Surface-Properties-1" href="https://docs.octave.org/latest/Surface-Properties.html">15.3.3.10 Surface Properties</a></li>
        <li><a id="toc-Light-Properties-1" href="https://docs.octave.org/latest/Light-Properties.html">15.3.3.11 Light Properties</a></li>
        <li><a id="toc-Uimenu-Properties-1" href="https://docs.octave.org/latest/Uimenu-Properties.html">15.3.3.12 Uimenu Properties</a></li>
        <li><a id="toc-Uibuttongroup-Properties-1" href="https://docs.octave.org/latest/Uibuttongroup-Properties.html">15.3.3.13 Uibuttongroup Properties</a></li>
        <li><a id="toc-Uicontextmenu-Properties-1" href="https://docs.octave.org/latest/Uicontextmenu-Properties.html">15.3.3.14 Uicontextmenu Properties</a></li>
        <li><a id="toc-Uipanel-Properties-1" href="https://docs.octave.org/latest/Uipanel-Properties.html">15.3.3.15 Uipanel Properties</a></li>
        <li><a id="toc-Uicontrol-Properties-1" href="https://docs.octave.org/latest/Uicontrol-Properties.html">15.3.3.16 Uicontrol Properties</a></li>
        <li><a id="toc-Uitable-Properties-1" href="https://docs.octave.org/latest/Uitable-Properties.html">15.3.3.17 Uitable Properties</a></li>
        <li><a id="toc-Uitoolbar-Properties-1" href="https://docs.octave.org/latest/Uitoolbar-Properties.html">15.3.3.18 Uitoolbar Properties</a></li>
        <li><a id="toc-Uipushtool-Properties-1" href="https://docs.octave.org/latest/Uipushtool-Properties.html">15.3.3.19 Uipushtool Properties</a></li>
        <li><a id="toc-Uitoggletool-Properties-1" href="https://docs.octave.org/latest/Uitoggletool-Properties.html">15.3.3.20 Uitoggletool Properties</a></li>
      </ul></li>
      <li><a id="toc-Searching-Properties-1" href="https://docs.octave.org/latest/Searching-Properties.html">15.3.4 Searching Properties</a></li>
      <li><a id="toc-Managing-Default-Properties-1" href="https://docs.octave.org/latest/Managing-Default-Properties.html">15.3.5 Managing Default Properties</a></li>
    </ul></li>
    <li><a id="toc-Advanced-Plotting-1" href="https://docs.octave.org/latest/Advanced-Plotting.html">15.4 Advanced Plotting</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Colors-1" href="https://docs.octave.org/latest/Colors.html">15.4.1 Colors</a></li>
      <li><a id="toc-Line-Styles-1" href="https://docs.octave.org/latest/Line-Styles.html">15.4.2 Line Styles</a></li>
      <li><a id="toc-Marker-Styles-1" href="https://docs.octave.org/latest/Marker-Styles.html">15.4.3 Marker Styles</a></li>
      <li><a id="toc-Callbacks-1" href="https://docs.octave.org/latest/Callbacks.html">15.4.4 Callbacks</a></li>
      <li><a id="toc-Application_002ddefined-Data-1" href="https://docs.octave.org/latest/Application_002ddefined-Data.html">15.4.5 Application-defined Data</a></li>
      <li><a id="toc-Object-Groups-1" href="https://docs.octave.org/latest/Object-Groups.html">15.4.6 Object Groups</a>
      <ul class="toc-numbered-mark">
        <li><a id="toc-Data-Sources-in-Object-Groups-1" href="https://docs.octave.org/latest/Data-Sources-in-Object-Groups.html">15.4.6.1 Data Sources in Object Groups</a></li>
        <li><a id="toc-Area-Series-1" href="https://docs.octave.org/latest/Area-Series.html">15.4.6.2 Area Series</a></li>
        <li><a id="toc-Bar-Series-1" href="https://docs.octave.org/latest/Bar-Series.html">15.4.6.3 Bar Series</a></li>
        <li><a id="toc-Contour-Groups-1" href="https://docs.octave.org/latest/Contour-Groups.html">15.4.6.4 Contour Groups</a></li>
        <li><a id="toc-Error-Bar-Series-1" href="https://docs.octave.org/latest/Error-Bar-Series.html">15.4.6.5 Error Bar Series</a></li>
        <li><a id="toc-Line-Series-1" href="https://docs.octave.org/latest/Line-Series.html">15.4.6.6 Line Series</a></li>
        <li><a id="toc-Quiver-Group-1" href="https://docs.octave.org/latest/Quiver-Group.html">15.4.6.7 Quiver Group</a></li>
        <li><a id="toc-Stair-Group-1" href="https://docs.octave.org/latest/Stair-Group.html">15.4.6.8 Stair Group</a></li>
        <li><a id="toc-Stem-Series-1" href="https://docs.octave.org/latest/Stem-Series.html">15.4.6.9 Stem Series</a></li>
        <li><a id="toc-Surface-Group-1" href="https://docs.octave.org/latest/Surface-Group.html">15.4.6.10 Surface Group</a></li>
      </ul></li>
      <li><a id="toc-Transform-Groups-1" href="https://docs.octave.org/latest/Transform-Groups.html">15.4.7 Transform Groups</a></li>
      <li><a id="toc-Graphics-Toolkits-1" href="https://docs.octave.org/latest/Graphics-Toolkits.html">15.4.8 Graphics Toolkits</a>
      <ul class="toc-numbered-mark">
        <li><a id="toc-Customizing-Toolkit-Behavior-1" href="https://docs.octave.org/latest/Customizing-Toolkit-Behavior.html">15.4.8.1 Customizing Toolkit Behavior</a></li>
        <li><a id="toc-Hardware-vs-Software-Rendering-1" href="https://docs.octave.org/latest/Hardware-vs-Software-Rendering.html">15.4.8.2 Hardware vs Software Rendering</a></li>
        <li><a id="toc-Precision-issues-1" href="https://docs.octave.org/latest/Precision-issues.html">15.4.8.3 Precision issues</a></li>
      </ul></li>
    </ul></li>
  </ul></li>
  <li><a id="toc-Matrix-Manipulation-1" href="https://docs.octave.org/latest/Matrix-Manipulation.html">16 Matrix Manipulation</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Finding-Elements-and-Checking-Conditions-1" href="https://docs.octave.org/latest/Finding-Elements-and-Checking-Conditions.html">16.1 Finding Elements and Checking Conditions</a></li>
    <li><a id="toc-Rearranging-Matrices-1" href="https://docs.octave.org/latest/Rearranging-Matrices.html">16.2 Rearranging Matrices</a></li>
    <li><a id="toc-Special-Utility-Matrices-1" href="https://docs.octave.org/latest/Special-Utility-Matrices.html">16.3 Special Utility Matrices</a></li>
    <li><a id="toc-Famous-Matrices-1" href="https://docs.octave.org/latest/Famous-Matrices.html">16.4 Famous Matrices</a></li>
  </ul></li>
  <li><a id="toc-Arithmetic-1" href="https://docs.octave.org/latest/Arithmetic.html">17 Arithmetic</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Exponents-and-Logarithms-1" href="https://docs.octave.org/latest/Exponents-and-Logarithms.html">17.1 Exponents and Logarithms</a></li>
    <li><a id="toc-Complex-Arithmetic-1" href="https://docs.octave.org/latest/Complex-Arithmetic.html">17.2 Complex Arithmetic</a></li>
    <li><a id="toc-Trigonometry-1" href="https://docs.octave.org/latest/Trigonometry.html">17.3 Trigonometry</a></li>
    <li><a id="toc-Sums-and-Products-1" href="https://docs.octave.org/latest/Sums-and-Products.html">17.4 Sums and Products</a></li>
    <li><a id="toc-Utility-Functions-1" href="https://docs.octave.org/latest/Utility-Functions.html">17.5 Utility Functions</a></li>
    <li><a id="toc-Special-Functions-1" href="https://docs.octave.org/latest/Special-Functions.html">17.6 Special Functions</a></li>
    <li><a id="toc-Rational-Approximations-1" href="https://docs.octave.org/latest/Rational-Approximations.html">17.7 Rational Approximations</a></li>
    <li><a id="toc-Coordinate-Transformations-1" href="https://docs.octave.org/latest/Coordinate-Transformations.html">17.8 Coordinate Transformations</a></li>
    <li><a id="toc-Mathematical-Constants-1" href="https://docs.octave.org/latest/Mathematical-Constants.html">17.9 Mathematical Constants</a></li>
  </ul></li>
  <li><a id="toc-Linear-Algebra-1" href="https://docs.octave.org/latest/Linear-Algebra.html">18 Linear Algebra</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Techniques-Used-for-Linear-Algebra-1" href="https://docs.octave.org/latest/Techniques-Used-for-Linear-Algebra.html">18.1 Techniques Used for Linear Algebra</a></li>
    <li><a id="toc-Basic-Matrix-Functions-1" href="https://docs.octave.org/latest/Basic-Matrix-Functions.html">18.2 Basic Matrix Functions</a></li>
    <li><a id="toc-Matrix-Factorizations-1" href="https://docs.octave.org/latest/Matrix-Factorizations.html">18.3 Matrix Factorizations</a></li>
    <li><a id="toc-Functions-of-a-Matrix-1" href="https://docs.octave.org/latest/Functions-of-a-Matrix.html">18.4 Functions of a Matrix</a></li>
    <li><a id="toc-Specialized-Solvers-1" href="https://docs.octave.org/latest/Specialized-Solvers.html">18.5 Specialized Solvers</a></li>
  </ul></li>
  <li><a id="toc-Vectorization-and-Faster-Code-Execution-1" href="https://docs.octave.org/latest/Vectorization-and-Faster-Code-Execution.html">19 Vectorization and Faster Code Execution</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Basic-Vectorization-1" href="https://docs.octave.org/latest/Basic-Vectorization.html">19.1 Basic Vectorization</a></li>
    <li><a id="toc-Broadcasting-1" href="https://docs.octave.org/latest/Broadcasting.html">19.2 Broadcasting</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Broadcasting-and-Legacy-Code" href="https://docs.octave.org/latest/Broadcasting.html#Broadcasting-and-Legacy-Code">19.2.1 Broadcasting and Legacy Code</a></li>
    </ul></li>
    <li><a id="toc-Function-Application-1" href="https://docs.octave.org/latest/Function-Application.html">19.3 Function Application</a></li>
    <li><a id="toc-Accumulation-1" href="https://docs.octave.org/latest/Accumulation.html">19.4 Accumulation</a></li>
    <li><a id="toc-Memoization-1" href="https://docs.octave.org/latest/Memoization.html">19.5 Memoization</a></li>
    <li><a id="toc-Miscellaneous-Techniques-1" href="https://docs.octave.org/latest/Miscellaneous-Techniques.html">19.6 Miscellaneous Techniques</a></li>
    <li><a id="toc-Examples-1" href="https://docs.octave.org/latest/Examples.html">19.7 Examples</a></li>
  </ul></li>
  <li><a id="toc-Nonlinear-Equations-1" href="https://docs.octave.org/latest/Nonlinear-Equations.html">20 Nonlinear Equations</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Solvers-1" href="https://docs.octave.org/latest/Solvers.html">20.1 Solvers</a></li>
    <li><a id="toc-Minimizers-1" href="https://docs.octave.org/latest/Minimizers.html">20.2 Minimizers</a></li>
  </ul></li>
  <li><a id="toc-Diagonal-and-Permutation-Matrices-1" href="https://docs.octave.org/latest/Diagonal-and-Permutation-Matrices.html">21 Diagonal and Permutation Matrices</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Creating-and-Manipulating-Diagonal_002fPermutation-Matrices" href="https://docs.octave.org/latest/Basic-Usage.html">21.1 Creating and Manipulating Diagonal/Permutation Matrices</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Creating-Diagonal-Matrices-1" href="https://docs.octave.org/latest/Creating-Diagonal-Matrices.html">21.1.1 Creating Diagonal Matrices</a></li>
      <li><a id="toc-Creating-Permutation-Matrices-1" href="https://docs.octave.org/latest/Creating-Permutation-Matrices.html">21.1.2 Creating Permutation Matrices</a></li>
      <li><a id="toc-Explicit-and-Implicit-Conversions-1" href="https://docs.octave.org/latest/Explicit-and-Implicit-Conversions.html">21.1.3 Explicit and Implicit Conversions</a></li>
    </ul></li>
    <li><a id="toc-Linear-Algebra-with-Diagonal_002fPermutation-Matrices" href="https://docs.octave.org/latest/Matrix-Algebra.html">21.2 Linear Algebra with Diagonal/Permutation Matrices</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Expressions-Involving-Diagonal-Matrices-1" href="https://docs.octave.org/latest/Expressions-Involving-Diagonal-Matrices.html">21.2.1 Expressions Involving Diagonal Matrices</a></li>
      <li><a id="toc-Expressions-Involving-Permutation-Matrices-1" href="https://docs.octave.org/latest/Expressions-Involving-Permutation-Matrices.html">21.2.2 Expressions Involving Permutation Matrices</a></li>
    </ul></li>
    <li><a id="toc-Functions-That-Are-Aware-of-These-Matrices" href="https://docs.octave.org/latest/Function-Support.html">21.3 Functions That Are Aware of These Matrices</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Diagonal-Matrix-Functions-1" href="https://docs.octave.org/latest/Diagonal-Matrix-Functions.html">21.3.1 Diagonal Matrix Functions</a></li>
      <li><a id="toc-Permutation-Matrix-Functions-1" href="https://docs.octave.org/latest/Permutation-Matrix-Functions.html">21.3.2 Permutation Matrix Functions</a></li>
    </ul></li>
    <li><a id="toc-Examples-of-Usage" href="https://docs.octave.org/latest/Example-Code.html">21.4 Examples of Usage</a></li>
    <li><a id="toc-Differences-in-Treatment-of-Zero-Elements" href="https://docs.octave.org/latest/Zeros-Treatment.html">21.5 Differences in Treatment of Zero Elements</a></li>
  </ul></li>
  <li><a id="toc-Sparse-Matrices-1" href="https://docs.octave.org/latest/Sparse-Matrices.html">22 Sparse Matrices</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Creation-and-Manipulation-of-Sparse-Matrices" href="https://docs.octave.org/latest/Basics.html">22.1 Creation and Manipulation of Sparse Matrices</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Storage-of-Sparse-Matrices-1" href="https://docs.octave.org/latest/Storage-of-Sparse-Matrices.html">22.1.1 Storage of Sparse Matrices</a></li>
      <li><a id="toc-Creating-Sparse-Matrices-1" href="https://docs.octave.org/latest/Creating-Sparse-Matrices.html">22.1.2 Creating Sparse Matrices</a></li>
      <li><a id="toc-Finding-Information-about-Sparse-Matrices" href="https://docs.octave.org/latest/Information.html">22.1.3 Finding Information about Sparse Matrices</a></li>
      <li><a id="toc-Basic-Operators-and-Functions-on-Sparse-Matrices" href="https://docs.octave.org/latest/Operators-and-Functions.html">22.1.4 Basic Operators and Functions on Sparse Matrices</a>
      <ul class="toc-numbered-mark">
        <li><a id="toc-Sparse-Functions-1" href="https://docs.octave.org/latest/Sparse-Functions.html">22.1.4.1 Sparse Functions</a></li>
        <li><a id="toc-Return-Types-of-Operators-and-Functions-1" href="https://docs.octave.org/latest/Return-Types-of-Operators-and-Functions.html">22.1.4.2 Return Types of Operators and Functions</a></li>
        <li><a id="toc-Mathematical-Considerations-1" href="https://docs.octave.org/latest/Mathematical-Considerations.html">22.1.4.3 Mathematical Considerations</a></li>
      </ul></li>
    </ul></li>
    <li><a id="toc-Linear-Algebra-on-Sparse-Matrices" href="https://docs.octave.org/latest/Sparse-Linear-Algebra.html">22.2 Linear Algebra on Sparse Matrices</a></li>
    <li><a id="toc-Iterative-Techniques-Applied-to-Sparse-Matrices" href="https://docs.octave.org/latest/Iterative-Techniques.html">22.3 Iterative Techniques Applied to Sparse Matrices</a></li>
    <li><a id="toc-Real-Life-Example-using-Sparse-Matrices" href="https://docs.octave.org/latest/Real-Life-Example.html">22.4 Real Life Example using Sparse Matrices</a></li>
  </ul></li>
  <li><a id="toc-Numerical-Integration-1" href="https://docs.octave.org/latest/Numerical-Integration.html">23 Numerical Integration</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Functions-of-One-Variable-1" href="https://docs.octave.org/latest/Functions-of-One-Variable.html">23.1 Functions of One Variable</a></li>
    <li><a id="toc-Orthogonal-Collocation-1" href="https://docs.octave.org/latest/Orthogonal-Collocation.html">23.2 Orthogonal Collocation</a></li>
    <li><a id="toc-Functions-of-Multiple-Variables-1" href="https://docs.octave.org/latest/Functions-of-Multiple-Variables.html">23.3 Functions of Multiple Variables</a></li>
  </ul></li>
  <li><a id="toc-Differential-Equations-1" href="https://docs.octave.org/latest/Differential-Equations.html">24 Differential Equations</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Ordinary-Differential-Equations-1" href="https://docs.octave.org/latest/Ordinary-Differential-Equations.html">24.1 Ordinary Differential Equations</a></li>
    <li><a id="toc-Differential_002dAlgebraic-Equations-1" href="https://docs.octave.org/latest/Differential_002dAlgebraic-Equations.html">24.2 Differential-Algebraic Equations</a></li>
    <li><a id="toc-Matlab_002dcompatible-solvers-1" href="https://docs.octave.org/latest/Matlab_002dcompatible-solvers.html">24.3 Matlab-compatible solvers</a></li>
  </ul></li>
  <li><a id="toc-Optimization-1" href="https://docs.octave.org/latest/Optimization.html">25 Optimization</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Linear-Programming-1" href="https://docs.octave.org/latest/Linear-Programming.html">25.1 Linear Programming</a></li>
    <li><a id="toc-Quadratic-Programming-1" href="https://docs.octave.org/latest/Quadratic-Programming.html">25.2 Quadratic Programming</a></li>
    <li><a id="toc-Nonlinear-Programming-1" href="https://docs.octave.org/latest/Nonlinear-Programming.html">25.3 Nonlinear Programming</a></li>
    <li><a id="toc-Linear-Least-Squares-1" href="https://docs.octave.org/latest/Linear-Least-Squares.html">25.4 Linear Least Squares</a></li>
  </ul></li>
  <li><a id="toc-Statistics-1" href="https://docs.octave.org/latest/Statistics.html">26 Statistics</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Descriptive-Statistics-1" href="https://docs.octave.org/latest/Descriptive-Statistics.html">26.1 Descriptive Statistics</a></li>
    <li><a id="toc-Statistics-on-Sliding-Windows-of-Data-1" href="https://docs.octave.org/latest/Statistics-on-Sliding-Windows-of-Data.html">26.2 Statistics on Sliding Windows of Data</a></li>
    <li><a id="toc-Basic-Statistical-Functions-1" href="https://docs.octave.org/latest/Basic-Statistical-Functions.html">26.3 Basic Statistical Functions</a></li>
    <li><a id="toc-Correlation-and-Regression-Analysis-1" href="https://docs.octave.org/latest/Correlation-and-Regression-Analysis.html">26.4 Correlation and Regression Analysis</a></li>
    <li><a id="toc-Distributions-1" href="https://docs.octave.org/latest/Distributions.html">26.5 Distributions</a></li>
    <li><a id="toc-Random-Number-Generation-1" href="https://docs.octave.org/latest/Random-Number-Generation.html">26.6 Random Number Generation</a></li>
  </ul></li>
  <li><a id="toc-Sets-1" href="https://docs.octave.org/latest/Sets.html">27 Sets</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Set-Operations-1" href="https://docs.octave.org/latest/Set-Operations.html">27.1 Set Operations</a></li>
  </ul></li>
  <li><a id="toc-Polynomial-Manipulations-1" href="https://docs.octave.org/latest/Polynomial-Manipulations.html">28 Polynomial Manipulations</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Evaluating-Polynomials-1" href="https://docs.octave.org/latest/Evaluating-Polynomials.html">28.1 Evaluating Polynomials</a></li>
    <li><a id="toc-Finding-Roots-1" href="https://docs.octave.org/latest/Finding-Roots.html">28.2 Finding Roots</a></li>
    <li><a id="toc-Products-of-Polynomials-1" href="https://docs.octave.org/latest/Products-of-Polynomials.html">28.3 Products of Polynomials</a></li>
    <li><a id="toc-Derivatives-_002f-Integrals-_002f-Transforms-1" href="https://docs.octave.org/latest/Derivatives-_002f-Integrals-_002f-Transforms.html">28.4 Derivatives / Integrals / Transforms</a></li>
    <li><a id="toc-Polynomial-Interpolation-1" href="https://docs.octave.org/latest/Polynomial-Interpolation.html">28.5 Polynomial Interpolation</a></li>
    <li><a id="toc-Miscellaneous-Functions-1" href="https://docs.octave.org/latest/Miscellaneous-Functions.html">28.6 Miscellaneous Functions</a></li>
  </ul></li>
  <li><a id="toc-Interpolation-1" href="https://docs.octave.org/latest/Interpolation.html">29 Interpolation</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-One_002ddimensional-Interpolation-1" href="https://docs.octave.org/latest/One_002ddimensional-Interpolation.html">29.1 One-dimensional Interpolation</a></li>
    <li><a id="toc-Multi_002ddimensional-Interpolation-1" href="https://docs.octave.org/latest/Multi_002ddimensional-Interpolation.html">29.2 Multi-dimensional Interpolation</a></li>
  </ul></li>
  <li><a id="toc-Geometry-1" href="https://docs.octave.org/latest/Geometry.html">30 Geometry</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Delaunay-Triangulation-1" href="https://docs.octave.org/latest/Delaunay-Triangulation.html">30.1 Delaunay Triangulation</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Plotting-the-Triangulation-1" href="https://docs.octave.org/latest/Plotting-the-Triangulation.html">30.1.1 Plotting the Triangulation</a></li>
      <li><a id="toc-Identifying-Points-in-Triangulation-1" href="https://docs.octave.org/latest/Identifying-Points-in-Triangulation.html">30.1.2 Identifying Points in Triangulation</a></li>
    </ul></li>
    <li><a id="toc-Voronoi-Diagrams-1" href="https://docs.octave.org/latest/Voronoi-Diagrams.html">30.2 Voronoi Diagrams</a></li>
    <li><a id="toc-Convex-Hull-1" href="https://docs.octave.org/latest/Convex-Hull.html">30.3 Convex Hull</a></li>
    <li><a id="toc-Interpolation-on-Scattered-Data-1" href="https://docs.octave.org/latest/Interpolation-on-Scattered-Data.html">30.4 Interpolation on Scattered Data</a></li>
    <li><a id="toc-Vector-Rotation-Matrices-1" href="https://docs.octave.org/latest/Vector-Rotation-Matrices.html">30.5 Vector Rotation Matrices</a></li>
  </ul></li>
  <li><a id="toc-Signal-Processing-1" href="https://docs.octave.org/latest/Signal-Processing.html">31 Signal Processing</a></li>
  <li><a id="toc-Image-Processing-1" href="https://docs.octave.org/latest/Image-Processing.html">32 Image Processing</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Loading-and-Saving-Images-1" href="https://docs.octave.org/latest/Loading-and-Saving-Images.html">32.1 Loading and Saving Images</a></li>
    <li><a id="toc-Displaying-Images-1" href="https://docs.octave.org/latest/Displaying-Images.html">32.2 Displaying Images</a></li>
    <li><a id="toc-Representing-Images-1" href="https://docs.octave.org/latest/Representing-Images.html">32.3 Representing Images</a></li>
    <li><a id="toc-Plotting-on-top-of-Images-1" href="https://docs.octave.org/latest/Plotting-on-top-of-Images.html">32.4 Plotting on top of Images</a></li>
    <li><a id="toc-Color-Conversion-1" href="https://docs.octave.org/latest/Color-Conversion.html">32.5 Color Conversion</a></li>
  </ul></li>
  <li><a id="toc-Audio-Processing-1" href="https://docs.octave.org/latest/Audio-Processing.html">33 Audio Processing</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Audio-File-Utilities-1" href="https://docs.octave.org/latest/Audio-File-Utilities.html">33.1 Audio File Utilities</a></li>
    <li><a id="toc-Audio-Device-Information-1" href="https://docs.octave.org/latest/Audio-Device-Information.html">33.2 Audio Device Information</a></li>
    <li><a id="toc-Audio-Player-1" href="https://docs.octave.org/latest/Audio-Player.html">33.3 Audio Player</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Playback-1" href="https://docs.octave.org/latest/Playback.html">33.3.1 Playback</a></li>
      <li><a id="toc-Properties-1" href="https://docs.octave.org/latest/Player-Properties.html">33.3.2 Properties</a></li>
    </ul></li>
    <li><a id="toc-Audio-Recorder-1" href="https://docs.octave.org/latest/Audio-Recorder.html">33.4 Audio Recorder</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Recording-1" href="https://docs.octave.org/latest/Recording.html">33.4.1 Recording</a></li>
      <li><a id="toc-Data-Retrieval-1" href="https://docs.octave.org/latest/Data-Retrieval.html">33.4.2 Data Retrieval</a></li>
      <li><a id="toc-Properties-2" href="https://docs.octave.org/latest/Recorder-Properties.html">33.4.3 Properties</a></li>
    </ul></li>
    <li><a id="toc-Audio-Data-Processing-1" href="https://docs.octave.org/latest/Audio-Data-Processing.html">33.5 Audio Data Processing</a></li>
  </ul></li>
  <li><a id="toc-Object-Oriented-Programming-1" href="https://docs.octave.org/latest/Object-Oriented-Programming.html">34 Object Oriented Programming</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Creating-a-Class-1" href="https://docs.octave.org/latest/Creating-a-Class.html">34.1 Creating a Class</a></li>
    <li><a id="toc-Class-Methods-1" href="https://docs.octave.org/latest/Class-Methods.html">34.2 Class Methods</a></li>
    <li><a id="toc-Indexing-Objects-1" href="https://docs.octave.org/latest/Indexing-Objects.html">34.3 Indexing Objects</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Defining-Indexing-And-Indexed-Assignment-1" href="https://docs.octave.org/latest/Defining-Indexing-And-Indexed-Assignment.html">34.3.1 Defining Indexing And Indexed Assignment</a></li>
      <li><a id="toc-Indexed-Assignment-Optimization-1" href="https://docs.octave.org/latest/Indexed-Assignment-Optimization.html">34.3.2 Indexed Assignment Optimization</a></li>
    </ul></li>
    <li><a id="toc-Overloading-Objects-1" href="https://docs.octave.org/latest/Overloading-Objects.html">34.4 Overloading Objects</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Function-Overloading-1" href="https://docs.octave.org/latest/Function-Overloading.html">34.4.1 Function Overloading</a></li>
      <li><a id="toc-Operator-Overloading-1" href="https://docs.octave.org/latest/Operator-Overloading.html">34.4.2 Operator Overloading</a></li>
      <li><a id="toc-Precedence-of-Objects-1" href="https://docs.octave.org/latest/Precedence-of-Objects.html">34.4.3 Precedence of Objects</a></li>
    </ul></li>
    <li><a id="toc-Inheritance-and-Aggregation-1" href="https://docs.octave.org/latest/Inheritance-and-Aggregation.html">34.5 Inheritance and Aggregation</a></li>
    <li><a id="toc-classdef-Classes-1" href="https://docs.octave.org/latest/classdef-Classes.html">34.6 <code class="code">classdef</code> Classes</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Creating-a-classdef-Class-1" href="https://docs.octave.org/latest/Creating-a-classdef-Class.html">34.6.1 Creating a <code class="code">classdef</code> Class</a></li>
      <li><a id="toc-Properties-3" href="https://docs.octave.org/latest/Properties.html">34.6.2 Properties</a></li>
      <li><a id="toc-Methods-1" href="https://docs.octave.org/latest/Methods.html">34.6.3 Methods</a></li>
      <li><a id="toc-Inheritance-1" href="https://docs.octave.org/latest/Inheritance.html">34.6.4 Inheritance</a></li>
      <li><a id="toc-Value-Classes-vs_002e-Handle-Classes-1" href="https://docs.octave.org/latest/Value-Classes-vs_002e-Handle-Classes.html">34.6.5 Value Classes vs. Handle Classes</a></li>
    </ul></li>
  </ul></li>
  <li><a id="toc-GUI-Development-1" href="https://docs.octave.org/latest/GUI-Development.html">35 GUI Development</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-I_002fO-Dialogs-1" href="https://docs.octave.org/latest/I_002fO-Dialogs.html">35.1 I/O Dialogs</a></li>
    <li><a id="toc-Progress-Bar-1" href="https://docs.octave.org/latest/Progress-Bar.html">35.2 Progress Bar</a></li>
    <li><a id="toc-UI-Elements-1" href="https://docs.octave.org/latest/UI-Elements.html">35.3 UI Elements</a></li>
    <li><a id="toc-GUI-Utility-Functions-1" href="https://docs.octave.org/latest/GUI-Utility-Functions.html">35.4 GUI Utility Functions</a></li>
    <li><a id="toc-User_002dDefined-Preferences-1" href="https://docs.octave.org/latest/User_002dDefined-Preferences.html">35.5 User-Defined Preferences</a></li>
    <li><a id="toc-Octave-Workspace-Windows-1" href="https://docs.octave.org/latest/Octave-Workspace-Windows.html">35.6 Octave Workspace Windows</a></li>
  </ul></li>
  <li><a id="toc-System-Utilities-1" href="https://docs.octave.org/latest/System-Utilities.html">36 System Utilities</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Timing-Utilities-1" href="https://docs.octave.org/latest/Timing-Utilities.html">36.1 Timing Utilities</a></li>
    <li><a id="toc-Filesystem-Utilities-1" href="https://docs.octave.org/latest/Filesystem-Utilities.html">36.2 Filesystem Utilities</a></li>
    <li><a id="toc-File-Archiving-Utilities-1" href="https://docs.octave.org/latest/File-Archiving-Utilities.html">36.3 File Archiving Utilities</a></li>
    <li><a id="toc-Networking-Utilities-1" href="https://docs.octave.org/latest/Networking-Utilities.html">36.4 Networking Utilities</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-FTP-Objects-1" href="https://docs.octave.org/latest/FTP-Objects.html">36.4.1 FTP Objects</a></li>
      <li><a id="toc-WWW-Access-1" href="https://docs.octave.org/latest/WWW-Access.html">36.4.2 WWW Access</a></li>
      <li><a id="toc-Base64-and-Binary-Data-Transmission-1" href="https://docs.octave.org/latest/Base64-and-Binary-Data-Transmission.html">36.4.3 Base64 and Binary Data Transmission</a></li>
    </ul></li>
    <li><a id="toc-Controlling-Subprocesses-1" href="https://docs.octave.org/latest/Controlling-Subprocesses.html">36.5 Controlling Subprocesses</a></li>
    <li><a id="toc-Process_002c-Group_002c-and-User-IDs" href="https://docs.octave.org/latest/Process-ID-Information.html">36.6 Process, Group, and User IDs</a></li>
    <li><a id="toc-Environment-Variables-1" href="https://docs.octave.org/latest/Environment-Variables.html">36.7 Environment Variables</a></li>
    <li><a id="toc-Current-Working-Directory-1" href="https://docs.octave.org/latest/Current-Working-Directory.html">36.8 Current Working Directory</a></li>
    <li><a id="toc-Password-Database-Functions-1" href="https://docs.octave.org/latest/Password-Database-Functions.html">36.9 Password Database Functions</a></li>
    <li><a id="toc-Group-Database-Functions-1" href="https://docs.octave.org/latest/Group-Database-Functions.html">36.10 Group Database Functions</a></li>
    <li><a id="toc-System-Information-1" href="https://docs.octave.org/latest/System-Information.html">36.11 System Information</a></li>
    <li><a id="toc-Hashing-Functions-1" href="https://docs.octave.org/latest/Hashing-Functions.html">36.12 Hashing Functions</a></li>
  </ul></li>
  <li><a id="toc-Packages-1" href="https://docs.octave.org/latest/Packages.html">37 Packages</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Installing-and-Removing-Packages-1" href="https://docs.octave.org/latest/Installing-and-Removing-Packages.html">37.1 Installing and Removing Packages</a></li>
    <li><a id="toc-Using-Packages-1" href="https://docs.octave.org/latest/Using-Packages.html">37.2 Using Packages</a></li>
    <li><a id="toc-Administrating-Packages-1" href="https://docs.octave.org/latest/Administrating-Packages.html">37.3 Administrating Packages</a></li>
    <li><a id="toc-Creating-Packages-1" href="https://docs.octave.org/latest/Creating-Packages.html">37.4 Creating Packages</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-The-DESCRIPTION-File-1" href="https://docs.octave.org/latest/The-DESCRIPTION-File.html">37.4.1 The DESCRIPTION File</a></li>
      <li><a id="toc-The-INDEX-File-1" href="https://docs.octave.org/latest/The-INDEX-File.html">37.4.2 The INDEX File</a></li>
      <li><a id="toc-PKG_005fADD-and-PKG_005fDEL-Directives-1" href="https://docs.octave.org/latest/PKG_005fADD-and-PKG_005fDEL-Directives.html">37.4.3 PKG_ADD and PKG_DEL Directives</a></li>
      <li><a id="toc-Missing-Components-1" href="https://docs.octave.org/latest/Missing-Components.html">37.4.4 Missing Components</a></li>
    </ul></li>
  </ul></li>
  <li><a id="toc-External-Code-Interface-1" href="https://docs.octave.org/latest/External-Code-Interface.html">Appendix A External Code Interface</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Oct_002dFiles-1" href="https://docs.octave.org/latest/Oct_002dFiles.html">A.1 Oct-Files</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Getting-Started-with-Oct_002dFiles-1" href="https://docs.octave.org/latest/Getting-Started-with-Oct_002dFiles.html">A.1.1 Getting Started with Oct-Files</a></li>
      <li><a id="toc-Matrices-and-Arrays-in-Oct_002dFiles-1" href="https://docs.octave.org/latest/Matrices-and-Arrays-in-Oct_002dFiles.html">A.1.2 Matrices and Arrays in Oct-Files</a></li>
      <li><a id="toc-Character-Strings-in-Oct_002dFiles-1" href="https://docs.octave.org/latest/Character-Strings-in-Oct_002dFiles.html">A.1.3 Character Strings in Oct-Files</a></li>
      <li><a id="toc-Cell-Arrays-in-Oct_002dFiles-1" href="https://docs.octave.org/latest/Cell-Arrays-in-Oct_002dFiles.html">A.1.4 Cell Arrays in Oct-Files</a></li>
      <li><a id="toc-Structures-in-Oct_002dFiles-1" href="https://docs.octave.org/latest/Structures-in-Oct_002dFiles.html">A.1.5 Structures in Oct-Files</a></li>
      <li><a id="toc-Sparse-Matrices-in-Oct_002dFiles-1" href="https://docs.octave.org/latest/Sparse-Matrices-in-Oct_002dFiles.html">A.1.6 Sparse Matrices in Oct-Files</a>
      <ul class="toc-numbered-mark">
        <li><a id="toc-Array-and-Sparse-Class-Differences-1" href="https://docs.octave.org/latest/Array-and-Sparse-Class-Differences.html">A.1.6.1 Array and Sparse Class Differences</a></li>
        <li><a id="toc-Creating-Sparse-Matrices-in-Oct_002dFiles-1" href="https://docs.octave.org/latest/Creating-Sparse-Matrices-in-Oct_002dFiles.html">A.1.6.2 Creating Sparse Matrices in Oct-Files</a></li>
        <li><a id="toc-Using-Sparse-Matrices-in-Oct_002dFiles-1" href="https://docs.octave.org/latest/Using-Sparse-Matrices-in-Oct_002dFiles.html">A.1.6.3 Using Sparse Matrices in Oct-Files</a></li>
      </ul></li>
      <li><a id="toc-Accessing-Global-Variables-in-Oct_002dFiles-1" href="https://docs.octave.org/latest/Accessing-Global-Variables-in-Oct_002dFiles.html">A.1.7 Accessing Global Variables in Oct-Files</a></li>
      <li><a id="toc-Calling-Octave-Functions-from-Oct_002dFiles-1" href="https://docs.octave.org/latest/Calling-Octave-Functions-from-Oct_002dFiles.html">A.1.8 Calling Octave Functions from Oct-Files</a></li>
      <li><a id="toc-Calling-External-Code-from-Oct_002dFiles-1" href="https://docs.octave.org/latest/Calling-External-Code-from-Oct_002dFiles.html">A.1.9 Calling External Code from Oct-Files</a></li>
      <li><a id="toc-Allocating-Local-Memory-in-Oct_002dFiles-1" href="https://docs.octave.org/latest/Allocating-Local-Memory-in-Oct_002dFiles.html">A.1.10 Allocating Local Memory in Oct-Files</a></li>
      <li><a id="toc-Input-Parameter-Checking-in-Oct_002dFiles-1" href="https://docs.octave.org/latest/Input-Parameter-Checking-in-Oct_002dFiles.html">A.1.11 Input Parameter Checking in Oct-Files</a></li>
      <li><a id="toc-Exception-and-Error-Handling-in-Oct_002dFiles-1" href="https://docs.octave.org/latest/Exception-and-Error-Handling-in-Oct_002dFiles.html">A.1.12 Exception and Error Handling in Oct-Files</a></li>
      <li><a id="toc-Documentation-and-Testing-of-Oct_002dFiles-1" href="https://docs.octave.org/latest/Documentation-and-Testing-of-Oct_002dFiles.html">A.1.13 Documentation and Testing of Oct-Files</a></li>
    </ul></li>
    <li><a id="toc-Mex_002dFiles-1" href="https://docs.octave.org/latest/Mex_002dFiles.html">A.2 Mex-Files</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Getting-Started-with-Mex_002dFiles-1" href="https://docs.octave.org/latest/Getting-Started-with-Mex_002dFiles.html">A.2.1 Getting Started with Mex-Files</a></li>
      <li><a id="toc-Working-with-Matrices-and-Arrays-in-Mex_002dFiles-1" href="https://docs.octave.org/latest/Working-with-Matrices-and-Arrays-in-Mex_002dFiles.html">A.2.2 Working with Matrices and Arrays in Mex-Files</a></li>
      <li><a id="toc-Character-Strings-in-Mex_002dFiles-1" href="https://docs.octave.org/latest/Character-Strings-in-Mex_002dFiles.html">A.2.3 Character Strings in Mex-Files</a></li>
      <li><a id="toc-Cell-Arrays-with-Mex_002dFiles-1" href="https://docs.octave.org/latest/Cell-Arrays-with-Mex_002dFiles.html">A.2.4 Cell Arrays with Mex-Files</a></li>
      <li><a id="toc-Structures-with-Mex_002dFiles-1" href="https://docs.octave.org/latest/Structures-with-Mex_002dFiles.html">A.2.5 Structures with Mex-Files</a></li>
      <li><a id="toc-Sparse-Matrices-with-Mex_002dFiles-1" href="https://docs.octave.org/latest/Sparse-Matrices-with-Mex_002dFiles.html">A.2.6 Sparse Matrices with Mex-Files</a></li>
      <li><a id="toc-Calling-Other-Functions-in-Mex_002dFiles-1" href="https://docs.octave.org/latest/Calling-Other-Functions-in-Mex_002dFiles.html">A.2.7 Calling Other Functions in Mex-Files</a></li>
    </ul></li>
    <li><a id="toc-Standalone-Programs-1" href="https://docs.octave.org/latest/Standalone-Programs.html">A.3 Standalone Programs</a></li>
    <li><a id="toc-Java-Interface-1" href="https://docs.octave.org/latest/Java-Interface.html">A.4 Java Interface</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Making-Java-Classes-Available-1" href="https://docs.octave.org/latest/Making-Java-Classes-Available.html">A.4.1 Making Java Classes Available</a></li>
      <li><a id="toc-How-to-use-Java-from-within-Octave-1" href="https://docs.octave.org/latest/How-to-use-Java-from-within-Octave.html">A.4.2 How to use Java from within Octave</a></li>
      <li><a id="toc-Set-up-the-JVM-1" href="https://docs.octave.org/latest/Set-up-the-JVM.html">A.4.3 Set up the JVM</a></li>
      <li><a id="toc-Java-Interface-Functions-1" href="https://docs.octave.org/latest/Java-Interface-Functions.html">A.4.4 Java Interface Functions</a></li>
    </ul></li>
  </ul></li>
  <li><a id="toc-Test-and-Demo-Functions-1" href="https://docs.octave.org/latest/Test-and-Demo-Functions.html">Appendix B Test and Demo Functions</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Test-Functions-1" href="https://docs.octave.org/latest/Test-Functions.html">B.1 Test Functions</a></li>
    <li><a id="toc-Demonstration-Functions-1" href="https://docs.octave.org/latest/Demonstration-Functions.html">B.2 Demonstration Functions</a></li>
  </ul></li>
  <li><a id="toc-Obsolete-Functions-1" href="https://docs.octave.org/latest/Obsolete-Functions.html">Appendix C Obsolete Functions</a></li>
  <li><a id="toc-Known-Causes-of-Trouble" href="https://docs.octave.org/latest/Trouble.html">Appendix D Known Causes of Trouble</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Actual-Bugs-We-Haven_0027t-Fixed-Yet" href="https://docs.octave.org/latest/Actual-Bugs.html">D.1 Actual Bugs We Haven’t Fixed Yet</a></li>
    <li><a id="toc-Reporting-Bugs-1" href="https://docs.octave.org/latest/Reporting-Bugs.html">D.2 Reporting Bugs</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Have-You-Found-a-Bug_003f" href="https://docs.octave.org/latest/Bug-Criteria.html">D.2.1 Have You Found a Bug?</a></li>
      <li><a id="toc-Where-to-Report-Bugs" href="https://docs.octave.org/latest/Bug-Tracker.html">D.2.2 Where to Report Bugs</a></li>
      <li><a id="toc-How-to-Report-Bugs" href="https://docs.octave.org/latest/Bug-Reporting.html">D.2.3 How to Report Bugs</a></li>
      <li><a id="toc-Sending-Patches-for-Octave" href="https://docs.octave.org/latest/Sending-Patches.html">D.2.4 Sending Patches for Octave</a></li>
    </ul></li>
    <li><a id="toc-How-To-Get-Help-with-Octave-1" href="https://docs.octave.org/latest/How-To-Get-Help-with-Octave.html">D.3 How To Get Help with Octave</a></li>
    <li><a id="toc-How-to-Distinguish-Between-Octave-and-Matlab-1" href="https://docs.octave.org/latest/How-to-Distinguish-Between-Octave-and-Matlab.html">D.4 How to Distinguish Between Octave and Matlab</a></li>
  </ul></li>
  <li><a id="toc-Installing-Octave" href="https://docs.octave.org/latest/Installation.html">Appendix E Installing Octave</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Build-Dependencies-1" href="https://docs.octave.org/latest/Build-Dependencies.html">E.1 Build Dependencies</a>
    <ul class="toc-numbered-mark">
      <li><a id="toc-Obtaining-the-Dependencies-Automatically-1" href="https://docs.octave.org/latest/Obtaining-the-Dependencies-Automatically.html">E.1.1 Obtaining the Dependencies Automatically</a></li>
      <li><a id="toc-Build-Tools-1" href="https://docs.octave.org/latest/Build-Tools.html">E.1.2 Build Tools</a></li>
      <li><a id="toc-External-Packages-1" href="https://docs.octave.org/latest/External-Packages.html">E.1.3 External Packages</a></li>
    </ul></li>
    <li><a id="toc-Running-Configure-and-Make-1" href="https://docs.octave.org/latest/Running-Configure-and-Make.html">E.2 Running Configure and Make</a></li>
    <li><a id="toc-Compiling-Octave-with-64_002dbit-Indexing-1" href="https://docs.octave.org/latest/Compiling-Octave-with-64_002dbit-Indexing.html">E.3 Compiling Octave with 64-bit Indexing</a></li>
    <li><a id="toc-Installation-Problems-1" href="https://docs.octave.org/latest/Installation-Problems.html">E.4 Installation Problems</a></li>
  </ul></li>
  <li><a id="toc-Grammar-and-Parser-1" href="https://docs.octave.org/latest/Grammar-and-Parser.html">Appendix F Grammar and Parser</a>
  <ul class="toc-numbered-mark">
    <li><a id="toc-Keywords-1" href="https://docs.octave.org/latest/Keywords.html">F.1 Keywords</a></li>
    <li><a id="toc-Parser-1" href="https://docs.octave.org/latest/Parser.html">F.2 Parser</a></li>
  </ul></li>
  <li><a id="toc-GNU-GENERAL-PUBLIC-LICENSE" href="https://docs.octave.org/latest/Copying.html">Appendix G GNU GENERAL PUBLIC LICENSE</a></li>
  <li><a id="toc-Concept-Index-1" href="https://docs.octave.org/latest/Concept-Index.html" rel="index">Concept Index</a></li>
  <li><a id="toc-Function-Index-1" href="https://docs.octave.org/latest/Function-Index.html" rel="index">Function Index</a></li>
  <li><a id="toc-Operator-Index-1" href="https://docs.octave.org/latest/Operator-Index.html" rel="index">Operator Index</a></li>
  <li><a id="toc-Graphics-Properties-Index-1" href="https://docs.octave.org/latest/Graphics-Properties-Index.html" rel="index">Graphics Properties Index</a></li>
</ul>
</div>
</div>
</div>
<hr>
<div class="nav-panel">
<p>
Next: <a href="https://docs.octave.org/latest/Preface.html" accesskey="n" rel="next">Preface</a> &nbsp; [<a href="#SEC_Contents" title="Table of contents" rel="contents">Contents</a>][<a href="https://docs.octave.org/latest/Concept-Index.html" title="Index" rel="index">Index</a>]</p>
</div>





</body></html>
