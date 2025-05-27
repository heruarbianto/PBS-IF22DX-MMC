// app/api/webhook/route.ts

import { NextRequest } from 'next/server'
import { exec } from 'child_process'
import path from 'path'

export async function POST(req: NextRequest) {
  // Path absolut ke deploy.sh
  const deployScriptPath = path.resolve(process.cwd(), 'deploy.sh')

  return new Promise((resolve) => {
    exec(`bash "${deployScriptPath}"`, (error, stdout, stderr) => {
      if (error) {
        console.error('🔴 Deployment error:', error.message)
        console.error('⚠️ STDERR:', stderr)
        return resolve(
          new Response(`Deployment failed:\n${stderr || error.message}`, {
            status: 500,
          })
        )
      }

      console.log('✅ Deployment success')
      console.log('📄 STDOUT:', stdout)
      return resolve(
        new Response('Deployment triggered successfully', {
          status: 200,
        })
      )
    })
  })
}
