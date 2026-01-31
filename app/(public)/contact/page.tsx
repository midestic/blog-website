import ContactForm from "./contact-form";

export default function page() {
  return (
    <div className="space-y-[50px]">
      <div
        className="h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{ backgroundImage: "url('/icons/contact-hero.svg')" }}
      >
        <p className="font-[800] text-[64px] text-white">Contact</p>
      </div>

      <ContactForm />
    </div>
  );
}
