import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Monitor, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

const branches = [
  { name: "CSE", full: "Computer Science & Engineering", path: "/courses/btech/cse", desc: "Software development, algorithms, IT" },
  { name: "CSD", full: "Computer Science & Design", path: "/courses/btech/cse", desc: "Software + UI/UX Design" },
  { name: "CAI", full: "Computer Science & AI", path: "/courses/btech/cse", desc: "AI-focused computing" },
  { name: "AIML", full: "AI & Machine Learning", path: "/courses/btech/aiml", desc: "Intelligent systems & data science" },
  { name: "ECE", full: "Electronics & Communication", path: "/courses/btech/ece", desc: "Electronics, telecom, embedded systems" },
  { name: "Mechanical", full: "Mechanical Engineering", path: "/courses/btech/mechanical", desc: "Machines, energy, manufacturing" },
  { name: "Civil", full: "Civil Engineering", path: "/courses/btech/civil", desc: "Infrastructure, construction, design" },
];

const BTech = () => (
  <Layout>
    <section className="hero-gradient section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4">
            <Link to="/courses" className="hover:underline">Courses</Link>
            <span>/</span>
            <span>B.Tech</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Bachelor of Technology</h1>
          <p className="text-primary-foreground/70 max-w-2xl leading-relaxed">
            A 4-year professional engineering degree focused on technical knowledge, problem solving, and industry-oriented skills.
          </p>
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-primary-foreground/80">
            <span>📅 Duration: <strong>4 Years</strong></span>
            <span>🎓 Eligibility: <strong>Intermediate (MPC)</strong></span>
            <span>💰 Avg Salary: <strong>₹3–12 LPA</strong></span>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Choose Your Branch</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {branches.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link to={b.path}>
                <div className="glass-card card-hover rounded-xl p-6 group h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2 py-1 rounded-md bg-accent/10 text-accent">{b.name}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold mb-1">{b.full}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Career Scope</h2>
        <p className="text-muted-foreground mb-6">Engineering, IT, Manufacturing, Core Industries, Research, Government Jobs</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Software Dev", "System Design", "Core Engineering", "Research", "IT Consulting", "Government", "Manufacturing", "Entrepreneurship"].map((c) => (
            <div key={c} className="bg-card rounded-lg p-4 border border-border text-center text-sm font-medium">{c}</div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default BTech;
