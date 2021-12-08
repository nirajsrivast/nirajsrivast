const { default: config } = require("./config")

let data = {
    "homeBanner": [
        {
            image: "https://websappstechnologies.com/proof/boxmygrocer/wp-content/uploads/2021/10/banner.png",
        },
        {
            image: "https://image.shutterstock.com/image-photo/fresh-healthy-food-vegetables-grocery-260nw-1175684464.jpg",
        }
    ],
    "brands": [
        {
            "name": "Beverages",
            "image": "http://grocery-api.initstore.net/uploads/5f049df7f25a2.jpg",
            "id": 1
        },
        {
            "name": "Drinks",
            "image": "http://grocery-api.initstore.net/uploads/5f049fb631605.jpg",
            "id": 2
        },
        {
            "name": "Dishwash",
            "image": "http://grocery-api.initstore.net/uploads/5f04ac72acf07.jpg",
            "id": 3
        },
        {
            "name": "Scrubs",
            "image": "http://grocery-api.initstore.net/uploads/5f04aac5d3ad9.jpg",
            "id": 4
        },
        {
            "name":'Atta',
            "image":"http://grocery-api.initstore.net/uploads/5f047f2097bdc.jpg",
            "id":5
        },
        {
            "name":'Rice',
            "image":"http://grocery-api.initstore.net/uploads/5f04815b470be.jpg",
            "id":6
        }
    ],
    "categories": [
        {
            "name": "Top",
            "image": "https://greenstore.trickycode.xyz/uploads/media/162738221460ffe1c6599b4.webp",
            "banner_image": "http://intelvue.com/demo/app-template/light/1.png",
            "id": 1,
            "title_position": "right"
        },
        {
            "name": "Bottom",
            "image": "https://greenstore.trickycode.xyz/uploads/media/162740358661003542d711d.webp",
            "banner_image": "http://intelvue.com/demo/app-template/light/2.png",
            "id": 2,
            "title_position": "left"
        },
        {
            "name": "Top",
            "image": "https://greenstore.trickycode.xyz/uploads/media/162740301061003302cc2ea.webp",
            "banner_image": "http://intelvue.com/demo/app-template/light/3.png",
            "id": 3,
            "title_position": "right"
        },
        {
            "name": "Bottom",
            "image": "https://greenstore.trickycode.xyz/uploads/media/162738429260ffe9e40b54e.webp",
            "banner_image": "http://intelvue.com/demo/app-template/light/4.png",
            "id": 4,
            "title_position": "left"
        }
    ],
    "items": [
        {
            "name": "Apple",
            "sku": "SKU001",
            "images": [
                "https://greenstore.trickycode.xyz/uploads/media/162738221460ffe1c6599b4.webp",
                "http://intelvue.com/demo/app-template/light/p2.png"
            ],
            "price": "R200",
            "id": 1,
            "rating": 3,
            "brand_name": "My Brand",
            "description": "<h3>Full Description</h3><p>Nice Dude</p>",
            "specification": "<p>I am specs</p>"
        },
        {
            "name": "Johnson's",
            "sku": "SKU001",
            "images": [
                "https://greenstore.trickycode.xyz/uploads/media/162740301061003302cc2ea.webp",
                "http://intelvue.com/demo/app-template/light/p3.png"
            ],
            "price": "R200",
            "special_price": "R160",
            "id": 2,
            "rating": 4,
            "brand_name": "My Brand",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        },
        {
            "name": "Detol",
            "sku": "SKU001",
            "images": [
                "https://greenstore.trickycode.xyz/uploads/media/162738429260ffe9e40b54e.webp",
                "http://intelvue.com/demo/app-template/light/p5.png"
            ],
            "price": "R200",
            "special_price": "R160",
            "id": 3,
            "brand_name": "My Brand",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        },{
            "name": "Bourn Vita",
            "sku": "SKU001",
            "images": [
                "https://greenstore.trickycode.xyz/uploads/media/162738371460ffe7a28af28.webp",
                "http://intelvue.com/demo/app-template/light/p6.png"
            ],
            "price": "R200",
            "special_price": "R160",
            "id": 4,
            "brand_name": "My Brand",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        },
        {
            "name": "Nutella",
            "sku": "SKU001",
            "images": [
                "https://greenstore.trickycode.xyz/uploads/media/162738383960ffe81f0bb94.webp",
                "http://intelvue.com/demo/app-template/light/p2.png"
            ],
            "price": "R200",
            "special_price": "R160",
            "id": 5,
            "brand_name": "My Brand",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        },{
            "name": "Odonil",
            "sku": "SKU001",
            "images": [
                "https://greenstore.trickycode.xyz/uploads/media/16274033276100343f6c8be.webp",
                "http://intelvue.com/demo/app-template/light/p4.png"
            ],
            "price": "R200",
            "special_price": "R160",
            "id": 6,
            "brand_name": "My Brand",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        }
    ],

    "frequent": [
        {
            "name": "Organic Almonds",
            "sku": "SKU001",
            "images": [
                "http://grocery-api.initstore.net/uploads/5f04885e2c897.jpg",
                "http://intelvue.com/demo/app-template/light/p2.png"
            ],
            "price": "R200",
            "id": 1,
            "rating": 3,
            "brand_name": "My Brand",
            "description": "<h3>Full Description</h3><p>Nice Dude</p>",
            "specification": "<p>I am specs</p>"
        },
        {
            "name": "Organic toor dal",
            "sku": "SKU001",
            "images": [
                "http://grocery-api.initstore.net/uploads/5f0486e121898.jpg",
                "http://intelvue.com/demo/app-template/light/p3.png"
            ],
            "price": "R200",
            "special_price": "R160",
            "id": 2,
            "rating": 4,
            "brand_name": "My Brand",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        },
        {
            "name": "Brocoli",
            "sku": "SKU001",
            "images": [
                "https://demo.artureanec.com/html/agro/img/goods_img/2.jpg",
                "http://intelvue.com/demo/app-template/light/p5.png"
            ],
            "price": "R200",
            "special_price": "R160",
            "id": 3,
            "brand_name": "My Brand",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        },{
            "name": "Oranges",
            "sku": "SKU001",
            "images": [
                "https://demo.artureanec.com/html/agro/img/goods_img/1.jpg",
                "http://intelvue.com/demo/app-template/light/p6.png"
            ],
            "price": "R200",
            "special_price": "R160",
            "id": 4,
            "brand_name": "My Brand",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        },
        {
            "name": "Nutella",
            "sku": "SKU001",
            "images": [
                "https://greenstore.trickycode.xyz/uploads/media/162738383960ffe81f0bb94.webp",
                "http://intelvue.com/demo/app-template/light/p2.png"
            ],
            "price": "R200",
            "special_price": "R160",
            "id": 5,
            "brand_name": "My Brand",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        },{
            "name": "Odonil",
            "sku": "SKU001",
            "images": [
                "https://greenstore.trickycode.xyz/uploads/media/16274033276100343f6c8be.webp",
                "http://intelvue.com/demo/app-template/light/p4.png"
            ],
            "price": "R200",
            "special_price": "R160",
            "id": 6,
            "brand_name": "My Brand",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        }
    ],

    "cart": {
        "lines": [
            {
                "name": "",
                "sku": "",
                "image": "",
                "rate": "",
                "linetotal": "",
                "id": '',
                "qty": ''
            },
           
        ],
        "summary": {
            "total": "",
            "subtotal": "",
            "estimatedshipping": "",
            "taxtotal": ""
        }
    },
    "addresses": [
        {
            "name": "Demo Address 1",
            "address": "Lorem 01, Ipsum 0900, \nTX, US",
            "selected": true,
            "id": 1
        },
        {
            "name": "Demo Address 2",
            "address": "Lorem 01, Ipsum 0900, \nTX, US",
            "selected": false,
            "id": 2
        },
        {
            "name": "Demo Address 3",
            "address": "Lorem 01, Ipsum 0900, \nTX, US",
            "selected": false,
            "id": 3
        },
        {
            "name": "Demo Address 4",
            "address": "Lorem 01, Ipsum 0900, \nTX, US",
            "selected": false,
            "id": 4
        }
    ],
    "orders": [
        {
            "id": 1,
            "order_no": "SO-10001",
            "date": "2019/12/12",
            "status": "pending",
            "statusLabel": "Pending",
            "total": "R1000",
            "summary": {
                "total": "R1000",
                "shippingtotal": "R100",
                "taxtotal": "R100",
                "subtotal": "R800"
            },
            "lines": [
                {
                    "id": 1,
                    "name": "Lorem Ipsum Item",
                    "sku": "TESTITEM",
                    "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                    "rate": "R200",
                    "qty": 2,
                    "total": "R400"
                },
                {
                    "id": 2,
                    "name": "Lorem Ipsum Item 2",
                    "sku": "TESTITEM2",
                    "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                    "rate": "R200",
                    "qty": 2,
                    "total": "R400"
                }
            ]
        },
        {
            "id": 3,
            "order_no": "SO-10002",
            "date": "2019/12/12",
            "status": "billed",
            "statusLabel": "Billed",
            "total": "R1000",
            "summary": {
                "total": "R1000",
                "shippingtotal": "R100",
                "taxtotal": "R100",
                "subtotal": "R800"
            },
            "lines": [
                {
                    "id": 1,
                    "name": "Lorem Ipsum Item",
                    "sku": "TESTITEM",
                    "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                    "rate": "R200",
                    "qty": 2,
                    "total": "R400"
                },
                {
                    "id": 2,
                    "name": "Lorem Ipsum Item 2",
                    "sku": "TESTITEM2",
                    "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                    "rate": "R200",
                    "qty": 2,
                    "total": "R400"
                }
            ]
        },
        {
            "id": 2,
            "order_no": "SO-10003",
            "date": "2019/12/12",
            "status": "cancelled",
            "statusLabel": "Cancelled",
            "total": "R1000",
            "summary": {
                "total": "R1000",
                "shippingtotal": "R100",
                "taxtotal": "R100",
                "subtotal": "R800"
            },
            "lines": [
                {
                    "id": 1,
                    "name": "Lorem Ipsum Item",
                    "sku": "TESTITEM",
                    "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                    "rate": "R200",
                    "qty": 2,
                    "total": "R400"
                },
                {
                    "id": 2,
                    "name": "Lorem Ipsum Item 2",
                    "sku": "TESTITEM2",
                    "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                    "rate": "R200",
                    "qty": 2,
                    "total": "R400"
                }
            ]
        }
    ],
    "filters": {
        "colors": [
            {"id": 1, "label": "Black"},
            {"id": 2, "label": "White"},
            {"id": 3, "label": "Red"},
            {"id": 4, "label": "Maroon"},
            {"id": 5, "label": "Blue"},
            {"id": 6, "label": "Grey"},
        ],
        "sizes": [
            {"id": 1, "label": "XSm"},
            {"id": 2, "label": "Sm"},
            {"id": 3, "label": "M"},
            {"id": 4, "label": "L"},
            {"id": 5, "label": "XL"},
            {"id": 6, "label": "XXL"},
            {"id": 7, "label": "XXXL"},
            {"id": 8, "label": "XXXXL"},
        ]
    }
}

if(config.layoutMode == 'dark') {
    data = {
        "homeBanner": [
            {
                image: "http://intelvue.com/demo/app-template/dark/main-banner.jpg",
            },
            {
                image: "http://intelvue.com/demo/app-template/light/main-banner.jpg",
            }
        ],
        "brands": [
            {
                "name": "Brand 1",
                "image": "https://intelvue.com/demo/app-template/dark/category-th-1.png",
                "id": 1
            },
            {
                "name": "Brand 2",
                "image": "https://intelvue.com/demo/app-template/dark/category-th-2.png",
                "id": 2
            },
            {
                "name": "Brand 3",
                "image": "https://intelvue.com/demo/app-template/dark/category-th-3.png",
                "id": 3
            },
            {
                "name": "Brand 4",
                "image": "https://intelvue.com/demo/app-template/dark/category-th-4.png",
                "id": 4
            }
        ],
        "categories": [
            {
                "name": "Top",
                "image": "http://intelvue.com/demo/app-template/dark/category-th-1.png",
                "banner_image": "http://intelvue.com/demo/app-template/dark/category-1.png",
                "id": 1
            },
            {
                "name": "Bottom",
                "image": "http://intelvue.com/demo/app-template/dark/category-th-2.png",
                "banner_image": "http://intelvue.com/demo/app-template/dark/category-2.png",
                "id": 2,
                "title_position": "left"
            },
            {
                "name": "Top",
                "image": "http://intelvue.com/demo/app-template/dark/category-th-3.png",
                "banner_image": "http://intelvue.com/demo/app-template/dark/category-3.png",
                "id": 3
            },
            {
                "name": "Bottom",
                "image": "http://intelvue.com/demo/app-template/dark/category-th-4.png",
                "banner_image": "http://intelvue.com/demo/app-template/dark/category-4.png",
                "id": 4,
                "title_position": "left"
            }
        ],
        "items": [
            {
                "name": "T-Shirt 0xx Small Size nala box",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-1.png",
                    "http://intelvue.com/demo/app-template/dark/product-2.png"
                ],
                "price": "R200",
                "id": 1,
                "rating": 3,
                "brand_name": "My Brand",
                "description": "<h3>Full Description</h3><p>Nice Dude</p>",
                "specification": "<p>I am specs</p>"
            },
            {
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-2.png",
                    "http://intelvue.com/demo/app-template/dark/product-3.png"
                ],
                "price": "R200",
                "special_price": "R160",
                "id": 2,
                "rating": 4,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            },
            {
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-3.png",
                    "http://intelvue.com/demo/app-template/dark/product-4.png"
                ],
                "price": "R200",
                "special_price": "R160",
                "id": 3,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            },{
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-4.png",
                    "http://intelvue.com/demo/app-template/dark/product-5.png"
                ],
                "price": "R200",
                "special_price": "R160",
                "id": 4,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            },
            {
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-5.png",
                    "http://intelvue.com/demo/app-template/dark/product-4.png"
                ],
                "price": "R200",
                "special_price": "R160",
                "id": 5,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            },{
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-3.png",
                    "http://intelvue.com/demo/app-template/dark/product-2.png"
                ],
                "price": "R200",
                "special_price": "R160",
                "id": 6,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            }
        ],
        "cart": {
            "lines": [
                {
                    "name": "T-Shirt 0xx",
                    "sku": "SKU001",
                    "image": "http://intelvue.com/demo/app-template/dark/product-1.png",
                    "rate": "R200",
                    "linetotal": "R200",
                    "id": 1,
                    "qty": 1
                },
                {
                    "name": "T-Shirt 0xx",
                    "sku": "SKU001",
                    "image": "http://intelvue.com/demo/app-template/dark/product-2.png",
                    "rate": "R200",
                    "linetotal": "R600",
                    "id": 1,
                    "qty": 3
                }
            ],
            "summary": {
                "total": "R1000",
                "subtotal": "R800",
                "estimatedshipping": "R100",
                "taxtotal": "R100"
            }
        },
        "addresses": [
            {
                "name": "Demo Address 1",
                "address": "Lorem 01, Ipsum 0900, \nTX, US",
                "selected": true,
                "id": 1
            },
            {
                "name": "Demo Address 2",
                "address": "Lorem 01, Ipsum 0900, \nTX, US",
                "selected": false,
                "id": 2
            },
            {
                "name": "Demo Address 3",
                "address": "Lorem 01, Ipsum 0900, \nTX, US",
                "selected": false,
                "id": 3
            },
            {
                "name": "Demo Address 4",
                "address": "Lorem 01, Ipsum 0900, \nTX, US",
                "selected": false,
                "id": 4
            }
        ],
        "orders": [
            {
                "id": 1,
                "order_no": "SO-10001",
                "date": "2019/12/12",
                "status": "pending",
                "statusLabel": "Pending",
                "total": "R1000",
                "summary": {
                    "total": "R1000",
                    "shippingtotal": "R100",
                    "taxtotal": "R100",
                    "subtotal": "R800"
                },
                "lines": [
                    {
                        "id": 1,
                        "name": "Lorem Ipsum Item",
                        "sku": "TESTITEM",
                        "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                        "rate": "R200",
                        "qty": 2,
                        "total": "R400"
                    },
                    {
                        "id": 2,
                        "name": "Lorem Ipsum Item 2",
                        "sku": "TESTITEM2",
                        "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                        "rate": "R200",
                        "qty": 2,
                        "total": "R400"
                    }
                ]
            },
            {
                "id": 3,
                "order_no": "SO-10002",
                "date": "2019/12/12",
                "status": "billed",
                "statusLabel": "Billed",
                "total": "R1000",
                "summary": {
                    "total": "R1000",
                    "shippingtotal": "R100",
                    "taxtotal": "R100",
                    "subtotal": "R800"
                },
                "lines": [
                    {
                        "id": 1,
                        "name": "Lorem Ipsum Item",
                        "sku": "TESTITEM",
                        "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                        "rate": "R200",
                        "qty": 2,
                        "total": "R400"
                    },
                    {
                        "id": 2,
                        "name": "Lorem Ipsum Item 2",
                        "sku": "TESTITEM2",
                        "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                        "rate": "R200",
                        "qty": 2,
                        "total": "R400"
                    }
                ]
            },
            {
                "id": 2,
                "order_no": "SO-10003",
                "date": "2019/12/12",
                "status": "cancelled",
                "statusLabel": "Cancelled",
                "total": "R1000",
                "summary": {
                    "total": "R1000",
                    "shippingtotal": "R100",
                    "taxtotal": "R100",
                    "subtotal": "R800"
                },
                "lines": [
                    {
                        "id": 1,
                        "name": "Lorem Ipsum Item",
                        "sku": "TESTITEM",
                        "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                        "rate": "R200",
                        "qty": 2,
                        "total": "R400"
                    },
                    {
                        "id": 2,
                        "name": "Lorem Ipsum Item 2",
                        "sku": "TESTITEM2",
                        "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                        "rate": "R200",
                        "qty": 2,
                        "total": "R400"
                    }
                ]
            }
        ],
        "filters": {
            "colors": [
                {"id": 1, "label": "Black"},
                {"id": 2, "label": "White"},
                {"id": 3, "label": "Red"},
                {"id": 4, "label": "Maroon"},
                {"id": 5, "label": "Blue"},
                {"id": 6, "label": "Grey"},
            ],
            "sizes": [
                {"id": 1, "label": "XSm"},
                {"id": 2, "label": "Sm"},
                {"id": 3, "label": "M"},
                {"id": 4, "label": "L"},
                {"id": 5, "label": "XL"},
                {"id": 6, "label": "XXL"},
                {"id": 7, "label": "XXXL"},
                {"id": 8, "label": "XXXXL"},
            ]
        }
    }
}

export default data;