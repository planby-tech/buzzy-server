"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          id: 1,
          content: "오늘 먹은 식사에\n점수를 매긴다면?",
          options:
            '{"1": "0점_퉷퉷 이게 무슨 맛이야", "2": "33점_0점보다 맛있어서 33점 줌", "3": "66점_2% 부족해", "4": "100점_JMT 단골예약"}',
          activityType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          content: "영화의 어떤\n부분이 가장 인상 깊었나요?",
          options:
            '{"1": "감동적인 스토리라인", "2": "화려한 액션과 영상미", "3": "출연진들의 연기 실력", "4": "신나는 OST"}',
          activityType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          content: "오늘의 나는\n어떤 유형의 쇼핑러였나요?",
          options:
            '{"1": "내일은 없다! 텅장이 되도록 쇼핑", "2": "살까? 말까? 신중하게 고르며 쇼핑", "3": "어머 너무 예뻐요! 팔랑귀 쇼핑", "4": "보기만 해도 행복해, 아이 쇼핑"}',
          activityType: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          content: "이번 여행의 테마는\n무엇이었나요?",
          options:
            '{"1": "#휴양지 #자연과함께", "2": "#식도락 #먹방요정", "3": "#액티비티 #스릴만점", "4": "#도심속 #명소탐방"}',
          activityType: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          content: "운동의 목적이\n무엇이었나요?",
          options:
            '{"1": "다이어트", "2": "근력 향상", "3": "스트레스 해소", "4": "근력 향상"}',
          activityType: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          content: "어떤 이미지 변신이\n있었나요?",
          options:
            '{"1": "차분해졌다... 모범생st 완성 ㅎㅎ,,", "2": "화려한 스타일!!! 연예인 저리 가라 ~", "3": "힙한 스트릿 갬성 ♬♫♬", "4": "나는 나대로, 내게 변화 따윈 없다 :/"}',
          activityType: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          content: "운전자의 운전 스타일은\n어땠나요?",
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
          content: "어떤 장소에서 캠핑을\n즐겼나요?",
          options:
            '{"1": "숲 속에서 피톤치드 뿜뿜~!", "2": "시원한 계곡 물 소리를 들으며 힐링..!", "3": "해수욕장 근처에서 밤바다와 함께 ~.~", "4": "강물이 흐르고 수상 레저와 함께 신나게!!"}',
          activityType: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          content: "오늘 내 게임 실력을\n평가하자면?",
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
          id: 13,
          content: "다음에도 같은 음식점에\n방문할 생각이 있나요?",
          options:
            '{"1": "별로,, 다시 가고 싶지 않다", "2": "무난무난해서 생각 나면 갈 것 같다", "3": "다른 친구들과도 꼭 다시 오고 싶다", "4": "별 생각이 없다"}',
          activityType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          content: "내가 영화 속 주인공이\n된다면?",
          options:
            '{"1": "적들을 다 쓸어 버리는 터프한 주인공", "2": "한 사람만 바라 볼 슈퍼 로맨티스트", "3": "능글 맞은 개그 캐릭터", "4": "모두의 우상, 명예로운 주인공"}',
          activityType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          content: "쇼핑을 가는 주요 목적이\n무엇인가요?",
          options:
            '{"1": "스트레스 풀기, Cash is King 😎", "2": "정말 필요한 것이 생길 때 가는 편 😤", "3": "가지고 싶은 것이 생겼을 때, 사죠 이거 👉🏻", "4": "별 생각 없고 친구들 따라 간다 👀"}',
          activityType: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          content: "누구와 여행을 즐겼나요?",
          options:
            '{"1": "사랑하는 가족들과", "2": "소중한 연인과", "3": "깜찍한 친구들과", "4": "I love me, 혼자서 훌쩍"}',
          activityType: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          content: "오늘 나의\n운동 스타일은?",
          options:
            '{"1": "종목은 가리지 않는다, 만능 스포츠맨", "2": "단백질은 오로지 내 근육을 위해, 헬스 인생", "3": "친구들과 취미로,, 스포츠 아기", "4": "땀 흘리는 건 싫어! 요가 필라테스로 평화 찾기"}',
          activityType: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          content: "평상시 미용을 위해\n투자하는 노력은?",
          options:
            '{"1": "아름다워지기 위해 산다, 배우 꿈나무", "2": "신경은 쓰지만 분산 투자가 좋다.", "3": "지극히 정상인으로 보일 정도만", "4": "사람들의 시선? 신경 쓰지 않아."}',
          activityType: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 19,
          content: "나와 함께\n드라이브를 한 사람은?",
          options:
            '{"1": "나는야 빛이 나는 솔로~", "2": "피는 물보다 진하다. 내 가족", "3": "소중한 내 친구~", "4": "내 사랑 내 자깅 ><"}',
          activityType: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 20,
          content: "소풍 갈 때 가장\n신경 쓰는 부분은?",
          options:
            '{"1": "뭐니 뭐니 해도 같이 가는 사람", "2": "날씨가 가장 중요해", "3": "예쁜 풍경이 있어야 한다!", "4": "다 필요 없고 오늘 내 옷차림만 무사하면 돼"}',
          activityType: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 21,
          content: "다른 사람들에게 추천할 만한\n캠핑 장소였나요?",
          options:
            '{"1": "그냥 쏘쏘...였다", "2": "무난하게 추천할 것 같다", "3": "초강추!! 모두가 와줬으면 좋겠다", "4": "너무 좋아서 나만 알고 싶다 ㅎㅅㅎ"}',
          activityType: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 22,
          content: "오늘 어떤 종류의\n게임을 했나요?",
          options:
            '{"1": "역시 롤이 짱이지", "2": "FPS가 좋아, 적들을 쓸어버려", "3": "사냥하고 키우는 맛이 있는 RPG", "4": "그래도 고전 게임파.. 틀니 잡고 다 드루와"}',
          activityType: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 23,
          content: "전시회에 어떻게 방문하게\n되었나요?",
          options:
            '{"1": "열심히 알아봤다, 내 취향 듬뿍!", "2": "지인들의 무수한 찬사와 함께", "3": "너무 유명해서 꼭 가보고 싶었다", "4": "그냥... 친구따라 ~~"}',
          activityType: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 24,
          content: "오늘 방문한 곳의\n느낌은?",
          options:
            '{"1": "매우 만족~~ 좋은 장소를 발견했다", "2": "아쉬운 부분이 있지만 대체로 만족 :)", "3": "평범하다 ㅎㅎ", "4": "아주 최악, 다시는 가고 싶지 않아"}',
          activityType: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 25,
          content: "오늘 먹은 음식의\n대략적인 가격대는?",
          options:
            '{"1": "1만원대", "2": "3만원대", "3": "5만원대", "4": "10만원대"}',
          activityType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 26,
          content: "오늘 영화 보면서\n먹은 나의 팝콘 취향은?",
          options:
            '{"1": "뭐니 뭐니 해도 오리지널", "2": "달달한 카라멜이 진리", "3": "어니언, 갈릭 시즈닝 듬뿍", "4": "팝콘 싫어해서 안먹음"}',
          activityType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 27,
          content: "오늘 쇼핑한\n나의 쇼핑 스팟은?",
          options:
            '{"1": "길거리 로드샵", "2": "몰", "3": "백화점", "4": "아울렛"}',
          activityType: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 28,
          content: "이번에 떠난\n여행의 총 기간은?",
          options:
            '{"1": "당일치기", "2": "1박 2일", "3": "3박 4일", "4": "4일 이상"}',
          activityType: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 29,
          content: "오늘 함께 운동한\n총 시간은?",
          options:
            '{"1": "짧고 굵게 30분", "2": "적당히 1시간 정도", "3": "꽤 열심히 2시간", "4": "운동광 3시간 이상"}',
          activityType: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 30,
          content: "오늘 미용을 하러 간\n목적은 무엇인가요?",
          options:
            '{"1": "분위기 전환용", "2": "여행 전 기분 내기", "3": "스트레스 해소", "4": "미용할 시기가 다가옴"}',
          activityType: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 31,
          content: "어느 드라이브 코스를\n다녀오셨나요?",
          options:
            '{"1": "해안도로 달리는 드라이브", "2": "시내 드라이브", "3": "산길 드라이브", "4": "호수/강 근처 드라이브"}',
          activityType: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 32,
          content: "피크닉을 다녀온 후\n내 감정변화는?",
          options:
            '{"1": "행복행복~ 오늘은 완벽한 하루여쓰~", "2": "쉬운 일은 없었지만 값어치 있어~", "3": "당황스러운 일이 많았어.. 망했어..", "4": "내가 피크닉 가면 사람이 아니다! 다신 안가!"}',
          activityType: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 33,
          content: "오늘 떠난 캠핑의\n종류는 무엇인가요?",
          options:
            '{"1": "글램핑", "2": "차박", "3": "오토캠핑", "4": "백패킹"}',
          activityType: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 34,
          content: "오늘 내가 게임한\n총 게임 시간은?",
          options:
            '{"1": "재밌게 1시간 정도", "2": "몇 판 게임했더니 3~4시간", "3": "알차게 게임만 6시간 이상 ", "4": "게임 중독자, 24시간"}',
          activityType: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 35,
          content: "전시회 관람하는\n나의 전시 감상 스타일은?",
          options:
            '{"1": "혼자 조용히 감상", "2": "친구와 토론하며 감상", "3": "도슨트 투어 참여", "4": "오늘은 내가 도슨트"}',
          activityType: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 36,
          content: "오늘 어떤 음악을\n들으셨나요?",
          options:
            '{"1": "잔잔한 클래식 음악", "2": "K-pop 아이돌 노래", "3": "감성충만 발라드", "4": "힙합 정신 가득 음악 "}',
          activityType: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 37,
          content: "식사 자리의 분위기는\n어땠나요?",
          options:
            '{"1": "화기애애한 분위기", "2": "진중한 분위기", "3": "로맨틱한 분위기", "4": "침묵 속 식사"}',
          activityType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 38,
          content: "어느 시간대\n영화를 보셨나요?",
          options:
            '{"1": "일찍 일어난 새🐦가 영화를 본다, 조조 영화", "2": "기다리기 너무 힘들어, 오전 영화", "3": "그래도 밥은 먹고 영화봐야지, 오후 영화", "4": "나는야 올빼미🦉, 심야 영화"}',
          activityType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 39,
          content: "오늘 쇼핑에 대해 힘들었거나\n아슀던 점이 있었나요?",
          options:
            '{"1": "엥? 힘든 점이 없었는데???", "2": "옷이 예쁜데 맞는 사이즈가 없어 흑 ㅠ", "3": "내가 사고싶은거 다 sold out 하..", "4": "흥. 사고 싶은걸 하나도 발견 못했어"}',
          activityType: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 40,
          content: "여행 하면서 찍은 사진 중\n가장 마음에 드는 사진은?",
          options:
            '{"1": "멋드러진 풍경 사진", "2": "내가 봐도 잘나왔다, 인물 사진", "3": "아이 귀여워, 동물 사진", "4": "보니까 또 먹고싶네, 음식 사진"}',
          activityType: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 41,
          content: "오늘의 운동 스팟은\n어디인가요?",
          options:
            '{"1": "편안한 집", "2": "야외 공터", "3": "실내 체육관, 헬스장", "4": "기타"}',
          activityType: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 42,
          content: "오늘은 어떤 관리를\n받으셨나요?",
          options:
            '{"1": "피부", "2": "헤어", "3": "속눈썹, 손 & 발 네일", "4": "타투, 왁싱"}',
          activityType: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 43,
          content: "오늘 내가 드라이브 갈 때\n탄 차는? ",
          options:
            '{"1": "귀엽고 깜찍한 경차", "2": "무난하게 소형, 중형차", "3": "뚜껑이 어디 갔지? sports car", "4": "오늘은 차박이당, 커다란 SUV"}',
          activityType: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 44,
          content: "오늘 피크닉 도중에\n겪은 일은?",
          options:
            '{"1": "벌레들의 습격 🦟", "2": "직접 싸간 도시락으로 맛난 한끼 🍽", "3": "텐트 안에서 꽁냥꽁냥 🥰", "4": "길에서 만난 귀여운 강아지 🐶"}',
          activityType: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 45,
          content: "오늘 캠핑에서의\n하이라이트는?",
          options:
            '{"1": "맛나는 바베큐", "2": "신나는 선곡, 빠리 투나잇~!", "3": "포근한 분위기와 잔잔한 노래", "4": "신선한 공기와 선명한 밤하늘"}',
          activityType: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 46,
          content: "오늘 게임을 하면서\n기억에 남은 순간은?",
          options:
            '{"1": "팀원의 트롤링", "2": "극적인 승리", "3": "최고 점수 달성", "4": "오구오구 귀여운 내 캐릭터"}',
          activityType: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 47,
          content: "이번 전시회 방문의\n목적은 무엇인가요?",
          options:
            '{"1": "찰칵, SNS 업로드용 사진 겟", "2": "좋아하는 작가, 작품을 보러", "3": "그냥 문화 생활 중 하나지", "4": "지인 작품 구경 "}',
          activityType: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 48,
          content: "오늘의 컨디션은\n어떠한가요?",
          options:
            '{"1": "날아갈 것 같이 가벼운 몸상태", "2": "이정도면 나쁘지 않지, soso", "3": "살짝 피곤하네..", "4": "몸 상태 최악, 너무 아파.."}',
          activityType: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 49,
          content: "무슨 종류의\n음식을 드셨나요?",
          options:
            '{"1": "양식", "2": "중식", "3": "일식", "4": "한식 또는 그외"}',
          activityType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 50,
          content: "영화 속 주인공의\n매력포인트는 무엇인가요?",
          options:
            '{"1": "얼굴", "2": "몸매", "3": "주인공 캐릭터의 성격", "4": "분위기 또는 그 외"}',
          activityType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 51,
          content: "오늘은\n어떤 쇼핑을 하셨나요?",
          options:
            '{"1": "패션 관련 쇼핑", "2": "식용품 관련 쇼핑", "3": "가구 등 인테리어 관련 쇼핑", "4": "그 외"}',
          activityType: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 52,
          content: "이번 여행의\n가장 행복했던 순간은?",
          options:
            '{"1": "친구들과 드라이브~", "2": "맛있는 음식을 먹었을 때!", "3": "일상에서 벗어나 즐기는 여유~", "4": "새로운 사람들과의 만남 등 그 외"}',
          activityType: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 53,
          content: "오늘의 운동에\n점수를 매기자면?",
          options:
            '{"1": "1점. 나는 쓰레기야.", "2": "2점. 조금 부족해. 더 할 수 있는데ㅠㅠ", "3": "3점. 오늘도 열심히 했군. 역시 나야", "4": "4점. 오늘 상태 최상. 이보다 더 좋은 적 없다!"}',
          activityType: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 54,
          content: "받은 미용에 대한\n본인의 만족도는?",
          options:
            '{"1": "1점. 화나네? 내가 해도 이것보단 나음", "2": "2점. 엥 돈이 아까움. 그래도 해버렸으니 뭐..", "3": "3점. 음~ 그럭저럭 잘 됐군", "4": "4점. 와 이걸 이 가격에? 미쳤다 완전 만족"}',
          activityType: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 55,
          content: "이번 드라이브의\n매력 포인트는?",
          options:
            '{"1": "함께한 사람 ❤️", "2": "끝내주는 바깥 풍경", "3": "차안에서 흘러나오는 나의 18번곡", "4": "그 외"}',
          activityType: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 56,
          content: "피크닉 간 곳의\n풍경은 어땠나요?",
          options:
            '{"1": "그대여~그대여~ 꽃과 함께하는 🌸엔딩", "2": "시원한 물가에서 즐기는 피크닉", "3": "잔잔한 바람을 느끼며 공원 피크닉", "4": "놀이 동산에서 즐기는 피크닉 등 그 외"}',
          activityType: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 57,
          content: "캠핑을\n다녀온 후기는?",
          options:
            '{"1": "모기가 너무 많아서 짜쯩zi대로다~~", "2": "자연을 즐기며 여유를 되찾은 나는 자연인이다", "3": "누구야! 누가 밤중에 곡소리를 내었는가!!!!", "4": "오랜만에 만난 좋은사람들과 좋은 시간을!"}',
          activityType: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 58,
          content: "게임 후\n함께 게임한 동료들의 상태는?",
          options:
            '{"1": "미안.. 내가 할 말이 없다..", "2": "야~ 내 덕 많이 봤지!? 나 봤냐?? 봤어?", "3": "피곤 한가득. 말이 없다.", "4": "말해 뭐해 우리는 환상의 궁합"}',
          activityType: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 59,
          content: "전시를 감상하고 난 뒤\n느낌은 어땠나요?",
          options:
            '{"1": "예술의 세계로 빠저든다.", "2": "사진 찍느라 감상을 못한 것 같다.", "3": "엥 이게 무슨 전시야. 나도 하겠다!", "4": "뭣이 중헌디~ 함께하는 사람이 좋으면 됐지~"}',
          activityType: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 60,
          content: "날씨로 인해\n겪은 고충이 있다면?",
          options:
            '{"1": "망할 기상청.", "2": "더워서 일사병 걸리기 일보 직전🌞", "3": "왜 비가 오는날엔 우산이 없을까 🌧", "4": "콜록콜록. 이미 감기 걸림️"}',
          activityType: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "평소에 약속을 잡을 때\n불편한 점이 있나요?",
          options:
            '{"1": "친구들과 스케줄 조절하는 것이 힘들다.", "2": "친구들이 연락을 잘 보지 않는다.", "3": "약속 장소를 정하는 데 결정장애가 있다.", "4": "친구들이 제시간에 오지 않는다."}',
          activityType: 999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Buzzy앱의 어떤 부분이\n가장 인상 깊었나요?",
          options:
            '{"1": "아이디어", "2": "화면 구성", "3": "디자인", "4": "기능"}',
          activityType: 999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "사용성에 있어서 가장\n불편한 점은 무엇인가요?",
          options:
            '{"1": "글씨 크기가 작다.", "2": "버튼이 작다.", "3": "기능이 어렵다.", "4": "불편한 점 없다."}',
          activityType: 999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Buzzy앱에\n별점을 준다면?",
          options: '{"1": "★★★★★", "2": "★★★★", "3": "★★★", "4": "★★"}',
          activityType: 999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Buzzy앱을 누구와 가장\n많이 사용하실 예정인가요?",
          options: '{"1": "친구", "2": "가족", "3": "연인", "4": "혼자"}',
          activityType: 999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "하루 일과를 기록할 때\n평소 어떻게 기록하나요?",
          options:
            '{"1": "날짜, 시간 정보만 기입", "2": "사진/그림 일기", "3": "오늘 하루의 장황한 설명", "4": "머리 속에 기록"}',
          activityType: 999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "연령대가\n어떻게 되시나요?",
          options: '{"1": "10대", "2": "20대", "3": "30대", "4": "40대 이상"}',
          activityType: 1000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Buzzy앱에 추가되었으면\n하는 기능을 알려주세요.",
          options: "{}",
          activityType: 1000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Buzzy팀에게 응원의\n한 마디를 작성해 주세요.",
          options: "{}",
          activityType: 1000,
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
