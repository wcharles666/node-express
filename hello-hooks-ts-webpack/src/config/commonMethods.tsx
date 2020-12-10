import { useContext, useEffect } from 'react';
import { MyContext } from '@/config/contextManager';
/*
 * 改变公用状态是否显示左边菜单栏
 */

export const dipatchLeftSide = (props: any) => {
  console.log('sdhajdh');
  const { dispatch } = useContext(MyContext);
  const { leftSide } = props.route;
  useEffect(() => {
    dispatch({ type: 'leftSide', value: { leftSide } });
  }, [leftSide]);
};

export const getActiveMenu = (dispatch: (_: any) => void, pathname: string) => {
  let sideActiveMenu: string = pathname;
  let headActiveMenu: string = pathname;
  if (sideActiveMenu.indexOf('/main/components') !== -1) {
    console.log('/', 'sdsd');
    headActiveMenu = '/main/components';
  } else if (sideActiveMenu.indexOf('/main/demo') !== -1) {
    headActiveMenu = '/main/demo';
  } else if (sideActiveMenu.indexOf('/main/study') !== -1) {
    headActiveMenu = '/main/study';
  }
  dispatch({ type: 'activeMenu', value: { sideActiveMenu, headActiveMenu } });
};

/*
 *  如果点击的是同一路由,阻止冒泡
 */
export const stopRouterChange = (
  event: any,
  targetPathName: string,
  currentPathName: string
): void => {
  targetPathName === currentPathName && event.preventDefault();
};
