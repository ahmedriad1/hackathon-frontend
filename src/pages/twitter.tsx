import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import Head from 'next/head';
import useGetResponse from '@/hooks/useGetResponse';
import SearchInput from '@/components/SearchInput';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function Twitter() {
  return (
    <>
      <Head>
        <title>Twitter | Customer Support GPT</title>
      </Head>
      <TwitterComponent className='w-full min-h-screen pt-36' />
    </>
  );
}

export const TwitterComponent = ({
  className,
  thumbnail,
}: {
  className?: string;
  thumbnail?: boolean;
}) => {
  const [search, setSearch] = useState<string>('');
  const { fetchResponse, loading, result } = useGetResponse('twitter');

  const handleSubmit = () => {
    fetchResponse(search);
  };

  return (
    <motion.div
      className={clsx(
        'relative bg-gradient-to-tr from-sky-300 to-sky-600 flex flex-col items-center',
        className,
      )}
      layoutId='twitter'
      layout
    >
      {!thumbnail && (
        <div className='absolute top-5 left-5'>
          <Link href='/'>
            <ArrowLeftIcon className='w-8 h-8 text-white' />
          </Link>
        </div>
      )}
      <motion.div
        animate={result ? { y: -50 } : { y: 0 }}
        transition={{ duration: 0.5, layout: { duration: 0.3 } }}
        layoutId='twitter-title-container'
        layout
        className='mb-10 flex flex-col items-center'
      >
        <motion.h1
          layoutId='twitter-title'
          layout
          className={clsx('font-black text-white', thumbnail ? 'text-xl' : 'text-4xl')}
        >
          Twitter
        </motion.h1>
        {thumbnail && (
          <motion.p
            className='text-white mt-3 mx-10 md:mx-20 text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Twitter is a social media platform that allows users to share and discover
            short messages with other users.
          </motion.p>
        )}
        {!thumbnail && (
          <motion.p
            className='text-white mt-2 max-w-lg text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Customer Support GPT uses the public{' '}
            <Link href='https://help.twitter.com/en' className='underline'>
              twitter FAQs
            </Link>{' '}
            to answer the queries. It will say that it will forward to a human reviewer
            when the answer isn&apos;t present in their FAQs
          </motion.p>
        )}
      </motion.div>

      <SearchInput
        value={search}
        setValue={setSearch}
        onSubmit={handleSubmit}
        loading={loading}
        thumbnail={thumbnail}
        result={result}
        placeholder='Ask me anything about Twitter'
        id='twitter-form'
      />

      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-6xl lg:px-8'>
        {result && (
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='text-xl font-bold text-white text-center'
          >
            {result}
          </motion.h1>
        )}
      </div>
    </motion.div>
  );
};
