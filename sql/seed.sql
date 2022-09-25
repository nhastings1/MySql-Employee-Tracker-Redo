INSERT INTO department (name)
VALUES 
("Sales"), 
("Produce"), 
("Engineering"), 
("Marketing"), 
("Leadership");

INSERT INTO role (title, salary, department_id)
VALUE 
("Salesman", 25000.00, 2), 
("Stoker", 600000.00, 3), 
("Civil Engineer", 600000.00, 4),
("SEO Marketer", 200000.00, 1), 
("CEO", 800000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE 
("James", "Suede", 1, 3), 
("John", "Varner", 1, 1), 
("Jackie", "Starker", 3, 2), 
("Jill", "Quintin", 5, 2), 
("Jasper", "Potter", 5, 2);