"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          content: "오늘 먹은 식사에 점수를 매긴다면?",
          options:
            '{"1": "0점_퉷퉷 이게 무슨 맛이야", "2": "33점_0점보다 맛있어서 33점 줌", "3": "66점_2% 부족해", "4": "100점_JMT 단골예약"}',
          activityType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "영화의 어떤 부분이 가장 인상 깊었나요?",
          options:
            '{"1": "감동적인 스토리라인", "2": "화려한 액션", "3": "식스센스급 반전", "4": "달달한 로맨스"}',
          activityType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "오늘의 나는 어떤 유형의 쇼핑러였나요?",
          options:
            '{"1": "내일은 없다! 텅장이 되도록 쇼핑", "2": "살까? 말까? 신중하게 고르며 쇼핑", "3": "어머 너무 예뻐요! 팔랑귀 쇼핑", "4": "보기만 해도 행복해, 아이 쇼핑"}',
          activityType: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "이번 여행의 테마는 무엇이었나요?",
          options:
            '{"1": "#휴양지 #자연과함께", "2": "#식도락 #먹방요정", "3": "#액티비티 #스릴만점", "4": "#도심속 #명소탐방"}',
          activityType: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "운동의 목적이 무엇이었나요?",
          options:
            '{"1": "다이어트", "2": "근력 향상", "3": "건강 회복", "4": "스트레스 해소"}',
          activityType: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "운전자의 운전 스타일은 어땠나요?",
          options:
            '{"1": "급발진 & 급브레이크, 도로 위의 무법자", "2": "흔들리지 않는 편안함", "3": "이곳이 바로 클럽, 노래 빵빵", "4": "나만의 길을 개척한다, 내가 바로 인간 네비"}',
          activityType: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "평소 친구와 만날 때 불편한 점은?",
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
          options:
            '{"1": "10대", "2": "20대", "3": "30대", "4": "40대", "5": "50대", "6": "60대", "7": "70대", "8": "80대"}',
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
