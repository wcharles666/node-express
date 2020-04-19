import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';


const AuthorityManage = () => {
    const router = useRouter();
    console.dir(router);
    // 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = useState(0);
    return (
        <div>
            <Layout>
                {/* <h1>{router.query}</h1> */}
                <p>我是权限管理页面,请你配合 {count} times</p>
            </Layout>
        </div>
    );
};

export default AuthorityManage;