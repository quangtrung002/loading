import DotLoader from "./DotLoader/DotLoader";
import BounceLoader from "./BounceLoader/BounceLoader";
import BeatLoader from "./BeatLoader/BeatLoader";
import ClipLoader from "./ClipLoader/ClipLoader";
import LoadingLoader from "./LoadingLoader/LoadingLoader";
import ClockLoader from "./ClockLoader/ClockLoader";
import RotateLoader from "./RotateLoader/RotateLoader";
import ScaleLoader from "./ScaleLoader/ScaleLoader";
import RingLoader from "./RingLoader/RingLoader";
import PuffLoader from "./PuffLoader/PuffLoader";
import CircleLoader from "./CircleLoader/CircleLoader";
import MoonLoader from "./MoonLoader/MoonLoader";
import LoadingProLoader from "./LoadingProLoader/LoadingProLoader";
import LoadingMediumLoader from "./LoadingMediumLoader/LoadingMediumLoader";
import "./App.css"
function App() {
  return (
    <div className="mainContent">
      <DotLoader />
      <BounceLoader />
      <BeatLoader />
      <ClipLoader/>
      <LoadingLoader />
      <ClockLoader/>
      <RotateLoader />
      <ScaleLoader/>
      <RingLoader />
      <PuffLoader />
      <CircleLoader />
      <MoonLoader/>
      <LoadingProLoader />
      <LoadingMediumLoader/>
    </div>
  );
}

export default App;
