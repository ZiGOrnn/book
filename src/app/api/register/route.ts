import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { cacheManager } from "../../../manager/cache";

export async function POST(request: Request) {
  const body = await request.json();

  if (body.username && body.password) {
    const id = uuidv4();
    cacheManager.users.push({
      id,
      username: body.username,
      password: body.password,
    });
    return NextResponse.json({ id });
  } else {
    return new Response("Unauthorized", {
      status: 401,
    });
  }
}
