# Harnessing Deep Learning for Evasive PDF Malware Detection:
## Graduation project is submitted to Computer and System Engineering Department in Partial fulfilment of the requirements for the Degree of Bachelor of Computer and System Engineering
# Team Member:
Osama Nasrelden Abdelalem (Machin Learning Engineer)
Mostafa Mamdouh Sayed (Machin Learning Engineer)
Abdallah Abdelmoty Ahmed (Backend Engineer)
Mohamed Ahmed Mohamed (Frontend Engineer)
Shady Esmael Hrajy (Team Leader and UI/UX)
# Project objective:
The objective of our graduation project is to design and implement a comprehensive system that enhances cybersecurity by detecting evasive malware in PDF files using advanced deep learning techniques. This system integrates three key components: artificial intelligence, web development, and embedded systems, each playing a crucial role in achieving our goal.
### Artificial Intelligence:
Our first aim is to develop a robust deep-learning model capable of accurately identifying malware in PDF files. This model will be trained on a diverse dataset of known malware and benign files, ensuring it can effectively distinguish between safe and malicious content. The use of deep learning allows the system to learn complex patterns and improve detection accuracy over time, making it a reliable solution for identifying evasive malware.
### Web Development:
The second component involves creating a user-friendly website that allows users to upload PDF files for malware scanning. This website will serve as the interface for the AI model, providing real-time analysis and feedback to users. When a user uploads a PDF, the website will process the file using the trained deep learning model and promptly inform the user whether the PDF contains malware. This seamless interaction ensures that users can easily and quickly verify the safety of their documents without needing specialized knowledge.
# My Contribute in the Project:
As Backend Developer I was responsabile for desgine the system, and database schema to provide rebust system to allow the end user to use the ML Model to check if the pdf is benign or malicious.
I started with specify the function and non-functional requirements, Stakeholders, Use cases and the flow for the systme,then designed the schema of the database for relational database.
then designed the API and used Django REST framework for implementing API end points.
I was responsible for integrate the backend system with ML model.
### Used Technologies:
#### Server:
Django: The Django is the best choice for our website because it building over python that is the best programming language to integrate with ML Model.
#### Database:
MYSQL: Since MYSQL supports ACID transactions, ensuring data integrity and reliability and we need this cause will be purchase in the website and we need to sure allow transaction acheive ACID properties. 
#### API:
Django REST Framework: is a powerful and flexible toolkit for building Web APIs in Django. Its key features include
#### Authentication and Permissions:
JWT (Simple JWT): Since JWTs are self-contained and carry the necessary information to authenticate a user, the server doesn't need to store session state. This makes it easier to scale applications horizontally.




