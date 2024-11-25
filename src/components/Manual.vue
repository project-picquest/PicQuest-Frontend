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
      <p style="font-weight: 600">PicQuest는 사용자들의 여행지 방문 인증을</p>
      <p style="font-weight: 600">퀘스트를 통해 진행하는 서비스입니다.</p>

      <p style="font-weight: 600; margin-top: 0.8rem; margin-bottom: 1.2rem">
        PicQuest는 아래의 두 가지 기능이 존재합니다.
      </p>
      <p style="font-size: 1rem; font-weight: 600; margin: 0.2rem">
        1. 일일 퀘스트
      </p>
      <p>
        사용자들에게 매일
        <span style="font-weight: 600">여행지 방문 사진 인증 퀘스트</span>를
        제공합니다.
      </p>
      <p>
        퀘스트로 여행지의 <span style="font-weight: 600">특정 장소 사진</span>이
        주어지게 되고, 사용자들은
        <span style="font-weight: 600">동일한 장소에서 사진을 제출</span>하여
        방문을 인증할 수 있습니다.
      </p>
      <p>
        퀘스트로 제공된 사진과 제출한 사진의
        <span style="font-weight: 600">유사도를 검사</span>하여 방문을
        인증한다면 사용자에게 포인트를 지급합니다.
      </p>
      <p>포인트는 사용자 등급에 활용됩니다.</p>
      <p
        style="
          font-size: 1rem;
          font-weight: 600;
          margin-top: 1.2rem;
          margin-bottom: 0.2rem;
        "
      >
        2. 여행지 검색
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
  width: 30rem;
  height: 33rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.15);
}

.text-box {
  /* background-color: beige; */
  width: 26rem;
}
</style>
