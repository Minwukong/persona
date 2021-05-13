let test = new Vue({
    el: '#test',
    data: {
        intro: '화면 클릭 시 테스트를 시작합니다',
        title: '무인도에 조난되었다',
        currentIndex: 0,
        qna: [],
        result: ''
    },
    mounted: function(){
        $('#intro').show();
        $('#main').hide();
        $('#result').hide();

        this.insertQna("당신의 이름은?",null,'text'),

        this.insertQna('Q1. 며칠이 지났는지 모르겠다.' +
       `가벼운 타박상 외엔 다친곳이 없었다.
        안심이 되고 긴장이 풀린 순간 주변을 보니 마침 사과나무가 한 그루 있다.
        사과를 얼마나 어떻게 먹을것인가?`,null,'text'),

        this.insertQna(`Q2. 사과를 먹고 난 당신은 무인도를 둘러보기로 하고 계속 걷다보니 두 갈래 길이 나왔다.
        하나는 일직선으로 쭉 뻗은 큰 길, 또 하나는 굽이굽이 구불거리는 오솔길
        어떤 길을 선택할 것인가?`,["쭉 뻗은 큰 길","구불거리는 오솔길"]),

        this.insertQna(`Q3. 길을 지나니 당신 눈앞에는 건물이 하나 보인다.
        당신이 본 건물은 어떤 건물이었을까?`,["큰 호화 저택","작은 오두막","통나무로 만들어진 튼튼한 집","절벽아래 있는 임시 움막"]),

        this.insertQna(`Q4. 그 건물에는 문이 있었다.
        문은 미는 물일까? 당기는 문일까?`,["미는 문","당기는 문"]),

        this.insertQna(`Q5. 문을 열고 들어가니 자신을 반겨주는 생물체가 있었다.
        그 생물체는 무엇인가?`,null,'text'),

        this.insertQna(`Q6. 그 생물체를 만났을때의 느낌은 어땠을까?`,null,'text'),

        this.insertQna(`Q7. 그 생물체가 당신에게 돌아가는 방법을 설명해주었다.
        알려준 대로 가 보니 그곳에는 당신이 살던 나라로 되돌아갈 수 있는 배가 두 척 있었다.
        하나는 빠른 모터보트, 또 하나는 천천히 가지만 고장날 염려가 없는 나룻배
        어떤 배를 선택 할 것인가?`,["모터보트","나룻배"]),

        this.insertQna(`Q8. 배를 타고 고국으로 돌아온 당신.
        당신을 제일 먼저 반겨준 것은 가족도 친구도 기자들도 아닌 왠 노인이다.
        그 노인의 표정은 어땠을까?`,null,'text'),

        this.insertQna(`Q9.노인이 간 뒤, 당신의 생존여부가 언론에 공개되고 당신은 유명인이 되었다.
        비행기 사고로 실종되었던 많은 사람들 중 유일하게 살아 돌아온 사람이 바로 당신이었기 때문...
        기자들과 긴 인터뷰를 마치고 가려는데, 한 기자가 헐레벌떡 뛰어오며 그 동안 당신의 소감을 묻는다.
        당신은 뭐라고 했을까? (한마디로 작성)`,null,'text');
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

            let answerB = this.qna[2].r
            let answerC = this.qna[3].r
            let answerD = this.qna[4].r
            let answerG = this.qna[7].r 

            let resultRoad
            let resultDoor
            let resultHome
            let resultShip
            
            if( answerB == "쭉 뻗은 큰 길"){
                resultRoad = "굴곡이 별로 없는 완만한 인생을 살아왔고"
            }else{
               resultRoad = "굴곡이 심한 인생을 살아왔고"
            };

            if( answerD == "미는 문"){
                resultDoor = "당신은 대채로 외향적인 성격을 가졌습니다"
            }else{
                resultDoor = "당신은 대채로 내성적인 성격을 가졌습니다"
            };

            if( answerC == "큰 호화 저택"){
                resultHome = "꿈과 포부가 누구보다 큽니다."
            }if( answerC == "작은 오두막" ){
                resultHome = "꿈이 많지않으며 평범하게 살아가는것을 좋아합니다."
            }if( answerC == "통나무로 만들어진 튼튼한 집" ){
                resultHome = "꿈과 포부가 있으며 미래를 계획하고있습니다."
            }if( answerC == "절벽아래 있는 임시 움막" ){
                resultHome = "꿈과 포부보단 자유스럽게 사는것을 좋아합니다."
            };
           
            if( answerG == "모터보트"){
                resultShip = "이후 결혼생활에서 당신은 힘든일이 있을 때 그 일을 딛고 일어서는 능력이 부족합니다."
            }else{
                resultShip = "이후 결혼생활에서 당신은 힘든일이 있을 때 그 일을 딛고 일어서는 능력이 뛰어납니다."
            };
          
            this.result =  this.qna[0].r + ' 당신의 인생 스토리입니다 \n'+this.qna[1].r+`\n위와 같이 당신이 대답한 첫 질문은 당신의 부에 대한 문제였습니다.

            갯수를 숫자로 표현한 사람과 '배부를 때까지' 처럼 적당히 먹겠다고 쓴 사람은 미래에 과하지도 적지도 않게 적당히 산다는 뜻입니다.
            
            또한 '맛있게 먹고 몇개   보관한다'처럼 어딘가에 저장한다는 사람은 부자가 될 확률이 높습니다. 

            `+resultDoor + ` ` + resultRoad +`, ` + resultHome + `

            당신은 ` +this.qna[5].r+ `의 분위기를 가진 배우자를 만나게 되며 그 배우자를 처음 만났을때 당신이 느낀 첫 느낌은 `+ this.qna[6].r+ `입니다

            결혼 첫날밤을 보낸 당신의 느낌은 ` +this.qna[9].r + `
            `+ resultShip + ` 
            세월이 흘러 당신이 임종을 맞을때의 표정은 ` +this.qna[8].r+ `입니다`;
            $('#main').hide();
            $('#result').show(); 
        }
    }
});

