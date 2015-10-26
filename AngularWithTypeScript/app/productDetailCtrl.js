var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        var ProductDetailCtrl = (function () {
            function ProductDetailCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Product Detail";
                /*
                this.product = new app.domain.Product(3, "Saw", "TBX-002", new Date(2002, 3, 1), 16.95,
                    "15-inch steel blade hand saw",
                    "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png");
                */
                var productResource = dataAccessService.getProductResource();
                productResource.get({ productId: $routeParams.productId }, function (data) {
                    _this.product = data;
                });
            }
            ProductDetailCtrl.$inject = ["$routeParams", "dataAccessService"];
            return ProductDetailCtrl;
        })();
        angular.module("productManagement")
            .controller("ProductDetailCtrl", ProductDetailCtrl);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
//# sourceMappingURL=productDetailCtrl.js.map