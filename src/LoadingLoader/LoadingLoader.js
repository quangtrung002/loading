import style from "./LoadingLoader.module.css"

export default function LoadingLoader() {
  return (
    <div className="main">
      <h1>LoadingLoader</h1>
      <div className={style.container}>
        loading
      </div>
    </div>
  )
}
