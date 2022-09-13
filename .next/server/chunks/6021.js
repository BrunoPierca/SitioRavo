"use strict";
exports.id = 6021;
exports.ids = [6021];
exports.modules = {

/***/ 9008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DigitalFooter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/footers/digital-footer.json
const digital_footer_namespaceObject = JSON.parse('{"FK":{"qv":"https://www.facebook.com/","km":"https://twitter.com/","ZB":"https://www.youtube.com/"},"bc":[{"url":"https://www.instagram.com/","image":"img/insta/1.jpg"},{"url":"https://www.instagram.com/","image":"img/insta/2.jpg"},{"url":"https://www.instagram.com/","image":"img/insta/3.jpg"},{"url":"https://www.instagram.com/","image":"img/insta/4.jpg"},{"url":"https://www.instagram.com/","image":"img/insta/5.jpg"},{"url":"https://www.instagram.com/","image":"img/insta/6.jpg"}],"Lk":"Germany — 785 15h Street, Office 478 Berlin, De 81566","Do":"Info-Support@Gmail.com","m7":"+1 840 841 25 69","Qz":{"u":"ThemesCamp","H":"https://themeforest.net/user/themescamp"}}');
;// CONCATENATED MODULE: ./src/components/Footers/DigitalFooter/index.jsx

/* eslint-disable @next/next/no-img-element */ 

const Footer = ({ footerClass , type  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        id: "footer",
        className: footerClass,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo mb-30",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "landing-preview.html",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "img/logo-dark.png",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Morbi sagittis hendrt nulla simply text of the printing and has beenthe industry\u2019s en diam pretium."
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "social circle-bord mt-30",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "rest horizontal-link",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: digital_footer_namespaceObject.FK.qv,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook-f"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: digital_footer_namespaceObject.FK.km,
                                                        className: "ms-2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: digital_footer_namespaceObject.FK.ZB,
                                                        className: "ms-2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-youtube"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 offset-lg-1",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "title fw-700 mb-30",
                                        children: "Contact Us"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "address rest",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "adrs mb-15",
                                                children: digital_footer_namespaceObject.Lk
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "eml underline mb-15",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#0",
                                                    children: digital_footer_namespaceObject.Do
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "tel",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: `${type == "purple-red" ? "gr-purple-red-text" : ""} ${type == "purple-light" ? "gr-blue2-text" : ""}`,
                                                    children: digital_footer_namespaceObject.m7
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 offset-lg-1",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "title fw-700 mb-30",
                                        children: "Instagram"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "insta flex mb-20 rest",
                                        children: digital_footer_namespaceObject.bc.map((post, idx)=>idx < 3 && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: `${idx !== 2 ? "mr-20" : ""} full-width`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: post.url,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: post.image,
                                                        alt: ""
                                                    })
                                                })
                                            }, idx)
                                        )
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "insta flex rest",
                                        children: digital_footer_namespaceObject.bc.map((post, idx)=>idx >= 3 && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: `${idx !== 5 ? "mr-20" : ""} full-width`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: post.url,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: post.image,
                                                        alt: ""
                                                    })
                                                })
                                            }, idx)
                                        )
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sub-footer pt-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "horizontal-link fz-13",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "rest",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mr-30",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/services-business",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Privacy policy"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mr-30",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/services-business",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Legal notice"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/services-business",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Terms of service"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "copyrights d-flex justify-content-end",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "fz-13",
                                        children: [
                                            "\xa9 2022 Ravo is Proudly Powered by",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "underline",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: digital_footer_namespaceObject.Qz.H,
                                                    rel: "noreferrer",
                                                    target: "_blank",
                                                    className: `ms-1 ${type == "purple-red" ? "gr-purple-red-text" : ""} ${type == "purple-light" ? "gr-blue2-text" : ""}`,
                                                    children: digital_footer_namespaceObject.Qz.u
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            type == "purple-light" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "wave-1 top bg-img",
                style: {
                    backgroundImage: "url('img/waves/wave-white2.svg')",
                    color: "black"
                }
            }) : null
        ]
    });
};
/* harmony default export */ const DigitalFooter = (Footer);


/***/ }),

/***/ 9453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Process2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/main/process2.json
const process2_namespaceObject = JSON.parse('[{"numb":"01","icon":"pe-7s-display2","title":"Educar","details":"Cras en diam ips elementum pretium hendrerit ultricies."},{"numb":"02","icon":"far fa-heart","title":"Ayudar","details":"Cras en diam ips elementum pretium hendrerit ultricies."},{"numb":"03","icon":"fas fa-user-friends","title":"Fomentar","details":"Cras en diam ips elementum pretium hendrerit ultricies."}]');
;// CONCATENATED MODULE: ./src/components/Main/Process2/index.jsx


const Process = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "process-simp section-padding bg-gray position-re pb-0",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "simple-head md-mb10 mb-80 text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "sub-head radius mb-20",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "fz-12 ls2 text-u",
                                children: "Es por esto que"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "fz-40 fw-800 gr-purple-red-text inline",
                        children: "Nuestros prop\xf3sitos son"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: process2_namespaceObject.map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `item ${idx !== process2_namespaceObject.length - 1 ? "md-mb50" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "step mb-30",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "numb",
                                                children: item.numb
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: `${item.icon} icon bg-gray`
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "mb-10 fw-700",
                                        children: item.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: item.details
                                    })
                                ]
                            })
                        }, idx)
                    )
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "curve-cls top",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 500 250",
                    enableBackground: "new 0 0 500 250",
                    xmlSpace: "preserve",
                    preserveAspectRatio: "none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#f3f7f8",
                        d: "M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Process2 = (Process);


/***/ })

};
;