import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'
import { exec } from 'child_process'

const SECRET = 'your_secret' // Samakan dengan GitHub Webhook Secret

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed')

  const signature = req.headers['x-hub-signature-256'] as string
  const rawBody = JSON.stringify(req.body)

  const hmac = crypto.createHmac('sha256', SECRET)
  const digest = `sha256=${hmac.update(rawBody).digest('hex')}`

  if (signature !== digest) {
    return res.status(401).send('Invalid signature')
  }

  // Jalankan deploy.sh
  exec('sh ./deploy.sh', (error, stdout, stderr) => {
    if (error) {
      console.error('Exec error:', error)
      return res.status(500).json({ error: 'Deployment failed' })
    }

    console.log('STDOUT:', stdout)
    console.error('STDERR:', stderr)
    res.status(200).json({ message: 'Deployment triggered successfully' })
  })
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}
