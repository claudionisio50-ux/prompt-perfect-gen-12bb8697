import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Differentials } from "@/components/Differentials";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Differentials />
      <CTA />
    </Layout>
  );
};

export default Index;
