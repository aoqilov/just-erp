import { Input } from "antd";
import { ChangeEvent } from "react";

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  style?: React.CSSProperties;
  // You can include other props here if needed
  [key: string]: any; // This allows any other props to be passed down
}

const FieldOne: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  style,
  ...props
}) => {
  return (
    <div className="custom-input">
      {label && <label className="input-label">{label}</label>}
      <Input
        style={style}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`input-field ${error ? "input-error" : ""}`}
        {...props}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default FieldOne;
