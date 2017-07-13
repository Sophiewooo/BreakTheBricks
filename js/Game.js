(function(){
	//Game是核心类
	window.Game = Class.extend({
		init: function(paramsJSON){
			var self = this;
			//fps表示每秒多少帧，默认值60
			this.fps = paramsJSON.fps || 120;
			//我的帧工具
			this.frameUtil = new FrameUtil();
			this.canvas = document.getElementById(paramsJSON.canvasId);
			this.ctx = this.canvas.getContext("2d");
			this.images = null;
			this.sr = new StaticResourcesUtil();
			this.sr.loadImages("setup.json",function(alreadyLoadNum, allNum, imagesObj){
				//回调函数中的this指向window
				self.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
				self.ctx.font = "20px 黑体";
				self.ctx.fillStyle = "white";
				self.ctx.fillText("正在加载 " + alreadyLoadNum + " / " + allNum, this.canvas.width / 2 - 70, this.canvas.height / 2 - 8);
				if(alreadyLoadNum == allNum){
					self.images = imagesObj;
					self.run();
				}
			});
			//游戏状态：合法值为0、1，0表示ball黏在racket上，1表示ball弹出
			this.state = 0;
		},
		run: function(){
			//setInterval中函数的this指向window
			var self = this;
			//创建角色
			this.bm = new BrickManager();
			this.racket = new Racket();
			this.ball = new Ball();
			this.timer = setInterval(function(){
				self.mainloop();
			}, 1000 / self.fps);
		},
		//主循环，每帧执行
		//需要计算实际帧率，因为主循环复杂时，一帧的执行时间变长，帧率下降
		mainloop: function(){
			//清屏
			this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
			this.bm.render();
			this.bm.update();
			this.racket.render();
			this.ball.render();
			this.ball.update();
			this.frameUtil.update();
			//打印fps
			this.ctx.font = "16px Consolas";
			this.ctx.fillStyle = "white";
			this.ctx.fillText("FPS / " + this.frameUtil.realFps, 10, 20);
			//打印帧序号
			this.ctx.fillText("FNO / " + this.frameUtil.currentFrame, 10, 40);
		}
	});
})();
