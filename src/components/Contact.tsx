import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

export default function Contact({ backgroundColor }: { backgroundColor: string }) {
  return (
    <section
      id="contact"
      style={{ backgroundColor }}
      className="min-h-screen flex flex-col items-center justify-center px-4 text-gray-900"
    >
      <div className="flex flex-col items-center justify-center gap-4 text-center mb-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Get In Touch
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Have a project in mind or want to chat? Feel free to reach out!
        </p>
      </div>
      <div className="mx-auto max-w-[600px]">
        <Card>
          <h3 className="text-xl font-semibold mb-2">Contact Form</h3>
          <p className="text-sm text-gray-500 mb-4">
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-400"
                placeholder="What is this regarding?"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-400"
                placeholder="Your message here..."
              />
            </div>
            <Button type="submit" variant="black" fullWidth>
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
