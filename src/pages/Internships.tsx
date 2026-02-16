import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import {
    Building2, Briefcase, Globe, TestTube, Lightbulb,
    ArrowRight, CheckCircle2, Factory, Monitor, CircuitBoard
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Internships = () => {
    const internshipCategories = [
        {
            title: "Engineering Internships",
            icon: Monitor,
            desc: "Technical roles in software and core engineering domains.",
            color: "text-blue-500",
            bgColor: "bg-blue-500/10"
        },
        {
            title: "Management Internships",
            icon: Briefcase,
            desc: "Corporate strategy, marketing, finance roles.",
            color: "text-purple-500",
            bgColor: "bg-purple-500/10"
        },
        {
            title: "Government Internships",
            icon: Building2,
            desc: "Policy, research, administration internships in ministries.",
            color: "text-orange-500",
            bgColor: "bg-orange-500/10"
        },
        {
            title: "Core Industry Internships",
            icon: Factory,
            desc: "Mechanical, civil, electrical plant training.",
            color: "text-green-500",
            bgColor: "bg-green-500/10"
        },
        {
            title: "Research Internships",
            icon: TestTube,
            desc: "IIT, DRDO, ISRO research programs.",
            color: "text-red-500",
            bgColor: "bg-red-500/10"
        }
    ];

    const branchInternships = [
        {
            branch: "CSE",
            icon: Monitor, // Reusing Monitor for consistency or specific icon
            companies: "Google, Microsoft, TCS",
            govt: "NIC, DRDO",
            programs: "GSoC"
        },
        {
            branch: "ECE",
            icon: CircuitBoard,
            companies: "Intel, Qualcomm",
            govt: "ISRO, BEL",
            skills: "VLSI, Embedded"
        },
        {
            branch: "Mechanical",
            icon: Factory,
            companies: "Tata Motors, L&T",
            govt: "NTPC, DRDO",
            skills: "Manufacturing, CAD"
        },
        {
            branch: "Civil",
            icon: Building2,
            companies: "L&T, Afcons",
            govt: "NHAI, CPWD",
            skills: "Structural, Site"
        },
        {
            branch: "Electrical",
            icon: Lightbulb,
            companies: "Siemens, ABB",
            govt: "BHEL, PowerGrid",
            skills: "Power, Automation"
        },
        {
            branch: "Management",
            icon: Briefcase,
            companies: "HUL, Deloitte, Accenture",
            govt: "NITI Aayog, DPIIT, MEA",
            program: "PM Internship Scheme"
        }
    ];

    return (
        <Layout>
            <section className="hero-gradient section-padding">
                <div className="container mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Internships</h1>
                        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
                            Gain practical industry experience before graduation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="section-padding bg-background">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {internshipCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className="glass-card card-hover rounded-xl p-6 h-full flex flex-col group cursor-pointer border border-border/50">
                                    <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center mb-4 group-hover:bg-opacity-80 transition-colors`}>
                                        <category.icon className={`w-6 h-6 ${category.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{category.desc}</p>
                                    <div className="mt-auto">
                                        <a href="#" className="text-xs font-medium text-accent hover:underline flex items-center gap-1 justify-end">
                                            Find Internships <ArrowRight className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Branch-wise Opportunities */}
            <section className="section-padding bg-muted/50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-bold mb-4">Opportunities by Branch</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Find where you fit in the industry map.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {branchInternships.map((branch, index) => (
                            <motion.div
                                key={branch.branch}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-4 border-b border-border/50 pb-3">
                                    <div className="p-2 bg-secondary rounded-lg">
                                        <branch.icon className="w-5 h-5 text-foreground" />
                                    </div>
                                    <h3 className="font-bold text-lg">{branch.branch}</h3>
                                </div>

                                <div className="space-y-3 text-sm">
                                    <div>
                                        <span className="font-semibold text-foreground block mb-1">Top Companies:</span>
                                        <p className="text-muted-foreground">{branch.companies}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-foreground block mb-1">Govt Opportunities:</span>
                                        <p className="text-muted-foreground">{branch.govt}</p>
                                    </div>
                                    {(branch.skills || branch.programs || branch.program) && (
                                        <div>
                                            <span className="font-semibold text-foreground block mb-1">
                                                {branch.skills ? "Key Skills:" : "Programs:"}
                                            </span>
                                            <p className="text-muted-foreground">
                                                {branch.skills || branch.programs || branch.program}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Guide */}
            <section className="section-padding bg-background">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-secondary/30 rounded-2xl p-8 border border-border"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                        <span className="text-muted-foreground">Check <span className="text-foreground font-medium">AICTE Internship Portal</span> for government certified listings.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                        <span className="text-muted-foreground">Explore <span className="text-foreground font-medium">Internshala</span> and <span className="text-foreground font-medium">LinkedIn</span> for private sector roles.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                        <span className="text-muted-foreground">Visit official government ministry portals for specific openings.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                        <span className="text-muted-foreground">Apply 30–60 days early to increase your chances of selection.</span>
                                    </li>
                                </ul>
                                <Button className="mt-6" variant="default">
                                    Explore Opportunities
                                </Button>
                            </div>
                            <div className="md:w-1/3 flex justify-center">
                                <Globe className="w-32 h-32 text-muted-foreground/20" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default Internships;
