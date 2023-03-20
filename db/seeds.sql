INSERT INTO department (name)
VALUES ("Management")
        ("Sales"),
        ("Accounting"),
        ("Human Resources"),
        ("Customer Service"),
        ("Quality Assurance"),
        ("Office Administration");

INSERT INTO role (title, salary, department_id)
VALUES ("Branch Manger", 70000, 1),
        ("Assistant to the Branch Manager", 60000, 1),
        ("Salesman", 50000, 3),
        ("Accountant", 65000, 4),
        ("Human Resources Representative", 55000, 5),
        ("Customer Service Specialist", 55000, 6),
        ("QA Director", 50000, 7),
        ("Receptionist", 45000, 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 1, 1),
        ("Jim", "Halpert", 3, null),
        ("Dwight", "Schrute", 2, 2),
        ("Stanley", "Hudson", 3, null),
        ("Phyllis", "Vance", 3, null),
        ("Oscar", "Martinez", 4, null),
        ("Angela", "Martin", 4, null),
        ("Kevin", "Malone", 4, null),
        ("Toby", "Flenderson", 5, null),
        ("Kelly", "Kapoor", 6, null),
        ("Creed", "Bratton", 7, null),
        ("Pam", "Beesly", 8, null),
        ("Erin", "Hannon", 8, null);

