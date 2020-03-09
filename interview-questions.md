# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: Model...

  Researched answer: Stands for "Model-View-Controller." MVC is an application design model comprised of three interconnected parts. They include the model (data), the view (user interface), and the controller (processes that handle input). The MVC model or "pattern" is commonly used for developing modern user interfaces.



2. What is a gem?

  Your answer: code that can be added to your own project from a library

  Researched answer:A gem is a library of code that you can include in your own project to provide some additional functionality. Usually these libraries are written by other people and shared publicly for open use.



3. Why is it important to have validations in your application?

  Your answer: makign sure we obtain valid data into your database

  Researched answer:Validations are used to ensure that only valid data is saved into your database. ... They are database agnostic, cannot be bypassed by end users, and are convenient to test and maintain. Rails makes them easy to use, provides built-in helpers for common needs, and allows you to create your own validation methods as well.



4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer:  A person can have many computers, a computer can be assaigned to a person

  Researched answer: 



5. What is object-relational mapping?

  Your answer: i dont know im sorry :/

  Researched answer: Object-relational mapping in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes A RESTful route is a route that provides mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route also depends on the HTTP verb and the URL.


- json  an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value).


- API a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.



- Endpoints An endpoint, as I imagine they may be using it in this course, is simply a route defined by your rails application. In terms of an API (which can mean many things and is worth further research on your part), hitting that endpoint will serve up a resource from your application, or perform some form of action


- Strong params Strong Parameters. It provides an interface for protecting attributes from end-user assignment. This makes Action Controller parameters forbidden to be used in Active Model mass assignment until they have been explicitly enumerated
