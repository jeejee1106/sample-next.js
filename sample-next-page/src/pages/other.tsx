import { Inter } from 'next/font/google';
import Link from 'next/link';
import { GetStaticProps } from 'next';

export const getStaticProps = ( (context) => {
    const data = {
      title:"Other page", 
      msg:"이것은 다른 페이지입니다."
    }
    return { props: { data } }
  });

const inter = Inter({ subsets: ['latin'] });

export default function Home({data}) {
  return (
    <main>
      <p>{data.msg}</p>
      <div><Link href="/">Go Back!!</Link></div>
    </main>
  );
}