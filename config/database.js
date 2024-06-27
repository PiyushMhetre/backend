import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export function dbconnect() {
  mongoose.connect(process.env.DATABASE_URL || 'mongodb+srv://piyushmhetre9596:aXcwASYL1eQfppAc@cluster0.chtw4ix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error.message);
      process.exit(1);
    });
}
