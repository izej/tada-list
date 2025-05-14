import {CircularProgress, styled} from "@mui/material";

const FullscreenSpinner = styled('div')`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1300;
  background-color: rgba(255, 255, 255, 0.6);
`;

const Spinner = () => (
  <FullscreenSpinner>
    <CircularProgress size={40} thickness={4} />
  </FullscreenSpinner>
);

export default Spinner;