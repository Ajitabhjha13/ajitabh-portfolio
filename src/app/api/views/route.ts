import { NextResponse } from "next/server";
import { eq, sql } from "drizzle-orm";

async function getDb() {
  if (!process.env.DATABASE_URL) return null;
  const { db } = await import("@/db");
  const { pageViews } = await import("@/db/schema");
  return { db, pageViews };
}

async function ensureRow(db: NonNullable<Awaited<ReturnType<typeof getDb>>>["db"], pageViews: NonNullable<Awaited<ReturnType<typeof getDb>>>["pageViews"]) {
  const rows = await db.select().from(pageViews).limit(1);
  if (rows.length === 0) {
    await db.insert(pageViews).values({ count: 0 });
    return 0;
  }
  return rows[0].count;
}

export async function GET() {
  const conn = await getDb();
  if (!conn) return NextResponse.json({ count: 0 });
  const count = await ensureRow(conn.db, conn.pageViews);
  return NextResponse.json({ count });
}

/** Bump the visitor counter once per session (called from the client) */
export async function POST() {
  try {
    const conn = await getDb();
    if (!conn) return NextResponse.json({ count: 0 });
    const { db, pageViews } = conn;
    const rows = await db.select().from(pageViews).limit(1);
    if (rows.length === 0) {
      await db.insert(pageViews).values({ count: 1 });
      return NextResponse.json({ count: 1 });
    }
    const updated = await db
      .update(pageViews)
      .set({ count: sql`${pageViews.count} + 1` })
      .where(eq(pageViews.id, rows[0].id))
      .returning({ count: pageViews.count });
    return NextResponse.json({ count: updated[0].count });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
