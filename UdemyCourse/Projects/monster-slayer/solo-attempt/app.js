new Vue({
	el: '#app',
	data: {
		gameStatus: {
			gameStarted: false,
			gameLoading: false,
		},
		healthStatus: {
			myHealth: 1,
			monHealth: 1,
		},
		gameMoves: {
			myAttack: null,
			monAttack: null,
			mySpecAttack: null,
			myHealing: null,
		},
		widths: {
			player: 1,
			monster: 1
		},
		styles: {
			heal: {
				color: 'green',
				backgroundColor: 'lightgreen' 
			},
			attack: {
				color: 'blue',
				backgroundColor: 'lightblue',
			},
			damage: {
				color: 'red',
				backgroundColor: 'lightcoral'
			}
		},
		log: []
	},
	computed: {
		gameOver: function()  {
			if(this.healthStatus.myHealth === 0 || this.healthStatus.monHealth === 0) {
				console.log('GameOver');
				return 1;
			}
		}
	},
	methods: {
		generateRandom: function() {
			let moves = this.gameMoves;
			moves.myAttack = Math.floor(Math.random() * 10) + 1;
			moves.monAttack = Math.floor(Math.random() * 15) + 1;
			moves.mySpecAttack = Math.floor(Math.random() * 25) + 1;
			moves.myHealing = Math.floor(Math.random() * 15) + 5;
		},
		startGame: function() {
			let game = this.gameStatus;
			let health = this.healthStatus;
			let widths = this.widths;
			let width = 0;

			game.gameLoading = true;
			
			let interval = setInterval(function() {
				console.log('interval')
				if(health.myHealth < 100) {
					health.myHealth += 1;
					health.monHealth += 1;
					width = health.myHealth;
					widths.player = width;
					widths.monster = width;
				} else {
					clearInterval(interval);
					game.gameLoading = false;
					game.gameStarted = true;
				}
			}, 25)
		},
		giveUp: function() {
			this.log = [];
			this.gameStatus.gameStarted = false;
			this.healthStatus.myHealth = 50;
			this.healthStatus.monHealth = 50;
			this.widths.monster = this.healthStatus.monHealth;
			this.widths.player = this.healthStatus.myHealth;
		},
		attackTurn: function() {
			this.generateRandom();
			let myAttack = this.gameMoves.myAttack;
			let monAttack = this.gameMoves.monAttack;
			let health = this.healthStatus;
			let widths = this.widths;
			health.myHealth >= monAttack 
				? health.myHealth -= monAttack
				: health.myHealth = 0
			health.monHealth >= myAttack 
				? health.monHealth -= myAttack
				: health.myHealth = 0;
			widths.monster = health.monHealth;
			widths.player = health.myHealth;
			this.updateLog(myAttack, monAttack)
		},
		specialAttack: function() {
			this.generateRandom();
			let mySpecAttack = this.gameMoves.mySpecAttack;
			let monAttack = this.gameMoves.monAttack;
			let health = this.healthStatus;
			let widths = this.widths;
			health.myHealth >= monAttack 
				? health.myHealth -= monAttack
				: health.myHealth = 0
			health.monHealth >= mySpecAttack 
				? health.monHealth -= mySpecAttack
				: health.monHealth = 0
			widths.monster = health.monHealth;
			widths.player = health.myHealth;
			this.updateLog(mySpecAttack, monAttack)
		},
		healMyself: function() {
			this.generateRandom();
			let health = this.healthStatus;
			let moves = this.gameMoves;
			let healRoundHealth = moves.myHealing - moves.monAttack;
			(health.myHealth + healRoundHealth) >= 100
				? health.myHealth = 100
				: health.myHealth += healRoundHealth;
			this.widths.player = health.myHealth;
			this.updateLog(null, moves.monAttack, moves.myHealing)
		},
		updateLog: function(attack, damage, heal) {
			if(heal) {
				this.log.push(
					{
						type: 'heal', 
					 	message: `Player healed themselves for ${heal} points`
					 }
					)
			}
			if(attack) {
				this.log.push(
					{
						type: 'attack',
						message: `Player attacked the monster for ${attack} damage`
					}
				);
			}
			this.log.push(
				{
					type: 'damage',
					message: `Player took ${damage} from the monster`
				}
			);
			console.log(this.log);
		}
	}
})