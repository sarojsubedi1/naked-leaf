"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-6 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">
              Contact Us
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <Label className="sr-only" htmlFor="first-name">
                  First Name
                </Label>
                <Input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  id="first-name"
                  name="first-name"
                  placeholder="First Name"
                  required
                  type="text"
                />
              </div>
              <div>
                <Label className="sr-only" htmlFor="last-name">
                  Last Name
                </Label>
                <Input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  id="last-name"
                  name="last-name"
                  placeholder="Last Name"
                  required
                  type="text"
                />
              </div>
              <div>
                <Label className="sr-only" htmlFor="email">
                  Email
                </Label>
                <Input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  type="email"
                />
              </div>
              <div>
                <Label className="sr-only" htmlFor="message">
                  Message
                </Label>
                <Textarea
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  id="message"
                  name="message"
                  placeholder="Message"
                  required
                />
              </div>
            </div>
            <div>
              <Button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="submit"
              >
                Send message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
