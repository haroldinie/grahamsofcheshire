import React, { forwardRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// Use React.forwardRef to pass the ref to the ReCAPTCHA component
const RecaptchaComponent = forwardRef<ReCAPTCHA | null, { onVerify: (token: string | null) => void }>(
  ({ onVerify }, ref) => {
    const handleChange = (token: string | null) => {
      onVerify(token);
    };

    return (
      <ReCAPTCHA
        ref={ref}
        sitekey="6Lf3v10qAAAAANHrxNm0M9TBy62vZ1S5O50RSgXF"  // Replace with your actual Invisible reCAPTCHA site key
        size="invisible"
        onChange={handleChange}
      />
    );
  }
);

RecaptchaComponent.displayName = "RecaptchaComponent"; // For better debugging experience with React DevTools

export default RecaptchaComponent;