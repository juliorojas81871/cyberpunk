import React from "react";
import GradientBtn from "./GradientBtn";

const ContactForm = () => {
  return (
    <div className="p-4 text-left">
      <form
        // to enable getform, please add the url to action
        // action=""
        // method="POST"
      >
        <div className="grid lg:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="capitalize text-sm py-2 font-light">name</label>
            <input
              type="text"
              name="name"
              placeholder="Form Disable "
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="capitalize text-sm py-2 font-light">phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Form Disable "
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="capitalize text-sm py-2 font-light">email</label>
            <input
              type="email"
              name="email"
              placeholder="Form Disable "
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="capitalize text-sm py-2 font-light">
              message
            </label>
            <textarea
              name="message"
              rows="10"
              placeholder="Form Disable "
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <GradientBtn className="ml-4 mt-4 capitalize" title="send message" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;