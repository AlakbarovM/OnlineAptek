import React from "react";
import styles from "./PrivilegeFootor.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const PrivilegeFootor = () => {
  return (
    <div className={styles.privilegeFootor}>
      <div className={styles.container}>
        <div className={styles.fotTop}>
          <img
            src="https://privilege.aloe.az/assets/logo-light-ea681877.svg"
            alt="Logo"
          />
          <div className={styles.centerFotTop}>
            <p>İstifadə qaydaları</p>
            <p>Kartın aktivləşdirilməsi</p>
          </div>
          <p>+994(99) 204-44-00 / 09:00-20:00</p>
        </div>
      </div>
      <div className={styles.fotbottom}>
        <div className={styles.fotBottomTxt}>
          <p>+994(99) 204-44-00 / 09:00-20:00</p>
        </div>
        <div className={styles.fotBottomIcn}>
          <a href="https://www.facebook.com/">
            <FaFacebookF size={22} color="white" />
          </a>
            <a href="https://www.instagram.com/">
            <FaInstagram size={25} color="white" />
            </a>
          <a href="https://www.youtube.com/">
          <FaYoutube size={25} color="white" />
          </a>
            <a href="https://az.linkedin.com/">
            <FaLinkedinIn size={25} color="white" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default PrivilegeFootor;
