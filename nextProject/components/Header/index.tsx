import * as React from 'react';
import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>首页</a>
        </Link>
        <Link href="/moduleManage">
            <a style={linkStyle}>模块管理页面</a>
        </Link>
    </div>
);

export default Header;