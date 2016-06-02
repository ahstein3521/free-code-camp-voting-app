import _ from 'lodash'

export function titleize(string){
	const str=string.split(' ')
			.map((v,i)=>{ return _.capitalize(v)})
			.join(' ')
	return _.endsWith(str,'?')? str+'?' : str		
}

export function makeList(string){
	return string.split('\n')
			.map((v,i)=>{return {name:_.capitalize(v),votes:0}})


}