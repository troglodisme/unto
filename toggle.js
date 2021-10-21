<div id='collection-component-1632691908682'></div>
<script type="text/javascript">
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'unto-toscano.myshopify.com',
      storefrontAccessToken: '31f2f5a9f93b96427bf3bde77b95d39c',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: '279287529659',
        node: document.getElementById('collection-component-1632691908682'),
        moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px",
          "width": "calc(25% - 20px)"
        },
        "img": {
          "height": "calc(100% - 15px)",
          "position": "absolute",
          "left": "0",
          "right": "0",
          "top": "0"
        },
        "imgWrapper": {
          "padding-top": "calc(75% + 15px)",
          "position": "relative",
          "height": "0"
        }
      },
      "button": {
        "font-family": "Source Sans Pro, sans-serif",
        "font-weight": "bold",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        "color": "#fafafa",
        ":hover": {
          "color": "#fafafa",
          "background-color": "#32664d"
        },
        "background-color": "#377156",
        ":focus": {
          "background-color": "#32664d"
        },
        "border-radius": "10px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "text": {
      "button": "Add to cart"
    },
    "googleFonts": [
      "Source Sans Pro"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Source Sans Pro, sans-serif",
        "font-weight": "bold",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        "color": "#fafafa",
        ":hover": {
          "color": "#fafafa",
          "background-color": "#32664d"
        },
        "background-color": "#377156",
        ":focus": {
          "background-color": "#32664d"
        },
        "border-radius": "10px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "googleFonts": [
      "Source Sans Pro"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-family": "Source Sans Pro, sans-serif",
        "font-weight": "bold",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        "color": "#fafafa",
        ":hover": {
          "color": "#fafafa",
          "background-color": "#32664d"
        },
        "background-color": "#377156",
        ":focus": {
          "background-color": "#32664d"
        },
        "border-radius": "10px"
      },
      "title": {
        "color": "#ffffff"
      },
      "header": {
        "color": "#ffffff"
      },
      "lineItems": {
        "color": "#ffffff"
      },
      "subtotalText": {
        "color": "#ffffff"
      },
      "subtotal": {
        "color": "#ffffff"
      },
      "notice": {
        "color": "#ffffff"
      },
      "currency": {
        "color": "#ffffff"
      },
      "close": {
        "color": "#ffffff",
        ":hover": {
          "color": "#ffffff"
        }
      },
      "empty": {
        "color": "#ffffff"
      },
      "noteDescription": {
        "color": "#ffffff"
      },
      "discountText": {
        "color": "#ffffff"
      },
      "discountIcon": {
        "fill": "#ffffff"
      },
      "discountAmount": {
        "color": "#ffffff"
      },
      "cart": {
        "background-color": "#ff6026"
      },
      "footer": {
        "background-color": "#ff6026"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "popup": false,
    "googleFonts": [
      "Source Sans Pro"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Source Sans Pro, sans-serif",
        "font-weight": "bold",
        "background-color": "#377156",
        ":hover": {
          "background-color": "#32664d"
        },
        ":focus": {
          "background-color": "#32664d"
        }
      },
      "count": {
        "font-size": "18px",
        "color": "#fafafa",
        ":hover": {
          "color": "#fafafa"
        }
      },
      "iconPath": {
        "fill": "#fafafa"
      }
    },
    "googleFonts": [
      "Source Sans Pro"
    ]
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#ffffff"
      },
      "title": {
        "color": "#ffffff"
      },
      "price": {
        "color": "#ffffff"
      },
      "fullPrice": {
        "color": "#ffffff"
      },
      "discount": {
        "color": "#ffffff"
      },
      "discountIcon": {
        "fill": "#ffffff"
      },
      "quantity": {
        "color": "#ffffff"
      },
      "quantityIncrement": {
        "color": "#ffffff",
        "border-color": "#ffffff"
      },
      "quantityDecrement": {
        "color": "#ffffff",
        "border-color": "#ffffff"
      },
      "quantityInput": {
        "color": "#ffffff",
        "border-color": "#ffffff"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
</script>
