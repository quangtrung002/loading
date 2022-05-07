import style from "./MoonLoader.module.css"

export default function MoonLoader() {
  return (
    <div className="main">
      <h1>MoonLoader</h1>
      <div className={style.container}>
        <div className={style.wrap}></div>
        <div className={style.moonLoader}></div>
      </div>
    </div>
  )
}
