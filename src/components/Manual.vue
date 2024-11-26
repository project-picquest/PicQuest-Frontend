<template>
  <div class="container">
    <div class="text-box">
      <p
        style="
          font-size: 1.2rem;
          font-weight: 700;
          color: #f74320;
          margin-bottom: 0.8rem;
        "
      >
        PicQuest! 여행의 순간을 담다.
      </p>
      <p style="font-weight: 600">PicQuest는 매일 제공되는 랜덤 관광지 사진을 유사하게 찍는 미션을 수행하며 여행의 동기와 흥미를 얻을 수 있는 서비스입니다.</p>
      <!-- <p style="font-weight: 600">여행의 동기와 흥미를 얻을 수 있는 서비스입니다.</p> -->

      <p style="font-weight: 600; margin-top: 0.8rem; margin-bottom: 1.2rem">
        PicQuest는 아래의 두 가지 기능이 존재합니다.
      </p>
      <p style="font-size: 1rem; font-weight: 600; margin: 0.2rem">
        1. 일일 퀘스트 수행
      </p>
      <p>
        사용자들에게 매일
        <span style="font-weight: 600">랜덤 관광지 사진을 유사하게 찍는 미션</span>을
        제공합니다.
      </p>
      <p>
        사용자들은 
        <span style="font-weight: 600">미션 성공 여부</span>에 따라 <span style="font-weight: 600">점수</span>를 획득하고, 자연스럽게 여행에 대한 흥미를 느낄 수 있습니다.
      </p>
      <p>
        미션으로 제공된 관광지 사진과 사용자가 찍은 사진의
        <span style="font-weight: 600">유사도를 검사</span>하여 동일한 장소에서 찍은 사진임을
        인증한다면 사용자에게 점수를 부여합니다.
      </p>
      <p>사용자가 획득한 점수는 <span style="font-weight: 600">등급(여행레벨)</span>에 활용됩니다.</p>
      <p
        style="
          font-size: 1rem;
          font-weight: 600;
          margin-top: 1.2rem;
          margin-bottom: 0.2rem;
        "
      >
        2. 여행지 검색 및 사진 업로드
      </p>
      <p>
        사용자는
        <span style="font-weight: 600"
          >여행지를 검색하여 여행지의 주소를 알 수 있습니다.</span
        >
      </p>
      <p>
        또한, <span style="font-weight: 600">KaKao Map</span>과 연동하여
        여행지의 정확한 위치를 <span style="font-weight: 600">지도</span>에서
        확인할 수 있습니다.
      </p>
      <p>
        사용자는 여행지와 관련된 사진을 업로드하여 다른 사용자들과 공유가 가능합니다.
      </p>
      <p style="font-size: 0.8rem; color: #b2b2b2; margin-top: 1.8rem">
        본 매뉴얼은 ver1.0 기준으로 작성되었습니다.
      </p>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 5.5rem;
  right: 1.5rem;
  width: 31rem;
  height: 37rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.15);
}

.text-box {
  /* background-color: beige; */
  width: 27rem;
}
</style>
