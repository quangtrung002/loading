import style from './LoadingMediumLoader.module.css'

export default function LoadingMediumLoader() {
  return (
    <div className='main'>
      <h1>LoadingMediumLoader</h1>
      <div className={style.container}>
        <h2 className={style.loadingTitle}>loading...</h2>
        <div className={style.loadingMedium}></div>
      </div>
    </div>
  )
}
