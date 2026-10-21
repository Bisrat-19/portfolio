import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Bisrat Dereje - Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const sketch = await readFile(join(process.cwd(), 'public/bisrat-sketch.png'))
  const sketchSrc = `data:image/png;base64,${sketch.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px 0 90px',
          background: '#ffffff',
          color: '#09090b',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 620 }}>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>
            Bisrat Dereje<span style={{ color: '#10b981' }}>.</span>
          </div>
          <div style={{ fontSize: 40, color: '#52525b', marginTop: 8 }}>Software Engineer</div>
          <div style={{ fontSize: 28, color: '#3f3f46', marginTop: 36, lineHeight: 1.4 }}>
            Building reliable, well-structured web applications and scalable systems.
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 40,
              fontSize: 24,
              color: '#ffffff',
              background: '#09090b',
              borderRadius: 9999,
              padding: '10px 26px',
              alignSelf: 'flex-start',
            }}
          >
            bisratdereje.me
          </div>
        </div>
        <img src={sketchSrc} width={560} height={560} style={{ objectFit: 'contain' }} alt="" />
      </div>
    ),
    size,
  )
}
