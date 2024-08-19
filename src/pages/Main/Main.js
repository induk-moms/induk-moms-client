import { Top1Img, Top2Img, Top3Img } from '../../assets'
import Header from './Header'
import './Main.css'

function Main() {
  return (
    <div>
      <Header />
      <div id="club-list-top3">
        <Top1Img id="club_top1" />
        <div id="club-top23">
          <Top2Img />
          <Top3Img />
        </div>
        <div id="club_top1_title"></div>
        <div id="club_top23_title">
          <div className="club-rank-title">
            <div>Top2</div>
            <div>CTP</div>
          </div>
          <div className="club-rank-title club-top1-wrapper">
            <div>Top1</div>
            <div>Induck moms</div>
          </div>
          <div className="club-rank-title">
            <div>Top3</div>
            <div>CTP</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
