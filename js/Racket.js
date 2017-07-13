(function(){
	window.Racket = Class.extend({
		init: function(){
			this.w = 179;
			this.h = 37;
			this.x = game.canvas.width / 2 - this.w / 2;
			this.y = 600;
			this.bindListener();
		},
		render: function(){
			game.ctx.drawImage(game.images.racket, this.x, this.y);
		},
		bindListener: function(){
			var self = this;
			game.canvas.addEventListener("mousemove", function(event){
				self.x = event.offsetX - self.w / 2;
				self.x > game.canvas.width - self.w && (self.x = game.canvas.width - self.w);
				self.x < 0 && (self.x = 0);
			});
			game.canvas.addEventListener("mousedown", function(){
				game.state = 1;
			});
		}
	});
})();
