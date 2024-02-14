import { Box, Button, Container, Grid, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';


import MUILogo from "src/assets/static/images/logo/material-ui.svg";
import SPALogo from "src/assets/static/images/logo/single-spa-mark-magenta.svg";
import TSLogo from "src/assets/static/images/logo/typescript.svg";

// import hero from "./hero.png";


const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);

const MuiAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #e5f7ff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

const TsAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #dfebf6;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={9} lg={8} mx="auto">
          <LabelWrapper color="success">Version 1.0.0</LabelWrapper>
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            SPA React Typescript
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo vel fringilla



            
            
            </TypographyH2>
          <Button
            component={Link}
            to="portal/dashboards/crypto"
            size="large"
            variant="contained"
          >
            Browse Live Preview
          </Button>
          <Button
            sx={{ ml: 2 }}
            component="a"
            target="_blank"
            rel="noopener"
            href="https://mui.com/"
            size="large"
            variant="text"
          >
            Key Features MUI
          </Button>
          <Grid container spacing={3} mt={2}>
            <Grid item md={4}>
              <MuiAvatar>
                <img
                  src={MUILogo}
                  alt="Material-UI"
                />
              </MuiAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Powered by MUI</b>
                </Box>
                <Typography component="span" variant="subtitle2">
                  A simple and customizable component library (Material-UI).
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={4}>
              <TsAvatar>
                <img
                  src={TSLogo}
                  alt="Typescript"
                />
              </TsAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Built with Typescript</b>
                </Box>
                <Typography component="span" variant="subtitle2">
                  A modern technology stack and is
                  built with React + Typescript.
                </Typography>
              </Typography>
            </Grid><Grid item md={4}>
              <TsAvatar>
                <img
                  src={SPALogo}
                  alt="Typescript"
                />
              </TsAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Built with SPA</b>
                </Box>
                <Typography component="span" variant="subtitle2">
                  A modern technology stack and is
                  built with Single SPA.
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
