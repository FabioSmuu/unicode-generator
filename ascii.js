function chars(min = 1, max = 99999999) {
	this.min = min
	this.max = max
	
	this.rand = function(min, max) {
		return String.fromCharCode(min + Math.floor((max - min) * Math.random()))
	}
	
	this.gerar = function(count = 1) {
		let code = this.rand(this.min, this.max)
		for(let i = 0; i < count-1; i++){
			code += this.rand(this.min, this.max)
		}
		return code	
	}
}

console.log(new chars().gerar(15))
