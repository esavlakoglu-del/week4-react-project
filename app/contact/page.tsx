import { createMessage } from "@/app/actions";

export default function ContactPage() {
  return (
    <main style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      <h1>Contact Form</h1>

      <form action={createMessage}>
        <div style={{ marginBottom: "16px" }}>
          <label>
            Name
            <input
              name="name"
              required
              style={{ display: "block", width: "100%", padding: "8px" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label>
            Email
            <input
              name="email"
              type="email"
              required
              style={{ display: "block", width: "100%", padding: "8px" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label>
            Message
            <textarea
              name="body"
              required
              style={{ display: "block", width: "100%", padding: "8px" }}
            />
          </label>
        </div>

        <button type="submit">Send</button>
      </form>

      <p style={{ marginTop: "20px" }}>
        <a href="/messages">View submitted messages</a>
      </p>
    </main>
  );
}