/*
Check in for Surge by Neurogram

 - վ��ǩ���ű�
 - ����������ʾ
 - ��վǩ��֧��
 - ����վ��֧��

ʹ��˵����https://www.notion.so/neurogram/Check-in-0797ec9f9f3f445aae241d7762cf9d8b

��������
Telegram: Neurogram
GitHub: Neurogram-R

����������������������������������������

������ǩ��Cookie�桿�޸���Neurogram
Modified by evilbutcher

���ֿ��ַ��https://github.com/evilbutcher/Quantumult_X/tree/master����ӭstar�9�9��

��BoxJs��https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/evilbutcher.boxjs.json

����л��
ʹ��Chavy��Env.js�޸���ԭ�ű���֧��Quantumult X��Loon����֧��BoxJs

�7�2�1�5������������
------------------------------------------
1���˽ű�������ѧϰ�о�������֤��Ϸ��ԡ�׼ȷ�ԡ���Ч�ԣ��������������жϣ����˶Դ˲��е��κα�֤���Ρ�
2�����ڴ˽ű�������ѧϰ�о��������������غ� 24 Сʱ�ڽ��������ݴ����ļ�������ֻ����κδ洢�豸����ȫɾ������Υ���涨�����κ��¼����˶Դ˾�������
3�����𽫴˽ű������κ���ҵ��Ƿ�Ŀ�ģ���Υ���涨�����жԴ˸���
4���˽ű��漰Ӧ���뱾���޹أ����˶����������κ���˽й©������������е��κ����Ρ�
5�����˶��κνű�����������Ų����𣬰������������ɽű�����������κ���ʧ���𺦡�
6������κε�λ�������Ϊ�˽ű����������ַ���Ȩ����Ӧ��ʱ֪ͨ���ṩ���֤��������Ȩ֤�������ǽ����յ���֤�ļ�ȷ�Ϻ�ɾ���˽ű���
7������ֱ�ӻ���ʹ�á��鿴�˽ű����˾�Ӧ����ϸ�Ķ������������˱�����ʱ���Ļ򲹳��������Ȩ����һ����ʹ�û����˴˽ű�������Ϊ���ѽ��ܴ�����������

���˰汾Ϊ������Cookieǩ��������е�½��֤����ת�Ļ�����

�7�2�1�5���ض����7�2�1�5���ض����7�2�1�5���ض����7�2�1�5
�6�0�1�5�˴�˵���������ݽ����ٽ���6�0�1�5

����Ҫ����Ľ�������������mitm������cccat������Ϊcccat.io����hostname = cccat.io

������������Լ������ã���д/�ű���������cccat�9�5

��Quantumult X��
----------------
[rewrite_local]
https:\/\/cccat\.io url script-request-header https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/glados/checkincookie_env.js
������https:\/\/cccat\.io��Ҫ�滻Ϊ���Լ��Ļ������ӣ�

[task_local]
5 0 * * * https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/glados/checkincookie_env.js

��Surge��
----------------
[Script]
��ȡCookie = type=http-request, pattern=https:\/\/cccat\.io, script-path=https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/glados/checkincookie_env.js
������https:\/\/cccat\.io��Ҫ�滻Ϊ���Լ��Ļ������ӣ�

����ǩ��Cookie�� = type=cron,cronexp=5 0 * * *,wake-system=1,timeout=20,script-path=https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/glados/checkincookie_env.js

��Loon��
----------------
[Script]
http-request https:\/\/cccat\.io tag=��ȡCookie, script-path=https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/glados/checkincookie_env.js
������https:\/\/cccat\.io��Ҫ�滻Ϊ���Լ��Ļ������ӣ�

cron "5 0 * * *" tag=����ǩ��Cookie��, script-path=https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/glados/checkincookie_env.js

��BoxJs�У����������½���ӡ�

�����úú��ֶ�ǩ��һ�Σ���ʾCookie��ȡ�ɹ������޵ڶ����������ɽ���Cookie��ȡ��

�ݴ�ʱ����BoxJs�в鿴��Cookie��URL�������ݣ����ɱ���Ự��������Ҫ���ظ�1-4����ȡ�ڶ���������Cookie���ǵø���urlΪ�ڶ���������Ӧ�ĵ�½���ӣ���

*/
const $ = new Env("����ǩ��Cookie��");
const signurl = "evil_checkinurl";
const signcookie = "evil_checkincookie";

var siurl = $.getdata(signurl);
var sicookie = $.getdata(signcookie);

!(async () => {
  if (typeof $request != "undefined") {
    getCookie();
    return;
  }
  if (
    siurl == undefined ||
    siurl == "" ||
    sicookie == undefined ||
    sicookie == ""
  ) {
    $.msg(
      "����ǩ��Cookie��",
      "",
      "�7�4���� BoxJs �����д�Ƿ���ȷ���Ƿ��ȡ��Cookie",
      "http://boxjs.com"
    );
  }
  var name = $.getdata("evil_checkincktitle");
  if (name == undefined || name == "") {
    name = "����ǩ��Cookie��";
  }
  checkin(siurl, sicookie, name);
})()
  .catch((e) => {
    $.log("", `�7�4ʧ��! ԭ��: ${e}!`, "");
  })
  .finally(() => {
    $.done();
  });

function checkin(url, cookie, name) {
  let checkinPath =
    url.indexOf("auth/login") != -1 ? "user/checkin" : "user/_checkin.php";
  var checkinurl = url.replace(/(auth|user)\/login(.php)*/g, "") + checkinPath;
  var checkinrequest = {
    url: checkinurl,
    headers: { Cookie: cookie },
  };
  console.log(checkinrequest);
  $.post(checkinrequest, (error, response, data) => {
    if (error) {
      console.log(error);
      $.msg(name, "ǩ��ʧ��", error);
    } else {
      if (data.match(/\"msg\"\:/)) {
        dataResults(url, cookie, JSON.parse(data).msg, name);
        console.log(JSON.parse(data).msg);
      } else if (data.match(/login/)) {
        console.log(data);
        $.msg(name, "", "�7�2�1�5CookieʧЧ���������»�ȡCookie");
      } else {
        console.log(data);
        $.msg(name, "", "�7�2�1�5ǩ��ʧ�ܣ�ĳЩ�ط�����������鿴��־");
      }
    }
  });
}

function dataResults(url, cookie, checkinMsg, name) {
  let userPath = url.indexOf("auth/login") != -1 ? "user" : "user/index.php";
  var datarequest = {
    url: url.replace(/(auth|user)\/login(.php)*/g, "") + userPath,
    headers: { Cookie: cookie },
  };
  console.log(datarequest);
  $.get(datarequest, (error, response, data) => {
    let resultData = "";
    let result = [];
    if (data.match(/theme\/malio/)) {
      let flowInfo = data.match(/trafficDountChat\s*\(([^\)]+)/);
      if (flowInfo) {
        let flowData = flowInfo[1].match(/\d[^\']+/g);
        let usedData = flowData[0];
        let todatUsed = flowData[1];
        let restData = flowData[2];
        result.push(`���գ�${todatUsed}\n���ã�${usedData}\nʣ�ࣺ${restData}`);
      }
      let userInfo = data.match(/ChatraIntegration\s*=\s*({[^}]+)/);
      if (userInfo) {
        let user_name = userInfo[1].match(/name.+'(.+)'/)[1];
        let user_class = userInfo[1].match(/Class.+'(.+)'/)[1];
        let class_expire = userInfo[1].match(/Class_Expire.+'(.+)'/)[1];
        let money = userInfo[1].match(/Money.+'(.+)'/)[1];
        result.push(
          `�û�����${user_name}\n�û��ȼ���lv${user_class}\n��${money}\n����ʱ�䣺${class_expire}`
        );
      }
      if (result.length != 0) {
        resultData = result.join("\n\n");
      }
    } else {
      let todayUsed = data.match(/>*\s*����(����|ʹ��)*[^B]+/);
      if (todayUsed) {
        todayUsed = flowFormat(todayUsed[0]);
        result.push(`���գ�${todayUsed}`);
      }
      let usedData = data.match(
        /(Used Transfer|>��ȥ����|>����|>������|\"����)[^B]+/
      );
      if (usedData) {
        usedData = flowFormat(usedData[0]);
        result.push(`���ã�${usedData}`);
      }
      let restData = data.match(
        /(Remaining Transfer|>ʣ������|>����ʣ��|>����|\"ʣ��)[^B]+/
      );
      if (restData) {
        restData = flowFormat(restData[0]);
        result.push(`ʣ�ࣺ${restData}`);
      }
      if (result.length != 0) {
        resultData = result.join("\n");
      }
    }
    let flowMsg = resultData == "" ? "������Ϣ��ȡʧ��" : resultData;
    $.msg(name, checkinMsg, flowMsg);
  });
}

function flowFormat(data) {
  data = data.replace(/\d+(\.\d+)*%/, "");
  let flow = data.match(/\d+(\.\d+)*\w*/);
  return flow[0] + "B";
}

function getCookie() {
  if ($request && $request.method != "OPTIONS" && $request.url.match(/check/)) {
    const sicookie = $request.headers["Cookie"];
    console.log(sicookie);
    $.setdata(sicookie, signcookie);
    $.msg("����ǩ��Cookie��", "", "��ȡCookie�ɹ��9�5");
  }
}

//From chavyleung's Env.js
function Env(name, opts) {
  class Http {
    constructor(env) {
      this.env = env;
    }

    send(opts, method = "GET") {
      opts = typeof opts === "string" ? { url: opts } : opts;
      let sender = this.get;
      if (method === "POST") {
        sender = this.post;
      }
      return new Promise((resolve, reject) => {
        sender.call(this, opts, (err, resp, body) => {
          if (err) reject(err);
          else resolve(resp);
        });
      });
    }

    get(opts) {
      return this.send.call(this.env, opts);
    }

    post(opts) {
      return this.send.call(this.env, opts, "POST");
    }
  }

  return new (class {
    constructor(name, opts) {
      this.name = name;
      this.http = new Http(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, opts);
      this.log("", `�9�0${this.name}, ��ʼ!`);
    }

    isNode() {
      return "undefined" !== typeof module && !!module.exports;
    }

    isQuanX() {
      return "undefined" !== typeof $task;
    }

    isSurge() {
      return "undefined" !== typeof $httpClient && "undefined" === typeof $loon;
    }

    isLoon() {
      return "undefined" !== typeof $loon;
    }

    toObj(str, defaultValue = null) {
      try {
        return JSON.parse(str);
      } catch {
        return defaultValue;
      }
    }

    toStr(obj, defaultValue = null) {
      try {
        return JSON.stringify(obj);
      } catch {
        return defaultValue;
      }
    }

    getjson(key, defaultValue) {
      let json = defaultValue;
      const val = this.getdata(key);
      if (val) {
        try {
          json = JSON.parse(this.getdata(key));
        } catch {}
      }
      return json;
    }

    setjson(val, key) {
      try {
        return this.setdata(JSON.stringify(val), key);
      } catch {
        return false;
      }
    }

    getScript(url) {
      return new Promise((resolve) => {
        this.get({ url }, (err, resp, body) => resolve(body));
      });
    }

    runScript(script, runOpts) {
      return new Promise((resolve) => {
        let httpapi = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        httpapi = httpapi ? httpapi.replace(/\n/g, "").trim() : httpapi;
        let httpapi_timeout = this.getdata(
          "@chavy_boxjs_userCfgs.httpapi_timeout"
        );
        httpapi_timeout = httpapi_timeout ? httpapi_timeout * 1 : 20;
        httpapi_timeout =
          runOpts && runOpts.timeout ? runOpts.timeout : httpapi_timeout;
        const [key, addr] = httpapi.split("@");
        const opts = {
          url: `http://${addr}/v1/scripting/evaluate`,
          body: {
            script_text: script,
            mock_type: "cron",
            timeout: httpapi_timeout,
          },
          headers: { "X-Key": key, Accept: "*/*" },
        };
        this.post(opts, (err, resp, body) => resolve(body));
      }).catch((e) => this.logErr(e));
    }

    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const curDirDataFilePath = this.path.resolve(this.dataFile);
        const rootDirDataFilePath = this.path.resolve(
          process.cwd(),
          this.dataFile
        );
        const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath);
        const isRootDirDataFile =
          !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath);
        if (isCurDirDataFile || isRootDirDataFile) {
          const datPath = isCurDirDataFile
            ? curDirDataFilePath
            : rootDirDataFilePath;
          try {
            return JSON.parse(this.fs.readFileSync(datPath));
          } catch (e) {
            return {};
          }
        } else return {};
      } else return {};
    }

    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const curDirDataFilePath = this.path.resolve(this.dataFile);
        const rootDirDataFilePath = this.path.resolve(
          process.cwd(),
          this.dataFile
        );
        const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath);
        const isRootDirDataFile =
          !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath);
        const jsondata = JSON.stringify(this.data);
        if (isCurDirDataFile) {
          this.fs.writeFileSync(curDirDataFilePath, jsondata);
        } else if (isRootDirDataFile) {
          this.fs.writeFileSync(rootDirDataFilePath, jsondata);
        } else {
          this.fs.writeFileSync(curDirDataFilePath, jsondata);
        }
      }
    }

    lodash_get(source, path, defaultValue = undefined) {
      const paths = path.replace(/\[(\d+)\]/g, ".$1").split(".");
      let result = source;
      for (const p of paths) {
        result = Object(result)[p];
        if (result === undefined) {
          return defaultValue;
        }
      }
      return result;
    }

    lodash_set(obj, path, value) {
      if (Object(obj) !== obj) return obj;
      if (!Array.isArray(path)) path = path.toString().match(/[^.[\]]+/g) || [];
      path
        .slice(0, -1)
        .reduce(
          (a, c, i) =>
            Object(a[c]) === a[c]
              ? a[c]
              : (a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] : {}),
          obj
        )[path[path.length - 1]] = value;
      return obj;
    }

    getdata(key) {
      let val = this.getval(key);
      // ����� @
      if (/^@/.test(key)) {
        const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key);
        const objval = objkey ? this.getval(objkey) : "";
        if (objval) {
          try {
            const objedval = JSON.parse(objval);
            val = objedval ? this.lodash_get(objedval, paths, "") : val;
          } catch (e) {
            val = "";
          }
        }
      }
      return val;
    }

    setdata(val, key) {
      let issuc = false;
      if (/^@/.test(key)) {
        const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key);
        const objdat = this.getval(objkey);
        const objval = objkey
          ? objdat === "null"
            ? null
            : objdat || "{}"
          : "{}";
        try {
          const objedval = JSON.parse(objval);
          this.lodash_set(objedval, paths, val);
          issuc = this.setval(JSON.stringify(objedval), objkey);
        } catch (e) {
          const objedval = {};
          this.lodash_set(objedval, paths, val);
          issuc = this.setval(JSON.stringify(objedval), objkey);
        }
      } else {
        issuc = this.setval(val, key);
      }
      return issuc;
    }

    getval(key) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(key);
      } else if (this.isQuanX()) {
        return $prefs.valueForKey(key);
      } else if (this.isNode()) {
        this.data = this.loaddata();
        return this.data[key];
      } else {
        return (this.data && this.data[key]) || null;
      }
    }

    setval(val, key) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(val, key);
      } else if (this.isQuanX()) {
        return $prefs.setValueForKey(val, key);
      } else if (this.isNode()) {
        this.data = this.loaddata();
        this.data[key] = val;
        this.writedata();
        return true;
      } else {
        return (this.data && this.data[key]) || null;
      }
    }

    initGotEnv(opts) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (opts) {
        opts.headers = opts.headers ? opts.headers : {};
        if (undefined === opts.headers.Cookie && undefined === opts.cookieJar) {
          opts.cookieJar = this.ckjar;
        }
      }
    }

    get(opts, callback = () => {}) {
      if (opts.headers) {
        delete opts.headers["Content-Type"];
        delete opts.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          opts.headers = opts.headers || {};
          Object.assign(opts.headers, { "X-Surge-Skip-Scripting": false });
        }
        $httpClient.get(opts, (err, resp, body) => {
          if (!err && resp) {
            resp.body = body;
            resp.statusCode = resp.status;
          }
          callback(err, resp, body);
        });
      } else if (this.isQuanX()) {
        if (this.isNeedRewrite) {
          opts.opts = opts.opts || {};
          Object.assign(opts.opts, { hints: false });
        }
        $task.fetch(opts).then(
          (resp) => {
            const { statusCode: status, statusCode, headers, body } = resp;
            callback(null, { status, statusCode, headers, body }, body);
          },
          (err) => callback(err)
        );
      } else if (this.isNode()) {
        this.initGotEnv(opts);
        this.got(opts)
          .on("redirect", (resp, nextOpts) => {
            try {
              if (resp.headers["set-cookie"]) {
                const ck = resp.headers["set-cookie"]
                  .map(this.cktough.Cookie.parse)
                  .toString();
                if (ck) {
                  this.ckjar.setCookieSync(ck, null);
                }
                nextOpts.cookieJar = this.ckjar;
              }
            } catch (e) {
              this.logErr(e);
            }
            // this.ckjar.setCookieSync(resp.headers['set-cookie'].map(Cookie.parse).toString())
          })
          .then(
            (resp) => {
              const { statusCode: status, statusCode, headers, body } = resp;
              callback(null, { status, statusCode, headers, body }, body);
            },
            (err) => {
              const { message: error, response: resp } = err;
              callback(error, resp, resp && resp.body);
            }
          );
      }
    }

    post(opts, callback = () => {}) {
      // ���ָ����������, ��ûָ��`Content-Type`, ���Զ�����
      if (opts.body && opts.headers && !opts.headers["Content-Type"]) {
        opts.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (opts.headers) delete opts.headers["Content-Length"];
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          opts.headers = opts.headers || {};
          Object.assign(opts.headers, { "X-Surge-Skip-Scripting": false });
        }
        $httpClient.post(opts, (err, resp, body) => {
          if (!err && resp) {
            resp.body = body;
            resp.statusCode = resp.status;
          }
          callback(err, resp, body);
        });
      } else if (this.isQuanX()) {
        opts.method = "POST";
        if (this.isNeedRewrite) {
          opts.opts = opts.opts || {};
          Object.assign(opts.opts, { hints: false });
        }
        $task.fetch(opts).then(
          (resp) => {
            const { statusCode: status, statusCode, headers, body } = resp;
            callback(null, { status, statusCode, headers, body }, body);
          },
          (err) => callback(err)
        );
      } else if (this.isNode()) {
        this.initGotEnv(opts);
        const { url, ..._opts } = opts;
        this.got.post(url, _opts).then(
          (resp) => {
            const { statusCode: status, statusCode, headers, body } = resp;
            callback(null, { status, statusCode, headers, body }, body);
          },
          (err) => {
            const { message: error, response: resp } = err;
            callback(error, resp, resp && resp.body);
          }
        );
      }
    }
    /**
     *
     * ʾ��:$.time('yyyy-MM-dd qq HH:mm:ss.S')
     *    :$.time('yyyyMMddHHmmssS')
     *    y:�� M:�� d:�� q:�� H:ʱ m:�� s:�� S:����
     *    ����y��ѡ0-4λռλ����S��ѡ0-1λռλ���������ѡ0-2λռλ��
     * @param {string} fmt ��ʽ������
     * @param {number} ��ѡ: ����ָ��ʱ������ظ�ʽ������
     *
     */
    time(fmt, ts = null) {
      const date = ts ? new Date(ts) : new Date();
      let o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "H+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds(),
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
      return fmt;
    }

    /**
     * ϵͳ֪ͨ
     *
     * > ֪ͨ����: ͬʱ֧�� QuanX �� Loon ���ָ�ʽ, EnvJs�������л����Զ�ת��, Surge ������֧�ֶ�ý��֪ͨ
     *
     * ʾ��:
     * $.msg(title, subt, desc, 'twitter://')
     * $.msg(title, subt, desc, { 'open-url': 'twitter://', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
     * $.msg(title, subt, desc, { 'open-url': 'https://bing.com', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
     *
     * @param {*} title ����
     * @param {*} subt ������
     * @param {*} desc ֪ͨ����
     * @param {*} opts ֪ͨ����
     *
     */
    msg(title = name, subt = "", desc = "", opts) {
      const toEnvOpts = (rawopts) => {
        if (!rawopts) return rawopts;
        if (typeof rawopts === "string") {
          if (this.isLoon()) return rawopts;
          else if (this.isQuanX()) return { "open-url": rawopts };
          else if (this.isSurge()) return { url: rawopts };
          else return undefined;
        } else if (typeof rawopts === "object") {
          if (this.isLoon()) {
            let openUrl = rawopts.openUrl || rawopts.url || rawopts["open-url"];
            let mediaUrl = rawopts.mediaUrl || rawopts["media-url"];
            return { openUrl, mediaUrl };
          } else if (this.isQuanX()) {
            let openUrl = rawopts["open-url"] || rawopts.url || rawopts.openUrl;
            let mediaUrl = rawopts["media-url"] || rawopts.mediaUrl;
            return { "open-url": openUrl, "media-url": mediaUrl };
          } else if (this.isSurge()) {
            let openUrl = rawopts.url || rawopts.openUrl || rawopts["open-url"];
            return { url: openUrl };
          }
        } else {
          return undefined;
        }
      };
      if (!this.isMute) {
        if (this.isSurge() || this.isLoon()) {
          $notification.post(title, subt, desc, toEnvOpts(opts));
        } else if (this.isQuanX()) {
          $notify(title, subt, desc, toEnvOpts(opts));
        }
      }
      if (!this.isMuteLog) {
        let logs = ["", "==============�9�1ϵͳ֪ͨ�9�1=============="];
        logs.push(title);
        subt ? logs.push(subt) : "";
        desc ? logs.push(desc) : "";
        console.log(logs.join("\n"));
        this.logs = this.logs.concat(logs);
      }
    }

    log(...logs) {
      if (logs.length > 0) {
        this.logs = [...this.logs, ...logs];
      }
      console.log(logs.join(this.logSeparator));
    }

    logErr(err, msg) {
      const isPrintSack = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!isPrintSack) {
        this.log("", `�7�5�1�5${this.name}, ����!`, err);
      } else {
        this.log("", `�7�5�1�5${this.name}, ����!`, err.stack);
      }
    }

    wait(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    done(val = {}) {
      const endTime = new Date().getTime();
      const costTime = (endTime - this.startTime) / 1000;
      this.log("", `�9�0${this.name}, ����! �9�1 ${costTime} ��`);
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(val);
      }
    }
  })(name, opts);
}