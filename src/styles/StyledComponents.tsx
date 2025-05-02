import {styled} from "@mui/material";

export const RowContainer = styled('div')<{ component?: React.ElementType }>(
  () => ({
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
  })
);
