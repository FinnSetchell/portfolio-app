export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-white px-4"
    >
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-lg text-gray-700 text-center max-w-3xl mb-6">
        {/* Add your contact content here */}
        Feel free to reach out to me for collaborations, projects, or just to say hi!
      </p>
      <a
        href="mailto:finn.setchell@example.com"
        className="bg-black text-white rounded-full px-6 py-3 hover:bg-gray-800 transition"
      >
        Email Me
      </a>
    </section>
  );
}
