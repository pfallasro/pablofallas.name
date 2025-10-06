import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Chip,
  Paper,
  CssBaseline,
  Fade,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Code,
  Cloud,
  Security,
  Speed,
  AutoGraph,
  AccountTree,
  KeyboardArrowDown,
} from '@mui/icons-material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    secondary: {
      main: '#06b6d4',
      light: '#22d3ee',
      dark: '#0891b2',
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 28,
          padding: '10px 28px',
          fontSize: '1rem',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 40px rgba(16, 185, 129, 0.2)',
          },
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        {/* AppBar */}
        <AppBar position="fixed" elevation={0} sx={{ backdropFilter: 'blur(20px)', bgcolor: 'rgba(15, 23, 42, 0.8)' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, background: 'linear-gradient(90deg, #10b981 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Pablo Fallas
            </Typography>
            <Button color="inherit" href="#about">About</Button>
            <Button color="inherit" href="#expertise">Expertise</Button>
            <Button color="inherit" href="#experience">Experience</Button>
            <Button color="inherit" href="#contact">Contact</Button>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Box
          id="hero"
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background Elements */}
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              left: '-10%',
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '10%',
              right: '-10%',
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />

          <Container maxWidth="md" sx={{ textAlign: 'center', zIndex: 1, pt: 8 }}>
            <Fade in timeout={1000}>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3rem', md: '5rem' },
                    mb: 2,
                    background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Pablo Fallas Rodríguez
                </Typography>
                <Typography variant="h4" color="text.primary" sx={{ mb: 2, fontWeight: 300 }}>
                  Infrastructure Engineering Manager
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
                  DevOps / Site Reliability Engineer
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
                  Berlin, Germany
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 5 }}>
                  <Button
                    variant="contained"
                    size="large"
                    href="#contact"
                    sx={{
                      background: 'linear-gradient(90deg, #10b981 0%, #06b6d4 100%)',
                      boxShadow: '0 8px 32px rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    Get in Touch
                  </Button>
                  <Button variant="outlined" size="large" href="#expertise" color="primary">
                    View Expertise
                  </Button>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                  <IconButton href="https://github.com/pfallasro" target="_blank" color="primary">
                    <GitHub />
                  </IconButton>
                  <IconButton href="https://linkedin.com/in/pfallasro" target="_blank" color="primary">
                    <LinkedIn />
                  </IconButton>
                  <IconButton href="mailto:pfallasro@gmail.com" color="primary">
                    <Email />
                  </IconButton>
                </Box>
              </Box>
            </Fade>

            <Box sx={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}>
              <IconButton sx={{ animation: 'bounce 2s infinite' }}>
                <KeyboardArrowDown />
              </IconButton>
            </Box>
          </Container>
        </Box>

        {/* About Section */}
        <Container id="about" maxWidth="md" sx={{ py: 12 }}>
          <Typography variant="h2" sx={{ mb: 6, textAlign: 'center', background: 'linear-gradient(90deg, #10b981 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            About Me
          </Typography>
          <Paper elevation={3} sx={{ p: 5, borderRadius: 4 }}>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              I'm a passionate Software Engineer and DevOps practitioner with a strong track record of delivering scalable,
              reliable solutions across diverse software development projects. I thrive on learning new technologies and finding
              elegant, efficient ways to solve complex problems, always to make life easier for teams and users alike.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              I believe in a people-first approach, where collaboration and shared purpose drive better processes and smarter tools.
              Currently leading the Platform & Infrastructure team at Zenjob, I focus on operational excellence and improving the
              developer experience across the organization.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              My expertise spans cloud infrastructure, CI/CD automation, container orchestration, and observability. I design,
              build, and maintain infrastructure, tooling, and processes that enable engineering teams to deliver software reliably,
              securely, and efficiently.
            </Typography>
          </Paper>
        </Container>

        {/* Expertise Section */}
        <Box id="expertise" sx={{ py: 12, bgcolor: 'rgba(16, 185, 129, 0.03)' }}>
          <Container maxWidth="lg">
            <Typography variant="h2" sx={{ mb: 6, textAlign: 'center', background: 'linear-gradient(90deg, #10b981 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Expertise
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  title: 'Cloud & Infrastructure',
                  description: 'AWS (Developer Associate), Terraform, Kubernetes - Building scalable cloud infrastructure',
                  icon: <Cloud sx={{ fontSize: 48 }} />,
                },
                {
                  title: 'Automation & CI/CD',
                  description: 'GitLab CI/CD, Ansible / Ansible Tower, Docker, Bash - Streamlining deployment workflows',
                  icon: <AutoGraph sx={{ fontSize: 48 }} />,
                },
                {
                  title: 'Programming & Scripting',
                  description: 'Python, Golang - Building tools and automating complex processes',
                  icon: <Code sx={{ fontSize: 48 }} />,
                },
                {
                  title: 'Monitoring & Observability',
                  description: 'Grafana, Prometheus, Loki, Datadog, Alertmanager - Ensuring system health and performance',
                  icon: <Speed sx={{ fontSize: 48 }} />,
                },
                {
                  title: 'Container Orchestration',
                  description: 'Kubernetes, Docker - Managing containerized applications at scale',
                  icon: <AccountTree sx={{ fontSize: 48 }} />,
                },
                {
                  title: 'Systems Administration',
                  description: 'Linux Administration, Windows Administration - Managing diverse system environments',
                  icon: <Security sx={{ fontSize: 48 }} />,
                },
              ].map((skill, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card elevation={4} sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ color: 'primary.main', mb: 2 }}>
                        {skill.icon}
                      </Box>
                      <Typography variant="h5" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                        {skill.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {skill.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Experience Section */}
        <Container id="experience" maxWidth="lg" sx={{ py: 12 }}>
          <Typography variant="h2" sx={{ mb: 6, textAlign: 'center', background: 'linear-gradient(90deg, #10b981 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Professional Experience
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                company: 'Zenjob',
                role: 'Infrastructure Engineering Manager',
                period: 'Feb 2025 – Present',
                location: 'Germany',
                description: 'Leading the Platform & Infrastructure team, focused on operational excellence and improving the developer experience across the company. We design, build, and maintain infrastructure, tooling, and processes that enable engineering teams to deliver software reliably, securely, and efficiently.',
              },
              {
                company: 'Zenjob',
                role: 'Senior DevOps Engineer',
                period: 'Jul 2022 – Feb 2025',
                location: 'Germany',
                description: 'Designed, implemented, and maintained infrastructure, CI/CD pipelines, and developer tooling to support operational excellence and streamline the development lifecycle. Collaborated with engineers across the organization to improve reliability, scalability, and security.',
              },
              {
                company: 'TradeStation',
                role: 'Site Reliability Engineer',
                period: 'Oct 2021 – Jun 2022',
                location: 'Costa Rica',
                description: 'Managed and configured AWS environments to ensure scalability, efficiency, and security. Maintained Kubernetes clusters, implemented observability with Datadog and Grafana, and developed Infrastructure as Code with Terraform and Ansible.',
              },
              {
                company: 'SecureLink',
                role: 'DevOps Engineer',
                period: 'Sep 2019 – Sep 2021',
                location: 'Costa Rica',
                description: 'Maintained internal development and testing environments. Developed RPM packages for automation, used Ansible and Ansible Tower for configuration management, and managed GitLab pipelines and Docker images for CI/CD workflows.',
              },
              {
                company: 'Equifax',
                role: 'DevOps Engineer',
                period: 'Jul 2018 – Sep 2019',
                location: 'Costa Rica',
                description: 'Managed automated deployments and maintenance of internal applications including Bamboo, Bitbucket, Confluence, and Jira. Assisted teams in CI/CD configuration and best practices while contributing to company-wide security standards.',
              },
              {
                company: 'Equifax',
                role: 'Systems Engineer',
                period: 'May 2016 – Jun 2018',
                location: 'Costa Rica',
                description: 'Designed and implemented technical requirements to integrate external-facing applications with SecureAuth IdP using SAML, OAuth/OpenID Connect, and WS-FED. Maintained a mission-critical, multi-region authentication platform across five regions.',
              },
            ].map((job, index) => (
              <Grid item xs={12} key={index}>
                <Card elevation={3}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, flexWrap: 'wrap', gap: 2 }}>
                      <Box>
                        <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 600, mb: 1 }}>
                          {job.role}
                        </Typography>
                        <Typography variant="h6" color="text.primary" sx={{ mb: 0.5 }}>
                          {job.company}
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                        <Typography variant="body2" color="text.secondary">
                          {job.period}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {job.location}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {job.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Education & Certifications Section */}
        <Box sx={{ py: 12, bgcolor: 'rgba(16, 185, 129, 0.03)' }}>
          <Container maxWidth="lg">
            <Typography variant="h2" sx={{ mb: 6, textAlign: 'center', background: 'linear-gradient(90deg, #10b981 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Education & Certifications
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card elevation={3} sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 600, mb: 2 }}>
                      Education
                    </Typography>
                    <Typography variant="h6" color="text.primary" sx={{ mb: 1 }}>
                      Bachelor's in Software Development Engineering
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                      Cenfotec University
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Apr 2010 – Dec 2016 | Costa Rica
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card elevation={3} sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 600, mb: 2 }}>
                      Certifications
                    </Typography>
                    <Typography variant="h6" color="text.primary" sx={{ mb: 1 }}>
                      AWS Certified Developer – Associate
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Certification ID: P89BL4JKLBR11MSR
                    </Typography>
                    <Typography variant="h6" color="text.primary" sx={{ mb: 1, mt: 3 }}>
                      Languages
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Spanish (Native) • English (Proficient) • German (Beginner)
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Contact Section */}
        <Container id="contact" maxWidth="md" sx={{ py: 12, textAlign: 'center' }}>
          <Typography variant="h2" sx={{ mb: 3, background: 'linear-gradient(90deg, #10b981 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Let's Connect
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 5 }}>
            Interested in working together or just want to say hi? Feel free to reach out!
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              href="mailto:pfallasro@gmail.com"
              startIcon={<Email />}
              sx={{
                background: 'linear-gradient(90deg, #10b981 0%, #06b6d4 100%)',
                boxShadow: '0 8px 32px rgba(16, 185, 129, 0.3)',
              }}
            >
              Send an Email
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="https://linkedin.com/in/pfallasro"
              target="_blank"
              startIcon={<LinkedIn />}
              color="primary"
            >
              Connect on LinkedIn
            </Button>
          </Box>
        </Container>

        {/* Footer */}
        <Box sx={{ py: 4, borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} Pablo Fallas Rodríguez. All rights reserved.
          </Typography>
        </Box>
      </Box>

      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </ThemeProvider>
  );
};

export default App;
