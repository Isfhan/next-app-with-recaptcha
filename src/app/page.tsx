'use client'

import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';


const SITE_KEY = process.env.NEXT_PUBLIC_reCAPTCHA_SITE_KEY;



export default function Login() {

  const captchaRef = useRef<null | ReCAPTCHA>(null);

  function onChange(value: any) {
    console.log("Captcha value:", value);
  }

  function handleRest() {
    const current = captchaRef.current as ReCAPTCHA;
    current.reset();
  }

  return (
    <>
      <h1>Testing</h1>
      <ReCAPTCHA
        sitekey={SITE_KEY as string}
        onChange={onChange}
        ref={captchaRef}
      />

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleRest}>Reset captcha</button>
    </>
  );
}
