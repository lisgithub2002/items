

$("#POSLiveSales-tabs")
  .kendoTabStrip({
    animation: {
      open: {
        effects: "",
      },
    },
  })
  .data("kendoTabStrip");



$("#Department-select , #ProductCategory-select , #PriceGroup-select , #Payee-select , #SaleType-select , #UnitofMeasure-select , #Size-select , #MinAge-select , #TaxRate-select , #BlueLaw-select , #NACSCategory-select , #NACSSubCategory-select , #LinkedItem-select ").kendoDropDownList({
  popup: {
    appendTo: $("#Department-select , #ProductCategory-select , #PriceGroup-select , #Payee-select , #SaleType-select , #UnitofMeasure-select , #Size-select , #MinAge-select , #TaxRate-select , #BlueLaw-select , #NACSCategory-select , #NACSSubCategory-select , #LinkedItem-select ").closest(
      ".select-wrapper"
    ),
  },
  autoBind: false,
});

$("#Department-AddPayee-select , #DefaultBankAccount-AddPayee-select , #Terms-select").kendoDropDownList({
  popup: {
    appendTo: $("#Department-AddPayee-select , #DefaultBankAccount-AddPayee-select , #Terms-select ").closest(
      ".select-wrapper"
    ),
  },
  autoBind: false,
});

$("#Payee-AddPayee-select").kendoDropDownList({
  popup: {
    appendTo: $("#Payee-AddPayee-select").closest(
      ".select-wrapper"
    ),
  },
  autoBind: false,
});

$("#LinkedItemMultipacks-select").kendoDropDownList({
  popup: {
    appendTo: $("#LinkedItemMultipacks-select").closest(
      ".select-wrapper"
    ),
  },
  autoBind: false,
});

$("#Categories-select").kendoDropDownList({
  popup: {
    appendTo: $("#Categories-select").closest(
      ".select-wrapper"
    ),
  },
  autoBind: false,
});

$("#UnitRetail-select").kendoDropDownList({
  popup: {
    appendTo: $("#UnitRetail-select").closest(
      ".select-wrapper"
    ),
  },
  autoBind: false,
});



$("#Startingfromtwo-datepicker").kendoDatePicker({
  dateInput: true,
  format: "dd MMM yyyy",
});

$("#StartingTotwo-datepicker").kendoDatePicker({
  dateInput: true,
  format: "dd MMM yyyy",
});


$("#StartingfromShowSales-datepicker").kendoDatePicker({
  dateInput: true,
  format: "dd MMM yyyy",
});

$("#StartingtoShowSales-datepicker").kendoDatePicker({
  dateInput: true,
  format: "dd MMM yyyy",
});
