import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import Dots from './Dots';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  thumbnail?: boolean;
  loading?: boolean;
  value: string;
  setValue: (value: string) => void;
  onSubmit: () => void;
  result?: string;
  id: string;
}

export default function SearchInput({
  loading,
  thumbnail,
  value,
  setValue,
  onSubmit,
  result,
  id,
  ...props
}: SearchInputProps) {
  return (
    <motion.form
      onSubmit={e => {
        e.preventDefault();
        onSubmit?.();
      }}
      className={clsx(
        'relative w-full rounded-md overflow-hidden',
        thumbnail ? 'max-w-xs h-10' : 'max-w-xl h-12',
      )}
      animate={result ? { y: -50 } : { y: 0 }}
      transition={{ duration: 0.5, layout: { duration: 0.3 } }}
      layoutId={id}
      layout='position'
    >
      <span>
        <MagnifyingGlassIcon
          className={clsx(
            'absolute left-3',
            loading ? 'text-black' : 'text-gray-400',
            thumbnail ? 'h-5 w-5 top-2.5' : 'h-5 w-5 top-3.5',
          )}
        />
      </span>
      <input
        type='text'
        className={clsx(
          'w-full h-full pl-10 border-0 shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed',
          thumbnail ? 'pointer-events-none text-sm' : '',
        )}
        disabled={loading}
        value={value}
        onChange={e => setValue(e.target.value)}
        {...props}
      />
      {loading && (
        <Dots className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-3/4 opacity-60' />
      )}
    </motion.form>
  );
}
