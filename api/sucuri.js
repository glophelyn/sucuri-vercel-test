export async function GET() {
  return new Response(JSON.stringify({ message: "working" }), {
    headers: { "Content-Type": "application/json" },
  });
}