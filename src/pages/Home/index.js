import PostItem from '~/components/PostItem';
import images from '~/assets/image';
import WrapperPostItem from '~/components/WrapperPostItem';
function Home() {
  return (
    <WrapperPostItem>
      <PostItem
        title="Bác nào đặt nguyện vọng vào NEU rồi ạ "
        imgSrc={images.avatar1}
        nickname="dangthuhaf"
        name="Đặng Thu Hà"
        videoSrc="https://v16-webapp.tiktok.com/097c0516b835f59b29218d0e93eaed5a/63110574/video/tos/useast2a/tos-useast2a-pve-0037-aiso/013347923f6748a4a789ae8d7591c613/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2472&bt=1236&cs=0&ds=3&ft=eXd.6Hk_Myq8ZBmR.he2NXUQml7Gb&mime_type=video_mp4&qs=0&rc=NTw7NGk1N2c3aTxnZzszZ0BpM2U4cDs6ZmhlZjMzZjgzM0AzMy0yLjIxXy4xXjZeYzYuYSNna2JrcjRvLTNgLS1kL2Nzcw%3D%3D&l=202209011316150102450432131F20B425&btag=80000"
        musicName="Nhớ Người Hay Nhớ (Special Remix) - Châu Đăng Khoa feat. Sofia"
        totalLove="129.6k"
        totalComment="12.1k"
        totalShare="824"
      />
      <PostItem
        title="Không sợ địch mạnh chỉ sợ đồng đội nói qài hỏng hỉu "
        imgSrc={images.avatar6}
        nickname="letrucphuong1003"
        name="Choco✨"
        videoSrc="https://v16-webapp.tiktok.com/6eaf8eb2d4eb18d0d2cb62e1f5977214/6312698d/video/tos/useast2a/tos-useast2a-pve-0037-aiso/f7b7d2fa89e342c7bdb5e1e5d0aa4331/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3100&bt=1550&cs=0&ds=3&ft=eXd.6Hk_Myq8ZuHG.he2N4hUml7Gb&mime_type=video_mp4&qs=0&rc=NDU4MzU2N2Q2OGQ4aDc0N0BpamxmPGQ6ZmtmZjMzZjgzM0AxYGAtMi5fXmMxLTYtYjEzYSNmbDVvcjRvMjVgLS1kL2Nzcw%3D%3D&l=202209021436510102440030260C4C74F5&btag=80000"
        musicName="She Knows - J. Cole"
        totalLove="87.2k"
        totalComment="6.7k"
        totalShare="224"
      />
    </WrapperPostItem>
  );
}

export default Home;
