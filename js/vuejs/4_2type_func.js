new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            // player damage
            this.playerAttack();
            
            // monster damage
            this.monsterAttack();
        },
        specialAttack: function () {
            this.monsterHealth -= this.calculateDamage(10, 20);
            if (this.checkWin()) {
                return;
            }
            this.monsterAttack();

        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player had been heal max + 10 HP '
            })
            // this.monsterAttack();
        },
        giveUp: function () {
            this.gameIsRunning = false;
        },
        playerAttack(){
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= this.calculateDamage(3, 10);
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hit monster for '+ damage + ' Damage'
            });
            if (this.checkWin()) {
                return;
            }
        },
        monsterAttack: function(){
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= this.calculateDamage(5, 12);
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hit player for '+ damage + ' Damage'
            })
            this.checkWin();
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You Won! New Game')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else
                if (this.playerHealth <= 0) {
                    if (confirm('You Lost! New Game')) {
                        this.startGame();
                    } else {
                        this.gameIsRunning = false;
                    }
                    return true;
                }
            return false;
        }
    }
})