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

        this.insertQna('Q1. 이제 곧 당신의 생일이 다가 옵니다 마침 이성 친구가 당신의 생일 선물로 예쁜 상자를 보냈어요 상자에 무엇이 들어있을까요? ', ['옷', '수첩&소설', '귀금속&악세서리', '장미꽃다발',], null);
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
                case "옷":
                    this.result =  '당신의 마음을 빼앗는 이성이 어떤 타입인지 알아보는 테스트입니다\n\n'+this.qna[0].r+'을 선택한 당신\n\n=> 크게 조건을 따지지 않습니다 상냥하고 착한 사람에게 빠지기 쉬운 타입\n\n\n\n'+
                    `=> 당신은 비싼 선물이나 과장된 사랑의 속삭임 보다는 단지, 평소 마음을 편안하게 해줄 수 있는 작은 상냥함에 행복을 느끼는 욕심이 없는 타입입니다 
                    상대가 꼭 부유하지 않더라도 작고 따듯한 가정을 가지는 것이 당신의 작은 꿈`
                    $('#main').hide();
                    $('#result').show();
                    break;

                    case "수첩&소설":
                    this.result =  '당신의 마음을 빼앗는 이성이 어떤 타입인지 알아보는 테스트입니다\n\n'+this.qna[0].r+'을 선택한 당신\n\n=> 크게 조건을 따지지 않습니다 상냥하고 착한 사람에게 빠지기 쉬운 타입\n\n\n\n'+
                    `=> 평소 당신은 영리함이나 똑똑함이 인생에 있어 가장 큰 무기라고 생각하고 있습니다 그래서 지적인듯한 언어를 자주 구사하거나
                    뭔가 모를 상류층의 느낌을 풍기는 사람에게 당신은 쉽게 뻐져 버립니다
                    
                    만약 당신이 빠지기 쉬운 상대가 당신과 같은 취미나 목표를 가지고 있다면, 교제를 하면서 상대방의 지성과 정보를 흡수하게 되므로 당신도 점점 성장하게 될 것 입니다
                    
                    하지만 상대방에게 끌려 다니기 시작한다면 언제든 무시당할 수 있는 위험이 있으니 비굴한 태도는 절대 보이지 마세요`
                    $('#main').hide();
                    $('#result').show();
                    break;

                 
                    case "귀금속&악세서리":
                    this.result = '당신의 마음을 빼앗는 이성이 어떤 타입인지 알아보는 테스트입니다\n\n'+this.qna[0].r+'을 선택한 당신\n\n=> 다소 낭비벽이 있어 상대방이 부자였으면 좋겠다 라는 마음을 가지고 있습니다, 부유한 사람에게 빠지기 쉬운 타입\n\n\n\n'+
                     `=> 가지고 싶은 것이 너무 많아! 먹고싶은 것도 많고 늘 좋은 것만을 찾는 당신의 지갑은 늘 부족 합니다
                     그래서 그러한 소비욕구를 채워줄 수 있는 사람에게 무척이나 약한 당신
                     
                     선물의 가격은 곧 사랑의 무게라고 생각하는 가치관을 가졌을지도 모르겠네요 그래서 절대 가난한 사람은 No!
                     
                     만약 그러한 상대를 만날 기회가 생긴다면 상대가 해주는 것을 당연하다 생각 마시고 늘 상대방의 호의에 감사하는 마음을 가지세요
                     또한 당신도 상대에게 해줄 수 있는 최선을 다해야 둘의 좋은 관계가 계속 유지 될 수 있습니다`
                    $('#main').hide();
                    $('#result').show();
                    break;

                    case "장미꽃다발":
                        this.result = '당신의 마음을 빼앗는 이성이 어떤 타입인지 알아보는 테스트입니다\n\n'+this.qna[0].r+'을 선택한 당신\n\n=> 외모와 성격이 모두 TOP 클래스가 아니면 절대 No! 당신은 쉽게 타협하지도 또 누구에게도 쉽게 마음을 빼앗기지 않는 타입\n\n\n\n'+
                        `=> 당신이 첫눈에 사랑에 빠지는 일은 거의 없습니다 상대에 대한 당신의 선택은 늘 신중합니다
                        
                        외모를 보는 것은 기본 중의 기본 더불어 성격, 돈, 감각, 궁합 등 모든 요소들을 클리어 해야 비로소 본격적인 교제를 생각하게 됩니다
                        
                        당신은 얼핏 보기엔 왠지 잘 놀 것 같은 가벼운 사람처럼 비춰지기도 합니다 그래서 상대를 알아가는 준비 과정에 상대방은 이미
                        사귀는 것으로 오해할 여지가 있으니 이러한 오해는 받지 않게 주의 하시길 바랍니다`
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

