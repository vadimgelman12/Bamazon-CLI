CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100),
  price DECIMAL(10,2) NOT NULL,  
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);


   
   
INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("Franklin mug", "accessories", 1000, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("ferrari", "cars", 100000, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("javascript textbook", "books", 20, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("hangman game", "games", 10, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("I love Franklin t-shirt", "accessories", 500, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("Macbook", "technology", 6, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("iPhone 8", "technology", 1000, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("Franklin mouse pad", "accessories", 1000, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("Yoda keychain", "accessories", 5, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("cookies", "food", 10, 100);