import React from 'react'
import style from "./DotLoader.module.css"
export default function DotLoader() {
  return (
    <div className='main'>
      <h1>DotLoader</h1>
      <div className={style.container}>
        <div className={style.item}></div>
        <div className={style.item}></div>
      </div>
    </div>
  )
}
