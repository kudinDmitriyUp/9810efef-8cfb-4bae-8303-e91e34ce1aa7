"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroOverlayBottomSplit from '@/components/sections/hero/HeroOverlayBottomSplit';
import AboutShowcase from '@/components/sections/about/AboutShowcase';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import TeamCardNine from '@/components/sections/team/TeamCardNine';
import TestimonialCardNine from '@/components/sections/testimonial/TestimonialCardNine';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Sparkles, Users, Star, Handshake, HelpCircle, Phone, Linkedin, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="large"
      background="dotGrid"
      cardStyle="solid-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="minimal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="MarketHub"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868958102-qetyg017.jpg"
          logoAlt="MarketHub Logo"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlayBottomSplit
          title="Transform Your Brand Into Market Leaders"
          description="Strategic marketing solutions that drive growth, engagement, and measurable results. We craft campaigns that resonate with your audience and deliver real ROI."
          buttons={[
            {
              text: "Start Your Campaign",
              href: "contact"
            },
            {
              text: "View Our Work",
              href: "about"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868958910-5x05gcdq.jpg"
          imageAlt="Marketing team collaborating on strategy"
          showDimOverlay={true}
          containerClassName="relative overflow-hidden"
        />
      </div>

      <div id="about" data-section="about">
        <AboutShowcase
          title="About MarketHub"
          description="We are a full-service marketing agency dedicated to transforming brands through innovative strategy and creative excellence. With 15+ years of combined experience, our team delivers measurable results."
          tag="Our Story"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Learn More",
              href: "#services"
            }
          ]}
          leftItem={{
            title: "Strategy First Approach",
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868959645-pgt8h8z2.jpg",
            imageAlt: "Strategic planning session"
          }}
          rightItem={{
            title: "Data-Driven Results",
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868960343-xt4v3tzf.jpg",
            imageAlt: "Analytics and campaign performance"
          }}
          centerImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868959645-pgt8h8z2.jpg"
          centerImageAlt="Our team in action"
          useCappedBorderRadius={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSixteen
          title="Why Choose MarketHub"
          description="See how we outperform traditional marketing approaches"
          tag="Our Advantage"
          negativeCard={{
            title: "Traditional Marketing",
            items: [
              "Slow campaign turnaround",
              "Limited audience targeting",
              "Unpredictable ROI measurement",
              "One-size-fits-all approach",
              "Minimal real-time optimization"
            ]
          }}
          positiveCard={{
            title: "MarketHub Difference",
            items: [
              "Rapid campaign deployment",
              "Precision audience segmentation",
              "Clear ROI tracking and reporting",
              "Custom strategies for every client",
              "Continuous real-time performance optimization"
            ]
          }}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardNine
          members={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Founder & Chief Strategy Officer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868961044-3jw2rhv4.jpg",
              imageAlt: "Sarah Mitchell",
              socialLinks: [
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  ariaLabel: "LinkedIn profile"
                },
                {
                  icon: Twitter,
                  href: "https://twitter.com",
                  ariaLabel: "Twitter profile"
                }
              ]
            },
            {
              id: "2",
              name: "Marcus Chen",
              role: "Creative Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868961736-ii7c38y8.jpg",
              imageAlt: "Marcus Chen",
              socialLinks: [
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  ariaLabel: "LinkedIn profile"
                }
              ]
            },
            {
              id: "3",
              name: "Jennifer Rodriguez",
              role: "Head of Analytics",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868962445-xgm362a0.jpg",
              imageAlt: "Jennifer Rodriguez",
              socialLinks: [
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  ariaLabel: "LinkedIn profile"
                }
              ]
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Client Success Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868963175-fh9uxhr9.jpg",
              imageAlt: "David Thompson",
              socialLinks: [
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  ariaLabel: "LinkedIn profile"
                }
              ]
            }
          ]}
          title="Meet Our Team"
          description="Talented professionals passionate about driving marketing excellence and client success"
          tag="Our People"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardNine
          testimonials={[
            {
              id: "1",
              quote: "MarketHub completely transformed our brand presence. Their strategic approach increased our lead generation by 340% in just six months.",
              name: "Amanda Foster",
              role: "CEO at TechVenture",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868964282-qr48ztp6.jpg",
              imageAlt: "Amanda Foster"
            },
            {
              id: "2",
              quote: "The team's data-driven insights helped us understand our customers like never before. Every campaign they run delivers measurable results.",
              name: "Robert Jackson",
              role: "Marketing Director at GrowthCo",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868964946-5t1sgy99.jpg",
              imageAlt: "Robert Jackson"
            },
            {
              id: "3",
              quote: "Working with MarketHub feels like having an extension of our internal team. Their creativity combined with analytics is unbeatable.",
              name: "Elena Petrova",
              role: "Founder at InnovateLabs",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868965433-31siwryz.jpg",
              imageAlt: "Elena Petrova"
            },
            {
              id: "4",
              quote: "Best investment we made for our marketing. They understand our business goals and consistently exceed expectations.",
              name: "Michael Park",
              role: "CMO at FinanceFlow",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868966118-s43fbp1p.jpg",
              imageAlt: "Michael Park"
            },
            {
              id: "5",
              quote: "From strategy to execution, MarketHub handles everything with professionalism and brilliance. Our ROI speaks for itself.",
              name: "Lisa Anderson",
              role: "VP Marketing at RetailMax",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868966828-ncfo49nv.png",
              imageAlt: "Lisa Anderson"
            },
            {
              id: "6",
              quote: "They don't just run campaigns, they partner with you for long-term success. Highly recommended for any brand serious about growth.",
              name: "James Wilson",
              role: "Business Owner at StartupXYZ",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868967589-hj2hiddz.jpg",
              imageAlt: "James Wilson"
            }
          ]}
          variant="card"
          title="Trusted by Leading Brands"
          description="See what our clients have to say about their experience working with MarketHub"
          tag="Client Success"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofThree
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868968080-3uo63vyx.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868968721-jsjqchvy.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868969421-sqhclf35.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868970139-li88epqy.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868970866-5grwjml2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868971553-0tzrd503.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868972187-6rff2gbd.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868972693-dt4hiwyv.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868968080-3uo63vyx.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868968721-jsjqchvy.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868969421-sqhclf35.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868970139-li88epqy.jpg"
          ]}
          animationType="slide-up"
          title="Trusted by Industry Leaders"
          description="Join hundreds of successful brands leveraging MarketHub's expertise for transformational growth"
          tag="Our Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={40}
          topMarqueeDirection="left"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          faqs={[
            {
              id: "1",
              title: "What services does MarketHub offer?",
              content: "We provide comprehensive marketing solutions including brand strategy, digital advertising, content marketing, social media management, SEO optimization, analytics, and creative campaign development tailored to your business goals."
            },
            {
              id: "2",
              title: "How long does it take to see results?",
              content: "Initial results typically appear within 4-6 weeks, but significant growth usually manifests within 3-6 months depending on your industry and campaign scope. We provide weekly reports tracking key metrics and progress."
            },
            {
              id: "3",
              title: "What is your pricing model?",
              content: "We offer flexible pricing based on your needs: performance-based pricing, monthly retainers, or project-based fees. We'll customize a package that fits your budget and goals. Schedule a consultation for a personalized quote."
            },
            {
              id: "4",
              title: "Do you work with startups?",
              content: "Absolutely! We specialize in helping startups establish their market presence and grow. We understand startup challenges and offer scalable solutions that grow with your business."
            },
            {
              id: "5",
              title: "How do you measure campaign success?",
              content: "We track comprehensive metrics including ROI, conversion rates, engagement metrics, brand awareness growth, and customer acquisition costs. Custom dashboards provide real-time visibility into all campaign performance."
            },
            {
              id: "6",
              title: "Can you work across different industries?",
              content: "Yes, our team has experience across B2B, B2C, SaaS, e-commerce, healthcare, finance, and more. We quickly understand your industry dynamics and create strategies that resonate with your target audience."
            }
          ]}
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services and processes"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          faqs={[
            {
              id: "1",
              title: "What's the first step in working with MarketHub?",
              content: "We start with a discovery call where we learn about your business, goals, and challenges. This consultation is completely free and helps us understand if we're the right fit for your needs."
            },
            {
              id: "2",
              title: "How soon can we start our campaign?",
              content: "After signing our agreement, we typically begin campaign setup within 5 business days. Strategy and planning begin immediately to ensure quick launch."
            },
            {
              id: "3",
              title: "What if we need to make changes mid-campaign?",
              content: "We're agile and adaptive. You can request changes anytime, and we'll adjust strategies based on performance data and your feedback to optimize results."
            }
          ]}
          ctaTitle="Ready to Grow Your Brand?"
          ctaDescription="Schedule a free consultation with our strategy team to explore how MarketHub can drive your success."
          ctaButton={{
            text: "Book Free Consultation",
            href: "#contact-form"
          }}
          ctaIcon={Phone}
          useInvertedBackground="noInvert"
          animationType="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868973432-70dftors.jpg"
          imageAlt="Modern office workspace"
          columns={[
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "Our Team",
                  href: "#team"
                },
                {
                  label: "Careers",
                  href: "#careers"
                },
                {
                  label: "Blog",
                  href: "#blog"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Brand Strategy",
                  href: "#services"
                },
                {
                  label: "Digital Marketing",
                  href: "#services"
                },
                {
                  label: "Content Creation",
                  href: "#services"
                },
                {
                  label: "Analytics",
                  href: "#services"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "hello@markethub.com",
                  href: "mailto:hello@markethub.com"
                },
                {
                  label: "(555) 123-4567",
                  href: "tel:+15551234567"
                },
                {
                  label: "123 Market Street, NYC 10001",
                  href: "#contact"
                },
                {
                  label: "Schedule Call",
                  href: "#contact"
                }
              ]
            }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764868958102-qetyg017.jpg"
          logoText="MarketHub"
          logoWidth={120}
          logoHeight={40}
          copyrightText="© 2025 MarketHub. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}