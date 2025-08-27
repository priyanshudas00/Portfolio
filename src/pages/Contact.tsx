import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink, Calendar, Clock, Loader, CheckCircle, XCircle, MessageCircle, X } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    availability: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear any previous error/success status when user starts typing
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage('Please fill in all required fields');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please provide a valid email address format (e.g., yourname@example.com)');
      return false;
    }

    if (formData.message.length < 10) {
      setErrorMessage('Please provide a more detailed message (at least 10 characters)');
      return false;
    }

    return true;
  };

  const generateWhatsAppMessage = () => {
    const { name, email, subject, availability, message } = formData;
    const whatsappMessage = `
Hello Priyanshu!

I'm reaching out from your portfolio website:

*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject}
${availability ? `*Availability:* ${availability}\n` : ''}
*Message:*
${message}

Looking forward to connecting with you!
    `.trim();
    
    return encodeURIComponent(whatsappMessage);
  };

  const openWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/919229583900?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setShowWhatsAppModal(false);
  };

  const handleWhatsAppOption = (option: 'mail' | 'whatsapp' | 'both') => {
    if (option === 'whatsapp' || option === 'both') {
      openWhatsApp();
    }
    setShowWhatsAppModal(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Use Netlify function endpoint in production, localhost in dev
      let apiUrl = import.meta.env.VITE_API_URL;
      if (!apiUrl) {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
          apiUrl = 'http://localhost:3001/api/send-email';
        } else {
          apiUrl = 'https://' + window.location.host + '/.netlify/functions/send-email';
        }
      }
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if response is JSON and parse it
      let result;
      try {
        result = await response.json();
      } catch (error) {
        const text = await response.text();
        console.error('Non-JSON response received:', text);
        throw new Error('Server returned an invalid response format');
      }

      if (result.success) {
        setSubmitStatus('success');
        // Show WhatsApp modal
        setShowWhatsAppModal(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          availability: ''
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      
      const errorMessage = error instanceof Error ? error.message : String(error);
      
      if (errorMessage.includes('invalid response format')) {
        setErrorMessage('Server configuration error. Please try again later or contact me directly.');
      } else if (errorMessage.includes('Failed to fetch')) {
        setErrorMessage('Network error. Please check your connection and try again.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rajpriyanshu9078@gmail.com',
      link: 'mailto:rajpriyanshu9078@gmail.com',
      description: 'Best way to reach me for opportunities'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Darbhanga, Bihar, India',
      description: 'Open to remote, hybrid, or on-site work'
    },
    {
      icon: Calendar,
      label: 'Availability',
      value: 'Immediate',
      description: 'Available for 4-6 month internships'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: '24-48 hours',
      description: 'I typically respond within 1-2 business days'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/priyanshudas00',
      description: 'View my code and projects',
      color: 'bg-gray-900'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/priyanshudas00',
      description: 'Professional networking',
      color: 'bg-blue-600'
    },
    {
      name: 'Portfolio',
      url: '#',
      description: 'Complete project showcase',
      color: 'bg-indigo-600'
    }
  ];

  const quickTopics = [
    'Internship Opportunity',
    'Full-time Position',
    'Project Collaboration',
    'Technical Discussion',
    'Freelance Work',
    'Other'
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Let's <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            I'm always interested in discussing new opportunities, collaborating on interesting projects, or sharing insights about full-stack development and AI tools. Let's start a conversation!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="font-medium">Available for Internships</span>
            </div>
            <div className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 mr-2" />
              <span className="font-medium">Quick Response Time</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send me a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a topic</option>
                    {quickTopics.map((topic) => (
                      <option key={topic} value={topic}>{topic}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Availability
                  </label>
                  <input
                    type="text"
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="e.g., Next week, Flexible, Mornings, etc."
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Hi Priyanshu — I'd like to discuss [internship/job/project]. My availability is [days/times]."
                  />
                </div>
                
                {/* Status Messages */}
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <XCircle className="w-5 h-5 text-red-600 mr-2" />
                      <span className="text-red-800 font-medium">{errorMessage}</span>
                    </div>
                  </div>
                )}

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-green-800 font-medium">
                        Message sent successfully! I'll get back to you soon.
                      </span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                    isSubmitting
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{info.label}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-700 font-medium">{info.value}</p>
                      )}
                      <p className="text-sm text-slate-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Connect Online</h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                  >
                    <div className={`w-10 h-10 ${link.color} rounded-lg flex items-center justify-center mr-4`}>
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {link.name}
                      </h4>
                      <p className="text-sm text-slate-500">{link.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Current Status:</span>
                  <span className="font-semibold text-slate-900">Seeking Opportunities</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Preferred Role:</span>
                  <span className="font-semibold text-slate-900">Full-Stack Intern</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Expected CTC:</span>
                  <span className="font-semibold text-slate-900">7+ LPA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Notice Period:</span>
                  <span className="font-semibold text-green-600">Immediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">What type of roles are you seeking?</h3>
              <p className="text-slate-600">
                I'm looking for internships or entry-level positions in full-stack development, site reliability engineering, or product-focused engineering roles. I'm particularly interested in opportunities where I can contribute to building user-facing applications and learning from experienced engineers.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Are you available for remote work?</h3>
              <p className="text-slate-600">
                Yes, I'm open to remote, hybrid, or on-site work arrangements. I have experience collaborating remotely on hackathon projects and am comfortable with modern remote work tools and practices.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">What's your preferred tech stack?</h3>
              <p className="text-slate-600">
                My primary stack is Next.js, React, TypeScript, and Supabase for full-stack applications. I also have experience with Node.js, PostgreSQL, and DevOps tools like Prometheus and Grafana. I'm always eager to learn new technologies that fit project requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Can you work while studying?</h3>
              <p className="text-slate-600">
                Absolutely! I've successfully balanced multiple projects with my computer science coursework and maintained a 7.0 CGPA. I'm experienced in time management and can adapt to flexible schedules that accommodate both work and academic commitments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Choose Delivery Method</h3>
              <button
                onClick={() => setShowWhatsAppModal(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                title="Close modal"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <p className="text-slate-600 mb-6">
              Your message has been sent to email! Would you like to also send via WhatsApp?
            </p>

            <div className="space-y-4">
              <button
                onClick={() => handleWhatsAppOption('mail')}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Only (Already Sent)
              </button>

              <button
                onClick={() => handleWhatsAppOption('whatsapp')}
                className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Only
              </button>

              <button
                onClick={() => handleWhatsAppOption('both')}
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  <span className="mx-1">+</span>
                  <MessageCircle className="w-4 h-4 ml-1" />
                </div>
                <span className="ml-2">Both (Email + WhatsApp)</span>
              </button>
            </div>

            <p className="text-sm text-slate-500 mt-4 text-center">
              WhatsApp will open in a new tab with a pre-filled message
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
