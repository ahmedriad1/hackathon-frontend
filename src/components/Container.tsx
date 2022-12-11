import clsx from 'clsx';

type ContainerProps = React.HTMLAttributes<HTMLElement>;

export default function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      {...props}
      className={clsx('mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8', className)}
    />
  );
}
