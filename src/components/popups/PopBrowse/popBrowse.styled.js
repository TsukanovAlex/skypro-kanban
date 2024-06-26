import styled from "styled-components";
import { Hover01, Hover03 } from "../../../styles/shared.styled";
import { topicStyles } from "../../../lib/topic";

export const PopBrowse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;
export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;
export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;
export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;
export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;
export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;
export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;
export const PopBrowseCategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;

  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
  color: ${({ $topicColor }) => topicStyles[$topicColor]?.color || "#06b16e"};
  background-color: ${({ $topicColor }) =>
    topicStyles[$topicColor]?.backgroundColor || "#b4fdd1"};
`;
export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }
`;
export const PopBrowseBtnEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }
`;
export const BtnGroup = styled.div`
  button {
    margin-right: 8px;
  }
`;
export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseArea = styled.textarea`
  white-space: pre-wrap;
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 17px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  overflow-wrap: break-word;

  &::-moz-placeholder {
    white-space: pre-wrap;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    color: #94a6be;
    letter-spacing: -0.14px;
    overflow-wrap: break-word;
  }

  &::placeholder {
    white-space: pre-wrap;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    color: #94a6be;
    letter-spacing: -0.14px;
    overflow-wrap: break-word;
  }
`;
export const Status = styled.div`
  margin-bottom: 11px;
  & p {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 14px;
  }
`;
export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  input[type="radio"] {
    display: none;
  }
`;

export const StatusTheme = styled.label`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  padding: 10px 15px 10px 15px;
  color: #94a6be;   
  margin-right: 7px;
  margin-bottom: 7px;
  font-size: 14px;
  & p {
    padding-left: 10px
  line-height: 1;
  letter-spacing: -0.14px;
  }
`;
export const PopBrowseLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

export const BtnBor = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  & a {
    color: #565eef;
  }
  ${Hover03}
`;

export const BtnBg = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  ${Hover01}
  a {
    color: #ffffff;
  }
`;
