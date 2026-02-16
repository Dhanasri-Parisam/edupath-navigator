import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import {
    Building2, Shield, FileText, Mail, GraduationCap,
    ChevronDown, ChevronUp, Server, Cpu, Wrench, HardHat, Zap, Database, ArrowRight
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Jobs = () => {
    const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

    const toggleGroup = (group: string) => {
        if (expandedGroup === group) {
            setExpandedGroup(null);
        } else {
            setExpandedGroup(group);
        }
    };

    const jobCards = [
        {
            title: "Bank Jobs",
            icon: Building2,
            desc: "Government banking roles provide financial security careers in nationalized banks and regulatory bodies.",
            roles: ["SBI PO", "RBI Grade B", "IBPS PO", "Specialist Officer"],
            salary: "₹7–15 LPA",
            color: "text-blue-500",
            bgColor: "bg-blue-500/10"
        },
        {
            title: "Defence Jobs",
            icon: Shield,
            desc: "Serve in national security forces.",
            roles: ["Army Officer", "Navy Officer", "Air Force Officer", "DRDO Scientist", "ISRO Engineer"],
            salary: "₹6–18 LPA + benefits",
            color: "text-green-600",
            bgColor: "bg-green-600/10"
        },
        {
            title: "APPSC Groups",
            icon: FileText,
            desc: "Andhra Pradesh Public Service Commission roles ranging from administrative to clerical.",
            roles: ["Group 1", "Group 2", "Group 3", "Group 4"],
            salary: "Varies by Group",
            color: "text-orange-500",
            bgColor: "bg-orange-500/10"
        },
        {
            title: "Postal Jobs",
            icon: Mail,
            desc: "Roles in India Post system.",
            roles: ["Postal Assistant", "Sorting Assistant", "Postman", "Mail Guard"],
            salary: "₹25k–₹60k",
            color: "text-red-500",
            bgColor: "bg-red-500/10"
        },
        {
            title: "Teacher Jobs",
            icon: GraduationCap,
            desc: "Government education careers.",
            roles: ["Primary Teacher", "TGT", "PGT", "Lecturer", "Professor"],
            salary: "₹30k–₹1L+",
            color: "text-purple-500",
            bgColor: "bg-purple-500/10"
        }
    ];

    const technicalJobs = [
        {
            branch: "CSE / IT",
            icon: Server,
            roles: "NIC, DRDO, NITI Aayog (AI/Data)",
            skills: "AI, Cloud, Cybersecurity",
            exams: "GATE, ISRO, DRDO",
            companies: "NIC, CDAC"
        },
        {
            branch: "ECE",
            icon: Cpu,
            roles: "ISRO, BEL, DRDO",
            skills: "VLSI, Embedded, Communication",
            exams: "GATE, ISRO",
            companies: "BEL, BSNL"
        },
        {
            branch: "Mechanical",
            icon: Wrench,
            roles: "BHEL, NTPC, Railways, DRDO",
            skills: "Manufacturing, Thermal",
            exams: "GATE, ESE",
            companies: "BHEL, GAIL"
        },
        {
            branch: "Civil",
            icon: HardHat,
            roles: "CPWD, NHAI, Irrigation Dept",
            skills: "Structural, Geotech, Transport",
            exams: "GATE, ESE",
            companies: "NHAI, NBCC"
        },
        {
            branch: "Electrical",
            icon: Zap,
            roles: "PowerGrid, BHEL, DRDO",
            skills: "Power Systems, EV, Control",
            exams: "GATE, ESE",
            companies: "PGCIL, NTPC"
        },
        {
            branch: "Data Science / AI",
            icon: Database,
            roles: "NITI Aayog, NIC",
            skills: "ML, Stats, AI",
            exams: "GATE DA",
            companies: "NITI Aayog"
        }
    ];

    const appscGroups = [
        {
            id: "group1",
            title: "Group 1",
            subtitle: "Top administrative officers",
            posts: ["Deputy Collector", "DSP", "Commercial Tax Officer", "Municipal Commissioner"],
            salary: "₹56,100 – ₹1,77,500",
            exam: "Prelims, Mains, Interview"
        },
        {
            id: "group2",
            title: "Group 2",
            subtitle: "Gazetted officers",
            posts: ["Executive Officer", "Sub-Registrar", "ASO"],
            salary: "₹35k – ₹1.1L",
            exam: "Written Exam"
        },
        {
            id: "group3",
            title: "Group 3",
            subtitle: "Village administration",
            posts: ["Panchayat Secretary"],
            salary: "₹16k – ₹49k",
            exam: "Written Exam"
        },
        {
            id: "group4",
            title: "Group 4",
            subtitle: "Clerical jobs",
            posts: ["Junior Assistant", "Typist", "Computer Assistant"],
            salary: "₹16k – ₹49k",
            exam: "Written Exam"
        }
    ];

    return (
        <Layout>
            <section className="hero-gradient section-padding">
                <div className="container mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Government Jobs</h1>
                        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
                            Explore stable and prestigious career opportunities in the public sector.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-background">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobCards.map((job, index) => (
                            <motion.div
                                key={job.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className="bg-card rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-border/50 hover:border-blue-500/30 p-6 h-full flex flex-col group cursor-pointer">
                                    <div className={`w-12 h-12 rounded-lg ${job.bgColor} flex items-center justify-center mb-4 group-hover:bg-opacity-80 transition-colors`}>
                                        <job.icon className={`w-6 h-6 ${job.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-blue-600 transition-colors">{job.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{job.desc}</p>

                                    <div className="mb-4">
                                        <p className="text-xs font-semibold text-foreground mb-1">Roles:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {job.roles.slice(0, 3).map(role => (
                                                <span key={role} className="text-xs bg-secondary px-2 py-1 rounded text-secondary-foreground">{role}</span>
                                            ))}
                                            {job.roles.length > 3 && (
                                                <span className="text-xs bg-secondary px-2 py-1 rounded text-secondary-foreground">+{job.roles.length - 3} more</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4 border-t border-border/50 flex justify-between items-center">
                                        <span className="text-sm font-medium text-green-600">{job.salary}</span>
                                        <a href="#" className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1">
                                            View Notification <ArrowRight className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-muted/50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-bold mb-4">Engineering & Technical Government Jobs</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Specialized opportunities for engineering graduates in top government organizations.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technicalJobs.map((tech, index) => (
                            <motion.div
                                key={tech.branch}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-accent/10 rounded-lg">
                                        <tech.icon className="w-5 h-5 text-accent" />
                                    </div>
                                    <h3 className="font-bold text-lg">{tech.branch}</h3>
                                </div>

                                <div className="space-y-3 text-sm">
                                    <div>
                                        <span className="font-semibold text-foreground block mb-1">Roles:</span>
                                        <p className="text-muted-foreground">{tech.roles}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-foreground block mb-1">Key Skills:</span>
                                        <p className="text-muted-foreground">{tech.skills}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <span className="font-semibold text-foreground block mb-1">Exams:</span>
                                            <p className="text-muted-foreground">{tech.exams}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-background">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-bold mb-4">APPSC Group Jobs (Andhra Pradesh)</h2>
                        <p className="text-muted-foreground">
                            State government positions offering stability and growth.
                        </p>
                    </motion.div>

                    {/* ... (APPSC Groups Accordion) - Reusing previous structure or adding full details here if needed. Since file is overwritten, I'll ensure full content is here as planned. */}
                    <div className="space-y-4">
                        {appscGroups.map((group, index) => (
                            <motion.div
                                key={group.id}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="border border-border rounded-xl overflow-hidden bg-card"
                            >
                                <button
                                    onClick={() => toggleGroup(group.id)}
                                    className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                        <span className="text-xl font-bold text-foreground">{group.title}</span>
                                        <span className="text-muted-foreground text-sm bg-secondary px-2 py-1 rounded-md">
                                            {group.subtitle}
                                        </span>
                                    </div>
                                    {expandedGroup === group.id ? (
                                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                    )}
                                </button>

                                {expandedGroup === group.id && (
                                    <div className="p-5 pt-0 border-t border-border/50 bg-muted/10">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                                            <div>
                                                <h4 className="font-medium text-sm text-foreground mb-2">Posts</h4>
                                                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                                    {group.posts.map(post => (
                                                        <li key={post}>{post}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-sm text-foreground mb-2">Salary Range</h4>
                                                <p className="text-sm font-semibold text-green-600">{group.salary}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-sm text-foreground mb-2">Selection Process</h4>
                                                <p className="text-sm text-muted-foreground mb-3">{group.exam}</p>
                                                <a href="https://psc.ap.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-accent hover:underline flex items-center gap-1">
                                                    Visit Website <ArrowRight className="w-3 h-3" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Jobs;
