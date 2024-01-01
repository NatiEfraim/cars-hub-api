const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

async function connectDB() {
  try {
    const {
      MONGODB_USERNAME,
      MONGODB_PASSWORD,
      MONGODB_CLUSTER,
      MONGODB_DATABASE,
    } = process.env;

    // Construct the MongoDB Atlas connection string
    const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.tbnyt3u.mongodb.net/${MONGODB_DATABASE}`;

    // Connect to MongoDB Atlas using the constructed connection string
    await mongoose.connect(
      uri
      //     , {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // }
    );

    // Log a message once connected
    console.log("Connected to MongoDB");
  } catch (error) {
    // Log an error message if connection fails
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

// Call the connectDB function to establish the connection
connectDB();

// Export the mongoose connection directly
module.exports = mongoose.connection;
