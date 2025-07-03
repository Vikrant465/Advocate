'use client';
import React from 'react';
import { Button } from '@heroui/react';

export default function First() {


  return (
    <div className="flex w-full h-screen flex-col items-center justify-center ">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="text-5xl">Upload Your Document</div>
        <Button color='primary'>
          Upload  
        </Button>
      </div>
    </div>
  );
}