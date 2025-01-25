import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: '2021 — Present',
      company: 'Tech Corp',
      role: 'Senior DevOps Engineer',
      description: 'Led migration of 50+ microservices to Kubernetes, reducing infrastructure costs by 40%. Implemented GitOps workflow using ArgoCD.',
    },
    {
      year: '2019 — 2021',
      company: 'Cloud Solutions Inc',
      role: 'DevOps Engineer',
      description: 'Designed and implemented CI/CD pipelines. Automated infrastructure provisioning with Terraform across AWS and Azure.',
    },
    {
      year: '2017 — 2019',
      company: 'StartUp Ventures',
      role: 'Systems Engineer',
      description: 'Built scalable infrastructure from ground up supporting 1M+ users. Implemented security best practices achieving SOC 2 compliance.',
    },
  ];

  return (
    <section id="experience" className="scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-zinc-500">Building the future, one deployment at a time</p>
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="grid md:grid-cols-[200px_1fr] gap-8">
                  <div className="space-y-2">
                    <p className="text-sm text-emerald-400 font-medium uppercase tracking-wider">
                      {exp.year}
                    </p>
                  </div>

                  <div className="space-y-4 border-l-2 border-zinc-800 pl-8 group-hover:border-emerald-500 transition-colors">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-zinc-100">{exp.role}</h3>
                      <p className="text-lg text-zinc-400 mt-1">{exp.company}</p>
                    </div>
                    <p className="text-zinc-500 leading-relaxed max-w-2xl">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
