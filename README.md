# employee-management-system

Employee Management System
A full-stack CRUD application for managing employee records, built with ReactJS for the frontend and Spring Boot for the backend, utilizing MySQL for data storage.

🧪 Technologies Used
Frontend: ReactJS, React Router, Axios, Bootstrap
Backend: Spring Boot, Spring Data JPA
Database: MySQL
Build Tools: Maven (for backend), npm (for frontend)

Backend Setup (Spring Boot)

1.Clone the repository:

git clone https://github.com/abhigithub321/employee-management-system.git
cd employee-management-system/backend

2.Configure MySQL:

Create a database named employee_management_system.
Update src/main/resources/application.properties with your MySQL credentials:

spring.datasource.url=jdbc:mysql://localhost:3306/employee_management_system?allowPublicKeyRetrieval=true&useSSL=false
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
spring.jpa.hibernate.ddl-auto=update

3.Run the Spring Boot application:

mvn spring-boot:run
The backend will be accessible at http://localhost:8080.

