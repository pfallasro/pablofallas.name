import { motion } from 'framer-motion';
import { FiTarget, FiTrendingUp, FiAward } from 'react-icons/fi';

const Summary = () => {
  const highlights = [
    {
      icon: FiTarget,
      title: '8+ Years Experience',
      description: 'Building and scaling cloud infrastructure across AWS, Azure, and GCP'
    },
    {
      icon: FiTrendingUp,
      title: 'Performance Optimization',
      description: 'Reduced deployment times by 70% and infrastructure costs by 40%'
    },
    {
      icon: FiAward,
      title: 'Industry Leader',
      description: 'Certified in AWS, Kubernetes, and Terraform with proven track record'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
            Professional <span className="text-cyan-400">Summary</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-12" />

          <p className="text-xl text-slate-300 leading-relaxed mb-16 text-center max-w-4xl mx-auto">
            Passionate DevOps engineer with a proven track record of designing and implementing
            scalable, secure, and highly available cloud infrastructure. Specialized in automating
            complex deployment processes, implementing CI/CD pipelines, and fostering DevOps culture
            across engineering teams.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Summary;
