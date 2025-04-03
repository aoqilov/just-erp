import { Button, ButtonProps } from "antd";
import { ReactNode } from "react";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
  icon?: ReactNode; // Icon qo‘shildi
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  icon,
  type = "primary",
  loading = false,
  disabled = false,
  onClick, // onClick propsini olish
  ...props
}) => {
  return (
    <Button
      type={type}
      loading={loading}
      disabled={disabled}
      icon={icon}
      onClick={onClick}
      // onClick propsini olish // Iconni Ant Design buttoniga beramiz
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

// import CustomButton from "@/components/CustomButton";

// const ExamplePage = () => {
//   return (
//     <div style={{ padding: "20px", display: "flex", gap: "10px" }}>
//       <CustomButton type="primary">Submit</CustomButton>
//       <CustomButton type="default">Cancel</CustomButton>
//       <CustomButton type="dashed">Dashed</CustomButton>
//       <CustomButton type="primary" loading>
//         Loading
//       </CustomButton>
//     </div>
//   );
// };

// export default ExamplePage;
