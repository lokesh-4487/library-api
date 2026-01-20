# library-api
Library RESTful API using Node.js and Express

*COMPANY* : CODTECH IT SOLUTIONS

*NAME* : LOKESH AMOL PATIL

*INTERN ID* : CTIS3438

*DOMAIN* : SOFTWARE DEVELOPMENT

*DURATION* : 8 WEEKS

*MENTOR* : NEELA SANTOSH


##A Library Management API is a backend application that is used to manage information related to books in a library in a structured and efficient way. In modern software systems, most applications do not work as a single unit; instead, they are divided into two main parts: frontend and backend. The frontend is the user interface that users can see and interact with, while the backend handles data storage, logic, and communication. In this project, a RESTful API is developed for a library system, which acts as the backend and allows operations such as adding new books, viewing existing books, updating book details, and deleting books when required. These operations together are known as CRUD operations, which stand for Create, Read, Update, and Delete.
The Library API is developed using JavaScript with Node.js as the runtime environment. Node.js is used because it allows JavaScript to run on the server side and is lightweight, fast, and suitable for building APIs. The Express.js framework is used on top of Node.js to simplify the process of creating server routes and handling HTTP requests. Express makes the code more organized and readable, which is especially helpful for beginners. The API follows REST architecture principles, meaning it uses standard HTTP methods such as POST, GET, PUT, and DELETE to perform different operations on resources. In this project, the main resource is “books”.
To store the data, a simple in-memory data structure (array) is used instead of a database. This approach is suitable for learning purposes and helps in understanding how data flows between the client and the server. Each book in the library contains attributes such as book ID, title, and author. When a new book is added using the POST method, the server automatically assigns a unique ID to the book. The GET method is used to retrieve all the books stored in the system. The PUT method allows updating an existing book by using its ID, and the DELETE method removes a book from the library based on the provided ID. This clear separation of operations makes the API easy to understand and maintain.
Various tools are used during the development of this Library API. Visual Studio Code is used as the code editor because it provides features such as syntax highlighting, integrated terminal, and extension support, which make development easier. Node Package Manager (npm) is used to manage project dependencies such as Express and body-parser. Postman is used as an API testing tool to send HTTP requests and view responses without building a frontend. Using Postman helps in verifying whether each API endpoint is working correctly and returning the expected output in JSON format.
JSON (JavaScript Object Notation) is used as the data exchange format because it is lightweight, easy to read, and widely used in web applications. All requests and responses in the Library API are handled in JSON, which makes communication between the client and server consistent. The API is run locally on a specific port, and the server listens for incoming requests continuously while it is running.
Overall, this Library RESTful API project provides a clear understanding of how backend systems work in real-world applications. It demonstrates how data can be managed through APIs without directly interacting with databases or user interfaces. The project helps in learning important concepts such as REST principles, HTTP methods, server-side programming, and API testing. This kind of system can be extended in the future by adding authentication, database integration, or a frontend interface. As a learning project, it builds a strong foundation in backend development and prepares students for more advanced software development tasks.

#OUTPUT

<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/1de3fcf4-aac0-4649-85ea-fdce08863d39" />

<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/cd022784-0a0f-4817-ae1b-3c3585b1b5c6" />

<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/979920fc-1a29-49a6-8765-4f65b32e095e" />


<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/06f35b7b-f1c6-4be9-b7a2-75f5ce1e82d5" />


<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/9f001be9-7ce7-4e8c-9ea7-c93a1357df45" />
