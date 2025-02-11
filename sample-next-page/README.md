This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Next.js
- 페이지 렌더링
페이지 렌더링은 라우팅 시스템에 따라 달라진다.
라우팅시스템에는 앱 라우터와 페이지 라우터로 나뉜다.
    - 페이지 라우터 : Next.js의 기본 라우터
        - 클라이언트 사이드 렌더링(CSR)
            - 클라이언트측에서 동적으로 업데이트 되는 것은 클라이언트 측으로 전송된 후 렌더링된다.
            - **‘use client’;** 를 추가하지 않으면 자동으로 서버에서 할 수 있는 것들은 서버에서 렌더딩 된다. 그러므로 꼭 클라이언트에서 렌더링해야한다면 컴포넌트 코드 시작 부분에 대당 코드를 명시해야한다.
            - 클라이언트 사이드 렌더링은 일반 리액트 페이지라고 생각해도 된다.
        - 서버 사이드 렌더링 (SSR)
            - 컴포넌트에서 실시간으로 화면을 업데이트 하는 등의 동적 변화가 없다면 서버 측에서 렌더링된다.
            - 정적(static) 렌더링 : 정적콘텐츠는 **빌드 시** 렌더링된다. (Static Site Generation, **SSG**)
                - **getStaticProps**
                    - 정적 페이지에서 필요한 값을 컴포넌트에 전달하기 위해 사용되는 함수이다.
                    getStaticProps함수를 만들어두고 export하면 애플리케이션이 빌드된 때 getStaticProps에서 가져온 값이 캐시되고, 그 값을 이용하는 형태로 페이지가 정적으로 렌더링된다.
                        <details>
                        <summary>예시</summary>
                        <div markdown="1">

                        ```tsx
                        //사용법
                        export function getStaticProps({params}) }
                        //...처리...
                        return 값; //반환값은 정적속성이며 키:값 형태로 반환한다.
                        }
                        
                        //전달 받는 컴포넌트
                        export default function 이름({children, 속성 이름}) {...} //속성 이름에 전달받은 값의 인수들을 입력한다.
                        
                        //예시
                        export function getStaticProps({params}) {
                        const data = {
                            title : 'Static Page',
                            msg : '정적 속성 예제입니다.'
                        };
                        
                        return {
                            props: {
                            data : data
                            }
                        };
                        }
                        
                        export default function StaticPage({data}) {
                        return(
                            <main>
                            <h1 className="header">{data.title}</h1>
                            <p>{data.msg}</p>
                            </main>
                        );
                        }
                        ```
                        </div>
                        </details>
                            
                - **getStaticPaths**
                    - 제한된 동적경로에 관한 정보를 제공할 땐 이 함수를 쓴다. 이 함수는 동적 라우팅 페이지에서 액세스할 수 있는 경로의 배열을 제공한다.
                        <details>
                        <summary>예시</summary>
                        <div markdown="1">
                            
                        ```tsx
                        //사용법
                        export function getStaticPaths() {
                            return {
                            paths: 경로의 배열,
                                fallback: <boolean>  //false로 설정하면 404에러발생
                            //true로 설정하면 동적 라우팅 파라미터로서 페이지가 호출되고,
                            //페이지가 호출된다는 것은 뭔가 처리를 해야만 한다는 뜻이고,
                            //이 경우 정적 페이지가 아니라고 생각해도 된다!
                            };
                        }
                        
                        //전달받을 땐 getStaticProps({인수}) 사용
                        
                        //예시
                        export function getStaticPaths() {
                            const path = [
                            '/name/kim',
                            '/name/lee'
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
                            }
                            };
                        
                            return {
                                props: {
                                    data:data[params.name]
                                }
                            };
                        }
                        ```
                        </div>
                        </details>
            - 동적(dynamic) 렌더링 : 동적콘텐츠는 **클라이언트가 엑세스할 때 마다** 서버측에서 매번 렌더링된다.
    - 앱 라우터
        - 서버 컨포넌트
            - 클라이언트쪽에서 동적으로 업데이트 되지 않는 것들을 다룸.
        - 클라이언트 컨포넌트
            - 클라이언트쪽에서 동적으로 업데이트 되는 것들을 다룸