// app/contact/page.tsx
import ContactMenu from "../components/ContactMenu";

export const metadata = { title: "Contact – Kwon Hyukwoo" };

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pt-16 pb-12">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="mt-2 text-neutral-700">
        Open to collaboration, roles, and studio inquiries.
      </p>
      <div className="mt-5">
        <ContactMenu />
      </div>
    </main>
  );
}
