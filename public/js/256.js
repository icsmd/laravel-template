"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[256],{5266:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(381),i=n.n(a),r=n(860),s=n(475);const l={mixins:[r.Z,s.Z],data:function(){return{sUserType:this.$root.getUserType(),aTableConfig:{aoColumnDefs:[{bSortable:!0,aTargets:[-1]}],oLanguage:{oPaginate:{sPrevious:"",sNext:""}},iDisplayLength:5,aLengthMenu:[[5,10,25,50,-1],[5,10,25,50,"All"]],sDom:'<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',oTableTools:{sSwfPath:"vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"}},aFundTypes:[{id:1,code:"ps",desc:"Personnel Services (PS)"},{id:2,code:"mooe",desc:"Maintenance and Other Operating Expenses (MOOE)"},{id:3,code:"sr",desc:"Special Requests (SR)"}],iSelectedFund:0,aFSList:[],aRegionList:[],aSheet:[],aSheetDetails:[],fTotalGrossAmount:0,fTotalTaxAmount:0,fTotalNetAmount:0,fTotalParticularAmount:0,sFundCode:"",sReportNo:"",sSheetNo:"",sTitleDate:"",sCurrDate:i()().format("DD-MMM-YYYY"),sCompressedSummary:"",aFundSource:[],aSheetRecap:[],aSheetSummary:[],fSumOfSWReg:0,fSumOfSWCas:0,fSumOfOffice:0,fSumOfOthers:0,sReportType:"",sReportDetailsUrl:"",sPrintPageUrl:""}},mounted:function(){this.initializePlugins(),this.initEventListeners(),this.getFundSourceList(),this.executeUserTypeRequests()},methods:{initializePlugins:function(t){$(".select2-single").select2(),$("#inpMonthYearTransact").monthpicker({changeYear:!1,stepYears:1,prevText:'<i class="fa fa-chevron-left"></i>',nextText:'<i class="fa fa-chevron-right"></i>',showButtonPanel:!0,beforeShow:function(t,e){var n=$(this).parents(".admin-form").attr("class");e.dpDiv.parent().hasClass(n)||e.dpDiv.wrap('<div class="'+n+'"></div>')}})},initTblSheets:function(){$("#tbl_cash_reg_summary").DataTable(this.aTableConfig)},initEventListeners:function(){var t=this;$("#inp_fund_type").on("select2:select",(function(t){"sr"===$("#inp_fund_type").val()?$("#divSRSelection").css("visibility",""):$("#divSRSelection").css("visibility","hidden")})),document.body.addEventListener("click",(function(e){e.preventDefault(),"btnGenReport"===e.target.id&&t.validateFilter(),"btnPrintReport"===e.target.id&&t.prepareReport()}),!1)},prepareReport:function(){var t=Object.assign({},this.aSheetDetails,{date_details:{title_date:this.sTitleDate,curr_date:this.sCurrDate}});this.sCompressedSummary=btoa(JSON.stringify(t)),this.$root.setLocalStorageValue("forEx",this.sCompressedSummary),window.open(this.sPrintPageUrl,"_blank")},validateFilter:function(){var t,e,n,a=!0,i=$("#inp_fund_type").val(),r=$("#inpMonthYearTransact").val();""===r&&(a=!1,this.showErrorAlert("Month-Year is Required!")),null==i?(a=!1,this.showErrorAlert("Type is Required!")):"sr"===i&&null==(e=$("#inp_sr").val())&&(a=!1,this.showErrorAlert("Request Reference is Required!")),"sdor"!==this.sUserType&&null==(n=$("#inp_office").val())&&(a=!1,this.showErrorAlert("Office is Required!")),!0===a&&(t={sheet_fund_type:i,transact_month:r.split("/")[0],transact_year:r.split("/")[1]},t="sr"===i?Object.assign({},t,{fs_id:e}):t,t="sdor"!==this.sUserType?Object.assign({},t,{region_id:n}):t,this.getDateValues(),this.getReportDetails(t))},getDateValues:function(){var t=$("#inpMonthYearTransact").val(),e=t.split("/")[0],n=t.split("/")[1],a=e+"-01-"+n,r=i()(a).endOf("month").format("DD");this.sTitleDate="01-"+r+" "+i()(a).format("MMMM")+" "+n},executeUserTypeRequests:function(){"sdor"!==this.sUserType&&($("#divInpOffice").css("visibility",""),this.getRegionList())},getRegionList:function(){this.aRegionList=this.$root.parseLocalStorageLib().regions},getReportDetails:function(t){var e=this;this.getRequest(this.sReportDetailsUrl,(function(t){var n=t.data;0===n.length?(e.resetDisplayTable(),e.showErrorAlert("No available data to load!"),$(".tbl-empty").css("display",""),$(".tbl-with-content").css("display","none"),$("#btnPrintReport").attr("disabled",!0),$("#btnPrintReport").attr("class","btn btn-default btn-gradient dark btn-lg")):($(".tbl-with-content").css("display",""),$(".tbl-empty").css("display","none"),$("#btnPrintReport").attr("disabled",!1),$("#btnPrintReport").attr("class","btn btn-success btn-gradient dark btn-lg"),e.aSheetDetails=n,e.reportLayoutSetter(n))}),t)},resetDisplayTable:function(){this.aSheetDetails=[],this.fTotalGrossAmount=0,this.fTotalTaxAmount=0,this.fTotalNetAmount=0,this.fTotalParticularAmount=0},reportLayoutSetter:function(t){this.sTitleDate=void 0===t.date_details?this.sTitleDate:t.date_details.title_date,this.sCurrDate=void 0===t.date_details?this.sCurrDate:t.date_details.curr_date,"cash-reg-report"===this.sReportType?(this.sReportNo=t.sheet_details.report_no,this.sSheetNo=t.sheet_details.sheet_no,this.sFundCluster=t.sheet_details.fund_desc+" ("+t.sheet_details.fund_code+")",this.computeTotalAmount()):"cash-reg-record"===this.sReportType?(this.aFundSource=t.fund_source[0],this.aSheetRecap=t.sheet_recap,this.aSheetSummary=t.sheet_summary):"cash-reg-register"===this.sReportType?(this.aFundSource=t.fund_source[0],this.aSheetRecap=t.sheet_recap,this.aSheetSummary=t.sheet_summary,this.computeSummation()):"cash-reg-liquidation"===this.sReportType&&(this.aSheetSummary=t.sheet_summary)},getFundSourceList:function(){var t=this;this.getRequest("fund-source/get-list",(function(e){t.aFSList=e.data}),{fs_type:"sr",fs_status:"RELEASED"})},computeTotalAmount:function(){var t=this.aSheetDetails.sheet_entries.reduce((function(t,e){return t+parseFloat(e.net_amount)}),0),e=this.aSheetDetails.sheet_entries.reduce((function(t,e){return t+parseFloat(e.tax_amount)}),0),n=this.aSheetDetails.sheet_entries.reduce((function(t,e){return t+parseFloat(e.gross_amount)}),0),a=this.aSheetDetails.sheet_recap.reduce((function(t,e){return t+parseFloat(e.total_amount)}),0);this.fTotalGrossAmount=n.toFixed(2),this.fTotalTaxAmount=e.toFixed(2),this.fTotalNetAmount=t.toFixed(2),this.fTotalParticularAmount=a.toFixed(2)},computeSummation:function(t){var e=this;this.aSheetDetails.sheet_entries.forEach((function(t){"5-01-010-1000"===t.uacs_code?e.fSumOfSWReg+=parseFloat(t.net_amount):"5-01-010-2000"===t.uacs_code?e.fSumOfSWCas+=parseFloat(t.net_amount):"5-02-03-010"===t.uacs_code?e.fSumOfOffice+=parseFloat(t.net_amount):e.fSumOfOthers+=parseFloat(t.net_amount)}))},parseCompressedData:function(){var t=this.$root.getLocalStorageValue("forEx");this.aSheetDetails=JSON.parse(atob(t)),this.reportLayoutSetter(this.aSheetDetails)},printReport:function(){var t=document.getElementById("printableDiv").outerHTML,e=document.body.innerHTML;document.body.innerHTML=t,window.print(),document.body.innerHTML=e}}}},9210:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(3645),i=n.n(a)()((function(t){return t[1]}));i.push([t.id,'@media print{@page{size:A4 landscape!important}#printableDiv[data-v-526f1110]{display:block!important}.header[data-v-526f1110]{height:50px;left:0;margin-bottom:1%;padding:1px;position:absolute;right:0;text-align:center;top:0}.table-container[data-v-526f1110]{border:1px solid #000;margin-top:1%!important}.table-container[data-v-526f1110]:after{content:"";display:block;height:0;margin-top:1%!important}table[data-v-526f1110]{border:1px solid #000;width:100%}tbody[data-v-526f1110],td[data-v-526f1110],thead[data-v-526f1110],tr[data-v-526f1110]{border:1px solid #000;font-family:Arial!important;font-size:9px!important}tbody[data-v-526f1110]:after,tr[data-v-526f1110]:after{margin-top:50%;page-break-before:always}thead[data-v-526f1110],thead[data-v-526f1110]:after{display:table-header-group!important}.p-inside-table[data-v-526f1110]{font-size:12px!important;margin:3%!important}}',""]);const r=i},3256:(t,e,n)=>{n.r(e),n.d(e,{default:()=>de});var a=n(821),i=function(t){return(0,a.dD)("data-v-526f1110"),t=t(),(0,a.Cn)(),t},r={id:"printableDiv"},s={class:"header"},l=i((function(){return(0,a._)("h4",null,"CASH DISBURSEMENT RECORD",-1)})),o=i((function(){return(0,a._)("br",null,null,-1)})),_={class:"table-container",id:"tbl_cash_reg_summary",cellspacing:"0",width:"100%",style:{"font-family":"Muli !important"}},d={class:"custom-table-header"},u=i((function(){return(0,a._)("tr",{style:{border:"solid 1px white !important"}},[(0,a._)("td",{colspan:"8",style:{border:"solid 1px white !important"}}," ")],-1)})),c=i((function(){return(0,a._)("tr",{style:{border:"solid 1px white !important"}},[(0,a._)("td",{colspan:"8",style:{border:"solid 1px white !important"}}," ")],-1)})),p=i((function(){return(0,a._)("tr",{style:{border:"solid 1px white !important"}},[(0,a._)("td",{style:{border:"solid 1px white !important"}},"Entity Name :"),(0,a._)("td",{colspan:"7",style:{border:"solid 1px white !important"}}," ")],-1)})),f={style:{border:"solid 1px white !important"}},h=i((function(){return(0,a._)("td",{style:{border:"solid 1px white !important"}},"Fund Cluster :",-1)})),g={style:{border:"solid 1px white !important"}},y=i((function(){return(0,a._)("td",{colspan:"4",style:{border:"solid 1px white !important"}}," ",-1)})),m=i((function(){return(0,a._)("td",{style:{border:"solid 1px white !important"}},"Sheet No. :",-1)})),b={style:{border:"solid 1px white !important"}},x=i((function(){return(0,a._)("tr",{style:{"border-top":"solid 1px white !important","border-left":"solid 1px rgb(255, 255, 255)","border-right":"solid 1px rgb(255, 255, 255)"}},[(0,a._)("td",{colspan:"8",style:{border:"solid 1px white !important","border-bottom":"1px solid black !important"}},"  ")],-1)})),v=i((function(){return(0,a._)("th",{colspan:"3",style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{style:{"margin-top":"20px"},class:"p-inside-table"},[(0,a._)("br"),(0,a.Uk)("___________________________________"),(0,a._)("br"),(0,a.Uk)("Accountable Officer")])],-1)})),S=i((function(){return(0,a._)("th",{colspan:"3",style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{style:{"margin-top":"20px"},class:"p-inside-table"},[(0,a.Uk)("Special Disbursing Officer"),(0,a._)("br"),(0,a.Uk)("Official Designation")])],-1)})),D={colspan:"2",style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},w={style:{"margin-top":"20px"},class:"p-inside-table"},T=i((function(){return(0,a._)("br",null,null,-1)})),R=i((function(){return(0,a._)("tr",null,[(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"Date")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"ADA/DV/Payroll No.")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"Payee")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"UACS Object Code")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"Nature of Payment")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},[(0,a.Uk)("Cash Advance "),(0,a._)("br"),(0,a.Uk)("Received/"),(0,a._)("br"),(0,a.Uk)("Refunded")])]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"Disbursements")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"Cash Advance Balance")])],-1)})),F={style:{"text-align":"right"}},C={class:"p-inside-table"},O=i((function(){return(0,a._)("td",{style:{"text-align":"center"}}," ",-1)})),A=i((function(){return(0,a._)("td",{style:{"text-align":"center"}}," ",-1)})),P=i((function(){return(0,a._)("td",{style:{"text-align":"center"}}," ",-1)})),k={style:{"text-align":"left"}},U={class:"p-inside-table"},z={style:{"text-align":"right"}},E={class:"p-inside-table"},L=i((function(){return(0,a._)("span",{class:"pull-left"},"Php",-1)})),N=i((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),M={style:{"text-align":"right"}},$={class:"p-inside-table"},Y=i((function(){return(0,a._)("span",{class:"pull-left"},"Php",-1)})),q={style:{"text-align":"right"}},H={class:"p-inside-table"},I={style:{"text-align":"center"}},Z={class:"p-inside-table"},B={style:{"text-align":"left"}},V={class:"p-inside-table"},j={style:{"text-align":"left"}},G={class:"p-inside-table"},W={style:{"text-align":"left"}},J={class:"p-inside-table"},K=i((function(){return(0,a._)("td",{style:{"text-align":"left"}}," ",-1)})),Q={style:{"text-align":"right"}},X={class:"p-inside-table"},tt=i((function(){return(0,a._)("span",{class:"pull-left"},"Php",-1)})),et={style:{"text-align":"right"}},nt={class:"p-inside-table"},at=i((function(){return(0,a._)("span",{class:"pull-left"},"Php",-1)})),it=i((function(){return(0,a._)("tr",null,[(0,a._)("td",{style:{"text-align":"right"}}," "),(0,a._)("td",{style:{"text-align":"center"}}," "),(0,a._)("td",{style:{"text-align":"left"}}," "),(0,a._)("td",{style:{"text-align":"left"}}," "),(0,a._)("td",{style:{"text-align":"left"}}," "),(0,a._)("td",{style:{"text-align":"right"}}," "),(0,a._)("td",{style:{"text-align":"right"}}," ")],-1)})),rt=i((function(){return(0,a._)("tr",null,[(0,a._)("td",{style:{"text-align":"right"}},[(0,a._)("b",null,[(0,a._)("p",{class:"p-inside-table"},"RECAP:")])]),(0,a._)("td",{style:{"text-align":"center"}}," "),(0,a._)("td",{style:{"text-align":"center"}}," "),(0,a._)("td",{style:{"text-align":"center"}}," "),(0,a._)("td",{style:{"text-align":"left"}}," "),(0,a._)("td",{style:{"text-align":"left"}}," "),(0,a._)("td",{style:{"text-align":"right"}}," "),(0,a._)("td",{style:{"text-align":"right"}}," ")],-1)})),st=i((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),lt=i((function(){return(0,a._)("td",{style:{"text-align":"center"}}," ",-1)})),ot={style:{"text-align":"left"}},_t={class:"p-inside-table"},dt={style:{"text-align":"right"}},ut={class:"p-inside-table"},ct=i((function(){return(0,a._)("td",{style:{"text-align":"left"}}," ",-1)})),pt=i((function(){return(0,a._)("td",{style:{"text-align":"left"}}," ",-1)})),ft=i((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),ht=i((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),gt=i((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),yt=i((function(){return(0,a._)("td",{style:{"text-align":"center"}}," ",-1)})),mt=i((function(){return(0,a._)("td",{style:{"text-align":"left"}},[(0,a._)("p",{class:"p-inside-table"},[(0,a._)("b",null,"TOTAL:")])],-1)})),bt={style:{"text-align":"right"}},xt={class:"p-inside-table"},vt=i((function(){return(0,a._)("td",{style:{"text-align":"left"}}," ",-1)})),St=i((function(){return(0,a._)("td",{style:{"text-align":"left"}}," ",-1)})),Dt=i((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),wt=i((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),Tt=i((function(){return(0,a._)("tr",null,[(0,a._)("td",{style:{"text-align":"right"}}," "),(0,a._)("td",{style:{"text-align":"center"}}," "),(0,a._)("td",{style:{"text-align":"left"}}," "),(0,a._)("td",{style:{"text-align":"left"}}," "),(0,a._)("td",{style:{"text-align":"left"}}," "),(0,a._)("td",{style:{"text-align":"right"}}," "),(0,a._)("td",{style:{"text-align":"right"}}," ")],-1)})),Rt=i((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),Ft=i((function(){return(0,a._)("td",{style:{"text-align":"center"}}," ",-1)})),Ct=i((function(){return(0,a._)("td",{style:{"text-align":"center"}}," ",-1)})),Ot=i((function(){return(0,a._)("td",{style:{"text-align":"left"}}," ",-1)})),At=i((function(){return(0,a._)("td",{style:{"text-align":"left"}}," ",-1)})),Pt=i((function(){return(0,a._)("td",{style:{"text-align":"left"}},[(0,a._)("p",{class:"p-inside-table"},"COH - Bank")],-1)})),kt={style:{"text-align":"right"}},Ut={class:"p-inside-table"},zt=i((function(){return(0,a._)("span",{class:"pull-left"},"Php",-1)})),Et=i((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),Lt=i((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),Nt=i((function(){return(0,a._)("td",{style:{"text-align":"center"}}," ",-1)})),Mt=i((function(){return(0,a._)("td",{style:{"text-align":"center"}}," ",-1)})),$t=i((function(){return(0,a._)("td",{style:{"text-align":"left"}}," ",-1)})),Yt=i((function(){return(0,a._)("td",{style:{"text-align":"left"}}," ",-1)})),qt=i((function(){return(0,a._)("td",{style:{"text-align":"left"}},[(0,a._)("p",{class:"p-inside-table"},"COH - Hand")],-1)})),Ht={style:{"text-align":"right"}},It={class:"p-inside-table"},Zt=i((function(){return(0,a._)("span",{class:"pull-left"},"Php",-1)})),Bt=i((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),Vt=i((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),jt=i((function(){return(0,a._)("td",{style:{"text-align":"center"}}," ",-1)})),Gt=i((function(){return(0,a._)("td",{style:{"text-align":"center"}}," ",-1)})),Wt=i((function(){return(0,a._)("td",{style:{"text-align":"left"}}," ",-1)})),Jt=i((function(){return(0,a._)("td",{style:{"text-align":"left"}}," ",-1)})),Kt=i((function(){return(0,a._)("td",{style:{"text-align":"left"}},[(0,a._)("p",{class:"p-inside-table"},[(0,a._)("b",null,"Total")])],-1)})),Qt={style:{"text-align":"right"}},Xt={class:"p-inside-table"},te=i((function(){return(0,a._)("span",{class:"pull-left"},"Php",-1)})),ee={style:{"text-align":"right"}},ne={class:"p-inside-table"},ae=i((function(){return(0,a._)("span",{class:"pull-left"},"Php",-1)})),ie=(0,a.uE)('<div id="certDiv" style="margin-top:3%;text-align:center;" data-v-526f1110><p data-v-526f1110><b data-v-526f1110>CERTIFICATION</b></p><p data-v-526f1110>I hereby certify on my official oath that the foregoing is a correct and complete record of all cash disbursements had by me in my capacity as _________________________ of _________________________ during the period from ____________ to ____________, inclusive, as indicated in the corresponding columns. </p></div><div style="margin-left:50%;margin-top:3%;text-align:center;" data-v-526f1110><p data-v-526f1110>_________________________________</p><p style="margin-top:1%;" data-v-526f1110>___________________</p><p data-v-526f1110>Date</p></div><div style="margin-right:60%;text-align:center;" data-v-526f1110><p style="text-align:left !important;" data-v-526f1110>CERTIFIED CORRECT BY:</p><p style="margin-top:5%;" data-v-526f1110>_________________________________</p><p data-v-526f1110>Regional Director</p></div>',3);const re={mixins:[n(5266).Z],created:function(){this.sReportType="cash-reg-record",this.parseCompressedData()},mounted:function(){this.printReport()}};var se=n(3379),le=n.n(se),oe=n(9210),_e={insert:"head",singleton:!1};le()(oe.Z,_e);oe.Z.locals;const de=(0,n(3744).Z)(re,[["render",function(t,e,n,i,re,se){return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",s,[l,(0,a._)("h5",null,"Period Covered "+(0,a.zw)(t.sTitleDate),1),o]),(0,a._)("table",_,[(0,a._)("thead",d,[u,c,p,(0,a._)("tr",f,[h,(0,a._)("td",g,(0,a.zw)(t.aFundSource.fc_desc)+" ("+(0,a.zw)(t.aFundSource.fc_code)+") ",1),y,m,(0,a._)("td",b,(0,a.zw)(t.aSheetSummary.sheet_no),1)]),x,(0,a._)("tr",null,[v,S,(0,a._)("th",D,[(0,a._)("p",w,[(0,a.Uk)((0,a.zw)(t.aSheetSummary.region_abbr)+" ("+(0,a.zw)(t.aSheetSummary.region_desc)+")",1),T,(0,a.Uk)("Station")])])]),R]),(0,a._)("tbody",null,[(0,a._)("tr",null,[(0,a._)("td",F,[(0,a._)("p",C,(0,a.zw)(t.convertDateFormat(t.aFundSource.date_created,"DD-MMM")),1)]),O,A,P,(0,a._)("td",k,[(0,a._)("p",U,(0,a.zw)(t.aFundSource.fs_desc),1)]),(0,a._)("td",z,[(0,a._)("p",E,[L,(0,a.Uk)(" "+(0,a.zw)(t.convertNumberFormat(t.aFundSource.fs_net_amount)),1)])]),N,(0,a._)("td",M,[(0,a._)("p",$,[Y,(0,a.Uk)(" "+(0,a.zw)(t.convertNumberFormat(t.aFundSource.fs_net_amount)),1)])])]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.aSheetDetails.sheet_entries,(function(e){return(0,a.wg)(),(0,a.iD)("tr",null,[(0,a._)("td",q,[(0,a._)("p",H,(0,a.zw)(t.convertDateFormat(e.date_created,"DD-MMM")),1)]),(0,a._)("td",I,[(0,a._)("p",Z,(0,a.zw)(e.fs_dv_no),1)]),(0,a._)("td",B,[(0,a._)("p",V,(0,a.zw)(e.payee_name),1)]),(0,a._)("td",j,[(0,a._)("p",G,(0,a.zw)(e.uacs_code),1)]),(0,a._)("td",W,[(0,a._)("p",J,(0,a.zw)(e.uacs_acc_title),1)]),K,(0,a._)("td",Q,[(0,a._)("p",X,[tt,(0,a.Uk)(" "+(0,a.zw)(t.convertNumberFormat(e.net_amount)),1)])]),(0,a._)("td",et,[(0,a._)("p",nt,[at,(0,a.Uk)(" "+(0,a.zw)(t.convertNumberFormat(e.difference)),1)])])])})),256)),it,rt,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.aSheetRecap,(function(e){return(0,a.wg)(),(0,a.iD)("tr",null,[st,lt,(0,a._)("td",ot,[(0,a._)("p",_t,(0,a.zw)(e.uacs_code),1)]),(0,a._)("td",dt,[(0,a._)("p",ut,(0,a.zw)(t.convertNumberFormat(e.total_amount)),1)]),ct,pt,ft,ht])})),256)),(0,a._)("tr",null,[gt,yt,mt,(0,a._)("td",bt,[(0,a._)("p",xt,[(0,a._)("b",null,(0,a.zw)(t.convertNumberFormat(t.aSheetSummary.total_expenses)),1)])]),vt,St,Dt,wt]),Tt,(0,a._)("tr",null,[Rt,Ft,Ct,Ot,At,Pt,(0,a._)("td",kt,[(0,a._)("p",Ut,[zt,(0,a.Uk)(" "+(0,a.zw)(t.convertNumberFormat(t.aSheetSummary.total_cash)),1)])]),Et]),(0,a._)("tr",null,[Lt,Nt,Mt,$t,Yt,qt,(0,a._)("td",Ht,[(0,a._)("p",It,[Zt,(0,a.Uk)(" "+(0,a.zw)(t.convertNumberFormat(t.aSheetSummary.total_coh)),1)])]),Bt]),(0,a._)("tr",null,[Vt,jt,Gt,Wt,Jt,Kt,(0,a._)("td",Qt,[(0,a._)("p",Xt,[(0,a._)("b",null,[te,(0,a.Uk)(" "+(0,a.zw)(t.convertNumberFormat(t.aSheetSummary.total_expenses)),1)])])]),(0,a._)("td",ee,[(0,a._)("p",ne,[(0,a._)("b",null,[ae,(0,a.Uk)(" "+(0,a.zw)(t.convertNumberFormat(t.aSheetSummary.total_coh)),1)])])])])])]),ie])}],["__scopeId","data-v-526f1110"]])}}]);