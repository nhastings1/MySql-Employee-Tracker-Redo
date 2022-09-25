DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (

id INT NOT NULL AUTO_INCREMENT,

name VARCHAR(30) NOT NULL,

PRIMARY KEY(id)

);

CREATE TABLE role (

id INT NOT NULL AUTO_INCREMENT,

title VARCHAR(30) NOT NULL,

salary DECIMAL(10,2) NOT NULL,

department_id INT NOT NULL,

PRIMARY KEY (id)

);

CREATE TABLE employee (

id INT NOT NULL AUTO_INCREMENT,

first_name VARCHAR(30) NOT NULL,

last_name VARCHAR(30) NOT NULL,

role_id INT NOT NULL,

manager_id INT,

PRIMARY KEY (id)

);


INSERT INTO department (name)
VALUE ("Sales");
INSERT INTO department (name)
VALUE ("Produce");
INSERT INTO department (name)
VALUE ("Engineering");
INSERT INTO department (name)
VALUE ("Marketing");
INSERT INTO department (name)
VALUE ("Leadership");


INSERT INTO role (title, salary, department_id)
VALUE ("Salesman", 25000.00, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Stoker", 600000.00, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Civil Engineer", 600000.00, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("SEO Marketer", 200000.00, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("CEO", 800000.00, 5);


INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("James", "Suede", null, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("John", "Varner", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Jackie","Starker",null,3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Jill", "Quintin", 1, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Jasper", "Potter", 4, 5);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
