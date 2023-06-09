DROP DATABASE IF EXISTS employee_tracker_db;

-- DROP TABLE IF EXISTS departments
-- DROP TABLE IF EXISTS employees
-- DROP TABLE IF EXISTS roles


CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;
CREATE TABLE departments (
 
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL, 
  PRIMARY KEY(id)
);

CREATE TABLE roles (
 
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL, 
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees (
 
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL, 
  last_name VARCHAR(30) NOT NULL, 
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(role_id) REFERENCES roles(id),
  FOREIGN KEY(manager_id) REFERENCES employees(id)

);
