import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//assets
import LOGO from '../../../assets/images/LOGO (1).png';
import TREASURE from '../../../assets/images/IMAGE (44).png';
import COIN from '../../../assets/images/IMAGE (45).png';
import RCOIN from "../../../assets/modelImages/IMAGE (9).png";
import HEXAGON from '../../../assets/images/IMAGE (46).png';
import ARROW_DOWN from "../../../assets/images/Frame (33).svg";
import SEARCH_ICON from "../../../assets/images/SEARCH.png";
import RECTANGLE from "../../../assets/images/Rectangle (1).png";

//model assetss
import CLOSE from "../../../assets/modelImages/Frame (3).svg";
import ROLLBIT from "../../../assets/modelImages/IMAGE (8).png";
import ARROW from "../../../assets/modelImages/Frame (5).svg";
import BTN1 from "../../../assets/modelImages/Frame 126.svg";
import BTN2 from "../../../assets/modelImages/Frame 127.svg";
import BTN3 from "../../../assets/modelImages/Frame 128.svg";
import BTC from "../../../assets/images/IMAGE (1).svg";
import NFT from "../../../assets/images/svg.svg";
import ETH from "../../../assets/images/IMAGE (2).svg";
import LTC from "../../../assets/images/IMAGE (3).svg";
import SOL from "../../../assets/images/IMAGE (4).svg";
import RLB from "../../../assets/images/Frame (60).svg";
import ERC from "../../../assets/images/Frame 160.svg";
import CRYPTO from "../../../assets/images/Frame 166.svg";

//components
import LoginHomeSideBar from '../sidebarContainer/LoginHomeSideBar';
import Messages from '../MainHome/Messages';
import ReferalsFooter from '../footer/ReferalsFooter';
import Referals from './Referals';

//models
import Model1 from '../../models/rewardModel/Model1';
import Model2 from '../../models/rewardModel/Model5';
import Model3 from '../../models/rewardModel/Model3';
import DModel1 from '../../models/depositModel/DModel1';
import Cop from '../../models/rewardModel/Cop';
import Model4 from '../../models/rewardModel/Model4';
import WModel1 from '../../models/withdrawalModel/WModel1';






const LoginReferals = () => {


  const [isAccountBtn, setisAccountBtn] = useState(false);
  const [isCrypto, setisCrypto] = useState(false);
  const [isCoupen, setisCoupen] = useState(false);
  const [isDeposit, setisDeposit] = useState(false);
  const [isReferral, setisReferral] = useState(false);
  const [isFocus, setisFocus] = useState("");
  const [isRewardBtn, setisRewardBtn] = useState(false)


  const Button1 = () => {
    setisFocus("Button1");
  }
  const Button2 = () => {
    setisFocus("Button2");

  }
  const Button3 = () => {
    setisFocus("Button3");

  }
  const Button4 = () => {
    setisFocus("Button4");

  }
  const Button5 = () => {
    setisFocus("Button5");

  }



  //Models integrations



  const AccountBtnModel = () => {

    if (isAccountBtn === false) {
      setisAccountBtn(true);
      setisRewardBtn(false);
    }
    else {
      setisAccountBtn(false);
    }

  }

  const BuyCryptoBtn = () => {

    if (isCrypto === false) {
      setisCrypto(true);
      setisAccountBtn(false);
      setisFocus("Button5");


    }
    else {
      setisCrypto(false);
    }

  }

  // const OpenCoupenModel = () => {
  //   if (isCoupen === false) {

  //     setisCoupen(true)

  //   }
  //   else {
  //     setisCoupen(false);
  //   }
  // }

  const OpenDepositModel = () => {
    if (isDeposit === false) {
      setisDeposit(true);
      setisAccountBtn(false);
      setisFocus("Button1");


    }
    else {
      setisDeposit(false);
    }
  }

  const RewardBtnModel = () => {
    if (isRewardBtn === false) {
      setisRewardBtn(true);
      setisDeposit(false);
      setisAccountBtn(false);
    } else {
      setisRewardBtn(false);

    }
  }

  // const OpenReferralModel = () => {
  //   setisReferral(true)
  // }


  //closes all models when opened 
  const ALLMODELS = () => {

    setisCoupen(false);
    setisCrypto(false);
    setisDeposit(false);
    setisReferral(false);

  }



  //Models
  const CryptoModel = () => {
    return (



      <div style={{ width: "805px", height: "315px", borderRadius: "10px", background: "#1A1D29", boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.30)", margin: "30px 17pc" }}>

        <div>

          <div style={{ padding: "25px 35px", gap: "10px", display: "flex" }}>

            {/* button 1==================== */}

            <div style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.05)" }}>

              <p style={{ color: "#FFFFC1", margin: "10px 3px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>DEPOSIT</p>
            </div>

            {/* button 2==================== */}


            <div style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

              <p style={{ color: "#B1B6C6", margin: "10px -5.8px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>WITHDRAW</p>
            </div>

            {/* button 3==================== */}


            <div style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

              <p style={{ color: "#B1B6C6", margin: "10px -3px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>COUPONS</p>
            </div>

            {/* button 4==================== */}


            <div style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

              <p style={{ color: "#B1B6C6", margin: "10px -4px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>REFERRALS</p>
            </div>

            {/* end btn sec============================ */}



            <div onClick={ALLMODELS} style={{ display: "inline-flex", alignItems: "center", marginLeft: "16pc" }}>
              <img src={CLOSE} alt="close" />
            </div>

          </div>

          {/* img area */}

          <div >

            <div style={{ color: "#FFF", fontSize: "22px", textTransform: "uppercase", margin: "-20px 3.1pc" }}>

              <p style={{ display: "flex", alignItems: "center", margin: "10px 0" }}><img src={ARROW} alt="arrow" style={{ width: "9px", height: "16px", marginTop: "3px" }} />  <span style={{ margin: "0 13px", }}>Buy crypto using cards</span> </p>
            </div>


            <div style={{ width: "830px", color: "#B1B6C6", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "1.8", margin: "45px 39px" }}>
              <p>While we look for a reliable card payment processor, you can purchase crypto using your card via the <br /> recommended third-party services below. After purchasing the crypto, you can
                <span style={{ color: "#FFB018", padding: "0 5px" }}>deposit it directly to your AK account</span></p>
            </div>


            {/* images */}

            <div style={{ margin: "55px 39px", display: "flex", gap: "15px" }}>
              <img src={BTN1} alt="btn1" />
              <img src={BTN2} alt="btn2" />
              <img src={BTN3} alt="btn3" />
            </div>


          </div>


        </div>

      </div>

    )
  }
  const CoupenModel = () => {
    return (
      <div style={{ width: "805px", height: "530px", borderRadius: "10px", background: "#1A1D29", boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.30)", margin: "30px 25pc" }}>

        <div>

          <div style={{ padding: "25px 35px", gap: "15px", display: "flex" }}>

            {/* button 1==================== */}

            <div style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

              <p style={{ color: "#B1B6C6", margin: "10px 3px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>DEPOSIT</p>
            </div>

            {/* button 2==================== */}


            <div style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

              <p style={{ color: "#B1B6C6", margin: "10px -5.8px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>WITHDRAW</p>
            </div>

            {/* button 3==================== */}


            <div style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.08)" }}>

              <p style={{ color: "#FFFFC1", margin: "10px -3px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>COUPONS</p>
            </div>

            {/* button 4==================== */}


            <div style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

              <p style={{ color: "#B1B6C6", margin: "10px -4px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>REFERRALS</p>
            </div>

            {/* end btn sec============================
               ===========================================
               =================================
              ====================================== */}
            <div onClick={ALLMODELS} style={{ display: "inline-flex", alignItems: "center", marginLeft: "16pc" }}>
              <img src={CLOSE} alt="close" />
            </div>

          </div>


          {/* img area */}

          <div style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "18px 0" }}>
              <img src={ROLLBIT} alt="rollbit" />
            </div>

            {/* text area */}

            <div style={{ width: "242", }}>
              <p style={{ color: "#fff", textTransform: "uppercase", fontSize: "22px", fontStyle: "normal", fontWeight: "400", lineHeight: "26.4px" }}>Redeem Coupon Code</p>
            </div>

            {/* input area */}

            <div style={{ margin: "30px 0" }}>
              <input type="text" style={{ width: "200px", padding: "16px", alignItems: "center", gap: "10px", borderRadius: "6px", color: "#fff", background: "rgba(15, 17, 26, 0.55)" }} placeholder='Enter Coupon Code...' />
            </div>

            {/* text area */}

            <div>
              <p style={{ color: "#B1B6C6", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px", }}>We regularly post these on our <span style={{ color: "#FFB018" }}>Twitter</span></p>
            </div>


            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

              <div style={{ width: "150px", height: "45px", margin: "30px 0", alignItems: "center", gap: "5px", borderRadius: "10px", background: "#86F454", boxShadow: "0px 0px 10px 0px rgba(118, 255, 25, 0.40)", }}> <p style={{ padding: "12px 20px", fontSize: "14px" }}>CLAIM</p>
              </div>

            </div>



          </div>


        </div>
      </div>
    )
  }
  const DepositModel = () => {
    return (
      <div style={{ width: "815px", height: "530px", borderRadius: "10px", background: "#1A1D29", boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.30)", margin: "30px 25pc", }}>

        <div>

          <div style={{ padding: "25px 35px", gap: "15px", display: "flex" }}>

            {/* button 1==================== */}

            <div style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.08)" }}>

              <p style={{ color: "#FFFFC1", margin: "10px 3px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>DEPOSIT</p>
            </div>

            {/* button 2==================== */}


            <div style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

              <p style={{ color: "#B1B6C6", margin: "10px -5.8px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>WITHDRAW</p>
            </div>

            {/* button 3==================== */}


            <div style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

              <p style={{ color: "#B1B6C6", margin: "10px -3px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>COUPONS</p>
            </div>

            {/* button 4==================== */}


            <div style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

              <p style={{ color: "#B1B6C6", margin: "10px -4px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>REFERRALS</p>
            </div>

            {/* end btn sec============================
             ===========================================
             =================================
             ====================================== */}


            <div onClick={ALLMODELS} style={{ display: "inline-flex", alignItems: "center", marginLeft: "16pc" }}>
              <img src={CLOSE} alt="close" />
            </div>

          </div>

          <div>
            <div><p style={{ color: "#FFF", width: "189px", margin: "0 35px", textTransform: "uppercase", fontSize: "22px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Deposit options</p>
            </div>
          </div>

          {/* icons sec=============== */}


          <div>

            <div style={{ display: "flex", marginTop: "15px" }}>

              <div style={{ display: "inline-flex", padding: "45px 0px", margin: "20px 35px", flexDirection: "column", alignItems: "center", gap: "26 px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

                <img src={BTC} alt="btc" style={{ marginTop: "-20px" }} />
                <p style={{ color: "#B1B6C6", textAlign: "center", width: "106px", margin: "0px 35px", marginTop: "24px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Bitcoin (BTC)</p>
              </div>

              <div style={{ display: "inline-flex", padding: "45px 0px", margin: "20px -22px", flexDirection: "column", alignItems: "center", gap: "26px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

                <img src={ETH} alt="eth" style={{ marginTop: "-20px" }} />
                <p style={{ color: "#B1B6C6", textAlign: "center", width: "106px", margin: "0 35px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Ethereum (ETH)</p>
              </div>

              <div style={{ display: "inline-flex", padding: "45px 0px", margin: "20px 35px", flexDirection: "column", alignItems: "center", gap: "26px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

                <img src={LTC} alt="ltc" style={{ marginTop: "-20px" }} />
                <p style={{ color: "#B1B6C6", textAlign: "center", width: "106px", margin: "0 35px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Litecoin (LTC)</p>
              </div>


              <div style={{ display: "inline-flex", padding: "45px 0px", margin: "20px -22px", flexDirection: "column", alignItems: "center", gap: "26px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

                <img src={SOL} alt="sol" style={{ marginTop: "-20px" }} />
                <p style={{ color: "#B1B6C6", textAlign: "center", width: "106px", margin: "0 35px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Solana (SOL)</p>
              </div>
            </div>


            {/* next div=====================================================
                    ================================================================= */}


            <div style={{ display: "flex", margin: "-20px 0" }}>

              <div style={{ display: "inline-flex", margin: "30px 35px", flexDirection: "column", alignItems: "center", gap: "26 px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

                <img src={RLB} alt="rlb" style={{ marginTop: "25px" }} />
                <p style={{ color: "#B1B6C6", textAlign: "center", width: "108px", margin: "35px 35px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Rollbit Coin (RLB)</p>
              </div>

              <div style={{ display: "inline-flex", margin: "30px -22px", flexDirection: "column", alignItems: "center", gap: "26px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

                <img src={ERC} alt="erc" style={{ marginTop: "15px" }} />
                <p style={{ color: "#B1B6C6", textAlign: "center", width: "106px", margin: "0 35px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>ERC-20 </p>
                <span style={{ color: "#B1B6C6", textAlign: "center", marginTop: "-24px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>(UsDx, APE, and more)</span>
              </div>

              <div style={{ display: "inline-flex", margin: "30px 35px", flexDirection: "column", alignItems: "center", gap: "26px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

                <img src={NFT} alt="nft" style={{ marginTop: "15px", width: "68px", height: "68px" }} />
                <p style={{ color: "#B1B6C6", textAlign: "center", width: "106px", margin: "0 35px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>NFT</p>
              </div>


              <div style={{ display: "inline-flex", margin: "30px -22px", flexDirection: "column", alignItems: "center", gap: "26px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

                <img src={CRYPTO} alt="crypto" style={{ marginTop: "20px" }} />
                <p style={{ color: "#B1B6C6", textAlign: "center", width: "106px", margin: "0 35px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Buy Crypto</p>
              </div>
            </div>







          </div>
        </div>
      </div>
    )
  }
  const ReferralModel = () => {
    return (
      <div style={{ width: "805px", height: "530px", borderRadius: "10px", background: "#1A1D29", boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.30)", margin: "30px 25pc" }}>

        <div>

          <div style={{ padding: "25px 35px", gap: "15px", display: "flex" }}>

            {/* button 1==================== */}

            <div style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

              <p style={{ color: "#B1B6C6", margin: "10px 3px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>DEPOSIT</p>
            </div>

            {/* button 2==================== */}


            <div style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

              <p style={{ color: "#B1B6C6", margin: "10px -5.8px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>WITHDRAW</p>
            </div>

            {/* button 3==================== */}


            <div style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

              <p style={{ color: "#B1B6C6", margin: "10px -3px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>COUPONS</p>
            </div>

            {/* button 4==================== */}


            <div style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.08)" }}>

              <p style={{ color: "#FFFFC1", margin: "10px -4px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>REFERRALS</p>
            </div>

            {/* end btn sec============================
             ===========================================
             =================================
             ====================================== */}


            <div onClick={ALLMODELS} style={{ display: "inline-flex", alignItems: "center", marginLeft: "16pc" }}>
              <img src={CLOSE} alt="close" />
            </div>

          </div>

          {/* img area */}

          <div style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "20px 0" }}>
              <img src={RCOIN} alt="coin" />
            </div>

            {/* text area */}

            <div style={{ width: "242", }}>
              <p style={{ color: "#fff", textTransform: "uppercase", fontSize: "22px", fontStyle: "normal", fontWeight: "400", lineHeight: "26.4px" }}>apply Referrals code</p>
            </div>

            {/* input area */}

            <div style={{ margin: "30px 0" }}>
              <input type="text" style={{ width: "200px", padding: "16px", alignItems: "center", gap: "10px", borderRadius: "6px", color: "#fff", background: "rgba(15, 17, 26, 0.55)" }} placeholder='Enter Referrals Code...' />
            </div>

            {/* text area */}

            <div>
              <p style={{ color: "#B1B6C6", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px", }}>Don't have a code? Enter "Anoukha"</p>
            </div>


            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

              <div style={{ width: "150px", height: "45px", margin: "30px 0", alignItems: "center", gap: "5px", borderRadius: "10px", background: "#86F454", boxShadow: "0px 0px 10px 0px rgba(118, 255, 25, 0.40)", }}> <p style={{ padding: "12px 20px", fontSize: "14px" }}>APPLY</p>
              </div>

            </div>



          </div>


        </div>
      </div>
    )
  }






  //login navbar
  return (
    <>
      <div style={{ width: "1920px", height: "1003px", background: "#1A1D29", }}>


        <div style={{ width: "1915px", height: "65px", flexShrink: "0", background: "#1A1D29", boxShadow: "2px 2px 2px rgba(0,0,0,0.3)", position: "sticky", top: "0", left: "0" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/">
              <img src={LOGO} alt="logo" style={{ width: "160px", height: "39.017px", flexShrink: "0", margin: "12.5px 12px" }} />
            </Link>


            <div onClick={() => RewardBtnModel()} style={{ display: "inline-flex", padding: "7px 12px", alignItems: "center", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)", cursor: "pointer" }}>
              <img src={TREASURE} alt="treasure" style={{ width: "26px", height: "26px" }} />
              <p style={{ width: "58px", color: "#fff", fontSize: "12px", fontStyle: "normal", fontWeight: "400", lineHeight: "14.4px", textTransform: "uppercase" }}>Rewards</p>
              <img src={ARROW_DOWN} alt="arrow" style={{ width: "8px", height: "6px" }} />
            </div>

            <div style={{ display: "flex", alignItems: "center", margin: "0 25pc", gap: "15px" }}>
              <div style={{ display: "inline-flex", padding: "11px 14px", alignItems: "flex-start", gap: "10px", borderRadius: "6px", background: "#10121B" }}>
                <img src={COIN} alt="" style={{ width: "20px", height: "19px" }} />
                <p style={{ width: "39px", color: "#fff", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>$0.00</p>
              </div>
              <div onClick={() => OpenDepositModel()} style={{ display: "inline-flex", padding: "10px 16px", alignItems: "flex-start", gap: "10px", borderRadius: "8px", background: "#FFE81A", boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)", cursor: "pointer" }}>
                <p style={{ color: "#141722", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px", letterSpacing: "0.5px", textTransform: "uppercase" }}>Cashier</p>
              </div>
              <div onClick={() => BuyCryptoBtn()} style={{ display: "inline-flex", padding: "10px 16px", alignItems: "flex-start", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.08)", cursor: "pointer" }}>
                <p style={{ color: "#fff", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px", letterSpacing: "0.5px", textTransform: "uppercase" }}>Buy Crypto</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", marginLeft: "2.2pc" }}>
              <div onClick={() => AccountBtnModel()} style={{ display: "flex", width: "141px", height: "40px", flexShrink: "0", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)", cursor: "pointer" }}>
                <img src={HEXAGON} alt="hexagon" style={{ width: "29px", height: "29px", margin: "5px 8px" }} />

                <div>
                  <p style={{ width: "55px", color: "#fff", fontSize: "13px", fontStyle: "normal", fontWeight: "400", lineHeight: "15.6px", letterSpacing: "0.5px", margin: "8px 6px" }}>Account</p>
                  <img src={RECTANGLE} alt='rectangle' style={{ width: "51px", height: "5px", margin: "-2px 6px" }} />
                  <img src={ARROW_DOWN} alt="arrow" style={{ width: "8px", height: "6px", margin: "-18px 70px" }} />
                </div>

              </div>

              <div style={{ display: "flex" }}>
                <img src={SEARCH_ICON} alt="search" />
              </div>
            </div>








          </div>



        </div>


        <div style={{ display: "flex" }}>
          <LoginHomeSideBar />
          <Referals />
          <Messages />


        </div>
      </div> {/* end++++++++++++++++++ */}









      {/* model show div */}
      <div>
        {
          isRewardBtn ?
            <>
              <div onClick={() => setisRewardBtn(false)} style={{ position: "fixed", display: 'flex', justifyContent: "center", alignItems: "center", top: "0", left: "0", right: "0", bottom: "0", cursor: "pointer", height: "100%" }}></div>
              <div style={{ height: "625px", background: "#1F2330", width: "420px", position: "absolute", top: "3.9pc", left: "3pc", boxShadow: "0px 5px 8px 0px rgba(0, 0, 0, 0.25)", borderRadius: "6px" }}>
                <Model1 />
              </div>

            </>
            :
            null


        }

        {/* account model 2 */}

        {
          isAccountBtn ?
            <>
              <div onClick={() => setisAccountBtn(false)} style={{ position: "fixed", display: 'flex', justifyContent: "center", alignItems: "center", top: "0", left: "0", right: "0", bottom: "0", cursor: "pointer", height: "100%" }}></div>
              <div style={{ position: "absolute", top: "3.7pc", left: "91.3pc", cursor: "pointer", background: "#1F2330", borderRadius: "6px", boxShadow: " 0px 5px 8px 0px rgba(0, 0, 0, 0.25)", width: "200px", height: "430px" }}>
                <Model2 />
              </div>
            </>
            :
            null
        }

        {/* crypto model 3 */}

        {
          isCrypto ?
            <>
              <div onClick={() => setisCrypto(false)} style={{ position: "fixed", display: 'flex', justifyContent: "center", alignItems: "center", top: "0", left: "0", right: "0", bottom: "0", cursor: "pointer", height: "100%", background: "#000000aa" }}></div>

              <div style={{ width: "805px", height: isFocus === "Button5" ? "310px" : "530px", borderRadius: "10px", background: "#1A1D29", boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.30)", margin: "30px 25pc", position: "fixed", top: "6pc", left: "4pc" }}>


                {/* buttons */}
                <div style={{ padding: "25px 35px", gap: "15px", display: "flex" }}>

                  {/* button 1==================== */}

                  <div onClick={() => Button5()} style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: isFocus === "Button5" ? "rgba(203, 215, 255, 0.08)" : "rgba(203, 215, 255, 0.03)", cursor: "pointer" }}>

                    <p style={{ color: isFocus === "Button5" ? "#FFFFC1" : "#B1B6C6", margin: "10px 3px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>DEPOSIT</p>
                  </div>

                  {/* button 2==================== */}


                  <div onClick={() => Button2()} style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: isFocus === "Button2" ? "rgba(203, 215, 255, 0.08)" : "rgba(203, 215, 255, 0.03)", cursor: "pointer" }}>

                    <p style={{ color: isFocus === "Button2" ? "#FFFFC1" : "#B1B6C6", margin: "10px -5.8px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>WITHDRAW</p>
                  </div>

                  {/* button 3==================== */}


                  <div onClick={() => Button3()} style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: isFocus === "Button3" ? "rgba(203, 215, 255, 0.08)" : "rgba(203, 215, 255, 0.03)", cursor: "pointer" }}>

                    <p style={{ color: isFocus === "Button3" ? "#FFFFC1" : "#B1B6C6", margin: "10px -3px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>COUPONS</p>
                  </div>

                  {/* button 4==================== */}


                  <div onClick={() => Button4()} style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: isFocus === "Button4" ? "rgba(203, 215, 255, 0.08)" : "rgba(203, 215, 255, 0.03)", cursor: "pointer" }}>

                    <p style={{ color: isFocus === "Button4" ? "#FFFFC1" : "#B1B6C6", margin: "10px -4px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>REFERRALS</p>
                  </div>

                  {/* end btn sec============================
 ===========================================
 =================================
====================================== */}
                  <div onClick={() => setisCrypto(false)} style={{ display: "inline-flex", alignItems: "center", marginLeft: "16pc", cursor: "pointer" }}>
                    <img src={CLOSE} alt="close" />
                  </div>

                </div>

                {
                  isFocus === "Button3" ?
                    <Cop /> :
                    null
                }

                {
                  isFocus === "Button4" ?
                    <Model3 /> :
                    null
                }

                {
                  isFocus === "Button5" ?
                    <Model4 /> :
                    null
                }

                {
                  isFocus === "Button2" ?
                    <WModel1 /> :
                    null
                }




              </div>


            </>
            : null
        }

        {/* coupen model 4 */}
        {
          isCoupen ?
            <div style={{ position: "fixed", display: 'flex', justifyContent: "center", alignItems: "center", top: "0", left: "0", right: "0", bottom: "0", cursor: "pointer", height: "100%", background: "" }}>
              <CoupenModel />
            </div>
            : null
        }

        {/* Deoposit model 1 */}
        {

          isDeposit ?
            <>
              <div onClick={() => setisDeposit(false)} style={{ position: "fixed", display: 'flex', justifyContent: "center", alignItems: "center", top: "0", left: "0", right: "0", bottom: "0", cursor: "pointer", height: "100%", background: "#000000aa" }}></div>

              <div style={{ width: "805px", height: "530px", borderRadius: "10px", background: "#1A1D29", boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.30)", margin: "30px 25pc", position: "fixed", top: "6pc", left: "4pc" }}>


                {/* buttons */}
                <div style={{ padding: "25px 35px", gap: "15px", display: "flex" }}>

                  {/* button 1==================== */}

                  <div onClick={() => Button1()} style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: isFocus === "Button1" ? "rgba(203, 215, 255, 0.08)" : "rgba(203, 215, 255, 0.03)", cursor: "pointer" }}>

                    <p style={{ color: isFocus === "Button1" ? "#FFFFC1" : "#B1B6C6", margin: "10px 3px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>DEPOSIT</p>
                  </div>

                  {/* button 2==================== */}


                  <div onClick={() => Button2()} style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: isFocus === "Button2" ? "rgba(203, 215, 255, 0.08)" : "rgba(203, 215, 255, 0.03)", cursor: "pointer" }}>

                    <p style={{ color: isFocus === "Button2" ? "#FFFFC1" : "#B1B6C6", margin: "10px -5.8px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>WITHDRAW</p>
                  </div>

                  {/* button 3==================== */}


                  <div onClick={() => Button3()} style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: isFocus === "Button3" ? "rgba(203, 215, 255, 0.08)" : "rgba(203, 215, 255, 0.03)", cursor: "pointer" }}>

                    <p style={{ color: isFocus === "Button3" ? "#FFFFC1" : "#B1B6C6", margin: "10px -3px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>COUPONS</p>
                  </div>

                  {/* button 4==================== */}


                  <div onClick={() => Button4()} style={{ display: "flex", textAlign: "center", width: "100px", height: "40px", padding: "2px 20px", gap: "10px", borderRadius: "8px", background: isFocus === "Button4" ? "rgba(203, 215, 255, 0.08)" : "rgba(203, 215, 255, 0.03)", cursor: "pointer" }}>

                    <p style={{ color: isFocus === "Button4" ? "#FFFFC1" : "#B1B6C6", margin: "10px -4px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>REFERRALS</p>
                  </div>

                  {/* end btn sec============================
===========================================
=================================
====================================== */}
                  <div onClick={() => setisDeposit(false)} style={{ display: "inline-flex", alignItems: "center", marginLeft: "16pc", cursor: "pointer" }}>
                    <img src={CLOSE} alt="close" />
                  </div>

                </div>

                {
                  isFocus === "Button3" ?
                    <Cop /> :
                    null
                }

                {
                  isFocus === "Button4" ?
                    <Model3 /> :
                    null
                }

                {
                  isFocus === "Button1" ?
                    <DModel1 /> :
                    null
                }

                {
                  isFocus === "Button2" ?
                    <WModel1 /> :
                    null
                }




              </div>


            </>
            : null
        }

        {/*  Referral model */}
        {
          isReferral ?
            <div style={{ position: "fixed", display: 'flex', justifyContent: "center", alignItems: "center", top: "0", left: "0", right: "0", bottom: "0", cursor: "pointer", height: "100%", background: "" }}>
              <ReferralModel />
            </div>
            : null
        }


      </div>

    </>

  )
}

export default LoginReferals;