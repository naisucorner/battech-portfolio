import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 99px;
  background: #384169;
  padding: 75px 75px 85px;
  background-image: url("./images/trial.png");
  background-repeat: no-repeat;
  background-position: 30% 100%;

  @media screen and (max-width: 550px) {
    padding: 20px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 520px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
`;
export const Sub = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #ffffff;
`;

export const Body = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

export const CustomTextField = styled(TextField)`
  background-color: #fff;
  border-radius: 10px;
  border: none;
  outline: none;
  color: #101010;

  & .Mui-focused {
    color: #101010;

    & .MuiOutlinedInput-notchedOutline {
      border: transparent;
    }
  }

  & label.Mui-focused,
  label.MuiFormLabel-filled {
    display: none;
  }

  & legend {
    display: none;
  }
`;

export const CustomSelect = styled(Select)`
  background-color: #fff;
  border-radius: 10px;
  border: none;
  outline: none;
  color: #101010;

  .MuiOutlinedInput-notchedOutline {
    border: transparent;
  }
`;

export const GroupCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 15px;
`;

export const CheckItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CheckText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 10px;
  color: #ffffff;

  @media screen and (max-width: 550px) {
    line-height: 20px;
  }
`;

export const Button = styled.button`
  background: #407aff;
  border-radius: 23px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  padding: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: #101010;
    color: #fff;
  }
`;
