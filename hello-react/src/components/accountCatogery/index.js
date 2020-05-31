import React, { Component } from 'react';
import _ from 'lodash';
import './index.css';

export default class AccountCatogery extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      // 这里最好以key值设Active，不要设数组的index
      activeId: '',
    }
  }

  componentDidMount() {
    const activeId = this.getDefaultActive(this.props);
    this.setState({
      activeId,
    })
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.showData, nextProps.showData)) {
      const activeId = this.getDefaultActive(nextProps);
      this.setState({
        activeId,
      })
    }
  }

  getDefaultActive = props => {
    let { activeId } = this.state;
    if (activeId === '' && props.showData.length !== 0) {
      activeId = props.showData[0].id
      this.props.getactiveId(activeId);
    }
    return activeId;
  }

  changeActive = id => {
    this.setState({
      activeId: id,
    })
    this.props.getactiveId(id);
  }


  renderItem = (item) => {
    const { activeId } = this.state;
    return (
      <div key={item.id} className="catogeryBox" style={{ backgroundColor: activeId === item.id ? '#f7f7f7' : '#fff' }} onClick={() => this.changeActive(item.id)}>
        {/* 你可以用图像代替 */}
        <div className="catogeryImg">头像</div>
        <div className="catogeryContent">
          <div className="catogeryTitle">{item.accountName}</div>
          <div className="catogeryCommonent">{item.key !== 'group3' ? `共${item.number}个账号` : `${item.number}个账号`}</div>
        </div>
      </div>
    )
  }

  render() {
    const { showData } = this.props;
    return (
      <div className="catogeryPage">
        {
          showData.map((item, index) => (
            this.renderItem(item)
          ))
        }
      </div>
    );
  }
}

AccountCatogery.propTypes = {
  // name: PropTypes.string,
  // age: PropTypes.number,
  // user: PropTypes.object,
  // greet: PropTypes.func,
  // initialName: PropTypes.string
};
