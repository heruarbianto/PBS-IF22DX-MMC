// app/api/webhook/route.ts
import { NextRequest } from 'next/server'
import crypto from 'crypto'
import { exec } from 'child_process'

const SECRET = 'your_secret' // sebaiknya ambil dari .env

export async function POST(req: NextRequest) {
  const signature = req.headers.get('x-hub-signature-256')
  const rawBody = await req.text()

  const hmac = crypto.createHmac('sha256', SECRET)
  const digest = `sha256=${hmac.update(rawBody).digest('hex')}`

  if (signature !== digest) {
    return new Response('Invalid signature', { status: 401 })
  }

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
