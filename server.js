import express from 'express';
import GraphHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import models from './src/db/models';
import schema from './src/schema';
import path from 'path';

const app = express();

function startApp(port) {
    app.listen(port, function(){
        console.log('|o| yupiii!! Express listening on port', port);
    });
}

models.sequelize.sync()
    .then(() => {
        startApp(7001);
    })
    .catch((e) => {
        throw new Error(e);
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/graphql', GraphHTTP((request) => ({
    schema,
    pretty: process.env.NODE_ENV === 'development',
    graphiql: process.env.NODE_ENV === 'development'
})));

app.use(express.static(__dirname));
app.get('/docs', function(req, res){
    res.sendFile(path.join(__dirname+'/docs/index.html'));
});
