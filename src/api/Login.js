// 登录接口
import request from "@/utils/request";

// 手机发送验证码
export const PhoneLogin = (query) =>
	request({
		method: "GET",
		url: `/captcha/sent?phone=${query}&realIP=171.212.33.193`,
	});
// 检验手机号以及验证码
export const VerifyPhone = (phoneNumber, verify) =>
	request({
		method: "GET",
		url: `/captcha/verify?phone=${phoneNumber}&captcha=${verify}&realIP=171.212.33.193`,
	});

// 用户登录 
export const UserLogin = (phoneNumber, verify) => request({
	method:'GET',
	// /login/cellphone?phone=xxx&captcha=1234
	url:`/login/cellphone?phone=${phoneNumber}&captcha=${verify}`
})
// 获取用户详情
export const GetUserInfo = (query) => request({
	method:'GET',
	url:`/user/subcount`
});
// 获取用户歌单
export const GetUserSongList = (userId) =>
	request({
		method: "GET",
		url: `/user/detail?uid=${userId}`,
	});
