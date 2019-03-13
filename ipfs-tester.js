/*
copyright 2018 luojia@luojia.me
*/
function removeEtxSlash(str){
	//remove extra slashes in the path
	try{//chrome
		var reg=new RegExp('(?<!\:)\/{2,}','g');
		return str.replace(reg,'/');
	}catch(e){//for others
		console.log('fallback')
		var rand;
		while(str.indexOf((rand=Math.random().toString()))>=0);
		return str.replace(/\:\//g,rand).replace(/\/{2,}/g,'/').replace(new RegExp(rand,'g'),':/');
	}
}
function toIPFSPath(addr){
	addr=removeEtxSlash(addr.trim());
	if(addr.startsWith('/ipns/'))return addr;
	var r;
	if(r=addr.match(/Qm[A-z\d]{44}.*$/)){
		return removeEtxSlash(`/ipfs/${r[0]}`);
	}
	throw(new Error('Cannot parse IPFS path'));
}
class fetch_controllable{
	constructor(url,opt=null){
		this.controller = new AbortController();
		this.fetch=fetch(url,Object.assign({signal:this.controller.signal,credentials: 'include'},opt));
	}
	abort(){
		this.controller.abort();
	}
	then(...args){
		this.fetch=this.fetch.then(...args);
		return this;
	}
	catch(...args){
		this.fetch=this.fetch.catch(...args);
		return this;
	}
	finally(...args){
		this.fetch=this.fetch.finally(...args);
		return this;
	}
}
function fetch_c(url,opt){
	return new fetch_controllable(url,opt);
}
class GatewayTester{
	constructor(){
		this.testingFetch_c=new Set();
	}
	stop(){
		if(this.testingFetch_c.size){
			for(let f of this.testingFetch_c){f.abort();}
		}
	}
	test(gateway,path='QmVnS9etu7B3wN9S7DwRCtM37pwx6XJ3b48ag9A8H1akAc'){
		let url=removeEtxSlash(`${gateway}${toIPFSPath(path)}`);
		let f=fetch_c(url,{
			method:'HEAD',
		}).then(res=>{
				return res;
		}).finally(()=>this.testingFetch_c.delete(f));
		this.testingFetch_c.add(f);
		return f;
	}
}
