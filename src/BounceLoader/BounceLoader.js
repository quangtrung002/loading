import style from './BounceLoader.module.css'

export default function BounceLoader() {
  return (
    <div className='main'>
      <h1>BounceLoader</h1>
      <div className={style.container}>
        <div className={style.round}>
          <div className={style.round2}></div>
        </div>
      </div>
    </div>
  )
}
