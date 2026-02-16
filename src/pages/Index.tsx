import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Monitor, Pill, Briefcase, Calculator, Palette, UtensilsCrossed, Cpu, BookOpen,
  TrendingUp, ArrowRight, CheckCircle2, GraduationCap, Target, DollarSign, Users
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const courses = [
  { name: "B.Tech", icon: Monitor, desc: "Engineering & Technology", path: "/courses/btech", duration: "4 Years" },
  { name: "Degree", icon: BookOpen, desc: "BSc / BCom / BA", path: "/courses/degree", duration: "3 Years" },
  { name: "B.Pharmacy", icon: Pill, desc: "Pharmaceutical Sciences", path: "/courses/bpharmacy", duration: "4 Years" },
  { name: "CA / CMA", icon: Calculator, desc: "Finance & Accounting", path: "/courses/ca-cma", duration: "3-5 Years" },
  { name: "BBA", icon: Briefcase, desc: "Business Administration", path: "/courses/bba", duration: "3 Years" },
  { name: "M.Tech", icon: Cpu, desc: "Post Graduate Engineering", path: "/courses/mtech", duration: "2 Years" },
  { name: "PG", icon: BookOpen, desc: "MBA / MCA / MSc", path: "/courses/pg", duration: "2 Years" },
  { name: "Ph.D", icon: GraduationCap, desc: "Doctorate / Research", path: "/courses/phd", duration: "3-5 Years" },
];

const careers = [
  { title: "Software Engineer", salary: "₹6-25 LPA", demand: "Very High" },
  { title: "AI Engineer", salary: "₹8-30 LPA", demand: "Very High" },
  { title: "Chartered Accountant", salary: "₹7-25 LPA", demand: "High" },
  { title: "Mechanical Engineer", salary: "₹4-15 LPA", demand: "Moderate" },
  { title: "Pharmacist", salary: "₹3-12 LPA", demand: "High" },
  { title: "Business Analyst", salary: "₹5-20 LPA", demand: "High" },
  { title: "UI/UX Designer", salary: "₹5-18 LPA", demand: "High" },
  { title: "Hotel Manager", salary: "₹4-15 LPA", demand: "Moderate" },
];

const whyReasons = [
  { icon: Target, title: "Clear Roadmaps", desc: "Year-wise skill progression from Year 1 to employment." },
  { icon: DollarSign, title: "Salary Insights", desc: "Real salary data for every career path and experience level." },
  { icon: Users, title: "Industry Connections", desc: "Know which companies hire from each specialization." },
  { icon: TrendingUp, title: "Demand Analysis", desc: "Understand which fields have the highest growth potential." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-90" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <GraduationCap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Career Guidance Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              Choose Your <span className="text-gradient">Career Path</span> After Intermediate
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl leading-relaxed">
              Explore structured roadmaps, college branches, required skills, career opportunities,
              salary insights, and job roles across all major higher-education streams in India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/courses">
                <Button variant="hero" size="lg" className="text-base">
                  Explore Courses <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="heroOutline" size="lg" className="text-base">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Course Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              After completing Intermediate (10+2), choose from multiple academic paths depending on your interests, skills, and career goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses.map((course, i) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link to={course.path}>
                  <div className="glass-card card-hover rounded-xl p-6 group cursor-pointer h-full">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <course.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-1">{course.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{course.desc}</p>
                    <span className="text-xs font-medium text-accent">{course.duration}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Career Paths */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Career Paths</h2>
            <p className="text-muted-foreground">Discover the most in-demand careers and their salary ranges.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {careers.map((career, i) => (
              <motion.div
                key={career.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card rounded-xl p-5 border border-border card-hover"
              >
                <h4 className="font-display font-semibold mb-2">{career.title}</h4>
                <p className="text-accent font-semibold text-sm mb-1">{career.salary}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${career.demand === "Very High"
                    ? "bg-success/10 text-success"
                    : "bg-accent/10 text-accent"
                  }`}>
                  {career.demand} Demand
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why EDUPATH */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why EDUPATH?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Students often select courses without understanding long-term career outcomes. EDUPATH bridges this gap.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyReasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl accent-gradient flex items-center justify-center mx-auto mb-4">
                  <r.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Flow */}
          <motion.div {...fadeUp} className="mt-16 flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
            {["Education", "Skills", "Career", "Salary", "Jobs"].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-lg bg-primary text-primary-foreground">{step}</span>
                {i < 4 && <ArrowRight className="w-4 h-4 text-accent" />}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient section-padding">
        <div className="container mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Find Your Path?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Start exploring courses and career roadmaps tailored to your interests.
            </p>
            <Link to="/courses">
              <Button variant="hero" size="lg" className="text-base">
                Get Started <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
