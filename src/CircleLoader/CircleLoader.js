import style from "./CircleLoader.module.css"

export default function CircleLoader() {
  return (
    <div className='main'>
      <h1>CircleLoader</h1>
      <div className={style.container}>
        <div className={style.circleLoader1}></div>
        <div className={style.circleLoader2}></div>
        <div className={style.circleLoader3}></div>
        <div className={style.circleLoader4}></div>
        <div className={style.circleLoader5}></div>
      </div>
    </div>
  )
}
