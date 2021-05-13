let test = new Vue({
    el: '#test',
    data: {
        intro: '테스트를 시작합니다',
        title: '샌드위치 테스트',
        currentIndex: 0,
        qna: [],
        result: ''
    },
    mounted: function(){
        $('#intro').show();
        $('#main').hide();
        $('#result').hide();

        this.insertQna('Q1. 당신은 점심시간에 샌드위치를 먹으러 식당에 들어갔다. 그렇다면 다음의 샌드위치 메뉴 중에서 어느 것을 선택하겠는가?', ['참치 샌드위치', '햄 샌드위치', '계란 샌드위치', '야채 샌드위치', '믹스 샌드위치'], null);
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
                case "참치 샌드위치":
                    this.result =  '선택한 샌드 = '+this.qna[0].r+'\n\n=> 생각해보고 행동하는 신중파\n\n\n\n'+
                    `=> 고기를 좋아하지 않거나 혹은 체중에 신경을 쓰는 사람은 생선이라면 뚱뚱해지지 않겠지 하고
                    생각하여 참치 샌드위치를 고르는 경향이 있다. 또한 참치 샌드위치를 고른 사람은 일반적으로 취향이 까다로워 

                        이것저것 생각해 보고 행동하는 신중파이다.`
                    $('#main').hide();
                    $('#result').show();
                    break;

                    case "햄 샌드위치":
                    this.result =  '선택한 샌드 = '+this.qna[0].r+'\n\n=> 거침없는 팔방미인\n\n\n\n=>'+
                    `문제가 생겨도 그다지 끙끙대며 고심하지 않는 산뜻한 타입 이다.

                    거기에다 누구와도 금방 어울릴 수 있는 순응성도 갖추 고 있다. 
                    자기 주장을 관철시키려고 무리하는 경우도 없으며 
                    상대방의 페이스에 자신을 맡춰 주려고 하기 때문에 
                    친구들로 부터 인기가 있고 인관 관계도 좋다.
                    
                    그렇기 때문에 팔방미인으로 보일 수 있다.`
                    $('#main').hide();
                    $('#result').show();
                    break;

                 
                    case "계란 샌드위치":
                    this.result =  '선택한 샌드 = '+this.qna[0].r+'\n\n=> 깨끗하고 순수한영혼\n\n\n\n=>'+
                    `누군가에게 의지하고 싶다거나 응석 부리고 싶어하는 기분이 마음속 어딘가에 있지만 
                    대부분의 경우 가만히 참는 성실한 사람으로, 착한 마음을 가지고 있다.

                    또 순진해서잘못된 것 은 절대로 그냥 넘어가지 않는 결벽증도 있다.
                    
                    단, 상대방에 대해서도 결벽증이 심해 그 결과 상대방에게 크게 실망해 버리는 점도 있으므로 
                    자신에게도 타인에게도 때로는 관대함을 베풀 필요가 있을 것 같다.`
                    $('#main').hide();
                    $('#result').show();
                    break;

                    case "야채 샌드위치":
                        this.result =  '선택한 샌드 = '+this.qna[0].r+'\n\n=> 조용한 노력가\n\n\n\n=>'+
                        `매사에 무리하지 않는 소극적인 타입이다.

                        자기가 원하는 일이 있어도 그것을 표현하려고 하지 않는 인내심이 있고, 
                        외면상으로는 얌전한 듯 보이지만 자존심이 강한 노력가로 끈기가 있다.
                        
                        보통 때 당신은 소극적으로 행동했기 때문에 "이 사람이 이렇게 용감했나"하고 주위 사람들을 놀라게 하기도 한다.`
                        $('#main').hide();
                        $('#result').show();
                        break;

                    case "믹스 샌드위치":
                    this.result =  '선택한 샌드 = '+this.qna[0].r+'\n\n=> 능수능란한 사교쟁이\n\n\n\n=>'+
                    `사람 사귐이 능숙한 사교가 타입이다.

                    어떤 일이라도 능숙히 처리하는 안전제일 주의자로 적응력이 뛰어나다.
                                    
                    또한 어디를 가더라도 사람들과 금방 친해질 수 있는 사람으로, 
                    때로는 자신을 적대시하는 사람을 자기편으로 끌어들이는 신비한 매력도 있다.`
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

