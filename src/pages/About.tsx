import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Beaker, FlaskConical, Users, Target, DollarSign, BookOpen } from "lucide-react";

const About = () => (
  <Layout>
    <section className="hero-gradient section-padding">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About EDUPATH</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            A structured career guidance platform designed to help students choose the right academic path after Intermediate.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-8">
          <div className="glass-card rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2"><Target className="w-6 h-6 text-accent" /> Mission</h2>
            <p className="text-muted-foreground leading-relaxed">Enable informed career decisions for every student by providing clear roadmaps for each course and specialization, outlining skills, tools, career opportunities, and salary expectations.</p>
          </div>
          <div className="glass-card rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2"><BookOpen className="w-6 h-6 text-accent" /> Vision</h2>
            <p className="text-muted-foreground leading-relaxed">A future where every learner follows the right path aligned with their skills and goals.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
