export const comSideBar = [
  {
    title: '组件总览',
    name: 'comLibiray',
    menu: { title: '组件总览', name: 'comLibiray', pathName: '/main/components' },
  },
  {
    title: 'Antd组件库',
    name: 'antdCom',
    subMenu: {
      data: [
        { title: 'Form表单', name: 'form', pathName: '/main/components/form' },
        { title: 'Table表格', name: 'table', pathName: '/main/components/table' },
        { title: 'Pagaination分页', name: 'pagaination', pathName: '/main/components/pagaination' },
        { title: '新华Table', name: 'xhTable', pathName: '/main/components/xhTable' },
      ],
    },
  },
  {
    title: 'three组件库',
    name: 'threeCom',
    subMenu: {
      data: [
        { title: 'pie图', name: 'pie', pathName: '/main/components/pie' },
        { title: 'bar', name: 'bar', pathName: '/main/components/bar' },
      ],
    },
  },
];

export const demoSideBar = [
  {
    title: 'Demo总览',
    name: 'comLibiray',
    menu: { title: 'Demo总览', name: 'demoLibiray', pathName: '/main/demo' },
  },
  {
    title: 'hooksDemo',
    name: 'hooksDemo',
    subMenu: {
      data: [{ title: 'demoForm', name: 'demoForm', pathName: '/main/demo/form' }],
    },
  },
];
