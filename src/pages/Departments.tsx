import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Building } from "lucide-react";

const Departments = () => {
    return (
        <Layout>
            <section className="hero-gradient section-padding min-h-[60vh] flex items-center justify-center">
                <div className="container mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                <Building className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Departments</h1>
                        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg mb-8">
                            Detailed information about various academic departments and faculties will be available here soon.
                        </p>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default Departments;
