
import React from 'react';
import { Service, Testimonial } from './types';

const LifeBuoyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
);

const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
);

const BanknotesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
  </svg>
);

const GlobeAltIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c.34 0 .672-.015 1-.042M12 21V3M4.28 9.75l.135.05A8.995 8.995 0 0 1 12 5.25c2.618 0 5.013.94 6.84 2.506l.135-.05A8.995 8.995 0 0 1 21.72 15m-17.44 0a8.995 8.995 0 0 1-.135-.05c1.828-1.566 4.222-2.506 6.84-2.506 1.083 0 2.11.164 3.073.463l.135.05m-3.208 2.25L12 15V3m4.28 6.75l-.135.05a8.995 8.995 0 0 1-6.84 2.506c-2.618 0-5.013-.94-6.84-2.506l-.135-.05" />
  </svg>
);

const ChartBarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);

const ArrowTrendingUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.28m5.94 2.28L19.5 3M3.75 12.75l.283-1.607a11.956 11.956 0 0 1 5.752-5.467 11.916 11.916 0 0 1 4.07 1.056l1.29.516" />
  </svg>
);

export const SERVICES: Service[] = [
  {
    icon: <LifeBuoyIcon className="w-10 h-10 text-primary" />,
    title: "Life Insurance",
    description: "Comprehensive plans including Term Life, Guaranteed Return, and Pension Plans to secure your family's future.",
    providers: [
      "HDFC Life",
      "Aditya Birla Sun Life Insurance",
      "Star Union Daichi (Bank of India & Union Bank)",
      "Bajaj Allianz Life Insurance",
      "Tata AIA Life Insurance",
    ],
  },
  {
    icon: <HeartIcon className="w-10 h-10 text-primary" />,
    title: "Mediclaim Insurance",
    description: "Individual, Floater, and Group Mediclaim policies for SMEs and large Corporates to cover health emergencies.",
    providers: ["Care Health", "Aditya Birla Health", "HDFC Ergo"],
  },
  {
    icon: <BanknotesIcon className="w-10 h-10 text-primary" />,
    title: "Loans",
    description: "Personal, Business, Home Loans, and Loan Against Property to meet your various financial needs.",
    providers: ["Aditya Birla Finance", "Piramal Finance", "AU Small Finance Bank Ltd"],
  },
  {
    icon: <ChartBarIcon className="w-10 h-10 text-primary" />,
    title: "Mutual Funds & SIPs",
    description: "Invest in a wide range of Mutual Funds through Lumpsum or Systematic Investment Plans (SIP) for wealth creation.",
    providers: ["All major fund houses via NJ Wealth platform"],
  },
  {
    icon: <ArrowTrendingUpIcon className="w-10 h-10 text-primary" />,
    title: "Stock Market Brokerage (DRA)",
    description: "Become a Direct Selling Agent and earn brokerage on every client transaction in the stock market.",
    providers: ["Partnered with leading brokerage firms"],
  },
  {
    icon: <GlobeAltIcon className="w-10 h-10 text-primary" />,
    title: "Overseas Travel Insurance",
    description: "Secure your international trips against unforeseen medical emergencies, travel delays, and other risks.",
    providers: ["Available through multiple top insurers"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "The process of getting a home loan was surprisingly smooth and transparent. I received expert guidance at every step, making a daunting task feel easy. I'm very grateful for the professional service.",
    name: "Priya Singh",
    title: "Marketing Manager",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    quote: "Finding the right life insurance policy for my family felt overwhelming, but my advisor simplified everything. He patiently explained all the options and helped me choose the perfect plan. Highly recommended!",
    name: "Amit Patel",
    title: "Business Owner",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
  },
  {
    quote: "As an SME owner, securing a group mediclaim policy was crucial for my team. The service was exceptional, and we got a comprehensive plan that fit our budget. A true professional who cares for his clients.",
    name: "Sunita Reddy",
    title: "SME Founder",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
  },
];