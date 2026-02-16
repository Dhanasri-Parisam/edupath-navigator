import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { CheckCircle, BrainCircuit, Calculator, Briefcase, GraduationCap, TrendingUp, Target, Database, Wrench, HardHat, Zap, Radio, Globe } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Gate = () => {
    const branchPriorities = [
        {
            id: "cse",
            title: "Computer Science (CSE)",
            icon: Database,
            high: "Data Structures, Algorithms, Operating Systems, Theory of Computation, Compiler Design",
            medium: "DBMS, Computer Networks",
            strategy: "Master DS + Algo + OS → 40+ marks achievable. 'Holy Trinity' of CSE.",
            color: "text-blue-500"
        },
        {
            id: "mech",
            title: "Mechanical (ME)",
            icon: Wrench,
            high: "Manufacturing, Thermodynamics, Heat Transfer, Strength of Materials",
            medium: "Theory of Machines, Fluid Mechanics",
            strategy: "Manufacturing + Thermal + SOM = ~50% syllabus coverage.",
            color: "text-orange-500"
        },
        {
            id: "civil",
            title: "Civil (CE)",
            icon: HardHat,
            high: "Geotechnical, Environmental, Transportation",
            medium: "Hydrology, Fluid Mechanics, Irrigation",
            strategy: "Geotechnical Engineering consistent high marks (14-15).",
            color: "text-yellow-600"
        },
        {
            id: "ee",
            title: "Electrical (EE)",
            icon: Zap,
            high: "Electrical Machines, Power Systems, Power Electronics",
            medium: "Control Systems, Network Theory",
            strategy: "Machines + Power Systems = 20-25 marks. Master core areas.",
            color: "text-yellow-500"
        },
        {
            id: "ece",
            title: "Electronics (ECE)",
            icon: Radio,
            high: "Communication Systems, Electronic Devices, Signals & Systems",
            medium: "Network Theory, Analog Circuits",
            strategy: "Focus heavily on communication and electronics fundamentals.",
            color: "text-green-500"
        },
        {
            id: "da",
            title: "Data Science & AI (DA)",
            icon: BrainCircuit,
            high: "Machine Learning, AI, Probability & Statistics, Linear Algebra",
            medium: "Data Structures, Algorithms",
            strategy: "Math heavy paper. Probability alone up to 15 marks.",
            color: "text-purple-500"
        }
    ];

    const prepSteps = [
        { num: 1, title: "Understand Syllabus", desc: "Focus on high-weightage subjects first." },
        { num: 2, title: "Build Concepts", desc: "Use standard textbooks and lectures." },
        { num: 3, title: "Practice PYQs", desc: "Previous 30 years questions are critical." },
        { num: 4, title: "Take Mock Tests", desc: "Improve speed and accuracy." },
        { num: 5, title: "Revise Notes", desc: "Short formula sheets + concept maps." }
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="hero-gradient section-padding text-center text-primary-foreground">
                <div className="container mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">GATE</h1>
                        <h2 className="text-xl md:text-2xl font-light mb-6 opacity-90">Graduate Aptitude Test in Engineering</h2>
                        <p className="max-w-2xl mx-auto text-lg opacity-80 mb-8">
                            India’s premier exam for M.Tech/PhD admissions in IITs/IISc and recruitment in major PSUs (BHEL, NTPC, ONGC).
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2"><Briefcase className="w-4 h-4" /> PSU Jobs</span>
                            <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2"><GraduationCap className="w-4 h-4" /> M.Tech at IITs</span>
                            <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Research Career</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-background">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Overview & Eligibility */}
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Target className="w-8 h-8 text-accent" /> Overview & Eligibility
                            </h2>
                            <div className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-6">
                                <p className="text-muted-foreground leading-relaxed">
                                    GATE evaluates a candidate’s comprehensive understanding of various undergraduate subjects in engineering and science.
                                    It is conducted jointly by IISc and 7 IITs.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-secondary/20 p-4 rounded-lg">
                                        <h3 className="font-semibold mb-2 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Who can appear?</h3>
                                        <ul className="text-sm space-y-2 text-muted-foreground">
                                            <li>• Final year B.Tech / B.E / B.Arch students</li>
                                            <li>• Engineering Graduates</li>
                                            <li>• MSc / MCA final year students</li>
                                            <li>• 3rd Year students (Pre-final)</li>
                                            <li>• <strong>No Age Limit</strong></li>
                                        </ul>
                                    </div>
                                    <div className="bg-secondary/20 p-4 rounded-lg">
                                        <h3 className="font-semibold mb-2 flex items-center gap-2"><Globe className="w-4 h-4 text-blue-500" /> Why GATE?</h3>
                                        <ul className="text-sm space-y-2 text-muted-foreground">
                                            <li>• M.tech in IITs / NITs / IIITs</li>
                                            <li>• PSU Recruitment (IOCL, GAIL, etc.)</li>
                                            <li>• Fellowship in Research (JRF)</li>
                                            <li>• Study Abroad (Some universities accept GATE)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Exam Pattern */}
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Calculator className="w-8 h-8 text-accent" /> Exam Pattern
                            </h2>
                            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
                                    <div className="p-3 bg-muted/30 rounded-lg">
                                        <span className="block font-bold text-xl">Online</span>
                                        <span className="text-xs text-muted-foreground">Mode</span>
                                    </div>
                                    <div className="p-3 bg-muted/30 rounded-lg">
                                        <span className="block font-bold text-xl">3 Hrs</span>
                                        <span className="text-xs text-muted-foreground">Duration</span>
                                    </div>
                                    <div className="p-3 bg-muted/30 rounded-lg">
                                        <span className="block font-bold text-xl">100</span>
                                        <span className="text-xs text-muted-foreground">Total Marks</span>
                                    </div>
                                    <div className="p-3 bg-muted/30 rounded-lg">
                                        <span className="block font-bold text-xl">65</span>
                                        <span className="text-xs text-muted-foreground">Questions</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-semibold text-lg">Marks Distribution</h3>
                                    <div className="h-4 bg-secondary rounded-full overflow-hidden flex">
                                        <div className="bg-blue-500 w-[15%] h-full" title="General Aptitude (15)"></div>
                                        <div className="bg-purple-500 w-[13%] h-full" title="Engg Math (13)"></div>
                                        <div className="bg-green-500 w-[72%] h-full" title="Core Subject (72)"></div>
                                    </div>
                                    <div className="flex flex-wrap gap-4 text-sm justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                            <span>General Aptitude (15 Marks)</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                            <span>Engineering Math (13-15 Marks)</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            <span>Core Subjects (~70 Marks)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Branch Wise Priority */}
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <BrainCircuit className="w-8 h-8 text-accent" /> Branch-Wise Strategy
                            </h2>
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {branchPriorities.map((branch) => (
                                    <AccordionItem key={branch.id} value={branch.id} className="border border-border rounded-lg px-4 bg-card">
                                        <AccordionTrigger className="hover:no-underline">
                                            <div className="flex items-center gap-3">
                                                <branch.icon className={`w-5 h-5 ${branch.color}`} />
                                                <span className="font-semibold text-lg">{branch.title}</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-2 pb-4">
                                            <div className="space-y-3 pl-8 border-l-2 border-muted ml-2">
                                                <div>
                                                    <h4 className="font-semibold text-foreground">Highest Weightage:</h4>
                                                    <p className="text-muted-foreground text-sm">{branch.high}</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-foreground">Moderate/Scoring:</h4>
                                                    <p className="text-muted-foreground text-sm">{branch.medium}</p>
                                                </div>
                                                <div className="bg-accent/5 p-3 rounded-md mt-2">
                                                    <h4 className="font-bold text-accent text-sm">Strategy Hint:</h4>
                                                    <p className="text-foreground/80 text-sm italic">{branch.strategy}</p>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </motion.div>

                    </div>

                    {/* Sidebar - Quick Info & Prep */}
                    <div className="space-y-8 sticky top-24 h-fit">
                        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold mb-4">How to Qualify?</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2">
                                    <span>General Aptitude</span>
                                    <span className="font-bold text-green-600">12-15 Marks</span>
                                </div>
                                <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2">
                                    <span>Engg Math</span>
                                    <span className="font-bold text-green-600">10-12 Marks</span>
                                </div>
                                <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2">
                                    <span>Top 3 Core Subj</span>
                                    <span className="font-bold text-green-600">25-30 Marks</span>
                                </div>
                                <div className="pt-2 bg-secondary/30 p-3 rounded-lg text-center">
                                    <span className="block text-sm text-muted-foreground">Total Score Strategy</span>
                                    <span className="block text-2xl font-bold text-foreground">45 - 55+</span>
                                    <span className="text-xs text-accent font-medium">Safe Qualified Zone</span>
                                </div>
                                <div className="text-center pt-2">
                                    <p className="text-xs text-muted-foreground">For IITs/PSUs aim for <strong>70+ Marks</strong></p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold mb-4">Preparation Steps</h3>
                            <div className="space-y-4 relative">
                                <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-secondary"></div>
                                {prepSteps.map((step) => (
                                    <div key={step.num} className="flex gap-4 relative">
                                        <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold shrink-0 z-10">
                                            {step.num}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{step.title}</h4>
                                            <p className="text-xs text-muted-foreground">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold mb-2 text-blue-400">Math Scorer Tips</h3>
                            <p className="text-sm text-muted-foreground mb-3">Math & Aptitude is 30% of the exam. Don't ignore it!</p>
                            <ul className="text-sm space-y-1 list-disc list-inside text-foreground/80">
                                <li>Linear Algebra</li>
                                <li>Calculus</li>
                                <li>Probability</li>
                                <li>Differential Eqns</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </section>
        </Layout>
    );
};

export default Gate;
