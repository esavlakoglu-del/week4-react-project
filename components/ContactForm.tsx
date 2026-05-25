"use client";

export default function ContactForm() {

  if (typeof window !== "undefined") {

    setTimeout(() => {

      const form =
        document.getElementById("contact-form");

      form?.addEventListener("submit", (event) => {

        event.preventDefault();

        const email =
          document.getElementById("email") as HTMLInputElement;

        const message =
          document.getElementById("message") as HTMLTextAreaElement;

        const status =
          document.getElementById("form-status");

        if (!email.value.includes("@")) {

          if (status) {
            status.textContent =
              "Please enter a valid email.";
          }

          return;
        }

        if (message.value.length < 5) {

          if (status) {
            status.textContent =
              "Message too short.";
          }

          return;
        }

        if (status) {
          status.textContent =
            "Form submitted successfully!";
        }

      });

    }, 0);
  }

  return (
    <form id="contact-form" className="flex flex-col gap-4 max-w-md">

      <input
        id="email"
        type="email"
        placeholder="Email"
        className="border p-2"
      />

      <textarea
        id="message"
        placeholder="Message"
        className="border p-2"
      />

      <button
        type="submit"
        className="border p-2"
      >
        Submit
      </button>

      <p
        id="form-status"
        aria-live="polite"
      ></p>

    </form>
  );
}
