import style from "./ClockLoader.module.css"

export default function ClockLoader() {
  return (
    <div className="main">
      <h1>ClockLoader</h1>
      <div className={style.container}>
        <div className={style.hour}></div>
        <div className={style.second}></div>
      </div>
    </div>
  )
}
