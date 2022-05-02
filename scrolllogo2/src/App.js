import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

function App() {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <div style={{
          marginLeft: "auto",
          marginRight: "auto",
          transform: "scale(0.5)",
          top: "-46vh",
          position: "relative",
        }} > 
 
            <Animator animation={batch(Fade(),MoveOut(-1000, -1000))}>
              <img src="./logo/tinified/top-left-only.png" style={{            height: "46vh",
          width: "98.29vw",position: "relative",}}/>
            </Animator>
            <Animator animation={batch(Fade(), MoveOut(1000, -1000))}>
              <img src="./logo/tinified/top-right-only.png" style={{             height: "46vh",
          width: "98.29vw", position: "relative",   top: "-46vh", }}/>
            </Animator>
            <Animator animation={batch(Fade(), MoveOut(-1000, 0))}>
              <img src="./logo/tinified/middle-left-only.png" style={{             height: "46vh",
          width: "98.29vw",position: "relative",top: "-92vh", }}/>
            </Animator>
            <Animator animation={batch(Fade(), MoveOut(1000, -500))}>
              <img src="./logo/tinified/middle-right-only.png" style={{             height: "46vh",
          width: "98.29vw", position: "relative",top: "-138vh", }}/>
            </Animator>
            <Animator animation={batch(Fade(), MoveOut(-1000, -1000))}>
              <img src="./logo/tinified/bottom-left-only.png" style={{             height: "46vh",
          width: "98.29vw", position: "relative",top: "-184vh", }}/>
            </Animator>
            <Animator animation={batch(Fade(), MoveOut(1000, -1000))}>
              <img src="./logo/tinified/bottom-right-only.png" style={{           height: "46vh",
          width: "98.29vw", position: "relative",top: "-230vh", }}/>
            </Animator>
        </div>
      </ScrollPage>
      <ScrollPage page={1}>
        <div style={{height: "100vh",}}>ewwwwwwr</div>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
