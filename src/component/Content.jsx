import { CONTENT_INFO } from "../content"
const Content=({menuName})=>{
    return <div className="content">
    <video className={menuName==='island'?'active':''} src="assets/videos/island.mp4" autoPlay muted loop></video>
    <video className={menuName==='spring'?'active':''} src="/assets/videos/spring.mp4" autoPlay muted loop></video>
    <video className={menuName==='summer'?'active':''} src="/assets/videos/summer.mp4" autoPlay muted loop></video>
    <video className={menuName==='autumn'?'active':''} src="/assets/videos/autumn.mp4" autoPlay muted loop></video>
    <video className={menuName==='winter'?'active':''} src="/assets/videos/winter.mp4" autoPlay muted loop></video>
    <div className="video-overlay"></div>
    <section className="text-description">
      <h1>{CONTENT_INFO[menuName].h1}</h1>
      <h2>{CONTENT_INFO[menuName].h2}</h2>
      <p>{CONTENT_INFO[menuName.p]}</p>
      <a herf="#">Explore</a>
    </section>
  </div>
}

export default Content