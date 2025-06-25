// lib/autoCancelCron.ts
import cron from 'node-cron';
import { prisma } from '@/app/api/general';

let cronStarted = false;

export function startAutoCancelCron() {
  if (cronStarted) return;
  cronStarted = true;

  // Format: detik menit jam tanggal bulan hari
  cron.schedule('* * * * * *', async () => {
  const batasWaktu = new Date(Date.now() - 24 * 60 * 60 * 1000); // 24 jam lalu

  try {
    const updated = await prisma.tb_pemesanan.updateMany({
      where: {
        status: 'MENUNGGUPEMBAYARAN',
        createdAt: { lt: batasWaktu }
      },
      data: {
        status: 'DIBATALKAN'
      }
    });

    if (updated.count > 0) {
      console.log(`[AUTO CANCEL] ${updated.count} pesanan dibatalkan.`);
    }
  } catch (err) {
    console.error('Gagal update status otomatis:', err);
  }
});}
