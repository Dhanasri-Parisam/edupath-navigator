import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Building2, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

const caLevels = ["Foundation", "Intermediate", "Final", "Articleship"];
const caSkills = ["Accounting", "Taxation", "Auditing", "Financial Reporting", "Corporate Law", "Strategic Finance"];
const cmaLevels = ["Foundation", "Intermediate", "Final"];
const cmaSkills = ["Cost Accounting", "Financial Planning", "Business Strategy", "Performance Management", "Corporate Finance"];

const careers = [
  { title: "Chartered Accountant", salary: "₹7–30 LPA" },
  { title: "Cost Accountant", salary: "₹6–25 LPA" },
  { title: "Auditor", salary: "₹5–15 LPA" },
  { title: "Finance Manager", salary: "₹8–20 LPA" },
  { title: "Tax Consultant", salary: "₹5–18 LPA" },
  { title: "CFO (Senior)", salary: "₹30–60 LPA" },
  { title: "Financial Analyst", salary: "₹6–15 LPA" },
  { title: "Compliance Officer", salary: "₹5–12 LPA" },
];

const recruiters = ["Deloitte", "EY", "KPMG", "PwC", "Banks", "MNCs", "Consulting Firms"];

const CACMA = () => (
  <Layout>
    <section className="hero-gradient section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4">
            <Link to="/courses" className="hover:underline">Courses</Link>
            <span>/</span>
            <span>CA / CMA</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">CA / CMA</h1>
          <p className="text-primary-foreground/70 max-w-2xl leading-relaxed">
            Chartered Accountant (CA) and Cost & Management Accountant (CMA) are premier professional finance certifications focused on accounting, taxation, auditing, corporate finance, and business strategy.
          </p>
        </motion.div>
      </div>
    </section>

    {/* CA Path */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">CA Path</h2>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Levels</h3>
          <div className="flex flex-wrap items-center gap-3">
            {caLevels.map((l, i) => (
              <div key={l} className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-lg bg-accent/10 text-accent text-sm font-semibold border border-accent/20">{l}</span>
                {i < caLevels.length - 1 && <ArrowRight className="w-4 h-4 text-muted-foreground" />}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Skills Developed</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {caSkills.map((s) => (
              <div key={s} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CMA Path */}
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">CMA Path</h2>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Levels</h3>
          <div className="flex flex-wrap items-center gap-3">
            {cmaLevels.map((l, i) => (
              <div key={l} className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold border border-primary/20">{l}</span>
                {i < cmaLevels.length - 1 && <ArrowRight className="w-4 h-4 text-muted-foreground" />}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Skills Developed</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {cmaSkills.map((s) => (
              <div key={s} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Careers & Salary */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Career Opportunities & Salary</h2>
        <div className="flex flex-wrap gap-4 mb-8 text-sm">
          <span className="px-4 py-2 rounded-lg bg-accent/10 text-accent font-semibold">CA Fresher: ₹7–12 LPA</span>
          <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold">Experienced: ₹15–30 LPA</span>
          <span className="px-4 py-2 rounded-lg bg-success/10 text-success font-semibold">Top Firms: ₹40+ LPA</span>
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
    <section className="section-padding bg-muted/50">
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
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Industry Demand</h2>
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-6 h-6 text-success" />
          <span className="text-lg font-semibold text-success">Very High Demand</span>
        </div>
        <p className="text-muted-foreground">Finance professionals are required in every organization — from startups to multinational corporations.</p>
      </div>
    </section>
  </Layout>
);

export default CACMA;
