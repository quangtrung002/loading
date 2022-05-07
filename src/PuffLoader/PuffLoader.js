import style from "./PuffLoader.module.css"

export default function PuffLoader() {
  return (
    <div className="main">
      <h1>PuffLoader</h1>
      <div className={style.container}>
        <div className={style.puffLoader}></div>
      </div>
    </div>
  )
}
