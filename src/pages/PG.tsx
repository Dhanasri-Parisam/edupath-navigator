import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Monitor, TestTube2, GraduationCap, Briefcase } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PG = () => {
    return (
        <Layout>
            <section className="hero-gradient section-padding">
                <div className="container mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Post Graduation (PG)</h1>
                        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
                            Explore diverse masters programs in Management, Computer Applications, and Sciences.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-background">
                <div className="container mx-auto">
                    <Tabs defaultValue="mba" className="w-full">
                        <div className="flex justify-center mb-10">
                            <TabsList className="grid w-full max-w-md grid-cols-3">
                                <TabsTrigger value="mba">MBA</TabsTrigger>
                                <TabsTrigger value="mca">MCA</TabsTrigger>
                                <TabsTrigger value="msc">M.Sc</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="mba" className="space-y-8">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-foreground">Master of Business Administration</h2>
                                    <p className="text-muted-foreground text-lg">
                                        A 2-year professional degree focused on business management, leadership, and strategy.
                                        Ideal for those looking to climb the corporate ladder or start a business.
                                    </p>
                                    <div className="bg-card p-6 rounded-xl border border-border">
                                        <h3 className="font-semibold text-xl mb-3 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-accent" /> Specializations</h3>
                                        <ul className="grid grid-cols-2 gap-2 text-sm text-foreground/80">
                                            <li>• Finance</li>
                                            <li>• Marketing</li>
                                            <li>• Human Resources (HR)</li>
                                            <li>• Operations</li>
                                            <li>• Business Analytics</li>
                                            <li>• International Business</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-secondary/20 p-6 rounded-xl border border-border/50">
                                        <h4 className="font-semibold mb-2">Eligibility & Exams</h4>
                                        <p className="text-sm text-muted-foreground mb-2">Graduation (Any Stream) with 50%.</p>
                                        <p className="text-sm font-medium text-accent">Exams: CAT, MAT, XAT, GMAT, CMAT</p>
                                    </div>
                                    <div className="bg-secondary/20 p-6 rounded-xl border border-border/50">
                                        <h4 className="font-semibold mb-2">Career & Salary</h4>
                                        <p className="text-sm text-muted-foreground mb-2">Investment Banker, Product Manager, Consultant</p>
                                        <p className="text-green-600 font-bold text-lg">₹6 LPA – ₹30 LPA+</p>
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="mca" className="space-y-8">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-foreground">Master of Computer Applications</h2>
                                    <p className="text-muted-foreground text-lg">
                                        A 2-year programme designed for aspirants who want to delve deeper into the world of computer application development.
                                        Equivalent to B.Tech regarding software roles.
                                    </p>
                                    <div className="bg-card p-6 rounded-xl border border-border">
                                        <h3 className="font-semibold text-xl mb-3 flex items-center gap-2"><Monitor className="w-5 h-5 text-accent" /> Key Focus Areas</h3>
                                        <ul className="grid grid-cols-2 gap-2 text-sm text-foreground/80">
                                            <li>• Full Stack Development</li>
                                            <li>• Cloud Computing</li>
                                            <li>• Database Management</li>
                                            <li>• Software Engineering</li>
                                            <li>• AI & Machine Learning</li>
                                            <li>• Mobile App Dev</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-secondary/20 p-6 rounded-xl border border-border/50">
                                        <h4 className="font-semibold mb-2">Eligibility & Exams</h4>
                                        <p className="text-sm text-muted-foreground mb-2">BCA / BSc (CS/IT) or Graduation with Maths.</p>
                                        <p className="text-sm font-medium text-accent">Exams: NIMCET, State CETs (ICET, TANCET)</p>
                                    </div>
                                    <div className="bg-secondary/20 p-6 rounded-xl border border-border/50">
                                        <h4 className="font-semibold mb-2">Career & Salary</h4>
                                        <p className="text-sm text-muted-foreground mb-2">Software Developer, System Analyst, DB Administrator</p>
                                        <p className="text-green-600 font-bold text-lg">₹4 LPA – ₹15 LPA+</p>
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="msc" className="space-y-8">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-foreground">Master of Science</h2>
                                    <p className="text-muted-foreground text-lg">
                                        A 2-year postgraduate academic degree for students wishing to pursue careers in science, research, and academia.
                                    </p>
                                    <div className="bg-card p-6 rounded-xl border border-border">
                                        <h3 className="font-semibold text-xl mb-3 flex items-center gap-2"><BookOpen className="w-5 h-5 text-accent" /> Popular Streams</h3>
                                        <ul className="grid grid-cols-2 gap-2 text-sm text-foreground/80">
                                            <li>• Physics</li>
                                            <li>• Chemistry</li>
                                            <li>• Mathematics</li>
                                            <li>• Microbiology</li>
                                            <li>• Biotechnology</li>
                                            <li>• Data Science</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-secondary/20 p-6 rounded-xl border border-border/50">
                                        <h4 className="font-semibold mb-2">Eligibility & Exams</h4>
                                        <p className="text-sm text-muted-foreground mb-2">B.Sc in relevant subject.</p>
                                        <p className="text-sm font-medium text-accent">Exams: IIT JAM, CUET-PG, NEST</p>
                                    </div>
                                    <div className="bg-secondary/20 p-6 rounded-xl border border-border/50">
                                        <h4 className="font-semibold mb-2">Career & Salary</h4>
                                        <p className="text-sm text-muted-foreground mb-2">Research Scientist, Lecturer, Lab Manager</p>
                                        <p className="text-green-600 font-bold text-lg">₹3 LPA – ₹8 LPA (Higher in Industry R&D)</p>
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </Layout>
    );
};

export default PG;
