import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiCalendar,
  FiClock,
  FiCheckCircle
} from 'react-icons/fi';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: FiMail,
      title: "Email",
      value: "pablo@devops.com",
      description: "Best for detailed inquiries and project discussions",
      action: "mailto:pablo@devops.com"
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9AM-6PM PST",
      action: "tel:+15551234567"
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "San Francisco, CA",
      description: "Open to remote opportunities worldwide",
      action: null
    },
    {
      icon: FiCalendar,
      title: "Schedule a Call",
      value: "30-min consultation",
      description: "Free consultation to discuss your DevOps needs",
      action: "#"
    }
  ];

  const socialLinks = [
    { icon: FiGithub, name: "GitHub", url: "https://github.com/pfallasro" },
    { icon: FiLinkedin, name: "LinkedIn", url: "https://linkedin.com/in/pablofallas" },
    { icon: FiTwitter, name: "Twitter", url: "https://twitter.com/pablo_devops" }
  ];

  return (
    <div className="min-h-screen bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h1 className="headline-large text-surface-900 mb-4">Contact</h1>
            <p className="body-large text-surface-600 max-w-3xl mx-auto mb-8">
              Let's discuss how we can optimize your infrastructure, streamline your deployments, 
              and accelerate your development workflow together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="material-card p-8"
              variants={itemVariants}
            >
              <h2 className="title-large text-surface-900 mb-6 flex items-center">
                <FiSend className="h-6 w-6 mr-3 text-primary-600" />
                Send a Message
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <FiCheckCircle className="h-16 w-16 text-accent-500 mx-auto mb-4" />
                  <h3 className="title-large text-surface-900 mb-2">Message Sent!</h3>
                  <p className="text-surface-600">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-surface-700 font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-surface-50 border border-surface-300 rounded-material text-surface-900 placeholder-surface-500 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-surface-700 font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-surface-50 border border-surface-300 rounded-material text-surface-900 placeholder-surface-500 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-surface-700 font-medium mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-surface-50 border border-surface-300 rounded-material text-surface-900 placeholder-surface-500 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-surface-700 font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-surface-50 border border-surface-300 rounded-material text-surface-900 placeholder-surface-500 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project, challenges, or how I can help..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="btn-filled w-full flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <FiSend className="h-5 w-5" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              <div>
                <h2 className="title-large text-surface-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <motion.div
                        key={index}
                        className="material-card p-6 hover:shadow-material-3 transition-all duration-300 cursor-pointer group"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => method.action && window.open(method.action, '_blank')}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary-50 rounded-material-lg group-hover:bg-primary-100 transition-colors">
                            <Icon className="h-6 w-6 text-primary-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="title-large text-surface-900 mb-1">{method.title}</h3>
                            <p className="text-primary-600 font-medium mb-2">{method.value}</p>
                            <p className="text-surface-600 text-sm">{method.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="title-large text-surface-900 mb-4">Connect with Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 material-card hover:shadow-material-2 transition-all duration-300 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="h-6 w-6 text-surface-600 group-hover:text-primary-600 transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="material-card p-6">
                <h3 className="title-large text-surface-900 mb-4 flex items-center">
                  <FiClock className="h-5 w-5 mr-2 text-primary-600" />
                  Availability
                </h3>
                <div className="space-y-2 text-surface-700">
                  <p>✅ Open to new opportunities</p>
                  <p>✅ Available for consulting</p>
                  <p>✅ Remote work preferred</p>
                  <p className="text-sm text-surface-500 mt-4">
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
