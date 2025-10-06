import React, { ReactNode, CSSProperties } from 'react';

// Type definitions for component props
interface TerminalWindowProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
}

interface LoadingSpinnerProps {
  size?: string;
}

interface CodeBlockProps {
  children: ReactNode;
  language?: string;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({ 
  children, 
  title = "terminal", 
  className = "" 
}) => {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dot red"></div>
        <div className="terminal-dot yellow"></div>
        <div className="terminal-dot green"></div>
        <span className="ml-4 text-gray-400 text-sm font-mono">{title}</span>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`glass-strong rounded-xl p-6 hover-lift hover-glow ${className}`}>
      {children}
    </div>
  );
};

export const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 50, 
  className = "" 
}) => {
  const [displayText, setDisplayText] = React.useState<string>('');
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
      {currentIndex < text.length && <span className="typing-animation">|</span>}
    </span>
  );
};

export const ParticleBackground: React.FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = "w-6 h-6" }) => {
  return <div className={`spinner ${size}`}></div>;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, language = "bash" }) => {
  return (
    <div className="code-block">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400 uppercase">{language}</span>
      </div>
      <pre className="text-terminal-green">
        <code>{children}</code>
      </pre>
    </div>
  );
};