const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');
const authRouter = require('./routes/auth')
const pizzaRoutes = require('./routes/pizzaRoutes')
const orderRoutes = require('./routes/orderRoutes')
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const queryRoutes = require('./routes/queryRoutes')

const app = express();
app.use(cors ({credentials: true, origin: 'http://localhost:3000',
"Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, PATCH, OPTIONS"}))
app.use(cookieParser());

const db = require('./database')

if (process.env.NODE_ENV !== 'production') {

    dotenv.config();
}

app.use(express.json());


app.use('/api/v1/',authRouter);
app.use('/api/v1/',pizzaRoutes);
app.use('/api/v1/',orderRoutes);
app.use('/api/v1/',userRoutes);
app.use('/api/v1/',adminRoutes);
app.use('/api/v1/',queryRoutes);


app.get('/',(req, res) => {
    res.send('server is working')
});



const port = process.env.PORT || 5000;

app.listen(port,() => {console.log('server is running on port '+port)});