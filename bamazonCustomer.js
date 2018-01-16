var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password12",
  database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// list the inventory
function start() {

  connection.query("SELECT * FROM products WHERE stock_quantity > 0", function(err, results) {
      for (var i = 0; i < results.length; i++) {
      	console.log("ID: " + results[i].item_id + " | " + " Item: " + results[i].product_name + " | " + " Price: $" + results[i].price + " | " + " Quantity: " + results[i].stock_quantity);
      }
      goShopping();
    })
}

function goShopping(){

    inquirer.prompt([{
        name: "itemID",
        type: "input",
        message: "What is the ID of the product you would like to buy?",
        //Validate: checks for number
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        name: "quantity",
        type: "input",
        message: "How many would you like to buy?",
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }]).then(function(answer) {
 
        var query = 'SELECT * FROM products WHERE item_id=' + answer.itemID;
        connection.query(query, function(err, results) {
        	//console.log(answer.quantity);
          if (answer.quantity <= results[0].stock_quantity) {

			console.log("We currently have " + results[0].stock_quantity + " " + results[0].product_name + ".");
			

			var newQuantity = results[0].stock_quantity - answer.quantity

			connection.query(
			"UPDATE products SET ? WHERE ?",
			[
			  {
			    stock_quantity: newQuantity
			  },
			  {
			    item_id: answer.itemID
			  }
			],
			function(err, results) {
			  //console.log(res.affectedRows + " products updated!\n");
			}
			);

			console.log("Thank you for shopping at Bamazon! Your order of "+ answer.quantity + " " + results[0].product_name + " is now being processed.");

		  } else {
			  console.log("Insufficient quantity!!");
		  }
		   inquirer
		    .prompt({
		      name:"shop",
		      type:"confirm",
		      message:"Would you like to shop for another item?",
		      default: true
		    })
		    .then(function(answer) {
		      // go shopping
		      if (answer.shop === true) {
		        start();
		      }
		      else {
		        console.log("See you next time!");
		        return;
		      }
		    });
        })
    })    


}

