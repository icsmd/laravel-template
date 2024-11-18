"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[129],{4129:(t,e,a)=>{a.r(e),a.d(e,{default:()=>D});var i=a(821),n={id:"content_wrapper"},s=(0,i._)("header",{id:"topbar",class:"alt"},[(0,i._)("div",{class:"topbar-left"},[(0,i._)("ol",{class:"breadcrumb"},[(0,i._)("li",{class:"crumb-active"},[(0,i._)("a",null,"Notifications")])])])],-1),l={class:"panel"},o=(0,i._)("div",{class:"panel-heading"},[(0,i._)("span",{class:"panel-title"}," Notifications ")],-1),r={class:"panel-body"},c={class:"col-md-12"},d={class:"panel panel-colorbox-open panel-dark",id:"spy2"},_=(0,i._)("div",{class:"panel-heading"},[(0,i._)("div",{class:"panel-title hidden-xs"},[(0,i._)("span",{class:"glyphicon glyphicon-tasks"}),(0,i.Uk)("Notifications (ALL) ")])],-1),f={class:"panel-body pn"},u={class:"table table-striped table-hover",id:"tbl_notifications",cellspacing:"0",width:"100%"},p=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",{style:{"text-align":"center"}},"Sys No."),(0,i._)("th",{style:{"text-align":"center"}},"Description"),(0,i._)("th",{style:{"text-align":"center"}},"Initiator"),(0,i._)("th",{style:{"text-align":"center"}},"Date & Time"),(0,i._)("th",{style:{"text-align":"center"}},"Status"),(0,i._)("th",{style:{"text-align":"center"}},"Action")])],-1),g={style:{"text-align":"center"}},b={style:{"text-align":"left"}},y={style:{"text-align":"center"}},h={style:{"text-align":"center"}},w={style:{"text-align":"center"}},T={style:{"text-align":"center"}},v=["data-href"];var x=a(475);const m={mixins:[a(860).Z,x.Z],data:function(){return{aNotifications:[],aNotifTableConfig:{aaSorting:[[0,"desc"]],aoColumnDefs:[{bSortable:!1,aTargets:[1]}],oLanguage:{oPaginate:{sPrevious:"",sNext:""}},iDisplayLength:10,aLengthMenu:[[5,10,25,50,-1],[5,10,25,50,"All"]],sDom:'<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',oTableTools:{sSwfPath:"vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"}}}},mounted:function(){this.getNotifications(),this.initEventListeners()},methods:{getNotifications:function(){var t=this,e=this;this.getRequest("notif/get-list",(function(a){t.aNotifications=a.data.rows,!0===$.fn.dataTable.isDataTable("#tbl_notifications")&&$("#tbl_notifications").DataTable().destroy(),setTimeout((function(){e.initTblNotifications()}),500)}))},initTblNotifications:function(){$("#tbl_notifications").DataTable(this.aNotifTableConfig),$(".dataTables_filter input").attr("placeholder","Enter Terms...")},initEventListeners:function(){document.body.addEventListener("click",(function(t){"redirect"===t.target.dataset.action&&(window.location.href=t.target.dataset.href)}),!1)}}};const D=(0,a(3744).Z)(m,[["render",function(t,e,a,x,m,D){var N=(0,i.up)("C_Layout_Header"),k=(0,i.up)("C_Layout_SDOR_Sidebar"),C=(0,i.up)("C_Layout_ACTG_Sidebar"),L=(0,i.up)("C_Layout_BDGT_Sidebar"),S=(0,i.up)("C_Layout_CASH_Sidebar");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(N),"sdor"===t.$root.sUserType?((0,i.wg)(),(0,i.j4)(k,{key:0})):"actg"===t.$root.sUserType?((0,i.wg)(),(0,i.j4)(C,{key:1})):"bdgt"===t.$root.sUserType?((0,i.wg)(),(0,i.j4)(L,{key:2})):"cash"===t.$root.sUserType?((0,i.wg)(),(0,i.j4)(S,{key:3})):(0,i.kq)("",!0),(0,i._)("section",n,[s,(0,i._)("div",l,[o,(0,i._)("div",r,[(0,i._)("div",c,[(0,i._)("div",d,[_,(0,i._)("div",f,[(0,i._)("table",u,[p,(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(m.aNotifications,(function(e){return(0,i.wg)(),(0,i.iD)("tr",null,[(0,i._)("td",g,(0,i.zw)(e.temp_no),1),(0,i._)("td",b,(0,i.zw)(e.notif_desc),1),(0,i._)("td",y,(0,i.zw)(e.username),1),(0,i._)("td",h,(0,i.zw)(t.convertDateFormat(e.date_created,"MMM-DD-YYYY HH:MM:ss a")),1),(0,i._)("td",w,(0,i.zw)(1===e.notif_status?"Viewed":"Not Yet Viewed"),1),(0,i._)("td",T,[(0,i._)("a",{"data-action":"redirect","data-href":e.notif_url},"Click to redirect",8,v)])])})),256))])])])])])])])])],64)}]])}}]);