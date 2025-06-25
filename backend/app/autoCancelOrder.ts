// lib/autoCancelLoop.ts
import { prisma } from '@/app/api/general';

let intervalStarted = false;

export function startAutoCancelLoop() {
  if (intervalStarted) return;
  intervalStarted = true;

  setInterval(async () => {
    const batasWaktu = new Date(Date.now() - 24 * 60 * 60 * 1000); // 24 jam lalu

    try {
      const updated = await prisma.tb_pemesanan.updateMany({
        where: {
          status: 'MENUNGGUPEMBAYARAN',
          createdAt: {
            lt: batasWaktu,
          },
        },
        data: {
          status: 'DIBATALKAN',
        },
      });

      if (updated.count > 0) {
        console.log(`[AUTO CANCEL] ${updated.count} pesanan dibatalkan.`);
      }
    } catch (err) {
      console.error('Gagal update status otomatis:', err);
    }
  }, 1000); // 1000ms = 1 detik

  console.log('[CRON] Auto-cancel berjalan setiap detik...');
}
