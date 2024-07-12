
const frequencies = [
    { id: '1', value: '1', label: 'Monthly', priceSuffix: '/month' },
    { id: '2', value: '2', label: 'Annually', priceSuffix: '/year' },
  ];
  
  const tiers = [
    {
      name: 'Free',
      id: '0',
      href: '/subscribe',
      price: { '1': 'Free', '2': 'Free' },
      discountPrice: { '1': '', '2': '' },
      description: `Get all goodies for free, no credit card required.`,
      features: [
        `Multi-platform compatibility`,
        `Real-time notification system`,
        `Advanced user permissions`,
      ],
      featured: false,
      highlighted: true,
      soldOut: false,
      cta: `Sign up`,
    },
    {
      name: 'Pro',
      id: '1',
      href: '/subscribe',
      price: { '1': '₹799', '2': '₹9,600' },
      discountPrice: { '1': '', '2': '7200' },
      description: `When you grow, need more power and flexibility.`,
      features: [
        `All in the free plan plus`,
        `Customizable templates`,
        `Integration with third-party apps`,
      ],
      featured: false,
      highlighted: true,
      soldOut: false,
      cta: `Get started`,
    },
    {
      name: 'Scaler',
      id: '2',
      href: '/contact-us',
      price: { '1': '₹1,800', '2': '₹21,900' },
      discountPrice: { '1': '', '2': '16,500' },
      description: `When you grow, need more power and flexibility.`,
      features: [
        `All in the pro plan plus`,
        `Priority support`,
        `Enterprise-grade security`,
      ],
      featured: true,
      highlighted: false,
      soldOut: false,
      cta: `Contact us`,
    },
  ];

  const CheckIcon = ({ className }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`w-6 h-6 ${className}`}
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

  export {
    frequencies,
    tiers,
    CheckIcon
  }