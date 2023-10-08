import styled from "styled-components";

export const StyledCard = styled.div`
  border-radius: 8px;
  width: 190px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(203, 215, 255, 0.03);
  gap: 12px;

  .card-image {
    width: 165px;
    height: 165px;
    margin-top: 10px;
  }

  .bonus-text {
    color: #b1b6c6;
    text-align: center;
    font-size: 12px;
    margin-right: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;
    margin-left: 12px;
  }

  .bonus-amount {
    margin-left: 80px;
    color: #fff;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;
  }

  .player-info {
    color: #b1b6c6;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    margin-top: -5px;
    line-height: 14.4px;
    margin-right: auto;
    margin-left: 12px;
  }

  .player-count {
    margin-left: 103px;
    color: #fff;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;
  }

  .button {
    padding: 5px 33px;
    width: 160px;
    height: 40px;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .live-button {
    background: rgba(203, 215, 255, 0.08);
    color: #fff;
  }

  .pending-button {
    background: #ffe81a;
    box-shadow: 0px 0px 10px 0px rgba(255, 176, 25, 0.4);
    color: #141722;
  }

  .button-text-small {
    color: #fff;
    text-align: center;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
  }

  .button-text-red {
    color: #ff4949;
    text-align: center;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    margin-left: 15px;
  }

  .button-dot {
    margin-left: 55px;
    margin-top: -10px;
  }
`;