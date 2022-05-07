import style from './LoadingProLoader.module.css'

export default function LoadingProLoader() {
  return (
    <div className='main'>
      <h1>LoadingProLoader</h1>
      <div className={style.container}>
        {
          Array.from({ length: 15 }).map((item, index) => (
            <div className={style.loadingPro} style={{ '--i': index }}></div>
          ))
        }
      </div>
    </div>
  )
}
