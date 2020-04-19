import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

interface PostLinkProps {
    id: string,
}
const PostLink = (props: PostLinkProps) => (
    <li>
        <Link href={`/${props.id}`}>
            <a>{props.id}</a>
        </Link>
        {/* <Link href={`/[id]`} as={`/${props.id}`}>
            <a>{`${props.id}页面`}</a>
        </Link> */}
    </li>
);

const Index = () => {
    // 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = useState(0);
    return (
        <div>
            <Layout>
                <h1>My Blog</h1>
                <ul>
                    <PostLink id="moduleManage" />
                    <PostLink id="authorityManage" />
                    <PostLink id="index" />
                </ul>
            </Layout>
        </div>
    );
};

export default Index;