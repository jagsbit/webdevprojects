let qna=[
     "DBMS stands for Database Management System. It's a software system that enables users to define, create, maintain, and control access to databases. It serves as an interface between users and the database, facilitating data storage, retrieval, and manipulation.",
     "DBMS offers several advantages, including data integrity, security, data consistency, efficient data access, data sharing, and data independence. It provides a centralized repository for data management and enables concurrent access by multiple users.",
     "Data normalization is the process of organizing data in a database efficiently. It involves breaking down large tables into smaller, related tables and eliminating redundant data to reduce data redundancy and dependency. This ensures data integrity and facilitates data management and maintenance.",
     "A primary key is a unique identifier for each record in a table, ensuring data uniqueness and integrity. On the other hand, a foreign key is a column or a set of columns that establishes a link between two tables, enforcing referential integrity and facilitating data relationships.",
     "SQL (Structured Query Language) is a standard programming language designed for managing and manipulating relational databases. It is used to perform various operations such as data retrieval, insertion, deletion, and updating in a database management system.",
     "ACID stands for Atomicity, Consistency, Isolation, and Durability. Atomicity ensures that a transaction is treated as a single unit of work, Consistency ensures that the database remains in a valid state before and after the transaction, Isolation ensures that transactions are executed independently, and Durability ensures that the changes made by committed transactions are permanent.",
     "A database index is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional space and decreased performance on write operations. It is important because it allows for faster data access by providing quick lookup of records based on indexed columns.",
     "Data concurrency control is the process of managing simultaneous access to shared data by multiple users or transactions in a database system. It ensures that transactions execute concurrently without interfering with each other, maintaining data consistency and integrity.",
     "The different types of database relationships include one-to-one, one-to-many, and many-to-many relationships. In a one-to-one relationship, each record in one table corresponds to exactly one record in another table. In a one-to-many relationship, each record in one table can relate to multiple records in another table. In a many-to-many relationship, each record in one table can relate to multiple records in another table, and vice versa.",
     "Transactions play a crucial role in ensuring data consistency in DBMS by grouping a set of database operations into a single logical unit of work. They ensure that either all the operations in the transaction are executed successfully and committed to the database, or none of them are executed, preserving data integrity and consistency."

]
let plusBtn=document.querySelectorAll('.btn-plus')
let minusBtn=document.querySelectorAll('.btn-minus')
let answer=document.querySelectorAll('.answer')
let questions=document.querySelectorAll('.question')
for(let i=0;i<plusBtn.length;i++){
    plusBtn[i].addEventListener('click',()=>{
   
        answer[i].style.display="block"
        answer[i].innerText=qna[i]
        minusBtn[i].style.display="inline"
        plusBtn[i].style.display="none"
        answer[i].classList.add('bdr')
    })
    minusBtn[i].addEventListener('click',()=>{
        answer[i].style.display="none"
        minusBtn[i].style.display="none"
        plusBtn[i].style.display="inline"
        answer[i].classList.remove('bdr')
    })
}
