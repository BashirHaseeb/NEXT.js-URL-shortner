import { redirect } from "next/navigation";
import dbConnect from "@/utils/dbconnect";
import { Url } from "@/app/api/submit/route";

export default async function Page({ params }) {
  const shorturl = (await params).shorturl; // Extract the dynamic segment from params

  // Connect to the database
  await dbConnect();

  // Query the database for the provided short URL
  const doc = await Url.findOne({ shorturl });

  if (doc) {
    // Redirect if the document is found
    redirect(doc.url);
  } else {
    // Redirect to a 'not-found' page if not found
    redirect(`${process.env.NEXT_PUBLIC_HOST}/not-found`);
  }

  // No return statement after a redirect
}
