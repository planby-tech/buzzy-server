"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          id: 1,
          content: "오늘 먹은 식사에 점수를 매긴다면?",
          options:
            '{"1": "0점_퉷퉷 이게 무슨 맛이야", "2": "33점_0점보다 맛있어서 33점 줌", "3": "66점_2% 부족해", "4": "100점_JMT 단골예약"}',
          activityType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          content: "영화의 어떤 부분이 가장 인상 깊었나요?",
          options:
            '{"1": "감동적인 스토리라인", "2": "화려한 액션", "3": "식스센스급 반전", "4": "달달한 로맨스"}',
          activityType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          content: "오늘의 나는 어떤 유형의 쇼핑러였나요?",
          options:
            '{"1": "내일은 없다! 텅장이 되도록 쇼핑", "2": "살까? 말까? 신중하게 고르며 쇼핑", "3": "어머 너무 예뻐요! 팔랑귀 쇼핑", "4": "보기만 해도 행복해, 아이 쇼핑"}',
          activityType: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          content: "이번 여행의 테마는 무엇이었나요?",
          options:
            '{"1": "#휴양지 #자연과함께", "2": "#식도락 #먹방요정", "3": "#액티비티 #스릴만점", "4": "#도심속 #명소탐방"}',
          activityType: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          content: "운동의 목적이 무엇이었나요?",
          options:
            '{"1": "다이어트", "2": "근력 향상", "3": "건강 회복", "4": "스트레스 해소"}',
          activityType: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          content: "어떤 이미지 변신이 있었나요?",
          options:
            '{"1": "차분해졌다... 모범생st 완성 ㅎㅎ,,", "2": "화려한 스타일!!! 연예인 저리 가라 ~", "3": "힙한 스트릿 갬성 ♬♫♬", "4": "나는 나대로, 내게 변화 따윈 없다 :/"}',
          activityType: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          content: "운전자의 운전 스타일은 어땠나요?",
          options:
            '{"1": "급발진 & 급브레이크, 도로 위의 무법자", "2": "흔들리지 않는 편안함", "3": "이곳이 바로 클럽, 노래 빵빵", "4": "나만의 길을 개척한다, 내가 바로 인간 네비"}',
          activityType: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          content: "오늘의 피크닉 테마는?",
          options:
            '{"1": "벚꽃 살랑살랑 날리는 봄 피크닉 🌸", "2": "그늘 속에서 즐기는 여름 피크닉 ☀️", "3": "단풍잎 휘날리는 가을 피크닉 🍁", "4": "이 날씨에 소풍을..? 거침 없는 겨울 피크닉 💨"}',
          activityType: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          content: "어떤 장소에서 캠핑을 즐겼나요?",
          options:
            '{"1": "숲 속에서 피톤치드 뿜뿜~!", "2": "시원한 계곡 물 소리를 들으며 힐링..!", "3": "해수욕장 근처에서 밤바다와 함께 ~.~", "4": "강물이 흐르고 수상 레저와 함께 신나게!!"}',
          activityType: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          content: "오늘 내 게임 실력은?",
          options:
            '{"1": "슈퍼 트롤러 ㅠ.ㅠ 손이 안 풀렸어~", "2": "1인분은 했다 ㅋㅋㅎㅎ..!", "3": "오늘의 주인공은 바로 나!!", "4": "실력은 중요하지 않다, 게임 인생 마이웨이."}',
          activityType: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          content: "이번 전시회 주제는?",
          options:
            '{"1": "미술계 거장과 함께 하는 클래식한 전시회 *.*", "2": "번쩍 번쩍 화려한 미디어 아트 vv", "3": "눈을 떼지 못하는 조형물 전시 ><", "4": "독창성이 돋보이는 개인 미술 전시회 @.@"}',
          activityType: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          content: "오늘 날씨는 어땠나요?",
          options:
            '{"1": "구름 한 점 없는 푸른 하늘 🌈", "2": "햇빛이 내리 쬐는 날씨 🌞", "3": "비가 오는 감성 있는 날씨 🌧", "4": "눈이 펑펑 ☃"}',
          activityType: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "평소에 약속을 잡을 때 불편한 점이 있나요?",
          options:
            '{"1": "친구들과 스케줄 조절하는 것이 힘들다.", "2": "친구들이 연락을 잘 보지 않는다.", "3": "약속 장소를 정하는 데 결정장애가 있다.", "4": "친구들이 제시간에 오지 않는다."}',
          activityType: 999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Buzzy앱의 어떤 부분이 가장 인상 깊었나요?",
          options:
            '{"1": "아이디어", "2": "화면 구성", "3": "디자인", "4": "기능"}',
          activityType: 999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "사용성에 있어서 가장 불편한 점은 무엇인가요?",
          options:
            '{"1": "글씨 크기가 작다.", "2": "버튼이 작다.", "3": "기능이 어렵다.", "4": "불편한 점 없다."}',
          activityType: 999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Buzzy앱에 별점을 준다면?",
          options: '{"1": "★★★★★", "2": "★★★★", "3": "★★★", "4": "★★"}',
          activityType: 999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Buzzy앱을 누구와 가장 많이 사용하실 예정인가요?",
          options: '{"1": "친구", "2": "가족", "3": "연인", "4": "혼자"}',
          activityType: 999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "하루 일과를 기록할 때 평소 어떻게 기록하나요?",
          options:
            '{"1": "날짜, 시간 정보만 기입", "2": "사진/그림 일기", "3": "오늘 하루의 장황한 설명", "4": "머리 속에 기록"}',
          activityType: 999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "연령대가 어떻게 되시나요?",
          options: '{"1": "10대", "2": "20대", "3": "30대", "4": "40대 이상"}',
          activityType: 999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Buzzy앱에 추가되었으면 하는 기능을 알려주세요.",
          options: "{}",
          activityType: 999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Buzzy팀에게 응원의 한 마디를 작성해 주세요.",
          options: "{}",
          activityType: 999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
