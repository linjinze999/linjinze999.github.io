(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{300:function(t,e,i){"use strict";i.r(e);var r=i(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),i("p",[t._v("系统升级前请查看好"),i("router-link",{attrs:{to:"/gerrit/extend.html#版本历史"}},[t._v("新版本特性")]),t._v("，注意新特性对使用的影响。升级前需对系统做好备份。")],1),t._m(1),t._m(2),t._m(3),i("ol",{attrs:{start:"2"}},[i("li",[t._v("下载新版本war包到"),i("code",[t._v("/home/gerrit/gerrit-x.xx.xx.war")]),t._v("：见"),i("router-link",{attrs:{to:"/gerrit/deploy.html#下载war包"}},[t._v("【系统部署-下载war包】")])],1),i("li",[t._v("下载新的lib依赖包到"),i("code",[t._v("$site_path/lib_new")]),t._v("下：可以到此网站搜索要升级的依赖包，如mysql驱动jdbc等，"),i("a",{attrs:{href:"http://mvnrepository.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://mvnrepository.com/"),i("OutboundLink")],1)]),i("li",[t._v("下载新版本插件（大版本对应即可）到"),i("code",[t._v("$site_path/plugins_new")]),t._v("下："),i("a",{attrs:{href:"https://gerrit-ci.gerritforge.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gerrit-ci.gerritforge.com/"),i("OutboundLink")],1)])]),t._m(4),t._m(5),i("p",[t._v("为了防止升级失败，造成不可挽回的数据丢失，需先备份系统，以便后续可以回退。")]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),i("p",[t._v("按提示输入新配置参数，大部分回车使用旧配置即可，其中安装插件可以选择【y】（假如你下载不到系统默认的插件），清除缓存文件也可以选择【y】，执行数据库修改操作也选择【y】。初始化根据旧系统数据的大小，花费时间几分钟到几十分钟不等（如800G的git库大概花了40分钟）")]),t._m(13),t._m(14),t._m(15),i("p",[t._v("重建索引根据旧系统数据的大小，花费时间几十分钟到几小时不等（如几十万的change提交大概花了3小时）")]),t._m(16),t._m(17),t._m(18),i("p",[t._v("若系统升级失败，可以使用备份的数据回滚系统")]),t._m(19),t._m(20)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"系统升级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统升级","aria-hidden":"true"}},[this._v("#")]),this._v(" 系统升级")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"升级准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#升级准备","aria-hidden":"true"}},[this._v("#")]),this._v(" 升级准备")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("java版本：查看新版本的release_notes，有时需要升级本地Java，如java7=>java8：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("sudo apt-get install oracle-java8-installer\nsudo update-java-alternatives -s java-8-oracle\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("注意")]),e("p",[this._v("插件网址不太稳定，有时会访问失败，几分钟后重新访问即可。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"系统备份"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统备份","aria-hidden":"true"}},[this._v("#")]),this._v(" 系统备份")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("停止系统："),e("code",[this._v("$site_path/bin/gerrit.sh stop")])]),e("li",[this._v("备份数据库（若使用其他数据库，mysql为例）："),e("code",[this._v("cd /home/gerrit && mysqldump -uroot -ppassword reviewdb > reviewdb.sql")])]),e("li",[this._v("备份数据目录："),e("code",[this._v("cp -rf /home/gerrit/review_site /home/gerrit/review_site_bac")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("strong",[t._v("备注：")]),t._v(" 可以通过以上命令统一备份，也可以指定目录备份，除了cache、logs、static、tmp、git目录可以不备份，其他目录bin、"),i("strong",[t._v("data")]),t._v("、("),i("strong",[t._v("db")]),t._v(")、"),i("strong",[t._v("etc")]),t._v("、"),i("strong",[t._v("index")]),t._v("、lib、plugins、static需备份。")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("bin目录：启动相关的文件，也可以通过旧的war包init后得到，但"),i("strong",[t._v("建议备份")]),t._v("。")]),i("li",[t._v("cache目录：存储了系统运行时的一些缓存数据，如"),i("code",[t._v("git diff")]),t._v("的数据等，空目录也可，"),i("strong",[t._v("可以不备份")]),t._v("。")]),i("li",[t._v("data目录：插件可能会存储数据在此处，因此"),i("strong",[t._v("必须备份")]),t._v("。")]),i("li",[i("strong",[t._v("db目录")]),t._v("：若使用系统默认数据库，则数据库数据会存储在这里，若自定义数据库，则没有此目录，因此若有此目录则"),i("strong",[t._v("必须备份")]),t._v("。")]),i("li",[i("strong",[t._v("etc目录")]),t._v("：系统配置文件，系统升级有时会改动，"),i("strong",[t._v("必须备份")]),t._v("。")]),i("li",[t._v("git库：用于存储git库，可能文件较大，系统升级不会修改git库，因此可以不备份，但若数据不大，仍然"),i("strong",[t._v("建议备份")]),t._v("。")]),i("li",[i("strong",[t._v("index目录")]),t._v("：记录了所有索引，如change、user、group，系统升级会重建索引，因此"),i("strong",[t._v("必须备份")]),t._v("。")]),i("li",[t._v("lib目录：三方依赖文件，也可以自己重新下载，但"),i("strong",[t._v("建议备份")]),t._v("。")]),i("li",[t._v("logs目录：记录系统日志，"),i("strong",[t._v("可以不备份。")])]),i("li",[t._v("plugins目录：插件，也可以自己重新下载，但"),i("strong",[t._v("建议备份")]),t._v("。")]),i("li",[t._v("static目录：存储一些静态文件，"),i("strong",[t._v("可以不备份")]),t._v("。")]),i("li",[t._v("tmp目录：系统启动每次都会生成新的临时插件、js、css文件，"),i("strong",[t._v("可以不备份")]),t._v("。")]),i("li",[t._v("其他目录：若有其他插件生成的目录，则"),i("strong",[t._v("建议备份")]),t._v("。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"升级步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#升级步骤","aria-hidden":"true"}},[this._v("#")]),this._v(" 升级步骤")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("停止系统："),e("code",[this._v("$site_path/bin/gerrit.sh stop")])]),e("li",[this._v("更换lib依赖包和plugins插件（以下命令会移除原文件，请先备份）：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("cd $site_path\nrm -rf lib && mv lib_new lib\nrm -rf plugins && mv plugins_new plugins\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("升级系统："),e("code",[this._v("cd /home/gerrit && java -jar gerrit-2.14.9.war init -d review_site")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("备注")]),e("p",[this._v("你也可以加入"),e("code",[this._v("--batch")]),this._v("参数使用默认配置（即"),e("code",[this._v("etc/gerrit.config")]),this._v("的配置）初始化："),e("code",[this._v("cd /home/gerrit && java -jar gerrit-2.14.9.war init --batch -d review_site")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"4"}},[e("li",[this._v("重建索引："),e("code",[this._v("cd /home/gerrit && java -jar -Xmx24g review_site/bin/gerrit.war reindex -d review_site >reindex.log 2>&1")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("重建索引可能需要较大内存，因此指定"),i("code",[t._v("-Xmx24g")]),t._v("，你可以参考"),i("code",[t._v("$site_path/etc/gerrit.config")]),t._v("里"),i("code",[t._v("container.heapLimit")]),t._v("的值。另外，重建索引过程中可能出错，因此将输出重定向到"),i("code",[t._v("/home/gerrit/reindex.log")]),t._v("方便查看，防止丢失。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"5"}},[e("li",[this._v("启动系统："),e("code",[this._v("$site_path/bin/gerrit.sh start")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"danger custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("错误")]),i("p",[t._v("当你在维护系统的过程中，直接改动了后台数据，如手动删除了某个git库的文件夹，或者丢失了某个commit等，重建索引过程中就会出错，系统无法再启动，具体错误日志可以参见"),i("code",[t._v("/home/gerrit/reindex.log")]),t._v("。")]),i("p",[t._v("你可以手动修改"),i("code",[t._v("$site_path/index/gerrit_index.config")]),t._v("文件中的"),i("code",[t._v("false")]),t._v("为"),i("code",[t._v("true")]),t._v("，这样就可以忽略错误启动系统，但错误仍然存在，异常库数据会丢失。因此建议在备份服务器上先验证是否有误，解决完问题后再进行升级。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"系统回滚"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统回滚","aria-hidden":"true"}},[this._v("#")]),this._v(" 系统回滚")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("回滚数据库（若你使用指定数据库，mysql为例）："),e("code",[this._v("cd /home/gerrit && mysql -ugerrit -ppassword reviewdb < reviewdb.sql")])]),e("li",[this._v("回滚文件："),e("code",[this._v("cd /home/gerrit && rm -rf review_site && mv review_site_bac review_site")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"warning custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("警告")]),i("p",[t._v("该命令会移除"),i("code",[t._v("review_site")]),t._v("目录，使用整个备份目录"),i("code",[t._v("review_site_bac")]),t._v("替代。若你指定了目录备份，则请【"),i("strong",[t._v("逐个恢复")]),t._v("】。其中cache、tmp目录可以直接清空内容；logs、static目录可以不用动；bin、data、（db）、etc、index、lib、plugins或其他插件目录需要清空目录并将原来的数据复制过来。")])])}],!1,null,null,null);e.default=s.exports}}]);