'use client';

import axios from "axios";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  Input,
  useDisclosure,
} from "@heroui/react";
import React from 'react';

export default function GuestLogin() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      await axios.post("/api/guest", {
        name: data.Name,
        phonenumber: data.phonenumber,
        email: data.email,
      });
      alert("Submitted successfully!");
    } catch (err) {
      console.error("API error:", err);
      alert("Submission failed.");
    }
  };

  return (
    <>

      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <div className="text-7xl">Login as Guest</div>
          <Button color="primary" onPress={onOpen}>
            Login
          </Button>

          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Guest Registration</ModalHeader>
                  <ModalBody>
                    <Form
                      className="w-full max-w-xs flex flex-col gap-4"
                      onSubmit={handleSubmit}
                    >
                      <Input
                        isRequired
                        errorMessage="Please enter a valid username"
                        label="Name"
                        labelPlacement="outside"
                        name="Name"
                        placeholder="Enter your username"
                        type="text"
                      />
                      <Input
                        isRequired
                        errorMessage="Please enter a valid phone number"
                        label="Phone number"
                        labelPlacement="outside"
                        name="phonenumber"
                        placeholder="Enter your Phone number"
                        type="tel"
                      />
                      <Input
                        isRequired
                        errorMessage="Please enter a valid email"
                        label="Email"
                        labelPlacement="outside"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                      />
                      <div className="flex justify-end gap-2 mt-4">
                        <Button color="danger" variant="light" onPress={onClose}>
                          Close
                        </Button>
                        <Button color="primary" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </>
  );
}
