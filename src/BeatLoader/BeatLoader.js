import style from "./BeatLoader.module.css"
export default function BeatLoader() {
  return (
    <div className="main">
      <h1>BeatLoader</h1>
      <div className={style.container}>
        {
          Array.from({length:3}).map(()=>(
            <div className={style.dot}></div>
          ))
        }
      </div>
    </div>
  )
}
