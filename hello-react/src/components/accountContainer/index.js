import React, { Component } from 'react';
import _ from 'lodash';
import AccountCatogery from '../accountCatogery/index';
import AccountDetail from '../accountDetail/index';
import AccountBrumb from '../accountBrumb/index';
import './index.css';


export default class AccountContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showData: [],
      subShowData: { parentId: '', data: [] },
    }

  }

  componentDidMount() {
    const showData = [
      {
        id: 'group1',
        accountName: '账号组',
        number: 3,
        actorUrl: 'http://www.baidu.com',
        subData: [
          { id: 'account1', actorUrl: 'http://www.baidu.com', name: '李子柒' },
          { id: 'account2', actorUrl: 'http://www.baidu.com', name: '央视新闻' }
        ]
      },
      {
        id: 'group2',
        accountName: '独立账号',
        number: 5,
        actorUrl: 'http://www.baidu.com',
        subData: [
          { id: 'account1', actorUrl: 'http://www.baidu.com', name: '央视新闻1' },
          { id: 'account2', actorUrl: 'http://www.baidu.com', name: '央视新闻2' }
        ]
      },
      {
        id: 'group3',
        accountName: '所有账号',
        number: 32,
        actorUrl: 'http://www.baidu.com',
        subData: [
          { id: 'account1', actorUrl: 'http://www.baidu.com', name: '央视新闻1' },
          { id: 'account2', actorUrl: 'http://www.baidu.com', name: '央视新闻2' },
          { id: 'account3', actorUrl: 'http://www.baidu.com', name: '央视新闻3' },
          { id: 'account4', actorUrl: 'http://www.baidu.com', name: '央视新闻4' },
          { id: 'account5', actorUrl: 'http://www.baidu.com', name: '央视新闻5' },
          { id: 'account6', actorUrl: 'http://www.baidu.com', name: '央视新闻6' },
          { id: 'account7', actorUrl: 'http://www.baidu.com', name: '央视新闻7' },
          { id: 'account8', actorUrl: 'http://www.baidu.com', name: '央视新闻8' },
        ]
      }
    ];

    this.setState({
      showData
    });
  }

  getactiveId = id => {
    let subShowData = [];
    let sendId = '';
    if (id !== '') {
      const { showData } = this.state;
      const findIndex = _.findIndex(showData, item => { return item.id === id; });
      subShowData = showData[findIndex].subData;
      sendId = showData[findIndex].id
    }
    // 这里将parentId的目的的 切换左边的分类， 右边让其始终默认选中第一个
    this.setState({
      subShowData: { parentId: sendId, data: subShowData, }
    });
  }

  render() {
    const { openAccountInfo } = this.props;
    const { showData, subShowData } = this.state;
    return (
      <div className="accountContainerPage" style={{ display: openAccountInfo ? "flex" : "none" }}>
        <AccountBrumb />
        <div className="accountContent">
          <AccountCatogery showData={showData} getactiveId={this.getactiveId} />
          <AccountDetail subShowData={subShowData} />
        </div>
      </div>
    );
  }
}

