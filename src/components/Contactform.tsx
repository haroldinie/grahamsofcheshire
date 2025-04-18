"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/api/email/send-email";
import { useState } from "react";
import RecaptchaComponent from "./recaptcha"
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";


export type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};


const Contactform: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastErrorVisible, setToastErrorVisible] = useState(false);
  const recaptchaToken = useRef<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null); 

  
  async function onSubmit(data: FormData) {

    if (!recaptchaToken.current) {
      recaptchaRef.current?.execute(); 
      return; 
    }
    const formDataWithRecaptcha = {
      ...data,
      recaptchaToken: recaptchaToken.current, 
    };
    try {
      const sendEmailRes = await sendEmail(formDataWithRecaptcha);
      if (!sendEmailRes) {
        throw new Error("Email failed to send");
      }
      if (sendEmailRes) {
        setToastVisible(true);

        setTimeout(() => {
          setToastVisible(false);
        }, 3000);
      }
      reset();
    } catch (e: unknown) {
      setToastErrorVisible(true);
      setTimeout(() => setToastErrorVisible(false), 3000);
    }
  }
  const handleRecaptchaVerify = async (token: string | null) => {
    recaptchaToken.current = token;
    handleSubmit(onSubmit)();  
  };

  return (
    <>
      <div className="mt-6 px-4 sm:px-6 lg:px-8">
        <div className="shade grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl border rounded-md font-[sans-serif]">
          <div>
            <h1 className="text-[#EAEAEA] text-3xl font-extrabold">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
              Let's Talk
            </h1>
            <p className="text-sm text-[#EAEAEA] mt-4">
                {/* eslint-disable-next-line react/no-unescaped-entities */} 
              Need to get in touch? All of our contact information is below or fill in the form and we'll get back to you.
            </p>

            <div className="mt-12">
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="bg-[#EAEAEA] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#DAA520"
                      viewBox="0 0 479.058 479.058"
                    >
                      <path
                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                  <a
                    href="mailto:adrian@grahamsofcheshire.com"
                    className="text-[#EAEAEA] text-sm ml-4"
                  >
                    <small className="block">Mail</small>
                    <strong>adrian@grahamsofcheshire.com</strong>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="bg-[#EAEAEA] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      fill="#DAA520"
                      viewBox="0 0 482.6 482.6"
                    >
                      <path
                        d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                  <a
                    href="tel:+441565325025"
                    className="text-[#EAEAEA] text-sm ml-4"
                  >
                    <small className="block">Phone</small>
                    <strong>01565 325025</strong>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-[#EAEAEA]text-base font-bold">Socials</h2>

              <ul className="flex mt-4 space-x-4">
                <li className="bg-[#EAEAEA] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="https://www.facebook.com/profile.php?id=61562249138777">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#AD974F"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                        data-original="#000000"
                      />
                    </svg>
                  </a>
                </li>

                <li className="bg-[#EAEAEA] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="https://www.instagram.com/grahams_of_cheshire/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#AD974F"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <form className="ml-auto space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              className={`w-full text-gray-800 rounded-md px-4 py-2.5 border text-sm ${
                errors.name
                  ? "border-red-500 outline-red-500"
                  : "border-gray-300"
              } `}
            />{" "}
            {errors.name && <span>This field is required</span>}
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className={`w-full text-gray-800 rounded-md px-4 py-2.5 border text-sm ${
                errors.email
                  ? "border-red-500 outline-red-500"
                  : "border-gray-300"
              }`}
            />{" "}
            {errors.email && <span>This field is required</span>}
            <input
              type="tel"
              placeholder="Phone"
              {...register("phone")}
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm"
            />
            <textarea
              placeholder="Message"
              {...register("message", { required: true })}
              rows={6}
              className={`w-full text-gray-800 rounded-md px-4 py-2.5 border text-sm ${
                errors.message
                ? "border-red-500 outline-red-500 "
                : "border-gray-300"
              }`}
            />
            {errors.message && <span>This field is required</span>}
            <RecaptchaComponent onVerify={handleRecaptchaVerify} ref={recaptchaRef} />

            <button
              type="submit"
              className="w-full py-2.5 px-6 bg-[#AD974F] text-white rounded-md font-semibold shadow-md hover:bg-[#DAA520]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Toast for success message */}
      {toastVisible && (
        <div
          id="toast-simple"
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-800 bg-[#EAEAEA] divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow"
          role="alert"
        >
          <svg
            className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
            />
          </svg>
          <div className="ps-4 text-sm font-normal">
            Message sent successfully.
          </div>
        </div>
      )}

      {/* Error Toast */}
      {toastErrorVisible && (
        <div
          id="toast-danger"
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-center w-full max-w-xs p-4 mb-4 text-gray-800 bg-white rounded-lg shadow"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            </svg>
            <span className="sr-only">Error icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">
            Messaged failed to send.
          </div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-400 inline-flex items-center justify-center h-8 w-8"
            data-dismiss-target="#toast-danger"
            aria-label="Close" 

            onClick={() => setToastErrorVisible(false)} // Close button logic
          >
            
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Contactform;
