"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Link from "next/link";
import { ArrowRight, Zap, Code2, Rocket, Shield, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built with performance in mind. Optimized for speed and efficiency.",
    },
    {
      icon: Code2,
      title: "Developer First",
      description: "Clean code, TypeScript support, and modern tooling out of the box.",
    },
    {
      icon: Rocket,
      title: "Production Ready",
      description: "Deploy with confidence. Battle-tested and production-grade.",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Security best practices built in. Your data stays safe.",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Built to scale globally. Serve users anywhere in the world.",
    },
    {
      icon: Sparkles,
      title: "Modern Stack",
      description: "Next.js 15, React 19, TypeScript, and Tailwind CSS v4.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Professional Next.js Starter Template</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-hero mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent"
            >
              Build amazing web apps in minutes
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-8 max-w-2xl"
            >
              A modern, production-ready Next.js template with TypeScript, Tailwind CSS, 
              and all the tools you need to build exceptional web applications.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="/get-started">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/TryTools/front-end" target="_blank">
                  View on GitHub
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 text-sm text-muted-foreground flex flex-wrap gap-6 justify-center"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Tailwind CSS v4</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span>Next.js 15</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span>React 19</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-display mb-4">
              Everything you need to build
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
              Start with a solid foundation. All the essentials are included so you can 
              focus on building your product.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={itemVariants} className="text-display mb-4">
              Ready to get started?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8">
              Clone this template and start building your next project today.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/get-started">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/TryTools/front-end" target="_blank">
                  View Documentation
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold">
                S
              </div>
              <span>Spawnlabs</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="https://github.com/TryTools/front-end" target="_blank" className="hover:text-foreground transition-colors">
                GitHub
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © 2025 Spawnlabs. Built with Next.js and Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  );
}
