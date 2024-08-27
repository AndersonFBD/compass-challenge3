import styles from "./footer.module.css";
import { LiaFacebook } from "react-icons/lia";
import { PiTwitterLogo } from "react-icons/pi";
import { PiLinkedinLogoBold } from "react-icons/pi";
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
        <p>section 2</p>
      </section>
      <section className={styles.newsletterSection}>
        <p>section 3</p>
      </section>
    </div>
  );
};

export default Footer;
