let test = new Vue({
    el: '#test',
    data: {
        intro: '테스트를 시작 합니다',
        title: '샘플 테스트',
        index: 0,
        question: [],
        answer: [],
        selection: [],
        result: ''
    },
    mounted: function(){
        $('#intro').show();
        $('#main').hide();
        $('#result').hide();

        this.question.push('커피와 술 중에 즐겨 마시는 것은?')
        this.answer.push(['커피','술']);
    },
    methods: {
        start: function(){
            $('#intro').hide();
            $('#main').show();
            $('#result').hide();
        },
        prev: function(){
            alert('prev test');
        },
        next: function(){
            $('#intro').hide();
            $('#main').hide();
            $('#result').show(); 
            this.result = this.answer[0][this.selection[0]] + '을(를) 좋아하는 타입입니다'
        }
    }
});

