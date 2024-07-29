$(".Reason-bottombar-toggle").click(function () {
  $("body").toggleClass("sidebar-open");
  $(".Reason-bottombar").toggleClass("active");
  $(".black-overlay").toggleClass("active");
});

$(".date-detlis-items li").click(function () {
  $("body").toggleClass("sidebar-open");
  $(".Reason-bottombar").toggleClass("active");
  $(".black-overlay").toggleClass("active");
});


$(".SelectLocation-bottombar-toggle").click(function () {
  $("body").toggleClass("sidebar-open");
  $(".SelectLocation-bottombar").toggleClass("active");
  $(".black-overlay").toggleClass("active");
});


$(".LinkedItems-bottombar-toggle").click(function () {
  $("body").toggleClass("sidebar-open");
  $(".LinkedItems-bottombar").toggleClass("active");
  $(".black-overlay").toggleClass("active");
});

$(".AddNewRecord-bottombar-toggle").click(function () {
  $("body").toggleClass("sidebar-open");
  $(".AddNewRecord-bottombar").toggleClass("active");
  $(".black-overlay").toggleClass("active");
});

$(".AddPayee-bottombar-toggle").click(function () {
  $("body").toggleClass("sidebar-open");
  $(".AddPayee-bottombar").toggleClass("active");
  $(".black-overlay").toggleClass("active");
});

$(".AddPriceGroup-bottombar-toggle").click(function () {
  $("body").toggleClass("sidebar-open");
  $(".AddPriceGroup-bottombar").toggleClass("active");
  $(".black-overlay").toggleClass("active");
});

$(".CartonMapping-bottombar-toggle").click(function () {
  $("body").toggleClass("sidebar-open");
  $(".CartonMapping-bottombar").toggleClass("active");
  $(".black-overlay").toggleClass("active");
});

$(".ItemCode-bottombar-toggle").click(function () {
  $("body").toggleClass("sidebar-open");
  $(".ItemCode-bottombar").toggleClass("active");
  $(".black-overlay").toggleClass("active");
});

$(".Multipacks-bottombar-toggle").click(function () {
  $("body").toggleClass("sidebar-open");
  $(".Multipacks-bottombar").toggleClass("active");
  $(".black-overlay").toggleClass("active");
});

$(".EditItemDetails-bottombar-toggle").click(function () {
  $("body").toggleClass("sidebar-open");
  $(".EditItemDetails-bottombar").toggleClass("active");
  $(".black-overlay").toggleClass("active");
});

$(".AdvancedSearch-bottombar-toggle").click(function () {
  $("body").toggleClass("sidebar-open");
  $(".AdvancedSearch-bottombar").toggleClass("active");
  $(".black-overlay").toggleClass("active");
});

$(".ShowPurchase-bottombar-toggle").click(function () {
  $("body").toggleClass("sidebar-open");
  $(".ShowPurchase-bottombar").toggleClass("active");
  $(".black-overlay").toggleClass("active");
});

$(".ShowSales-bottombar-toggle").click(function () {
  $("body").toggleClass("sidebar-open");
  $(".ShowSales-bottombar").toggleClass("active");
  $(".black-overlay").toggleClass("active");
});

$(document).ready(function () {
  $('#selectall').click(function () {
    var isChecked = $(this).is(':checked');
    $('input[name="selectall"]').prop('checked', isChecked);
  });
});



$('.save-data-click').click(function () {
  $('.ItemCodes-section').removeClass('d-none')
  $('.ItemCode-data').addClass('d-none')
})

$('.Multipacks-data-click').click(function () {
  $('.Multipacks-section').removeClass('d-none')
  $('.Multipacks-data').addClass('d-none')
})



$(document).ready(function () {
  function toggleBottombar() {
    $("body").toggleClass("sidebar-open");
    $(".ApplyMultiPack-bottombar").toggleClass("active");
    $(".black-overlay").toggleClass("active");
  }

  $(document).on("click", ".ApplyMultiPack-bottombar-toggle", function () {
    toggleBottombar();
  });

  $('.SendtoPOS-selact').change(function () {
    if ($(this).is(':checked')) {
      $('.ApplyMultiPack-btn').removeClass('SendItems-inactive').addClass('ApplyMultiPack-bottombar-toggle');
    } else {
      $('.ApplyMultiPack-btn').addClass('SendItems-inactive').removeClass('ApplyMultiPack-bottombar-toggle');
    }
  });
});


$(document).ready(function() {
  $('#Item-tab').on('click', function() {
      $('.Reason-bottombar-toggle').removeClass('d-none');
      $('.textnew-heading').addClass('d-none'); 
    });
    
    $('#CartonItemMapping-tab, #ItemCodes-tab, #MultiPacks-tab, #PriceHistory-tab, #PurchaseHistory-tab, #SalesHistory-tab').on('click', function() {
      $('.textnew-heading').removeClass('d-none')
      $('.Reason-bottombar-toggle').addClass('d-none');
  });
});
