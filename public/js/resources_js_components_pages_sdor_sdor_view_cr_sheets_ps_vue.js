"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_sdor_sdor_view_cr_sheets_ps_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sdor_view_cr_sheets_ps.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sdor_view_cr_sheets_ps.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libraries_request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libraries/request.js */ "./resources/js/libraries/request.js");
/* harmony import */ var _libraries_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libraries/utilities */ "./resources/js/libraries/utilities.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_request_js__WEBPACK_IMPORTED_MODULE_1__["default"], _libraries_utilities__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      bPSSheetExist: false,
      bMOOESheetExist: false,
      bSRSheetExist: false,
      aTableConfig: {
        "aoColumnDefs": [{
          'bSortable': true,
          'aTargets': [-1]
        }],
        "oLanguage": {
          "oPaginate": {
            "sPrevious": "",
            "sNext": ""
          }
        },
        "iDisplayLength": 5,
        "aLengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
        "sDom": '<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',
        "oTableTools": {
          "sSwfPath": "vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
        }
      },
      aPSsheets: [],
      aPSDisbursements: [],
      sActiveDate: '',
      aSelectedEntries: []
    };
  },
  mounted: function mounted() {
    this.initializePlugins();
    // this.checkPSSheetIfExist();
    this.getPSSheets();
    this.initCreateButtonEventListener();
  },
  methods: {
    initializePlugins: function initializePlugins() {
      // Initialize monthpicker
      $("#inpMonthYearTransact").monthpicker({
        changeYear: false,
        stepYears: 1,
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',
        showButtonPanel: true,
        beforeShow: function beforeShow(input, inst) {
          var newclass = 'admin-form';
          var themeClass = $(this).parents('.admin-form').attr('class');
          var smartpikr = inst.dpDiv.parent();
          if (!smartpikr.hasClass(themeClass)) {
            inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
          }
        }
      });
    },
    initCreateButtonEventListener: function initCreateButtonEventListener() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.id === 'btnPSGetEntries') {
          mSelf.validateSheetFilter();
        }
        if (event.target.id === 'btnPSCreateSheet') {
          mSelf.validateSheetCreation();
        }
      }, false);
    },
    validateSheetFilter: function validateSheetFilter() {
      var sMonthYear = $('#inpMonthYearTransact').val();
      if (sMonthYear === '') {
        this.showErrorAlert('Month and Year is Required!');
      } else {
        var aDate = sMonthYear.split('/');
        this.getPSDisbursements(aDate[0], aDate[1]);
      }
    },
    validateSheetCreation: function validateSheetCreation() {
      this.aSelectedEntries = [];
      var checkboxes = document.querySelectorAll('.rowCheckbox');
      var mSelf = this;
      checkboxes.forEach(function (checkbox) {
        if (checkbox.checked === true) {
          mSelf.aSelectedEntries.push(checkbox.dataset.attrId);
        }
      });
      if (this.aSelectedEntries.length < 1) {
        this.showErrorAlert('There are no entries selected!');
      } else {
        this.createSheet();
      }
    },
    initEventListenerForPsDbTable: function initEventListenerForPsDbTable() {
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.id === 'spanNewPayee') {
          var id = event.target.dataset.attrId;
          var oChkBxPsDb = document.getElementById('chkbxPs' + id);
          if (oChkBxPsDb.checked == true) {
            oChkBxPsDb.checked = false;
          } else {
            oChkBxPsDb.checked = true;
          }
        }
      }, false);
    },
    initTblPSDisbursements: function initTblPSDisbursements() {
      $('#tbl_PS_disbursement').DataTable(this.aTableConfig);
      $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
    },
    initTblPSSheets: function initTblPSSheets() {
      $('#tbl_PS_sheets').DataTable(this.aTableConfig);
      $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
    },
    initTableEventListener: function initTableEventListener() {
      // Event listener for viewing more details
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.dataset.attr === 'viewDetails') {
          window.location.href = "/front/sdor/view-sheet-details/" + event.target.dataset.sheet_id;
        }
      }, false);
    },
    getPSDisbursements: function getPSDisbursements(sMonth, sYear) {
      var _this = this;
      var mSelf = this;
      var oParams = {
        fund_type: 'ps',
        transact_year: sYear,
        transact_month: sMonth
      };
      this.getRequest('sdor/get-cash-reg-entries', function (mResponse) {
        var filteredDisbursements = $.grep(mResponse.data, function (item) {
          return item.sheet_id === null;
        });
        _this.aPSDisbursements = filteredDisbursements;
        $('#tbl_PS_disbursement').DataTable().destroy();
        setTimeout(function () {
          mSelf.initTblPSDisbursements();
        }, 500);
        setTimeout(function () {
          mSelf.initEventListenerForPsDbTable();
        }, 500);
      }, oParams);
    },
    getPSSheets: function getPSSheets() {
      var _this2 = this;
      var mSelf = this;
      this.getRequest('sdor/get-sheets', function (mResponse) {
        _this2.aPSsheets = mResponse.data;
        setTimeout(function () {
          mSelf.initTblPSSheets();
        }, 500);
        setTimeout(function () {
          mSelf.initTableEventListener();
        }, 500);
      }, {
        sheet_fund_type: 'ps'
      });
    },
    createSheet: function createSheet() {
      var _this3 = this;
      var sMonthYear = $('#inpMonthYearTransact').val();
      var aDate = sMonthYear.split('/');
      var sTitle = "Confirmation";
      var sMessage = "By creating a sheet, you are now finalizing your entries for this month and your record of transactions will be submitted for review and approval of the Office of Comptroller. Are you sure you want to proceed?";
      var mSelf = this;
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: sTitle,
        html: sMessage,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Proceed."
      }).then(function (result) {
        if (result.isConfirmed) {
          var oParams = {
            sheet_fund_type: 'ps',
            transact_month: aDate[0],
            transact_year: aDate[1],
            entries: mSelf.aSelectedEntries
          };
          _this3.postRequest('sdor/create-sheet-ps', oParams, function (mResponse) {
            $('#tbl_PS_sheets').DataTable().destroy();
            mSelf.getPSSheets();
            mSelf.getPSDisbursements();
            mSelf.showSuccessAlert('Successfully created a sheet');
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sdor_view_cr_sheets_ps.vue?vue&type=template&id=745eeebc":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sdor_view_cr_sheets_ps.vue?vue&type=template&id=745eeebc ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "main"
};
var _hoisted_2 = {
  id: "content_wrapper"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header id=\"topbar\" class=\"alt\"><div class=\"topbar-left\"><ol class=\"breadcrumb\"><li class=\"crumb-trail\"> Cash Management </li><li class=\"crumb-active\"><a>View Cash Disbursement Sheet Summary</a></li></ol></div></header>", 1);
var _hoisted_4 = {
  "class": "panel"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, " Personnel Services ", -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "panel-body"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"form-group\" id=\"divInpTransactMY\"><div class=\"admin-form mw1000 center-block\"><div class=\"col-md-3\"><label for=\"monthpicker1\" class=\"field prepend-icon\"><input type=\"text\" id=\"inpMonthYearTransact\" name=\"inpMonthYearTransact\" class=\"gui-input\" placeholder=\"Enter month and year\"><label class=\"field-icon\"><i class=\"fa fa-calendar-o\"></i></label></label></div><div class=\"col-md-5\"><button id=\"btnPSGetEntries\" type=\"button\" class=\"btn btn-primary btn-gradient dark btn-lg\"><i class=\"fa fa-refresh\"></i> Filter Entries </button>   <button id=\"btnPSCreateSheet\" type=\"button\" class=\"btn btn-system btn-gradient dark btn-lg\"><i class=\"fa fa-plus-square-o\"></i> Create Sheet (PS) </button></div></div></div>", 1);
var _hoisted_8 = {
  "class": "col-md-12"
};
var _hoisted_9 = {
  "class": "panel panel-visible",
  id: "spy2"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-title hidden-xs"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "glyphicon glyphicon-tasks"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cash Disbursement Sheets for Personnel Services ")])], -1 /* HOISTED */);
var _hoisted_12 = {
  "class": "panel-body pn"
};
var _hoisted_13 = {
  "class": "table table-striped table-hover",
  id: "tbl_PS_disbursement",
  cellspacing: "0",
  width: "100%"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Transact Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Payee"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "UACS"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Particular"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Net Amount")])], -1 /* HOISTED */);
var _hoisted_15 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_16 = {
  "class": "admin-form",
  style: {
    "margin-top": "5px"
  }
};
var _hoisted_17 = {
  "class": "option"
};
var _hoisted_18 = ["id", "data-attr-id"];
var _hoisted_19 = ["data-attr-id"];
var _hoisted_20 = {
  style: {
    "text-align": "center"
  },
  width: "15%"
};
var _hoisted_21 = {
  style: {
    "text-align": "center"
  },
  width: "20%"
};
var _hoisted_22 = {
  style: {
    "text-align": "center"
  },
  width: "10%"
};
var _hoisted_23 = {
  style: {
    "text-align": "center"
  },
  width: "40%"
};
var _hoisted_24 = {
  style: {
    "text-align": "center"
  },
  width: "15%"
};
var _hoisted_25 = {
  "class": "panel panel-visible",
  id: "spy2"
};
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-title hidden-xs"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "glyphicon glyphicon-tasks"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cash Disbursement Sheets for Personnel Services ")])], -1 /* HOISTED */);
var _hoisted_28 = {
  "class": "panel-body pn"
};
var _hoisted_29 = {
  "class": "table table-striped table-hover",
  id: "tbl_PS_sheets",
  cellspacing: "0",
  width: "100%"
};
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Sheet No"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Date Created"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Action")])], -1 /* HOISTED */);
var _hoisted_31 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_32 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_33 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_34 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_35 = ["data-sheet_id"];
var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-arrow-circle-o-right"
}, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_C_Layout_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_Header");
  var _component_C_Layout_SDOR_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_SDOR_Sidebar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_SDOR_Sidebar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Content-Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Topbar "), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Input Fields "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE Create Sheet "), _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: PS CASH DISBURSEMENT TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aPSDisbursements, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      id: 'chkbxPs' + item.cr_no,
      "data-attr-id": item.cr_no,
      "class": "rowCheckbox",
      type: "checkbox",
      name: "checked",
      value: "checked"
    }, null, 8 /* PROPS */, _hoisted_18), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      id: "spanNewPayee",
      "data-attr-id": item.cr_no,
      "class": "checkbox"
    }, null, 8 /* PROPS */, _hoisted_19)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.transact_date), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.payee_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_code), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_desc), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.net_amount), 1 /* TEXT */)]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: PS CASH DISBURSEMENT TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: PS SHEETS TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aPSsheets, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.sheet_no), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.status), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date_created), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "data-attr": "viewDetails",
      "data-sheet_id": item.sheet_id,
      "class": "btn btn-md btn-info viewDetails",
      style: {
        "margin-right": "9%"
      }
    }, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" View Details ")], 8 /* PROPS */, _hoisted_35)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: PS SHEETS TABLE ")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Content-Wrapper ")]);
}

/***/ }),

/***/ "./resources/js/components/pages/sdor/sdor_view_cr_sheets_ps.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/pages/sdor/sdor_view_cr_sheets_ps.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sdor_view_cr_sheets_ps_vue_vue_type_template_id_745eeebc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdor_view_cr_sheets_ps.vue?vue&type=template&id=745eeebc */ "./resources/js/components/pages/sdor/sdor_view_cr_sheets_ps.vue?vue&type=template&id=745eeebc");
/* harmony import */ var _sdor_view_cr_sheets_ps_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdor_view_cr_sheets_ps.vue?vue&type=script&lang=js */ "./resources/js/components/pages/sdor/sdor_view_cr_sheets_ps.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_sdor_view_cr_sheets_ps_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_sdor_view_cr_sheets_ps_vue_vue_type_template_id_745eeebc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/pages/sdor/sdor_view_cr_sheets_ps.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/sdor/sdor_view_cr_sheets_ps.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/sdor_view_cr_sheets_ps.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheets_ps_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheets_ps_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_view_cr_sheets_ps.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sdor_view_cr_sheets_ps.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/sdor/sdor_view_cr_sheets_ps.vue?vue&type=template&id=745eeebc":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/sdor_view_cr_sheets_ps.vue?vue&type=template&id=745eeebc ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheets_ps_vue_vue_type_template_id_745eeebc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheets_ps_vue_vue_type_template_id_745eeebc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_view_cr_sheets_ps.vue?vue&type=template&id=745eeebc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sdor_view_cr_sheets_ps.vue?vue&type=template&id=745eeebc");


/***/ })

}]);