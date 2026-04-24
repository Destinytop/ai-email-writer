"use client";

import { useState } from "react";
import { Mail, Send, Sparkles, CheckCircle, Zap, Shield, Clock, Star, ArrowRight, PenTool, MessageSquare, Briefcase } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen bg-dark-50">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="blob bg-primary-400 w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="blob bg-purple-400 w-96 h-96 rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2 animation-delay-2000"></div>
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">AI Email Writer</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-dark-600 hover:text-dark-900 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-dark-600 hover:text-dark-900 transition-colors font-medium">How It Works</a>
              <a href="#pricing" className="text-dark-600 hover:text-dark-900 transition-colors font-medium">Pricing</a>
              <a href="#generator" className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all transform hover:scale-105">
                Try Free
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 border border-primary-200">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm text-dark-700 font-medium">Trusted by 50,000+ Professionals</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-dark-950">
            Write Better Emails
            <span className="gradient-text block">with AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-dark-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Generate professional, engaging emails in seconds. Perfect for sales outreach, 
            customer support, and business communication. Save time and get better responses.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#generator" className="px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/30 transition-all transform hover:scale-105 flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              Write Email Free
            </a>
            <button className="px-8 py-4 glass text-dark-700 rounded-full font-semibold hover:bg-white transition-all flex items-center border border-dark-200">
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              See Examples
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6 hover-lift border border-dark-100">
              <div className="text-3xl font-bold gradient-text">100K+</div>
              <div className="text-dark-500 mt-1 text-sm">Emails Written</div>
            </div>
            <div className="glass rounded-2xl p-6 hover-lift border border-dark-100">
              <div className="text-3xl font-bold gradient-text">4.8/5</div>
              <div className="text-dark-500 mt-1 text-sm">User Rating</div>
            </div>
            <div className="glass rounded-2xl p-6 hover-lift border border-dark-100">
              <div className="text-3xl font-bold gradient-text">85%</div>
              <div className="text-dark-500 mt-1 text-sm">Time Saved</div>
            </div>
            <div className="glass rounded-2xl p-6 hover-lift border border-dark-100">
              <div className="text-3xl font-bold gradient-text">&lt;10s</div>
              <div className="text-dark-500 mt-1 text-sm">Per Email</div>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark-950">Try It Now</h2>
            <p className="text-dark-600 text-lg">Describe what you want to say, AI writes the perfect email</p>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 glow border border-dark-200">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Email Generator */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-dark-100">
                  <div className="flex items-center space-x-2 mb-4">
                    <PenTool className="w-5 h-5 text-primary-500" />
                    <span className="font-semibold text-dark-800">What do you want to write?</span>
                  </div>
                  
                  <div className="space-y-4">
                    <select className="w-full p-3 rounded-xl border border-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option>Email Type</option>
                      <option>Sales Outreach</option>
                      <option>Follow-up</option>
                      <option>Cold Email</option>
                      <option>Support Response</option>
                      <option>Meeting Request</option>
                    </select>
                    
                    <textarea 
                      placeholder="Describe what you want to communicate... (e.g., 'Follow up with the client about the proposal we sent last week')"
                      className="w-full h-32 p-4 rounded-xl border border-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    ></textarea>
                    
                    <select className="w-full p-3 rounded-xl border border-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option>Tone: Professional</option>
                      <option>Tone: Friendly</option>
                      <option>Tone: Formal</option>
                      <option>Tone: Casual</option>
                      <option>Tone: Persuasive</option>
                    </select>
                    
                    <button className="w-full py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate Email
                    </button>
                  </div>
                </div>
              </div>

              {/* Preview Side */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4 text-dark-900">What You Get</h3>
                  <ul className="space-y-3">
                    {[
                      "Professional email copy",
                      "Compelling subject line",
                      "Proper greeting & sign-off",
                      "Grammar & spell check",
                      "Tone adjustment",
                      "Multiple variations"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-dark-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-6 border border-primary-100">
                  <p className="text-sm text-dark-600 mb-4">
                    Enter your email to get started. No credit card required.
                  </p>
                  <div className="flex gap-3">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl border border-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all whitespace-nowrap">
                      Start Free
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-primary-600 font-semibold tracking-wider uppercase">Features</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-dark-950">Why Professionals Love AI Email Writer</h2>
            <p className="text-dark-600 text-lg max-w-2xl mx-auto">
              Everything you need to write better emails faster
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-7 h-7 text-primary-500" />,
                title: "Smart Compose",
                desc: "AI understands context and writes relevant, engaging content that gets responses."
              },
              {
                icon: <MessageSquare className="w-7 h-7 text-primary-500" />,
                title: "Tone Adjustment",
                desc: "Switch between professional, friendly, formal, or casual tones with one click."
              },
              {
                icon: <CheckCircle className="w-7 h-7 text-primary-500" />,
                title: "Grammar Perfect",
                desc: "Built-in grammar and spell checking ensures your emails are always polished."
              },
              {
                icon: <Zap className="w-7 h-7 text-primary-500" />,
                title: "Lightning Fast",
                desc: "Generate complete emails in under 10 seconds. No more writer's block."
              },
              {
                icon: <Briefcase className="w-7 h-7 text-primary-500" />,
                title: "Business Templates",
                desc: "Pre-built templates for sales, support, marketing, and networking emails."
              },
              {
                icon: <Shield className="w-7 h-7 text-primary-500" />,
                title: "Privacy First",
                desc: "Your data is encrypted and never stored. Full privacy and security."
              }
            ].map((feature, i) => (
              <div key={i} className="glass rounded-2xl p-8 hover-lift border border-dark-100">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-purple-100 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark-900">{feature.title}</h3>
                <p className="text-dark-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-primary-600 font-semibold tracking-wider uppercase">Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-dark-950">How It Works</h2>
            <p className="text-dark-600 text-lg">Three simple steps to perfect emails</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "1",
                title: "Describe Your Goal",
                desc: "Tell us what you want to communicate and select your email type."
              },
              {
                num: "2",
                title: "AI Generation",
                desc: "Our AI crafts a professional email with the perfect tone and structure."
              },
              {
                num: "3",
                title: "Send & Succeed",
                desc: "Copy, customize if needed, and send. Watch your response rates soar."
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="glass rounded-2xl p-8 text-center hover-lift border border-dark-100">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-dark-900">{step.title}</h3>
                  <p className="text-dark-600">{step.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-dark-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-primary-600 font-semibold tracking-wider uppercase">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-dark-950">Simple Pricing</h2>
            <p className="text-dark-600 text-lg">Start free, upgrade when you need more</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="glass rounded-2xl p-8 border border-dark-100 hover-lift">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2 text-dark-900">Free</h3>
                <div className="text-4xl font-bold text-dark-900">$0</div>
                <div className="text-dark-500 text-sm">10 emails/month</div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "10 emails per month",
                  "Basic templates",
                  "Grammar check",
                  "Email support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-dark-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border-2 border-dark-200 text-dark-700 rounded-xl font-semibold hover:bg-dark-50 transition-all">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="glass rounded-2xl p-8 border-2 border-primary-500 relative transform scale-105 glow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 bg-gradient-to-r from-primary-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2 text-dark-900">Pro</h3>
                <div className="text-4xl font-bold gradient-text">$8</div>
                <div className="text-dark-500 text-sm">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited emails",
                  "All templates",
                  "Tone adjustment",
                  "Priority support",
                  "API access"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-dark-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                Upgrade to Pro
              </button>
            </div>

            {/* Business Plan */}
            <div className="glass rounded-2xl p-8 border border-dark-100 hover-lift">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2 text-dark-900">Business</h3>
                <div className="text-4xl font-bold text-dark-900">$24</div>
                <div className="text-dark-500 text-sm">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Everything in Pro",
                  "Team collaboration",
                  "Custom templates",
                  "Analytics",
                  "Dedicated support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-dark-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border-2 border-dark-200 text-dark-700 rounded-xl font-semibold hover:bg-dark-50 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-12 glow border border-dark-200">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-950">Ready to Write Better Emails?</h2>
            <p className="text-xl text-dark-600 mb-8">Join 50,000+ professionals saving hours every week</p>
            <a href="#generator" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/30 transition-all transform hover:scale-105">
              <Send className="w-5 h-5 mr-2" />
              Start Writing Free
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-dark-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold gradient-text">AI Email Writer</span>
            </div>
            <div className="flex space-x-6 text-sm text-dark-500">
              <a href="#" className="hover:text-dark-700 transition-colors">Privacy</a>
              <a href="#" className="hover:text-dark-700 transition-colors">Terms</a>
              <a href="#" className="hover:text-dark-700 transition-colors">Contact</a>
            </div>
            <p className="text-dark-400 text-sm mt-4 md:mt-0">
              © 2026 AI Email Writer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
