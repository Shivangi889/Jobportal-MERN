const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('./middlewares/error');
//import routes
const authRoutes=require("./routes/authRoutes");
const userRoutes=require("./routes/userRoutes");
const jobsTypeRoutes = require("./routes/jobsTypeRoutes");
const jobsRoutes = require("./routes/jobsRoutes");

dotenv.config();



const app = express();

// Database connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connected'))
  .catch((err) => console.error(err));

// Middleware
app.use(morgan('dev'));
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));
app.use(cookieParser());
app.use(cors());

// Routes
// app.get('/', (req, res) => {
//   res.send('<h1>WELCOME TO JOB PORTAL</h1>');
// });

app.use('/api',authRoutes)
app.use('/api',userRoutes)
app.use("/api",jobsTypeRoutes)
app.use("/api",jobsRoutes)


//error middleware
app.use(errorHandler)

// Port
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.DEV_MODE} Mode on port ${PORT}`);
});
