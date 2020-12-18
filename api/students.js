const connectToDatabase = require('../utils/mongodb')
module.exports = async (req, res) => {
    // Get a database connection, cached or otherwise,
    // using the connection string environment variable as the argument
    const db = await connectToDatabase(process.env.MONGODB_URI)
  
    // Select the "users" collection from the database
    const collection = await db.collection('students')
  
    // Select the users collection from the database
    const users = await collection.find({}).toArray()
  
    // Respond with a JSON string of all users in the collection
    res.status(200).json({ users })
  }