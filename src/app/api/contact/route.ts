import { isContactConfigured, submitInquiry } from "@/app/contact/submit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({ configured: isContactConfigured() });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const result = await submitInquiry(formData);
  return Response.json(result, { status: result.ok ? 200 : 400 });
}
