import "./App.css";
import LikeImage from "./components/LikeImage";
import LikePost from "./components/LikePost";
import HigherOrderComponent from "./higherOrderComponents/HigherOrderComponent";
const LikePostH = HigherOrderComponent(LikeImage);
const LikeImageH = HigherOrderComponent(LikePost);

import RenderPropsComponent from "./RenderComponents/RenderPropsComponent";
import LikeImageRender from "./RenderComponents/LikeImageRender";
import LikePostRender from "./RenderComponents/LikePostRender";

function App() {
  return (
    <div>
      <h3>Normal Components</h3>
      <div className="buttons">
        <LikePost />
        <LikeImage />
      </div>
      <h3>HOC</h3>
      <div className="hof buttons">
        <LikePostH />
        <LikeImageH />
      </div>
      <h3>Render Props</h3>
      <div className="render buttons">
        <RenderPropsComponent
          render={(count, incrementCount) => (
            <LikeImageRender count={count} incrementCount={incrementCount} />
          )}
        />
        <RenderPropsComponent
          render={(count, incrementCount) => (
            <LikePostRender count={count} incrementCount={incrementCount} />
          )}
        />
      </div>
    </div>
  );
}

export default App;
