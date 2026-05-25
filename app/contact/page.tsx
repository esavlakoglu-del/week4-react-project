import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen p-10">

      <Nav />

      <h1 className="text-4xl font-bold mb-6">
        Contact Page
      </h1>

      <p className="mb-6">
        Send us a message below.
      </p>

      <ThemeToggle />

      <div className="mt-6">
        <ContactForm />
      </div>

    </main>
  );
}
