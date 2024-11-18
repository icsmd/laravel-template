"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[755],{7242:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(6455),s=a.n(n),l=a(860),i=a(475);const r={mixins:[l.Z,i.Z],data:function(){return{sFundType:"",aSummaryTableConfig:{aaSorting:[[0,"desc"]],aoColumnDefs:[{bSortable:!1,aTargets:[1]}],oLanguage:{oPaginate:{sPrevious:"",sNext:""}},iDisplayLength:10,aLengthMenu:[[5,10,25,50,-1],[5,10,25,50,"All"]],sDom:'<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',oTableTools:{sSwfPath:"vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"}},aBreakdownTableConfig:{aaSorting:[[0,"desc"]],aoColumnDefs:[{bSortable:!1,aTargets:[3]}],oLanguage:{oPaginate:{sPrevious:"",sNext:""}},iDisplayLength:10,aLengthMenu:[[5,10,25,50,-1],[5,10,25,50,"All"]],sDom:'<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',oTableTools:{sSwfPath:"vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"}},aCashRegSummary:[],aCashRegBreakdown:[],sActiveDate:""}},methods:{initTblCashRegSummary:function(){$("#tbl_cash_reg_summary").DataTable(this.aSummaryTableConfig),$(".dataTables_filter input").attr("placeholder","Enter Terms...")},initTblCashRegBreakdown:function(){$("#tbl_cash_reg_breakdown").DataTable(this.aBreakdownTableConfig),$(".dataTables_filter input").attr("placeholder","Enter Terms...")},initEventListeners:function(){var t=this;document.body.addEventListener("click",(function(e){if(e.preventDefault(),"viewDetails"===e.target.dataset.attr){var a=e.target.dataset.uacs_id;t.getCashBookBreakdown(a)}}),!1)},initTable2Btns:function(){var t=this;document.body.addEventListener("click",(function(e){if(console.log(e.target.id),e.preventDefault(),"viewRecordDetails"===e.target.dataset.attr){e.target.dataset;var a=e.target.dataset.cr_no;window.location.href="/front/sdor/view-entry-details/"+a}if("deleteRecord"===e.target.dataset.attr){var n=e.target.dataset.uacs_id,s=e.target.dataset.cr_no;t.deleteRecord(s,n)}}),!1)},deleteRecord:function(t,e){var a=this,n=this;s().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(s){s.isConfirmed&&a.postRequest("sdor/delete-entry",{iId:t},(function(t){n.showSuccessAlert("Successfully deleted the entry"),n.getCashBookBreakdown(e)}))}))},getCashBookSummary:function(){var t=this,e=this;this.getRequest("sdor/get-cash-reg-summary",(function(a){t.aCashRegSummary=a.data,!0===$.fn.dataTable.isDataTable("#tbl_cash_reg_summary")&&$("#tbl_cash_reg_summary").DataTable().destroy(),setTimeout((function(){e.initTblCashRegSummary()}),500),setTimeout((function(){e.initEventListeners()}),500)}),{fund_type:this.sFundType})},getCashBookBreakdown:function(t){var e=this;this.aCashRegBreakdown=this.aCashRegSummary[t],!0===$.fn.dataTable.isDataTable("#tbl_cash_reg_breakdown")&&$("#tbl_cash_reg_breakdown").DataTable().destroy(),setTimeout((function(){e.initTblCashRegBreakdown()}),100),setTimeout((function(){e.initTable2Btns()}),500)}}}},9755:(t,e,a)=>{a.r(e),a.d(e,{default:()=>Y});var n=a(821),s={id:"main"},l={id:"content_wrapper"},i=(0,n.uE)('<header id="topbar" class="alt"><div class="topbar-left"><ol class="breadcrumb"><li class="crumb-trail"> Cash Management </li><li class="crumb-trail"> View Cash Disbursements </li><li class="crumb-active"><a>Special Requests</a></li></ol></div></header>',1),r={class:"panel"},o=(0,n._)("div",{class:"panel-heading"},[(0,n._)("span",{class:"panel-title"},"Summary of Entries for Special")],-1),d={class:"panel-body"},c={class:"col-md-5"},u={class:"panel panel-colorbox-open panel-dark",id:"spy2"},_=(0,n._)("div",{class:"panel-heading"},[(0,n._)("div",{class:"panel-title hidden-xs"},[(0,n._)("span",{class:"glyphicon glyphicon-tasks"}),(0,n.Uk)("Summary of Transactions ")])],-1),g={class:"panel-body pn"},b={class:"table table-striped table-hover",id:"tbl_cash_reg_summary",cellspacing:"0",width:"100%"},h=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{style:{"text-align":"center"}},"UACS Code"),(0,n._)("th",{style:{"text-align":"center"}},"Account Title"),(0,n._)("th",{style:{"text-align":"center"}},"Action")])],-1),f={style:{"text-align":"left"}},m={style:{"text-align":"left"}},p={style:{"text-align":"center"}},y=["id","data-uacs_id"],w=(0,n._)("i",{class:"fa fa-arrow-circle-o-right"},null,-1),v={class:"col-md-7"},T={class:"panel panel-colorbox-open panel-dark",id:"spy2"},k={class:"panel-heading"},x={class:"panel-title hidden-xs"},C=(0,n._)("span",{class:"fa fa-sitemap"},null,-1),D={class:"panel-body pn"},S={class:"table table-striped table-hover",id:"tbl_cash_reg_breakdown",cellspacing:"0",width:"100%"},R=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{style:{"text-align":"center"}},"SysId"),(0,n._)("th",{style:{"text-align":"center"}},"Date/Time Encoded"),(0,n._)("th",{style:{"text-align":"center"}},"Payee"),(0,n._)("th",{style:{"text-align":"center"}},"Net Amount"),(0,n._)("th",{style:{"text-align":"center"}},"Action(s)")])],-1),B={style:{"text-align":"center"}},L={style:{"text-align":"center"}},A={style:{"text-align":"left"}},E={style:{"text-align":"right"}},$=["id"],z=["id","data-cr_no"],P=[(0,n._)("i",{class:"fa fa-eye"},null,-1)],U=["data-uacs_id","data-cr_no"],Z=[(0,n._)("i",{class:"fa fa-trash"},null,-1)],F={key:1,type:"button",class:"btn btn-md btn-default",disabled:""},I=[(0,n._)("i",{class:"fa fa-trash"},null,-1)];const N={mixins:[a(7242).Z],mounted:function(){this.sFundType="sr",this.getCashBookSummary()}};const Y=(0,a(3744).Z)(N,[["render",function(t,e,a,N,Y,q){var H=(0,n.up)("C_Layout_Header"),M=(0,n.up)("C_Layout_SDOR_Sidebar");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(H),(0,n.Wm)(M),(0,n._)("section",l,[i,(0,n._)("div",r,[o,(0,n._)("div",d,[(0,n._)("div",c,[(0,n._)("div",u,[_,(0,n._)("div",g,[(0,n._)("table",b,[h,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.aCashRegSummary,(function(t){return(0,n.wg)(),(0,n.iD)("tr",null,[(0,n._)("td",f,(0,n.zw)(t[0].uacs_code),1),(0,n._)("td",m,(0,n.zw)(t[0].uacs_desc),1),(0,n._)("td",p,[(0,n._)("button",{id:t[0].uacs_id,type:"button","data-attr":"viewDetails","data-uacs_id":t[0].uacs_id,class:"btn btn-md btn-info pull-right viewDetails",style:{"margin-right":"9%"}},[w,(0,n.Uk)(" View Details ")],8,y)])])})),256))])])])])]),(0,n._)("div",v,[(0,n._)("div",T,[(0,n._)("div",k,[(0,n._)("div",x,[C,(0,n.Uk)("Transaction Breakdown "+(0,n.zw)(t.sActiveDate),1)])]),(0,n._)("div",D,[(0,n._)("table",S,[R,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.aCashRegBreakdown,(function(t){return(0,n.wg)(),(0,n.iD)("tr",null,[(0,n._)("td",B,(0,n.zw)(t.temp_id),1),(0,n._)("td",L,(0,n.zw)(t.date_created),1),(0,n._)("td",A,(0,n.zw)(t.payee_name),1),(0,n._)("td",E,(0,n.zw)(t.net_amount),1),(0,n._)("td",{id:t.cr_no,style:{"text-align":"center"}},[(0,n._)("button",{id:t.transact_date,type:"button",class:"btn btn-md btn-info","data-attr":"viewRecordDetails","data-cr_no":t.cr_no},P,8,z),(0,n.Uk)("   "),"FOR REVISION"===t.sheet_stat||"---"===t.sheet_stat?((0,n.wg)(),(0,n.iD)("button",{key:0,"data-uacs_id":t.uacs_id,type:"button",class:"btn btn-md btn-danger","data-attr":"deleteRecord","data-cr_no":t.cr_no},Z,8,U)):((0,n.wg)(),(0,n.iD)("button",F,I))],8,$)])})),256))])])])])])])])])])}]])}}]);