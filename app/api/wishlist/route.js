import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'wishlist.json');

async function readEmails() {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeEmails(emails) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(emails, null, 2), 'utf8');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const email = String(body?.email || '').trim().toLowerCase();

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
    }

    const emails = await readEmails();

    if (emails.some((entry) => entry.email === email)) {
      return NextResponse.json({ message: 'You are already on the wishlist.', alreadyJoined: true });
    }

    emails.push({ email, joinedAt: new Date().toISOString() });
    await writeEmails(emails);

    return NextResponse.json({ message: 'You are on the list. We will notify you first.', success: true });
  } catch {
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
