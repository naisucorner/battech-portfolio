import CheckBox from "../checkbox";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import FacebookIcon from "../icons/facebook";

import InputLabel from "@mui/material/InputLabel";
import {
  Container,
  Info,
  Title,
  Sub,
  Body,
  CustomTextField,
  CustomSelect,
  GroupCheckBox,
  CheckItem,
  Button,
  CheckText,
} from "./styles";

const Trial = () => {
  return (
    <Container>
      <Info>
        <Title>Đăng ký để dùng thử Pro hoặc Enterprise trong 14 ngày.</Title>

        <Sub>
          Với Battech Pro và Enterprise, bạn sẽ có quyền truy cập vào tất cả các
          tính năng của chúng tôi được mô tả ở đây. Ngoài ra, bạn có thể tải
          xuống Battech Miễn phí tại đây hoặc từ cửa hàng Oculus Quest (không
          cần đăng ký).
        </Sub>
      </Info>

      <Body>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              name="firstName"
              id="firstName"
              label="First Name"
              required
              fullWidth
              autoFocus
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <CustomTextField
              name="lastName"
              id="lastName"
              label="Last Name"
              required
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <CustomTextField
              name="email"
              id="email"
              label="Email Address"
              required
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <CustomTextField
              name="phone"
              id="phone"
              label="Phone number"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="company-size">Company Size *</InputLabel>
              <CustomSelect
                labelId="company-size"
                id="company-size"
                value=""
                label="Company Size"
                required
                fullWidth
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </CustomSelect>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <CustomTextField
              name="company"
              id="company"
              label="Company"
              required
              fullWidth
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              fullWidth
              id="industry"
              label="Industry"
              name="industry"
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField name="job" id="job" label="Job Title" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              fullWidth
              required
              id="use-cases"
              label="What use cases do you have in mind?"
              name="use-cases"
              multiline
              rows={2}
            />
          </Grid>
        </Grid>

        <GroupCheckBox>
          <CheckItem>
            <CheckBox />
            <CheckText>I want to receive product update emails</CheckText>
          </CheckItem>
          <CheckItem>
            <CheckBox />
            <CheckText>I want to receive Battech Newsletter</CheckText>
          </CheckItem>
          <CheckItem>
            <CheckBox />
            <CheckText>
              I have read and agree to the Terms of Service Privacy Policy
            </CheckText>
          </CheckItem>
        </GroupCheckBox>

        <Button>Get Started</Button>
      </Body>
    </Container>
  );
};

export default Trial;
