"use strict";
(self["webpackChunkks_console_ng"] = self["webpackChunkks_console_ng"] || []).push([[626],{

/***/ 943:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/list.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_LIST: () => (/* binding */ MAT_LIST),
/* harmony export */   MAT_LIST_CONFIG: () => (/* binding */ MAT_LIST_CONFIG),
/* harmony export */   MAT_NAV_LIST: () => (/* binding */ MAT_NAV_LIST),
/* harmony export */   MAT_SELECTION_LIST_VALUE_ACCESSOR: () => (/* binding */ MAT_SELECTION_LIST_VALUE_ACCESSOR),
/* harmony export */   MatActionList: () => (/* binding */ MatActionList),
/* harmony export */   MatDivider: () => (/* reexport safe */ _divider_mjs__WEBPACK_IMPORTED_MODULE_1__.MatDivider),
/* harmony export */   MatList: () => (/* binding */ MatList),
/* harmony export */   MatListItem: () => (/* binding */ MatListItem),
/* harmony export */   MatListItemAvatar: () => (/* binding */ MatListItemAvatar),
/* harmony export */   MatListItemIcon: () => (/* binding */ MatListItemIcon),
/* harmony export */   MatListItemLine: () => (/* binding */ MatListItemLine),
/* harmony export */   MatListItemMeta: () => (/* binding */ MatListItemMeta),
/* harmony export */   MatListItemTitle: () => (/* binding */ MatListItemTitle),
/* harmony export */   MatListModule: () => (/* binding */ MatListModule),
/* harmony export */   MatListOption: () => (/* binding */ MatListOption),
/* harmony export */   MatListSubheaderCssMatStyler: () => (/* binding */ MatListSubheaderCssMatStyler),
/* harmony export */   MatNavList: () => (/* binding */ MatNavList),
/* harmony export */   MatSelectionList: () => (/* binding */ MatSelectionList),
/* harmony export */   MatSelectionListChange: () => (/* binding */ MatSelectionListChange),
/* harmony export */   SELECTION_LIST: () => (/* binding */ SELECTION_LIST),
/* harmony export */   _MatListItemGraphicBase: () => (/* binding */ _MatListItemGraphicBase)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 4527);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ 4724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 4733);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/platform */ 6488);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/private */ 1235);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _ripple_BT3tzh6F_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ripple-BT3tzh6F.mjs */ 6027);
/* harmony import */ var _structural_styles_BQUT6wsL_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./structural-styles-BQUT6wsL.mjs */ 6222);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/observers */ 9539);
/* harmony import */ var _divider_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./divider.mjs */ 4102);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/a11y */ 6988);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/collections */ 7400);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/keycodes */ 5758);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/keycodes */ 4879);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common-module-WayjW0Pb.mjs */ 7708);
/* harmony import */ var _index_SYVYjXwK_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./index-SYVYjXwK.mjs */ 5901);
/* harmony import */ var _pseudo_checkbox_module_CAX2sutq_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pseudo-checkbox-module-CAX2sutq.mjs */ 8352);











const _c0 = ["*"];
const _c1 = ".mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mdc-list-list-item-container-color, transparent);border-radius:var(--mdc-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mdc-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mdc-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mdc-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mdc-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:\"\";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mdc-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mdc-list-list-item-leading-icon-size, 24px);height:var(--mdc-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mdc-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mdc-list-list-item-leading-avatar-size, 40px);height:var(--mdc-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mdc-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mdc-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mdc-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mdc-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mdc-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mdc-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mdc-list-list-item-trailing-icon-size, 24px);height:var(--mdc-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mdc-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mdc-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mdc-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mdc-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mdc-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mdc-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mdc-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mdc-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mdc-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mdc-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mdc-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mdc-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mdc-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mdc-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mdc-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mdc-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mdc-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mdc-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mdc-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mdc-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mdc-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mdc-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mdc-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mdc-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mdc-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mdc-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mdc-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mdc-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mdc-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mdc-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mdc-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-focus-indicator::before{content:\"\"}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n";
const _c2 = ["unscopedContent"];
const _c3 = ["text"];
const _c4 = [[["", "matListItemAvatar", ""], ["", "matListItemIcon", ""]], [["", "matListItemTitle", ""]], [["", "matListItemLine", ""]], "*", [["", "matListItemMeta", ""]], [["mat-divider"]]];
const _c5 = ["[matListItemAvatar],[matListItemIcon]", "[matListItemTitle]", "[matListItemLine]", "*", "[matListItemMeta]", "mat-divider"];
const _c6 = [[["", "matListItemTitle", ""]], [["", "matListItemLine", ""]], "*", [["mat-divider"]], [["", "matListItemAvatar", ""], ["", "matListItemIcon", ""]]];
const _c7 = ["[matListItemTitle]", "[matListItemLine]", "*", "mat-divider", "[matListItemAvatar],[matListItemIcon]"];
function MatListOption_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 4);
  }
}
function MatListOption_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-checkbox--disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.selected)("disabled", ctx_r1.disabled);
  }
}
function MatListOption_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 20)(4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-radio--disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.selected)("disabled", ctx_r1.disabled);
  }
}
function MatListOption_Conditional_6_ng_template_1_Template(rf, ctx) {}
function MatListOption_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatListOption_Conditional_6_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const checkbox_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", checkbox_r3);
  }
}
function MatListOption_Conditional_7_ng_template_1_Template(rf, ctx) {}
function MatListOption_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatListOption_Conditional_7_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const radio_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", radio_r4);
  }
}
function MatListOption_Conditional_8_ng_template_0_Template(rf, ctx) {}
function MatListOption_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatListOption_Conditional_8_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const icons_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", icons_r5);
  }
}
function MatListOption_Conditional_15_ng_template_1_Template(rf, ctx) {}
function MatListOption_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatListOption_Conditional_15_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const checkbox_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", checkbox_r3);
  }
}
function MatListOption_Conditional_16_ng_template_1_Template(rf, ctx) {}
function MatListOption_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatListOption_Conditional_16_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const radio_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", radio_r4);
  }
}
function MatListOption_Conditional_17_ng_template_0_Template(rf, ctx) {}
function MatListOption_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatListOption_Conditional_17_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const icons_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", icons_r5);
  }
}












/**
 * Injection token that can be used to reference instances of an `ListOption`. It serves
 * as alternative token to an actual implementation which could result in undesired
 * retention of the class or circular references breaking runtime execution.
 * @docs-private
 */
const LIST_OPTION = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ListOption');

/**
 * Directive capturing the title of a list item. A list item usually consists of a
 * title and optional secondary or tertiary lines.
 *
 * Text content for the title never wraps. There can only be a single title per list item.
 */
let MatListItemTitle = /*#__PURE__*/(() => {
  class MatListItemTitle {
    _elementRef = (() => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef))();
    constructor() {}
    static ɵfac = (() => function MatListItemTitle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatListItemTitle)();
    })();
    static ɵdir = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatListItemTitle,
      selectors: [["", "matListItemTitle", ""]],
      hostAttrs: [1, "mat-mdc-list-item-title", "mdc-list-item__primary-text"]
    }))();
  }
  return MatListItemTitle;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive capturing a line in a list item. A list item usually consists of a
 * title and optional secondary or tertiary lines.
 *
 * Text content inside a line never wraps. There can be at maximum two lines per list item.
 */
let MatListItemLine = /*#__PURE__*/(() => {
  class MatListItemLine {
    _elementRef = (() => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef))();
    constructor() {}
    static ɵfac = (() => function MatListItemLine_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatListItemLine)();
    })();
    static ɵdir = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatListItemLine,
      selectors: [["", "matListItemLine", ""]],
      hostAttrs: [1, "mat-mdc-list-item-line", "mdc-list-item__secondary-text"]
    }))();
  }
  return MatListItemLine;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive matching an optional meta section for list items.
 *
 * List items can reserve space at the end of an item to display a control,
 * button or additional text content.
 */
let MatListItemMeta = /*#__PURE__*/(() => {
  class MatListItemMeta {
    static ɵfac = (() => function MatListItemMeta_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatListItemMeta)();
    })();
    static ɵdir = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatListItemMeta,
      selectors: [["", "matListItemMeta", ""]],
      hostAttrs: [1, "mat-mdc-list-item-meta", "mdc-list-item__end"]
    }))();
  }
  return MatListItemMeta;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @docs-private
 *
 * MDC uses the very intuitively named classes `.mdc-list-item__start` and `.mat-list-item__end` to
 * position content such as icons or checkboxes/radios that comes either before or after the text
 * content respectively. This directive detects the placement of the checkbox/radio and applies the
 * correct MDC class to position the icon/avatar on the opposite side.
 */
let _MatListItemGraphicBase = /*#__PURE__*/(() => {
  class _MatListItemGraphicBase {
    _listOption = (() => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(LIST_OPTION, {
      optional: true
    }))();
    constructor() {}
    _isAlignedAtStart() {
      // By default, in all list items the graphic is aligned at start. In list options,
      // the graphic is only aligned at start if the checkbox/radio is at the end.
      return !this._listOption || this._listOption?._getTogglePosition() === 'after';
    }
    static ɵfac = (() => function _MatListItemGraphicBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatListItemGraphicBase)();
    })();
    static ɵdir = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: _MatListItemGraphicBase,
      hostVars: 4,
      hostBindings: function _MatListItemGraphicBase_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-list-item__start", ctx._isAlignedAtStart())("mdc-list-item__end", !ctx._isAlignedAtStart());
        }
      }
    }))();
  }
  return _MatListItemGraphicBase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive matching an optional avatar within a list item.
 *
 * List items can reserve space at the beginning of an item to display an avatar.
 */
let MatListItemAvatar = /*#__PURE__*/(() => {
  class MatListItemAvatar extends _MatListItemGraphicBase {
    static ɵfac = (() => /* @__PURE__ */(() => {
      let ɵMatListItemAvatar_BaseFactory;
      return function MatListItemAvatar_Factory(__ngFactoryType__) {
        return (ɵMatListItemAvatar_BaseFactory || (ɵMatListItemAvatar_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatListItemAvatar)))(__ngFactoryType__ || MatListItemAvatar);
      };
    })())();
    static ɵdir = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatListItemAvatar,
      selectors: [["", "matListItemAvatar", ""]],
      hostAttrs: [1, "mat-mdc-list-item-avatar"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    }))();
  }
  return MatListItemAvatar;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive matching an optional icon within a list item.
 *
 * List items can reserve space at the beginning of an item to display an icon.
 */
let MatListItemIcon = /*#__PURE__*/(() => {
  class MatListItemIcon extends _MatListItemGraphicBase {
    static ɵfac = (() => /* @__PURE__ */(() => {
      let ɵMatListItemIcon_BaseFactory;
      return function MatListItemIcon_Factory(__ngFactoryType__) {
        return (ɵMatListItemIcon_BaseFactory || (ɵMatListItemIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatListItemIcon)))(__ngFactoryType__ || MatListItemIcon);
      };
    })())();
    static ɵdir = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatListItemIcon,
      selectors: [["", "matListItemIcon", ""]],
      hostAttrs: [1, "mat-mdc-list-item-icon"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    }))();
  }
  return MatListItemIcon;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Injection token that can be used to provide the default options for the list module. */
const MAT_LIST_CONFIG = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_LIST_CONFIG');

/** @docs-private */
let MatListBase = /*#__PURE__*/(() => {
  class MatListBase {
    _isNonInteractive = true;
    /** Whether ripples for all list items is disabled. */
    get disableRipple() {
      return this._disableRipple;
    }
    set disableRipple(value) {
      this._disableRipple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.c)(value);
    }
    _disableRipple = false;
    /**
     * Whether the entire list is disabled. When disabled, the list itself and each of its list items
     * are disabled.
     */
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.c)(value);
    }
    _disabled = false;
    _defaultOptions = (() => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_LIST_CONFIG, {
      optional: true
    }))();
    static ɵfac = (() => function MatListBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatListBase)();
    })();
    static ɵdir = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatListBase,
      hostVars: 1,
      hostBindings: function MatListBase_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", ctx.disabled);
        }
      },
      inputs: {
        disableRipple: "disableRipple",
        disabled: "disabled"
      }
    }))();
  }
  return MatListBase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** @docs-private */
let MatListItemBase = /*#__PURE__*/(() => {
  class MatListItemBase {
    _elementRef = (() => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef))();
    _ngZone = (() => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone))();
    _listBase = (() => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MatListBase, {
      optional: true
    }))();
    _platform = (() => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.P))();
    /** Host element for the list item. */
    _hostElement;
    /** indicate whether the host element is a button or not */
    _isButtonElement;
    /** Whether animations are disabled. */
    _noopAnimations;
    _avatars;
    _icons;
    /**
     * The number of lines this list item should reserve space for. If not specified,
     * lines are inferred based on the projected content.
     *
     * Explicitly specifying the number of lines is useful if you want to acquire additional
     * space and enable the wrapping of text. The unscoped text content of a list item will
     * always be able to take up the remaining space of the item, unless it represents the title.
     *
     * A maximum of three lines is supported as per the Material Design specification.
     */
    set lines(lines) {
      this._explicitLines = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.c)(lines, null);
      this._updateItemLines(false);
    }
    _explicitLines = null;
    /** Whether ripples for list items are disabled. */
    get disableRipple() {
      return this.disabled || this._disableRipple || this._noopAnimations || !!this._listBase?.disableRipple;
    }
    set disableRipple(value) {
      this._disableRipple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.c)(value);
    }
    _disableRipple = false;
    /** Whether the list-item is disabled. */
    get disabled() {
      return this._disabled || !!this._listBase?.disabled;
    }
    set disabled(value) {
      this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.c)(value);
    }
    _disabled = false;
    _subscriptions = (() => new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription())();
    _rippleRenderer = null;
    /** Whether the list item has unscoped text content. */
    _hasUnscopedTextContent = false;
    /**
     * Implemented as part of `RippleTarget`.
     * @docs-private
     */
    rippleConfig;
    /**
     * Implemented as part of `RippleTarget`.
     * @docs-private
     */
    get rippleDisabled() {
      return this.disableRipple || !!this.rippleConfig.disabled;
    }
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_6__._).load(_structural_styles_BQUT6wsL_mjs__WEBPACK_IMPORTED_MODULE_7__._);
      const globalRippleOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ripple_BT3tzh6F_mjs__WEBPACK_IMPORTED_MODULE_8__.a, {
        optional: true
      });
      const animationMode = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, {
        optional: true
      });
      this.rippleConfig = globalRippleOptions || {};
      this._hostElement = this._elementRef.nativeElement;
      this._isButtonElement = this._hostElement.nodeName.toLowerCase() === 'button';
      this._noopAnimations = animationMode === 'NoopAnimations';
      if (this._listBase && !this._listBase._isNonInteractive) {
        this._initInteractiveListItem();
      }
      // If no type attribute is specified for a host `<button>` element, set it to `button`. If a
      // type attribute is already specified, we do nothing. We do this for backwards compatibility.
      // TODO: Determine if we intend to continue doing this for the MDC-based list.
      if (this._isButtonElement && !this._hostElement.hasAttribute('type')) {
        this._hostElement.setAttribute('type', 'button');
      }
    }
    ngAfterViewInit() {
      this._monitorProjectedLinesAndTitle();
      this._updateItemLines(true);
    }
    ngOnDestroy() {
      this._subscriptions.unsubscribe();
      if (this._rippleRenderer !== null) {
        this._rippleRenderer._removeTriggerEvents();
      }
    }
    /** Whether the list item has icons or avatars. */
    _hasIconOrAvatar() {
      return !!(this._avatars.length || this._icons.length);
    }
    _initInteractiveListItem() {
      this._hostElement.classList.add('mat-mdc-list-item-interactive');
      this._rippleRenderer = new _ripple_BT3tzh6F_mjs__WEBPACK_IMPORTED_MODULE_8__.R(this, this._ngZone, this._hostElement, this._platform, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
      this._rippleRenderer.setupTriggerEvents(this._hostElement);
    }
    /**
     * Subscribes to changes in the projected title and lines. Triggers a
     * item lines update whenever a change occurs.
     */
    _monitorProjectedLinesAndTitle() {
      this._ngZone.runOutsideAngular(() => {
        this._subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(this._lines.changes, this._titles.changes).subscribe(() => this._updateItemLines(false)));
      });
    }
    /**
     * Updates the lines of the list item. Based on the projected user content and optional
     * explicit lines setting, the visual appearance of the list item is determined.
     *
     * This method should be invoked whenever the projected user content changes, or
     * when the explicit lines have been updated.
     *
     * @param recheckUnscopedContent Whether the projected unscoped content should be re-checked.
     *   The unscoped content is not re-checked for every update as it is a rather expensive check
     *   for content that is expected to not change very often.
     */
    _updateItemLines(recheckUnscopedContent) {
      // If the updated is triggered too early before the view and content is initialized,
      // we just skip the update. After view initialization the update is triggered again.
      if (!this._lines || !this._titles || !this._unscopedContent) {
        return;
      }
      // Re-check the DOM for unscoped text content if requested. This needs to
      // happen before any computation or sanity checks run as these rely on the
      // result of whether there is unscoped text content or not.
      if (recheckUnscopedContent) {
        this._checkDomForUnscopedTextContent();
      }
      // Sanity check the list item lines and title in the content. This is a dev-mode only
      // check that can be dead-code eliminated by Terser in production.
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        sanityCheckListItemContent(this);
      }
      const numberOfLines = this._explicitLines ?? this._inferLinesFromContent();
      const unscopedContentEl = this._unscopedContent.nativeElement;
      // Update the list item element to reflect the number of lines.
      this._hostElement.classList.toggle('mat-mdc-list-item-single-line', numberOfLines <= 1);
      this._hostElement.classList.toggle('mdc-list-item--with-one-line', numberOfLines <= 1);
      this._hostElement.classList.toggle('mdc-list-item--with-two-lines', numberOfLines === 2);
      this._hostElement.classList.toggle('mdc-list-item--with-three-lines', numberOfLines === 3);
      // If there is no title and the unscoped content is the is the only line, the
      // unscoped text content will be treated as the title of the list-item.
      if (this._hasUnscopedTextContent) {
        const treatAsTitle = this._titles.length === 0 && numberOfLines === 1;
        unscopedContentEl.classList.toggle('mdc-list-item__primary-text', treatAsTitle);
        unscopedContentEl.classList.toggle('mdc-list-item__secondary-text', !treatAsTitle);
      } else {
        unscopedContentEl.classList.remove('mdc-list-item__primary-text');
        unscopedContentEl.classList.remove('mdc-list-item__secondary-text');
      }
    }
    /**
     * Infers the number of lines based on the projected user content. This is useful
     * if no explicit number of lines has been specified on the list item.
     *
     * The number of lines is inferred based on whether there is a title, the number of
     * additional lines (secondary/tertiary). An additional line is acquired if there is
     * unscoped text content.
     */
    _inferLinesFromContent() {
      let numOfLines = this._titles.length + this._lines.length;
      if (this._hasUnscopedTextContent) {
        numOfLines += 1;
      }
      return numOfLines;
    }
    /** Checks whether the list item has unscoped text content. */
    _checkDomForUnscopedTextContent() {
      this._hasUnscopedTextContent = Array.from(this._unscopedContent.nativeElement.childNodes).filter(node => node.nodeType !== node.COMMENT_NODE).some(node => !!(node.textContent && node.textContent.trim()));
    }
    static ɵfac = (() => function MatListItemBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatListItemBase)();
    })();
    static ɵdir = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatListItemBase,
      contentQueries: function MatListItemBase_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListItemAvatar, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListItemIcon, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._avatars = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._icons = _t);
        }
      },
      hostVars: 4,
      hostBindings: function MatListItemBase_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", ctx.disabled)("disabled", ctx._isButtonElement && ctx.disabled || null);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-list-item--disabled", ctx.disabled);
        }
      },
      inputs: {
        lines: "lines",
        disableRipple: "disableRipple",
        disabled: "disabled"
      }
    }))();
  }
  return MatListItemBase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Sanity checks the configuration of the list item with respect to the amount
 * of lines, whether there is a title, or if there is unscoped text content.
 *
 * The checks are extracted into a top-level function that can be dead-code
 * eliminated by Terser or other optimizers in production mode.
 */
function sanityCheckListItemContent(item) {
  const numTitles = item._titles.length;
  const numLines = item._lines.length;
  if (numTitles > 1) {
    console.warn('A list item cannot have multiple titles.');
  }
  if (numTitles === 0 && numLines > 0) {
    console.warn('A list item line can only be used if there is a list item title.');
  }
  if (numTitles === 0 && item._hasUnscopedTextContent && item._explicitLines !== null && item._explicitLines > 1) {
    console.warn('A list item cannot have wrapping content without a title.');
  }
  if (numLines > 2 || numLines === 2 && item._hasUnscopedTextContent) {
    console.warn('A list item can have at maximum three lines.');
  }
}
let MatActionList = /*#__PURE__*/(() => {
  class MatActionList extends MatListBase {
    // An navigation list is considered interactive, but does not extend the interactive list
    // base class. We do this because as per MDC, items of interactive lists are only reachable
    // through keyboard shortcuts. We want all items for the navigation list to be reachable
    // through tab key as we do not intend to provide any special accessibility treatment. The
    // accessibility treatment depends on how the end-user will interact with it.
    _isNonInteractive = false;
    static ɵfac = (() => /* @__PURE__ */(() => {
      let ɵMatActionList_BaseFactory;
      return function MatActionList_Factory(__ngFactoryType__) {
        return (ɵMatActionList_BaseFactory || (ɵMatActionList_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatActionList)))(__ngFactoryType__ || MatActionList);
      };
    })())();
    static ɵcmp = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatActionList,
      selectors: [["mat-action-list"]],
      hostAttrs: ["role", "group", 1, "mat-mdc-action-list", "mat-mdc-list-base", "mdc-list"],
      exportAs: ["matActionList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MatListBase,
        useExisting: MatActionList
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatActionList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      styles: [".mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mdc-list-list-item-container-color, transparent);border-radius:var(--mdc-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mdc-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mdc-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mdc-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mdc-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:\"\";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mdc-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mdc-list-list-item-leading-icon-size, 24px);height:var(--mdc-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mdc-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mdc-list-list-item-leading-avatar-size, 40px);height:var(--mdc-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mdc-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mdc-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mdc-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mdc-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mdc-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mdc-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mdc-list-list-item-trailing-icon-size, 24px);height:var(--mdc-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mdc-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mdc-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mdc-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mdc-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mdc-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mdc-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mdc-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mdc-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mdc-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mdc-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mdc-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mdc-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mdc-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mdc-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mdc-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mdc-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mdc-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mdc-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mdc-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mdc-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mdc-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mdc-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mdc-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mdc-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mdc-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mdc-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mdc-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mdc-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mdc-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mdc-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mdc-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-focus-indicator::before{content:\"\"}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n"],
      encapsulation: 2,
      changeDetection: 0
    }))();
  }
  return MatActionList;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Injection token that can be used to inject instances of `MatList`. It serves as
 * alternative token to the actual `MatList` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_LIST = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatList');
let MatList = /*#__PURE__*/(() => {
  class MatList extends MatListBase {
    static ɵfac = (() => /* @__PURE__ */(() => {
      let ɵMatList_BaseFactory;
      return function MatList_Factory(__ngFactoryType__) {
        return (ɵMatList_BaseFactory || (ɵMatList_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatList)))(__ngFactoryType__ || MatList);
      };
    })())();
    static ɵcmp = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatList,
      selectors: [["mat-list"]],
      hostAttrs: [1, "mat-mdc-list", "mat-mdc-list-base", "mdc-list"],
      exportAs: ["matList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MatListBase,
        useExisting: MatList
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      styles: [_c1],
      encapsulation: 2,
      changeDetection: 0
    }))();
  }
  return MatList;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatListItem = /*#__PURE__*/(() => {
  class MatListItem extends MatListItemBase {
    _lines;
    _titles;
    _meta;
    _unscopedContent;
    _itemText;
    /** Indicates whether an item in a `<mat-nav-list>` is the currently active page. */
    get activated() {
      return this._activated;
    }
    set activated(activated) {
      this._activated = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.c)(activated);
    }
    _activated = false;
    /**
     * Determine the value of `aria-current`. Return 'page' if this item is an activated anchor tag.
     * Otherwise, return `null`. This method is safe to use with server-side rendering.
     */
    _getAriaCurrent() {
      return this._hostElement.nodeName === 'A' && this._activated ? 'page' : null;
    }
    _hasBothLeadingAndTrailing() {
      return this._meta.length !== 0 && (this._avatars.length !== 0 || this._icons.length !== 0);
    }
    static ɵfac = (() => /* @__PURE__ */(() => {
      let ɵMatListItem_BaseFactory;
      return function MatListItem_Factory(__ngFactoryType__) {
        return (ɵMatListItem_BaseFactory || (ɵMatListItem_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatListItem)))(__ngFactoryType__ || MatListItem);
      };
    })())();
    static ɵcmp = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatListItem,
      selectors: [["mat-list-item"], ["a", "mat-list-item", ""], ["button", "mat-list-item", ""]],
      contentQueries: function MatListItem_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListItemLine, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListItemTitle, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListItemMeta, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._titles = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._meta = _t);
        }
      },
      viewQuery: function MatListItem_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._unscopedContent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._itemText = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-list-item", "mdc-list-item"],
      hostVars: 13,
      hostBindings: function MatListItem_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-current", ctx._getAriaCurrent());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-list-item--activated", ctx.activated)("mdc-list-item--with-leading-avatar", ctx._avatars.length !== 0)("mdc-list-item--with-leading-icon", ctx._icons.length !== 0)("mdc-list-item--with-trailing-meta", ctx._meta.length !== 0)("mat-mdc-list-item-both-leading-and-trailing", ctx._hasBothLeadingAndTrailing())("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        activated: "activated"
      },
      exportAs: ["matListItem"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c5,
      decls: 10,
      vars: 0,
      consts: [["unscopedContent", ""], [1, "mdc-list-item__content"], [1, "mat-mdc-list-item-unscoped-content", 3, "cdkObserveContent"], [1, "mat-focus-indicator"]],
      template: function MatListItem_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatListItem_Template_span_cdkObserveContent_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._updateItemLines(true));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        }
      },
      dependencies: [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__.CdkObserveContent],
      encapsulation: 2,
      changeDetection: 0
    }))();
  }
  return MatListItem;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Injection token that can be used to reference instances of an `SelectionList`. It serves
 * as alternative token to an actual implementation which would result in circular references.
 * @docs-private
 */
const SELECTION_LIST = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('SelectionList');
let MatListOption = /*#__PURE__*/(() => {
  class MatListOption extends MatListItemBase {
    _selectionList = (() => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(SELECTION_LIST))();
    _changeDetectorRef = (() => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef))();
    _lines;
    _titles;
    _unscopedContent;
    /**
     * Emits when the selected state of the option has changed.
     * Use to facilitate two-data binding to the `selected` property.
     * @docs-private
     */
    selectedChange = (() => new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter())();
    /** Whether the label should appear before or after the checkbox/radio. Defaults to 'after' */
    togglePosition = 'after';
    /**
     * Whether the label should appear before or after the checkbox/radio. Defaults to 'after'
     *
     * @deprecated Use `togglePosition` instead.
     * @breaking-change 17.0.0
     */
    get checkboxPosition() {
      return this.togglePosition;
    }
    set checkboxPosition(value) {
      this.togglePosition = value;
    }
    /**
     * Theme color of the list option. This sets the color of the checkbox/radio.
     * This API is supported in M2 themes only, it has no effect in M3 themes. For color customization
     * in M3, see https://material.angular.dev/components/list/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    get color() {
      return this._color || this._selectionList.color;
    }
    set color(newValue) {
      this._color = newValue;
    }
    _color;
    /** Value of the option */
    get value() {
      return this._value;
    }
    set value(newValue) {
      if (this.selected && newValue !== this.value && this._inputsInitialized) {
        this.selected = false;
      }
      this._value = newValue;
    }
    _value;
    /** Whether the option is selected. */
    get selected() {
      return this._selectionList.selectedOptions.isSelected(this);
    }
    set selected(value) {
      const isSelected = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.c)(value);
      if (isSelected !== this._selected) {
        this._setSelected(isSelected);
        if (isSelected || this._selectionList.multiple) {
          this._selectionList._reportValueChange();
        }
      }
    }
    _selected = false;
    /**
     * This is set to true after the first OnChanges cycle so we don't
     * clear the value of `selected` in the first cycle.
     */
    _inputsInitialized = false;
    ngOnInit() {
      const list = this._selectionList;
      if (list._value && list._value.some(value => list.compareWith(this._value, value))) {
        this._setSelected(true);
      }
      const wasSelected = this._selected;
      // List options that are selected at initialization can't be reported properly to the form
      // control. This is because it takes some time until the selection-list knows about all
      // available options. Also it can happen that the ControlValueAccessor has an initial value
      // that should be used instead. Deferring the value change report to the next tick ensures
      // that the form control value is not being overwritten.
      Promise.resolve().then(() => {
        if (this._selected || wasSelected) {
          this.selected = true;
          this._changeDetectorRef.markForCheck();
        }
      });
      this._inputsInitialized = true;
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      if (this.selected) {
        // We have to delay this until the next tick in order
        // to avoid changed after checked errors.
        Promise.resolve().then(() => {
          this.selected = false;
        });
      }
    }
    /** Toggles the selection state of the option. */
    toggle() {
      this.selected = !this.selected;
    }
    /** Allows for programmatic focusing of the option. */
    focus() {
      this._hostElement.focus();
    }
    /** Gets the text label of the list option. Used for the typeahead functionality in the list. */
    getLabel() {
      const titleElement = this._titles?.get(0)?._elementRef.nativeElement;
      // If there is no explicit title element, the unscoped text content
      // is treated as the list item title.
      const labelEl = titleElement || this._unscopedContent?.nativeElement;
      return labelEl?.textContent || '';
    }
    /** Whether a checkbox is shown at the given position. */
    _hasCheckboxAt(position) {
      return this._selectionList.multiple && this._getTogglePosition() === position;
    }
    /** Where a radio indicator is shown at the given position. */
    _hasRadioAt(position) {
      return !this._selectionList.multiple && this._getTogglePosition() === position && !this._selectionList.hideSingleSelectionIndicator;
    }
    /** Whether icons or avatars are shown at the given position. */
    _hasIconsOrAvatarsAt(position) {
      return this._hasProjected('icons', position) || this._hasProjected('avatars', position);
    }
    /** Gets whether the given type of element is projected at the specified position. */
    _hasProjected(type, position) {
      // If the checkbox/radio is shown at the specified position, neither icons or
      // avatars can be shown at the position.
      return this._getTogglePosition() !== position && (type === 'avatars' ? this._avatars.length !== 0 : this._icons.length !== 0);
    }
    _handleBlur() {
      this._selectionList._onTouched();
    }
    /** Gets the current position of the checkbox/radio. */
    _getTogglePosition() {
      return this.togglePosition || 'after';
    }
    /**
     * Sets the selected state of the option.
     * @returns Whether the value has changed.
     */
    _setSelected(selected) {
      if (selected === this._selected) {
        return false;
      }
      this._selected = selected;
      if (selected) {
        this._selectionList.selectedOptions.select(this);
      } else {
        this._selectionList.selectedOptions.deselect(this);
      }
      this.selectedChange.emit(selected);
      this._changeDetectorRef.markForCheck();
      return true;
    }
    /**
     * Notifies Angular that the option needs to be checked in the next change detection run.
     * Mainly used to trigger an update of the list option if the disabled state of the selection
     * list changed.
     */
    _markForCheck() {
      this._changeDetectorRef.markForCheck();
    }
    /** Toggles the option's value based on a user interaction. */
    _toggleOnInteraction() {
      if (!this.disabled) {
        if (this._selectionList.multiple) {
          this.selected = !this.selected;
          this._selectionList._emitChangeEvent([this]);
        } else if (!this.selected) {
          this.selected = true;
          this._selectionList._emitChangeEvent([this]);
        }
      }
    }
    /** Sets the tabindex of the list option. */
    _setTabindex(value) {
      this._hostElement.setAttribute('tabindex', value + '');
    }
    _hasBothLeadingAndTrailing() {
      const hasLeading = this._hasProjected('avatars', 'before') || this._hasProjected('icons', 'before') || this._hasCheckboxAt('before') || this._hasRadioAt('before');
      const hasTrailing = this._hasProjected('icons', 'after') || this._hasProjected('avatars', 'after') || this._hasCheckboxAt('after') || this._hasRadioAt('after');
      return hasLeading && hasTrailing;
    }
    static ɵfac = (() => /* @__PURE__ */(() => {
      let ɵMatListOption_BaseFactory;
      return function MatListOption_Factory(__ngFactoryType__) {
        return (ɵMatListOption_BaseFactory || (ɵMatListOption_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatListOption)))(__ngFactoryType__ || MatListOption);
      };
    })())();
    static ɵcmp = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatListOption,
      selectors: [["mat-list-option"]],
      contentQueries: function MatListOption_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListItemLine, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListItemTitle, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._titles = _t);
        }
      },
      viewQuery: function MatListOption_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._unscopedContent = _t.first);
        }
      },
      hostAttrs: ["role", "option", 1, "mat-mdc-list-item", "mat-mdc-list-option", "mdc-list-item"],
      hostVars: 27,
      hostBindings: function MatListOption_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function MatListOption_blur_HostBindingHandler() {
            return ctx._handleBlur();
          })("click", function MatListOption_click_HostBindingHandler() {
            return ctx._toggleOnInteraction();
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-selected", ctx.selected);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-list-item--selected", ctx.selected && !ctx._selectionList.multiple && ctx._selectionList.hideSingleSelectionIndicator)("mdc-list-item--with-leading-avatar", ctx._hasProjected("avatars", "before"))("mdc-list-item--with-leading-icon", ctx._hasProjected("icons", "before"))("mdc-list-item--with-trailing-icon", ctx._hasProjected("icons", "after"))("mat-mdc-list-option-with-trailing-avatar", ctx._hasProjected("avatars", "after"))("mdc-list-item--with-leading-checkbox", ctx._hasCheckboxAt("before"))("mdc-list-item--with-trailing-checkbox", ctx._hasCheckboxAt("after"))("mdc-list-item--with-leading-radio", ctx._hasRadioAt("before"))("mdc-list-item--with-trailing-radio", ctx._hasRadioAt("after"))("mat-mdc-list-item-both-leading-and-trailing", ctx._hasBothLeadingAndTrailing())("mat-accent", ctx.color !== "primary" && ctx.color !== "warn")("mat-warn", ctx.color === "warn")("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        togglePosition: "togglePosition",
        checkboxPosition: "checkboxPosition",
        color: "color",
        value: "value",
        selected: "selected"
      },
      outputs: {
        selectedChange: "selectedChange"
      },
      exportAs: ["matListOption"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MatListItemBase,
        useExisting: MatListOption
      }, {
        provide: LIST_OPTION,
        useExisting: MatListOption
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c7,
      decls: 20,
      vars: 4,
      consts: [["icons", ""], ["checkbox", ""], ["radio", ""], ["unscopedContent", ""], [1, "mdc-list-item__start", "mat-mdc-list-option-checkbox-before"], [1, "mdc-list-item__start", "mat-mdc-list-option-radio-before"], [3, "ngTemplateOutlet"], [1, "mdc-list-item__content"], [1, "mat-mdc-list-item-unscoped-content", 3, "cdkObserveContent"], [1, "mdc-list-item__end"], [1, "mat-focus-indicator"], [1, "mdc-checkbox"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "checked", "disabled"], [1, "mdc-checkbox__background"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], [1, "mdc-radio"], ["type", "radio", 1, "mdc-radio__native-control", 3, "checked", "disabled"], [1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"]],
      template: function MatListOption_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatListOption_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, MatListOption_ng_template_2_Template, 6, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(4, MatListOption_ng_template_4_Template, 5, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(6, MatListOption_Conditional_6_Template, 2, 1, "span", 4)(7, MatListOption_Conditional_7_Template, 2, 1, "span", 5)(8, MatListOption_Conditional_8_Template, 1, 1, null, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](11, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatListOption_Template_span_cdkObserveContent_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._updateItemLines(true));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MatListOption_Conditional_15_Template, 2, 1, "span", 9)(16, MatListOption_Conditional_16_Template, 2, 1, "span", 9)(17, MatListOption_Conditional_17_Template, 1, 1, null, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](18, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 10);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._hasCheckboxAt("before") ? 6 : ctx._hasRadioAt("before") ? 7 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._hasIconsOrAvatarsAt("before") ? 8 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._hasCheckboxAt("after") ? 15 : ctx._hasRadioAt("after") ? 16 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._hasIconsOrAvatarsAt("after") ? 17 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__.CdkObserveContent],
      styles: [".mat-mdc-list-option-with-trailing-avatar.mdc-list-item,[dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item{padding-left:0;padding-right:0}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{margin-left:16px;margin-right:16px;width:40px;height:40px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{border-radius:50%}.mat-mdc-list-option .mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mat-mdc-list-option .mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled{opacity:.5}}.mat-mdc-list-option .mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__checkmark{color:CanvasText}}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mat-mdc-list-option .mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mat-mdc-list-option .mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__mixedmark{margin:0 1px}}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-list-option .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-list-option .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-list-option .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px);top:calc(-1*(var(--mdc-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-list-option .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-list-option .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-list-option .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-list-option .mdc-checkbox__native-control,.mat-mdc-list-option .mdc-radio__native-control{display:none}@media(forced-colors: active){.mat-mdc-list-option.mdc-list-item--selected::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after{right:auto;left:16px}}\n"],
      encapsulation: 2,
      changeDetection: 0
    }))();
  }
  return MatListOption;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MatListSubheaderCssMatStyler = /*#__PURE__*/(() => {
  class MatListSubheaderCssMatStyler {
    static ɵfac = (() => function MatListSubheaderCssMatStyler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatListSubheaderCssMatStyler)();
    })();
    static ɵdir = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatListSubheaderCssMatStyler,
      selectors: [["", "mat-subheader", ""], ["", "matSubheader", ""]],
      hostAttrs: [1, "mat-mdc-subheader", "mdc-list-group__subheader"]
    }))();
  }
  return MatListSubheaderCssMatStyler;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Injection token that can be used to inject instances of `MatNavList`. It serves as
 * alternative token to the actual `MatNavList` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_NAV_LIST = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatNavList');
let MatNavList = /*#__PURE__*/(() => {
  class MatNavList extends MatListBase {
    // An navigation list is considered interactive, but does not extend the interactive list
    // base class. We do this because as per MDC, items of interactive lists are only reachable
    // through keyboard shortcuts. We want all items for the navigation list to be reachable
    // through tab key as we do not intend to provide any special accessibility treatment. The
    // accessibility treatment depends on how the end-user will interact with it.
    _isNonInteractive = false;
    static ɵfac = (() => /* @__PURE__ */(() => {
      let ɵMatNavList_BaseFactory;
      return function MatNavList_Factory(__ngFactoryType__) {
        return (ɵMatNavList_BaseFactory || (ɵMatNavList_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatNavList)))(__ngFactoryType__ || MatNavList);
      };
    })())();
    static ɵcmp = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatNavList,
      selectors: [["mat-nav-list"]],
      hostAttrs: ["role", "navigation", 1, "mat-mdc-nav-list", "mat-mdc-list-base", "mdc-list"],
      exportAs: ["matNavList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MatListBase,
        useExisting: MatNavList
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatNavList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      styles: [_c1],
      encapsulation: 2,
      changeDetection: 0
    }))();
  }
  return MatNavList;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const MAT_SELECTION_LIST_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NG_VALUE_ACCESSOR,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSelectionList),
  multi: true
};
/** Change event that is being fired whenever the selected state of an option changes. */
class MatSelectionListChange {
  source;
  options;
  constructor(/** Reference to the selection list that emitted the event. */
  source, /** Reference to the options that have been changed. */
  options) {
    this.source = source;
    this.options = options;
  }
}
let MatSelectionList = /*#__PURE__*/(() => {
  class MatSelectionList extends MatListBase {
    _element = (() => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef))();
    _ngZone = (() => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone))();
    _renderer = (() => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2))();
    _initialized = false;
    _keyManager;
    _listenerCleanups;
    /** Emits when the list has been destroyed. */
    _destroyed = (() => new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject())();
    /** Whether the list has been destroyed. */
    _isDestroyed;
    /** View to model callback that should be called whenever the selected options change. */
    _onChange = _ => {};
    _items;
    /** Emits a change event whenever the selected state of an option changes. */
    selectionChange = (() => new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter())();
    /**
     * Theme color of the selection list. This sets the checkbox color for all
     * list options. This API is supported in M2 themes only, it has no effect in
     * M3 themes. For color customization in M3, see https://material.angular.dev/components/list/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    color = 'accent';
    /**
     * Function used for comparing an option against the selected value when determining which
     * options should appear as selected. The first argument is the value of an options. The second
     * one is a value from the selected value. A boolean must be returned.
     */
    compareWith = (a1, a2) => a1 === a2;
    /** Whether selection is limited to one or multiple items (default multiple). */
    get multiple() {
      return this._multiple;
    }
    set multiple(value) {
      const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.c)(value);
      if (newValue !== this._multiple) {
        if ((typeof ngDevMode === 'undefined' || ngDevMode) && this._initialized) {
          throw new Error('Cannot change `multiple` mode of mat-selection-list after initialization.');
        }
        this._multiple = newValue;
        this.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__.S(this._multiple, this.selectedOptions.selected);
      }
    }
    _multiple = true;
    /** Whether radio indicator for all list items is hidden. */
    get hideSingleSelectionIndicator() {
      return this._hideSingleSelectionIndicator;
    }
    set hideSingleSelectionIndicator(value) {
      this._hideSingleSelectionIndicator = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.c)(value);
    }
    _hideSingleSelectionIndicator = (() => this._defaultOptions?.hideSingleSelectionIndicator ?? false)();
    /** The currently selected options. */
    selectedOptions = (() => new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__.S(this._multiple))();
    /** Keeps track of the currently-selected value. */
    _value;
    /** View to model callback that should be called if the list or its options lost focus. */
    _onTouched = () => {};
    _changeDetectorRef = (() => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef))();
    constructor() {
      super();
      this._isNonInteractive = false;
    }
    ngAfterViewInit() {
      // Mark the selection list as initialized so that the `multiple`
      // binding can no longer be changed.
      this._initialized = true;
      this._setupRovingTabindex();
      // These events are bound outside the zone, because they don't change
      // any change-detected properties and they can trigger timeouts.
      this._ngZone.runOutsideAngular(() => {
        this._listenerCleanups = [this._renderer.listen(this._element.nativeElement, 'focusin', this._handleFocusin), this._renderer.listen(this._element.nativeElement, 'focusout', this._handleFocusout)];
      });
      if (this._value) {
        this._setOptionsFromValues(this._value);
      }
      this._watchForSelectionChange();
    }
    ngOnChanges(changes) {
      const disabledChanges = changes['disabled'];
      const disableRippleChanges = changes['disableRipple'];
      const hideSingleSelectionIndicatorChanges = changes['hideSingleSelectionIndicator'];
      if (disableRippleChanges && !disableRippleChanges.firstChange || disabledChanges && !disabledChanges.firstChange || hideSingleSelectionIndicatorChanges && !hideSingleSelectionIndicatorChanges.firstChange) {
        this._markOptionsForCheck();
      }
    }
    ngOnDestroy() {
      this._keyManager?.destroy();
      this._listenerCleanups?.forEach(current => current());
      this._destroyed.next();
      this._destroyed.complete();
      this._isDestroyed = true;
    }
    /** Focuses the selection list. */
    focus(options) {
      this._element.nativeElement.focus(options);
    }
    /** Selects all of the options. Returns the options that changed as a result. */
    selectAll() {
      return this._setAllOptionsSelected(true);
    }
    /** Deselects all of the options. Returns the options that changed as a result. */
    deselectAll() {
      return this._setAllOptionsSelected(false);
    }
    /** Reports a value change to the ControlValueAccessor */
    _reportValueChange() {
      // Stop reporting value changes after the list has been destroyed. This avoids
      // cases where the list might wrongly reset its value once it is removed, but
      // the form control is still live.
      if (this.options && !this._isDestroyed) {
        const value = this._getSelectedOptionValues();
        this._onChange(value);
        this._value = value;
      }
    }
    /** Emits a change event if the selected state of an option changed. */
    _emitChangeEvent(options) {
      this.selectionChange.emit(new MatSelectionListChange(this, options));
    }
    /** Implemented as part of ControlValueAccessor. */
    writeValue(values) {
      this._value = values;
      if (this.options) {
        this._setOptionsFromValues(values || []);
      }
    }
    /** Implemented as a part of ControlValueAccessor. */
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
      this._changeDetectorRef.markForCheck();
      this._markOptionsForCheck();
    }
    /**
     * Whether the *entire* selection list is disabled. When true, each list item is also disabled
     * and each list item is removed from the tab order (has tabindex="-1").
     */
    get disabled() {
      return this._selectionListDisabled;
    }
    set disabled(value) {
      // Update the disabled state of this list. Write to `this._selectionListDisabled` instead of
      // `super.disabled`. That is to avoid closure compiler compatibility issues with assigning to
      // a super property.
      this._selectionListDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.c)(value);
      if (this._selectionListDisabled) {
        this._keyManager?.setActiveItem(-1);
      }
    }
    _selectionListDisabled = false;
    /** Implemented as part of ControlValueAccessor. */
    registerOnChange(fn) {
      this._onChange = fn;
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnTouched(fn) {
      this._onTouched = fn;
    }
    /** Watches for changes in the selected state of the options and updates the list accordingly. */
    _watchForSelectionChange() {
      this.selectedOptions.changed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(event => {
        // Sync external changes to the model back to the options.
        for (let item of event.added) {
          item.selected = true;
        }
        for (let item of event.removed) {
          item.selected = false;
        }
        if (!this._containsFocus()) {
          this._resetActiveOption();
        }
      });
    }
    /** Sets the selected options based on the specified values. */
    _setOptionsFromValues(values) {
      this.options.forEach(option => option._setSelected(false));
      values.forEach(value => {
        const correspondingOption = this.options.find(option => {
          // Skip options that are already in the model. This allows us to handle cases
          // where the same primitive value is selected multiple times.
          return option.selected ? false : this.compareWith(option.value, value);
        });
        if (correspondingOption) {
          correspondingOption._setSelected(true);
        }
      });
    }
    /** Returns the values of the selected options. */
    _getSelectedOptionValues() {
      return this.options.filter(option => option.selected).map(option => option.value);
    }
    /** Marks all the options to be checked in the next change detection run. */
    _markOptionsForCheck() {
      if (this.options) {
        this.options.forEach(option => option._markForCheck());
      }
    }
    /**
     * Sets the selected state on all of the options
     * and emits an event if anything changed.
     */
    _setAllOptionsSelected(isSelected, skipDisabled) {
      // Keep track of whether anything changed, because we only want to
      // emit the changed event when something actually changed.
      const changedOptions = [];
      this.options.forEach(option => {
        if ((!skipDisabled || !option.disabled) && option._setSelected(isSelected)) {
          changedOptions.push(option);
        }
      });
      if (changedOptions.length) {
        this._reportValueChange();
      }
      return changedOptions;
    }
    // Note: This getter exists for backwards compatibility. The `_items` query list
    // cannot be named `options` as it will be picked up by the interactive list base.
    /** The option components contained within this selection-list. */
    get options() {
      return this._items;
    }
    /** Handles keydown events within the list. */
    _handleKeydown(event) {
      const activeItem = this._keyManager.activeItem;
      if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.c || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.S) && !this._keyManager.isTyping() && activeItem && !activeItem.disabled) {
        event.preventDefault();
        activeItem._toggleOnInteraction();
      } else if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.A && this.multiple && !this._keyManager.isTyping() && (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.hasModifierKey)(event, 'ctrlKey', 'metaKey')) {
        const shouldSelect = this.options.some(option => !option.disabled && !option.selected);
        event.preventDefault();
        this._emitChangeEvent(this._setAllOptionsSelected(shouldSelect, true));
      } else {
        this._keyManager.onKeydown(event);
      }
    }
    /** Handles focusout events within the list. */
    _handleFocusout = () => {
      // Focus takes a while to update so we have to wrap our call in a timeout.
      setTimeout(() => {
        if (!this._containsFocus()) {
          this._resetActiveOption();
        }
      });
    };
    /** Handles focusin events within the list. */
    _handleFocusin = event => {
      if (this.disabled) {
        return;
      }
      const activeIndex = this._items.toArray().findIndex(item => item._elementRef.nativeElement.contains(event.target));
      if (activeIndex > -1) {
        this._setActiveOption(activeIndex);
      } else {
        this._resetActiveOption();
      }
    };
    /**
     * Sets up the logic for maintaining the roving tabindex.
     *
     * `skipPredicate` determines if key manager should avoid putting a given list item in the tab
     * index. Allow disabled list items to receive focus to align with WAI ARIA recommendation.
     * Normally WAI ARIA's instructions are to exclude disabled items from the tab order, but it
     * makes a few exceptions for compound widgets.
     *
     * From [Developing a Keyboard Interface](
     * https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/):
     *   "For the following composite widget elements, keep them focusable when disabled: Options in a
     *   Listbox..."
     */
    _setupRovingTabindex() {
      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__.F(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(() => this.disabled);
      // Set the initial focus.
      this._resetActiveOption();
      // Move the tabindex to the currently-focused list item.
      this._keyManager.change.subscribe(activeItemIndex => this._setActiveOption(activeItemIndex));
      // If the active item is removed from the list, reset back to the first one.
      this._items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(() => {
        const activeItem = this._keyManager.activeItem;
        if (!activeItem || this._items.toArray().indexOf(activeItem) === -1) {
          this._resetActiveOption();
        }
      });
    }
    /**
     * Sets an option as active.
     * @param index Index of the active option. If set to -1, no option will be active.
     */
    _setActiveOption(index) {
      this._items.forEach((item, itemIndex) => item._setTabindex(itemIndex === index ? 0 : -1));
      this._keyManager.updateActiveItem(index);
    }
    /**
     * Resets the active option. When the list is disabled, remove all options from to the tab order.
     * Otherwise, focus the first selected option.
     */
    _resetActiveOption() {
      if (this.disabled) {
        this._setActiveOption(-1);
        return;
      }
      const activeItem = this._items.find(item => item.selected && !item.disabled) || this._items.first;
      this._setActiveOption(activeItem ? this._items.toArray().indexOf(activeItem) : -1);
    }
    /** Returns whether the focus is currently within the list. */
    _containsFocus() {
      const activeElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__.c)();
      return activeElement && this._element.nativeElement.contains(activeElement);
    }
    static ɵfac = (() => function MatSelectionList_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatSelectionList)();
    })();
    static ɵcmp = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatSelectionList,
      selectors: [["mat-selection-list"]],
      contentQueries: function MatSelectionList_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListOption, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._items = _t);
        }
      },
      hostAttrs: ["role", "listbox", 1, "mat-mdc-selection-list", "mat-mdc-list-base", "mdc-list"],
      hostVars: 1,
      hostBindings: function MatSelectionList_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatSelectionList_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-multiselectable", ctx.multiple);
        }
      },
      inputs: {
        color: "color",
        compareWith: "compareWith",
        multiple: "multiple",
        hideSingleSelectionIndicator: "hideSingleSelectionIndicator",
        disabled: "disabled"
      },
      outputs: {
        selectionChange: "selectionChange"
      },
      exportAs: ["matSelectionList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SELECTION_LIST_VALUE_ACCESSOR, {
        provide: MatListBase,
        useExisting: MatSelectionList
      }, {
        provide: SELECTION_LIST,
        useExisting: MatSelectionList
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatSelectionList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      styles: [_c1],
      encapsulation: 2,
      changeDetection: 0
    }))();
  }
  return MatSelectionList;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatListModule = /*#__PURE__*/(() => {
  class MatListModule {
    static ɵfac = (() => function MatListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatListModule)();
    })();
    static ɵmod = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatListModule
    }))();
    static ɵinj = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__.ObserversModule, _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_20__.M, _index_SYVYjXwK_mjs__WEBPACK_IMPORTED_MODULE_21__.M, _pseudo_checkbox_module_CAX2sutq_mjs__WEBPACK_IMPORTED_MODULE_22__.M, _divider_mjs__WEBPACK_IMPORTED_MODULE_1__.MatDividerModule]
    }))();
  }
  return MatListModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 1626:
/*!***********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _shared_services_cluster_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/cluster.service */ 4556);









function DashboardComponent_mat_list_item_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r1.name);
  }
}
let DashboardComponent = /*#__PURE__*/(() => {
  var _staticBlock;
  class DashboardComponent {
    constructor() {
      this.clusterService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_shared_services_cluster_service__WEBPACK_IMPORTED_MODULE_0__.ClusterService);
      this.clusters = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    }
    ngOnInit() {
      this.refresh();
    }
    refresh() {
      this.clusterService.listClusters().subscribe(data => this.clusters.set(data));
    }
    static #_ = (() => _staticBlock = () => (this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DashboardComponent)();
    }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 6,
      vars: 1,
      consts: [["mat-raised-button", "", "color", "primary", 3, "click"], ["role", "list"], ["role", "listitem", 4, "ngFor", "ngForOf"], ["role", "listitem"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_2_listener() {
            return ctx.refresh();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Refresh");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-list", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DashboardComponent_mat_list_item_5_Template, 2, 1, "mat-list-item", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.clusters());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListItem],
      encapsulation: 2
    })))();
  }
  _staticBlock();
  return DashboardComponent;
})();

/***/ }),

/***/ 4102:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/divider.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatDivider: () => (/* binding */ MatDivider),
/* harmony export */   MatDividerModule: () => (/* binding */ MatDividerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ 4527);
/* harmony import */ var _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-module-WayjW0Pb.mjs */ 7708);






let MatDivider = /*#__PURE__*/(() => {
  class MatDivider {
    /** Whether the divider is vertically aligned. */
    get vertical() {
      return this._vertical;
    }
    set vertical(value) {
      this._vertical = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.c)(value);
    }
    _vertical = false;
    /** Whether the divider is an inset divider. */
    get inset() {
      return this._inset;
    }
    set inset(value) {
      this._inset = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.c)(value);
    }
    _inset = false;
    static ɵfac = (() => function MatDivider_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatDivider)();
    })();
    static ɵcmp = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatDivider,
      selectors: [["mat-divider"]],
      hostAttrs: ["role", "separator", 1, "mat-divider"],
      hostVars: 7,
      hostBindings: function MatDivider_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
        }
      },
      inputs: {
        vertical: "vertical",
        inset: "inset"
      },
      decls: 0,
      vars: 0,
      template: function MatDivider_Template(rf, ctx) {},
      styles: [".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color, var(--mat-sys-outline));border-top-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color, var(--mat-sys-outline));border-right-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],
      encapsulation: 2,
      changeDetection: 0
    }))();
  }
  return MatDivider;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatDividerModule = /*#__PURE__*/(() => {
  class MatDividerModule {
    static ɵfac = (() => function MatDividerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatDividerModule)();
    })();
    static ɵmod = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatDividerModule
    }))();
    static ɵinj = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_2__.M, _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_2__.M]
    }))();
  }
  return MatDividerModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 4556:
/*!****************************************************!*\
  !*** ./src/app/shared/services/cluster.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClusterService: () => (/* binding */ ClusterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 9648);
/* harmony import */ var _core_config_runtime_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/config/runtime-config.service */ 4607);




let ClusterService = /*#__PURE__*/(() => {
  var _staticBlock;
  class ClusterService {
    constructor() {
      this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
      this.cfg = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_config_runtime_config_service__WEBPACK_IMPORTED_MODULE_0__.RuntimeConfigService);
    }
    listClusters() {
      return this.http.get(`${this.cfg.apiBaseUrl}/clusters`);
    }
    static #_ = (() => _staticBlock = () => (this.ɵfac = function ClusterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClusterService)();
    }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ClusterService,
      factory: ClusterService.ɵfac,
      providedIn: 'root'
    })))();
  }
  _staticBlock();
  return ClusterService;
})();

/***/ }),

/***/ 4879:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/keycodes.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   ALT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   APOSTROPHE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aX),
/* harmony export */   AT_SIGN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a1),
/* harmony export */   B: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a2),
/* harmony export */   BACKSLASH: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a_),
/* harmony export */   BACKSPACE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   C: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a3),
/* harmony export */   CAPS_LOCK: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.y),
/* harmony export */   CLOSE_SQUARE_BRACKET: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a$),
/* harmony export */   COMMA: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   CONTEXT_MENU: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.as),
/* harmony export */   CONTROL: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   D: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a4),
/* harmony export */   DASH: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aV),
/* harmony export */   DELETE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   DOWN_ARROW: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   E: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a5),
/* harmony export */   EIGHT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.Y),
/* harmony export */   END: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   ENTER: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   EQUALS: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aU),
/* harmony export */   ESCAPE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   F: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a6),
/* harmony export */   F1: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   F10: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   F11: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   F12: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.t),
/* harmony export */   F2: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   F3: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   F4: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.l),
/* harmony export */   F5: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   F6: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.n),
/* harmony export */   F7: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.o),
/* harmony export */   F8: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.p),
/* harmony export */   F9: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   FF_EQUALS: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.$),
/* harmony export */   FF_MINUS: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aL),
/* harmony export */   FF_MUTE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aP),
/* harmony export */   FF_SEMICOLON: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__._),
/* harmony export */   FF_VOLUME_DOWN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aQ),
/* harmony export */   FF_VOLUME_UP: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aS),
/* harmony export */   FIRST_MEDIA: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aK),
/* harmony export */   FIVE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   FOUR: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.Q),
/* harmony export */   G: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a7),
/* harmony export */   H: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a8),
/* harmony export */   HOME: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   I: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a9),
/* harmony export */   INSERT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   J: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aa),
/* harmony export */   K: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ab),
/* harmony export */   L: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ac),
/* harmony export */   LAST_MEDIA: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aR),
/* harmony export */   LEFT_ARROW: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   M: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ad),
/* harmony export */   MAC_ENTER: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.v),
/* harmony export */   MAC_META: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   MAC_WK_CMD_LEFT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aq),
/* harmony export */   MAC_WK_CMD_RIGHT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ar),
/* harmony export */   META: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.e),
/* harmony export */   MUTE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aM),
/* harmony export */   N: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ae),
/* harmony export */   NINE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   NUMPAD_DIVIDE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aH),
/* harmony export */   NUMPAD_EIGHT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aB),
/* harmony export */   NUMPAD_FIVE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ay),
/* harmony export */   NUMPAD_FOUR: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ax),
/* harmony export */   NUMPAD_MINUS: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aF),
/* harmony export */   NUMPAD_MULTIPLY: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aD),
/* harmony export */   NUMPAD_NINE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aC),
/* harmony export */   NUMPAD_ONE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.au),
/* harmony export */   NUMPAD_PERIOD: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aG),
/* harmony export */   NUMPAD_PLUS: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aE),
/* harmony export */   NUMPAD_SEVEN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aA),
/* harmony export */   NUMPAD_SIX: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.az),
/* harmony export */   NUMPAD_THREE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aw),
/* harmony export */   NUMPAD_TWO: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.av),
/* harmony export */   NUMPAD_ZERO: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.at),
/* harmony export */   NUM_CENTER: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   NUM_LOCK: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aI),
/* harmony export */   O: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.af),
/* harmony export */   ONE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   OPEN_SQUARE_BRACKET: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aZ),
/* harmony export */   P: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ag),
/* harmony export */   PAGE_DOWN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   PAGE_UP: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   PAUSE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.x),
/* harmony export */   PERIOD: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   PLUS_SIGN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.z),
/* harmony export */   PRINT_SCREEN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   Q: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ah),
/* harmony export */   QUESTION_MARK: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a0),
/* harmony export */   R: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ai),
/* harmony export */   RIGHT_ARROW: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   S: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aj),
/* harmony export */   SCROLL_LOCK: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aJ),
/* harmony export */   SEMICOLON: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aT),
/* harmony export */   SEVEN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.X),
/* harmony export */   SHIFT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   SINGLE_QUOTE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.b0),
/* harmony export */   SIX: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   SLASH: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aW),
/* harmony export */   SPACE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   T: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ak),
/* harmony export */   TAB: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.T),
/* harmony export */   THREE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   TILDE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aY),
/* harmony export */   TWO: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   U: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.al),
/* harmony export */   UP_ARROW: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   V: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.am),
/* harmony export */   VOLUME_DOWN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aN),
/* harmony export */   VOLUME_UP: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aO),
/* harmony export */   W: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.an),
/* harmony export */   X: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ao),
/* harmony export */   Y: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ap),
/* harmony export */   Z: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   ZERO: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   hasModifierKey: () => (/* binding */ hasModifierKey)
/* harmony export */ });
/* harmony import */ var _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keycodes-CpHkExLC.mjs */ 5758);


/**
 * Checks whether a modifier key is pressed.
 * @param event Event to be checked.
 */
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some(modifier => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}


/***/ }),

/***/ 6988:
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/focus-key-manager-C1rAQJ5z.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ FocusKeyManager)
/* harmony export */ });
/* harmony import */ var _list_key_manager_CyOIXo8P_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-key-manager-CyOIXo8P.mjs */ 9036);

class FocusKeyManager extends _list_key_manager_CyOIXo8P_mjs__WEBPACK_IMPORTED_MODULE_0__.L {
  _origin = 'program';
  /**
   * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
   * @param origin Focus origin to be used when focusing items.
   */
  setFocusOrigin(origin) {
    this._origin = origin;
    return this;
  }
  setActiveItem(item) {
    super.setActiveItem(item);
    if (this.activeItem) {
      this.activeItem.focus(this._origin);
    }
  }
}


/***/ }),

/***/ 7097:
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/typeahead-9ZW4Dtsf.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ Typeahead)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keycodes-CpHkExLC.mjs */ 5758);



const DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS = 200;
/**
 * Selects items based on keyboard inputs. Implements the typeahead functionality of
 * `role="listbox"` or `role="tree"` and other related roles.
 */
class Typeahead {
  _letterKeyStream = /*#__PURE__*/(() => new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject())();
  _items = [];
  _selectedItemIndex = /*#__PURE__*/(() => -1)();
  /** Buffer for the letters that the user has pressed */
  _pressedLetters = [];
  _skipPredicateFn;
  _selectedItem = /*#__PURE__*/(() => new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject())();
  selectedItem = this._selectedItem;
  constructor(initialItems, config) {
    const typeAheadInterval = typeof config?.debounceInterval === 'number' ? config.debounceInterval : DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS;
    if (config?.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && initialItems.length && initialItems.some(item => typeof item.getLabel !== 'function')) {
      throw new Error('KeyManager items in typeahead mode must implement the `getLabel` method.');
    }
    this.setItems(initialItems);
    this._setupKeyHandler(typeAheadInterval);
  }
  destroy() {
    this._pressedLetters = [];
    this._letterKeyStream.complete();
    this._selectedItem.complete();
  }
  setCurrentSelectedItemIndex(index) {
    this._selectedItemIndex = index;
  }
  setItems(items) {
    this._items = items;
  }
  handleKey(event) {
    const keyCode = event.keyCode;
    // Attempt to use the `event.key` which also maps it to the user's keyboard language,
    // otherwise fall back to resolving alphanumeric characters via the keyCode.
    if (event.key && event.key.length === 1) {
      this._letterKeyStream.next(event.key.toLocaleUpperCase());
    } else if (keyCode >= _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_1__.A && keyCode <= _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_1__.Z || keyCode >= _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_1__.b && keyCode <= _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_1__.N) {
      this._letterKeyStream.next(String.fromCharCode(keyCode));
    }
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */
  isTyping() {
    return this._pressedLetters.length > 0;
  }
  /** Resets the currently stored sequence of typed letters. */
  reset() {
    this._pressedLetters = [];
  }
  _setupKeyHandler(typeAheadInterval) {
    // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
    // and convert those letters back into a string. Afterwards find the first item that starts
    // with that string and select it.
    this._letterKeyStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(letter => this._pressedLetters.push(letter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(typeAheadInterval), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(() => this._pressedLetters.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => this._pressedLetters.join('').toLocaleUpperCase())).subscribe(inputString => {
      // Start at 1 because we want to start searching at the item immediately
      // following the current active item.
      for (let i = 1; i < this._items.length + 1; i++) {
        const index = (this._selectedItemIndex + i) % this._items.length;
        const item = this._items[index];
        if (!this._skipPredicateFn?.(item) && item.getLabel?.().toLocaleUpperCase().trim().indexOf(inputString) === 0) {
          this._selectedItem.next(item);
          break;
        }
      }
      this._pressedLetters = [];
    });
  }
}


/***/ }),

/***/ 7400:
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/selection-model-CeeHVIcP.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ SelectionModel),
/* harmony export */   g: () => (/* binding */ getMultipleValuesInSingleSelectionError)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 819);


/**
 * Class to be used to power selecting one or more options from a list.
 */
class SelectionModel {
  _multiple;
  _emitChanges;
  compareWith;
  /** Currently-selected values. */
  _selection = /*#__PURE__*/(() => new Set())();
  /** Keeps track of the deselected options that haven't been emitted by the change event. */
  _deselectedToEmit = [];
  /** Keeps track of the selected options that haven't been emitted by the change event. */
  _selectedToEmit = [];
  /** Cache for the array value of the selected items. */
  _selected;
  /** Selected values. */
  get selected() {
    if (!this._selected) {
      this._selected = Array.from(this._selection.values());
    }
    return this._selected;
  }
  /** Event emitted when the value has changed. */
  changed = /*#__PURE__*/(() => new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject())();
  constructor(_multiple = false, initiallySelectedValues, _emitChanges = true, compareWith) {
    this._multiple = _multiple;
    this._emitChanges = _emitChanges;
    this.compareWith = compareWith;
    if (initiallySelectedValues && initiallySelectedValues.length) {
      if (_multiple) {
        initiallySelectedValues.forEach(value => this._markSelected(value));
      } else {
        this._markSelected(initiallySelectedValues[0]);
      }
      // Clear the array in order to avoid firing the change event for preselected values.
      this._selectedToEmit.length = 0;
    }
  }
  /**
   * Selects a value or an array of values.
   * @param values The values to select
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  select(...values) {
    this._verifyValueAssignment(values);
    values.forEach(value => this._markSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Deselects a value or an array of values.
   * @param values The values to deselect
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  deselect(...values) {
    this._verifyValueAssignment(values);
    values.forEach(value => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Sets the selected values
   * @param values The new selected values
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  setSelection(...values) {
    this._verifyValueAssignment(values);
    const oldValues = this.selected;
    const newSelectedSet = new Set(values.map(value => this._getConcreteValue(value)));
    values.forEach(value => this._markSelected(value));
    oldValues.filter(value => !newSelectedSet.has(this._getConcreteValue(value, newSelectedSet))).forEach(value => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Toggles a value between selected and deselected.
   * @param value The value to toggle
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  toggle(value) {
    return this.isSelected(value) ? this.deselect(value) : this.select(value);
  }
  /**
   * Clears all of the selected values.
   * @param flushEvent Whether to flush the changes in an event.
   *   If false, the changes to the selection will be flushed along with the next event.
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  clear(flushEvent = true) {
    this._unmarkAll();
    const changed = this._hasQueuedChanges();
    if (flushEvent) {
      this._emitChangeEvent();
    }
    return changed;
  }
  /**
   * Determines whether a value is selected.
   */
  isSelected(value) {
    return this._selection.has(this._getConcreteValue(value));
  }
  /**
   * Determines whether the model does not have a value.
   */
  isEmpty() {
    return this._selection.size === 0;
  }
  /**
   * Determines whether the model has a value.
   */
  hasValue() {
    return !this.isEmpty();
  }
  /**
   * Sorts the selected values based on a predicate function.
   */
  sort(predicate) {
    if (this._multiple && this.selected) {
      this._selected.sort(predicate);
    }
  }
  /**
   * Gets whether multiple values can be selected.
   */
  isMultipleSelection() {
    return this._multiple;
  }
  /** Emits a change event and clears the records of selected and deselected values. */
  _emitChangeEvent() {
    // Clear the selected values so they can be re-cached.
    this._selected = null;
    if (this._selectedToEmit.length || this._deselectedToEmit.length) {
      this.changed.next({
        source: this,
        added: this._selectedToEmit,
        removed: this._deselectedToEmit
      });
      this._deselectedToEmit = [];
      this._selectedToEmit = [];
    }
  }
  /** Selects a value. */
  _markSelected(value) {
    value = this._getConcreteValue(value);
    if (!this.isSelected(value)) {
      if (!this._multiple) {
        this._unmarkAll();
      }
      if (!this.isSelected(value)) {
        this._selection.add(value);
      }
      if (this._emitChanges) {
        this._selectedToEmit.push(value);
      }
    }
  }
  /** Deselects a value. */
  _unmarkSelected(value) {
    value = this._getConcreteValue(value);
    if (this.isSelected(value)) {
      this._selection.delete(value);
      if (this._emitChanges) {
        this._deselectedToEmit.push(value);
      }
    }
  }
  /** Clears out the selected values. */
  _unmarkAll() {
    if (!this.isEmpty()) {
      this._selection.forEach(value => this._unmarkSelected(value));
    }
  }
  /**
   * Verifies the value assignment and throws an error if the specified value array is
   * including multiple values while the selection model is not supporting multiple values.
   */
  _verifyValueAssignment(values) {
    if (values.length > 1 && !this._multiple && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMultipleValuesInSingleSelectionError();
    }
  }
  /** Whether there are queued up change to be emitted. */
  _hasQueuedChanges() {
    return !!(this._deselectedToEmit.length || this._selectedToEmit.length);
  }
  /** Returns a value that is comparable to inputValue by applying compareWith function, returns the same inputValue otherwise. */
  _getConcreteValue(inputValue, selection) {
    if (!this.compareWith) {
      return inputValue;
    } else {
      selection = selection ?? this._selection;
      for (let selectedValue of selection) {
        if (this.compareWith(inputValue, selectedValue)) {
          return selectedValue;
        }
      }
      return inputValue;
    }
  }
}
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * @docs-private
 */
function getMultipleValuesInSingleSelectionError() {
  return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}


/***/ }),

/***/ 8352:
/*!*************************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/pseudo-checkbox-module-CAX2sutq.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MatPseudoCheckboxModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-module-WayjW0Pb.mjs */ 7708);




let MatPseudoCheckboxModule = /*#__PURE__*/(() => {
  class MatPseudoCheckboxModule {
    static ɵfac = (() => function MatPseudoCheckboxModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatPseudoCheckboxModule)();
    })();
    static ɵmod = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatPseudoCheckboxModule
    }))();
    static ɵinj = (() => /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_1__.M]
    }))();
  }
  return MatPseudoCheckboxModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 9036:
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/list-key-manager-CyOIXo8P.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ ListKeyManager)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _typeahead_9ZW4Dtsf_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typeahead-9ZW4Dtsf.mjs */ 7097);
/* harmony import */ var _keycodes_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keycodes.mjs */ 4879);
/* harmony import */ var _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keycodes-CpHkExLC.mjs */ 5758);






/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */
class ListKeyManager {
  _items;
  _activeItemIndex = /*#__PURE__*/(() => -1)();
  _activeItem = /*#__PURE__*/(() => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null))();
  _wrap = false;
  _typeaheadSubscription = /*#__PURE__*/(() => rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY)();
  _itemChangesSubscription;
  _vertical = true;
  _horizontal;
  _allowedModifierKeys = [];
  _homeAndEnd = false;
  _pageUpAndDown = {
    enabled: false,
    delta: 10
  };
  _effectRef;
  _typeahead;
  /**
   * Predicate function that can be used to check whether an item should be skipped
   * by the key manager. By default, disabled items are skipped.
   */
  _skipPredicateFn = item => item.disabled;
  constructor(_items, injector) {
    this._items = _items;
    // We allow for the items to be an array because, in some cases, the consumer may
    // not have access to a QueryList of the items they want to manage (e.g. when the
    // items aren't being collected via `ViewChildren` or `ContentChildren`).
    if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList) {
      this._itemChangesSubscription = _items.changes.subscribe(newItems => this._itemsChanged(newItems.toArray()));
    } else if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isSignal)(_items)) {
      if (!injector && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw new Error('ListKeyManager constructed with a signal must receive an injector');
      }
      this._effectRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => this._itemsChanged(_items()), {
        injector
      });
    }
  }
  /**
   * Stream that emits any time the TAB key is pressed, so components can react
   * when focus is shifted off of the list.
   */
  tabOut = /*#__PURE__*/(() => new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject())();
  /** Stream that emits whenever the active item of the list manager changes. */
  change = /*#__PURE__*/(() => new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject())();
  /**
   * Sets the predicate function that determines which items should be skipped by the
   * list key manager.
   * @param predicate Function that determines whether the given item should be skipped.
   */
  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  /**
   * Configures wrapping mode, which determines whether the active item will wrap to
   * the other end of list when there are no more items in the given direction.
   * @param shouldWrap Whether the list should wrap when reaching the end.
   */
  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  /**
   * Configures whether the key manager should be able to move the selection vertically.
   * @param enabled Whether vertical selection should be enabled.
   */
  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  /**
   * Configures the key manager to move the selection horizontally.
   * Passing in `null` will disable horizontal movement.
   * @param direction Direction in which the selection can be moved.
   */
  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  /**
   * Modifier keys which are allowed to be held down and whose default actions will be prevented
   * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
   */
  withAllowedModifierKeys(keys) {
    this._allowedModifierKeys = keys;
    return this;
  }
  /**
   * Turns on typeahead mode which allows users to set the active item by typing.
   * @param debounceInterval Time to wait after the last keystroke before setting the active item.
   */
  withTypeAhead(debounceInterval = 200) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      const items = this._getItemsArray();
      if (items.length > 0 && items.some(item => typeof item.getLabel !== 'function')) {
        throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
      }
    }
    this._typeaheadSubscription.unsubscribe();
    const items = this._getItemsArray();
    this._typeahead = new _typeahead_9ZW4Dtsf_mjs__WEBPACK_IMPORTED_MODULE_3__.T(items, {
      debounceInterval: typeof debounceInterval === 'number' ? debounceInterval : undefined,
      skipPredicate: item => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(item => {
      this.setActiveItem(item);
    });
    return this;
  }
  /** Cancels the current typeahead sequence. */
  cancelTypeahead() {
    this._typeahead?.reset();
    return this;
  }
  /**
   * Configures the key manager to activate the first and last items
   * respectively when the Home or End key is pressed.
   * @param enabled Whether pressing the Home or End key activates the first/last item.
   */
  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }
  /**
   * Configures the key manager to activate every 10th, configured or first/last element in up/down direction
   * respectively when the Page-Up or Page-Down key is pressed.
   * @param enabled Whether pressing the Page-Up or Page-Down key activates the first/last item.
   * @param delta Whether pressing the Home or End key activates the first/last item.
   */
  withPageUpDown(enabled = true, delta = 10) {
    this._pageUpAndDown = {
      enabled,
      delta
    };
    return this;
  }
  setActiveItem(item) {
    const previousActiveItem = this._activeItem();
    this.updateActiveItem(item);
    if (this._activeItem() !== previousActiveItem) {
      this.change.next(this._activeItemIndex);
    }
  }
  /**
   * Sets the active item depending on the key event passed in.
   * @param event Keyboard event to be used for determining which element should be active.
   */
  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
    const isModifierAllowed = modifiers.every(modifier => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });
    switch (keyCode) {
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__.T:
        this.tabOut.next();
        return;
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__.D:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__.U:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__.R:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__.L:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__.H:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__.E:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__.a:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex - this._pageUpAndDown.delta;
          this._setActiveItemByIndex(targetIndex > 0 ? targetIndex : 0, 1);
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_4__.P:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex + this._pageUpAndDown.delta;
          const itemsLength = this._getItemsArray().length;
          this._setActiveItemByIndex(targetIndex < itemsLength ? targetIndex : itemsLength - 1, -1);
          break;
        } else {
          return;
        }
      default:
        if (isModifierAllowed || (0,_keycodes_mjs__WEBPACK_IMPORTED_MODULE_5__.hasModifierKey)(event, 'shiftKey')) {
          this._typeahead?.handleKey(event);
        }
        // Note that we return here, in order to avoid preventing
        // the default action of non-navigational keys.
        return;
    }
    this._typeahead?.reset();
    event.preventDefault();
  }
  /** Index of the currently active item. */
  get activeItemIndex() {
    return this._activeItemIndex;
  }
  /** The active item. */
  get activeItem() {
    return this._activeItem();
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */
  isTyping() {
    return !!this._typeahead && this._typeahead.isTyping();
  }
  /** Sets the active item to the first enabled item in the list. */
  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  /** Sets the active item to the last enabled item in the list. */
  setLastItemActive() {
    this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
  }
  /** Sets the active item to the next enabled item in the list. */
  setNextItemActive() {
    this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  /** Sets the active item to a previous enabled item in the list. */
  setPreviousItemActive() {
    this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }
  updateActiveItem(item) {
    const itemArray = this._getItemsArray();
    const index = typeof item === 'number' ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index];
    // Explicitly check for `null` and `undefined` because other falsy values are valid.
    this._activeItem.set(activeItem == null ? null : activeItem);
    this._activeItemIndex = index;
    this._typeahead?.setCurrentSelectedItemIndex(index);
  }
  /** Cleans up the key manager. */
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._itemChangesSubscription?.unsubscribe();
    this._effectRef?.destroy();
    this._typeahead?.destroy();
    this.tabOut.complete();
    this.change.complete();
  }
  /**
   * This method sets the active item, given a list of items and the delta between the
   * currently active item and the new active item. It will calculate differently
   * depending on whether wrap mode is turned on.
   */
  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
  /**
   * Sets the active item properly given "wrap" mode. In other words, it will continue to move
   * down the list until it finds an item that is not disabled, and it will wrap if it
   * encounters either end of the list.
   */
  _setActiveInWrapMode(delta) {
    const items = this._getItemsArray();
    for (let i = 1; i <= items.length; i++) {
      const index = (this._activeItemIndex + delta * i + items.length) % items.length;
      const item = items[index];
      if (!this._skipPredicateFn(item)) {
        this.setActiveItem(index);
        return;
      }
    }
  }
  /**
   * Sets the active item properly given the default mode. In other words, it will
   * continue to move down the list until it finds an item that is not disabled. If
   * it encounters either end of the list, it will stop and not wrap.
   */
  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
  }
  /**
   * Sets the active item to the first enabled item starting at the index specified. If the
   * item is disabled, it will move in the fallbackDelta direction until it either
   * finds an enabled item or encounters the end of the list.
   */
  _setActiveItemByIndex(index, fallbackDelta) {
    const items = this._getItemsArray();
    if (!items[index]) {
      return;
    }
    while (this._skipPredicateFn(items[index])) {
      index += fallbackDelta;
      if (!items[index]) {
        return;
      }
    }
    this.setActiveItem(index);
  }
  /** Returns the items as an array. */
  _getItemsArray() {
    if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isSignal)(this._items)) {
      return this._items();
    }
    return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList ? this._items.toArray() : this._items;
  }
  /** Callback for when the items have changed. */
  _itemsChanged(newItems) {
    this._typeahead?.setItems(newItems);
    const activeItem = this._activeItem();
    if (activeItem) {
      const newIndex = newItems.indexOf(activeItem);
      if (newIndex > -1 && newIndex !== this._activeItemIndex) {
        this._activeItemIndex = newIndex;
        this._typeahead?.setCurrentSelectedItemIndex(newIndex);
      }
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=626.js.map