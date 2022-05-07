import style from "./RingLoader.module.css"

export default function RingLoader() {
  return (
    <div className="main">
      <h1>RingLoader</h1>
      <div className={style.container}>
        <div className={style.ringLoader}></div>
        <div className={style.ringLoader}></div>
      </div>
    </div>
  )
}
