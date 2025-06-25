// server.ts
import express from 'express';
import next from 'next';
import { startAutoCancelLoop } from './app/autoCancelOrder';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, port: 1220 }); // pakai port 1220 sesuai script awal kamu
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Mulai cron job saat server aktif
  startAutoCancelLoop();

  server.all('*', (req, res) => handle(req, res));

  server.listen(1220, () => {
    console.log('🚀 Server berjalan di http://localhost:1220');
  });
});
