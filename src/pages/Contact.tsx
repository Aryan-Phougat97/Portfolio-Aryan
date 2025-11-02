import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Use Vercel serverless function endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if response is JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server is not configured properly. Please make sure the API is deployed on Vercel.");
      }

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 px-6 pb-20">
        <div className="container mx-auto max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-3 text-foreground">
              Get In Touch
            </h1>
            <p className="text-center text-muted-foreground mb-16 text-sm font-light">
              Have a question or want to work together? Drop me a message.
            </p>

            <div className="bg-card border border-border p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[13px] font-light text-muted-foreground flex items-center gap-2">
                    Name
                    <span className="text-accent text-[10px]">*</span>
                  </label>
                  <Input
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-transparent border-border focus:border-foreground/30 text-foreground placeholder:text-muted-foreground h-11 transition-all duration-300 focus:scale-[1.01]"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[13px] font-light text-muted-foreground flex items-center gap-2">
                    Email
                    <span className="text-accent text-[10px]">*</span>
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border-border focus:border-foreground/30 text-foreground placeholder:text-muted-foreground h-11 transition-all duration-300 focus:scale-[1.01]"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[13px] font-light text-muted-foreground flex items-center gap-2">
                    Message
                    <span className="text-accent text-[10px]">*</span>
                  </label>
                  <Textarea
                    required
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-transparent border-border focus:border-foreground/30 text-foreground placeholder:text-muted-foreground min-h-[140px] transition-all duration-300 focus:scale-[1.01] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-transparent border border-border text-foreground hover:bg-foreground/5 transition-all duration-300 h-11 font-light tracking-wide group relative overflow-hidden"
                  disabled={loading}
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                  {/* Red underline on hover */}
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-500" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
