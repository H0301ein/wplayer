import Local from "./Local";
import Online from "./Online";
import Sub from "./Sub";

export default function Player() {
  return (
    <div className="grid m-auto">
      <video
        id="plyr"
        controlsList="nodownload"
        poster="none"
        controls
        autoPlay
      >
        <track id="setSub" default />
      </video>
      <Local />
      <br />
      <Sub />
      <Online />
    </div>
  );
}
