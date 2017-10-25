var http = require('http');

var configuracoes = {
	hostname: 'localhost',
	port: '3300',
	path: '/produtos',
	headers: {
		'Accept':'application/json'
	}
}

http.get(configuracoes, function(res){
	res.on('data', function(body){
		console.log(body);
	})
})