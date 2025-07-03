'use client';
import React from 'react';
import { Button } from '@heroui/react';

export default function First() {
  return (
    <div className="flex w-full h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16 text-center">
        <h1 className="text-5xl font-bold">Welcome to Advocate</h1>
        <p className="text-xl max-w-2xl">
          Advocate is your trusted platform to manage, upload, and view legal cases with ease.
          Whether you're a client or a legal professional, our system helps streamline the legal process.
        </p>
        <Button
          color="primary"
          size="lg"
          className="mt-4"
          as="a"
          href="/cases"
        >
          View All Cases
        </Button>
        <Button
          variant="flat"
          size="lg"
          className="mt-2"
          as="a"
          href="/upload"
        >
          Upload Your Case
        </Button>
      </div>
    </div>
  );
}
