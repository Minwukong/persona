 //<![CDATA[
    // // 사용할 앱의 JavaScript 키를 설정해 주세요.
    Kakao.init('c74a43f8c57c31eb049ea7ff35fb3b59');
    // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
    Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: 'Persona',
        description: '재미있는 성향 테스트 모음',
        imageUrl: 'https://ifh.cc/g/VfxFER.png',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com'
        }
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845
      },
      buttons: [
        {
          title: '테스트 하러 가기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com'
          }
        },
       
      ]
    });
  //]]>