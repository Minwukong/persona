let test = new Vue({
    el: '#test',
    data: {
        intro: '테스트를 시작합니다',
        title: '생일 선물로 보는 연애 심리테스트',
        currentIndex: 0,
        qna: [],
        result: ''
    },
    mounted: function(){
        $('#intro').show();
        $('#main').hide();
        $('#result').hide();

        this.insertQna('Q1. 기다리고 기다리던 여름 휴가! 드디어 여행지에 도착한 당신\n어떤 사진을 제일 먼저 찍으실건가요?',["우선 내얼굴만 담은 셀카부터 찍는다","여행 메이트와 함께 찍는다","관강지에서 독사진을 찍는다","배경을 중심으로 찍는다","배경사진만 찍는다"], null);
    },
    methods: {
          insertQna: function(q, a, t) {
            const item = {
                q: q,
                a: a,
                r: '',
                t: t
            };
            // qna 배열에 삽입
            this.qna.push(item);
        },
        start: function() {
            $('#intro').hide();
            $('#main').show();
            $('#result').hide();

            const self = this;
            setTimeout(function() {
                if(typeof self.qna[0].t != 'undefined' && self.qna[0].t != null) {
                    $('#q0a0').attr('type', self.qna[0].t);
                    $('#q0a0').focus();
                }
            }, 200);
        },
        next: function () {
            const self = this;
            if(this.currentIndex < this.qna.length-1) {
                this.currentIndex++;
                if(typeof this.qna[this.currentIndex].t != 'undefined' && this.qna[this.currentIndex].t != null) {
                    setTimeout(function() {
                        $('#q'+self.currentIndex+'a0').attr('type', self.qna[self.currentIndex].t);
                        $('#q'+self.currentIndex+'a0').focus();
                    }, 200);                    
                }
            } else {
                const check = true;
                for(let i=0; i < this.qna.length; i++) {
                    if(this.qna[i].r === '') {
                        check = false;
                    }
                }
                if(check) {
                    this.showResult();
                } else {
                    alert("아직 완료되지 않았습니다.");
                }
            }
        },
        prev: function () {
            const self = this;
            if(this.currentIndex > 0) {
                this.currentIndex--;
                if(typeof this.qna[this.currentIndex].t != 'undefined' && this.qna[this.currentIndex].t != null) {
                    setTimeout(function() {
                        $('#q'+self.currentIndex+'a0').attr('type', self.qna[self.currentIndex].t);
                        $('#q'+self.currentIndex+'a0').focus();
                    }, 200);                    
                }
            } else {
                alert('첫 질문입니다.');
            }
        },
        showResult: function() {
          
            const key = this.qna[0].r
            switch (key) {
                case "우선 내얼굴만 담은 셀카부터 찍는다":
                    this.result =  `당신은 여러 사람들 앞에 서기 좋아하고 무엇이든 열정적으로 일을
                                    처리하는 행동파입니다 또한 자신감이 넘치고 다른 사람들보다 눈에 띄는 것을 좋아합니다`
                    $('#main').hide();
                    $('#result').show();
                    break;

                    case "여행 메이트와 함께 찍는다":
                    this.result =  `당신은 대인과계를 중요하게 생각하는 사람입니다
                                    무슨 일이든 성실하게 임하는 솔선수범형이라고 할 수 있죠
                                    윗 사람에게는 예의가 바르고 주변 친구들에게 인기가 많은 타입입니다`
                    $('#main').hide();
                    $('#result').show();
                    break;

                 
                    case "관강지에서 독사진을 찍는다":
                    this.result = `당신은 성실한 성격의 노력파입니다 이상이 높고 성취욕이 강한 유형이죠
                                    스스로에게 엄격한 편이며 무엇이든지 열심히 하는 사람입니다`
                    $('#main').hide();
                    $('#result').show();
                    break;

                    case "배경을 중심으로 찍는다":
                        this.result = `당신은 감수성이 예민한 개성파입니다 상상력이 풍부하고
                                        섬세한 미적 감각을 겸비한 로맨티스트죠 감정의 기복이 심하고 개성이 강한 편입니다`
                        $('#main').hide();
                        $('#result').show();
                        break;

                    case "배경사진만 찍는다":
                        this.result = `인물 없이 배경만을 담는 당신 타인과의 친밀한 관계를 부담스러워하는
                                        고독한 사람일 가능성이 높습니다 타인에 대해서 선입견이나 편경을 갖지 않고
                                        주변의 소문에 쉽게 휩쓸리지 않는 성격입니다`
                        $('#main').hide();
                        $('#result').show();
                        break;
            
                default:
                    this.result = '잘못됐어 뭔가';
                    $('#main').hide();
                    $('#result').show();
                    break;
            }
            // this.result =  'Q1. 선택한 샌드 = '+this.qna[0].r+'\n=> 사람들이 나를 보는 모습\n\n';
            // $('#main').hide();
            // $('#result').show();
        }
    }
});

