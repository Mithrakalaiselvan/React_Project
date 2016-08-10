module.exports = {

	entry:[
	'./source/app.jsx'],
	output:{
		path:'bundle',
		filename:"bundle.js"
	},
	module:{
		loaders:[{
			test:/\.jsx?$/,
			loader:'babel'
		}]
	}
};