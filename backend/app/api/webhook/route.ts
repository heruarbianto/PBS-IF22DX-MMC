// app/api/webhook/route.ts
import { NextRequest } from 'next/server'
import { exec } from 'child_process'

export async function POST(req: NextRequest) {
  // Tidak ada verifikasi signature — siapa pun bisa trigger webhook ini

  return new Promise((resolve) => {
    exec('sh ./deploy.sh', (error, stdout, stderr) => {
      if (error) {
        console.error('Exec error:', error)
        resolve(new Response('Deployment failed', { status: 500 }))
      } else {
        console.log('STDOUT:', stdout)
        console.error('STDERR:', stderr)
        resolve(new Response('Deployment triggered successfully', { status: 200 }))
      }
    })
  })
}
