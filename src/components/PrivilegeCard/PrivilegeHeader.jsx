import React, { useContext, useState } from "react";
import styles from "./PrivilegeHeader.module.scss";
  import { CiUser } from "react-icons/ci";
import PrivilegeClub from "../PrivilegeClub/PrivilegeClub";
import SpecialMgr from "../SpecialMgr/SpecialMgr";
import AloePrivilege from "../Aloe+Privilege/AloePrivilege";
import { IoMdArrowDropdown } from "react-icons/io";
import AloeAbout from "../AloeAbout/AloeAbout";
import AloeCart from "../AloeCart/AloeCart";
import PrivilegeFootor from "../PrivilegeFootor/PrivilegeFootor";
import { LanguageContext } from "../../LanguageContext/LanguageContext";
import { useNavigate } from "react-router";

const PrivilegeHeader = () => {
  const navigate = useNavigate()
  const goAccount = () => {
    navigate("/account")
  }
  const { language, toggleLanguage, texts } = useContext(LanguageContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert(texts[language].copyAlert);
      },
      (err) => {
        console.error("Kopyalama hatası: ", err);
      }
    );
  };

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageSelect = (lang) => {
    toggleLanguage(); 
    setShowDropdown(false); 
  };

  return (
    <div>
      <div className={styles.privilegeHeader}>
        <div className={styles.container}>
          <div className={styles.privilegeHeaderLogo}>
            <img
              src="https://privilege.aloe.az/assets/logo-1a9d25d2.svg"
              alt=""
            />
            <p>|</p>
            <h1>{texts[language].privilegeClub}</h1>
          </div>
          <div className={styles.privilegeHeaderContact}>
            <p onClick={() => copyToClipboard(texts[language].phoneNumber)}>
              {texts[language].phoneNumber}
            </p>
            <button onClick={goAccount} style={{cursor:"pointer"}}>
              <CiUser size={20} />
              
              {texts[language].contact}
            </button>
            <div className={styles.dropdownContainer}>
              <div className={styles.customDropdownToggle} onClick={handleToggleDropdown}>
                {texts[language].switchLanguage} <IoMdArrowDropdown size={25}/>
              </div>
              {showDropdown && (
                <ul className={styles.dropdownMenu}>
                  <li onClick={() => handleLanguageSelect("az")}>AZ</li>
                  <li onClick={() => handleLanguageSelect("ru")}>RUS</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <PrivilegeClub />
      <SpecialMgr />
      <AloePrivilege />
      <AloeAbout />
      <AloeCart />
      <PrivilegeFootor />
    </div>
  );
};

export default PrivilegeHeader;
