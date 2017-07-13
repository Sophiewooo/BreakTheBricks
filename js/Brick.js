 (function(){
	window.Brick = Class.extend({
		init: function(row,col,color){
			this.w = 94;
			this.h = 36;
			//合法值0~5
			this.r = row;
			//合法值0~8
			this.c = col;
			//合法值1~5
			this.color = color;
			this.x = 100 + 97 * this.c;
			this.y = 80 + 40 * this.r;
		},
		render: function(){
			game.ctx.drawImage(game.images.brick, (this.color - 1) * 97, 0, this.w, this.h, this.x, this.y, this.w, this.h);
		},
		update: function(){
			if(game.ball.x + game.ball.w / 2 >= this.x - 1.5 && game.ball.x + game.ball.w / 2 <= this.x + this.w + 1.5){
				if(game.ball.y <= this.y + this.h && game.ball.y >= this.y + this.h - game.ball.h / 2 || game.ball.y >= this.y - game.ball.h && game.ball.y <= this.y - game.ball.h / 2){
					game.ball.angle = 360 - game.ball.angle;
					game.bm.bricks[this.r][this.c] = null;
				}
			}
			if(game.ball.y >= this.y - 2 - game.ball.h / 2 && game.ball.y <= this.y + this.h + 2 - game.ball.h / 2){
				if(game.ball.x > this.x - game.ball.w && game.ball.x < this.x - 1.5 -game.ball.w / 2 || game.ball.x < this.x + this.w && game.ball.x > this.x + this.w + 1.5 - game.ball.w / 2){
					game.ball.angle = 180 - game.ball.angle;
					game.bm.bricks[this.r][this.c] = null;
				}
			}
		}
	});
})();
