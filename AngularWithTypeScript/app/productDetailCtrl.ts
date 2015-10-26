module app.productDetail {
    interface IProductDetailModel {
        title: string;
        product: app.domain.IProduct;
    }

    interface IRouteParams extends ng.route.IRouteParamsService {
        productId : number
    }

    class ProductDetailCtrl implements IProductDetailModel {
        title: string;
        product: app.domain.IProduct;
        
        static $inject = ["$routeParams","dataAccessService"];
        constructor(private $routeParams : IRouteParams, private dataAccessService : app.common.DataAccessService) {
            this.title = "Product Detail";
            /*
            this.product = new app.domain.Product(3, "Saw", "TBX-002", new Date(2002, 3, 1), 16.95,
                "15-inch steel blade hand saw",
                "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png");
            */

            var productResource = dataAccessService.getProductResource();
            productResource.get({ productId: $routeParams.productId }, (data: app.domain.IProduct) => {
                this.product = data;
            });

        }
    }

    angular.module("productManagement")
        .controller("ProductDetailCtrl", ProductDetailCtrl);
} 