(function(){
	window.Ball = Class.extend({
		init: function(){
			this.w = 27;
			this.h = 27;
			this.x = game.canvas.width / 2 - this.w / 2;
			this.y = game.racket.y - this.h;
			this.angle = -90;
			this.speed = 6;
		},
		render: function(){
			game.ctx.drawImage(game.images.ball, this.x, this.y);
		},
		update: function(){
			if(game.state == 0){
				this.x = game.racket.x + game.racket.w / 2 - this.w / 2;
				this.y = game.racket.y - this.h;
			}else if(game.state == 1){
				this.x += Math.cos(this.angle * Math.PI / 180) * this.speed;
				this.y += Math.sin(this.angle * Math.PI / 180) * this.speed;
				//判断是否撞到顶边
				if(this.y < 0){
					this.angle = 360 - this.angle;
				}
				//判断是否撞到左边和右边
				if(this.x < 0 || this.x > game.canvas.width - this.w){
					this.angle = 180 - this.angle;
				}
				//判断是否撞到挡板
				if(this.x >= game.racket.x - this.w / 2 && this.x <= game.racket.x + game.racket.w - this.w / 2){
					if(this.y >= game.racket.y - this.h && this.y <= game.racket.y - this.h / 2){
						this.angle = 360 - this.angle + (this.x + this.w / 2 - game.racket.x - game.racket.w / 2) * 0.5;
					}
				}
				if(this.y > game.racket.y - this.h && this.y < game.racket.y + game.racket.h){
					if(this.x >= game.racket.x - this.w && this.x < game.racket.x - this.w / 2 || this.x > game.racket.x + game.racket.w - this.w / 2 && this.x <= game.racket.x + game.racket.w){
						this.angle = 180 - this.angle;
					}
				}
				//检测游戏失败
				if(this.y >= game.canvas.height){
					game.state = 0;
					this.angle = -90;
				}
			}
		}
	});
})();
