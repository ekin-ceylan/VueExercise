new Vue({
    el: '#app',
    data: {
        playerHeal: 100,
        monsterHeal: 70,
        gameIsOn: false,
        logs: []
    },
    methods: {
        startGame: function () {
            this.playerHeal = 100;
            this.monsterHeal = 100;
            this.gameIsOn = true;
            this.logs = [];
            this.log('player-turn', 'Oyun Başladı.');
        },
        attack: function () {
            let point = Math.ceil(Math.random() * 10);
            this.monsterHeal -= point;
            this.log('player-turn', 'Oyuncu Saldırdı: ' + point);
            this.logs.push();
            this.monsterAttack();
        },
        specialAttack: function () {
            let point = Math.ceil(10 + Math.random() * 10);
            this.monsterHeal -= point;
            this.log('player-turn', 'Özel Saldırı: ' + point);
            this.monsterAttack();
        },
        healUp: function () {
            let point = Math.ceil(Math.random() * 20);
            this.playerHeal += point;
            this.log('player-turn', 'İlk Yardım: ' + point);
            this.monsterAttack();
        },
        giveUp: function () {
            this.gameIsOn = false;
            this.log('player-turn', 'Oyuncu Pes Etti.');
            this.logs.push();
        },
        monsterAttack: function () {
            let point = Math.ceil(Math.random() * 15);
            this.playerHeal -= point;

            this.log('monster-turn', 'Canavar Saldırdı: ' + point);
        },
        log: function(turn, text){
            this.logs.push({ turn , text });
        }
    },
    watch: {
        playerHeal: function (value) {
            if (value < 0) {
                this.playerHeal = 0;
            }else if(value === 0){
                this.gameIsOn = false;
                this.log( 'monster-turn', 'Canavar Kazandı!');
            } else if (value > 100) {
                this.playerHeal = 100;
            }
        },
        monsterHeal: function (value) {
            if (value < 0) {
                this.monsterHeal = 0;
            } else if(value === 0){
                this.gameIsOn = false;
                this.log( 'player-turn', 'Oyuncu Kazandı!');
            }
        }
    }
});