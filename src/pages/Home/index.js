import PostItem from '~/components/PostItem';
import images from '~/assets/image';
function Home() {
  return (
    <PostItem
      title="Bác nào đặt nguyện vọng vào NEU rồi ạ "
      imgSrc={images.avatar1}
      nickname="dangthuhaf"
      name="Đặng Thu Hà"
      musicName="Nhớ Người Hay Nhớ (Special Remix) - Châu Đăng Khoa feat. Sofia"
    />
  );
}

export default Home;
