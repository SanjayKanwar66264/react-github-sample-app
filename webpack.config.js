module.exports = {
	entry:'./app/App.js',
	output:{
		path:'./',
		filename:'public/bundle.js'
	},
	devServer:{
		inline:true,
		port: 2000
	},
	module:{
		loaders:[{
			test:/\.js$/,
			exclude:/node_modules/,
			loader:'babel',
			query:{
				presets:['es2015', 'react']
			}
		}
		]
	}
}