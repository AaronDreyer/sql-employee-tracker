DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (role)
    REFERENCES role(id)
    ON DELETE SET NULL
    manager_id INT NOT NULL
    FOREIGN KEY (employee)
    REFERENCES employee(id)
    ON DELETE SET NULL
);






-- department

-- id: INT PRIMARY KEY

-- name: VARCHAR(30) to hold department name

-- role

-- id: INT PRIMARY KEY

-- title: VARCHAR(30) to hold role title

-- salary: DECIMAL to hold role salary

-- department_id: INT to hold reference to department role belongs to

-- employee

-- id: INT PRIMARY KEY

-- first_name: VARCHAR(30) to hold employee first name

-- last_name: VARCHAR(30) to hold employee last name

-- role_id: INT to hold reference to employee role

-- manager_id: INT to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)