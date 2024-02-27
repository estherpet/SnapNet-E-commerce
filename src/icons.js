export const Icon = ({ path }) => {
  return (
      <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
      >
        <path strokeLinecap='round' strokeLinejoin='round' d={path} />
      </svg>
  );
};

export const CartIcon = () => {
  return <Icon path='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />;
};

export const ChevronDown = () => {
  return <Icon path='M19 9l-7 7-7-7' />;
};

export const ChevronUp = () => {
  return <Icon path='M5 15l7-7 7 7' />;
};

