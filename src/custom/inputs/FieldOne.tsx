import { Input } from "antd";
import { ChangeEvent } from "react";

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
}

const FieldOne: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  disabled,
  error,
}) => {
  return (
    <div className="custom-input">
      {label && <label className="input-label">{label}</label>}
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`input-field ${error ? "input-error" : ""}`}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default FieldOne;

// import { useState } from "react";
// import TextField from "@/components/TextField";

// const ExamplePage = () => {
//   const [value, setValue] = useState("");
//   const [error, setError] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//     setError(e.target.value ? "" : "Bu maydonni to'ldiring!");
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <TextField
//         label="Foydalanuvchi ismi"
//         placeholder="Ismingizni kiriting"
//         value={value}
//         onChange={handleChange}
//         error={error}
//       />
//     </div>
//   );
// };

// export default ExamplePage;
