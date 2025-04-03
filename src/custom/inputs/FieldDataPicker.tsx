import React, { useState, useRef } from "react";
import { DatePicker, message } from "antd";
import type { DatePickerProps } from "antd";

const FieldDataPicker: React.FC = () => {
  const [open, setOpen] = useState(false);
  const datePickerRef = useRef(null);
  const [date, setDate] = useState<string>("");

  const handleChange: DatePickerProps["onChange"] = (_, dateString: string) => {
    const selectedDate = new Date(dateString);
    const today = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(today.getFullYear() + 3);

    // Validation logic
    if (selectedDate > maxDate) {
      message.error("Sana 3 yildan keyingi bo'lishi mumkin emas!");
      return;
    }
    if (selectedDate < today) {
      message.error("Bugundan oldingi sanani tanlash mumkin emas!");
      return;
    }

    setDate(dateString);
    setOpen(false); // Sana tanlangandan keyin yopiladi
  };

  const disabledDate = (current: Date): boolean => {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(today.getFullYear() + 3);
    return current < today || current > maxDate;
  };

  return (
    <div className="custom-date-picker">
      <DatePicker
        ref={datePickerRef}
        onChange={handleChange}
        placeholder="DD/MM/YYYY"
        format="DD-MM-YYYY"
        disabledDate={(current) =>
          disabledDate(new Date(current.format("YYYY-MM-DD")))
        } // Disable invalid dates
        open={open} // State orqali boshqaramiz
        onOpenChange={(isOpen) => setOpen(isOpen)}
      />
    </div>
  );
};

export default FieldDataPicker;
