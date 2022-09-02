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
        musicName="Nhớ Người Hay Nhớ (Special Remix) - Châu Đăng Khoa feat. Sofia"
      />
    </WrapperPostItem>
  );
}

export default Home;
