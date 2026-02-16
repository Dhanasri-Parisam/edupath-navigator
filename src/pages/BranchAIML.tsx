import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";

const roadmap = [
  { year: "1st Year", title: "Foundation", color: "bg-accent/10 text-accent",
    skills: ["Python", "Math Foundations", "Programming Logic", "Linux Basics", "Git"],
    outcome: "Core programming and math foundation." },
  { year: "2nd Year", title: "Data & ML Basics", color: "bg-primary/10 text-primary",
    skills: ["Data Structures", "Statistics", "Machine Learning Basics", "NumPy/Pandas", "Visualization"],
    outcome: "Data analysis and basic ML models." },
  { year: "3rd Year", title: "Deep Learning", color: "bg-success/10 text-success",
    skills: ["Deep Learning", "NLP / Computer Vision", "TensorFlow / PyTorch", "ML Projects", "Kaggle Practice"],
    outcome: "Advanced AI model building." },
  { year: "4th Year", title: "Professional", color: "bg-accent/10 text-accent",
    skills: ["MLOps", "Model Deployment", "Research", "Internship", "Portfolio"],
    outcome: "Industry-ready AI/ML engineer." },
];

const AIML = () => (
  <Layout>
    <section className="hero-gradient section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4">
            <Link to="/courses" className="hover:underline">Courses</Link><span>/</span>
            <Link to="/courses/btech" className="hover:underline">B.Tech</Link><span>/</span><span>AIML</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">AI & Machine Learning</h1>
          <p className="text-primary-foreground/70 max-w-2xl leading-relaxed">
            Focuses on intelligent systems, data analysis, and automation technologies used in robotics, finance, healthcare, and software platforms.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Year-Wise Roadmap</h2>
        <div className="space-y-6">
          {roadmap.map((yr, i) => (
            <motion.div key={yr.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 accent-gradient" />
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${yr.color}`}>{yr.year}</span>
                <h3 className="font-display text-lg font-semibold">{yr.title}</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                {yr.skills.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-accent shrink-0" /><span>{s}</span></div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">{yr.outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Careers & Salary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "ML Engineer", salary: "₹6–20 LPA" },
            { title: "AI Engineer", salary: "₹8–30 LPA" },
            { title: "Data Scientist", salary: "₹7–25 LPA" },
            { title: "NLP Engineer", salary: "₹8–22 LPA" },
            { title: "Computer Vision Engineer", salary: "₹7–20 LPA" },
          ].map((c) => (
            <div key={c.title} className="glass-card rounded-xl p-5">
              <h4 className="font-display font-semibold mb-1">{c.title}</h4>
              <p className="text-accent font-semibold text-sm">{c.salary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default AIML;
