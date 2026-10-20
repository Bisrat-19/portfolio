import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Bisrat Dereje - Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const photo = await readFile(join(process.cwd(), 'public/Bisrat.png'))
  const photoSrc = `data:image/png;base64,${photo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 90px',
          background: 'radial-gradient(circle at 75% 50%, rgba(16,185,129,0.25), #000000 60%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 640 }}>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>
            Bisrat Dereje<span style={{ color: '#10b981' }}>.</span>
          </div>
          <div style={{ fontSize: 40, color: '#a1a1aa', marginTop: 12 }}>Software Engineer</div>
          <div style={{ fontSize: 28, color: '#d4d4d8', marginTop: 36, lineHeight: 1.4 }}>
            Building reliable, well-structured web applications and scalable systems.
          </div>
          <div style={{ fontSize: 26, color: '#10b981', marginTop: 40 }}>bisratdereje.me</div>
        </div>
        {/* Container crops the thin black frame baked into the source photo */}
        <div
          style={{
            display: 'flex',
            width: 360,
            height: 360,
            borderRadius: 9999,
            overflow: 'hidden',
            border: '6px solid #10b981',
          }}
        >
          <img src={photoSrc} width={390} height={390} style={{ margin: -15 }} alt="" />
        </div>
      </div>
    ),
    size,
  )
}
