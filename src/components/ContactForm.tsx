import emailjs from "@emailjs/browser";
import React, { Component } from "react";
class ContactForm extends Component {
  sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? "error",
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID ?? "error",
        e.target,
        process.env.NEXT_PUBLIC_EMAIL_USER_ID
      )
      .then();
    e.target.reset();
  };

  render() {
    return (
      <div>
        <div className="p-2 text-center text-white">
          <form onSubmit={this.sendEmail}>
            <div className="flex flex-col flex-wrap gap-3 rounded-md border-2 border-neutral-600 bg-neutral-700 p-4">
              <div className="flex flex-row items-center gap-4">
                <div className="flex w-full flex-row gap-4">
                  <div className="flex flex-col items-start justify-center space-y-6 text-xl font-semibold">
                    <h3>Name</h3>
                    <h3>Email</h3>
                    <h3>Subject</h3>
                  </div>
                  <div className="flex w-full flex-col items-stretch justify-center space-y-2">
                    <input
                      type="text"
                      className="rounded-md border-2 border-neutral-500 bg-neutral-600 p-2 text-white"
                      placeholder="Name"
                      name="name"
                    />
                    <input
                      type="email"
                      className=" rounded-md border-2 border-neutral-500 bg-neutral-600 p-2 text-white"
                      placeholder="Email Address"
                      name="email"
                    />
                    <input
                      type="text"
                      className="rounded-md border-2 border-neutral-500 bg-neutral-600 p-2 text-white"
                      placeholder="Subject"
                      name="subject"
                    />
                  </div>
                </div>
              </div>
              <div>
                <textarea
                  className="w-full rounded-md border-2 border-neutral-500 bg-neutral-600 p-2 text-white"
                  placeholder="Message"
                  name="message"
                />
              </div>
              <div>
                <div>
                  <input
                    type="submit"
                    value="Send message"
                    className="cursor-pointer rounded-md bg-sky-600 bg-gradient-to-r p-2 text-white hover:bg-sky-700  hover:text-neutral-200"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default ContactForm;
