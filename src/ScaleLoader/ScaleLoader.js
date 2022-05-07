import style from "./ScaleLoader.module.css"

export default function ScaleLoader() {
  return (
    <div className="main">
      <h1>ScaleLoader</h1>
      <div className={style.container}>
        {
          Array.from({length:6}).map(()=>(
            <div className={style.scaleLoader}></div>
          ))
        }
      </div>
    </div>
  )
}
