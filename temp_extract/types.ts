
import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  providers: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}