import React from 'react'
import styles from './AloeAccount.module.scss'
import { CiUser } from "react-icons/ci";
import AloeAccountCart from '../AloeAccountCart/AloeAccountCart';

const AloeAccount = () => {
  return (
    <div>
    <div className={styles.aloeAccount}>
        <div className={styles.container}>
            <div className={styles.aloeAccountLogo}>
                <img src="data:image/svg+xml,%3csvg%20width='95'%20height='36'%20viewBox='0%200%2095%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.4987%2035.0688C18.2111%2033.4571%2018.1153%2031.4548%2018.1153%2029.4036V20.564C18.1153%2015.8266%2016.3901%2010.8941%209.29735%2010.8941C6.37395%2010.8941%203.59427%2011.7243%201.67728%2012.9941L2.63577%2015.8266C4.26533%2014.7522%206.51767%2014.0686%208.67419%2014.0686C13.4188%2014.0686%2013.9459%2017.5849%2013.9459%2019.5384V20.0268C4.98411%2019.9778%200%2023.1036%200%2028.8176C0%2032.2361%202.39624%2035.606%207.09273%2035.606C10.3996%2035.606%2012.8916%2033.9455%2014.1855%2032.0896H14.3294L14.6647%2035.0688H18.4987ZM14.0417%2027.1081C14.0417%2027.5477%2013.9459%2028.0361%2013.8022%2028.4756C13.1312%2030.478%2011.2142%2032.4315%208.19495%2032.4315C6.03842%2032.4315%204.21742%2031.1128%204.21742%2028.3292C4.21742%2023.7384%209.44107%2022.9081%2014.0417%2023.0058V27.1081ZM25.5145%2035.0688H29.7318V0.393944H25.5145V35.0688ZM83.7033%2024.0314C83.7512%2023.592%2083.8472%2022.9081%2083.8472%2022.029C83.8472%2017.6825%2081.8344%2010.8941%2074.2622%2010.8941C67.505%2010.8941%2063.3836%2016.5105%2063.3836%2023.6408C63.3836%2030.7711%2067.6487%2035.5571%2074.7896%2035.5571C78.4796%2035.5571%2081.0196%2034.7756%2082.5052%2034.092L81.7863%2031.0152C80.2048%2031.6989%2078.3838%2032.2361%2075.3646%2032.2361C71.1472%2032.2361%2067.505%2029.8432%2067.4092%2024.0314H83.7033ZM67.4571%2020.9546C67.7926%2017.9756%2069.6615%2013.9709%2073.9269%2013.9709C78.6713%2013.9709%2079.8216%2018.2197%2079.7735%2020.9546H67.4571Z'%20fill='%23024650'%3e%3c/path%3e%3cpath%20d='M87.8149%2012.5386V7.99378H83.603V4.96412H87.8149V0.393964H90.7883V4.96412H94.9999V7.99378H90.7883V12.5386H87.8149Z'%20fill='%23024650'%3e%3c/path%3e%3cpath%20d='M38.7102%2014.8264C38.8867%2015.573%2039.1928%2016.2266%2039.6109%2016.8282C40.1227%2017.5651%2040.7348%2018.2062%2041.4297%2018.7606C42.359%2019.5022%2043.2931%2020.2391%2044.2466%2020.9478C45.0198%2021.5223%2045.8295%2022.0456%2046.6144%2022.6042C47.5564%2023.2747%2048.4483%2024.0074%2049.2271%2024.8743C50.1224%2025.8713%2050.7929%2026.9962%2051.1039%2028.3222C51.3195%2029.2417%2051.3569%2030.1678%2051.2117%2031.1062C51.0996%2031.8316%2050.9909%2032.5582%2050.7687%2033.2562C50.5975%2033.7949%2050.3707%2034.3155%2050.1592%2034.8403C50.0047%2035.2242%2049.9979%2035.2208%2049.5975%2035.3034C48.3184%2035.5671%2047.0311%2035.6424%2045.7315%2035.4996C43.6049%2035.2658%2041.686%2034.5102%2040.0228%2033.1267C38.4176%2031.7916%2037.3286%2030.0915%2036.6585%2028.1029C36.296%2027.0267%2036.0793%2025.9203%2035.9929%2024.7866C35.8349%2022.7175%2035.9981%2020.6829%2036.6319%2018.7003C37.0603%2017.3603%2037.6857%2016.1266%2038.5519%2015.0238C38.598%2014.9651%2038.6453%2014.9073%2038.7102%2014.8264ZM40.1517%2022.6923C41.8687%2032.3584%2046.0011%2028.5613%2049.9304%2035.1889C48.4062%2025.7998%2045.6624%2029.1826%2040.1517%2022.6923Z'%20fill='%2339B54A'%3e%3c/path%3e%3cpath%20d='M41.8659%2017.0801C41.1046%2016.3257%2040.4431%2015.5299%2040.2092%2014.4536C40.1351%2014.113%2040.1334%2013.7682%2040.2006%2013.4269C40.2142%2013.3579%2040.2726%2013.285%2040.3299%2013.2398C41.4738%2012.3386%2042.7493%2011.7075%2044.1433%2011.3223C45.5262%2010.94%2046.9344%2010.8194%2048.3605%2010.923C50.4235%2011.0727%2052.3296%2011.6944%2054.0183%2012.9345C55.823%2014.2597%2057.0402%2016.0317%2057.7876%2018.1519C58.1817%2019.2694%2058.4161%2020.4229%2058.5105%2021.6061C58.6766%2023.6881%2058.5232%2025.7374%2057.8963%2027.7367C57.3478%2029.4858%2056.458%2031.0267%2055.172%2032.3193C54.285%2033.2108%2053.2709%2033.9192%2052.1373%2034.4483C52.1069%2034.4624%2052.0746%2034.4725%2052.0102%2034.4971C52.1026%2034.2179%2052.1782%2033.9631%2052.2707%2033.7146C52.9419%2031.9091%2053.4927%2030.0678%2053.8456%2028.169C54.0857%2026.878%2054.2345%2025.577%2054.2245%2024.2602C54.2199%2023.6426%2054.2575%2023.0226%2054.218%2022.4074C54.0868%2020.3575%2053.5656%2018.4294%2052.3665%2016.7426C51.4595%2015.4664%2050.267%2014.5894%2048.7342%2014.2816C46.7821%2013.8897%2044.9586%2014.2057%2043.3422%2015.4525C42.8094%2015.8635%2042.3622%2016.3623%2041.9774%2016.919C41.9447%2016.9663%2041.9121%2017.0134%2041.8659%2017.0801Z'%20fill='%23024650'%3e%3c/path%3e%3c/svg%3e" alt="Logo" />
                <span>
                    |
                </span>
                <p>Bonus kartı</p>
            </div>
            <div className={styles.aloeAccountContact}>
                <p>*3103</p>
                <button>
                <CiUser size={20} />
                    Daxil ol
                </button>
            </div>  
        </div>
    </div>
  <AloeAccountCart/>
    </div>
  )
}

export default AloeAccount