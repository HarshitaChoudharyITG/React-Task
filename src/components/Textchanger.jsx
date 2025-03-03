import React, { useState } from 'react'

export default function Textchanger() {
  const [text, setText] = useState("Enter Text Here"); 
  const handleUppercase = () => setText(text.toUpperCase());
  return (
    <div className='text-changer'>
      <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <button className="text-chnager-btn" type="button" onClick={handleUppercase}>Change UpperFormat</button>
    </div>
  )
}
