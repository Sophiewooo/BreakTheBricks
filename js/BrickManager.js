(function(){
	window.BrickManager = Class.extend({
		init: function(){
			//初始化：6行9列的地图
			this.map = [
				[1,2,3,4,5,1,2,3,4],
				[1,2,3,4,5,1,2,3,4],
				[1,2,3,4,5,1,2,3,4],
				[1,2,3,4,5,1,2,3,4],
				[1,2,3,4,5,1,2,3,4],
				[1,2,3,4,5,1,2,3,4],
			];
			this.bricks = new Array();
			for(var r = 0; r < 6; r++){
				this.bricks.push(new Array());
				for(var c = 0; c < 9; c++){
					this.bricks[r].push(null);
				}
			}
			this.createBricksByMap();
		},
		render: function(){
			for(var r = 0; r < 6; r++){
				for(var c = 0; c < 9; c++){
					this.bricks[r][c] && this.bricks[r][c].render();
				}
			}
		},
		update: function(){
			for(var r = 0; r < 6; r++){
				for(var c = 0; c < 9; c++){
					this.bricks[r][c] && this.bricks[r][c].update();
				}
			}
		},
		createBricksByMap: function(){
			for(var r = 0; r < 6; r++){
				for(var c = 0; c < 9; c++){
					this.map[r][c] && (this.bricks[r][c] = new Brick(r,c,this.map[r][c]));
				}
			}
		}
	});
})();
