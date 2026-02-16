import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Microscope, BookOpen, Users, Trophy, Briefcase, Lightbulb, Building, Cpu } from "lucide-react";

const items = [
  { icon: Microscope, title: "Labs & Workshops", desc: "Hands-on learning with modern equipment and tools." },
  { icon: BookOpen, title: "Libraries", desc: "Extensive digital and physical resources for research." },
  { icon: Briefcase, title: "Internships", desc: "Industry partnerships for real-world experience." },
  { icon: Users, title: "Clubs & Societies", desc: "Technical, cultural, and entrepreneurial communities." },
  { icon: Trophy, title: "Technical Events", desc: "Hackathons, coding contests, and tech fests." },
  { icon: Building, title: "Placements", desc: "Dedicated placement cells with top recruiters." },
  { icon: Cpu, title: "Industry Exposure", desc: "Guest lectures, industrial visits, and partnerships." },
  { icon: Lightbulb, title: "Innovation Centers", desc: "Incubation and startup support programs." },
];

const CampusLife = () => (
  <Layout>
    <section className="hero-gradient section-padding">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Campus Life</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Experience beyond academics — labs, internships, events, and innovation.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card card-hover rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default CampusLife;
