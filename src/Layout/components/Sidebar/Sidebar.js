import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import isLogin from '~/constantLogin';
import ScrollBar from '~/components/ScrollBar';
import images from '~/assets/image';
import ListAcout, { AcountItem } from '~/components/ListAcount';
import config from '~/config';
import { IconHome, IconActiveHome, IconFollow, IconActiveFollow, IconLive, IconActiveLive } from '~/components/icons';
import Menu, { MenuItem } from './menu';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <div className={cx('sideBar')}>
      <ScrollBar maxScroll={268} height={200} heightLine={596} parentClass={cx('wrapper')} />
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
          <AcountItem followed nickname="dangthuhaf" name="Đặng Thu Hà" src={images.avatar1} />
          <AcountItem followed nickname="lethikhanhhuyen2004" name="Lê Thị Khánh Huyền" src={images.avatar2} />
          <AcountItem followed nickname="hoaa.hanassii" name="Đào Lê Phương Hoa" src={images.avatar3} />
          <AcountItem followed nickname="lebong95" name="Le bong" src={images.avatar4} />
          <AcountItem followed nickname="vtkh2004" name="Vũ Thị Khánh Huyền" src={images.avatar5} />
        </ListAcout>
        {isLogin && (
          <ListAcout title="Các tài khoản đang follow" footerBtn="Xem thêm">
            <AcountItem nickname="lethikhanhhuyen2004" name="Lê Thị Khánh Huyền" src={images.avatar2} />
            <AcountItem nickname="vtkh2004" name="Vũ Thị Khánh Huyền" src={images.avatar5} />
            <AcountItem nickname="dangthuhaf" name="Đặng Thu Hà" src={images.avatar1} />
            <AcountItem nickname="hoaa.hanassii" name="Đào Lê Phương Hoa" src={images.avatar3} />
            <AcountItem nickname="lebong95" name="Le bong" src={images.avatar4} />
          </ListAcout>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
