import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

const roadmap = [
  {
    year: "1st Year", title: "Foundation", color: "bg-accent/10 text-accent",
    skills: ["C Programming", "Python Basics", "Engineering Mathematics", "Computer Fundamentals", "Git & GitHub", "Logical Problem Solving"],
    outcome: "Students understand programming logic and computing basics.",
  },
  {
    year: "2nd Year", title: "Core Computer Science", color: "bg-primary/10 text-primary",
    skills: ["Data Structures", "OOP (Java/C++)", "DBMS", "Operating Systems", "Web Development", "Competitive Programming"],
    outcome: "Students can build applications and understand system behavior.",
  },
  {
    year: "3rd Year", title: "Industry Skills", color: "bg-success/10 text-success",
    skills: ["Advanced DSA", "System Design Basics", "Full Stack Development", "Cloud Basics", "Internship Preparation", "Major Projects"],
    outcome: "Students become job-ready developers.",
  },
  {
    year: "4th Year", title: "Professional Level", color: "bg-accent/10 text-accent",
    skills: ["Backend Architecture", "Microservices", "DevOps Basics", "Mock Interviews", "Final Year Project", "Placement Preparation"],
    outcome: "Placement-ready software engineer.",
  },
];

const tools = ["C / C++", "Java", "Python", "HTML / CSS / JS", "React", "Node.js", "MySQL", "Git", "AWS"];
const careers = [
  { title: "Software Engineer", salary: "₹6–25 LPA" },
  { title: "Web Developer", salary: "₹4–15 LPA" },
  { title: "Backend Developer", salary: "₹5–20 LPA" },
  { title: "Full Stack Developer", salary: "₹6–22 LPA" },
  { title: "Data Engineer", salary: "₹6–20 LPA" },
  { title: "System Engineer", salary: "₹3–10 LPA" },
];
const recruiters = ["TCS", "Infosys", "Wipro", "Accenture", "Amazon", "Microsoft", "Google"];
const projects = ["Portfolio Website", "Full Stack App", "REST API", "Cloud Deployment Project", "System Design Project"];

const BranchPage = ({ title, overview, roadmapData, toolsList, careersList, recruitersList, projectsList, breadcrumb }: {
  title: string; overview: string; roadmapData: typeof roadmap; toolsList: string[];
  careersList: typeof careers; recruitersList: string[]; projectsList: string[]; breadcrumb: string;
}) => (
  <Layout>
    <section className="hero-gradient section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4">
            <Link to="/courses" className="hover:underline">Courses</Link>
            <span>/</span>
            <Link to="/courses/btech" className="hover:underline">B.Tech</Link>
            <span>/</span>
            <span>{breadcrumb}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{title}</h1>
          <p className="text-primary-foreground/70 max-w-2xl leading-relaxed">{overview}</p>
        </motion.div>
      </div>
    </section>

    {/* Year-wise Roadmap */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Year-Wise Roadmap</h2>
        <div className="space-y-6">
          {roadmapData.map((yr, i) => (
            <motion.div
              key={yr.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 md:p-8 relative overflow-hidden"
            >
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
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Tools & Technologies</h2>
        <div className="flex flex-wrap gap-3">
          {toolsList.map((t) => (
            <span key={t} className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium">{t}</span>
          ))}
        </div>
      </div>
    </section>

    {/* Careers & Salary */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Career Opportunities & Salary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {careersList.map((c) => (
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
          {recruitersList.map((r) => (
            <span key={r} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">{r}</span>
          ))}
        </div>
      </div>
    </section>

    {/* Projects */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Projects You Should Build</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsList.map((p, i) => (
            <div key={p} className="glass-card rounded-xl p-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg accent-gradient flex items-center justify-center text-accent-foreground font-bold text-sm">{i + 1}</span>
              <span className="font-medium text-sm">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

const CSE = () => (
  <BranchPage
    title="Computer Science & Engineering"
    breadcrumb="CSE"
    overview="CSE focuses on software development, algorithms, computer systems, and modern digital technologies. It is one of the most in-demand engineering branches due to rapid growth in IT and digital industries."
    roadmapData={roadmap}
    toolsList={tools}
    careersList={careers}
    recruitersList={recruiters}
    projectsList={projects}
  />
);

export default CSE;
