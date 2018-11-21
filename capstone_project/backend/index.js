const express = require('express'),
        app = express(),
        cors = require('cors'),
        bodyParser = require('body-parser');

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods: POST, GET, DELETE, OPTIONS")
    // res.header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
    response.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const knex = require('knex')({
	client: 'postgres',
	connection: {
		host: '127.0.0.1',
		user: 'postgres',
		password: 'postgres',
		database: 'bee_journal',
		charset: 'utf8'
	}
});

const bookshelf = require('bookshelf')(knex);

const Item = bookshelf.Model.extend({
    tableName: 'hives'
});

app.get('/hives', (req, res)=> {
    Item.fetchAll()
        .then(hives => {
            hives = hives.models.map(hive => {
                return hive.attributes;
            });
            console.log('GETTING THE', hives);
            res.json(hives);
        })
        .catch(error => {
            console.log(error);
        });
});

app.post('/hives', (req,res) => {
    const newItem = new Item({
        name: req.body.name,
        queen: req.body.queen,
        capped: req.body.capped,
        uncapped: req.body.uncapped,
        laying: req.body.laying,
        low: req.body.low,
        normal: req.body.normal,
        thriving: req.body.thriving
    });

    newItem.save().then(hives => {
        res.send(hives.attributes)
        console.log(hives.attributes);
    })
})

    app.delete('/hives', (req, res) => {
        console.log(req.body)
        new Item({id: req.body.id})
        .destroy()
        .then(result => {
            Item.fetchAll()
            .then(hives => {
                hives = hives.models.map(hive => {
                    return hive.attributes;
                });
                console.log('GETTING THE', hives);
                res.json(hives);
            })
            .catch(error => {
                console.log(error);
            });
        })
        .catch(error => {
            console.log(error);
        })
    })

    





app.listen(8080, () => {
    console.log('listening on server 8080');
})