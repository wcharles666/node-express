import React, { Component } from 'react';
import './index.css';

export default class AccountInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openInfoBox: true, // 默认展开
    }
  }

  openAccountBox = () => {
    const { openInfoBox } = this.state;
    this.props.changegeBoxHide(!openInfoBox);
    this.setState({
      openInfoBox: !openInfoBox
    })
  }

  render() {
    const { openInfoBox } = this.state;
    return (
      <div className="accountInfoPage">
        {/* 你可以用图像代替 */}
        <div className="accountInfoImg">头像</div>
        <div className="catogeryContent">
          <div className="catogeryTitle">李子qi</div>
          <div className="catogeryCommonent">图像 账号群</div>
        </div>
        <div className="catogeryArrow" onClick={this.openAccountBox}>
          {openInfoBox ? '箭头展开' : '箭头关闭'}
        </div>
      </div>
    );
  }
}
