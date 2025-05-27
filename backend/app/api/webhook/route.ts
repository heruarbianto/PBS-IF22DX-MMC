// app/api/webhook/route.ts
import { NextResponse } from 'next/server';
import { exec } from 'child_process';

export async function POST(request: Request) {
  try {
    // Membaca payload JSON dari body request
    const payload = await request.json();

    // Memeriksa apakah event adalah push ke branch main
    if (payload.ref === 'refs/heads/master') {
      // Menjalankan script deploy.sh
      exec('./deploy.sh', (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      });
    }

    return NextResponse.json({ message: 'Webhook received and processed' });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
