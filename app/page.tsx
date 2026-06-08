import DataPanel from "@/components/DataPanel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen p-10 bg-gray-100 text-black">

      <h1 className="text-4xl font-bold mb-6">
        My Website
      </h1>
      <main className="space-y-6"> 
        <Header />
        <Nav />

        <h2>Week 4 React Component Project</h2>

<Card title="Feature One" description="This is the first reusable card." />
<Card title="Feature Two" description="This is the second reusable card." />
<Card title="Feature Three" description="This is the third reusable card." />

        <ThemeToggle />
        <DataPanel />
        <ContactForm />

        <Footer />

       </main>
       
       </div>
  );
}