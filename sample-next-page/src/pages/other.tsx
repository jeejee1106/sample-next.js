import Link from 'next/link';

export default function Other({data}) {
  return(
    <main>
      <h1 className="header">{data.title}</h1>
      <p>{data.msg}</p>
      <div><Link href="/">Go Back!!!</Link></div>
    </main>
  );
}

export function getStaticProps({}) {
  const data = {
    title : 'Other Page',
    msg : '정적 속성 예제입니다람쥐.'
  };

  return {
    props: {
      data : data
    }
  };
}

