export default function Dots(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
      <circle className='spinner_nOfF' cx='4' cy='12' r='3' fill='currentColor' />
      <circle
        className='spinner_nOfF spinner_fVhf'
        cx='4'
        cy='12'
        r='3'
        fill='currentColor'
      />
      <circle
        className='spinner_nOfF spinner_piVe'
        cx='4'
        cy='12'
        r='3'
        fill='currentColor'
      />
      <circle
        className='spinner_nOfF spinner_MSNs'
        cx='4'
        cy='12'
        r='3'
        fill='currentColor'
      />
    </svg>
  );
}
