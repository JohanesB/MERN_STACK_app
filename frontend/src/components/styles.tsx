import styled from "styled-components";
//import { lightTheme } from "./theme";
import { v } from "./variables";

export const STable = styled.table`
    width: 80%;
    border-collapse: collapse;
    text-align: center;
    border-radius: ${v.borderRadius};
    overflow: hidden;
    margin: auto;
    margin-top: 10px
`;

export const STHead = styled.thead`
    position: sticky;
    z-index: 100;
`;

export const STHeadTR = styled.tr`
    background: ${({ theme }) => theme.bg3};
`;

export const STH = styled.th`
    font-weight: normal;
    padding: ${v.smSpacing};
    color: ${({ theme }) => theme.text};
    text-transform: capitalize;
    font-weight: 600;
    font-size: 14px;
    :not(:last-of-type) {
        border-right: 1px solid ${({ theme }) => theme.bg2};
    }
    :first-of-type {
        width: 1%;
        white-space: nowrap;
    }
`;

export const STBody = styled.tbody``;

export const STBodyTR = styled.tr`
    background: ${({ theme }) => theme.white};
`;

export const STD = styled.td`
    padding: ${v.smSpacing};
    border: 1px solid ${({ theme }) => theme.bg2};
    font-size: 14px;
`;

export const BBu = styled.button`
    background-color: #04AA6D;
    color: white;
    border: none;
`;

export const FDv = styled.div`
    padding: 16px;
    background-color: white;
    margin: auto;
    width: 60%;
`;

export const INp = styled.input`
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
`;

export const SEp = styled.select`
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
`;
export const BSn = styled.span`
    color: white;    
`

export const DVs = styled.div`
    width: 20%;
    margin: auto;
    
`

export const RBt = styled.input`
    background-color: #04AA6D;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 60%;
    opacity: 0.9;
    margin-left: 20%;
`
export const HDv = styled.section`
    margin: auto;
    width: 15%;
`


