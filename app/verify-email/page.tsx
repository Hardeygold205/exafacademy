import React from 'react';
import { Metadata } from "next";
import VerifyEmail from '@/components/VerifyEmail';

export const metadata: Metadata = {
  title: "Verify Your Email",
};

function Verify() {
    
  return (
   <VerifyEmail />
  );
}

export default Verify;