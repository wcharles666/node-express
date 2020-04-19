import React, { useState } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';

interface ModuleManageProps {
    shows: any,
}

const ModuleManage = (props: ModuleManageProps) => {
    // 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = useState(0);
    return (
        <div>
            <Layout>
                <h1>Batman TV Shows</h1>
                <ul>
                    {props.shows.map((show: any) => (
                        <li key={show.id}>
                            <Link href="/article/[id]" as={`/article/${show.id}`}>
                                <a>{show.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Layout>
        </div>
    );
};

ModuleManage.getInitialProps = async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    console.log(`Show data fetched. Count: ${data.length}`);
    return {
        shows: data.map(entry => entry.show)
    };
};

export default ModuleManage;