import styles from "./footer.module.css";
import { LiaFacebook } from "react-icons/lia";
import { PiTwitterLogo } from "react-icons/pi";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { LuSend } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <section className={styles.logoSection}>
        <div>
          <div className={styles.sec1imgblock}>
            <img
              src="https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/Logo+White.png"
              alt="logo white"
              height={32}
            />
          </div>
          <div className={styles.sec1textblock}>
            <p className={styles.sec1flavortext1}>Need any help?</p>
            <p className={styles.sec1flavortext2}>
              Call Us: <span className={styles.sec1phone}>(888)1234 5678</span>
            </p>
            <p className={styles.sec1flavortext3}>
              Love Street, Muscat, Oman example@trisog.com
            </p>
          </div>
          <div className={styles.sec1socialmedia}>
            <Link to="http://www.facebook.com/">
              <LiaFacebook />
            </Link>
            <Link to="http://www.twitter.com/">
              <PiTwitterLogo />
            </Link>
            <Link to="http://www.linkedin.com/">
              <PiLinkedinLogoBold />
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.linkSection}>
        <div className={styles.sec2textcontainer}>
          <p className={styles.sec2Title}>Company</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Travel Guides</p>
          <p>Data Policy</p>
        </div>
        <div className={styles.sec2textcontainer}>
          <p className={styles.sec2Title}>Top Destination</p>
          <p>Las Vegas</p>
          <p>New York City</p>
          <p>San Francisco</p>
          <p>Hawaii</p>
        </div>
        <div className={styles.sec2textcontainer}>
          <p className={styles.sec2Title}>
            <br />
          </p>
          <p>Tokyo</p>
          <p>Sydney</p>
          <p>Melbourne</p>
          <p>Dubai</p>
        </div>
      </section>
      <section className={styles.newsletterSection}>
        <div>
          <p className={styles.sec2Title}>Sign up Newsletter</p>
        </div>
        <div className={styles.inputarea}>
          <div className={styles.emailField}>
            <LuSend
              style={{
                fontSize: "16px",
                color: "gray",
                verticalAlign: "middle",
              }}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email..."
            />
          </div>
          <div className={styles.newsletterbutton}>
            <input type="button" value="Submit" />
          </div>
          <div className={styles.sec3flavortext}>
            <p>2023 Trisog All Rights Reserved</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
