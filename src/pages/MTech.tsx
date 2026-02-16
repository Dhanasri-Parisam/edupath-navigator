import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Cpu, Server, Zap, Wrench, Building2, BookOpen, GraduationCap, DollarSign, Briefcase } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const MTech = () => {
    const specializations = [
        {
            id: "cse",
            title: "Computer Science & Engineering (CSE)",
            icon: Server,
            skills: "Machine Learning, Distributed Systems, Cloud Computing, Advanced Algorithms",
            subjects: "Advanced OS, Data Science, AI, Cyber Security",
            colleges: "IIT Bombay, IIT Delhi, IIIT Hyderabad, NIT Trichy",
            salary: "₹12–30 LPA",
            roles: "Data Scientist, AI Engineer, System Architect"
        },
        {
            id: "vlsi",
            title: "VLSI & Embedded Systems",
            icon: Cpu,
            skills: "Verilog/VHDL, Physical Design, FPGA, RTOS, ARM Architecture",
            subjects: "Analog IC Design, Digital System Design, CMOS, Embedded C",
            colleges: "IIT Madras, IIT Kharagpur, IISc Bangalore",
            salary: "₹10–25 LPA",
            roles: "VLSI Engineer, Embedded System Engineer, Hardware Architect"
        },
        {
            id: "thermal",
            title: "Thermal Engineering",
            icon: Wrench,
            skills: "CFD, Thermodynamics, Heat Transfer, Matlab",
            subjects: "Fluid Dynamics, IC Engines, Refrigeration, Renewable Energy",
            colleges: "IIT Kanpur, IIT Roorkee, NIT Warangal",
            salary: "₹8–18 LPA",
            roles: "Thermal Engineer, CFD Analyst, R&D Engineer"
        },
        {
            id: "structural",
            title: "Structural Engineering",
            icon: Building2,
            skills: "STAAD Pro, AutoCAD, Structural Analysis, Bridge Design",
            subjects: "Finite Element Analysis, Concrete Tech, Earthquake Engineering",
            colleges: "IIT Roorkee, IIT Bombay, NIT Surathkal",
            salary: "₹7–16 LPA",
            roles: "Structural Designer, Project Manager, Civil Consultant"
        },
        {
            id: "power",
            title: "Power Systems",
            icon: Zap,
            skills: "Grid Management, Power Electronics, SCADA, MATLAB/Simulink",
            subjects: "HVDC, FACTS, Power Quality, Smart Grids",
            colleges: "IIT Delhi, IIT Madras, NIT Calicut",
            salary: "₹8–20 LPA",
            roles: "Power System Engineer, Electrical Grid Manager"
        },
    ];

    return (
        <Layout>
            <section className="hero-gradient section-padding">
                <div className="container mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Master of Technology (M.Tech)</h1>
                        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
                            Advanced postgraduate engineering degree focusing on specialization, research, and high-level technical expertise.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-background">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Left Content - Overview */}
                        <div className="lg:col-span-2 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <BookOpen className="w-6 h-6 text-accent" /> Specializations
                                </h2>
                                <Accordion type="single" collapsible className="w-full">
                                    {specializations.map((spec) => (
                                        <AccordionItem key={spec.id} value={spec.id}>
                                            <AccordionTrigger className="hover:text-accent">
                                                <div className="flex items-center gap-3 text-left">
                                                    <div className="p-2 bg-accent/10 rounded-lg">
                                                        <spec.icon className="w-5 h-5 text-accent" />
                                                    </div>
                                                    <span>{spec.title}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="bg-muted/30 p-4 rounded-b-lg">
                                                <div className="space-y-3 text-sm">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div>
                                                            <span className="font-semibold block mb-1">Key Subjects:</span>
                                                            <p className="text-muted-foreground">{spec.subjects}</p>
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold block mb-1">Skills Gained:</span>
                                                            <p className="text-muted-foreground">{spec.skills}</p>
                                                        </div>
                                                    </div>
                                                    <div className="pt-3 border-t border-border/50 grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div>
                                                            <span className="font-semibold block mb-1">Top Colleges:</span>
                                                            <p className="text-muted-foreground">{spec.colleges}</p>
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold block mb-1">Avg Salary:</span>
                                                            <p className="text-green-600 font-medium">{spec.salary}</p>
                                                        </div>
                                                    </div>
                                                    <div className="pt-2">
                                                        <span className="font-semibold inline-block mr-2">Target Roles:</span>
                                                        <span className="text-muted-foreground">{spec.roles}</span>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-accent/5 p-6 rounded-xl border border-accent/20"
                            >
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <Briefcase className="w-6 h-6 text-accent" /> Career Opportunities
                                </h2>
                                <p className="text-muted-foreground mb-4">
                                    M.Tech opens doors to specialized R&D roles, teaching positions, and senior technical architect roles in top MNCs.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
                                        <h3 className="font-semibold text-lg mb-1">R & D</h3>
                                        <p className="text-sm text-muted-foreground">Research roles in ISRO, DRDO, Google Research, Microsoft, etc.</p>
                                    </div>
                                    <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
                                        <h3 className="font-semibold text-lg mb-1">Corporate</h3>
                                        <p className="text-sm text-muted-foreground">Subject Matter Experts, Senior Engineers, Technical Leads.</p>
                                    </div>
                                    <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
                                        <h3 className="font-semibold text-lg mb-1">Academics</h3>
                                        <p className="text-sm text-muted-foreground">Assistant Professor roles in Engineering Colleges and Universities.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Sidebar - Info */}
                        <div className="lg:col-span-1 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-card p-6 rounded-xl shadow-md border border-border"
                            >
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5 text-accent" /> Eligibility
                                </h3>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                        <span>B.Tech / B.E. in relevant discipline with minimum 60% marks.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                        <span>Qualified **GATE** (Graduate Aptitude Test in Engineering) score is mandatory for IITs/NITs.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                        <span>Some private universities conduct their own entrance exams (e.g., VITMEE, SRMJEEE-PG).</span>
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-card p-6 rounded-xl shadow-md border border-border"
                            >
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <DollarSign className="w-5 h-5 text-green-600" /> Scholarship
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    All GATE qualified students admitted to M.Tech in government supported institutions receive a monthly stipend.
                                </p>
                                <div className="p-3 bg-secondary rounded-lg text-center">
                                    <span className="block text-2xl font-bold text-foreground">₹12,400</span>
                                    <span className="text-xs text-muted-foreground">per month stipend (MHRD)</span>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default MTech;
