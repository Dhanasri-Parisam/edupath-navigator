import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Monitor, Pill, Briefcase, Calculator, Palette, UtensilsCrossed, Cpu, BookOpen, Clock, GraduationCap, TrendingUp, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

const courses = [
  {
    name: "B.Tech", icon: Monitor, path: "/courses/btech",
    desc: "Bachelor of Technology — a 4-year professional engineering degree with multiple specializations in software, electronics, mechanical, and more.",
    duration: "4 Years", eligibility: "Intermediate (MPC)", salary: "₹3–12 LPA",
    branches: ["CSE", "AIML", "ECE", "Mechanical", "Civil", "CSD", "CAI"],
  },
  {
    name: "B.Pharmacy", icon: Pill, path: "/courses/bpharmacy",
    desc: "Focuses on drug development, pharmacology, clinical research, and pharmaceutical manufacturing.",
    duration: "4 Years", eligibility: "Intermediate (BiPC/MPC)", salary: "₹2.5–6 LPA",
    branches: ["Pharmacology", "Pharmaceutical Chemistry", "Clinical Research"],
  },
  {
    name: "BBA", icon: Briefcase, path: "/courses/bba",
    desc: "Develops managerial, financial, and entrepreneurial skills for business and corporate environments.",
    duration: "3 Years", eligibility: "Intermediate (Any)", salary: "₹3–7 LPA",
    branches: ["Marketing", "Finance", "HR", "Operations"],
  },
  {
    name: "CA / CMA", icon: Calculator, path: "/courses/ca-cma",
    desc: "Professional finance certifications focused on accounting, taxation, auditing, and corporate finance.",
    duration: "3-5 Years", eligibility: "Intermediate (Commerce)", salary: "₹7–25 LPA",
    branches: ["Chartered Accountancy", "Cost Management", "Auditing"],
  },
  {
    name: "Degree (BSc/BCom/BA)", icon: BookOpen, path: "/courses/degree",
    desc: "Traditional degrees in Science, Commerce, and Arts offering diverse career paths.",
    duration: "3 Years", eligibility: "Intermediate (Any)", salary: "₹2–8 LPA",
    branches: ["BSc", "BCom", "BA"],
  },
  {
    name: "M.Tech", icon: Cpu, path: "/courses/mtech",
    desc: "Advanced engineering post-graduation for specialization in technical fields.",
    duration: "2 Years", eligibility: "B.Tech / BE", salary: "₹4–15 LPA",
    branches: ["CSE", "VLSI", "Thermal", "Structural"],
  },
  {
    name: "PG (MBA/MCA/MSc)", icon: BookOpen, path: "/courses/pg",
    desc: "Post-graduate degrees for advanced careers in management, computer applications, and sciences.",
    duration: "2 Years", eligibility: "Degree (Any)", salary: "₹4–12 LPA",
    branches: ["MBA", "MCA", "MSc"],
  },
  {
    name: "Ph.D", icon: GraduationCap, path: "/courses/phd",
    desc: "Doctorate degree for research, academic, and high-level R&D positions.",
    duration: "3-5 Years", eligibility: "Master's Degree", salary: "₹6–20 LPA",
    branches: ["Engineering", "Sciences", "Humanities", "Management"],
  },
];

const Courses = () => (
  <Layout>
    <section className="hero-gradient section-padding">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">All Courses</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Explore every academic path available after Intermediate. Each course includes branches, skills, careers, and salary insights.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link to={course.path}>
                <div className="glass-card card-hover rounded-xl p-6 md:p-8 group">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <course.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-display text-xl font-bold">{course.name}</h3>
                        <div className="flex gap-2">
                          <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {course.duration}
                          </span>
                          <span className="text-xs px-2 py-1 rounded-full bg-success/10 text-success flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> {course.salary}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{course.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {course.branches.map((b) => (
                          <span key={b} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">{b}</span>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        <GraduationCap className="w-3 h-3 inline mr-1" />
                        Eligibility: {course.eligibility}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors shrink-0 self-center" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Courses;
