import Image from "next/image";
import Bottomimg from "../public/assets/image/shape-top-grey-80.png";

export default function Contact() {
  return (
    <section id="location">
      <div className="locationbody">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0200747342737!2d144.9574270153847!3d-37.81974194201059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43d96f26e9%3A0x4dd3402e042ab4e6!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1629828751189!5m2!1sen!2sus"
          width="100%"
          height={500}
          style={{ border: 0}}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Image
        width={2000}
        height={100}
        src={Bottomimg.src}
        alt=""
        className="bottomimg"
        id="topgrey"
        style={{ marginTop: "10px"}}
      />
    </section>
  );
}
