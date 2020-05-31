import React, { Component } from 'react';
import _ from 'lodash';
import './index.css';


export default class AccountDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

    if (!_.isEqual(this.props.subShowData.data, nextProps.subShowData.data)) {
      const activeId = this.getDefaultActive(nextProps);
      this.setState({
        activeId,
      })
    }

    if (!_.isEqual(this.props.subShowData.parentId, nextProps.subShowData.parentId) && nextProps.subShowData.parentId !== '') {
      let activeId = ''
      if (nextProps.subShowData.data.length !== 0) {
        activeId = nextProps.subShowData.data[0].id
      }
      this.setState({
        activeId
      });
    }
  }

  getDefaultActive = props => {
    let { activeId } = this.state;
    if (activeId === '' && props.subShowData.data.length !== 0) {
      activeId = props.subShowData.data[0].id
    }
    return activeId;
  }

  changeActive = id => {
    this.setState({
      activeId: id,
    })
  }
  renderItem = item => {
    console.log(item, 'detailImgContain');
    const { activeId } = this.state;
    return (
      <div key={item.id} className="detailBox" style={{ backgroundColor: activeId === item.id ? '#f7f7f7' : '#fff' }} onClick={() => this.changeActive(item.id)}>
        {/* 你可以用图像代替 */}
        <div className="detailImg">头像</div>
        <div className="detailContent">
          <div className="detailName">
            <div>{item.name}</div>
            <div>图标</div>
          </div>
          <div className="detailImgContain">
            <div>图片</div>
            <div>图片</div>
            <div>图片</div>
            <div>图片</div>
          </div>
        </div>
      </div>
    )
  }

  render() {

    const { data } = this.props.subShowData;
    // const { openAccountInfo } = this.props;
    return (
      <div className="accountDetailPage">
        {
          data.map((item, index) => (
            this.renderItem(item)
          ))
        }
      </div>
    );
  }
}

