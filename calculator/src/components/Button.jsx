// nhận props nhãn (chữ hiện trên nút) và màu (loại nút: so / toantu / xoa / bang)
export default function Button({ nhan, mau, onClick }) {
  return (
    <button className={`nut ${mau}`} onClick={onClick}>
      {nhan}
    </button>
  )
}
