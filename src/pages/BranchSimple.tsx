import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const simpleBranches = [
  {
    slug: "ece", name: "Electronics & Communication", overview: "Focuses on electronic devices, communication systems, embedded technologies, and semiconductor systems.",
    careers: ["Embedded Engineer", "VLSI Engineer", "Communication Engineer", "Hardware Engineer"],
    salary: "₹3–8 LPA (entry) | ₹10–18 LPA (experienced)",
    years: ["Electronics Basics, Physics, Programming", "Analog, Digital, Signals, Microprocessors", "Embedded, VLSI, Communication, MATLAB", "IoT, PCB, Internship, Core Prep"],
  },
  {
    slug: "mechanical", name: "Mechanical Engineering", overview: "Deals with machines, energy systems, manufacturing, and industrial automation.",
    careers: ["Design Engineer", "Production Engineer", "Automotive Engineer", "Thermal Engineer"],
    salary: "₹3–7 LPA (entry) | ₹10–15 LPA (experienced)",
    years: ["Engineering Drawing, Physics, Math", "Thermodynamics, Mechanics, Materials", "Manufacturing, CAD/CAM, Machine Design", "Automotive, Robotics, Project, Placement"],
  },
  {
    slug: "civil", name: "Civil Engineering", overview: "Focuses on infrastructure development including buildings, roads, bridges, and environmental engineering.",
    careers: ["Site Engineer", "Structural Engineer", "Construction Manager", "Govt Engineer"],
    salary: "₹3–6 LPA (entry) | ₹8–12 LPA (experienced)",
    years: ["Surveying, Math, Engineering Mechanics", "Structures, Concrete, Soil Mechanics", "Transportation, Environmental, Design", "Project Management, Estimation, Placement"],
  },
];

const SimpleBranchPage = ({ branch }: { branch: typeof simpleBranches[0] }) => (
  <Layout>
    <section className="hero-gradient section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4">
            <Link to="/courses" className="hover:underline">Courses</Link><span>/</span>
            <Link to="/courses/btech" className="hover:underline">B.Tech</Link><span>/</span>
            <span>{branch.slug.toUpperCase()}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{branch.name}</h1>
          <p className="text-primary-foreground/70 max-w-2xl">{branch.overview}</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Year-Wise Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {branch.years.map((y, i) => (
            <div key={i} className="glass-card rounded-xl p-5 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 accent-gradient" />
              <span className="text-xs font-bold text-accent">Year {i + 1}</span>
              <p className="text-sm mt-1">{y}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Careers & Salary</h2>
        <p className="text-accent font-semibold mb-4">{branch.salary}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {branch.careers.map((c) => (
            <div key={c} className="bg-card rounded-lg p-4 border border-border text-sm font-medium text-center">{c}</div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export const ECE = () => <SimpleBranchPage branch={simpleBranches[0]} />;
export const Mechanical = () => <SimpleBranchPage branch={simpleBranches[1]} />;
export const Civil = () => <SimpleBranchPage branch={simpleBranches[2]} />;
