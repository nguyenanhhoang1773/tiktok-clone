import PostItem from '~/components/PostItem';
import images from '~/assets/image';
import WrapperPostItem from '~/components/WrapperPostItem';
import videos from '~/assets/videos';
function Home() {
  return (
    <WrapperPostItem>
      <PostItem
        title="Bác nào đặt nguyện vọng vào NEU rồi ạ "
        imgSrc={images.avatar1}
        nickname="dangthuhaf"
        name="Đặng Thu Hà"
        videoSrc={videos.video1}
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
        videoSrc={videos.video2}
        musicName="She Knows - J. Cole"
        totalLove="87.2k"
        totalComment="6.7k"
        totalShare="224"
      />
    </WrapperPostItem>
  );
}

export default Home;
