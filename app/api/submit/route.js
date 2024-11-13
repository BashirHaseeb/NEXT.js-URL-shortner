import dbConnect from "@/utils/dbconnect";
import mongoose from 'mongoose';

// Example schema
const userSchema = new mongoose.Schema({
  url: String,
  shorturl: String,
});

const Url = mongoose.models.Url || mongoose.model('Url', userSchema);
export { Url };  // Exporting the model


export async function POST(req) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the request body (assuming JSON format)
    const body = await req.json();
    const { url, shorturl } = body;  // To get short URL from the body
    console.log('Received data:', body);


    // Check if the short URL already exists in the database
    const existingUrl = await Url.findOne({ shorturl });
    if (existingUrl) {
      return new Response(JSON.stringify({ error: 'Short URL already taken. Please choose a different one.' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }


    // Create a new document using the received data
    const newUrl = new Url({ url, shorturl });
    await newUrl.save();

    // Return a successful response
    return new Response(JSON.stringify({ message: 'Short URL generated successfully', receivedData: body }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error:', error);
    // Handle errors and return a response with status 500
    return new Response(JSON.stringify({ error: 'Failed to process the request' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
