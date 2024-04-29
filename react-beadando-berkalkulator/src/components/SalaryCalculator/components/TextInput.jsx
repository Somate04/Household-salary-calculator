import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

function TextInput({ refValue, type, label, value, onChange }) {
  if (type === "number") {
    return (
      <TextField
        variant="standard"
        inputRef={refValue}
        type={type}
        label={label}
        value={value === null ? 0 : value}
        onChange={onChange}
        InputProps={{
          endAdornment: <InputAdornment position="end">Ft</InputAdornment>,
        }}
        autoFocus
      />
    );
  } else {
    return (
      <TextField
        variant="standard"
        type={type}
        onChange={onChange}
        value={value}
      />
    );
  }
}

export default TextInput;
