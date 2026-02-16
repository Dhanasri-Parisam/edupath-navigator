import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Building2 } from "lucide-react";
import Layout from "@/components/layout/Layout";

const specializations = ["Marketing", "Finance", "Human Resource Management", "Business Analytics", "International Business", "Entrepreneurship", "Operations Management", "Digital Marketing"];

const roadmap = [
  {
    year: "1st Year", title: "Business Foundations", color: "bg-accent/10 text-accent",
    skills: ["Principles of Management", "Business Economics", "Financial Accounting", "Business Communication", "Business Mathematics"],
    outcome: "Basic corporate and financial awareness.",
  },
  {
    year: "2nd Year", title: "Functional Management", color: "bg-primary/10 text-primary",
    skills: ["Marketing Management", "Financial Management", "HR Management", "Operations Management", "Business Statistics", "MIS"],
    outcome: "Understanding of business departments.",
  },
  {
    year: "3rd Year", title: "Specialization & Strategy", color: "bg-success/10 text-success",
    skills: ["Strategic Management", "Specialization Electives", "Business Law", "Entrepreneurship", "Internship", "Case Studies"],
    outcome: "Corporate role readiness.",
  },
];

const tools = ["MS Excel", "PowerPoint", "CRM Tools", "Business Analytics Tools", "Digital Marketing Platforms", "Financial Modeling Basics"];

const careers = [
  { title: "Business Analyst", salary: "₹4–12 LPA" },
  { title: "Marketing Executive", salary: "₹3–8 LPA" },
  { title: "HR Executive", salary: "₹3–7 LPA" },
  { title: "Operations Executive", salary: "₹3–8 LPA" },
  { title: "Sales Manager", salary: "₹4–12 LPA" },
  { title: "Entrepreneur", salary: "Variable" },
  { title: "Management Trainee", salary: "₹3–6 LPA" },
  { title: "Digital Marketing Specialist", salary: "₹3–10 LPA" },
];

const recruiters = ["Deloitte", "EY", "KPMG", "HDFC", "ICICI", "Amazon", "Flipkart", "TCS", "Infosys"];

const BBAPage = () => (
  <Layout>
    <section className="hero-gradient section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4">
            <Link to="/courses" className="hover:underline">Courses</Link>
            <span>/</span>
            <span>BBA</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Bachelor of Business Administration</h1>
          <p className="text-primary-foreground/70 max-w-2xl leading-relaxed">
            BBA is a 3-year management program that develops leadership, finance, marketing, and organizational skills required in corporate, startup, and entrepreneurial environments.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Specializations */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Specializations</h2>
        <div className="flex flex-wrap gap-3">
          {specializations.map((b) => (
            <span key={b} className="px-4 py-2 rounded-lg bg-accent/10 text-accent text-sm font-medium border border-accent/20">{b}</span>
          ))}
        </div>
      </div>
    </section>

    {/* Roadmap */}
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Year-Wise Roadmap</h2>
        <div className="space-y-6">
          {roadmap.map((yr, i) => (
            <motion.div key={yr.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card rounded-xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 accent-gradient" />
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${yr.color}`}>{yr.year}</span>
                <h3 className="font-display text-lg font-semibold">{yr.title}</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                {yr.skills.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">{yr.outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Tools */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Tools & Skills</h2>
        <div className="flex flex-wrap gap-3">
          {tools.map((t) => (
            <span key={t} className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium">{t}</span>
          ))}
        </div>
      </div>
    </section>

    {/* Careers & Salary */}
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Career Roles & Salary</h2>
        <div className="flex flex-wrap gap-4 mb-8 text-sm">
          <span className="px-4 py-2 rounded-lg bg-accent/10 text-accent font-semibold">Entry: ₹3–7 LPA</span>
          <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold">Mid: ₹8–15 LPA</span>
          <span className="px-4 py-2 rounded-lg bg-success/10 text-success font-semibold">Senior: ₹20+ LPA</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {careers.map((c) => (
            <div key={c.title} className="glass-card rounded-xl p-5">
              <h4 className="font-display font-semibold mb-1">{c.title}</h4>
              <p className="text-accent font-semibold text-sm">{c.salary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Recruiters */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Top Recruiters</h2>
        <div className="flex flex-wrap gap-3">
          {recruiters.map((r) => (
            <span key={r} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">{r}</span>
          ))}
        </div>
      </div>
    </section>

    {/* Industry Demand */}
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Industry Demand</h2>
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-6 h-6 text-success" />
          <span className="text-lg font-semibold text-success">Very High Demand</span>
        </div>
        <p className="text-muted-foreground">Business graduates are needed across all industries — from IT to banking, retail to consulting.</p>
      </div>
    </section>
  </Layout>
);

export default BBAPage;
