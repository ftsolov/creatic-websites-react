import './ComingSoonPopup.css'

const ComingSoonPopup = (props) => {
  return (
    <div className="modal" onClick={props.handleClose}>
      <div className={"modal-main"}>
        <div className="close" onClick={props.handleClose}>x</div>
        <img src="comingsoon.png" className={'coming-soon-img'} alt="Coming soon 3D Illustration"/>
        <h2>Full website coming soon, stay tuned for updates!</h2>
        <p>We are still working on the website, expect it to be fully functional very soon! Thank you for the patience.</p>
      </div>
    </div>
  );
};

export default ComingSoonPopup;
