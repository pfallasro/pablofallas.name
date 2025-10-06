import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiDownload, 
  FiMapPin, 
  FiMail, 
  FiPhone,
  FiCalendar,
  FiAward,
  FiCode,
  FiServer
} from 'react-icons/fi';

const Resume: React.FC = () => {
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

  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Led migration of 50+ microservices to Kubernetes, reducing deployment time by 75%",
        "Designed and implemented CI/CD pipelines using GitLab CI, reducing release cycles from weeks to hours",
        "Architected multi-cloud infrastructure on AWS and Azure supporting 1M+ daily users",
        "Established monitoring and alerting systems using Prometheus, Grafana, and ELK stack",
        "Mentored junior engineers and established DevOps best practices across teams"
      ]
    },
    {
      title: "DevOps Engineer",
      company: "InnovateTech",
      period: "2020 - 2022",
      location: "Austin, TX",
      achievements: [
        "Automated infrastructure provisioning using Terraform and Ansible",
        "Implemented Docker containerization for legacy applications",
        "Reduced infrastructure costs by 40% through resource optimization",
        "Built secure CI/CD pipelines with integrated security scanning"
      ]
    },
    {
      title: "Cloud Engineer",
      company: "CloudFirst Inc.",
      period: "2018 - 2020",
      location: "Seattle, WA",
      achievements: [
        "Managed AWS infrastructure supporting e-commerce platform",
        "Implemented blue-green deployment strategies",
        "Automated backup and disaster recovery procedures",
        "Optimized database performance and scaling"
      ]
    }
  ];

  const skills = {
    "Cloud Platforms": ["AWS", "Azure", "GCP", "DigitalOcean"],
    "Containers & Orchestration": ["Docker", "Kubernetes", "Helm", "OpenShift"],
    "Infrastructure as Code": ["Terraform", "Ansible", "CloudFormation", "Pulumi"],
    "CI/CD Tools": ["GitLab CI", "GitHub Actions", "Jenkins", "Azure DevOps"],
    "Monitoring & Logging": ["Prometheus", "Grafana", "ELK Stack", "DataDog"],
    "Programming": ["Python", "Go", "Bash", "JavaScript", "YAML"]
  };

  const certifications = [
    { name: "AWS Solutions Architect Professional", year: "2023" },
    { name: "Certified Kubernetes Administrator (CKA)", year: "2022" },
    { name: "HashiCorp Terraform Associate", year: "2022" },
    { name: "Azure DevOps Engineer Expert", year: "2021" }
  ];

  return (
    <div className="min-h-screen bg-surface-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
            <h1 className="headline-large text-surface-900 mb-4">Resume</h1>
            <p className="body-large text-surface-600 max-w-3xl mx-auto mb-8">
              A comprehensive overview of my DevOps journey, technical expertise, and professional achievements
            </p>
            <motion.button
              className="btn-filled flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiDownload className="h-5 w-5" />
              <span>Download PDF</span>
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="material-card p-6 mb-8"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FiMail className="h-5 w-5 text-primary-600" />
                <span className="text-surface-700">pablo@devops.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FiPhone className="h-5 w-5 text-primary-600" />
                <span className="text-surface-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FiMapPin className="h-5 w-5 text-primary-600" />
                <span className="text-surface-700">San Francisco, CA</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FiCalendar className="h-5 w-5 text-primary-600" />
                <span className="text-surface-700">5+ Years Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <h2 className="headline-medium text-surface-900 mb-6 flex items-center">
              <FiServer className="h-6 w-6 mr-3 text-primary-600" />
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="material-card p-6 hover:shadow-material-3 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="title-large text-surface-900 mb-1">{exp.title}</h3>
                      <p className="body-large text-primary-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-surface-700 font-medium">{exp.period}</p>
                      <p className="text-surface-500 text-sm">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-surface-600 flex items-start">
                        <span className="text-primary-600 mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <h2 className="headline-medium text-surface-900 mb-6 flex items-center">
              <FiCode className="h-6 w-6 mr-3 text-primary-600" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  className="material-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="title-large text-surface-900 mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm hover:bg-primary-100 transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            variants={itemVariants}
          >
            <h2 className="headline-medium text-surface-900 mb-6 flex items-center">
              <FiAward className="h-6 w-6 mr-3 text-primary-600" />
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="material-card p-6 hover:shadow-material-3 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="title-large text-surface-900 mb-2">{cert.name}</h3>
                  <p className="text-surface-600">Certified {cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
