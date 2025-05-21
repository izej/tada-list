import { styled, TextField, InputAdornment } from "@mui/material";

export const WeekPickerContainer = styled('div')(() => ({
  display: 'inline-block',
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInput-input': {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    padding: 0,
  },
}));

export const StyledInputAdornment = styled(InputAdornment)(() => ({
  marginRight: '10px',
}));
