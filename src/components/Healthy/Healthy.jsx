import React from 'react';
import styles from './Healthy.module.scss';

const Healthy = () => {
  return (
    <div className={styles.healthy}>
      <div className={styles.container}>
        <div className={styles.topHelathy}>
          <h1>Bizim Çeşidlərimiz</h1>
        </div>
        <div className={styles.bottomHealthy}>
          <div className={styles.cardHealthy}>
            <a href="https://www.instagram.com/md_o23"><img src="https://aloe.az/src/assets/icons/stock/1.svg" alt="Logo" /></a>
            <p>Sağlam Həyat</p>
            <span>Aparıcı istehsalçıların yüksək effektiv dərman preparatlarının geniş çeşidi</span>
          </div>
          <div className={styles.cardHealthy}>
            <a href="https://www.instagram.com/md_o23"><img src="https://aloe.az/src/assets/icons/stock/2.svg" alt="Logo" /></a>
            <p>Sağlam Gözəllik</p>
            <span>Dəri və saçlara gündəlik qulluq və bütün ailənin şəxsi gigiyenası üçün kosmetik vasitələr</span>
          </div>
          <div className={styles.cardHealthy}>
            <a href="https://www.instagram.com/md_o23"><img src="https://aloe.az/src/assets/icons/stock/3.svg" alt="Logo" /></a>
            <p>Sağlam Ailə</p>
            <span>Ana və uşaq və ailə gigiyenası üçün ən vacib məhsulların geniş çeşidi</span>
          </div>
          <div className={styles.cardHealthy}>
            <a href="https://www.instagram.com/md_o23"><img src="https://aloe.az/src/assets/icons/stock/4.svg" alt="Logo" /></a>
            <p>Sağlam Qida</p>
            <span>Sağlam və enerjili həyat tərzi üçün vitaminlər, bio əlavələr, çaylar və super qidalar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healthy;
