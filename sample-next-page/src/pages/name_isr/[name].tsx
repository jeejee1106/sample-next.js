import Link from 'next/link';
import { useRouter } from 'next/router';
 
export default function Name({ data }) {
  const router = useRouter();
  return (
    <main>
      <h1 className="header">{data.title}</h1>
      <p>name: {router.query.name}</p>
      <p>message: {data.msg}</p>
      <div><Link href="/">Go Back!!</Link></div>
    </main>
  );
}

const data = {
  kim:{
    title:'Kim-web',
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

export function getStaticPaths() {
  const path = [
    '/name_isr/kim',
    '/name_isr/lee',
    '/name_isr/park'
  ];
  return {
    paths:path,
    fallback: false
  };
}

export function getStaticProps({ params }) {
  console.log("getStaticProps");
  return {
    props: {
      data:data[params.name]
    },
    revalidate: 15
  };
}

setInterval(() => {
  const d = new Date().toISOString();
  data = {
    kim:{
      title:'김철수',
      msg:'김철수입니다.（' + d + '）'
    },
    lee:{
      title:'이영희~',
      msg:'이영희예요~~. （' + d + '）'
    },
    park:{
      title:'박지영',
      msg:'박지영입니다~❤ （' + d + '）'
    }
  }
  console.log("setInterval");
}, 5000);
