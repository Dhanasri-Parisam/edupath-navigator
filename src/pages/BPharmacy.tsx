import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Building2 } from "lucide-react";
import Layout from "@/components/layout/Layout";

const branches = ["Pharmaceutics", "Pharmacology", "Pharmaceutical Chemistry", "Pharmacognosy", "Clinical Pharmacy", "Industrial Pharmacy", "Pharmaceutical Analysis"];

const roadmap = [
  {
    year: "1st Year", title: "Biological & Chemical Foundations", color: "bg-accent/10 text-accent",
    skills: ["Human Anatomy & Physiology", "Pharmaceutical Inorganic Chemistry", "Biochemistry Basics", "Cell Biology", "Basic Lab Techniques", "Scientific Measurement"],
    outcome: "Understanding of body systems and drug components.",
  },
  {
    year: "2nd Year", title: "Drug Science Core", color: "bg-primary/10 text-primary",
    skills: ["Pharmacology Basics", "Pharmaceutical Organic Chemistry", "Microbiology", "Pathophysiology", "Dosage Forms", "Lab Analysis Techniques"],
    outcome: "Understanding drug actions and formulation principles.",
  },
  {
    year: "3rd Year", title: "Formulation & Industry", color: "bg-success/10 text-success",
    skills: ["Medicinal Chemistry", "Pharmacokinetics", "Industrial Pharmacy", "Pharmaceutical Analysis", "Quality Control", "Drug Stability Studies"],
    outcome: "Ability to design and evaluate medicines.",
  },
  {
    year: "4th Year", title: "Clinical & Regulatory", color: "bg-accent/10 text-accent",
    skills: ["Clinical Pharmacy", "Biopharmaceutics", "Hospital Pharmacy", "Regulatory Affairs", "Pharmacovigilance", "Internship / Training"],
    outcome: "Industry or clinical pharmacy readiness.",
  },
];

const tools = ["HPLC", "Spectroscopy", "Dissolution Apparatus", "Tablet Compression Systems", "Lab Analytics Software", "Clinical Data Systems"];

const careers = [
  { title: "Pharmacist (Hospital/Retail)", salary: "₹2.5–6 LPA" },
  { title: "Clinical Research Associate", salary: "₹4–10 LPA" },
  { title: "Drug Safety Officer", salary: "₹5–12 LPA" },
  { title: "Pharma Production Officer", salary: "₹3–8 LPA" },
  { title: "Quality Control Analyst", salary: "₹3–8 LPA" },
  { title: "Regulatory Affairs Executive", salary: "₹4–10 LPA" },
  { title: "Medical Representative", salary: "₹3–7 LPA" },
  { title: "Drug Inspector (Govt)", salary: "₹40k–80k/month" },
];

const recruiters = ["Sun Pharma", "Dr. Reddy's", "Cipla", "Aurobindo Pharma", "Lupin", "Biocon", "Apollo Hospitals"];

const demandPoints = ["Pharma manufacturing growth", "Healthcare expansion", "Clinical trials industry", "Export medicines sector"];

const BPharmacy = () => (
  <Layout>
    {/* Hero */}
    <section className="hero-gradient section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4">
            <Link to="/courses" className="hover:underline">Courses</Link>
            <span>/</span>
            <span>B.Pharmacy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Bachelor of Pharmacy</h1>
          <p className="text-primary-foreground/70 max-w-2xl leading-relaxed">
            B.Pharm is a 4-year undergraduate program focused on drug formulation, pharmacology, medicinal chemistry, clinical research, and pharmaceutical manufacturing. It prepares students for careers in healthcare, pharmaceutical industries, drug regulation, and research.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Branches */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Key Specializations</h2>
        <div className="flex flex-wrap gap-3">
          {branches.map((b) => (
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
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Tools & Technologies</h2>
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
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Career Opportunities & Salary</h2>
        <div className="flex flex-wrap gap-4 mb-8 text-sm">
          <span className="px-4 py-2 rounded-lg bg-accent/10 text-accent font-semibold">Entry: ₹2.5–6 LPA</span>
          <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold">Mid: ₹6–12 LPA</span>
          <span className="px-4 py-2 rounded-lg bg-success/10 text-success font-semibold">Senior: ₹15+ LPA</span>
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
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-6 h-6 text-success" />
          <span className="text-lg font-semibold text-success">High Demand</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {demandPoints.map((d) => (
            <div key={d} className="flex items-center gap-3 glass-card rounded-xl p-4">
              <Building2 className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm font-medium">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default BPharmacy;
