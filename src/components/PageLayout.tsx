import Head from "next/head";
import { ReactNode } from "react";

type PageLayoutProps = {
    children: ReactNode,
    title: string
}

export const PageLayout = ({children, title}: PageLayoutProps) => {
  return <div>
    <Head>
        <title>{"forbit.dev | " + title}</title>
    </Head>
    <main className="overflow-x-hidden">
        {children}
    </main>
  </div>;
};
