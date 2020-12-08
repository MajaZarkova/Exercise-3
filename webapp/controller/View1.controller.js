sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/Formatter",
	"sap/m/library",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Formatter, mobileLibrary, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("com.kpmg.exercise3.controller.View1", {
		onInit: function () {
			var oModel = new JSONModel(sap.ui.require.toUrl("com.kpmg.exercise3/products.json"));
			this.getView().setModel(oModel);
			var productsModel = this.getView().getModel("productsModel");
		},

		onFilterInvoices: function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("Name", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("idProductsTable");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
	});
});