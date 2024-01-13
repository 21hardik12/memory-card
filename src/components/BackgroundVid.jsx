import backgroundVid from "../assets/background.mp4";

function BackgroundVid() {
  return (
    <video className="videoTag" muted>
      <source src={backgroundVid} type="video/mp4" />
    </video>
  );
}

export default BackgroundVid;
