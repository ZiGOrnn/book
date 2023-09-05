import { NextResponse } from "next/server";
import { cacheManager } from "../../../manager/cache";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("🚀 ~ file: route.ts:10 ~ POST ~ cacheManager:", cacheManager);
  const user = cacheManager.users.find(
    (u) => u.username === body.username && u.password === body.password
  );

  if (user) {
    return NextResponse.json({ id: user.id, username: user.username });
  } else {
    return new Response("Unauthorized", {
      status: 401,
    });
  }
}
