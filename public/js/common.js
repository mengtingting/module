// 接口部分
//基本的ajax访问后端接口类
function ajaxRequest(url, param, method, callBack) {
    console.log("url:" + url + " method:" + method + " param:" + JSON.stringify(param));
    $.ajax({
        type: method,  //提交方式
        url: url,//路径
        data: param,//数据，这里使用的是Json格式进行传输
        contentType: "application/json", //必须有
        dataType: "json",
        success: function (ret) {//返回数据根据结果进行相应的处理
            console.log("ret:" + JSON.stringify(ret));
            callBack(ret)
        },
        error: function (err) {
            console.log(JSON.stringify(err));
            console.log("responseText:" + err.responseText);
            callBack(err)
        }
    });
}
//编辑
function editXXX(url, param, callBack) {
    $.post(url, param, callBack);
}

//设置管理员状态
function setAdminStatus(url, param, callBack) {
    ajaxRequest(url + "admin/admin/setStatus/" + param.id, param, "GET", callBack);
}
//删除管理员
function delAdmin(url, param, callBack) {
    ajaxRequest(url + "admin/admin/del/" + param.id, param, "GET", callBack);
}

//设置用户状态
function setUserStatus(url, param, callBack) {
    ajaxRequest(url + "admin/user/setStatus/" + param.id, param, "GET", callBack);
}

//设置用户身份
function setUserBig(url, param, callBack) {
    ajaxRequest(url + "admin/user/setBig/" + param.id, param, "GET", callBack);
}

//设置用户推荐
function setUserRecommend(url, param, callBack) {
    ajaxRequest(url + "admin/user/setRecommend/" + param.id, param, "GET", callBack);
}

//删除团队信息
function delProjectTeam(url, param, callBack) {
    ajaxRequest(url + "admin/project/team/del/" + param.id, param, "GET", callBack);
}

//删除团队信息
function delProjectMedia(url, param, callBack) {
    ajaxRequest(url + "admin/project/media/del/" + param.id, param, "GET", callBack);
}

//删除项目路线
function delProjectRoadmap(url, param, callBack) {
    ajaxRequest(url + "admin/project/roadmap/del/" + param.id, param, "GET", callBack);
}

//删除项目合约
function delProjectSmartContract(url, param, callBack) {
    ajaxRequest(url + "admin/project/smartContract/del/" + param.id, param, "GET", callBack);
}

//删除运营人员
function delProjectOperationStaff(url, param, callBack) {
    ajaxRequest(url + "admin/project/operationStaff/del/" + param.id, param, "GET", callBack);
}

//删除投资方信息
function delProjectInvestors(url, param, callBack) {
    ajaxRequest(url + "admin/project/investors/del/" + param.id, param, "GET", callBack);
}

//删除代币分配百分比
function delProjectTokenDistribution(url, param, callBack) {
    ajaxRequest(url + "admin/project/tokenDistribution/del/" + param.id, param, "GET", callBack);
}

//删除执行过程
function delProjectProcess(url, param, callBack) {
    ajaxRequest(url + "admin/project/process/del/" + param.id, param, "GET", callBack);
}

//删除执行过程
function delProjectExchange(url, param, callBack) {
    ajaxRequest(url + "admin/project/exchange/del/" + param.id, param, "GET", callBack);
}

//删除额外信息
function delProjectExtra(url, param, callBack) {
    ajaxRequest(url + "admin/project/extra/del/" + param.id, param, "GET", callBack);
}

//删除项目语言
function delProjectLanguage(url, param, callBack) {
    ajaxRequest(url + "admin/project/language/del/" + param.id, param, "GET", callBack);
}

//发送消息
function sendSystemMessage(url, param, callBack) {
    ajaxRequest(url + "admin/messageSystem/send/" + param.id, param, "GET", callBack);
}

//删除消息语言
function delMessageLanguage(url, param, callBack) {
    ajaxRequest(url + "admin/messageSystem/language/del/" + param.id, param, "GET", callBack);
}

//删除项目官方媒体库
function delMediaLibrary(url, param, callBack) {
    ajaxRequest(url + "admin/project/mediaLibrary/del/" + param.id, param, "GET", callBack);
}

//删除项目交易所库
function delExchangeLibrary(url, param, callBack) {
    ajaxRequest(url + "admin/project/exchangeLibrary/del/" + param.id, param, "GET", callBack);
}

//删除项目投资方库管理
function delInvestorsLibrary(url, param, callBack) {
    ajaxRequest(url + "admin/project/investorsLibrary/del/" + param.id, param, "GET", callBack);
}

//删除项目官方媒体库
function delAirdropLanguage(url, param, callBack) {
    ajaxRequest(url + "admin/airdrop/language/del/" + param.id, param, "GET", callBack);
}

//删除系统配置其它语言
function delSystemLanguage(url, param, callBack) {
    ajaxRequest(url + "admin/system/language/del/" + param.id, param, "GET", callBack);
}

//删除投资方库其它语言
function delInvestorsLibraryLanguage(url, param, callBack) {
    ajaxRequest(url + "admin/project/investorsLibrary/language/del/" + param.id, param, "GET", callBack);
}

//设置空投状态
function setAirdropStatus(url, param, callBack) {
    ajaxRequest(url + "admin/airdrop/setStatus/" + param.id, param, "GET", callBack);
}

//删除项目空投
function delProjectAirdrop(url, param, callBack) {
    ajaxRequest(url + "admin/project/airdrop/del/" + param.id, param, "GET", callBack);
}

//删除项目空投语言
function delProjectAirdropLanguage(url, param, callBack) {
    ajaxRequest(url + "admin/project/airdrop/language/del/" + param.id, param, "GET", callBack);
}

//删除交易所库其它语言
function delExchangeLibraryLanguage(url, param, callBack) {
    ajaxRequest(url + "admin/project/exchangeLibrary/language/del/" + param.id, param, "GET", callBack);
}

//删除项目官方媒体库其它语言管理
function delMediaLibraryLanguage(url, param, callBack) {
    ajaxRequest(url + "admin/project/mediaLibrary/language/del/" + param.id, param, "GET", callBack);
}

//删除项目团队其它语言
function delProjectTeamLanguage(url, param, callBack) {
    ajaxRequest(url + "admin/project/team/language/del/" + param.id, param, "GET", callBack);
}

//删除官方媒体其它语言
function delProjectMediaLanguage(url, param, callBack) {
    ajaxRequest(url + "admin/project/media/language/del/" + param.id, param, "GET", callBack);
}

//删除项目团队其它语言
function delProjectroadmapLanguage(url, param, callBack) {
    ajaxRequest(url + "admin/project/roadmap/language/del/" + param.id, param, "GET", callBack);
}

//删除项目智能合约其它语言
function delProjectSmartContractLanguage(url, param, callBack) {
    ajaxRequest(url + "admin/project/smartContract/language/del/" + param.id, param, "GET", callBack);
}

//删除项目运营人员其它语言
function delProjectOperationStaffLanguage(url, param, callBack) {
    ajaxRequest(url + "admin/project/operationStaff/language/del/" + param.id, param, "GET", callBack);
}

//删除项目代币百分比其它语言
function delProjectTokenDistributionLanguage(url, param, callBack) {
    ajaxRequest(url + "admin/project/tokenDistribution/language/del/" + param.id, param, "GET", callBack);
}

//删除执行过程其它语言
function delProjectProcessLanguage(url, param, callBack) {
    ajaxRequest(url + "admin/project/process/language/del/" + param.id, param, "GET", callBack);
}

//删除执行过程其它语言
function delProjectExtraLanguage(url, param, callBack) {
    ajaxRequest(url + "admin/project/extra/language/del/" + param.id, param, "GET", callBack);
}

//设置评论状态
function setCommentStatus(url, param, callBack) {
    ajaxRequest(url + "admin/comment/setStatus/" + param.id, param, "GET", callBack);
}

//概览
function getOverView(url, param, callBack) {
    ajaxRequest(url + "admin/overview/order", param, "GET", callBack);
}

//设置项目推荐
function setProjectRecommend(url, param, callBack) {
    ajaxRequest(url + "admin/project/setRecommend/" + param.id, param, "GET", callBack);
}

//设置评论排序
function setCommentSeq(url, param, callBack) {
    ajaxRequest(url + "admin/comment/setCommentSeq/" + param.id, param, "GET", callBack);
}

//设置APP项目模块排序
function setProjectAppSeq(url, param, callBack) {
    ajaxRequest(url + "admin/project/app/setAppSeq/" + param.id, param, "GET", callBack);
}

//设置APP项目模块状态
function setProjectAppStatus(url, param, callBack) {
    ajaxRequest(url + "admin/project/app/setAppStatus/" + param.id, param, "GET", callBack);
}

//删除APP项目模块
function delProjectApp(url, param, callBack) {
    ajaxRequest(url + "admin/project/app/del/" + param.id, param, "GET", callBack);
}

//删除APP项目模块其它语言
function delProjectAppLanguage(url, param, callBack) {
    ajaxRequest(url + "admin/project/app/language/del/" + param.id, param, "GET", callBack);
}

//删除APP项目模块配置
function delAppProjectSetting(url, param, callBack) {
    ajaxRequest(url + "admin/project/app/setting/del/" + param.id, param, "GET", callBack);
}

//APP项目模块配置排序
function setProjectAppSettingSeq(url, param, callBack) {
    ajaxRequest(url + "admin/project/app/setting/setSeq/" + param.id, param, "GET", callBack);
}

//设置APP项目模块设置首页显示
function setProjectAppSettingShow(url, param, callBack) {
    ajaxRequest(url + "admin/project/app/setting/setShow/" + param.id, param, "GET", callBack);
}

//删除信息反馈对象
function delFeedbackObject(url, param, callBack) {
    ajaxRequest(url + "admin/feedback/object/del/" + param.id, param, "GET", callBack);
}

//设置信息反馈对象状态
function setFeedbackObjectStatus(url, param, callBack) {
    ajaxRequest(url + "admin/feedback/object/setStatus/" + param.id, param, "GET", callBack);
}

//删除项目空投语言
function delFeedbackObjectLanguage(url, param, callBack) {
    ajaxRequest(url + "admin/feedback/object/language/del/" + param.id, param, "GET", callBack);
}

//删除渠道号
function delChannel(url, param, callBack) {
    ajaxRequest(url + "admin/appChannel/del/" + param.id, param, "GET", callBack);
}

//删除升级版本
function delUpgrade(url, param, callBack) {
    ajaxRequest(url + "admin/appUpgrade/del/" + param.id, param, "GET", callBack);
}

//删除管理员
function delMobilePrefixs(url, param, callBack) {
    ajaxRequest(url + "admin/mobilePrefixs/del/" + param.id, param, "GET", callBack);
}

//设置宣传模块状态
function setPropagandaModuleStatus(url, param, callBack) {
    ajaxRequest(url + "admin/propagandaModule/setStatus/" + param.id, param, "GET", callBack);
}

//设置币种状态
function setCurrencyShowStatus(url, param, callBack) {
    ajaxRequest(url + "admin/currency/setShowStatus/" + param.id, param, "GET", callBack);
}

//设置提现状态状态
function setCurrencyWithdrawalStatus(url, param, callBack) {
    ajaxRequest(url + "admin/currency/setWithdrawalStatus/" + param.id, param, "GET", callBack);
}




/*
 * 百万答题js
 *
 * 2018-9-18
 *
 * By mtt
 */
function getActivityUserView(url, param, callBack) {
    ajaxRequest(url + "activityAdmin/scrolls/overview/getActivityUser", param, "GET", callBack);
}

//设置管理员状态
function setScrollsAdminStatus(url, param, callBack) {
    ajaxRequest(url + "activityAdmin/scrolls/admin/setStatus/" + param.id, param, "GET", callBack);
}

//删除管理员
function delScrollsAdmin(url, param, callBack) {
    ajaxRequest(url + "activityAdmin/scrolls/admin/del/" + param.id, param, "GET", callBack);
}

//删除答案
function delAnswer(url, param, callBack) {
    ajaxRequest(url + "activityAdmin/scrolls/answer/del/" + param.id, param, "GET", callBack);
}

//活动统计
function getStatistics(url, param, callBack) {
    ajaxRequest(url + "activityAdmin/scrolls/statistics/getStatistics",param, "GET", callBack);
}

/*
 * MICH2.0挑战活动管理后台
 *
 * 2018-11-28
 *
 * By mtt
 */
//删除答案
function delChanllengeAnswer(url, param, callBack) {
    ajaxRequest(url + "Chanllenge/answer/del/" + param.id, param, "GET", callBack);
}

//设置设置主题对应题目状态
function setThemeQuestionRelStatus(url, param, callBack) {
    ajaxRequest(url + "Chanllenge/theme/question/setStatus/" + param.id, param, "GET", callBack);
}

//删除题库语言
function delQuestionLanguage(url, param, callBack) {
    ajaxRequest(url + "Chanllenge/question/language/del/" + param.id, param, "GET", callBack);
}

//删除答案语言
function delAnswerLanguage(url, param, callBack) {
    ajaxRequest(url + "Chanllenge/answer/language/del/" + param.id, param, "GET", callBack);
}

//删除赛季语言
function delSeasonLanguage(url, param, callBack) {
    ajaxRequest(url + "Chanllenge/season/language/del/" + param.id, param, "GET", callBack);
}

//删除赛季图文语言
function delTwLanguage(url, param, callBack) {
    ajaxRequest(url + "Chanllenge/tw/language/del/" + param.id, param, "GET", callBack);
}

//删除主题语言信息
function delThemeLanguage(url, param, callBack) {
    ajaxRequest(url + "Chanllenge/theme/language/del/" + param.id, param, "GET", callBack);
}

//设置主题状态
function setThemeStatus(url, param, callBack) {
    ajaxRequest(url + "Chanllenge/theme/setStatus/" + param.id, param, "GET", callBack);
}

//设置星标主题
function setStarTheme(url, param, callBack) {
    ajaxRequest(url + "Chanllenge/theme/setStarTheme/" + param.id, param, "GET", callBack);
}

//设置题库大类状态
function setQuestionLargeClassStatus(url, param, callBack) {
    ajaxRequest(url + "Chanllenge/questionLargeClass/setQuestionLargeClassStatus/" , param, "GET", callBack);
}








//////////////////////////////////////////////////////////////////////////////////////////////////


/*
 * 校验手机号js
 *
 * By TerryQi
 */

function isPoneAvailable(phone_num) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(phone_num)) {
        return false;
    } else {
        return true;
    }
}

// 判断参数是否为空
function judgeIsNullStr(val) {
    if (val == null || val == "" || val == undefined || val == "未设置") {
        return true
    }
    return false
}

// 判断参数是否为空
function judgeIsAnyNullStr() {
    if (arguments.length > 0) {
        for (var i = 0; i < arguments.length; i++) {
            if (!isArray(arguments[i])) {
                if (arguments[i] == null || arguments[i] == "" || arguments[i] == undefined || arguments[i] == "未设置" || arguments[i] == "undefined") {
                    return true
                }
            }
        }
    }
    return false
}

// 判断数组时候为空, 服务于 judgeIsAnyNullStr 方法
function isArray(object) {
    return Object.prototype.toString.call(object) == '[object Array]';
}


// 七牛云图片裁剪
function qiniuUrlTool(img_url, type) {
    //如果不是七牛的头像，则直接返回图片
    //consoledebug.log("img_url:" + img_url + " indexOf('isart.me'):" + img_url.indexOf('isart.me'));
    if (img_url.indexOf('7xku37.com') < 0 && img_url.indexOf('isart.me') < 0) {
        return img_url;
    }
    //七牛链接
    var qn_img_url;
    const size_w_500_h_200 = '?imageView2/2/w/500/h/200/interlace/1/q/75|imageslim'
    const size_w_200_h_200 = '?imageView2/2/w/200/h/200/interlace/1/q/75|imageslim'
    const size_w_500_h_300 = '?imageView2/2/w/500/h/300/interlace/1/q/75|imageslim'
    const size_w_500_h_250 = '?imageView2/2/w/500/h/250/interlace/1/q/75|imageslim'

    const size_w_500 = '?imageView1/1/w/500/interlace/1/q/75'

    //除去参数
    if (img_url.indexOf("?") >= 0) {
        img_url = img_url.split('?')[0]
    }
    //封装七牛链接
    switch (type) {
        case "ad":  //广告图片
            qn_img_url = img_url + size_w_500_h_300
            break
        case "folder_list":  //作品列表图片样式
            qn_img_url = img_url + size_w_500_h_200
            break
        case  'head_icon':      //头像信息
            qn_img_url = img_url + size_w_200_h_200
            break
        case  'work_detail':      //作品详情的图片信息
            qn_img_url = img_url + size_w_500
            break
        default:
            qn_img_url = img_url
            break
    }
    return qn_img_url
}


// 文字转html，主要是进行换行转换
function Text2Html(str) {
    if (str == null) {
        return "";
    } else if (str.length == 0) {
        return "";
    }
    str = str.replace(/\r\n/g, "<br>")
    str = str.replace(/\n/g, "<br>");
    return str;
}

//null变为空str
function nullToEmptyStr(str) {
    if (judgeIsNullStr(str)) {
        str = "";
    }
    return str;
}


/*
 * 获取url中get的参数
 *
 * By TerryQi
 *
 * 2017-12-23
 *
 */
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}


