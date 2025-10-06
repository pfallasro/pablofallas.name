import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCalendar, 
  FiClock, 
  FiArrowRight,
  FiBookOpen
} from 'react-icons/fi';

const Blog: React.FC = () => {
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

  const blogPosts = [
    {
      title: "Kubernetes Security Best Practices for Production",
      excerpt: "A comprehensive guide to securing your Kubernetes clusters with RBAC, network policies, and security contexts.",
      date: "2024-09-15",
      readTime: "8 min read",
      tags: ["Kubernetes", "Security", "DevOps"],
      featured: true
    },
    {
      title: "CI/CD Pipeline Optimization: From Hours to Minutes",
      excerpt: "Learn how to optimize your CI/CD pipelines for faster deployments and better developer experience.",
      date: "2024-08-28",
      readTime: "6 min read",
      tags: ["CI/CD", "Performance", "GitLab"]
    },
    {
      title: "Infrastructure as Code: Terraform vs Pulumi",
      excerpt: "A detailed comparison of popular IaC tools and when to use each one for your infrastructure needs.",
      date: "2024-08-10",
      readTime: "10 min read",
      tags: ["IaC", "Terraform", "Pulumi"]
    },
    {
      title: "Monitoring Microservices with Prometheus and Grafana",
      excerpt: "Set up comprehensive monitoring for your microservices architecture with industry-standard tools.",
      date: "2024-07-22",
      readTime: "12 min read",
      tags: ["Monitoring", "Prometheus", "Grafana"]
    },
    {
      title: "AWS Cost Optimization: Strategies That Actually Work",
      excerpt: "Practical techniques to reduce your AWS bill without compromising performance or reliability.",
      date: "2024-07-05",
      readTime: "7 min read",
      tags: ["AWS", "Cost Optimization", "FinOps"]
    },
    {
      title: "Docker Multi-Stage Builds: Smaller Images, Faster Deployments",
      excerpt: "Master Docker multi-stage builds to create optimized container images for production use.",
      date: "2024-06-18",
      readTime: "5 min read",
      tags: ["Docker", "Optimization", "Containers"]
    }
  ];

  const categories = [
    { name: "All Posts", count: blogPosts.length, active: true },
    { name: "Kubernetes", count: 3 },
    { name: "CI/CD", count: 2 },
    { name: "AWS", count: 4 },
    { name: "Security", count: 2 }
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
            <h1 className="headline-large text-surface-900 mb-4">Blog</h1>
            <p className="body-large text-surface-600 max-w-3xl mx-auto mb-8">
              Insights, tutorials, and thoughts on DevOps, cloud infrastructure, and modern software development practices
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  className={`px-4 py-2 rounded-material transition-all duration-200 ${
                    category.active 
                      ? 'bg-primary-500 text-white shadow-material-2' 
                      : 'bg-white text-surface-600 hover:text-primary-600 hover:bg-primary-50 shadow-material-1'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.div
              key={index}
              className="material-card p-8 mb-12 hover:shadow-material-4 transition-all duration-300 cursor-pointer group"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center mb-4">
                <span className="bg-accent-500 text-white px-3 py-1 rounded-material text-sm font-medium">
                  Featured Post
                </span>
              </div>
              
              <h2 className="headline-medium text-surface-900 mb-4 group-hover:text-primary-600 transition-colors">
                {post.title}
              </h2>
              
              <p className="body-large text-surface-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center space-x-6 mb-4 md:mb-0">
                  <div className="flex items-center text-surface-500">
                    <FiCalendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-surface-500">
                    <FiClock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-1 transition-transform">
                  <span className="mr-2">Read More</span>
                  <FiArrowRight className="h-4 w-4" />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-surface-100 text-surface-700 rounded-material text-sm hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Blog Posts Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            variants={itemVariants}
          >
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={index}
                className="material-card p-6 hover:shadow-material-3 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="title-large text-surface-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-surface-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-surface-500 text-sm">
                    <FiCalendar className="h-3 w-3 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-surface-500 text-sm">
                    <FiClock className="h-3 w-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-surface-100 text-surface-600 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-1 bg-surface-100 text-surface-600 rounded text-xs">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center text-primary-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  <FiBookOpen className="h-4 w-4 mr-2" />
                  <span>Read Article</span>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <div className="material-card p-8 max-w-2xl mx-auto">
              <h3 className="title-large text-surface-900 mb-4">Stay Updated</h3>
              <p className="text-surface-600 mb-6">
                Get the latest DevOps insights, tutorials, and industry trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 bg-surface-50 border border-surface-300 rounded-material focus:border-primary-500 focus:outline-none transition-colors"
                />
                <motion.button
                  className="btn-filled"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
