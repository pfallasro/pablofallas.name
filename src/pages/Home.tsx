import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiDownload, 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiServer, 
  FiCloud, 
  FiCode,
  FiTool,
  FiZap,
  FiShield
} from 'react-icons/fi';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skills = [
    { icon: FiCloud, name: "Cloud Architecture", description: "AWS, Azure, GCP" },
    { icon: FiServer, name: "Infrastructure", description: "Kubernetes, Docker" },
    { icon: FiCode, name: "CI/CD Pipelines", description: "GitLab, GitHub Actions" },
    { icon: FiTool, name: "Automation", description: "Terraform, Ansible" },
    { icon: FiZap, name: "Performance", description: "Monitoring, Optimization" },
    { icon: FiShield, name: "Security", description: "DevSecOps, Compliance" }
  ];

  return (
    <div className="min-h-screen bg-surface-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="material-grid absolute inset-0 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Profile Section */}
            <motion.div 
              className="mb-12"
              variants={itemVariants}
            >
              <div className="relative inline-block mb-8">
                <motion.div
                  className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-material-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/pablo-profile.jpg" 
                    alt="Pablo Fallas" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              <motion.h1 
                className="headline-large text-surface-900 mb-4"
                variants={itemVariants}
              >
                Pablo Fallas
              </motion.h1>
              
              <motion.div 
                className="title-large text-primary-600 mb-6"
                variants={itemVariants}
              >
                Senior DevOps Engineer
              </motion.div>
              
              <motion.p 
                className="body-large text-surface-600 max-w-3xl mx-auto mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Architecting scalable cloud infrastructure, automating deployment pipelines, 
                and building robust systems that power modern applications. 
                Passionate about DevOps culture, security, and continuous improvement.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                variants={itemVariants}
              >
                <motion.button
                  className="btn-filled flex items-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const element = document.getElementById('resume');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  <FiDownload className="h-5 w-5" />
                  <span>View Resume</span>
                </motion.button>
                
                <motion.a
                  href="mailto:pablo@pablofallas.name"
                  className="btn-outlined flex items-center space-x-2 text-decoration-none"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiMail className="h-5 w-5" />
                  <span>Get In Touch</span>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex justify-center space-x-4"
                variants={itemVariants}
              >
                <motion.a
                  href="https://github.com/pfallasro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-surface-100 hover:bg-surface-200 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                >
                  <FiGithub className="h-6 w-6 text-surface-600" />
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/pablofallas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-surface-100 hover:bg-surface-200 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                >
                  <FiLinkedin className="h-6 w-6 text-surface-600" />
                </motion.a>
                
                <motion.a
                  href="mailto:pablo@pablofallas.name"
                  className="p-3 rounded-full bg-surface-100 hover:bg-surface-200 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                >
                  <FiMail className="h-6 w-6 text-surface-600" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-16 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h2 className="headline-medium text-surface-900 mb-4">Core Expertise</h2>
            <p className="body-large text-surface-600 max-w-2xl mx-auto">
              Specialized skills and technologies I use to deliver exceptional DevOps solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="material-card p-6 text-center group cursor-pointer"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary-50 rounded-material-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="title-large text-surface-900 mb-2">{skill.name}</h3>
                  <p className="body-large text-surface-600">{skill.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
          >
            <h2 className="headline-medium text-surface-900 mb-4">
              Ready to Optimize Your Infrastructure?
            </h2>
            <p className="body-large text-surface-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can streamline your deployments, improve reliability, 
              and accelerate your development workflow.
            </p>
            <motion.a
              href="mailto:pablo@pablofallas.name"
              className="btn-filled text-decoration-none"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Conversation
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
