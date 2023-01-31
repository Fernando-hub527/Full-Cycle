const express = require('express');
const mysql = require('mysql')
const json = require('body-parser')

const app = express()
app.use(express.static(__dirname + '/static'));
app.use(json())

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const connection = mysql.createConnection(config)

connection.query('CREATE TABLE people(id int not null auto_increment, name varchar(255), primary key(id))', (erro, row)=>{
    console.log(erro)
})


app.get('/user', (req,res)=>{
    const sql = `SELECT * FROM people`
    connection.query(sql, (err, rows)=>{
        console.log(rows)
        res.status(200).send({user: rows})
    })

})

app.post('/user', (req,res)=> {
    const sql = `INSERT INTO people(name) VALUES('${req.body.name}')`
    connection.query(sql)
    res.status(200).send()
})

app.listen(80, ()=>{console.log('listening')})