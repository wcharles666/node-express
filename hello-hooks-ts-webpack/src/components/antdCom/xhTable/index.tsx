import React, { useState, useEffect } from 'react';
import './index.less';
import classNames from 'classnames';
import { dipatchLeftSide } from '@/config/commonMethods';

const XhTable = (props: any) => {
  dipatchLeftSide(props);
  const [activeHeadColumn, setActiveHeadColumn] = useState('');

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '住址222',
      dataIndex: 'address1',
      key: 'address1',
    },
  ];

  const data = [
    { id: 0, name: 'tk', age: 18, address: '浙江省杭州市' },
    { id: 0, name: 'tk', age: 18, address: '浙江省杭州市' },
    { id: 0, name: 'tk', age: 18, address: '浙江省杭州市' },
  ];

  const editTargetRow = (key, index) => {
    console.log(key, index);
  };

  const activeTargetColumn = (event, key: string) => {
    console.log(event, 'event');
    setActiveHeadColumn(key);
    // event.stopPropagation();
    console.log(key, 'dsdsd');
  };

  useEffect(() => {
    // document.onclick = () => {
    //   console.log('dshjdhsj');
    //   // setActiveHeadColumn('');
    // };
  }, []);

  return (
    <div className="xhTablePage">
      <table className="xh-table-mark-column">
        <thead>
          <tr>
            {columns.map((item, index) => {
              let thCloumnClass = classNames({
                'xh-decoration-th-colums': true,
                'xh-decoration-th-colums-active': item.key === activeHeadColumn,
                'xh-decoration-th-colums-active-left-border':
                  item.key === activeHeadColumn && index !== 0,
              });
              return (
                <th
                  className={thCloumnClass}
                  onClick={event => {
                    activeTargetColumn(event, item.key);
                  }}
                >
                  {activeHeadColumn === item.key ? (
                    <div className="xh-header-tip-Box">
                      <span>+</span>
                      <span>-</span>
                    </div>
                  ) : null}
                </th>
              );
            })}
          </tr>
        </thead>
      </table>
      <table className="xh-table">
        <thead>
          <tr>
            {columns.map(item => {
              let tableThCloumnClass = classNames({
                'xh-tb-th-colums-border': item.key === activeHeadColumn,
                // 'xh-decoration-th-colums-active': item.key === activeHeadColumn,
                // 'xh-decoration-th-colums-active-left-border':
                // item.key === activeHeadColumn && index !== 0,
              });
              return (
                <th className={tableThCloumnClass} style={{ minWidth: '200px' }}>
                  {item.title}
                </th>
              );
            })}
          </tr>
        </thead>
        {data.length === 0 ? (
          <tbody>
            <div>暂无数据</div>
          </tbody>
        ) : (
          <tbody>
            {data.map((dataItem, dataIndex) => {
              // let thCloumnClass = classNames({
              //   'xh-decoration-th-colums': true,
              //   'xh-decoration-th-colums-active': item.key === activeHeadColumn,
              //   'xh-decoration-th-colums-active-left-border':
              //     item.key === activeHeadColumn && index !== 0,
              // });
              return (
                <tr className={`xh-${dataIndex}-row`}>
                  {columns.map((item, index) => {
                    let tdCloumnClass = classNames({
                      'xh-td-colums-border-lr': item.key === activeHeadColumn,
                      // 'xh-td-colums-border-right': item.key === activeHeadColumn,
                      'xh-td-colums-border-bottom':
                        dataIndex === data.length - 1 && item.key === activeHeadColumn,
                    });
                    return (
                      <td
                        className={tdCloumnClass}
                        onDoubleClick={() => {
                          editTargetRow(dataItem, index);
                        }}
                      >
                        {dataItem[item.key]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default XhTable;
