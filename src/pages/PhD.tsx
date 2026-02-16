import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { GraduationCap, Microscope, FileCheck, Award, Building } from "lucide-react";

const PhD = () => {
    return (
        <Layout>
            <section className="hero-gradient section-padding">
                <div className="container mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Doctor of Philosophy (Ph.D)</h1>
                        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
                            The highest academic degree awarded by universities. Focuses on original research, data analysis, and advanced study.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-background">
                <div className="container mx-auto">

                    {/* Research Areas */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">Research Domains</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm text-center">
                                <Microscope className="w-10 h-10 text-accent mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Science & Technology</h3>
                                <p className="text-muted-foreground text-sm">Artificial Intelligence, Nanotechnology, Bio-Tech, Quantum Computing.</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm text-center">
                                <Building className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Engineering</h3>
                                <p className="text-muted-foreground text-sm">Robotics, Sustainable Energy, Structural Safety, VLSI Design.</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm text-center">
                                <FileCheck className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Humanities & Mgmt</h3>
                                <p className="text-muted-foreground text-sm">Economics, Psychology, Organizational Behavior, Public Policy.</p>
                            </div>
                        </div>
                    </div>

                    {/* Process Steps */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-10 text-center">The Ph.D Process</h2>
                        <div className="relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-[2.25rem] left-0 w-full h-1 bg-secondary -z-10"></div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                                {[
                                    { id: 1, title: "Entrance Exam", desc: "Qualify GATE / CSIR-NET / UGC-NET / JEST." },
                                    { id: 2, title: "Interview", desc: "Present research proposal to university panel." },
                                    { id: 3, title: "Coursework", desc: "6-12 months of mandatory subject learning." },
                                    { id: 4, title: "Thesis Defense", desc: "Publish papers & defend thesis to earn degree." }
                                ].map((step) => (
                                    <div key={step.id} className="relative bg-background p-4 rounded-lg md:bg-transparent">
                                        <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground text-xl font-bold flex items-center justify-center mx-auto mb-4 border-4 border-background">
                                            {step.id}
                                        </div>
                                        <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Fellowship */}
                    <div className="bg-muted/30 rounded-2xl p-8 border border-border flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Award className="w-7 h-7 text-yellow-500" /> Fellowship & Stipend
                            </h2>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                Full-time Ph.D scholars in government institutes (IITs, NITs, IISERs) are eligible for monthly stipends.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-background p-4 rounded-lg shadow-sm">
                                    <span className="block text-xs text-muted-foreground uppercase font-bold tracking-wider">JRF (First 2 Years)</span>
                                    <span className="text-2xl font-bold text-foreground">₹37,000</span>
                                    <span className="text-xs text-muted-foreground"> / month + HRA</span>
                                </div>
                                <div className="bg-background p-4 rounded-lg shadow-sm">
                                    <span className="block text-xs text-muted-foreground uppercase font-bold tracking-wider">SRF (Next 3 Years)</span>
                                    <span className="text-2xl font-bold text-foreground">₹42,000</span>
                                    <span className="text-xs text-muted-foreground"> / month + HRA</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 flex justify-center">
                            <GraduationCap className="w-40 h-40 text-muted-foreground/10" />
                        </div>
                    </div>

                </div>
            </section>
        </Layout>
    );
};

export default PhD;
