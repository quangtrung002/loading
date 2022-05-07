import style from "./RotateLoader.module.css"

export default function RotateLoader() {
  return (
    <div className="main">
      <h1>RotateLoader</h1>
      <div className={style.container}>
        {Array.from({length:3}).map(()=>(
          <div className={style.rotateLoader}></div>
        ))}
      </div>
    </div>
  )
}
