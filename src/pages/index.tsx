import Container from '@/components/Container';
import clsx from 'clsx';
import Head from 'next/head';
import Link from 'next/link';
import { PlayHtComponent } from './playht';
import { TwitterComponent } from './twitter';

const components = [
  {
    url: '/twitter',
    component: TwitterComponent,
  },
  {
    url: '/playht',
    component: PlayHtComponent,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Customer Support GPT</title>
      </Head>
      <div className='w-full min-h-screen'>
        <Container className='py-20'>
          <h1 className='text-5xl text-black font-bold'>Customer Support GPT</h1>
          <p className='mt-5'>
            Customer Support GPT parses company knowledge such as frequently asked
            questions and uses GPT-3 to answer customer support queries.{' '}
          </p>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full mt-16'>
            {components.map(({ url, component: Component }) => (
              <Link href={url} key={url}>
                <Component
                  className={clsx(
                    'w-full aspect-video rounded-xl overflow-hidden',
                    'pt-24',
                  )}
                  thumbnail
                />
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
