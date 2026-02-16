import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">Have questions about your career path? We're here to help.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-lg">
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-success" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
              <p className="text-muted-foreground">We'll get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-xl p-8 space-y-5"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <div>
                <label className="text-sm font-medium mb-1.5 block">Name</label>
                <input required className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email</label>
                <input type="email" required className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Course Interest</label>
                <select required className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all">
                  <option value="">Select a course</option>
                  <option>B.Tech</option>
                  <option>B.Pharmacy</option>
                  <option>BBA</option>
                  <option>CA / CMA</option>
                  <option>Degree (BSc/BCom/BA)</option>
                  <option>Polytechnic</option>
                  <option>Design</option>
                  <option>Hotel Management</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Message</label>
                <textarea required rows={4} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all resize-none" />
              </div>
              <Button type="submit" variant="hero" className="w-full" size="lg">
                Send Message <Send className="w-4 h-4" />
              </Button>
            </motion.form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
