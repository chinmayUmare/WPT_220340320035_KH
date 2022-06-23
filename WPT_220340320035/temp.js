
const express = require('express');
const app = express();

const mysql = require('mysql2');

const cors = require('cors');
app.use(cors());



app.listen(99);











app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not


app.get('/getprice', (req, res) => {
	console.log("ajax function called");
	const dbobject = {
		host: 'localhost',
		user: 'root',
		password: 'cdac',
		database: 'chinmay',
		port: 3306
	}
})

const connection = mysql.createConnection(dbobject);

let output = { status: false, detail: { bookid: 0, bookname: "", price: "" } }
let bookid = req.query.bookid;
console.log(bookid);
conn.query('select * from book where bookid = ?', [bookid],
	(error, rows) => {
		if (error) {
			console.log(error);

		}
		else {
			if (rows.length > 0) {
				output.status = true;
				output.detail = rows[0];
			}
			else {
				console.log("no book with this id");
			}
		}
		console.log(output);
		res.send(output);
	});


	app.get('/updateprice', (req, resp) => {
		console.log("ajax function called");
		const dbobject = {
			host: 'localhost',
			user: 'root',
			password: 'cdac',
			database: 'chinmay',
			port: 3306
		}
	})
	
	const connection = mysql.createConnection(dbobject);
	
	let output = { status: false}
	let bookid = req.query.bookid;
	console.log(bookid);
	conn.query('update book set price = ? where bookid = ?', [price, bookid],
		(error, res) => {
			if (error) {
				console.log(error);
	
			}
			else {
				if (res.affectedRows > 0) {
					output.status = true;
					
				}
				else {
					console.log("did not update book");
				}
			}
			console.log(output);
			resp.send(output);
		});









app.listen(99, function () {
	console.log("server listening at port 8081...");
});