import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Bisrat Dereje - Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const photo = await readFile(join(process.cwd(), 'public/bisrat.jpg'))
  const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`

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
          background: '#09090b',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 640 }}>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>
            Bisrat Dereje<span style={{ color: '#10b981' }}>.</span>
          </div>
          <div style={{ fontSize: 40, color: '#a1a1aa', marginTop: 8 }}>Software Engineer</div>
          <div style={{ fontSize: 28, color: '#d4d4d8', marginTop: 36, lineHeight: 1.4 }}>
            Building reliable, well-structured web applications and scalable systems.
          </div>
          <div style={{ display: 'flex', marginTop: 40, fontSize: 24, color: '#e4e4e7', border: '1px solid #3f3f46', borderRadius: 9999, padding: '8px 22px', width: 'auto', alignSelf: 'flex-start' }}>bisratdereje.me</div>
        </div>
        <div style={{ display: 'flex', padding: 10, border: '1px dashed #52525b', borderRadius: 12 }}>
          <img src={photoSrc} width={360} height={360} style={{ borderRadius: 6, objectFit: 'cover' }} alt="" />
        </div>
      </div>
    ),
    size,
  )
}
