import { baseUrl } from "./config.js"

export function topList(){
	return new Promise(function(reslove, reject){
		uni.request({
			url: `${baseUrl}/toplist/detail`,
			method: 'GET',
			data: {},
			success: res => {
				let result = res.data.list;
				result.length = 4;
				console.log(result);
				reslove(result);
				
			},
			fail: () => {},
			complete: () => {}
		});
	})

}
export function list(id){
	return uni.request({
		url: `${baseUrl}/playlist/detail?id=${id}`,
		method: 'GET'
	});
}
	