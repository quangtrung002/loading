import style from "./ClipLoader.module.css"

export default function ClipLoader() {
  return (
    <div className="main">
      <h1>ClipLoader</h1>
      <div className={style.container}>
        <div className={style.wrap}></div>
        <div className={style.item}></div>
      </div>
    </div>
  )
}
