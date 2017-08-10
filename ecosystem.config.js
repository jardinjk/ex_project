module.exports={
	apps:[{
		name:'ex_project',
		script:'index.js'
	}],
	deploy:{
		production:{
			user:'jk',
			host:'ec2-',
			key: '~/.ssh/',
			ref:'origin/mater',
			repo:'git@github.com:jardinjk/ex_project.git',
			path:'home/jk/Code/ex_project',
			'post-deploy':'npm install && pm2 startOrRestart ecosystem.config.js'
		}
	}
}