import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import isLogin from '~/constantLogin';
import ListAcout, { AcountItem } from '~/components/ListAcount';
import config from '~/config';
import { IconHome, IconActiveHome, IconFollow, IconActiveFollow, IconLive, IconActiveLive } from '~/components/icons';
import Menu, { MenuItem } from './menu';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <div className={cx('wrapper')}>
      <Menu>
        <MenuItem to={config.routes.home} icon={<IconHome />} iconActive={<IconActiveHome />}>
          Dành cho bạn
        </MenuItem>
        <MenuItem to={config.routes.following} icon={<IconFollow />} iconActive={<IconActiveFollow />}>
          Đang Follow
        </MenuItem>
        <MenuItem to={config.routes.live} icon={<IconLive />} iconActive={<IconActiveLive />}>
          LIVE
        </MenuItem>
      </Menu>
      {!isLogin && (
        <div className={cx('unlogged')}>
          <p className={cx('unlogged-title')}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
          <Button large outline>
            Đăng nhập
          </Button>
        </div>
      )}
      <ListAcout title="Tài khoản được đề xuất" footerBtn="Xem tất cả">
        <AcountItem
          followed
          nickname="dangthuhaf"
          name="Đặng Thu Hà"
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/bde0d542ad0c559ff67015e13369e03c.jpeg?x-expires=1661673600&x-signature=jok8bTJFC1Y8%2FG%2FUrheuX%2FczXZQ%3D"
        />
        <AcountItem
          followed
          nickname="lethikhanhhuyen2004"
          name="Lê Thị Khánh Huyền"
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f56277826b7377f45d036b914bc6b51d~c5_100x100.jpeg?x-expires=1661590800&x-signature=PMncisGDwtu8TAxa1E3Q2w6eEXI%3D"
        />
        <AcountItem
          followed
          nickname="hoaa.hanassii"
          name="Đào Lê Phương Hoa"
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1661673600&x-signature=gmggvtmXIUycrZj%2FlMnQSCrsIXI%3D"
        />
        <AcountItem
          followed
          nickname="lebong95"
          name="Le bong"
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/557695794d1cb0b4a32322da33aac45d~c5_100x100.jpeg?x-expires=1661605200&x-signature=Q0IiILQfEpmIk2jObvsMuJYc1GA%3D"
        />
        <AcountItem
          followed
          nickname="vtkh2004"
          name="Vũ Thị Khánh Huyền"
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a99233338616727b5aa4f014a74eda4f~c5_100x100.jpeg?x-expires=1661691600&x-signature=qsFO%2FGsKZ6wYWbbNxjtzqPggjlo%3D"
        />
      </ListAcout>
      {isLogin && (
        <ListAcout title="Các tài khoản đang follow" footerBtn="Xem thêm">
          <AcountItem
            nickname="lethikhanhhuyen2004"
            name="Lê Thị Khánh Huyền"
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f56277826b7377f45d036b914bc6b51d~c5_100x100.jpeg?x-expires=1661590800&x-signature=PMncisGDwtu8TAxa1E3Q2w6eEXI%3D"
          />
          <AcountItem
            nickname="vtkh2004"
            name="Vũ Thị Khánh Huyền"
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a99233338616727b5aa4f014a74eda4f~c5_100x100.jpeg?x-expires=1661691600&x-signature=qsFO%2FGsKZ6wYWbbNxjtzqPggjlo%3D"
          />
          <AcountItem
            nickname="dangthuhaf"
            name="Đặng Thu Hà"
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/bde0d542ad0c559ff67015e13369e03c.jpeg?x-expires=1661673600&x-signature=jok8bTJFC1Y8%2FG%2FUrheuX%2FczXZQ%3D"
          />
          <AcountItem
            nickname="hoaa.hanassii"
            name="Đào Lê Phương Hoa"
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1661673600&x-signature=gmggvtmXIUycrZj%2FlMnQSCrsIXI%3D"
          />
          <AcountItem
            nickname="lebong95"
            name="Le bong"
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/557695794d1cb0b4a32322da33aac45d~c5_100x100.jpeg?x-expires=1661605200&x-signature=Q0IiILQfEpmIk2jObvsMuJYc1GA%3D"
          />
        </ListAcout>
      )}
    </div>
  );
}

export default Sidebar;
