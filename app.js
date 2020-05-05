var app = angular.module("pdfDemo", []);
var controller = app.controller("pdfCtrl", pdfController);

//ต้องระบุตามชื่อของ ไฟล์ font
pdfMake.fonts = {
  THSarabunNew: {
    normal: "THSarabunNew.ttf",
    bold: "THSarabunNew-Bold.ttf",
    italics: "THSarabunNew-Italic.ttf",
    bolditalics: "THSarabunNew-BoldItalic.ttf",
  },
  Roboto: {
    normal: "Roboto-Regular.ttf",
    bold: "Roboto-Medium.ttf",
    italics: "Roboto-Italic.ttf",
    bolditalics: "Roboto-MediumItalic.ttf",
  },
};

function pdfController($scope) {
  // prepare the document definition using declarative approach
  var docDefinition = {
    content: [
      {
        text: "ทดสอบภาษาไทย",
      },
      {
        style: "demoTable",
        table: {
          widths: ["*", "*", "*"],
          body: [
            [
              { text: "ลำดับ", style: "header" },
              { text: "รายละเอียด", style: "header" },
              { text: "หมายเหตุ", style: "header" },
            ],
            ["1", "รายละเอียด 1", "หมายเหตุ 1"],
            ["2", "รายละเอียด 2", "หมายเหตุ 2"],
            ["3", "รายละเอียด 3", "หมายเหตุ 3"],
          ],
        },
      },
    ],
    defaultStyle: {
      font: "THSarabunNew",
    },
    styles: {
      header: {
        bold: true,
        color: "#000",
        fontSize: 11,
      },
      demoTable: {
        color: "#666",
        fontSize: 10,
      },
    },
  };

  $scope.openPdf = function () {
    pdfMake.createPdf(docDefinition).open();
  };

  $scope.downloadPdf = function () {
    pdfMake.createPdf(docDefinition).download();
  };

  $scope.printPdf = function () {
    pdfMake.createPdf(docDefinition).print();
  };
}
