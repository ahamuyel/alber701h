'use client';

import { useState } from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
}

export default function ProjectImage({ src, alt, className, fallback }: ProjectImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return fallback ? <>{fallback}</> : null;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}
