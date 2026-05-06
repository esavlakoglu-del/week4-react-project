import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Nav from "@/Components/Nav";
import Card from "@/Components/Card";
import ThemeToggle from "@/Components/ThemeToggle";
import ContactForm from "@/Components/ContactForm";

export default function Home() {
  return (
    <main>
      <Header />
      <Nav />

      <h2>Week 4 React Component Project</h2>

      <Card title="Feature One" description="This is the first reusable card." />
      <Card title="Feature Two" description="This is the second reusable card." />
      <Card title="Feature Three" description="This is the third reusable card." />

      <ThemeToggle />

      <br />
      <br />

      <ContactForm />

      <Footer />
    </main>
  );
}