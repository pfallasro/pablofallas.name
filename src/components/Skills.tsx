import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { category: 'Cloud', items: ['AWS', 'Azure', 'GCP', 'DigitalOcean'] },
    { category: 'Containers', items: ['Kubernetes', 'Docker', 'Helm', 'Docker Swarm'] },
    { category: 'CI/CD', items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD'] },
    { category: 'IaC', items: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi'] },
    { category: 'Monitoring', items: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'] },
    { category: 'Languages', items: ['Python', 'Go', 'Bash', 'JavaScript'] },
  ];

  return (
    <section id="skills" className="bg-black scroll-mt-20">
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
              Skills & <span className="gradient-text">Tools</span>
            </h2>
            <p className="text-xl text-zinc-500">Technologies I work with daily</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="card-hover bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors"
              >
                <h3 className="text-2xl font-bold text-emerald-400 mb-6">{skill.category}</h3>
                <div className="space-y-3">
                  {skill.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
