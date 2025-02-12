import Link from 'next/link';
import { useRouter } from 'next/router';
 
export default function Name({data}) {
  const router = useRouter();
  return (
    <main>
      <h1>{data.title}</h1>
      <p>Your name: <b>{router.query.name}</b>.</p>
      <p>message : {data.msg}</p>
      <div><Link href="/">Go Back!!</Link></div>
    </main>
  );
}

export function getStaticPaths() {
  const path = [
    '/name_static/kim',
    '/name_static/lee',
    '/name_static/park'
  ];
  return {
    paths:path,
    fallback: false
  };
}

export function getStaticProps({ params }) {
  const data = {
    kim:{
      title:'KIM-web',
      msg:"This is Kim's web site."
    },
    lee:{
      title:'Lee의 방',
      msg:'여기는 Lee의 방입니다.'
    },
    park:{
      title:'Park의 페이지',
      msg:'안녕! Park의 페이지입니다!'
    }
  };

  return {
    props: {
      data:data[params.name]
    }
  };
}
