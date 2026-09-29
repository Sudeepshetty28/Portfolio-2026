export async function POST(req: Request) {
  const body = await req.json();

  console.log("Backend Connected Successfully!");
  console.log(body);

  return Response.json({
    success: true,
    message: "Message received successfully!",
  });
}