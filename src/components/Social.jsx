import x from "../assets/x.png";
import insta from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";

function SocialMediaIcon({ icon }) {
  return (
    <>
      <img src={icon} className="w-6 h-6 cursor-pointer"></img>
    </>
  );
}

function Social() {
  return (
    <div className="flex gap-2 mt-4">
      <SocialMediaIcon icon={x} />
      <SocialMediaIcon icon={insta} />
      <SocialMediaIcon icon={youtube} />
      <SocialMediaIcon icon={linkedin} />
    </div>
  );
}

export default Social;
