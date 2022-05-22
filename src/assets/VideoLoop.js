import AnimationPlane from './animations/AnimationPlane'

const VideoLoop = () => {
  let videocanvas = document.getElementById("animated");
  let stream = videocanvas.captureStream(25);
	return (
    <video
    src={stream}
    data-sampler="simplePlaneTexture"
    />
	);
};
export default VideoLoop;
