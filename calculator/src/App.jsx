import { useState } from 'react'
import Display from './components/Display'
import Button from './components/Button'
import './App.css'

const danhSachNut = [
  { nhan: '+', gt: '+', mau: 'phu' },
  { nhan: '-', gt: '-', mau: 'phu' },
  { nhan: 'x', gt: '*', mau: 'phu' },
  { nhan: '%', gt: '%', mau: 'phu' },
  { nhan: '7', gt: '7', mau: 'so' },
  { nhan: '8', gt: '8', mau: 'so' },
  { nhan: '9', gt: '9', mau: 'so' },
  { nhan: '=', gt: '=', mau: 'bang' },
  { nhan: '4', gt: '4', mau: 'so' },
  { nhan: '5', gt: '5', mau: 'so' },
  { nhan: '6', gt: '6', mau: 'so' },
  { nhan: '1', gt: '1', mau: 'so' },
  { nhan: '2', gt: '2', mau: 'so' },
  { nhan: '3', gt: '3', mau: 'so' },
  { nhan: '0', gt: '0', mau: 'so' },
  { nhan: '.', gt: '.', mau: 'so' },
  { nhan: 'AC', gt: 'C', mau: 'so' },
]

function tinh(bieuThuc) {
  if (!/^[0-9+\-*/.%]+$/.test(bieuThuc)) return 'Lỗi'
  try {
    const ketQua = Function('"use strict"; return (' + bieuThuc + ')')()
    return Number.isFinite(ketQua) ? String(ketQua) : 'Lỗi'
  } catch {
    return 'Lỗi'
  }
}

export default function App() {
  const [bieuThuc, setBieuThuc] = useState('')

  function bam(gt) {
    if (gt === 'C') return setBieuThuc('')
    if (gt === '=') return setBieuThuc((truoc) => (truoc ? tinh(truoc) : ''))
    setBieuThuc((truoc) => truoc + gt)
  }

  return (
    <div className="may-tinh">
      <Display giaTri={bieuThuc || '0'} />
      <div className="bang-nut">
        {danhSachNut.map((nut) => (
          <Button key={nut.nhan} nhan={nut.nhan} mau={nut.mau} onClick={() => bam(nut.gt)} />
        ))}
      </div>
    </div>
  )
}