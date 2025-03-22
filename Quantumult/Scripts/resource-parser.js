/** 
☑️ 资源解析器 ©𝐒𝐡𝐚𝐰𝐧  ⟦2024-11-06 19:18⟧
----------------------------------------------------------
🛠 发现 𝐁𝐔𝐆 请反馈: https://t.me/Shawn_Parser_Bot
⛳️ 关注 🆃🅶 相关频道: https://t.me/QuanX_API
📖 使用 教程: https://tinyurl.com/2jyygfom
🗣 🆃🄷🄰🄽🄺🅂 🆃🄾  @Jamie CHIEN, @M**F**, @c0lada, @Peng-YM, @vinewx, @love4taylor, @shadowdogy 

🤖 主要功能: 
❶ 将其它格式的⟦服务器订阅⟧解析成 𝐐𝐮𝐚𝐧𝐭𝐮𝐦𝐮𝐥𝐭 𝐗 格式
☑︎ 支持 𝐕2𝐫𝐚𝐲𝐍/𝗦𝗦(𝗥/𝗗)/𝗛𝗧𝗧𝗣(𝗦)/𝗧𝗿𝗼𝗷𝗮𝗻/𝐕𝐋𝗲𝐬𝐬/𝗤𝘂𝗮𝗻𝘁𝘂𝗺𝘂𝗹𝘁(𝗫)/𝗦𝘂𝗿𝗴𝗲/𝐂𝐥𝐚𝐬𝐡/𝐒𝐡𝐚𝐝𝐨𝐰𝐫𝐨𝐜𝐤𝐞𝐭/𝐋𝐨𝐨𝐧 格式
☑︎ 提供说明 1⃣️ 中的可选个性化参数(筛选、重命名 等)
❷ 𝗿𝗲𝘄𝗿𝗶𝘁𝗲(重写) & 𝗳𝗶𝗹𝘁𝗲𝗿(分流) 的 转换 & 筛选 
☑︎ 用于禁用/修改远程引用中某(几)项 𝗿𝗲𝘄𝗿𝗶𝘁𝗲/𝗵𝗼𝘀𝘁𝗻𝗮𝗺𝗲/𝗳𝗶𝗹𝘁𝗲𝗿
☑︎ 𝐒𝐮𝐫𝐠𝐞/𝐂𝐥𝐚𝐬𝐡 类型规则 𝗹𝗶𝘀𝘁 与 模块 𝐦𝐨𝐝𝐮𝐥𝐞 的解析使用
----------------------------------------------------------
0️⃣ 在 ⟦订阅链接⟧ 后加 "#" 使用, 不同参数用 "&" 连接 
⚠️ ☞ "你的订阅连接#emoji=1&tfo=1&in=香港+台湾"
❖ 本地资源片段引用, 请将参数如 "#in=xxx&out=yyy" 填入资源片段的第 ① 行
❖ 🚦 支持中文, "操作" 以下特殊字符时请先替换(URL-Encode) 🚦
  ∎ "+"⇒"%2B", 空格⇒"%20", "@"⇒"%40", "&"⇒"%26", "."⇒"\.", ","⇒"%2C"

1️⃣ ⟦𝐬𝐞𝐫𝐯𝐞𝐫 节点⟧ ➠ 参数说明:
⦿ emoji=1(国行设备用2)/-1, 添加/删除节点名内地区旗帜;
⦿ udp=1/-1, tfo=1/-1, 分别强制开启(关闭) 𝐮𝐝𝐩-𝐫𝐞𝐥𝐚𝐲/𝐟𝐚𝐬𝐭-𝐨𝐩𝐞𝐧;
⦿ uot=1, 开启 udp-over-tcp=true选项（仅限SS(R)）
⦿ cert=1/-1, 分别开启/关闭 𝐭𝐥𝐬 证书验证(默认关闭);
  ❖ csha/psha, tls-cert-sha256 以及 tls-pubkey-sha256 参数
  ❖ alpn, 指定over-tls类型节点的alpn参数
⦿ in, out, regex, regout 分别为 保留、删除、正则保留、正则删除 节点;
  ❖ in/out 仅对节点名匹配生效, 多参数(逻辑"或")用 "+", 逻辑"与"用 "." 表示;
  ❖ regex/regout 对节点的完整信息进行匹配(类型、端口、加密等);
  ❖ 示范: "in=香港.0\.2倍率+台湾&out=BGP&regex=iplc"
⦿ rename 重命名, "旧名@新名", "前缀@", "@后缀", 用 "+" 连接多个参数;
  ❖ 删除字段: "字段1.字段2☠️", 想删除 "." 时用 "\." 替代
  ❖ 示范: "rename=香港@𝐇𝐊+[𝐒𝐒]@+@[1𝐗]+流量.0\.2☠️"
  ❖ 默认 emoji 先生效, 如想调换顺序, 请用 rrname 参数
⦿ replace 正则替换节点中字段, 可用于重命名/更改加密方式等
  ❖ replace=regex1@𝘀𝘁𝗿1+regex2@𝘀𝘁𝗿2
⦿ ptn/npt=1-8, 将节点名英文/数字替换成样式 ⇒ 🅰/🄰/𝐀/𝗮/𝔸/𝕒/ᵃ/ᴬ, ①\❶\⓵\𝟙\¹\₁\𝟏\𝟷
⦿ delreg, 利用正则表达式来删除 "节点名" 中的字段(⚠️ 慎用)
⦿ aead=-1, 关闭 Vmess 的 AEAD 参数
⦿ host=xxx, 修改已有 host , 如要增加host，请用☠️结尾
⦿ obfs=vhttp/shttp, 指定 obfs=shadowsocks-http 或 obfs=vmess-http 的特殊需求
⦿ tsession=0/1/2, 0/1 代表关闭 tls-session-ticket/reuse，2 表示全部关闭
⦿ checkurl=xxx , 指定 server_check_url 参数
⦿ sort=1/-1/x/参数规则, 按节点名 正/逆/随机/参数规则 排序
  ❖ 参数规则是正则表达式或简单关键词, 用"<" 或 ">" 连接
  ❖ sort=🇭🇰>🇸🇬>🇯🇵>🇺🇸 , 靠前排序
  ❖ sort=IEPL<IPLC<BGP , 靠后排序
⦿ info=1, 开启通知提示机场 ✈️ 流量信息(如有提供);
⦿ flow=2022-06-02:1000:54, 订阅到期时间:总流量:已用流量
⦿ 占位符，可用于 rename/replace 等操作
  ❖ $type0/1/2/3/4/5/6/7 占位符，将节点类型(ss/ssr/vmess 等)作为可操作参数，如
    ∎ rename=@|$type2
    ∎ 样式分别为 "𝐬𝐬","𝐒𝐒","🅢🅢","🆂🆂","ⓢⓢ","🅂🅂","𝕊𝕊","ˢˢ"
  ❖ $index0/1/2/3/4/5/6/7/8 占位符，将节点的序号作为可操作参数，如
    ∎ rename=@「$index1」
    ∎ 样式分别为 1\①\❶\⓵\𝟙\¹\₁\𝟏\𝟷
  ❖ $emoji1/2 占位符, 将emoji(🇭🇰 等)作为可操作参数
    ∎ rename=@「$emoji1」
  ❖ $tag 占位符，将订阅的 tag 作为可操作参数，如
    ∎ 可接数字以单独给 tag 添加字母/数字样式
    ∎ rename=@「$tag34」, 样式同下边的 ptn/npt
⦿ ⟦进阶参数⟧: 𝘀𝗳𝗶𝗹𝘁𝗲𝗿/𝘀𝗿𝗲𝗻𝗮𝗺𝗲, 传入一段 base64 编码的脚本, 可用于更为复杂的[过滤/重命名] 需求
  ❖ 说明: https://github.com/KOP-XIAO/QuantumultX/pull/9

2⃣️ ⟦𝐫𝐞𝐰𝐫𝐢𝐭𝐞 重写⟧/⟦𝐟𝐢𝐥𝐭𝐞𝐫 分流⟧ ➠ 参数说明:
⦿ in, out, 根据关键词 保留/禁用 相关分流、重写规则;
⦿ inhn, outhn, “保留/删除”主机名(𝒉𝒐𝒔𝒕𝒏𝒂𝒎𝒆);
  ❖ 示范: 禁用 "淘宝比价" 及 "weibo" 的 js 同主机名
  𝐡𝐭𝐭𝐩𝐬://𝐦𝐲𝐥𝐢𝐬𝐭#out=tb_price.js+wb_ad.js&outhn=weibo
⦿ regex/regout, 正则保留/删除, 请自行折腾正则表达式;
  ❖ 可与 in(hn)/out(hn) 一起使用，in(hn)/out(hn) 会优先执行;
  ❖ 对 𝒉𝒐𝒔𝒕𝒏𝒂𝒎𝒆 & 𝐫𝐞𝐰𝐫𝐢𝐭𝐞/𝐟𝐢𝐥𝐭𝐞𝐫 同时生效(⚠️ 慎用)
⦿ policy 参数, 用于直接指定策略组，或为 𝐒𝐮𝐫𝐠𝐞 类型 𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 生成策略组(默认"𝐒𝐡𝐚𝐰𝐧"策略组);
⦿ pset=regex1@policy1+regex2@policy2, 为同一分流规则中不同关键词(允许正则表达式)指定不同策略组;
⦿ replace 参数, 正则替换 𝐟𝐢𝐥𝐭𝐞𝐫/𝐫𝐞𝐰𝐫𝐢𝐭𝐞 内容, regex@newregex;
  ❖ 将淘宝比价中脚本替换成 lite 版本(如有此版本的脚本)
    ∎ replace=(price)(.*)@$1_lite$2
⦿ dst=rewrite/filter，分别为将 𝐦𝐨𝐝𝐮𝐥𝐞&𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 转换成 重写/分流;
  ❖ ⚠️ 默认将 𝐦𝐨𝐝𝐮𝐥𝐞 转换到重写, 𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 转成分流
  ❖ ⚠️ 把 𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 中 url-regex 转成重写时, 必须要加 dst=rewrite;
  ❖ ⚠️ 把 𝐦𝐨𝐝𝐮𝐥𝐞 中的分流规则转换时, 必须要加 dst=filter
⦿ cdn=1, 将 github 脚本的地址转换成免翻墙 fastly.jsdelivr.net/gh
⦿ fcr=1/2/3, 为分流规则添加 force-cellular/multi-interface/multi-interface-balance 参数，强制移动数据/混合数据/负载均衡
⦿ via=接口, 为分流规则添加 via-interface 参数, 0 表示 via-interface=%TUN%
⦿ relay=目标策略名, 批量将节点订阅转换为ip/host规则，用于实现代理链

3⃣️ 其他参数
⦿ 通知参数 ntf=0/1, 用于 关闭/打开 资源解析器的提示通知
  ❖ 𝗿𝗲𝘄𝗿𝗶𝘁𝗲/𝗳𝗶𝗹𝘁𝗲𝗿 默认“开启”通知提示, 以防规则误删除
  ❖ 𝘀𝗲𝗿𝘃𝗲𝗿 资源解析则默认”关闭“通知提示
⦿ 类型参数 type=domain-set/rule/module/list/nodes
  ❖ 当解析器未能正确识别类型时, 可尝试使用此参数强制指定
⦿ 隐藏参数 hide=0, 禁用筛除的分流/重写，默认方式为删除
⦿ profile=111 , URL-Scheme 添加 QuanX 类型配置中远程资源
----------------------------------------------------------
*/

/**
* 使用说明，
0️⃣ 在QuantumultX 配置文件中[general] 部分，加入 
resource_parser_url = https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js
⚠️⚠️如提示"没有自定义解析器"，请长按右下角图标后点击左侧刷新按钮，更新资源，后台退出 app，直到出现解析器说明

------------------------------
*/

//beginning 解析器正常使用，調試註釋此部分

let [link0, content0, subinfo] = [$resource.link, $resource.content, $resource.info]
let version = typeof $environment != "undefined" ? Number($environment.version.split("build")[1]): 0 // 版本号
let Perror = 0 //错误类型

const ADDRes = `quantumult-x:///add-resource?remote-resource=url-encoded-json`
var RLink0 = {
  "filter_remote": [],
  "rewrite_remote": [],
  "server_remote": [],
}
const Field = {
  "filter" : "filter_remote",
  "rewrite": "rewrite_remote",
  "server" : "server_remote"
}  

const subtag = typeof $resource.tag != "undefined" ? $resource.tag : "";
////// 非 raw 链接的沙雕情形
content0 = content0.indexOf("DOCTYPE html") != -1 && link0.indexOf("github.com") != -1 ? ToRaw(content0) : content0 ;
// loon插件链接
content0 = link0.indexOf("nsloon.com/openloon/import?plugin=") != -1 ? ToLink(link0) : content0 ;
//ends 正常使用部分，調試註釋此部分


var para = /^(http|https)\:\/\//.test(link0) ? link0 : content0.split("\n")[0];
var para1 = para.slice(para.indexOf("#") + 1).replace(/\$type/g,"node_type_para_prefix").replace(/\$emoji/g,"node_emoji_flag_prefix").replace(/\$tag/g,"node_tag_prefix").replace(/\$index/g,"node_index_prefix") //防止参数中其它位置也存在"#"
var mark0 = para.indexOf("#") != -1 ? true : false; //是否有參數需要解析
var Pinfo = mark0 && para1.indexOf("info=") != -1 ? para1.split("info=")[1].split("&")[0] : 0;
var ntf_flow = 0;
//常用量
const Base64 = new Base64Code();
const escapeRegExp = str => str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'); //处理特殊符号以便正则匹配使用
var link1 = link0.split("#")[0]
const qxpng = "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/quantumult-x.png" // server sub-info link
const subinfo_link = { "open-url": "https://t.me/QuanX_API", "media-url": "https://shrtm.nu/ebAr" };
const subinfo_link1 = { "open-url": link1, "media-url": "https://shrtm.nu/uo13" } // server sub-info link(fake-nodes)
const rwrite_link = { "open-url": link1, "media-url": "https://shrtm.nu/x3o2" } // rewrite filter link
const rwhost_link = { "open-url": link1, "media-url": "https://shrtm.nu/0n5J" } // hostname filter link
const rule_link = { "open-url": link1, "media-url": "https://shrtm.nu/cpHD" } // rule filter link
const nan_link = { "open-url": link1, "media-url": qxpng } // nan error link
const bug_link = { "open-url": "https://t.me/Shawn_Parser_Bot", "media-url": "https://shrtm.nu/obcB" } // bug link
const sub_link = { "open-url": link1, "media-url": "https://shrtm.nu/ebAr" } // server link
const update_link = {"open-url" : "https://apps.apple.com/us/app/quantumult-x/id1443988620", "media-url": qxpng}
const plink0 = {"open-url" : link0, "media-url": qxpng} // 跳转订阅链接

if(version == 0) { $notify("⚠️ 请更新 Quantumult X 至最新商店版本\n","🚦 当前版本可能无法正常使用部分功能","\n👉 点击跳转商店链接更新",update_link) }



SubFlow() //流量通知


// 参数获取
var Pin0 = mark0 && para1.indexOf("in=") != -1 ? (para1.split("in=")[1].split("&")[0].split("+")).map(decodeURIComponent) : null;
var Pout0 = mark0 && (para.indexOf("#out=") != -1 || para.indexOf("&out=") != -1)? ((para.indexOf("#out=")!=-1? para.split("#out="): para.split("&out="))[1].split("&")[0].split("+")).map(decodeURIComponent) : null;
var Psfilter = mark0 && para1.indexOf("sfilter=") != -1 ? Base64.decode(para1.split("sfilter=")[1].split("&")[0]) : null; // script filter
var Preg = mark0 && para1.indexOf("regex=") != -1 ? decodeURIComponent(para1.split("regex=")[1].split("&")[0]).replace(/\，/g,",") : null; //server正则过滤参数
var Pregout = mark0 && para1.indexOf("regout=") != -1 ? decodeURIComponent(para1.split("regout=")[1].split("&")[0]).replace(/\，/g,",") : null; //server正则删除参数
var Pregdel = mark0 && para1.indexOf("delreg=") != -1 ? decodeURIComponent(para1.split("delreg=")[1].split("&")[0]).replace(/\，/g,",") : null; // 正则删除参数
var Phin0 = mark0 && para1.indexOf("inhn=") != -1 ? (para1.split("inhn=")[1].split("&")[0].split("+")).map(decodeURIComponent) : null; //hostname 
var Phout0 = mark0 && para1.indexOf("outhn=") != -1 ? (para1.split("outhn=")[1].split("&")[0].split("+")).map(decodeURIComponent) : null; //hostname
var Preplace = mark0 && para1.indexOf("replace=") != -1 ? para1.split("replace=")[1].split("&")[0] : null; //filter/rewrite 正则替换
var Pemoji = mark0 && para1.indexOf("emoji=") != -1 ? para1.split("emoji=")[1].split("&")[0] : null;
var Pdbg = mark0 && para1.indexOf("dbg=") != -1 ? para1.split("dbg=")[1].split("&")[0] : null;
var Pudp0 = mark0 && para1.indexOf("udp=") != -1 ? para1.split("udp=")[1].split("&")[0] : 0;
var Ptfo0 = mark0 && para1.indexOf("tfo=") != -1 ? para1.split("tfo=")[1].split("&")[0] : 0;
//var Prname = mark0 && para1.indexOf("rename=") != -1 ? para1.split("rename=")[1].split("&")[0].split("+") : null;
var Prname = mark0 && /(^|\&)rename=/.test(para1) ? para1.split(/(^|\&)rename\=/)[2].split("&")[0].split("+") : null;
var Psrename = mark0 && para1.indexOf("srename=") != -1 ? Base64.decode(para1.split("srename=")[1].split("&")[0]) : null; // script rename
var Prrname = mark0 && para1.indexOf("rrname=") != -1 ? para1.split("rrname=")[1].split("&")[0].split("+") : null;
var Psuffix = mark0 && para1.indexOf("suffix=") != -1 ? para1.split("suffix=")[1].split("&")[0] : 0;
var Ppolicy = mark0 && para1.indexOf("policy=") != -1 ? decodeURIComponent(para1.split("policy=")[1].split("&")[0]) : "Shawn";
var Ppolicyset = mark0 && para1.indexOf("pset=") != -1 ? decodeURIComponent(para1.split("pset=")[1].split("&")[0]) : "";
var Pcert0 = mark0 && para1.indexOf("cert=") != -1 ? para1.split("cert=")[1].split("&")[0] : 0;
var Psort0 = mark0 && para1.indexOf("sort=") != -1 ? para1.split("sort=")[1].split("&")[0] : 0;
var PsortX = mark0 && para1.indexOf("sortx=") != -1 ? para1.split("sortx=")[1].split("&")[0] : 0;
var PTls13 = mark0 && para1.indexOf("tls13=") != -1 ? para1.split("tls13=")[1].split("&")[0] : 0;
var Pntf0 = mark0 && para1.indexOf("ntf=") != -1 ? para1.split("ntf=")[1].split("&")[0] : 2;
var Phide = mark0 && para1.indexOf("hide=") != -1 ? para1.split("hide=")[1].split("&")[0] : 1;
var Pb64 = mark0 && para1.indexOf("b64=") != -1 ? para1.split("b64=")[1].split("&")[0] : 0;
var emojino = [" 0️⃣ ", " 1⃣️ ", " 2⃣️ ", " 3⃣️ ", " 4⃣️ ", " 5⃣️ ", " 6⃣️ ", " 7⃣️ ", " 8⃣️ ", " 9⃣️ ", " 🔟 "]
var pfi = mark0 &&Pin0 ? "in=" + Pin0.join(", ") + ",  " : ""
var pfo = mark0 &&Pout0 ? "out=" + Pout0.join(", ") : ""
var pfihn = mark0 &&Phin0 ? "inhn=" + Phin0.join(", ") + ",  " : ""
var pfohn = mark0 &&Phout0 ? "outhn=" + Phout0.join(", ") : ""
var Pcnt =  mark0 &&para1.indexOf("cnt=") != -1 ? para1.split("cnt=")[1].split("&")[0] : 0;
var Pcap = mark0 &&para1.indexOf("cap=") != -1 ? para1.split("cap=")[1].split("&")[0] : "";
var Pptn = mark0 &&para1.indexOf("ptn=") != -1 ? para1.split("ptn=")[1].split("&")[0] : ""; //花式英文字符
var Pnptn = mark0 &&para1.indexOf("npt=") != -1 ? para1.split("npt=")[1].split("&")[0] : ""; //花式数字
var Pcdn = mark0 &&para1.indexOf("cdn=") != -1 ? para1.split("cdn=")[1].split("&")[0] : "";
let [flow, exptime, errornode, total] = "";
var Pdel = mark0 && para1.indexOf("del=") != -1 ? para1.split("del=")[1].split("&")[0] : 0; //删除重复节点
var typeU = mark0 && para1.indexOf("type=") != -1 ? para1.split("type=")[1].split("&")[0] : "";
var Pfcr = mark0 && para1.indexOf("fcr=") != -1 ? para1.split("fcr=")[1].split("&")[0] : ""; // force-cellular 等参数
var Pvia = mark0 && para1.indexOf("via=") != -1 ? para1.split("via=")[1].split("&")[0] : ""; // via-interface 参数
var Paead = mark0 && para1.indexOf("aead=") != -1 ? para1.split("aead=")[1].split("&")[0] : ""; // vmess aead 参数
var Phost = mark0 && ( para.indexOf("#host=") != -1 || para.indexOf("&host=") != -1) ? (para.indexOf("#host=")!=-1? para.split("#host="): para.split("&host="))[1].split("&")[0] : ""; // host 混淆参数
var Pcsha256 = mark0 && para1.indexOf("csha=") != -1 && version >= 646? para1.split("csha=")[1].split("&")[0] : ""; // cert-sha256 混淆参数
var Ppsha256 = mark0 && para1.indexOf("psha=") != -1 && version >= 646? para1.split("psha=")[1].split("&")[0] : ""; // pubkey-sha256 混淆参数
var typeQ = $resource.type? $resource.type:"unsupported"   //返回 field 类型参数
var PRelay =mark0 && para1.indexOf("relay=") != -1 ? decodeURIComponent(para1.split("relay=")[1].split("&")[0]) : ""; // 节点 relay 参数, 用于实现代理链功能
var PUOT = mark0 && para1.indexOf("uot=") != -1 && version >= 665? para1.split("uot=")[1].split("&")[0] : ""; // 节点 udp-over-tcp 开启
var PcheckU = mark0 && para1.indexOf("checkurl=") != -1 ? decodeURIComponent(para1.split("checkurl=")[1].split("&")[0]) : ""; // 节点 server_check_url 参数
typeQ = PRelay!=""? "server":typeQ
var typec="" //check result type
var Pflow=mark0 && para1.indexOf("flow=") != -1 ? para1.split("flow=")[1].split("&")[0] : 0; // 流量时间等参数
var PProfile = mark0 && para1.indexOf("profile=") != -1 ? para1.split("profile=")[1].split("&")[0] : 0; // 通过URL-Scheme导入完整配置参数
var Palpn = mark0 && para1.indexOf("alpn=") != -1 && version >= 712? para1.split("alpn=")[1].split("&")[0] : ""; // over-tls 类型，alpn参数
var Pobfs = mark0 && para1.indexOf("obfs=") != -1 && version >= 770? para1.split("obfs=")[1].split("&")[0] : ""; // 指定特殊情况下的 obfs=xx-http 类型
var Psession =  mark0 && para1.indexOf("tsession=") != -1 && version >= 771? para1.split("tsession=")[1].split("&")[0] : "";//tls-no-session-ticket and tls-no-session-reuse
// 0/1 代表关闭 session-ticket/reuse，2 表示全部关闭。

var RegoutList= [] ;//用于 regout参数删选提醒
// URL-Scheme 增加配置
var ADDres = `quantumult-x:///add-resource?remote-resource=url-encoded-json`
var RLink = `{
  "server_remote": [
    sremoteposition
  ],
  "filter_remote": [
    fremoteposition
  ],
  "rewrite_remote": [
    rremoteposition
  ]
}`

var ProfileInfo = {
  "server":"",
  "filter":"",
  "rewrite":""
}

function VCheck(cnt) {
  cnts=cnt.split("\n").filter(Boolean).map(item=>item.trim()).filter(item => /^http/.test(item)).map(item=>"\""+item+"\"")
  cnts=cnts.join(",\n")
  //console.log(cnts)
  return  cnts
  }

function Profile_Handle() {
  let a = content0
  PProfile= PProfile==1? "001":PProfile
  PProfile= PProfile==8? "010": PProfile
  PProfile= PProfile==9? "011": PProfile
  srm = a.split("[server_remote]")[1] && String(PProfile)[0]=="1"? VCheck(a.split("[server_remote]")[1].split("[")[0]) : ""
  frm = a.split("[filter_remote]")[1] && String(PProfile)[1]=="1"? VCheck(a.split("[filter_remote]")[1].split("[")[0]) : ""
  rrm = a.split("[rewrite_remote]")[1] && String(PProfile)[2]=="1"? VCheck(a.split("[rewrite_remote]")[1].split("[")[0]) : ""
  RLink=RLink.replace("sremoteposition",srm).replace("fremoteposition",frm).replace("rremoteposition",rrm)
  ADDres=ADDres.replace("url-encoded-json",encodeURIComponent(RLink))
}

//
//流量信息
//{bytes_used: 1073741824, bytes_remaining: 2147483648, expire_date: 1653193966}}
var Finfo={}
if (Pflow!=0) {
  Pflow = Pflow.split(":")
  var Bdate=Date.parse(new Date(Pflow[0]))/1000
  var Btotal=Pflow[1]? Pflow[1]*1024*1024*1024 : 0
  var Bused=Pflow[2]? Pflow[2]*1024*1024*1024 : 0
  var Bremain=Btotal !=0 ? Btotal-Bused : 1
  var BJson={bytes_used: Bused, bytes_remaining: Bremain, expire_date: Bdate}
  //$notify("Flow","",JSON.strigify(BJson))
  Finfo = BJson
}

//花漾字 pattern
var pat=[]
pat[0] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","k","r","s","t","u","v","w","x","y","z"]
pat[1] = ["🅰","🅱","🅲","🅳","🅴","🅵","🅶","🅷","🅸","🅹","🅺","🅻","🅼","🅽","🅾","🅿","🅺","🆁","🆂","🆃","🆄","🆅","🆆","🆇","🆈","🆉"]
pat[2] = ["🄰","🄱","🄲","🄳","🄴","🄵","🄶","🄷","🄸","🄹","🄺","🄻","🄼","🄽","🄾","🄿","🄺","🅁","🅂","🅃","🅄","🅅","🅆","🅇","🅈","🅉"]
pat[3] = ["𝐀","𝐁","𝐂","𝐃","𝐄","𝐅","𝐆","𝐇","𝐈","𝐉","𝐊","𝐋","𝐌","𝐍","𝐎","𝐏","𝐊","𝐑","𝐒","𝐓","𝐔","𝐕","𝐖","𝐗","𝐘","𝐙"]
pat[4] = ["𝗮","𝗯","𝗰","𝗱","𝗲","𝗳","𝗴","𝗵","i","𝗷","𝗸","𝗹","𝗺","𝗻","𝗼","𝗽","𝗸","𝗿","𝘀","𝐭","𝘂","𝘃","𝘄","𝘅","𝘆","𝘇"]
pat[5] = ["𝔸","𝔹","ℂ","𝔻","𝔼","𝔽","𝔾","ℍ","𝕀","𝕁","𝕂","𝕃","𝕄","ℕ","𝕆","ℙ","𝕂","ℝ","𝕊","𝕋","𝕌","𝕍","𝕎","𝕏","𝕐","ℤ"]
pat[6] = ["𝕒","𝕓","𝕔","𝕕","𝕖","𝕗","𝕘","𝕙","𝕚","𝕛","𝕜","𝕝","𝕞","𝕟","𝕠","𝕡","𝕜","𝕣","𝕤","𝕥","𝕦","𝕧","𝕨","𝕩","𝕪","𝕫"]
pat[7] = ["ᵃ","ᵇ","ᶜ","ᵈ","ᵉ","ᶠ","ᵍ","ʰ","ⁱ","ʲ","ᵏ","ˡ","ᵐ","ⁿ","ᵒ","ᵖ","ᵒ⃒","ʳ","ˢ","ᵗ","ᵘ","ᵛ","ʷ","ˣ","ʸ","ᙆ"]
pat[8] = ["ᴬ","ᴮ","ᒼ","ᴰ","ᴱ","ᶠ","ᴳ","ᴴ","ᴵ","ᴶ","ᴷ","ᴸ","ᴹ","ᴺ","ᴼ","ᴾ","ᴼ̴","ᴿ","ˢ","ᵀ","ᵁ","ᵛ","ᵂ","ˣ","ʸ","ᙆ"]

// 花式数字
var patn=[]
patn[0] = ["0","1","2","3","4","5","6","7","8","9"]
patn[1] = [ '⓪', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨' ]
patn[2] = [ '⓪', '❶', '❷', '❸', '❹', '❺', '❻', '❼', '❽', '❾' ]
patn[3] = [ '⓪', '⓵', '⓶', '⓷', '⓸', '⓹', '⓺', '⓼', '⓻', '⓽' ]
patn[4] = [ '𝟘', '𝟙', '𝟚', '𝟛', '𝟜', '𝟝', '𝟞', '𝟟', '𝟠', '𝟡' ]
patn[5] = [ '⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹' ]
patn[6] = [ '₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉' ]
patn[7] = ["𝟎","𝟏","𝟐","𝟑","𝟒","𝟓","𝟔","𝟳","𝟖","𝟗"]
patn[8] = ["𝟶","𝟷","𝟸","𝟹","𝟺","𝟻","𝟼","𝟽","𝟾","𝟿"]

//避免json undefined错误的 函数
const getValue = (fn, defaultVaule) => {
  try {
    return fn();
  } catch (error) {
    return defaultVaule;
  }
};

var type0=""
//flag=1,2,3分别为 server、rewrite、rule 类型
var flag = 1

function Parser() {
  type0 = Type_Check(content0); //  类型判断
  //$notify(type0)
  if (type0 != "web" && type0 != "wrong-field" && type0 != "JS-0" && type0 != "wrong-link"){
    try {
      //$notify(type0,"hh")
      if (Pdbg){
        $notify(link0,type0,content0)
      }
      total = ResourceParse();
      
    } catch (err) {
      if(Perror == 0) {
      $notify("❌ 解析出现错误", "⚠️ 请点击通知，发送订阅链接进行反馈", err, bug_link);
    }
    }
  } else if (type0 == "wrong-field"){
    if (version >= 670 && typec!="") { //尝试跳转到正确类型
      RLink0[Field[typec]].push($resource.link+", opt-parser=true, tag=下次添加资源🉑️长点❤️8⃣️") //  跳转URI-Scheme
      var flink = ADDRes.replace(/url-encoded-json/,encodeURIComponent(JSON.stringify(RLink0)))
      const bug_linkx = { "open-url": flink, "media-url": "https://shrtm.nu/obcB" } // bug linkx
    $notify( "⚠️ 请点击通知跳转尝试添加到正确类型中","❌ 检测类型["+typec+"]"+"与填入类型"+"["+typeQ+"]冲突", "如果跳转添加仍旧失败，请发送链接反馈解析器bot\n"+$resource.link, bug_linkx)
    } else {//旧版本
    $notify("❌ 检测类型「"+typec+" 」"+"与目标类型"+" 「"+typeQ+" 」冲突", "⚠️ 请自行检查链接内容，或点击通知发送链接进行反馈", $resource.link, bug_link)
    }
    total=""
  } else {
    total=""
  }
    $done({ content: total });
}

if (typeof($resource)!=="undefined" && PProfile == 0) {
  Parser()
  $done({ content: total, info: Finfo })
} else if (PProfile != 0) {
  try {
    Profile_Handle()
  } catch (err) {
    if(Perror == 0) {
      $notify("❌ 解析出现错误", "⚠️ 请点击通知，发送订阅链接进行反馈", err, bug_link);
    }
    }
  openlink = {"open-url": ADDres}
  $notify("⚠️请忽略报错提示, 点击此通知跳转", "添加配置中的有效远程资源👇 ["+ PProfile+"]", ADDres,openlink)
  total = ProfileInfo[typeQ]
  $done({content:total})
}


/**
# 以下为具体的 function

*/

function ParseUnknown(cnt){
  try {
    cnt = JSON.parse(cnt)
    if(cnt) {
      $notify("⚠️ 链接返回内容并非有效订阅"+ "⟦" + subtag + "⟧","⁉️ 请自行检查原始链接，返回内容 👇️👇️",JSON.stringify(cnt), bug_link)
    }
    
  } catch(err) {
    if (!/error|block|invalid|support/.test(cnt.toLowerCase())) {
    $notify("😭 未能识别订阅 " + "⟦" + subtag + "⟧ 的内容",  "⚠️ 将尝试直接导入Quantumult X \n 如认为是 BUG, 请点通知跳转并 [发送链接] 反馈", "订阅返回内容: 👇 \n"+cnt, bug_link);
  } else {
    $notify("💢 ⟦" + subtag + "⟧ 返回内容无效",  "😠 请自行检查订阅，不要跑来反馈", "订阅返回内容: 👇 \n"+cnt, plink0);
  }
}
}


function ResourceParse() {
  //预处理，分流/重写等处理完成
  if (type0 == "Subs-B64Encode") { // subs2QX 负责所有节点的转换
    if (Pdbg) {$notify("original content", "node-b64", content0)}
    total = Subs2QX(Base64.decode(content0), Pudp0, Ptfo0, Pcert0, PTls13);
  } else if (type0 == "Subs") {
    //$notify("subs","",content0+Pudp0+Ptfo0+Pcert0+PTls13)
    total = Subs2QX(content0, Pudp0, Ptfo0, Pcert0, PTls13);
  } else if (type0 == "QuanX" || type0 == "Clash" || type0 == "Surge") {
    total = Subs2QX(isQuanX(content0).join("\n"), Pudp0, Ptfo0, Pcert0, PTls13);
  } else if (type0 == "sgmodule") { // surge module 模块/含 url-regex 的 rule-set
    //2023-03-06 考虑模块重写与quanx类型重写的混搭
    flag = 2 
    //total = SGMD2QX(content0) // 转换 
    total = Rewrite_Filter(isQuanXRewrite(content0.split("\n")), Pin0, Pout0,Preg,Pregout);//Rewrite_Filter(total, Pin0, Pout0,Preg,Pregout); // 筛选过滤
    if (Preplace) { total = ReplaceReg(total, Preplace) }
    total = total.filter( (ele,pos)=>total.indexOf(ele) == pos); //重写重复检查
    if (Pcdn) {total = CDN(total)
    } else { total = total.join("\n")}
  } else if (type0 == "rewrite") { // rewrite 类型
    flag = 2;
    total = Rewrite_Filter(isQuanXRewrite(content0.split("\n")), Pin0, Pout0,Preg,Pregout);
    if (Preplace) { total = ReplaceReg(total, Preplace) }
    // rewrite重复检测
    total = total.filter( (ele,pos)=>total.indexOf(ele) == pos);
    if (Pcdn) {total = CDN(total)
    } else {total = total.join("\n")}
  } else if (type0 == "Rule") {  // rule 类型, 已处理完毕
    flag = 3;
    total = Rule_Handle(content0.split("\n").map(item=>item.trim()).filter(Boolean), Pout0, Pin0).filter(Boolean);
    if (Preg && total.length!=0) { // 正则筛选规则 filter
    total = total.map(Regex).filter(Boolean) 
    RegCheck(total, "分流引用", "regex", Preg)
  } 
    if (Pregout && total.length!=0) { // 正则删除规则 filter
    total = total.map(RegexOut).filter(Boolean)
    RegCheck(total, "分流引用", "regout", Pregout)
  }
    if (Preplace) { total = ReplaceReg(total, Preplace) }
    if (Ppolicyset) {total = policy_sets(total, Ppolicyset)}
      // filter 重复检测
    total = total.length<100? total.filter( (ele,pos)=>total.indexOf(ele) == pos) : total
    total = total.join("\n")
  } else if (content0.trim() == "") {
    $notify("‼️ 引用" + "⟦" + subtag + "⟧" + " 返回內容为空", "⁉️ 点通知跳转以确认链接是否失效", para.split("#")[0], nan_link);
    flag = 0;
  } else if (type0 == "sub-http") {
    let url = VCheck(String(Base64.decode(content0.split("sub://")[1].split("#")[0])+", opt-parser=true, tag="+(new Date()).getTime()))
     RLink = RLink.replace("sremoteposition",url).replace("fremoteposition","").replace("rremoteposition","")
    let ADDres0 = ADDres.replace("url-encoded-json",encodeURIComponent(RLink))
    openlink = {"open-url": ADDres0}
    $notify("⚠️ 该链接为节点订阅, 请点击此通知跳转添加", url, ADDres0,openlink)
    flag = -1
    total = ""
  } else if (type0 == "unknown") {
    ParseUnknown(content0)
    flag = -1;
  } else if (type0 == "profile") {
    PProfile = "111" //默认添加所有部分
    Profile_Handle()
    openlink = {"open-url": ADDres}
    $notify("⚠️ 该链接为完整配置文件, 请点击此通知跳转", "添加配置中的有效远程资源👇 ["+ PProfile+"]", ADDres, openlink)
    flag = -1;
    total = ""
  } else if (type0 == "JS-0") {
    total = ""
  }

  //开始处理
  if (flag == 1) { //server 类型统一处理
    total = isQuanX(total.filter(Boolean).join("\n"))
    if (Pinfo == 1 && ntf_flow == 0) { //假节点类型的流量通知
      flowcheck(total)
    }
    if (Pin0 || Pout0) { total = Filter(total, Pin0, Pout0) } // in & out 
    if (Preg) { total = total.map(Regex).filter(Boolean)  // regex
      RegCheck(total, "节点订阅", "regex", Preg)} 
    if (Pregout) { total = total.map(RegexOut).filter(Boolean)  // regex out
      RegCheck(total, "节点订阅", "regout", Pregout)} 
    if (Psfilter) { total = FilterScript(total, Psfilter) }
    if (Prrname) {
      Prn = Prrname;
      total = total.map(Rename);
    }
    //if (Pemoji) { total = emoji_handle(total, Pemoji); }
    if (Pregdel) {
      delreg = Pregdel
      total = total.map(DelReg)
    }
    //script rename 置于其它参数之前
    if (Psrename) { total = RenameScript(total, Psrename) }
    if (Preplace) { // server 类型也可用 replace 参数进行重命名操作
      total = ReplaceReg(total, Preplace)
    }
    if (Prname) {
      Prn = Prname;
      total = total.map(Rename);
      if(Pdbg==1) {$notify("rename","content",total)}
    }
    //2023-07-10 调整emoji操作顺序
    if (Pemoji) { total = emoji_handle(total, Pemoji); }
    if (total.length > 0){
      if (Psuffix==1 || Psuffix==-1) {total = Psuffix == 1? total.map(type_suffix):total.map(type_prefix)
      }
      total = total.map(type_handle).map(emoji_prefix_handle).map(tag_handle) //各类节点名操作
      if (Psort0) { //排序操作
        total = QXSort(total, Psort0);
      }
      total = para1.indexOf("node_index_prefix")!=-1 ?index_handle(total):total // 节点序号操作
      //$notify("before","haha",total)
      total = TagCheck_QX(total).join("\n") //节点名检查
      if (PUOT==1) { total = total.split("\n").map(UOT).join("\n")}
      if (Pcnt == 1) {$notify("⟦" + subtag + "⟧"+"解析后最终返回内容" , "节点数量: " +total.split("\n").length, total)}
      total = PRelay==""? Base64.encode(total) : ServerRelay(total.split("\n"),PRelay) //强制节点类型 base64 加密后再导入 Quantumult X, 如果是relay，则转换成分流类型
      if(Pflow==1) {
        //$notify("添加流量信息","xxx","xxxx")
        $done({ content: total, info: {bytes_used: 3073741824, bytes_remaining: 2147483648, expire_date: 1854193966}});
      //$notify("done?","strange")
      } else { $done({ content: total });}
    } else {
      if(Perror == 0) {
      $notify("❓❓ 友情提示 ➟ "+ "⟦" + subtag + "⟧", "⚠️⚠️ 解析后无有效内容", "🚥🚥 请自行检查相关参数, 或者点击通知跳转并发送链接反馈", bug_link)
    }
      total = errornode
      $done({ content: errornode })
    }
  } else if (flag == 0){ //空/错误类型
    total = errornode
    $done({ content: errornode })
  } else if (flag == -1){ //未知类型
    total = content0
    $done({ content: content0 })
  } 
  if (Pcnt == 1 && flag !=1) {$notify("解析后最终返回内容" , "总数量： " +total.split("\n").length, total)}
  return total
  
}

//响应头流量处理部分
function SubFlow() {
  if (Pinfo == 1 && subinfo) {
    var sinfo = subinfo.replace(/ /g, "").toLowerCase();
    var total = "总流量: " + (parseFloat(sinfo.split("total=")[1].split(",")[0]) / (1024 ** 3)).toFixed(2) + "GB";
    var usd = "已用流量: " + ((parseFloat(sinfo.indexOf("upload")!=-1?sinfo.split("upload=")[1].split(",")[0]:"0") + parseFloat(sinfo.split("download=")[1].split(",")[0])) / (1024 ** 3)).toFixed(2) + "GB"
    var left = "剩余流量: " + ((parseFloat(sinfo.split("total=")[1].split(",")[0]) / (1024 ** 3)) - ((parseFloat(sinfo.indexOf("upload")!=-1?sinfo.split("upload=")[1].split(",")[0]:"0") + parseFloat(sinfo.split("download=")[1].split(",")[0])) / (1024 ** 3))).toFixed(2) + "GB"
    if (sinfo.indexOf("expire=") != -1) {
      var epr = new Date(parseFloat(sinfo.split("expire=")[1].split(",")[0]) * 1000);
      var year = epr.getFullYear();  // 获取完整的年份(4位,1970)
      var mth = epr.getMonth() + 1 < 10 ? '0' + (epr.getMonth() + 1) : (epr.getMonth() + 1);  // 获取月份(0-11,0代表1月,用的时候记得加上1)
      var day = epr.getDate() < 10 ? "0" + (epr.getDate()) : epr.getDate();
      epr = "过期时间: " + year + "-" + mth + "-" + day
    } else {
      epr = ""; //"过期时间: ✈️ 未提供該信息" //没过期时间的显示订阅链接
    }
    var message = total + "\n" + usd + ", " + left;
    ntf_flow = 1;
    $notify("流量信息: ⟦" + subtag + "⟧", epr, message, subinfo_link)
  }
//  } else if (Pinfo ==1){
//    $notify("流量信息: ⟦" + subtag + "⟧", "", "⚠️ 该订阅链接未返回任何流量信息", subinfo_link)
//  }
}

//flowcheck-fake-server
function flowcheck(cnt) {
    for (var i = 0; i < cnt.length; i++) {
        var item = cnt[i];
        var nl = item.slice(item.indexOf("tag"))
        var nm = nl.slice(nl.indexOf("=") + 1)
        if (item.indexOf("剩余流量") != -1) {
            flow = nm
        } else if (item.indexOf("期时间") != -1) {
            exptime = nm
        }
    }
  flow = flow? flow:"⚠️ 该订阅未返回任何流量信息"
  exptime = exptime? exptime:"⚠️ 该订阅未返回套餐时间信息"
    if (flow != "") { $notify("流量信息: ⟦" + subtag + "⟧", flow, exptime, subinfo_link1) }
}

// regex 后的检查
function RegCheck(total, typen, paraname,regpara) {
  if(total.length == 0){ 
    $notify("‼️ " + typen + "  ➟ " + "⟦" + subtag + "⟧", "⛔️ 筛选正则: " + paraname + "=" + regpara, "⚠️ 筛选后剩余项为 0️⃣ , 请检查正则参数及原始链接", nan_link)
  }else if((typen != "节点订阅" && Pntf0 !=0) || (typen == "节点订阅" && Pntf0 ==1)){
    var nolist = total.length <= 10 ? emojino[total.length] : total.length
    $notify("🤖 " + typen + "  ➟ " + "⟦" + subtag + "⟧", "⛔️ 筛选正则: " + paraname + "=" + regpara, "⚠️ 筛选后剩余以下" + nolist + "个匹配项 \n ⨷ " + total.join("\n ⨷ "), sub_link)
  }
}
//判断订阅类型
function Type_Check(subs) {
    var type = "unknown"
    var RuleK = ["host,", "-suffix,", "domain,", "-keyword,", "ip-cidr,", "ip-cidr6,",  "geoip,", "user-agent,", "ip6-cidr,", "ip-asn"];
    var DomainK = ["domain-set,"]
    var QuanXK = ["shadowsocks=", "trojan=", "vmess=", "http=", "socks5="];
    var SurgeK = ["=ss,", "=vmess,", "=trojan,", "=http,", "=custom,", "=https,", "=shadowsocks", "=shadowsocksr", "=sock5", "=sock5-tls"];
    var ClashK = ["proxies:"]
    var SubK = ["dm1lc3M", "c3NyOi8v", "CnNzOi8", "dHJvamFu", "c3M6Ly", "c3NkOi8v", "c2hhZG93", "aHR0cDovLw", "aHR0cHM6L", "CnRyb2phbjo", "aHR0cD0", "aHR0cCA","U1RBVFVT"];
    var RewriteK = [" url 302", " url 307", " url reject", " url script", " url req", " url res", " url echo", " url-and-header 302", " url-and-header 307", " url-and-header reject", " url-and-header script", " url-and-header req", " url-and-header res", " url-and-header echo"] // quantumult X 类型 rewrite
    var SubK2 = ["ss://", "vmess://", "ssr://", "trojan://", "ssd://", "\nhttps://", "\nhttp://","socks://","ssocks://","vless://"];
    var ModuleK = ["[Script]", "[Rule]", "[URL Rewrite]", "[Map Local]", "\nhttp-r", "script-path"]
    var QXProfile = ["[filter_local]","[filter_remote]","[server_local]","[server_remote]"]
    var html = "DOCTYPE html"
    var subi = subs.replace(/ /g, "")
    const RuleCheck = (item) => subi.toLowerCase().indexOf(item) != -1;
    const NodeCheck = (item) => subi.toLowerCase().indexOf(item.toLowerCase()) != -1;
    const NodeCheck1 = (item) => subi.toLowerCase().indexOf(item.toLowerCase()) != -1; //b64加密的订阅类型
    const NodeCheck2 = (item) => subi.toLowerCase().indexOf(item.toLowerCase()) != -1; //URI 类型
    const RewriteCheck = (item) => subs.indexOf(item) != -1 ; // quanx 重写判定
    const ProfileCheck = (item) => subs.indexOf(item) != -1; //是否为quanx配置文件
    var subsn = subs.split("\n")
    if ( (subs.indexOf(html) != -1 || subs.indexOf("doctype html") != -1) && link0.indexOf("github.com" == -1)) {
      $notify("‼️ 该链接返回为无效网页内容"+ " ➟ " + "⟦" + subtag + "⟧", "⁉️ 点通知跳转以确认链接是否失效\n"+link0, "返回内容如下⬇️：\n"+subs, nan_link);
      type = "web";
    } else if (typeU == "nodes" && typeQ=="server") { //指定为节点类型
      type = (typeQ == "unsupported" || typeQ =="server")? "Subs":"wrong-field"
    } else if (ClashK.some(NodeCheck) || typeU == "clash"){ // Clash 类型节点转换
      type = (typeQ == "unsupported" || typeQ =="server")? "Clash":"wrong-field";
      typec = "server"
      content0 = Clash2QX(subs)
    } else if ( (((ModuleK.some(RewriteCheck) || para1.indexOf("dst=rewrite") != -1) && (para1.indexOf("dst=filter") == -1) && subs.indexOf("[Proxy]") == -1) || typeU == "module") && typeU != "nodes" && typeU != "rule" && typeQ !="filter") { // Surge 类型 module /rule-set(含url-regex) 类型
      typec="rewrite"
      type = (typeQ == "unsupported" || typeQ =="rewrite")? "sgmodule" : "wrong-field"
    } else if ((/(^hostname|\nhostname)\s*\=/.test(subi) || RewriteK.some(RewriteCheck))  && para1.indexOf("dst=filter")==-1 && subi.indexOf("securehostname") == -1 && !/module|nodes|rule/.test(typeU) && !(RuleK.some(RuleCheck) && typeQ == "filter") && !(typeQ!= "rewrite" && QXProfile.some(ProfileCheck))) {
      // 2022-07-20 remove constrain && !/\[(Proxy|filter_local)\]/.test(subs)
      typec = "rewrite"
      type = (typeQ == "unsupported" || typeQ =="rewrite")? "rewrite":"wrong-field" //Quantumult X 类型 rewrite/ Surge Script/
    } else if (((RuleK.some(RuleCheck) && subs.indexOf(html) == -1 ) || typeU == "rule" || para1.indexOf("dst=filter")!=-1) && typeU != "nodes" && !(typeQ == "server" && (QuanXK.some(NodeCheck) || SurgeK.some(NodeCheck))) ) {
      // rule/filter类型
      // 2022-07-20 remove constrain && !/\[(Proxy|server_local)\]/.test(subs) adter html
      typec = "filter"
      type = (typeQ == "unsupported" || typeQ =="filter")? "Rule":"wrong-field";
    } else if (typeU == "domain-set") {// 仅限用户指定为 domain-set；((DomainK.some(RuleCheck) || typeU == "domain-set") && subs.indexOf("[Proxy]") == -1 && typeU != "nodes") {
      typec = "filter-domain-set"
      type = (typeQ == "unsupported" || typeQ =="filter")? "Rule":"wrong-field";
      content0 = Domain2Rule(content0) // 转换 domain-set
    } else if (typeQ == "filter" && subs.indexOf("payload:")==-1) { // 纯 list类型？
      typec = "filter-list"
      type = (typeQ == "unsupported" || typeQ =="filter")? "Rule":"wrong-field";
      content0 = content0.split("\n").map(rule_list_handle).join("\n")
    } else if (subi.indexOf("sub://") == 0) { // sub:// 类型
      typec = "sub-http"
      type = "sub-http"
    } else if (typeQ == "filter" && subs.indexOf("payload:")!=-1) { // clash-provider 类型？
      typec = "Clash-Provider"
      type = (typeQ == "unsupported" || typeQ =="filter")? "Rule":"wrong-field";
    } else if (subsn.length >= 1 && SubK2.some(NodeCheck2) && !/\[(Proxy|filter_local)\]/.test(subs)) { //未b64加密的多行URI 组合订阅
      typec = "server-uri"
      type= (typeQ == "unsupported" || typeQ =="server" || typeQ =="uri") ? "Subs":"wrong-field"
    } else if ((subi.indexOf("tag=") != -1 && QuanXK.some(NodeCheck) && !/\[(Proxy|filter_local)\]/.test(subs)) || typeU =="list") {
      typec = "server-quanx"
      type = (typeQ == "unsupported" || typeQ =="server" || typeQ =="uri")? "Subs":"wrong-field" // QuanX list
    } else if (subs.indexOf("[Proxy]") != -1) {
      typec= "server-surge"
      type = (typeQ == "unsupported" || typeQ =="server" || typeQ =="uri")? "Surge":"wrong-field"; // Surge Profiles
      content0 = Surge2QX(content0).join("\n");
    } else if ((SurgeK.some(NodeCheck)  && !/\[(Proxy|filter_local)\]/.test(subs)) || typeU == "list") {
      typec="server-surge"
      type = (typeQ == "unsupported" || typeQ =="server" || typeQ =="uri")? "Subs":"wrong-field" // Surge proxy list
    } else if (subs.indexOf("[server_local]") != -1 && QuanXK.some(NodeCheck)) {
      //type = "QuanX"  // QuanX Profile
      typec="server-quanx"
      type = (typeQ == "unsupported" || typeQ =="server"|| typeQ =="uri")? "Subs":"wrong-field"
    } else if (content0.indexOf("server") !=-1 && content0.indexOf("server_port") !=-1) { //SIP008
      //type = "QuanX"
      typec= "server-sip008"
      type = (typeQ == "unsupported" || typeQ =="server")? "Subs":"wrong-field"
      content0 = SIP2QuanX(content0)
    } else if (SubK.some(NodeCheck1)) {  //b64加密的订阅类型
      typec="server-b64"
      type = (typeQ == "unsupported" || typeQ =="server")? "Subs-B64Encode":"wrong-field"
      if (content0.split("\n").length >= 2) { //  local snippet and first line remarks
        let tmp = content0.split("\n")[1]
        if (Pdbg) {$notify("local", "node", "\ntmp:\n"+tmp)}
        if (SubK.some((item) => tmp.toLowerCase().indexOf(item.toLowerCase()) != -1))
        content0 = tmp
      }
    } else if (QXProfile.every(ProfileCheck)) {
      typec = "profile"
      type = "profile"  //默认配置类型
    }else if (/\.js/.test(link0)) { // xjb添加js脚本的行为
      Perror = 1 ; // 无需反馈
      $notify("⚠️ 你导入的链接内容为 JS 脚本","🚥 脚本内未有重写规则，无法解析使用", " 请⚠️不要⚠️跑来解析器🤖️反馈 \n"+link0)
      type = "JS-0"
    } else if (typeQ =="server" && subs.length>100) { // 一些未知的b64 encode server case
      typec="server-b64-unknown"
      type = (typeQ == "unsupported" || typeQ =="server")? "Subs-B64Encode":"wrong-field"
    } else if(subs == "wrong-link") {
      type="wrong-link"
    }
    //else if (typeQ == "URI")
  // 用于通知判断类型，debug
  if(typeU == "X"){
    $notify("该链接判定类型",type+" : " +typec, subs)
  }
  //$notify(type)
    return type
}

// 检查节点名字(重复以及空名)等QuanX 不允许的情形，以及多个空格等“不规范”方式
function TagCheck_QX(content) {
  typefix = {"shadowsocks":["𝐬𝐬","𝐒𝐒","🅢🅢","🆂🆂","ⓢⓢ","🅂🅂","SS"],"shadowsocksr":["𝐬𝐬𝐫","𝐒𝐒𝐑","🅢🅢🅡","🆂🆂🆁","ⓢⓢⓡ","🅂🅂🅁","SSR"],"vmess":["𝐯𝐦𝐞𝐬𝐬","𝐕𝐌𝐄𝐒𝐒","🅥🅜🅔🅢🅢","🆅🅼🅴🆂🆂","ⓥⓜⓔⓢⓢ","🅅🄼🄴🅂🅂","VMESS"],"trojan":["𝐭𝐫𝐨𝐣𝐚𝐧","𝐓𝐑𝐎𝐉𝐀𝐍","🅣🅡🅞🅙🅐🅝","🆃🆁🅾🅹🅰🅽","ⓣⓡⓞⓙⓐⓝ","🅃🅁🄾🄹🄰🄽","TROJAN"],"http":["𝐡𝐭𝐭𝐩","𝐇𝐓𝐓𝐏","🅗🅣🅣🅟","🅷🆃🆃🅿","ⓗⓣⓣⓟ","🄷🅃🅃🄿","HTTP"],"socks5":["𝐬𝐨𝗰𝗸𝐬","𝐒𝐎𝐂𝐊𝐒","🅢🅞🅒🅚🅢","🆂🅾🅲🅺🆂","ⓢⓄⒸⓀⓢ","🅂🄾🄲🄺🅂","SOCKS"],"vless":["𝐯𝐥𝐞𝐬𝐬","𝐕𝐋𝐄𝐒𝐒","🅥🅛🅔🅢🅢","🆅🅻🅴🆂🆂","ⓥⓛⓔⓢⓢ","🅅🄻🄴🅂🅂","VLESS"]}
  console.log(content)
    var Olist = content.map(item =>item.trim())//.replace(/\s{2,}/g," "))
    //$notify("","",Olist)
    var [Nlist, nmlist] = [ [], [] ]
    var [nulllist,duplist] = [ [], [] ]; //记录空名字节点&重名节点
    var no=0 ;
    for (var i = 0; i < Olist.length; i++) {
        var item = Olist[i] ? Olist[i] : ""
        typefix["shadowsocks"]=item.indexOf("ssr-protocol")!=-1? typefix["shadowsocksr"] : typefix["shadowsocks"]
        if (item.replace(/ /gm, "").indexOf("tag=") != -1) {
            var nl = item.slice(item.indexOf("tag"))
            var nm = nl.slice(nl.indexOf("=") + 1)
            if (nm == "") { //空名
                tp = typefix[item.split("=")[0].trim()][3]
                nm = tp + " | " + item.split("=")[1].split(",")[0].split(":")[0]
                item = item.split("tag")[0] + "tag=" + nm.replace("shadowsocks", "ss")
                nulllist.push(nm.replace("shadowsocks", "ss"))
            }
            var ni = 0
            while (nmlist.indexOf(nm) != -1) { //重名情形
              //$notify("重名",nm,nmlist)
                nm = ni==0? nm+ NoReplace(ni+1):nm.split(" ").slice(0,nm.split(" ").length-2).join(" ") + NoReplace(ni+1)
                item = Pdel != 1 ? item.split("tag")[0] + "tag=" + nm : ""
                ni = ni + 1
            }
            if (ni != 0) { duplist.push(nm) }
            nmlist.push(nm)
          if (Pcap) { 
            item = Capitalize(item,Pcap)
            console.log(item)
          }
          if (Pptn || Pnptn) { 
            item = Pattern(item,Pptn,Pnptn)
            console.log(item)
          }
            ni = 0
            if (item) {
            Nlist.push(item)
          }
        }// if "tag="
    } // for
    // 增加 server_check_url 参数
    if (PcheckU != "") {
      Nlist = Nlist.map(Add_URL)
    }
    if (nulllist.length >= 1) {
        no = nulllist.length <= 10 ? emojino[nulllist.length] : nulllist.length;
        $notify("⚠️ 引用" + "⟦" + subtag + "⟧" + " 内有" + no + "个空节点名 ", "✅ 已将节点“类型+IP”设为节点名", " ⨁ " + nulllist.join("\n ⨁ "), nan_link)
    }
    if (duplist.length >= 1) {
        no = duplist.length <= 10 ? emojino[duplist.length] : duplist.length;
      if (Pdel!=1 && Pntf0 != 0){
        $notify("⚠️ 引用" + "⟦" + subtag + "⟧" + " 内有" + no + "个名字重复的节点 ", "✅ 已添加数字区分, 删除请添加参数 del=1:", " ⨁ " + duplist.join("\n ⨁ "), nan_link)
      } else if (Pdel ==1 && Pntf0 != 0) {
        $notify("⚠️ 引用" + "⟦" + subtag + "⟧" + " 内有" + no + "个名字重复的节点 ", "❌️ 已全部删除，如需保留请去除参数 del=1:", " ⨁ " + duplist.join("\n ⨁ "), nan_link)
      }
    }
    return Nlist
}

// 为节点添加 server-check-url参数
function Add_URL(cnt) {
  if (cnt) {
    cnt = cnt +", server_check_url="+PcheckU
  }
  return cnt
}

//节点名重名时添加数字序号替换
function NoReplace(cnt) {
  if(cnt){
    for (var i=0;i<10;i++) {
      cnt = cnt.toString().replace(new RegExp(patn[0][i], "gmi"),patn[5][i])
    }
    return " " + cnt + " "
  }
}


// 对节点名pattern化操作
function PatternN(cnt, para,npara) {
  if(cnt){
    if(para!=""){//字符
      for (var i=0;i<26;i++) {
        cnt = cnt.toLowerCase()
        cnt = cnt.replace(new RegExp(pat[0][i], "gmi"),pat[para][i])
      }
    }
    if(npara!=""){ //数字
      for (var i=0;i<10;i++) {
        cnt = cnt.replace(new RegExp(patn[0][i], "gmi"),patn[npara][i])
      }
    }
    console.log(cnt)
    return cnt
  }
}


function Pattern(cnt,para,npara) {
  if (para != "" || npara != "") {
    cnt = cnt.split("tag=")[0] +"tag="+ PatternN(cnt.split("tag=")[1],para,npara)
  }
  return cnt 
}


//大小写
function Capitalize(cnt,para) {
  if (para == 1) {
    cnt = cnt.split("tag=")[0] +"tag="+ cnt.split("tag=")[1].toUpperCase()
  } else if (para == -1) {
    cnt = cnt.split("tag=")[0] +"tag="+ cnt.split("tag=")[1].toLowerCase()
  } else if (para == 0) {
    cnt =cnt.split("tag=")[0] +"tag="+titleCase(cnt.split("tag=")[1])
  }
  return cnt
}

function titleCase(str) {
  var newStr = str.split(" ");
  for(var i = 0; i<newStr.length; i++){
    newStr[i] = newStr[i].slice(0,1).toUpperCase() + newStr[i].slice(1).toLowerCase();
  }    return newStr.join(" ");
}


// 类型前缀/后缀
function type_prefix(item) {
  if(item.trim()!="") {
    typefix = {"shadowsocks":"「𝐬𝐬」","vmess":"「𝐯𝐦𝐞𝐬𝐬」","trojan":"「𝐭𝐫𝐨𝐣𝐚𝐧」","http":"「𝐡𝐭𝐭𝐩」","socks5":"「𝐬𝐨𝗰𝗸𝐬」","vless":"「𝐯𝐥𝐞𝐬𝐬」"}
    typefix["shadowsocks"]=item.indexOf("ssr-protocol")!=-1? "「𝐬𝐬𝐫」" : "「𝐬𝐬」"
    tp = typefix[item.split("=")[0].trim()]
    return [[item.split("tag=")[0]+
      "tag=", tp, item.split("tag=")[1]].join(" ")].join(" ")
  }
}
function type_suffix(item) {
  if(item.trim()!=""){
    typefix={"shadowsocks":"「𝐬𝐬」","vmess":"「𝐯𝐦𝐞𝐬𝐬」","trojan":"「𝐭𝐫𝐨𝐣𝐚𝐧」","http":"「𝐡𝐭𝐭𝐩」","vless":"「𝐯𝐥𝐞𝐬𝐬」"}
    typefix["shadowsocks"]=item.indexOf("ssr-protocol")!=-1? "「𝐬𝐬𝐫」" : "「𝐬𝐬」"
    tp = typefix[item.split("=")[0].trim()]
    return [item, tp].join(" ")
  }
}

//获取类型
function getnode_type(item,ind) {
  if(item.trim()!="" && item.indexOf("tag=")!=-1) {
    ind = !/^(0|1|2|3|4|5|6|7)$/.test(ind) ? 8 : ind
    typefix = {"shadowsocks":["𝐬𝐬","𝐒𝐒","🅢🅢","🆂🆂","ⓢⓢ","🅂🅂","𝕊𝕊","ˢˢ","SS"],"shadowsocksr":["𝐬𝐬𝐫","𝐒𝐒𝐑","🅢🅢🅡","🆂🆂🆁","ⓢⓢⓡ","🅂🅂🅁","𝕊𝕊ℝ","ˢˢʳ","SSR"],"vmess":["𝐯𝐦𝐞𝐬𝐬","𝐕𝐌𝐄𝐒𝐒","🅥🅜🅔🅢🅢","🆅🅼🅴🆂🆂","ⓥⓜⓔⓢⓢ","🅅🄼🄴🅂🅂","𝕍𝕞𝕖𝕤𝕤","ᵛᵐᵉˢˢ","VMESS"],"trojan":["𝐭𝐫𝐨𝐣𝐚𝐧","𝐓𝐑𝐎𝐉𝐀𝐍","🅣🅡🅞🅙🅐🅝","🆃🆁🅾🅹🅰🅽","ⓣⓡⓞⓙⓐⓝ","🅃🅁🄾🄹🄰🄽","𝕋𝕣𝕠𝕛𝕒𝕟","ᵀʳᵒʲᵃⁿ","TROJAN"],"http":["𝐡𝐭𝐭𝐩","𝐇𝐓𝐓𝐏","🅗🅣🅣🅟","🅷🆃🆃🅿","ⓗⓣⓣⓟ","🄷🅃🅃🄿","𝕙𝕥𝕥𝕡","ʰᵗᵗᵖ","HTTP"],"socks5":["𝐬𝐨𝗰𝗸𝐬","𝐒𝐎𝐂𝐊𝐒","🅢🅞🅒🅚🅢","🆂🅾🅲🅺🆂","ⓢⓞⓒⓚⓢ","🅂🄾🄲🄺🅂","𝕤𝕠𝕔𝕜𝕤","ˢᵒᶜᵏˢ","SOCKS"],"vless":["𝐯𝐥𝐞𝐬𝐬","𝐕𝐋𝐄𝐒𝐒","🅥🅛🅔🅢🅢","🆅🅻🅴🆂🆂","ⓥⓛⓔⓢⓢ","🅅🄻🄴🅂🅂","𝕍𝕝𝕖𝕤𝕤","ᵛˡᵉˢˢ","VLESS"]}
    typefix["shadowsocks"]=item.indexOf("ssr-protocol")!=-1? typefix["shadowsocksr"] : typefix["shadowsocks"]
    tp = typefix[item.split("=")[0].trim()][ind]
    return tp
  }
}


// 操作節點類型佔位符
function type_handle(item) {
  if(item.indexOf("node_type_para_prefix")!=-1) {
    item = item.replace(/node_type_para_prefix(\d{0,1})/g,getnode_type(item,item.split("node_type_para_prefix")[1][0]))
  }
  return item
}

// 节点序号占位符处理
function index_handle(item) {
  items = item.map(item=>item.trim()).filter(Boolean)
  let b=Array.from(new Array(items.length),(val,index)=>index+1);
  //console.log(b[0])
  for (var i=0; i< items.length;i++){
    //$notify("rename"+i,Prname,items[i])
    if (items[i].indexOf("node_index_prefix") != -1) { // 以免占位符被错误地replace
    ind = items[i].split("node_index_prefix")[1][0]
    ind = !/^(0|1|2|3|4|5|6|7|8)$/.test(ind) ? 0 : ind
    console.log("handle index"+ind)
    items[i] = items[i].replace(/node_index_prefix(\d{0,1})/g,PatternN((i+1).toString(),"",ind))
  }
  }
  console.log(items)
  return items
}


// 操作emoji占位符
function emoji_prefix_handle(item) {
  if(item.indexOf("node_emoji_flag_prefix")!=-1) {
    item = item.replace(/node_emoji_flag_prefix\d{0,1}/g,getnode_emoji(item,item.split("node_emoji_flag_prefix")[1][0]))
    //console.log(item)
  }
  return item
}

// 获取emoji
function getnode_emoji(item,ind){
  ind = !/^(1|2)$/.test(ind) ? 2 : ind
  if(item.indexOf("tag=")!=-1) {
    return get_emoji(ind,item.split("tag=")[1])[1]
  }
}

// 操作订阅的 tag
function tag_handle(item) {
  if(item.indexOf("node_tag_prefix")!=-1) {
    //item = item.replace(/node_tag_prefix/g,subtag)
    //console.log(item.split("node_tag_prefix")[1][1])
    ptnn = /\d/.test(item.split("node_tag_prefix")[1][0])? item.split("node_tag_prefix")[1][0]:""
    nptnn = /\d/.test(item.split("node_tag_prefix")[1][1])? item.split("node_tag_prefix")[1][1]:""
    //console.log(ptnn)
    item = item.replace(/node_tag_prefix\d{0,2}/g,PatternN(subtag,ptnn,nptnn))
  }
  return item
}

// 用于单条 URI 的 tag 参数, 直接指定节点名
function URI_TAG(cnt0,tag0) {
  cnt0 = cnt0.split("tag=")[0] + "tag=" + tag0
  return cnt0
}

// 方便代理链的实现
function ServerRelay(src,dst) {
  var rsts=[]
  for (var i=0; i<src.length; i++) {
    serverA = src[i].indexOf("-host")==-1? src[i].split("=")[1].split(":")[0].trim() : src[i].split("-host")[1].split("=")[1].split(",")[0].trim()
    type = /^[a-z]/.test(serverA) || /[a-z]$/.test(serverA)? "host":"ip"
    rst = type == "ip"? "ip-cidr,"+serverA+"/32,"+dst : "host-suffix,"+serverA+","+dst 
    rsts.push(rst)
  }
  return rsts.join("\n")
  
}

// 用于某些奇葩用户不使用 raw 链接的问题
function rawtest(cnt) {
  var Preg0 = RegExp(".*js-file-line\".*?\<\/td\>", "i")
  if (Preg0.test(cnt)) {
    return cnt.replace(/(.*js-file-line\"\>)(.*?)(\<\/td\>)/g,"$2").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").trim()
  }
}

function ToRaw(cnt) {
  cnt = cnt.split("\n").map(rawtest).filter(Boolean).join("\n")
  var rawlink = link0.replace("github.com","raw.githubusercontent.com").replace("/blob","")
  if (cnt) {
    $notify( "⚠️⚠️ 将尝试解析该资源" + "⟦" + subtag + "⟧" , "🚥 请正确使用GitHub的 raw 链接" , "❌ 你的链接："+link0+"\n✅ 正确链接："+rawlink, {"open-url":rawlink})
  } else if(content0.indexOf("gridcell")!=-1) {
    $notify( "⚠️⚠️ 解析该资源" + " ⟦" + subtag + "⟧ 失败" , "🚥 你的链接似乎是目录，而不是文件" , "❌ 你的链接："+link0, {"open-url":link0})
  }
  return cnt
}

function ToLink(link) {
  cnt = link.split("nsloon.com/openloon/import?plugin=")[1]
  if (cnt) {
    
    typ=$resource.type
    RLink0[Field[typ]].push(cnt+", opt-parser=true, tag=🉑️长点❤️8⃣️") //  跳转URI-Scheme
    flink = ADDRes.replace(/url-encoded-json/,encodeURIComponent(JSON.stringify(RLink0)))
    $notify( "⚠️ 请点击通知跳转尝试添加正确链接" , "🚥 请正确使用原始链接" , "❌ 你的链接："+link0+"\n✅ 正确链接："+cnt, {"open-url":flink})
  } 
  return "wrong-link"
}

function CDN(cnt) {
  console.log("CDN start")
  cnt = cnt.join("\n").replace(/https:\/\/raw.githubusercontent.com\/(.*?)\/(.*?)\/(.*)/gmi,"https://fastly.jsdelivr.net/gh/$1/$2@$3")
  return cnt
}

// 指定节点 host 参数
function HOST_Handle(cnt,phost) {
  phost="host="+phost+","
  if (phost.indexOf("☠️") == -1) { //只替换已有host类型
    cnt = cnt.replace(/host\s*\=(.*?)\,/,phost)
  } else { // 为已有的替换，为没有的增加 obfs-host\tls-host
    phost=phost.split("☠️")[0]
    if (/-host\s*\=/.test(cnt)) {// 如已有 host 参数
      cnt = cnt.replace(/host\s*\=(.*?)\,/,phost+", ")
    } else if (/over-tls\s*\=\s*true/.test(cnt)) { // 如无host，但可以增加
      cnt = cnt+", tls-"+phost
    } else if (/obfs\s*\=/.test(cnt)) {
      cnt = cnt + ", obfs-"+phost
    }
  }
  return cnt
}

// 指定节点 obfs=xx-http 参数
function OBFS_Handle(cnt,pobfs) {
  if (pobfs == "shttp") {
    pobfs="obfs="+"shadowsocks-http"
  } else if (pobfs == "vhttp") {
    pobfs="obfs="+"vmess-http"
  } else { 
    pobfs="invalid"
  }
  if (/obfs\s*\=\s*http/.test(cnt) && pobfs!="invalid") { //只替换有 obfs=http 参数
    cnt = cnt.replace(/obfs\s*\=\s*http/,pobfs)
  }
  return cnt
}

// 指定节点 tls-no-session-ticket/reuse 参数
function Session_Handle(cnt,psession) {
  let st = ", tls-no-session-ticket=true"
  let sr = ", tls-no-session-reuse=true"
  if (psession == 0) {
    cnt =cnt + st
  } else if (psession == 1) {
     cnt =cnt + sr
  } else if (psession == 2){ 
    cnt =cnt + st + sr
  }
  return cnt
}

// 指定 cert-sha256 pubkey-sha256 参数
function SHA256_Handle(cnt,pcsha256,ppsha256) {
  if (cnt.indexOf("over-tls=true")!=-1 || cnt.indexOf("obfs=wss")!=-1) {
    cnt = cnt.replace(/tls-verification\s*\=\s*false(\s*)\,/,"") //去除 tls-verification=false
    //$notify("SHA256",cnt,Pcsha256+Ppsha256)
    cnt = pcsha256!=""? cnt.replace(/tag\s*\=/,"tls-cert-sha256="+pcsha256+", tag=") : cnt
    cnt = ppsha256!=""? cnt.replace(/tag\s*\=/,"tls-pubkey-sha256="+ppsha256+", tag=") : cnt
  }
  return cnt
}

// 指定alpn参数,over-tls类型？
function ALPN_Handle(cnt,palpn) {
  cnti = cnt.replace(/\s/gmi,"") //删掉空格
  if (cnti.indexOf("obfs=over-tls") != -1 || cnti.indexOf("over-tls=true")!=-1) {
    cnt = cnt + ", tls-alpn="+palpn
  }
  return cnt
}

function Mock2QXReject(row, filename) {
    if (/dict/i.test(filename)) {
        return row.replace(/ /g, "").split("data=")[0].split("data-type=")[0] + " url " + "reject-dict"
    } else if (/array/i.test(filename)) {
        return row.replace(/ /g, "").split("data=")[0].split("data-type=")[0] + " url " + "reject-array"
    } else if (/(txt|html)/i.test(filename) || filename==null) {
        return row.replace(/ /g, "").split("data=")[0].split("data-type=")[0] + " url " + "reject-200"
    } else if (/(png|jpg|gif)/i.test(filename)) {
        return row.replace(/ /g, "").split("data=")[0].split("data-type=")[0] + " url " + "reject-img"
    } else {
        return row.replace(/ /g, "").split("data=")[0].split("data-type=")[0] + " url " + "reject"
    }
}

//url-regex 转换成 Quantumult X 重写
function URX2QX(subs) {
    var nrw = []
    var rw = ""
    subs = subs.split("\n")
    //$notify("URX")
    var NoteK = ["//", "#", ";"];  //排除注释项
    for (var i = 0; i < subs.length; i++) {
        const notecheck = (item) => subs[i].indexOf(item) == 0
        if (!NoteK.some(notecheck)) {
        if (subs[i].slice(0, 9) == "URL-REGEX") {  // regex 类型
          if (subs[i].indexOf("REJECT") != -1 || subs[i].split(",").length == 2 ) { // 仅处理 reject 类型，或者无指定策略类型
            if (subs[i].replace(/ /g, "").split(",REJECT")[0].split("GEX,")[1].slice(0,1) != "*") { // 部分 * 开头的不支持 url-regex形式
            rw = subs[i].replace(/ /g, "").split(",REJECT")[0].split("GEX,")[1] + " url " + "reject-200"
            nrw.push(rw)
          }
          }
        } else if (subs[i].indexOf("data=") != -1 && subs.indexOf("[Map Local]") != -1){ // Map Local 类型
            // 取subs[i]的文件名
            let fn = subs[i].match(/data=.+\/(.+)"/) ? subs[i].match(/data=.+\/(.+)"/)[1] : null
            if ((!/header=".*content-type/i.test(subs[i]) && /blank/i.test(fn)) || fn==null) {
                rw = Mock2QXReject(subs[i], fn)
            } else {
                rw = subs[i].replace(/ /g, "").split("data=")[0].split("data-type=")[0].replace(/\"/g,"") + " url echo-response text/html echo-response " + subs[i].split("data=")[1].split(" ")[0].replace(/\"/g,"").replace(/ /g, "")//"reject-dict"
                if (subs[i].indexOf("header=")!=-1) {
                    if (subs[i].indexOf("Content-Type:") !=-1) {
                        let tpe = subs[i].split("header=")[1].split("Content-Type:")[1].split(",")[0].replace(/\"/g,"")
                        rw = rw.replace(/text\/html/g,tpe)
                    }
                }
            }
            nrw.push(rw)
        } 
    }
    }
    //$notify("URX","",nrw)
    return nrw
}

//script&rewrite 转换成 Quantumult X
function SCP2QX(subs) {
  var nrw = []
  var rw = ""
  var RewriteK = [" url 302", " url 307", " url reject", " url script", " url req", " url res", " url echo", " url-and-header 302", " url-and-header 307", " url-and-header reject", " url-and-header script", " url-and-header req", " url-and-header res", " url-and-header echo"] // quantumult X 类型 rewrite
  subs = subs.split("\n").map(x => x.trim().replace(/\s+/g," "))
  //$notify("Script","",subs)
  for (var i = 0; i < subs.length; i++) {
    try {
      //$notify(i,"",subs[i])
      subs[i] = subs[i].replace("^http","http") // 去掉 ^ , 以方便去重
      if (subs[i].slice(0, 8) == "hostname") {
        hn = subs[i].replace(/\%.*\%/g, "").replace(/\:\d*/g,"")
        nrw.push(hn)
      }
      var SC = ["type=", ".js", "pattern=", "script-path="]
      var NoteK = ["//", "#", ";"]; //排除注释项
      const sccheck = (item) => subs[i].indexOf(item) != -1
      const notecheck = (item) => subs[i].indexOf(item) == 0
      const RewriteCheck = (item) => subs[i].indexOf(item) != -1 ; // quanx 重写判定
      if (!NoteK.some(notecheck) && !RewriteK.some(RewriteCheck)){
        if(Pdbg==1) {$notify("rewrite-check","",subs[i])}
        if (SC.every(sccheck)) { // surge js 新格式
          //部分正则中含有,的问题
          ptn = subs[i].replace(/\s/gi,"").split("pattern=")[1].split(/\,[a-zA-Z]/)[0] 
          js = subs[i].replace(/\s/gi,"").split("script-path=")[1].split(",")[0]
          type = subs[i].replace(/\s/gi,"").split("type=")[1].split(",")[0].trim()
          subsi = subs[i].replace(/ /g,"").replace(/\=true/g,"=1")
          if (type == "http-response" && subsi.indexOf("requires-body=1") != -1) {
            type = "script-response-body "
          } else if (type == "http-response" && subsi.indexOf("requires-body=1") == -1) {
            type = "script-response-header "
          } else if (type == "http-request" && subsi.indexOf("requires-body=1") != -1) {
            type = "script-request-body "
          } else if (type == "http-request" && subsi.indexOf("requires-body=1") == -1) {
            type = "script-request-header "
          } else {type = "" }
          if (type != "") {
            rw = ptn + " url " + type + js
            nrw.push(rw)
          }
        } else if (/\s30(7|2)$/.test(subs[i])) { //rewrite 302&307 复写(Surge)
          //tpe = subs[i].indexOf(" 302") != -1? "302":"307"
          //$notify("307/2",subs[i])
          rw = subs[i].split(" ")[0] + " url " + subs[i].split(" ")[2] + " " + subs[i].split(" ")[1].trim()
          //if(rw.indexOf("307")!=-1) {$notify("XX",subs[i],rw.split(" "))}
          nrw.push(rw)
        } else if (/\s\-\s30(2|7)\s/.test(subs[i])) { //rewrite 302&307 复写(Shadowrocket)
          //xx - 302 $1$2$3
          rw = subs[i].replace(" - "," url ")
          nrw.push(rw)
        } else if(subs[i].split(" ")[2] == "header") { // rewrite header 类型
          var pget = subs[i].split(" ")[0].split(".com")[1]
          var pgetn = subs[i].split(" ")[1].split(".com")[1]
          rw = subs[i].split(" ")[0] + " url 302 " + subs[i].split(" ")[1]
          //rw = subs[i].split(" ")[0] + " url request-header ^GET " + pget +"(.+\\r\\n)Host:.+(\\r\\n) request-header GET " + pgetn + "$1Host: " + subs[i].split(" ")[1].split("://")[1].split(".com")[0] + ".com$2"
          nrw.push(rw)
        } else if(subs[i].split(" ")[1] == "header-replace") { // rewrite header-replace 类型
          console.log(subs[i])
          var pget = subs[i].split("header-replace")[1].split(":")[0].trim()
          var pgetn = subs[i].split("header-replace")[1].trim()
          rw = subs[i].split(" ")[0] + " url request-header " +"(.+\\r\\n)"+pget+":.+(\\r\\n) request-header " + "$1" + pgetn + "$2"
          nrw.push(rw)
        } else if(subs[i].indexOf(" _ reject") != -1) { // rewrite reject 类型(surge)
          rw = subs[i].split(" ")[0] + " url reject-200"
          nrw.push(rw)
        } else if(subs[i].indexOf(" - reject") != -1 || subs[i].indexOf(" - REJECT") != -1) { //shadowrocket reject/REJECT
          rw = subs[i].replace(" - ", " url ").toLowerCase()
          nrw.push(rw)
        } else if(subs[i].split(" ").length == 2 && (/\s(reject)$/.test(subs[i]) || /\s(reject\-)/.test(subs[i]))){ // loon 类型？ http://xxx/yyy reject
          rw = subs[i].replace(" reject", " url reject")
          nrw.push(rw)
        } else if (subs[i].indexOf("script-path") != -1) { //surge js 旧写法
          type = subs[i].replace(/\s+/g," ").split(" ")[0]
          js = subs[i].split("script-path")[1].split("=")[1].split(",")[0]
          ptn = subs[i].replace(/\s+/g," ").split(" ")[1]
          subsi = subs[i].replace(/ /g,"").replace(/\=true/g,"=1")
          if (type == "http-response" && subsi.indexOf("requires-body=1") != -1) {
            type = "script-response-body "
          } else if (type == "http-response" && subsi.indexOf("requires-body=1") == -1) {
            type = "script-response-header "
          } else if (type == "http-request" && subsi.indexOf("requires-body=1") != -1) {
            type = "script-request-body "
          } else if (type == "http-request" && subsi.indexOf("requires-body=1") == -1) {
            type = "script-request-header "
          } else {type = "" }
          if (type != "") {
            rw = ptn + " url " + type + js
            nrw.push(rw)
          } 
        }
      } else if(RewriteK.some(RewriteCheck)) {
        nrw.push(subs[i])
      }
    } catch (err) {
      $notify("❌️解析此条时出现错误，已忽略",subs[i],err)
    }
  }
  return nrw
}

// 如果 URL-Regex 跟 rewrite/script 都需要
function SGMD2QX(subs) {
    var nrw0 = URX2QX(subs)
    var nrw1 = SCP2QX(subs)
    var nrwt = [...nrw0, ...nrw1]
    return nrwt
}

//Rewrite过滤，使用+连接多个关键词(逻辑"或"):in 为保留，out 为排除
function Rewrite_Filter(subs, Pin, Pout,Preg,Pregout) {
    var Nlist = [];
    var noteK = ["//", "#", ";"];
    var hnc = 0;
    var dwrite = []
    var hostname = ""
    for (var i = 0; i < subs.length; i++) {
        subi = subs[i].trim();
        var subii = subi.replace(/ /g, "")
        if (subi != "" && (subi.indexOf(" url ")!=-1 || subi.indexOf(" url-and-header ")!=-1 || /^hostname\=/.test(subii))) {
            const notecheck = (item) => subi.indexOf(item) == 0
            if (noteK.some(notecheck)) { // 注释项跳过 
                continue;
            } else if (hnc == 0 && subii.indexOf("hostname=") == 0) { //hostname 部分
                hostname = (Phin0 || Phout0 || Preg || Pregout) ? HostNamecheck(subi, Phin0, Phout0) : subi;//hostname 部分
            } else if (subii.indexOf("hostname=") != 0) { //rewrite 部分
                var inflag = Rcheck(subi, Pin);
                var outflag = Rcheck(subi, Pout);
                if (outflag == 1 || inflag == 0) {
                    dwrite.push(subi.replace(" url "," - ").replace(" url-and-header "," - ")); //out 命中
                } else if (outflag == 0 && inflag != 0) { //out 未命中 && in 未排除
                    Nlist.push(subi);
                } else if (outflag == 2 && inflag != 0) { //无 out 参数 && in 未排除
                    Nlist.push(subi);
                }
            }
        }
    }
    if (Pntf0 != 0) {
        nowrite = dwrite.length <= 10 ? emojino[dwrite.length] : dwrite.length
        no1write = Nlist.length <= 10 ? emojino[Nlist.length] : Nlist.length
        if (Pin0 && no1write != " 0️⃣ ") { //有 in 参数就通知保留项目
          if (Pout!=0) {
            $notify("🤖 " + "重写引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 筛选参数: " + pfi + pfo, "☠️ 重写 rewrite 中保留以下" + no1write + "个匹配项:" + "\n ⨷ " + Nlist.join("\n ⨷ "), rwrite_link)
          }
        } else if (dwrite.length > 0) {
          if (Pout0!=0) {
            $notify("🤖 " + "重写引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 筛选参数: " + pfi + pfo, "☠️ 重写 rewrite 中已禁用以下" + nowrite + "个匹配项:" + "\n ⨷ " + dwrite.join("\n ⨷ "), rwrite_link)
          }
        }
    }
    if (Nlist.length == 0 ) { 
      if ((Pin0 || Pout0 || Phin0 || Phout0 || Pregout || Preg)) {
        $notify("🤖 " + "重写引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 筛选参数: " + pfi + pfo, "⚠️ 筛选后剩余rewrite规则数为 0️⃣ 条, 请检查参数及原始链接", nan_link) 
      } else {
        $notify("🤖 " + "重写引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 解析后 rewrite 规则数为 0️⃣ 条 " , "⚠️ 请检查参数及原始链接内容", nan_link) 
      
      }
    }
    if(Preg){ Nlist = Nlist.map(Regex).filter(Boolean) // regex to filter rewrites
      RegCheck(Nlist, "重写引用", "regex", Preg) }
    if(Pregout){ Nlist = Nlist.map(RegexOut).filter(Boolean) // regex to delete rewrites
      RegCheck(Nlist, "重写引用", "regout", Pregout) }
    if (hostname != "") { Nlist.push(hostname) }
    Nlist =Phide ==1? Nlist : [...dwrite,...Nlist]
    return Nlist
}

// 主机名处理
function HostNamecheck(content, parain, paraout) {
    var hname = content.replace(/ /g, "").split("=")[1].split(",");
    var nname = [];
    var dname = []; //删除项
    for (var i = 0; i < hname.length; i++) {
        dd = hname[i]
        const excludehn = (item) => dd.indexOf(item) != -1;
        if (paraout && paraout != "") { //存在 out 参数时
            if (!paraout.some(excludehn)) { //out 未命中🎯️
                if (parain && parain != "") {
                    if (parain.some(excludehn)) { //Pin 命中🎯️
                        nname.push(hname[i])
                    } else {
                        dname.push(hname[i])
                    } //Pin 未命中🎯️的记录
                } else { nname.push(hname[i]) } //无in 参数    
            } else { dname.push(hname[i]) } //out 参数命中
        } else if (parain && parain != "") { //不存在 out，但有 in 参数时
            if (parain.some(excludehn)) { //Pin 命中🎯️
                nname.push(hname[i])
            } else { dname.push(hname[i]) }
        } else {
            nname.push(hname[i])
        }
    } //for j
    if (Pntf0 != 0) {
        if (paraout || parain) {
            var noname = dname.length <= 10 ? emojino[dname.length] : dname.length
            var no1name = nname.length <= 10 ? emojino[nname.length] : nname.length
            if (parain && no1name != " 0️⃣ ") {
                $notify("🤖 " + "重写引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 筛选参数: " + pfihn + pfohn, "☠️ 主机名 hostname 中已保留以下" + no1name + "个匹配项:" + "\n ⨷ " + nname.join(","), rwhost_link)
            } else if (dname.length > 0) {
                $notify("🤖 " + "重写引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 筛选参数: " + pfihn + pfohn, "☠️ 主机名 hostname 中已删除以下" + noname + "个匹配项:" + "\n ⨷ " + dname.join(","), rwhost_link)
            }
        }
    }
    if (nname.length == 0) {
        $notify("🤖 " + "重写引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 筛选参数: " + pfihn + pfohn, "⚠️ 主机名 hostname 中剩余 0️⃣ 项, 请检查参数及原始链接", nan_link)
    }
    if(Preg){ nname = nname.map(Regex).filter(Boolean)
      RegCheck(nname, "主机名hostname","regex", Preg) }
    if(Pregout){ nname = nname.map(RegexOut).filter(Boolean)
      RegCheck(nname, "主机名hostname", "regout", Pregout) }
    hname = "hostname=" + nname.join(", ");
    return hname
}

//Rewrite 筛选的函数
function Rcheck(content, param) {
    name = content.toUpperCase()
    if (param) {
        var flag = 0; //没命中
        const checkpara = (item) => name.indexOf(item.toUpperCase()) != -1;
        if (param.some(checkpara)) {
            flag = 1 //命中
        }
        return flag
    } else { //if param
        return 2
    } //无参数
}

//分流规则转换及过滤(in&out)，可用于 surge 及 quanx 的 rule-list
function Rule_Handle(subs, Pout, Pin) {
    cnt = subs //.split("\n");
    Tin = Pin; //保留参数
    Tout = Pout; //过滤参数
    ply = Ppolicy; //策略组
    var nlist = []
    var RuleK = ["//", "#", ";","[","^"]; //排除项目
    var RuleK2 = ["host,", "-suffix,", "domain,", "-keyword,", "ip-cidr,", "ip-cidr6,",  "geoip,", "user-agent,", "ip6-cidr,", "ip-asn"];
    if (Tout != "" && Tout != null) { // 有 out 参数时
        var dlist = [];
        for (var i = 0; i < cnt.length; i++) {
            cc = cnt[i].replace(/^\s*\-\s/g,"").replace(/\"|\'/g,"").trim()
            //$notify("out ing", Tout, cc)
            const exclude = (item) => cc.indexOf(item) != -1; // 删除项
            const RuleCheck = (item) => cc.toLowerCase().indexOf(item) != -1; //规则检查
            const CommentCheck = (item) => cc.toLowerCase().indexOf(item) == 0; //无视注释行
            if (Tout.some(exclude) && !RuleK.some(CommentCheck) ) {
              // 2022-12-15 删除 && RuleK2.some(RuleCheck) 判断条件，以免 list/provider 中参数上生效
                dlist.push("-" + Rule_Policy(cc)) // 注释掉条目
            } else if (!RuleK.some(CommentCheck) && cc ) { //if Pout.some, 不操作注释项，不操作不识别规则项目
              // 2022-12-15 删除 && RuleK2.some(RuleCheck) 判断条件，以免 list/provider 中参数上生效
                dd = Rule_Policy(cc);
                if (Tin != "" && Tin != null) {
                    const include = (item) => dd.indexOf(item) != -1; // 保留项
                    if (Tin.some(include)) {
                        nlist.push(dd);
                    }
                } else {
                    nlist.push(dd);
                }
            } //else if cc
        }//for cnt
        var no = dlist.length <= 10 ? emojino[dlist.length] : dlist.length
        if (dlist.length > 0) {
            if (Pntf0 != 0) { $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 禁用: " + Tout, "☠️ 已禁用以下" + no + "条匹配规则:" + "\n ⨷ " + dlist.join("\n ⨷ "), rule_link) }
        } else { $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 禁用: " + Tout, "⚠️ 未发现任何匹配项, 请检查参数或原始链接", nan_link) }
        if (Tin != "" && Tin != null) {  //有 in 跟 out 参数时
            if (nlist.length > 0) {
                var noin0 = nlist.length <= 10 ? emojino[nlist.length] : nlist.length
                if (Pntf0 != 0) {
                    $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "✅ 保留:" + Tin, "🎯 已保留以下 " + noin0 + "条匹配规则:" + "\n ⨁ " + nlist.join("\n ⨁ "), rule_link)
                }
            } else {
                $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "✅ 保留:" + Tin + ",⛔️ 禁用: " + Tout, "⚠️ 筛选后剩余规则数为 0️⃣ 条, 请检查参数及原始链接", nan_link)
            }
        } else {// if Tin (No Tin)
            if (nlist.length == 0) {
                $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 禁用: " + Tout, "⚠️ 筛选后剩余规则数为 0️⃣ 条, 请检查参数及原始链接", nan_link)
            }
        }
      nlist =Phide ==1? nlist : [...dlist,...nlist]
        //return nlist;
    } else if (Tin != "" && Tin != null) { //if Tout
        var dlist = [];
        for (var i = 0; i < cnt.length; i++) {
            cc = cnt[i].replace(/^\s*\-\s/g,"").trim()
            const RuleCheck = (item) => cc.indexOf(item) != -1; //无视注释行
            const CommentCheck = (item) => cc.toLowerCase().indexOf(item) == 0; //无视注释行
            if (!RuleK.some(CommentCheck) && cc) { //if Pout.some, 不操作注释项
                dd = Rule_Policy(cc);
                const include = (item) => dd.indexOf(item) != -1; // 保留项
                if (Tin.some(include)) {
                    nlist.push(dd);
                } else { dlist.push("-" + dd) }
            }
        } // for cnt
        if (nlist.length > 0) {
            var noin = nlist.length <= 10 ? emojino[nlist.length] : nlist.length
            if (Pntf0 != 0) {
                $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "✅ 保留:" + Tin, "🎯 已保留以下 " + noin + "条匹配规则:" + "\n ⨁ " + nlist.join("\n ⨁ "), rule_link)
            }
        } else { $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "✅ 保留:" + Tin, "⚠️ 筛选后剩余规则数为 0️⃣ 条, 请检查参数及原始链接", nan_link) }
      nlist =Phide ==1? nlist : [...dlist,...nlist]
      //return nlist;
    } else {  //if Tin
      nlist = cnt.map(Rule_Policy)
        //return cnt.map(Rule_Policy)
    }
  nlist = Pfcr == 1? nlist.filter(Boolean).map(item => item+", force-cellular") : nlist.filter(Boolean)
  nlist = Pfcr == 2? nlist.filter(Boolean).map(item => item+", multi-interface") : nlist.filter(Boolean)
  nlist = Pfcr == 3? nlist.filter(Boolean).map(item => item+", multi-interface-balance") : nlist.filter(Boolean)

  if (Pvia!="") {
    nlist = Pvia ==0? nlist.filter(Boolean).map(item => item+", via-interface=%TUN%") : nlist.filter(Boolean).map(item => item+", via-interface="+Pvia)
  }

  nlist=nlist.map(item=>item.replace(/:\d*\s*,/g,",").replace(/(\'|\")/g,"").replace(/(\-suffix|\-SUFFIX)\s*\,\s*\./g,"$1, ")) //去除端口号以及分号部分, 以及部分suffix规则以. 开头的问题
  //$notify("nlist","",nlist)
  return nlist
}

function Rule_Policy(content) { //增加、替换 policy
    var cnt = content.replace(/^\s*\-\s/g,"").replace(/REJECT-TINYGIF/gi,"reject").replace(/REJECT-DROP/gi,"reject").trim().split("//")[0].trim().split(",");
    var RuleK = ["//", "#", ";","[","/", "hostname","no-ipv6","no-system","<","{","}","]","^"];
    var RuleK1 = ["host", "domain", "ip-cidr", "geoip", "user-agent", "ip6-cidr", "ip-asn"];
    const RuleCheck = (item) => cnt[0].trim().toLowerCase().indexOf(item) == 0; //无视注释行
    const RuleCheck1 = (item) => cnt[0].trim().toLowerCase().indexOf(item) == 0 ; //无视 quanx 不支持的规则类别&排除 hostname
    if (RuleK1.some(RuleCheck1) && !RuleK.some(RuleCheck) ) {
        if (cnt.length == 3 && cnt.indexOf("no-resolve") == -1) {
            ply0 = Ppolicy != "Shawn" ? Ppolicy : cnt[2]
            nn = cnt[0] + ", " + cnt[1] + ", " + ply0
        } else if (cnt.length == 4 && cnt.indexOf("no-resolve") != -1) { // 带no-resolve的quanx类型rule
          nn = cnt.join(",").replace(",no-resolve","")
        } else if (cnt.length == 2) { //Surge rule-set
            ply0 = Ppolicy != "Shawn" ? Ppolicy : "Shawn"
            nn = cnt[1].trim() !=""? cnt[0] + ", " + cnt[1] + ", " + ply0 : ""
        } else if (cnt.length == 3 && cnt[2].indexOf("no-resolve") != -1) {
            ply0 = Ppolicy != "Shawn" ? Ppolicy : "Shawn"
            nn = cnt[0] + ", " + cnt[1] + ", " + ply0 //+ ", " + cnt[2]
        } else if (cnt.length == 4 && cnt[3].indexOf("no-resolve") != -1) {
            ply0 = Ppolicy != "Shawn" ? Ppolicy : cnt[2]
            nn = cnt[0] + ", " + cnt[1] + ", " + ply0 //+ ", " + cnt[3]
        } else if (!RuleK.some(RuleCheck) && content) {
            //$notify("未能解析" + "⟦" + subtag + "⟧" + "其中部分规则:", content, nan_link);
            return ""
        } else { return "" }
        if (cnt[0].indexOf("URL-REGEX") != -1 || cnt[0].indexOf("PROCESS") != -1) {
            nn = ""
        } else { nn = nn.replace("IP-CIDR6", "ip6-cidr") }
        return nn
    } else if (cnt.length == 1 && !RuleK.some(RuleCheck) && cnt[0]!="" && cnt[0].indexOf("payload:")==-1 && cnt[0].indexOf("=")==-1 && cnt[0].trim()!="https:") { // 纯域名/ip 列表
      //$notify("LIST-HANDLE")
      return rule_list_handle(cnt[0])
    } else { 
      //$notify("Nothing")
      return "" }//if RuleK1 check 
}

// 处理纯列表, 包含 clash-provider
function rule_list_handle(cnt) {
  var RuleK = ["//", "#", ";", "[", "!", "/"]
  const RuleCheck = (item) => cnt.trim().indexOf(item) == 0; //无视注释行
  const nocheck = (item) => /^\d+$/.test(item) //检查数字项
  cnt = cnt.split("#")[0].trim() // 去除注释部分
  if (cnt.trim().indexOf(" ") == -1 && cnt.trim() != "" && !RuleK.some(RuleCheck)) {
    if (cnt.indexOf("::") != -1 && cnt.indexOf("/") != -1) { // ip-v6?
      cnt = "ip6-cidr, " + cnt
      cnt = Ppolicy == "Shawn" ? cnt + ", Shawn" : cnt + ", " + Ppolicy
    } else if (cnt.split("/").length == 2) {//ip-cidr
      cnt = "ip-cidr, " + cnt
      cnt = Ppolicy == "Shawn" ? cnt + ", Shawn" : cnt + ", " + Ppolicy
    } else if (cnt.split(".").length == 4 && cnt.split(".").every(nocheck)) {  // ip 类规则
      cnt = "ip-cidr, " + cnt + "/32"
      cnt = Ppolicy == "Shawn" ? cnt + ", Shawn" : cnt + ", " + Ppolicy
    } else if (cnt.indexOf("payload:") == -1) { //host - suffix, not clash rule list
      //$notify("xxx","xxxx",cnt)
      //cnt=cnt.replace(/'|"/g,"").trim()//replace(/'|"|\+\.|\*\.|\*\.\*/g,"") 2023-04-10

      if (!/^('|")/.test(cnt)) { // not clash-provider
        if (!/\*|\+/.test(cnt[0])) {
          cnt = cnt[0] == "." ? cnt.replace(".", "") : cnt
          cnt = "host-suffix, " + cnt
        } else {
          cnt = "host-wildcard, " + cnt
        }
      } else { // clash provider
        cnt = cnt.replace(/'|"/g, "").trim()

        if (/^\.|\*\./.test(cnt) || cnt.indexOf("*") != -1) {
          //1.以.或*.开头 -> 匹配子域名，wildcard,*.domain
          //2.直接替换开头，正则未匹配 -> 不以*.开头的字符串但包含*的情况(wildcard,a.*.domain...)
          cnt = "host-wildcard, " + cnt.replace(/^\.|\*\./, "*.")
        } else {
          cnt = "host-suffix, " + cnt.replace(/^(\+\.)/, "")//如果以+.开头 = 匹配当前域名及其子域名，采用 suffix,domain。
        }
      }
      cnt = Ppolicy == "Shawn" ? cnt + ", Shawn" : cnt + ", " + Ppolicy
    }
  }
  return cnt
}

// Domain-Set
function Domain2Rule(content) {
    var cnt = content.split("\n");
    var RuleK = ["//", "#", ";","["]
    var nlist = []
    for (var i = 0; i< cnt.length; i++) {
        cc = cnt[i].trim();
        const RuleCheck = (item) => cc.indexOf(item) != -1; //无视注释行
        if(!RuleK.some(RuleCheck) && cc) {
            if (cc[0] == "."){
                nlist.push("host-suffix, " + cc.slice(1 , cc.length) )
            } else {
                nlist.push("host, " + cc )
            }
        }
    }
    return nlist.join("\n")
}
// filter 正则指定替换 regex1@policy1+regex2@policy2
function policy_sets(cnt,para) {
  pcnt = para.split("+")
  cnt=cnt//.split("\n")
  for (i=0;i<pcnt.length;i++){
    console.log(pcnt[i])
    if (pcnt[i].indexOf("@")!=-1){
      cnt = cnt.map(item => filter_set(item, pcnt[i]))
    }
  }
  cnt=cnt.filter(Boolean)//.join("\n")
  return cnt
  console.log(cnt)
}

//策略指定
function filter_set(cnt,para){
  if (cnt){
    paras=[para.split("@")[0],para.slice(para.split("@")[0].length+"@".length)]
    console.log(para.split("@")[0].length+"@".length,paras)
    cnt = cnt.split(",")
    reg = RegExp(paras[0])
    console.log(paras,cnt)
    if(cnt.length == 3){
      if (reg.test(cnt[1]) || reg.test(cnt[2])) {
        cnt[2] = paras[1]
      }
    }
    return cnt.join(",")
  }
}


// 正则替换 filter/rewrite 的部分
// 用途：如 tiktok 换区: JP -> KR ，如淘宝比价脚本 -> lite 横幅通知版本
function ReplaceReg(cnt, para) {
    var cnt0 = cnt//.join("\n")
    //$notify("0","",cnt0)
    var pp = para.replace(/\\\@/g,"atsymbol").replace(/\\\+/g,"plussymbol").split("+");
    for (var i = 0; i < pp.length; i++) {
        var p1 = decodeURIComponent(pp[i].split("@")[0]).replace(/atsymbol/g,"\@").replace(/plussymbol/g,"\\\+").replace(/\，/g,",");
        var p2 = decodeURIComponent(pp[i].split("@")[1]).replace(/atsymbol/g,"@").replace(/plussymbol/g,"+").replace(/\，/g,",");
        p1 = new RegExp(p1, "gmi");
        cnt0 = cnt0.map(item => item.replace(p1, p2));
        //$notify(p1,p2,cnt0)
    }
  //$notify("1","",cnt0)
    return cnt0//.split("\n")
}

//混合订阅类型，用于未整体进行 base64 encode 以及已经 decode 后的类型
function Subs2QX(subs, Pudp, Ptfo, Pcert0, PTls13) {
  if (Pdbg) {$notify("subs", "node", subs)}
    var list0 = subs.split("\n");
    var QuanXK = ["shadowsocks=", "trojan=", "vmess=", "http=","socks5="];
    var SurgeK = ["=ss,", "=vmess,", "=trojan,", "=http,", "=https,", "=custom,", "=socks5", "=socks5-tls"];
    var LoonK = ["=shadowsocks", "=shadowsocksr", "=vless"]
    var QXlist = [];
    var failedList = [];
    for (var i = 0; i < list0.length; i++) {
        var node = ""
        //if (Pdbg) {$notify(i, "node", list0[i])}
        if (list0[i].trim().length > 3 && !/\;|\/|\#/.test(list0[i][0]) && list0[i].indexOf(" url ")==-1) {
            var type = list0[i].split("://")[0].trim()
            var listi = list0[i].replace(/ /g, "")
            var tag0 = list0[i].indexOf("tag=")!=-1 ? list0[i].split(/\&*(emoji|udp|tfo|cert|rename|replace)\=/)[0].split("tag=")[1] : ""
            list0[i] = (type=="ssr") ? list0[i].split(/#|,|，/)[0] : list0[i] // 2023-04-18 remove type == "vmess" ||
            const NodeCheck = (item) => listi.toLowerCase().indexOf(item) != -1;
            const NodeCheck1 = (item) => listi.toLowerCase().indexOf(item) == 0;
            try {
              if (Pdbg) {$notify(i, type, list0[i])}
                if (type == "vmess" && (list0[i].indexOf("remark=") == -1 && list0[i].indexOf("remarks=") == -1) && !/(obfs|alterId|type|\@)\=/.test(list0[i])) {
                    var bnode = Base64.decode(list0[i].split("vmess://")[1])
                    if (bnode.indexOf("over-tls=") == -1) { //v2rayN
                        node = V2QX(list0[i], Pudp, Ptfo, Pcert0, PTls13)
                    } else { //quantumult 类型
                        node = VQ2QX(list0[i], Pudp, Ptfo, Pcert0, PTls13)
                    }
                  node = tag0 != "" ? URI_TAG(node, tag0) : node
                } else if (type == "vmess" && ( list0[i].indexOf("remark=") != -1 || list0[i].indexOf("remarks=") != -1 || /(obfs|alterId|type|\@)\=/.test(list0[i]))) { //shadowrocket 类型
                    node = VR2QX(list0[i], Pudp, Ptfo, Pcert0, PTls13)
                    node = tag0 != "" ? URI_TAG(node, tag0) : node
                } else if (type == "socks" && list0[i].indexOf("remarks=") != -1) { //shadowrocket socks5 类型
                    node = S5R2QX(list0[i])
                    node = tag0 != "" ? URI_TAG(node, tag0) : node
                } else if (type == "ssocks" && list0[i].indexOf("remarks=") != -1) { //shadowrocket socks5-tls 类型
                    node = S5R2QX(list0[i],tlsp="over-tls")
                    node = tag0 != "" ? URI_TAG(node, tag0) : node
                } else if (type == "ssr") {
                    node = SSR2QX(list0[i], Pudp, Ptfo)
                    node = tag0 != "" ? URI_TAG(node, tag0) : node
                } else if (type == "ss") {
                    node = SS2QX(list0[i], Pudp, Ptfo)
                    node = tag0 != "" ? URI_TAG(node, tag0) : node
                } else if (type == "ssd") {
                    node = SSD2QX(list0[i], Pudp, Ptfo)
                } else if (type == "trojan") {
                    node = TJ2QX(list0[i], Pudp, Ptfo, Pcert0, PTls13)
                    node = tag0 != "" ? URI_TAG(node, tag0) : node
                } else if ((type == "https" || type == "http") && list0[i].indexOf(",") == -1) {
                    if (listi.indexOf("@") != -1) {
                        node = HPS2QX(list0[i], Ptfo, Pcert0, PTls13)
                        node = tag0 != "" ? URI_TAG(node, tag0) : node
                    } else { // b64 类型 http/https
                        var listh = Base64.decode(listi.split(type+"://")[1].split("#")[0].split("?")[0])
                        listh = list0[i].replace(listi.split(type+"://")[1].split("#")[0].split("?")[0],listh) //type+"://" + listh + "#" + listi.split(type+"://")[1].split("#")[1]
                        node = HPS2QX(listh, Ptfo, Pcert0, PTls13)
                        node = tag0 != "" ? URI_TAG(node, tag0) : node
                    }
                } else if (type == "vless" && version<821) {
                  Perror = 1 ; // 无需反馈
                  $notify("⚠️ 你的 Quantumult X 版本暂未支持 Vless 节点","请 ⚠️不要⚠️ 跑来 解析器🤖️ 反馈",list0[i])
                } else if (type == "vless" ) { // version 150 support vless 
                  node=VL2QX(list0[i], Pudp, Ptfo, Pcert0, PTls13)
                } else if (QuanXK.some(NodeCheck1)) {
                    node = QX_TLS(isQuanX(list0[i])[0], Pcert0, PTls13)
                } else if (SurgeK.some(NodeCheck)) {
                    node = QX_TLS(Surge2QX(list0[i])[0], Pcert0, PTls13)
                } else if (LoonK.some(NodeCheck)) {
                    node = Loon2QX(list0[i])
                } 
            } catch (e) {
                failedList.push(`<<<\nContent: ${list0[i]}\nError: ${e}`)
            }
            if (Paead != "") {node = AeadVmess(node,Paead)} // vmess 类型 aead 处理
            if (Phost != "") {node = HOST_Handle(node,Phost)} // host 参数修改
            if (Pobfs != "") {node = OBFS_Handle(node,Pobfs)} // obfs 参数修改
            if (Psession != "") { node = Session_Handle(node,Psession)} // tls-session 参数
            if (Pcsha256 != "" || Ppsha256 != "") {
            node = SHA256_Handle(node,Pcsha256,Ppsha256)} // Sha256 参数
            if (Palpn !="") { node = ALPN_Handle(node,Palpn)} // alpn 参数
            node = TLS_Check(node)
            if (node instanceof Array) {
                for (var j in node) {
                  node[j] = Pudp != 0 ? XUDP(node[j],Pudp) : node[j]
                  node[j] = Ptfo != 0 ? XTFO(node[j],Ptfo) : node[j]
                    QXlist.push(node[j])
                }
            } else if (node != ""  && node) {
              node = Pudp != 0 ? XUDP(node,Pudp) : node
              node = Ptfo != 0 ? XTFO(node,Ptfo) : node
                QXlist.push(node)
            }
        }
    }
    if (failedList.length > 0 && Pntf0 != 0) {
        $notify(`⚠️ 有 ${failedList.length} 条数据解析失败, 已忽略`, "出错内容👇", failedList.join("\n"));
    }
    //$notify("QXList","check below content",QXlist)
    return QXlist;
}

// Vmess Aead  关闭-默认开启
function AeadVmess(cnt,aeadp) {
  let paead = aeadp == -1? "aead=false" : "aead=true" 
  if (/^vmess\s*\=/.test(cnt)) {
    if (/aead\s*\=/.test(cnt)) {
      cnt = cnt.replace(/aead\s*\=.*\,/,paead+",")
    } else {
      cnts = cnt.split(",")
      cnts.push(paead)
      //console.log(cnts)
      cnt=cnts.join(", ")
    }

  }
  return cnt
}

//新版本tls 的检验（存在sha256 参数时）
function TLS_Check(cnt) {
  cnt =cnt.indexOf("tls-cert-sha256")!=-1 || cnt.indexOf("tls-pubkey-sha256")!=-1 ? cnt.replace(/tls-verification\s*\=\s*false.*?\,/,"tls-verification=true,"): cnt // 去掉 tls-verification=false 如果存在 sha256
  return cnt
}

// qx 类型 tls/udp 验证问题t
function QX_TLS(cnt,Pcert0,PTls13) {
  cnt =cnt.replace(/tag\s*\=/gm,"tag=") //
  var cert0 = Pcert0 == 1? "tls-verification=true, " : "tls-verification=false, "
  var tls13 = PTls13 == 1? "tls13=true, " : ""
  if(cnt.indexOf("tls-verification") != -1){ // 已有tls参数时, 如用户不指定，则不做处理
    cnt = (Pcert0 == -1 || Pcert0 == 1) ? cnt.replace(RegExp("tls\-verification.*?\,", "gmi"), cert0): cnt
    //cnt = Pcert0 == 1? cnt.replace(RegExp("tls\-verification.*?\,", "gmi"), cert0): cnt
  }else if(cnt.indexOf("obfs=over-tls")!=-1 || /over\-tls\s*\=\s*true/.test(cnt) || cnt.indexOf("obfs=wss")!=-1){ //未包含tls参数时
    cnt = cnt.replace(new RegExp("tag.*?\=", "gmi"), cert0+"tag=")
  }
  if (tls13 !="") {
  if(cnt.indexOf("tls13") != -1){
    cnt = cnt.replace(RegExp("tls13.*?\,", "gmi"), tls13)
  }else if(cnt.indexOf("obfs=over-tls")!=-1 || /over\-tls\s*\=\s*true/.test(cnt) || cnt.indexOf("obfs=wss")!=-1){
    cnt = cnt.replace(new RegExp("tag.*?\=", "gmi"), tls13+"tag=")
  }
  }
  if (!/^(shadowsocks|trojan|vmess)/.test(cnt.trim())) { //关闭非 ss/ssr/trojan/vmess 类型的 udp
    udp =  "udp-relay=false, "
    if(cnt.indexOf("udp-relay") != -1){
      var cnt = cnt.replace(RegExp("udp\-relay.*?\,", "gmi"), udp)
    }else{
      var cnt = cnt.replace(new RegExp("tag.*?\=", "gmi"), udp+"tag=")
    }
  }   
  return cnt
}

//将sip008格式的订阅转换成quanx格式
function SIP2QuanX (cnt) {
  cnt = JSON.parse(cnt)
  ll =cnt.length
  nodes =[]
  for (i=0; i<ll; i++) {
    node = "shadowsocks= "
    cnti = cnt[i]
    ip = cnti.server + ":" + cnti.server_port
    mtd = "method=" + cnti.method
    pwd = "password=" + cnti.password
    obfs = cnti.plugin_opts? cnti.plugin_opts.replace(";", ", "):""
    tag = "tag="+cnti.remarks
    node = node +[ip,pwd, mtd, obfs, tag].filter(Boolean).join(", ")
    nodes.push(node)
  }
  return nodes.join("\n")
  //console.log(nodes)
}

//http=example.com:443, username=name, password=pwd, over-tls=true, tls-host=example.com, tls-verification=true, tls13=true, fast-open=false, udp-relay=false, tag=http-tls-02
//HTTPS 类型 URI 转换成 QUANX 格式
function HPS2QX(subs, Ptfo, Pcert0, PTls13) {
    var type = subs.indexOf("https://")!=-1? "https" : "http" 
    var server = subs.replace("https://", "").replace("http://", "").trim()//Base64.decode(subs.replace("https://", "")).trim().split("\u0000")[0];
    var nss = []
    if (server != "") {
      if (server.indexOf("@")!=-1) {
        var ipport = "http=" + server.split("@")[1].split("#")[0].split("/")[0].split("?")[0];
        var uname = "username=" + server.split(":")[0];
        var pwd = "password=" + server.split("@")[0].split(":")[1];
      } else {
        var ipport = server.split("#")[0].indexOf(":")==-1? "http=" + Base64.decode(server.split("#")[0].split("?")[0]) : "http=" + server.split("#")[0].split("?")[0]; // https://b64(ipport)
   