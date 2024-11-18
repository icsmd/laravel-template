"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3249],{3249:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var l=a(821),n={id:"content_wrapper"},s=(0,l.uE)('<header id="topbar" class="alt"><div class="topbar-left"><ol class="breadcrumb"><li class="crumb-trail"> System Management </li><li class="crumb-active"><a>User System Logs</a></li></ol></div></header>',1),i={class:"panel"},r=(0,l._)("div",{class:"panel-heading"},[(0,l._)("span",{class:"panel-title"},"User System Logs")],-1),o={class:"panel-body"},d=(0,l.uE)('<div class="panel panel-colorbox-open panel-primary" id="spy2"><br><div class="panel-heading"><div class="panel-title hidden-xs"><span class="fa fa-refresh"></span>Filter Logs by Date </div></div><div class="panel-body pn"><div class="admin-form mw1000 left-block" style="margin-top:10px;"><div class="col-lg-3"><label for="inputStandard" class="col-lg-12 control-label"><b>Start Date (From)</b></label><label for="datepicker1" class="field prepend-icon"><input type="text" id="inpStartDate" name="inpStartDate" class="gui-input" placeholder="Enter Start Date" readonly><label class="field-icon"><i class="fa fa-calendar-o"></i></label></label></div><div class="col-lg-3"><label for="inputStandard" class="col-lg-12 control-label"><b>End Date (To)</b></label><label for="datepicker1" class="field prepend-icon"><input type="text" id="inpEndDate" name="inpEndDate" class="gui-input" placeholder="Enter End Date" readonly><label class="field-icon"><i class="fa fa-calendar-o"></i></label></label></div></div><button id="btnFilterLog" class="button btn-lg btn-primary" style="margin:10px;margin-top:16px;"><i class="fa fa-refresh"></i>  Filter List </button></div></div>',1),c={class:"panel panel-colorbox-open panel-dark",id:"spy2"},p=(0,l._)("br",null,null,-1),f=(0,l._)("div",{class:"panel-heading"},[(0,l._)("div",{class:"panel-title hidden-xs"},[(0,l._)("span",{class:"fa fa-list"}),(0,l.Uk)("System User Entry Logs ")])],-1),b={class:"panel-body pn"},u={class:"table table-striped table-hover",id:"tbl_records",cellspacing:"0",width:"100%"},v=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{style:{"text-align":"center"}},"Log No"),(0,l._)("th",{style:{"text-align":"center"}},"Date and Time of Entry"),(0,l._)("th",{style:{"text-align":"center"}},"Username"),(0,l._)("th",{style:{"text-align":"center"}},"User Type")])],-1),g={style:{"text-align":"center"}},h={style:{"text-align":"center"}},m={style:{"text-align":"center"}},_={style:{"text-align":"center"}};var y=a(381),D=a.n(y),x=a(860),T=a(475);const L={mixins:[x.Z,T.Z],data:function(){return{aTableConfig:{aaSorting:[[0,"desc"]],aoColumnDefs:[{bSortable:!0,aTargets:[-1]}],oLanguage:{oPaginate:{sPrevious:"",sNext:""}},iDisplayLength:10,aLengthMenu:[[5,10,25,50,-1],[5,10,25,50,"All"]],sDom:'<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',oTableTools:{sSwfPath:"vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"}},aRecordList:[]}},mounted:function(){this.initPlugins(),this.initEventListeners(),this.getRecordList()},methods:{initPlugins:function(){$("#inpStartDate").datepicker({prevText:'<i class="fa fa-chevron-left"></i>',nextText:'<i class="fa fa-chevron-right"></i>',showButtonPanel:!1,beforeShow:function(e,t){var a=$(this).parents(".admin-form").attr("class");t.dpDiv.parent().hasClass(a)||t.dpDiv.wrap('<div class="'+a+'"></div>')}}),$("#inpEndDate").datepicker({prevText:'<i class="fa fa-chevron-left"></i>',nextText:'<i class="fa fa-chevron-right"></i>',showButtonPanel:!1,beforeShow:function(e,t){var a=$(this).parents(".admin-form").attr("class");t.dpDiv.parent().hasClass(a)||t.dpDiv.wrap('<div class="'+a+'"></div>')}}),$("#inpStartDate").val(D()().format("MM/DD/YYYY")),$("#inpEndDate").val(D()().format("MM/DD/YYYY"))},initEventListeners:function(){var e=this;document.body.addEventListener("click",(function(t){"btnFilterLog"===t.target.id&&e.getRecordList()}),!1)},getRecordList:function(){var e=this;setTimeout((function(){e.getRequest("user-logs/get-list",(function(t){e.aRecordList=t.data,!0===$.fn.dataTable.isDataTable("#tbl_records")&&$("#tbl_records").DataTable().destroy(),setTimeout((function(){e.initTblRecords()}),500)}),{start_date:D()($("#inpStartDate").val()).format("YYYY-MM-DD"),end_date:D()($("#inpEndDate").val()).format("YYYY-MM-DD")})}),200)},initTblRecords:function(){$("#tbl_records").DataTable(this.aTableConfig),$(".dataTables_filter input").attr("placeholder","Enter Terms...")}}};const w=(0,a(3744).Z)(L,[["render",function(e,t,a,y,D,x){var T=(0,l.up)("C_Layout_Header"),L=(0,l.up)("C_Layout_SYSA_Sidebar");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(T),(0,l.Wm)(L),(0,l._)("section",n,[s,(0,l._)("div",i,[r,(0,l._)("div",o,[d,(0,l._)("div",c,[p,f,(0,l._)("div",b,[(0,l._)("table",u,[v,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(D.aRecordList,(function(e){return(0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",g,(0,l.zw)(e.log_no),1),(0,l._)("td",h,(0,l.zw)(e.date_created),1),(0,l._)("td",m,(0,l.zw)(e.username),1),(0,l._)("td",_,(0,l.zw)(e.user_type),1)])})),256))])])])])])])])],64)}]])}}]);