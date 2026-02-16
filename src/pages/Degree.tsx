import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

const tabs = ["BSc", "BCom", "BA"] as const;
type Tab = typeof tabs[number];

const data: Record<Tab, {
  title: string; overview: string;
  branches: string[]; roadmap: { year: string; focus: string }[];
  careers: string[]; salary: string;
}> = {
  BSc: {
    title: "Bachelor of Science",
    overview: "BSc programs offer specializations across science and technology, preparing students for research, IT, analytics, and teaching careers.",
    branches: ["Computer Science", "Mathematics", "Physics", "Chemistry", "Biotechnology", "Electronics", "Data Science", "Statistics"],
    roadmap: [
      { year: "1st Year", focus: "Programming + Math Fundamentals" },
      { year: "2nd Year", focus: "Data Structures + DBMS / Core Science" },
      { year: "3rd Year", focus: "Web / Software / Research Projects" },
    ],
    careers: ["IT Jobs (CS)", "Research Assistant", "Lab Analyst", "Data Analyst", "Teaching", "Govt Exams"],
    salary: "Entry: ₹2.5–6 LPA | Experienced: ₹8–12 LPA",
  },
  BCom: {
    title: "Bachelor of Commerce",
    overview: "BCom programs develop expertise in accounting, finance, taxation, and corporate governance for banking and corporate careers.",
    branches: ["General BCom", "Accounting & Finance", "Banking & Insurance", "Taxation", "Computer Applications", "Corporate Secretaryship", "E-Commerce"],
    roadmap: [
      { year: "1st Year", focus: "Accounting Basics & Business Economics" },
      { year: "2nd Year", focus: "Corporate Accounting & Business Law" },
      { year: "3rd Year", focus: "Taxation, Finance & Corporate Roles" },
    ],
    careers: ["Accountant", "Tax Consultant", "Banking Officer", "Auditor", "Finance Executive", "Analyst"],
    salary: "Entry: ₹2.5–5 LPA | Experienced: ₹6–12 LPA",
  },
  BA: {
    title: "Bachelor of Arts",
    overview: "BA programs develop critical thinking, communication, and analytical skills across humanities and social sciences for diverse career paths.",
    branches: ["English", "Economics", "Political Science", "Psychology", "Sociology", "History", "Public Administration", "Journalism"],
    roadmap: [
      { year: "1st Year", focus: "Core Subject Foundations & Communication" },
      { year: "2nd Year", focus: "Specialized Electives & Research Methods" },
      { year: "3rd Year", focus: "Advanced Studies & Career Preparation" },
    ],
    careers: ["Civil Services", "Teaching", "Content Writing", "Journalism", "Social Work", "Public Policy", "Research"],
    salary: "Entry: ₹2–5 LPA | Experienced: ₹6–10 LPA",
  },
};

const Degree = () => {
  const [active, setActive] = useState<Tab>("BSc");
  const d = data[active];

  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4">
              <Link to="/courses" className="hover:underline">Courses</Link>
              <span>/</span>
              <span>Degree</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Degree Programs</h1>
            <p className="text-primary-foreground/70 max-w-2xl leading-relaxed">
              3-year undergraduate academic programs in Science, Commerce, and Humanities offering diverse career paths across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="flex gap-2 mb-10 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  active === tab
                    ? "accent-gradient text-accent-foreground shadow-lg"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            {/* Overview */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{d.title}</h2>
              <p className="text-muted-foreground max-w-2xl">{d.overview}</p>
            </div>

            {/* Branches */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4">Branches / Specializations</h3>
              <div className="flex flex-wrap gap-3">
                {d.branches.map((b) => (
                  <span key={b} className="px-4 py-2 rounded-lg bg-accent/10 text-accent text-sm font-medium border border-accent/20">{b}</span>
                ))}
              </div>
            </div>

            {/* Roadmap */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6">Year-Wise Roadmap</h3>
              <div className="space-y-4">
                {d.roadmap.map((yr, i) => (
                  <div key={yr.year} className="glass-card rounded-xl p-5 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 accent-gradient" />
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/10 text-accent">{yr.year}</span>
                      <span className="font-medium">{yr.focus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Careers */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4">Career Opportunities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {d.careers.map((c) => (
                  <div key={c} className="glass-card rounded-xl p-4 text-sm font-medium text-center">{c}</div>
                ))}
              </div>
            </div>

            {/* Salary */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">Salary Insights</h3>
              <div className="glass-card rounded-xl p-5 inline-flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="text-accent font-semibold">{d.salary}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Degree;
