(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! F:\ramya\angular-ivy-7wg16t\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0HBK":
    /*!*****************************************!*\
      !*** ./src/app/Others/language.pipe.ts ***!
      \*****************************************/

    /*! exports provided: LanguagePipe */

    /***/
    function HBK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguagePipe", function () {
        return LanguagePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LanguagePipe = /*#__PURE__*/function () {
        function LanguagePipe() {
          _classCallCheck(this, LanguagePipe);

          this.languageset = {
            ENGLISH: {
              HI: "Hi",
              HELLO: "Hello",
              LOGIN: "Login",
              SIGNUP: "Signup",
              USERNAME: "Username",
              PASSWORD: "Password",
              RETYPEPASSWORD: "Retype Password"
            },
            TAMIL: {
              HI: "இருக்கிறது",
              HELLO: "வணக்கம்",
              LOGIN: "உள்நுழைய",
              SIGNUP: "பதிவுபெறுதல்",
              USERNAME: "பயனர்பெயர்",
              PASSWORD: "கடவுச்சொல்",
              RETYPEPASSWORD: "கடவுச்சொல்லை மீண்டும் தட்டச்சு செய்க"
            },
            HINDI: {
              HI: "இருக்கிறது",
              HELLO: "नमस्ते",
              LOGIN: "H Login",
              SIGNUP: "साइन अप करें",
              USERNAME: "उपयोगकर्ता नाम",
              PASSWORD: "कुंजिका",
              RETYPEPASSWORD: "पासवर्ड फिर से लिखें"
            },
            FRENCH: {
              HI: "EST",
              HELLO: "BONJOUR",
              LOGIN: "F Login",
              SIGNUP: "s'inscrire",
              USERNAME: "Nom d'utilisateur",
              PASSWORD: "Mot de passe",
              RETYPEPASSWORD: "Retaper le mot de passe"
            }
          };
        }

        _createClass(LanguagePipe, [{
          key: "transform",
          value: function transform(value, args) {
            console.log(value);
            console.log(args);
            value = value.toUpperCase(); // return "Maths";

            var language = args ? args : "FRENCH";

            if (localStorage.getItem("Language")) {
              language = localStorage.getItem("Language");
            }

            if (this.languageset[language][value]) {
              return this.languageset[language][value];
            }

            return "Maths";
          }
        }]);

        return LanguagePipe;
      }();

      LanguagePipe.ɵfac = function LanguagePipe_Factory(t) {
        return new (t || LanguagePipe)();
      };

      LanguagePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "language",
        type: LanguagePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguagePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: "language"
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "0gwD":
    /*!*******************************************************!*\
      !*** ./src/app/Components/signup/signup.component.ts ***!
      \*******************************************************/

    /*! exports provided: SignupComponent */

    /***/
    function gwD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent() {
          _classCallCheck(this, SignupComponent);
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submit",
          value: function submit(f) {}
        }]);

        return SignupComponent;
      }();

      SignupComponent.ɵfac = function SignupComponent_Factory(t) {
        return new (t || SignupComponent)();
      };

      SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignupComponent,
        selectors: [["app-signup"]],
        decls: 17,
        vars: 0,
        consts: [[1, "SignupForm"], ["f", ""], [1, "form-group"], ["for", "username"], ["type", "text"], ["for", "password"], ["type", "password"], ["for", "re-type password"], [3, "click"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "re-type password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_15_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

              return ctx.submit(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
        styles: [".username[_ngcontent-%COMP%] {\r\n  color: brown;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJuYW1lIHtcclxuICBjb2xvcjogYnJvd247XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-signup",
            templateUrl: "./signup.component.html",
            styleUrls: ["./signup.component.css"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "1VHI":
    /*!************************************!*\
      !*** ./src/app/hello.component.ts ***!
      \************************************/

    /*! exports provided: HelloComponent */

    /***/
    function VHI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelloComponent", function () {
        return HelloComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HelloComponent = function HelloComponent() {
        _classCallCheck(this, HelloComponent);
      };

      HelloComponent.ɵfac = function HelloComponent_Factory(t) {
        return new (t || HelloComponent)();
      };

      HelloComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HelloComponent,
        selectors: [["hello"]],
        inputs: {
          name: "name"
        },
        decls: 2,
        vars: 1,
        template: function HelloComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello ", ctx.name, "!");
          }
        },
        styles: ["h1[_ngcontent-%COMP%] { font-family: Lato; }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelloComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'hello',
            template: "<h1>Hello {{name}}!</h1>",
            styles: ["h1 { font-family: Lato; }"]
          }]
        }], null, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "OZHu":
    /*!*************************************************************************!*\
      !*** ./src/app/Components/employee-detail/employee-detail.component.ts ***!
      \*************************************************************************/

    /*! exports provided: EmployeeDetailComponent */

    /***/
    function OZHu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeDetailComponent", function () {
        return EmployeeDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _Others_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../Others/employee.service */
      "wSaN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var EmployeeDetailComponent = /*#__PURE__*/function () {
        function EmployeeDetailComponent(emp) {
          _classCallCheck(this, EmployeeDetailComponent);

          this.emp = emp;
          this.employee = {
            Name: "Ramya",
            Age: 53,
            Email: "ante.blandit@disparturient.ca",
            Street: "493 Iaculis Rd.",
            City: "Lewiston",
            Zip: "42591-180",
            Region: "Maine",
            Country: "Sudan",
            Info: "est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia",
            EmployeeID: 101,
            DateOfJoining: "10/06/2019",
            PhoneNumber: "1628101902299"
          };
          this.employee = this.emp.getSelectedEmployee();
        }

        _createClass(EmployeeDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EmployeeDetailComponent;
      }();

      EmployeeDetailComponent.ɵfac = function EmployeeDetailComponent_Factory(t) {
        return new (t || EmployeeDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Others_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]));
      };

      EmployeeDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EmployeeDetailComponent,
        selectors: [["app-employee-detail"]],
        decls: 71,
        vars: 13,
        consts: [[1, "cardstyle"], [1, "card"], ["src", "https://geetha96.github.io/assets/dummy.jpg"], ["routerLink", "/employee-list"], [1, "tablestyle"]],
        template: function EmployeeDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1001");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Age");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Street");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Zip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Region");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "EmployeeID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "DateOfJoining");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "PhoneNumber");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.Name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.Name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.Age);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.Email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.Street);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.City);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.Zip);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.Region);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.Country);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.Info);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.EmployeeID);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.DateOfJoining);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.PhoneNumber);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: ["table[_ngcontent-%COMP%] {\r\n  border: 1px solid black;\r\n  width: 100%;\r\n  margin-top: 30px;\r\n}\r\nth[_ngcontent-%COMP%] {\r\n  padding: 0.25rem;\r\n  text-align: center;\r\n  border: 1px solid black;\r\n}\r\ntd[_ngcontent-%COMP%] {\r\n  padding: 0.25rem;\r\n  text-align: center;\r\n  border: 1px solid black;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  background-color: gray;\r\n  padding: 10px;\r\n  border: 5px solid gray;\r\n  margin: 10px;\r\n  text-align: center;\r\n}\r\n.cardstyle[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  display: inline-block;\r\n}\r\n.tablestyle[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  display: inline-block;\r\n  padding: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsWUFBWTtBQUNkIiwiZmlsZSI6ImVtcGxveWVlLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxudGgge1xyXG4gIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbnRkIHtcclxuICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4uY2FyZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDVweCBzb2xpZCBncmF5O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNhcmRzdHlsZSB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnRhYmxlc3R5bGUge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-employee-detail",
            templateUrl: "./employee-detail.component.html",
            styleUrls: ["./employee-detail.component.css"]
          }]
        }], function () {
          return [{
            type: _Others_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Q/My":
    /*!*****************************************************!*\
      !*** ./src/app/Components/login/login.component.ts ***!
      \*****************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function QMy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../auth.guard */
      "tIkO");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LoginComponent_small_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enterusername!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_small_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please change username!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_small_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter the username fully!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_small_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter password!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_small_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please change password!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_small_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter the password fully!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(auth) {
          _classCallCheck(this, LoginComponent);

          this.auth = auth;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login(f) {
            console.log(f);

            if (f.value.username === "Ramya") {
              this.auth.validuser = true;
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 19,
        vars: 6,
        consts: [["autocomplete", "false", 1, "loginForm"], ["f", "ngForm"], [1, "form-group"], [4, "ngIf"], ["for", "username"], ["type", "text", "ngModel", "", "name", "username"], ["for", "password"], ["type", "password", "ngModel", "", "name", "password"], [3, "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_small_3_Template, 2, 0, "small", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_small_4_Template, 2, 0, "small", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_small_5_Template, 2, 0, "small", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_small_10_Template, 2, 0, "small", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_small_11_Template, 2, 0, "small", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_small_12_Template, 2, 0, "small", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

              return ctx.login(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.controls.username == null ? null : _r0.controls.username.untouched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.controls.username == null ? null : _r0.controls.username.pristine);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.controls.username == null ? null : _r0.controls.username.dirty);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.controls.password == null ? null : _r0.controls.password.untouched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.controls.password == null ? null : _r0.controls.password.pristine);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.controls.password == null ? null : _r0.controls.password.dirty);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
        styles: [".loginForm[_ngcontent-%COMP%] {\r\n  background-color: burlywood;\r\n  width: 50%;\r\n  margin: auto;\r\n  margin-top: 12%;\r\n  padding: 10px;\r\n}\r\n.loginForm[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 95%;\r\n  padding: 6px;\r\n  margin-bottom: 10px;\r\n}\r\nsmall[_ngcontent-%COMP%] {\r\n  color: red;\r\n  display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbkZvcm0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxMiU7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4ubG9naW5Gb3JtIGlucHV0IHtcclxuICB3aWR0aDogOTUlO1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbnNtYWxsIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-login",
            templateUrl: "./login.component.html",
            styleUrls: ["./login.component.css"]
          }]
        }], function () {
          return [{
            type: _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Components/navbar/navbar.component */
      "UA8t");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.now = new Date();
        this.name = 'Angular ' + _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"].major;
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["my-app"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["p[_ngcontent-%COMP%] {\r\n  font-family: Lato;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "T3u0":
    /*!*********************************************************************!*\
      !*** ./src/app/Components/employee-list/employee-list.component.ts ***!
      \*********************************************************************/

    /*! exports provided: EmployeeListComponent */

    /***/
    function T3u0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function () {
        return EmployeeListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _Others_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../Others/employee.service */
      "wSaN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function EmployeeListComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "1001");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_div_1_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.view(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var employee_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r1.Name);
        }
      }

      var EmployeeListComponent = /*#__PURE__*/function () {
        function EmployeeListComponent(emp) {
          _classCallCheck(this, EmployeeListComponent);

          this.emp = emp;
          this.employeelist = [];
        }

        _createClass(EmployeeListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.employeelist = this.emp.getAllEmployee();
          }
        }, {
          key: "view",
          value: function view(index) {
            // alert(index);
            this.emp.selectedEmployee = index;
          }
        }]);

        return EmployeeListComponent;
      }();

      EmployeeListComponent.ɵfac = function EmployeeListComponent_Factory(t) {
        return new (t || EmployeeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Others_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]));
      };

      EmployeeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EmployeeListComponent,
        selectors: [["app-employee-list"]],
        decls: 2,
        vars: 1,
        consts: [[1, "employeelist"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["src", "https://geetha96.github.io/assets/dummy.jpg"], ["routerLink", "/employee-detail", 3, "click"]],
        template: function EmployeeListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeListComponent_div_1_Template, 8, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employeelist);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: [".card[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  background-color: rgb(43, 226, 217);\r\n  \r\n  padding: 10px;\r\n  border: 5px solid gray;\r\n  margin: 10px;\r\n}\r\n.employeelist[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.employeelist[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 6px;\r\n  padding: 6px;\r\n  background-color: brown;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZCIsImZpbGUiOiJlbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgMjI2LCAyMTcpO1xyXG4gIC8qIHdpZHRoOiAyMTBweDsgKi9cclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIGdyYXk7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5lbXBsb3llZWxpc3Qge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZW1wbG95ZWVsaXN0IGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA2cHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-employee-list",
            templateUrl: "./employee-list.component.html",
            styleUrls: ["./employee-list.component.css"]
          }]
        }], function () {
          return [{
            type: _Others_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "UA8t":
    /*!*******************************************************!*\
      !*** ./src/app/Components/navbar/navbar.component.ts ***!
      \*******************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function UA8t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _Others_language_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../Others/language.pipe */
      "0HBK");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent() {
          _classCallCheck(this, NavbarComponent);
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changeLanguage",
          value: function changeLanguage() {
            console.log(event);
            console.log(event.target.value);
            var language = String(event.target.value).toUpperCase();
            localStorage.setItem("Language", language);
            window.location.reload();
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)();
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 45,
        vars: 6,
        consts: [["routerLink", "/login"], [1, "fas", "fa-sign-in-alt"], ["routerLink", "/signup"], [1, "fas", "fa-user-plus"], ["routerLink", "/dummy"], [1, "far", "fa-grin-tongue-wink"], ["routerLink", "/error"], [1, "fas", "fa-exclamation-triangle"], ["routerLink", "/pagination"], [1, "fas", "fa-info"], ["routerLink", "/employee-list"], [1, "far", "fa-id-badge"], ["routerLink", "/todo"], [3, "change"], ["value", "Tamil"], ["value", "English"], ["value", "Hindi"], ["value", "French"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "language");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "language");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " dummy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " error ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Pagination ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " employee-list ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " todo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NavbarComponent_Template_select_change_34_listener() {
              return ctx.changeLanguage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Choose one");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Tamil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "English");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Hindi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "French");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, "login"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, "signup"), " ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
        pipes: [_Others_language_pipe__WEBPACK_IMPORTED_MODULE_3__["LanguagePipe"]],
        styles: ["nav[_ngcontent-%COMP%] {\r\n  background-color: brown;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 10px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  margin:0px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color:white;\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xyXG59XHJcblxyXG5uYXYgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbm5hdiB1bHtcclxuICBtYXJnaW46MHB4O1xyXG59XHJcbm5hdiBhe1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-navbar",
            templateUrl: "./navbar.component.html",
            styleUrls: ["./navbar.component.css"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _hello_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hello.component */
      "1VHI");
      /* harmony import */


      var _Others_language_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./Others/language.pipe */
      "0HBK");
      /* harmony import */


      var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./Components/login/login.component */
      "Q/My");
      /* harmony import */


      var _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./Components/navbar/navbar.component */
      "UA8t");
      /* harmony import */


      var _Components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./Components/signup/signup.component */
      "0gwD");
      /* harmony import */


      var _Components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./Components/dummy/dummy.component */
      "sBPZ");
      /* harmony import */


      var _Components_error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./Components/error/error.component */
      "kX37");
      /* harmony import */


      var _Components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./Components/pagination/pagination.component */
      "tOzc");
      /* harmony import */


      var _Components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./Components/employee-list/employee-list.component */
      "T3u0");
      /* harmony import */


      var _Components_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./Components/employee-detail/employee-detail.component */
      "OZHu");
      /* harmony import */


      var _Others_employee_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./Others/employee.service */
      "wSaN");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _Components_todo_todo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./Components/todo/todo.component */
      "f/NC");
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./auth.guard */
      "tIkO");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_Others_employee_service__WEBPACK_IMPORTED_MODULE_15__["EmployeeService"], _auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_19__["ChartsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _hello_component__WEBPACK_IMPORTED_MODULE_5__["HelloComponent"], _Others_language_pipe__WEBPACK_IMPORTED_MODULE_6__["LanguagePipe"], _Components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _Components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], _Components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_10__["DummyComponent"], _Components_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"], _Components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__["PaginationComponent"], _Components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeListComponent"], _Components_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeDetailComponent"], _Components_todo_todo_component__WEBPACK_IMPORTED_MODULE_17__["TodoComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_19__["ChartsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_19__["ChartsModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _hello_component__WEBPACK_IMPORTED_MODULE_5__["HelloComponent"], _Others_language_pipe__WEBPACK_IMPORTED_MODULE_6__["LanguagePipe"], _Components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _Components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], _Components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_10__["DummyComponent"], _Components_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"], _Components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__["PaginationComponent"], _Components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeListComponent"], _Components_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeDetailComponent"], _Components_todo_todo_component__WEBPACK_IMPORTED_MODULE_17__["TodoComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            providers: [_Others_employee_service__WEBPACK_IMPORTED_MODULE_15__["EmployeeService"], _auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "f/NC":
    /*!***************************************************!*\
      !*** ./src/app/Components/todo/todo.component.ts ***!
      \***************************************************/

    /*! exports provided: TodoComponent */

    /***/
    function fNC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoComponent", function () {
        return TodoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! chartjs-plugin-datalabels */
      "qb46");
      /* harmony import */


      var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");

      function TodoComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "loading....");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TodoComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.pieChartData)("labels", ctx_r1.pieChartLabels)("chartType", ctx_r1.pieChartType)("options", ctx_r1.pieChartOptions)("plugins", ctx_r1.pieChartPlugins)("colors", ctx_r1.pieChartColors)("legend", ctx_r1.pieChartLegend);
        }
      }

      var TodoComponent = /*#__PURE__*/function () {
        function TodoComponent(http) {
          var _this = this;

          _classCallCheck(this, TodoComponent);

          this.http = http; // dataurl=https://jsonplaceholder.typicode.com/todos
          // Pie

          this.pieChartOptions = {
            responsive: true,
            legend: {
              position: "top"
            },
            plugins: {
              datalabels: {
                formatter: function formatter(value, ctx) {
                  var label = ctx.chart.data.labels[ctx.dataIndex];
                  return label;
                }
              }
            }
          };
          this.pieChartLabels = ["completed", "notcompleted"];
          this.pieChartData = [0, 0];
          this.pieChartType = "pie";
          this.pieChartLegend = true;
          this.pieChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__];
          this.pieChartColors = [{
            backgroundColor: ["rgba(255,0,0,0.3)", "rgba(0,255,0,0.3)"]
          }];
          this.isdataloaded = false;
          this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(function (data) {
            console.log(data); // data.forEach(each => {
            //   console.log(each);
            //   each.completed ? this.pieChartData[0]++ : this.pieChartData[1]++;
            // });

            for (var i = 0; i < data.length; i++) {
              console.log(data[i]);
              data[i].completed ? _this.pieChartData[0]++ : _this.pieChartData[1]++;
            } // this.pieChartData[0] = 100; //completed
            // this.pieChartData[1] = 200; //not completed


            _this.isdataloaded = true;
          });
        }

        _createClass(TodoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "chartClicked",
          value: function chartClicked(_ref) {
            var event = _ref.event,
                active = _ref.active;
            console.log(event, active);
          }
        }, {
          key: "chartHovered",
          value: function chartHovered(_ref2) {
            var event = _ref2.event,
                active = _ref2.active;
            console.log(event, active);
          }
        }, {
          key: "changeLabels",
          value: function changeLabels() {
            var words = ["hen", "variable", "embryo", "instal", "pleasant", "physical", "bomber", "army", "add", "film", "conductor", "comfortable", "flourish", "establish", "circumstance", "chimney", "crack", "hall", "energy", "treat", "window", "shareholder", "division", "disk", "temptation", "chord", "left", "hospital", "beef", "patrol", "satisfied", "academy", "acceptance", "ivory", "aquarium", "building", "store", "replace", "language", "redeem", "honest", "intention", "silk", "opera", "sleep", "innocent", "ignore", "suite", "applaud", "funny"];

            var randomWord = function randomWord() {
              return words[Math.trunc(Math.random() * words.length)];
            };

            this.pieChartLabels = Array.apply(null, {
              length: 3
            }).map(function (_) {
              return randomWord();
            });
          }
        }, {
          key: "addSlice",
          value: function addSlice() {
            this.pieChartLabels.push(["Line 1", "Line 2", "Line 3"]);
            this.pieChartData.push(400);
            this.pieChartColors[0].backgroundColor.push("rgba(196,79,244,0.3)");
          }
        }, {
          key: "removeSlice",
          value: function removeSlice() {
            this.pieChartLabels.pop();
            this.pieChartData.pop();
            this.pieChartColors[0].backgroundColor.pop();
          }
        }, {
          key: "changeLegendPosition",
          value: function changeLegendPosition() {
            this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === "left" ? "top" : "left";
          }
        }]);

        return TodoComponent;
      }();

      TodoComponent.ɵfac = function TodoComponent_Factory(t) {
        return new (t || TodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      TodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TodoComponent,
        selectors: [["app-todo"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], [1, "loading"], [1, "chart"], ["baseChart", "", 3, "data", "labels", "chartType", "options", "plugins", "colors", "legend"]],
        template: function TodoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TodoComponent_div_0_Template, 3, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoComponent_div_1_Template, 4, 7, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isdataloaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isdataloaded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["BaseChartDirective"]],
        styles: [".loading[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin: 50px;\r\n  font-size: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJ0b2RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogNTBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-todo",
            templateUrl: "./todo.component.html",
            styleUrls: ["./todo.component.css"]
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "hN/g":
    /*!**************************!*\
      !*** ./src/polyfills.ts ***!
      \**************************/

    /*! no exports provided */

    /***/
    function hNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/dist/zone */
      "pDpN");
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
      /**
       * This file includes polyfills needed by Angular and is loaded before the app.
       * You can add your own extra polyfills to this file.
       *
       * This file is divided into 2 sections:
       *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
       *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
       *      file.
       *
       * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
       * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
       * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
       *
       * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
       */

      /***************************************************************************************************
       * BROWSER POLYFILLS
       */

      /** IE9, IE10 and IE11 requires all of the following polyfills. **/
      // import 'core-js/es6/symbol';
      // import 'core-js/es6/object';
      // import 'core-js/es6/function';
      // import 'core-js/es6/parse-int';
      // import 'core-js/es6/parse-float';
      // import 'core-js/es6/number';
      // import 'core-js/es6/math';
      // import 'core-js/es6/string';
      // import 'core-js/es6/date';
      // import 'core-js/es6/array';
      // import 'core-js/es6/regexp';
      // import 'core-js/es6/map';
      // import 'core-js/es6/set';

      /** IE10 and IE11 requires the following for NgClass support on SVG elements */
      // import 'classlist.js';  // Run `npm install --save classlist.js`.

      /** IE10 and IE11 requires the following to support `@angular/animation`. */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /** Evergreen browsers require these. **/
      // import 'core-js/es6/reflect';
      // import 'core-js/es7/reflect';

      /**
       * Web Animations `@angular/platform-browser/animations`
       * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
       * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
       */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /***************************************************************************************************
       * Zone JS is required by Angular itself.
       */
      // Included with Angular CLI.

      /***************************************************************************************************
       * APPLICATION IMPORTS
       */

      /**
       * Date, currency, decimal and percent pipes.
       * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
       */
      // import 'intl';  // Run `npm install --save intl`.

      /***/

    },

    /***/
    "kX37":
    /*!*****************************************************!*\
      !*** ./src/app/Components/error/error.component.ts ***!
      \*****************************************************/

    /*! exports provided: ErrorComponent */

    /***/
    function kX37(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
        return ErrorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ErrorComponent = /*#__PURE__*/function () {
        function ErrorComponent() {
          _classCallCheck(this, ErrorComponent);
        }

        _createClass(ErrorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ErrorComponent;
      }();

      ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
        return new (t || ErrorComponent)();
      };

      ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ErrorComponent,
        selectors: [["app-error"]],
        decls: 0,
        vars: 0,
        template: function ErrorComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-error',
            templateUrl: './error.component.html',
            styleUrls: ['./error.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "sBPZ":
    /*!*****************************************************!*\
      !*** ./src/app/Components/dummy/dummy.component.ts ***!
      \*****************************************************/

    /*! exports provided: DummyComponent */

    /***/
    function sBPZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DummyComponent", function () {
        return DummyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _hello_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../hello.component */
      "1VHI");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DummyComponent_p_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ngif directive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DummyComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var car_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("card ", car_r2, " ", i_r3, "");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "error": a0
        };
      };

      var DummyComponent = /*#__PURE__*/function () {
        function DummyComponent() {
          _classCallCheck(this, DummyComponent);

          this.hello = "hi";
          this.now = new Date();
          this.name = "Angular " + _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"].major;
          this.showme = true;
          this.cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
          this.count = 0;
          console.log("constructor");
        }

        _createClass(DummyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("ngOnInit");
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            console.log("ngAfterContentInit");
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            console.log("ngAfterContentChecked");
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            console.log("ngAfterViewInit");
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            console.log("ngAfterViewChecked");
          }
        }, {
          key: "chsngeme",
          value: function chsngeme() {
            // alert('hi');
            this.hello = "boy";
            this.showme = !this.showme;
          }
        }, {
          key: "keytriggered",
          value: function keytriggered() {
            this.count++;
            console.log(this.count);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log("ngOnDestroy");
            alert("Your changes will be lost");
          }
        }]);

        return DummyComponent;
      }();

      DummyComponent.ɵfac = function DummyComponent_Factory(t) {
        return new (t || DummyComponent)();
      };

      DummyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DummyComponent,
        selectors: [["app-dummy"]],
        decls: 14,
        vars: 9,
        consts: [["type", "text", 3, "value", "keyup"], [3, "click"], [3, "name"], [4, "ngIf"], [3, "hidden"], [3, "ngClass"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"]],
        template: function DummyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " dummy works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DummyComponent_Template_input_keyup_2_listener() {
              return ctx.keytriggered();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DummyComponent_Template_button_click_3_listener() {
              return ctx.chsngeme();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "change me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hello", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DummyComponent_p_8_Template, 2, 0, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "hidden directive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ng class directive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DummyComponent_div_13_Template, 2, 2, "div", 6);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.hello);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hello);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showme);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showme);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.showme));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cars);
          }
        },
        directives: [_hello_component__WEBPACK_IMPORTED_MODULE_1__["HelloComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: [".error[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  border: 1px solid red;\r\n  padding: 10px;\r\n  margin: 10px;\r\n  display: inline-block;\r\n  background-color: teal;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1bW15LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEIiLCJmaWxlIjoiZHVtbXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DummyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-dummy",
            templateUrl: "./dummy.component.html",
            styleUrls: ["./dummy.component.css"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "tIkO":
    /*!*******************************!*\
      !*** ./src/app/auth.guard.ts ***!
      \*******************************/

    /*! exports provided: AuthGuard */

    /***/
    function tIkO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard() {
          _classCallCheck(this, AuthGuard);

          this.validuser = true;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return this.validuser;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)();
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "tOzc":
    /*!***************************************************************!*\
      !*** ./src/app/Components/pagination/pagination.component.ts ***!
      \***************************************************************/

    /*! exports provided: PaginationComponent */

    /***/
    function tOzc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () {
        return PaginationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function PaginationComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var button_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.filtercomments(button_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var button_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.page == button_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", button_r2, " ");
        }
      }

      function PaginationComponent_tr_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var comment_r5 = ctx.$implicit;
          var i_r6 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r5.postId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r5.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r5.body);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r5.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r5.id);
        }
      }

      var PaginationComponent = /*#__PURE__*/function () {
        function PaginationComponent(http) {
          var _this2 = this;

          _classCallCheck(this, PaginationComponent);

          this.http = http;
          this.comments = [];
          this.displayComments = [];
          this.buttons = [];
          this.initial = 0;
          this.end = 10;
          this.page = 1;
          this.http.get("https://jsonplaceholder.typicode.com/comments").subscribe(function (data) {
            console.log(data);
            _this2.comments = data;

            _this2.filtercomments(1);

            _this2.generatebuttons();
          });
        }

        _createClass(PaginationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "previous",
          value: function previous() {
            console.log("previous"); // this.initial = this.initial - 10;
            // this.end = this.end - 10;

            this.filtercomments(this.page - 1);
          }
        }, {
          key: "next",
          value: function next() {
            console.log("next"); // this.initial = this.initial + 10;
            // this.end = this.end + 10;

            this.filtercomments(this.page + 1);
          }
        }, {
          key: "one",
          value: function one() {
            console.log("one"); // this.initial = 0;
            // this.end = 10;

            this.filtercomments(1);
          }
        }, {
          key: "two",
          value: function two() {
            console.log("two"); // this.initial = 10;
            // this.end = 20;

            this.filtercomments(2);
          }
        }, {
          key: "three",
          value: function three() {
            console.log("three"); // this.initial = 20;
            // this.end = 30;

            this.filtercomments(3);
          }
        }, {
          key: "four",
          value: function four() {
            console.log("four"); // this.initial = 30;
            // this.end = 40;

            this.filtercomments(4);
          }
        }, {
          key: "five",
          value: function five() {
            console.log("five"); // this.initial = 40;
            // this.end = 50;

            this.filtercomments(5);
          }
        }, {
          key: "changepagelimit",
          value: function changepagelimit() {
            console.log("changepagelimit");
            console.log(event.target.value); // todo change pagelimit

            this.one();
          }
        }, {
          key: "filtercomments",
          value: function filtercomments(page) {
            this.page = page;
            this.initial = (page - 1) * 10;
            this.end = this.initial + 10;
            this.displayComments = this.comments.slice(this.initial, this.end);
            this.generatebuttons();
          }
        }, {
          key: "generatebuttons",
          value: function generatebuttons() {
            var startbutton = this.page - 2 > 0 ? this.page - 2 : 1;
            var totalbuttons = this.page + 2 <= 50 ? this.page + 2 : 50;
            this.buttons = [];

            for (var i = startbutton; i <= totalbuttons; i++) {
              this.buttons.push(i);
            }
          }
        }]);

        return PaginationComponent;
      }();

      PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
        return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaginationComponent,
        selectors: [["app-pagination"]],
        decls: 32,
        vars: 3,
        consts: [[3, "click"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "change"], [4, "ngFor", "ngForOf"], [3, "ngClass", "click"]],
        template: function PaginationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_button_click_1_listener() {
              return ctx.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationComponent_button_3_Template, 2, 4, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_button_click_4_listener() {
              return ctx.next();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PaginationComponent_Template_select_change_6_listener() {
              return ctx.changepagelimit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "15");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "index");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "postId");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PaginationComponent_tr_31_Template, 13, 6, "tr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buttons);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.page);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayComments);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        styles: ["body[_ngcontent-%COMP%] {\r\n  font: normal medium/1.4 sans-serif;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  padding: 0.25rem;\r\n  text-align: left;\r\n  border: 1px solid #ccc;\r\n}\r\ntr[_ngcontent-%COMP%]:hover {\r\n  background: yellow;\r\n}\r\nbutton.active[_ngcontent-%COMP%] {\r\n  background: yellow;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBmb250OiBub3JtYWwgbWVkaXVtLzEuNCBzYW5zLXNlcmlmO1xyXG59XHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbnRoLFxyXG50ZCB7XHJcbiAgcGFkZGluZzogMC4yNXJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxudHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHllbGxvdztcclxufVxyXG5idXR0b24uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-pagination",
            templateUrl: "./pagination.component.html",
            styleUrls: ["./pagination.component.css"]
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Components/login/login.component */
      "Q/My");
      /* harmony import */


      var _Components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Components/signup/signup.component */
      "0gwD");
      /* harmony import */


      var _Components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./Components/dummy/dummy.component */
      "sBPZ");
      /* harmony import */


      var _Components_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./Components/error/error.component */
      "kX37");
      /* harmony import */


      var _Components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./Components/pagination/pagination.component */
      "tOzc");
      /* harmony import */


      var _Components_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./Components/employee-detail/employee-detail.component */
      "OZHu");
      /* harmony import */


      var _Components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./Components/employee-list/employee-list.component */
      "T3u0");
      /* harmony import */


      var _Components_todo_todo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./Components/todo/todo.component */
      "f/NC");
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./auth.guard */
      "tIkO");

      var routes = [{
        path: "login",
        component: _Components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: "signup",
        component: _Components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
      }, {
        path: "dummy",
        component: _Components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_4__["DummyComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: "error",
        component: _Components_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"]
      }, {
        path: "pagination",
        component: _Components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: "employee-list",
        component: _Components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeListComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: "employee-detail",
        component: _Components_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeDetailComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: "todo",
        component: _Components_todo_todo_component__WEBPACK_IMPORTED_MODULE_9__["TodoComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wSaN":
    /*!********************************************!*\
      !*** ./src/app/Others/employee.service.ts ***!
      \********************************************/

    /*! exports provided: EmployeeService */

    /***/
    function wSaN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
        return EmployeeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EmployeeService = /*#__PURE__*/function () {
        function EmployeeService() {
          _classCallCheck(this, EmployeeService);

          this.employeelist = [{
            Name: "Aurora",
            Age: 53,
            Email: "ante.blandit@disparturient.ca",
            Street: "493 Iaculis Rd.",
            City: "Lewiston",
            Zip: "42591-180",
            Region: "Maine",
            Country: "Sudan",
            Info: "est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia",
            EmployeeID: 101,
            DateOfJoining: "10/06/2019",
            PhoneNumber: "1628101902299"
          }, {
            Name: "Ila",
            Age: 37,
            Email: "Sed.et@purus.edu",
            Street: "823 Varius Ave",
            City: "Beaumaris",
            Zip: "55970-446",
            Region: "Anglesey",
            Country: "Saint Helena, Ascension and Tristan da Cunha",
            Info: "pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien,",
            EmployeeID: 102,
            DateOfJoining: "26/05/2019",
            PhoneNumber: "1686011935499"
          }, {
            Name: "Rose",
            Age: 26,
            Email: "Suspendisse.commodo@tristiquepharetraQuisque.co.uk",
            Street: "P.O. Box 376, 1901 Justo Rd.",
            City: "Vienna",
            Zip: "82720",
            Region: "Vienna",
            Country: "Jersey",
            Info: "ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit",
            EmployeeID: 103,
            DateOfJoining: "21/09/2018",
            PhoneNumber: "1650033077399"
          }, {
            Name: "Neville",
            Age: 21,
            Email: "est@tinciduntnibh.edu",
            Street: "3855 Lacinia Ave",
            City: "Ukkel",
            Zip: "60407",
            Region: "Brussels Hoofdstedelijk Gewest",
            Country: "Norway",
            Info: "et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus",
            EmployeeID: 104,
            DateOfJoining: "13/11/2017",
            PhoneNumber: "1652020117199"
          }, {
            Name: "Mira",
            Age: 28,
            Email: "dui@cursuseteros.org",
            Street: "P.O. Box 156, 4690 Sollicitudin Ave",
            City: "Dublin",
            Zip: "E1Y 9C5",
            Region: "Leinster",
            Country: "Virgin Islands, British",
            Info: "sem mollis dui, in sodales elit erat vitae risus. Duis",
            EmployeeID: 105,
            DateOfJoining: "08/10/2017",
            PhoneNumber: "1693030708899"
          }, {
            Name: "Megan",
            Age: 40,
            Email: "felis.adipiscing@nequesed.com",
            Street: "2618 Risus. Ave",
            City: "Salon-de-Provence",
            Zip: "03901",
            Region: "PR",
            Country: "Zimbabwe",
            Info: "sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis",
            EmployeeID: 106,
            DateOfJoining: "14/03/2018",
            PhoneNumber: "1615091544599"
          }, {
            Name: "Austin",
            Age: 53,
            Email: "rutrum.eu@velitegestaslacinia.net",
            Street: "Ap #863-6907 Vel, Rd.",
            City: "Kapolei",
            Zip: "82-129",
            Region: "Hawaii",
            Country: "Bhutan",
            Info: "mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor",
            EmployeeID: 107,
            DateOfJoining: "10/02/2019",
            PhoneNumber: "1676120251599"
          }, {
            Name: "Shea",
            Age: 56,
            Email: "at.velit.Pellentesque@felisadipiscingfringilla.org",
            Street: "6545 Sed Street",
            City: "Gap",
            Zip: "2152",
            Region: "PR",
            Country: "Tunisia",
            Info: "id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis",
            EmployeeID: 108,
            DateOfJoining: "17/06/2018",
            PhoneNumber: "1629100357399"
          }, {
            Name: "Bert",
            Age: 43,
            Email: "odio@Proindolor.edu",
            Street: "Ap #941-2997 Tortor. St.",
            City: "Minto",
            Zip: "647310",
            Region: "ON",
            Country: "Ireland",
            Info: "Duis cursus, diam at pretium aliquet, metus urna convallis erat,",
            EmployeeID: 109,
            DateOfJoining: "18/05/2018",
            PhoneNumber: "1602123086599"
          }, {
            Name: "Lamar",
            Age: 64,
            Email: "Quisque.tincidunt@SuspendisseduiFusce.com",
            Street: "510 Ante. Av.",
            City: "Skegness",
            Zip: "4220",
            Region: "Lincolnshire",
            Country: "Samoa",
            Info: "mi tempor lorem, eget mollis lectus pede et risus. Quisque",
            EmployeeID: 110,
            DateOfJoining: "18/10/2017",
            PhoneNumber: "1665061376299"
          }, {
            Name: "Kay",
            Age: 65,
            Email: "vehicula.risus.Nulla@egestasSed.co.uk",
            Street: "5073 Cubilia Road",
            City: "Estevan",
            Zip: "8887",
            Region: "Saskatchewan",
            Country: "Laos",
            Info: "pede sagittis augue, eu tempor erat neque non quam. Pellentesque",
            EmployeeID: 111,
            DateOfJoining: "31/01/2019",
            PhoneNumber: "1623121265199"
          }, {
            Name: "Blair",
            Age: 20,
            Email: "fringilla@risusat.net",
            Street: "Ap #533-7225 Neque Rd.",
            City: "Ajaccio",
            Zip: "4202",
            Region: "Corse",
            Country: "United States",
            Info: "in faucibus orci luctus et ultrices posuere cubilia Curae; Donec",
            EmployeeID: 112,
            DateOfJoining: "19/11/2017",
            PhoneNumber: "1602090174699"
          }, {
            Name: "Stone",
            Age: 33,
            Email: "aliquet@sagittisDuis.org",
            Street: "393-9389 Lacus. Rd.",
            City: "Geertruidenberg",
            Zip: "49-566",
            Region: "Noord Brabant",
            Country: "Greece",
            Info: "nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam",
            EmployeeID: 113,
            DateOfJoining: "23/01/2019",
            PhoneNumber: "1691120873599"
          }, {
            Name: "Sara",
            Age: 26,
            Email: "enim.Etiam.gravida@aauctor.ca",
            Street: "5728 Sed St.",
            City: "Lonzee",
            Zip: "831773",
            Region: "Namen",
            Country: "Mexico",
            Info: "ac mattis velit justo nec ante. Maecenas mi felis, adipiscing",
            EmployeeID: 114,
            DateOfJoining: "24/11/2018",
            PhoneNumber: "1695032347999"
          }, {
            Name: "Brody",
            Age: 37,
            Email: "sagittis.felis@gravidaPraesenteu.com",
            Street: "849-5028 Dolor, Road",
            City: "Oudergem",
            Zip: "769776",
            Region: "BU",
            Country: "Western Sahara",
            Info: "vitae sodales nisi magna sed dui. Fusce aliquam, enim nec",
            EmployeeID: 115,
            DateOfJoining: "27/03/2019",
            PhoneNumber: "1662010887999"
          }, {
            Name: "Dylan",
            Age: 46,
            Email: "iaculis.nec@mollis.net",
            Street: "2016 Ultrices Street",
            City: "Brisbane",
            Zip: "91143",
            Region: "Queensland",
            Country: "Montenegro",
            Info: "suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in",
            EmployeeID: 116,
            DateOfJoining: "06/06/2019",
            PhoneNumber: "1692080840799"
          }, {
            Name: "Joseph",
            Age: 49,
            Email: "Sed.malesuada@natoquepenatibus.net",
            Street: "P.O. Box 555, 1346 Duis Ave",
            City: "Vienna",
            Zip: "T4A 1N3",
            Region: "Wie",
            Country: "Virgin Islands, United States",
            Info: "habitant morbi tristique senectus et netus et malesuada fames ac",
            EmployeeID: 117,
            DateOfJoining: "07/01/2018",
            PhoneNumber: "1684041637099"
          }, {
            Name: "Inez",
            Age: 46,
            Email: "eu@egetmetusIn.co.uk",
            Street: "794 Posuere St.",
            City: "Ribeirão Preto",
            Zip: "44368",
            Region: "São Paulo",
            Country: "Oman",
            Info: "dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies",
            EmployeeID: 118,
            DateOfJoining: "26/03/2018",
            PhoneNumber: "1662051033699"
          }, {
            Name: "Grady",
            Age: 28,
            Email: "Sed.auctor.odio@aliquet.net",
            Street: "1386 Iaculis Av.",
            City: "Saint-Nazaire",
            Zip: "64212",
            Region: "Pays de la Loire",
            Country: "Congo, the Democratic Republic of the",
            Info: "fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed,",
            EmployeeID: 119,
            DateOfJoining: "14/06/2019",
            PhoneNumber: "1640111297399"
          }, {
            Name: "Quinn",
            Age: 51,
            Email: "euismod.mauris@semvitaealiquam.net",
            Street: "P.O. Box 900, 7039 Eu, Avenue",
            City: "Butte",
            Zip: "19-709",
            Region: "MT",
            Country: "Guinea",
            Info: "parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor.",
            EmployeeID: 120,
            DateOfJoining: "30/08/2018",
            PhoneNumber: "1647060826999"
          }, {
            Name: "Kay",
            Age: 18,
            Email: "velit.in.aliquet@quamdignissim.co.uk",
            Street: "P.O. Box 277, 9874 Litora Av.",
            City: "Campagna",
            Zip: "804870",
            Region: "Campania",
            Country: "Anguilla",
            Info: "neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin",
            EmployeeID: 121,
            DateOfJoining: "13/05/2019",
            PhoneNumber: "1669070438799"
          }, {
            Name: "Elvis",
            Age: 24,
            Email: "vitae.diam.Proin@ullamcorper.com",
            Street: "484-5692 Posuere St.",
            City: "Istanbul",
            Zip: "594237",
            Region: "Istanbul",
            Country: "Saint Barthélemy",
            Info: "augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed,",
            EmployeeID: 122,
            DateOfJoining: "13/06/2018",
            PhoneNumber: "1617021266099"
          }, {
            Name: "Marny",
            Age: 37,
            Email: "metus.In.nec@at.ca",
            Street: "Ap #424-8235 Non, Avenue",
            City: "Istres",
            Zip: "70888",
            Region: "PR",
            Country: "Laos",
            Info: "Aenean gravida nunc sed pede. Cum sociis natoque penatibus et",
            EmployeeID: 123,
            DateOfJoining: "15/03/2019",
            PhoneNumber: "1644101053599"
          }, {
            Name: "Constance",
            Age: 60,
            Email: "ante.dictum.mi@euismodet.com",
            Street: "155-3682 Urna Av.",
            City: "Gontrode",
            Zip: "5153",
            Region: "Oost-Vlaanderen",
            Country: "Vanuatu",
            Info: "vulputate, nisi sem semper erat, in consectetuer ipsum nunc id",
            EmployeeID: 124,
            DateOfJoining: "01/01/2019",
            PhoneNumber: "1607040244199"
          }, {
            Name: "Daniel",
            Age: 61,
            Email: "eu@erategettincidunt.co.uk",
            Street: "7874 Enim. Avenue",
            City: "Muzaffarpur",
            Zip: "16772",
            Region: "BR",
            Country: "Haiti",
            Info: "consequat enim diam vel arcu. Curabitur ut odio vel est",
            EmployeeID: 125,
            DateOfJoining: "06/08/2018",
            PhoneNumber: "1696080747099"
          }, {
            Name: "Lewis",
            Age: 48,
            Email: "dictum.eleifend@Proinnislsem.net",
            Street: "2042 Id Street",
            City: "Bastia",
            Zip: "58285",
            Region: "CO",
            Country: "Guadeloupe",
            Info: "ut nisi a odio semper cursus. Integer mollis. Integer tincidunt",
            EmployeeID: 126,
            DateOfJoining: "18/05/2018",
            PhoneNumber: "1681042190699"
          }, {
            Name: "Malik",
            Age: 21,
            Email: "mattis.semper@ultricesposuere.ca",
            Street: "Ap #164-1035 Nisl St.",
            City: "Castelluccio Valmaggiore",
            Zip: "43292",
            Region: "PUG",
            Country: "American Samoa",
            Info: "tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed",
            EmployeeID: 127,
            DateOfJoining: "09/02/2019",
            PhoneNumber: "1607020388399"
          }, {
            Name: "Laurel",
            Age: 31,
            Email: "ornare.placerat.orci@Lorem.co.uk",
            Street: "P.O. Box 285, 2529 Donec Ave",
            City: "Zwolle",
            Zip: "6949 YR",
            Region: "Overijssel",
            Country: "Faroe Islands",
            Info: "porta elit, a feugiat tellus lorem eu metus. In lorem.",
            EmployeeID: 128,
            DateOfJoining: "31/01/2018",
            PhoneNumber: "1655080107399"
          }, {
            Name: "Beverly",
            Age: 20,
            Email: "Nunc.mauris.sapien@ridiculusmus.net",
            Street: "336 Amet Avenue",
            City: "Blois",
            Zip: "2018",
            Region: "CE",
            Country: "Jordan",
            Info: "Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat.",
            EmployeeID: 129,
            DateOfJoining: "04/11/2018",
            PhoneNumber: "1639072308799"
          }, {
            Name: "Jeremy",
            Age: 65,
            Email: "cursus@semconsequatnec.com",
            Street: "P.O. Box 396, 7893 Tempus Ave",
            City: "Etobicoke",
            Zip: "76957",
            Region: "Ontario",
            Country: "Tunisia",
            Info: "Donec est mauris, rhoncus id, mollis nec, cursus a, enim.",
            EmployeeID: 130,
            DateOfJoining: "21/04/2019",
            PhoneNumber: "1659030109999"
          }, {
            Name: "Britanney",
            Age: 23,
            Email: "nisi.dictum@nibh.net",
            Street: "336-9286 Semper Av.",
            City: "Jönköping",
            Zip: "70680",
            Region: "F",
            Country: "Slovenia",
            Info: "non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed",
            EmployeeID: 131,
            DateOfJoining: "14/03/2019",
            PhoneNumber: "1654022385599"
          }, {
            Name: "Rafael",
            Age: 18,
            Email: "Aliquam@vestibulumnec.co.uk",
            Street: "8311 Ante St.",
            City: "Brest",
            Zip: "82310",
            Region: "Bretagne",
            Country: "Belize",
            Info: "varius et, euismod et, commodo at, libero. Morbi accumsan laoreet",
            EmployeeID: 132,
            DateOfJoining: "06/04/2019",
            PhoneNumber: "1647101015499"
          }, {
            Name: "Russell",
            Age: 38,
            Email: "metus.eu.erat@tacitisociosqu.ca",
            Street: "Ap #138-3828 Quam Road",
            City: "Le Petit-Quevilly",
            Zip: "8053",
            Region: "HA",
            Country: "Cuba",
            Info: "Quisque libero lacus, varius et, euismod et, commodo at, libero.",
            EmployeeID: 133,
            DateOfJoining: "07/02/2019",
            PhoneNumber: "1648040503699"
          }, {
            Name: "Igor",
            Age: 30,
            Email: "diam.lorem@a.com",
            Street: "P.O. Box 479, 9098 Molestie St.",
            City: "Chalon-sur-Saône",
            Zip: "99803",
            Region: "Bourgogne",
            Country: "Austria",
            Info: "eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum.",
            EmployeeID: 134,
            DateOfJoining: "26/05/2018",
            PhoneNumber: "1692070373899"
          }, {
            Name: "Unity",
            Age: 41,
            Email: "et.netus@orciinconsequat.edu",
            Street: "2091 Elit Av.",
            City: "Gdynia",
            Zip: "11519",
            Region: "PM",
            Country: "Gibraltar",
            Info: "gravida nunc sed pede. Cum sociis natoque penatibus et magnis",
            EmployeeID: 135,
            DateOfJoining: "16/11/2017",
            PhoneNumber: "1685061667299"
          }, {
            Name: "Zeph",
            Age: 57,
            Email: "eget@vitae.net",
            Street: "P.O. Box 249, 812 Amet Rd.",
            City: "Huntsville",
            Zip: "398053",
            Region: "Alabama",
            Country: "United Arab Emirates",
            Info: "enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida.",
            EmployeeID: 136,
            DateOfJoining: "05/11/2017",
            PhoneNumber: "1601081883799"
          }, {
            Name: "Zenaida",
            Age: 58,
            Email: "ut.eros@utcursusluctus.co.uk",
            Street: "838-8536 Interdum St.",
            City: "Vienna",
            Zip: "21319",
            Region: "Wie",
            Country: "Iran",
            Info: "facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus",
            EmployeeID: 137,
            DateOfJoining: "30/01/2018",
            PhoneNumber: "1622050676299"
          }, {
            Name: "Dominic",
            Age: 52,
            Email: "sodales.purus.in@nuncestmollis.net",
            Street: "9918 Sociis Rd.",
            City: "Ipatinga",
            Zip: "63091",
            Region: "MG",
            Country: "Falkland Islands",
            Info: "augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum.",
            EmployeeID: 138,
            DateOfJoining: "15/10/2018",
            PhoneNumber: "1631062148099"
          }, {
            Name: "Illana",
            Age: 31,
            Email: "auctor.vitae@sit.ca",
            Street: "P.O. Box 655, 5601 Aliquet St.",
            City: "Istanbul",
            Zip: "03514",
            Region: "Istanbul",
            Country: "Mauritania",
            Info: "Quisque libero lacus, varius et, euismod et, commodo at, libero.",
            EmployeeID: 139,
            DateOfJoining: "30/12/2017",
            PhoneNumber: "1614070689899"
          }, {
            Name: "Abra",
            Age: 66,
            Email: "ipsum.cursus.vestibulum@sollicitudin.co.uk",
            Street: "P.O. Box 741, 2747 In Street",
            City: "Czestochowa",
            Zip: "84915",
            Region: "Slaskie",
            Country: "Lebanon",
            Info: "ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet",
            EmployeeID: 140,
            DateOfJoining: "08/07/2018",
            PhoneNumber: "1624042918699"
          }, {
            Name: "Hiram",
            Age: 61,
            Email: "parturient@adlitora.org",
            Street: "816-2206 Lorem St.",
            City: "Ödemis",
            Zip: "541124",
            Region: "Izm",
            Country: "Equatorial Guinea",
            Info: "imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non,",
            EmployeeID: 141,
            DateOfJoining: "13/01/2018",
            PhoneNumber: "1606061911499"
          }, {
            Name: "Nigel",
            Age: 21,
            Email: "vel@idanteNunc.com",
            Street: "Ap #853-4158 Magnis Rd.",
            City: "La Reina",
            Zip: "NY5F 9HL",
            Region: "Metropolitana de Santiago",
            Country: "Tajikistan",
            Info: "magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus",
            EmployeeID: 142,
            DateOfJoining: "15/01/2019",
            PhoneNumber: "1602091283499"
          }, {
            Name: "Sade",
            Age: 38,
            Email: "eu@Nulla.edu",
            Street: "P.O. Box 373, 8595 Quam Rd.",
            City: "Sannazzaro de' Burgondi",
            Zip: "65976",
            Region: "Lombardia",
            Country: "Bangladesh",
            Info: "ante lectus convallis est, vitae sodales nisi magna sed dui.",
            EmployeeID: 143,
            DateOfJoining: "26/11/2018",
            PhoneNumber: "1692041835299"
          }, {
            Name: "Nyssa",
            Age: 23,
            Email: "Suspendisse.tristique.neque@auctor.edu",
            Street: "421-6825 Integer St.",
            City: "Saint-Malo",
            Zip: "3156",
            Region: "BR",
            Country: "French Guiana",
            Info: "a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras",
            EmployeeID: 144,
            DateOfJoining: "07/12/2017",
            PhoneNumber: "1650113088699"
          }, {
            Name: "Emery",
            Age: 50,
            Email: "erat.eget.ipsum@mauris.org",
            Street: "603-9166 Sed Rd.",
            City: "Uddevalla",
            Zip: "00324",
            Region: "Västra Götalands län",
            Country: "Kenya",
            Info: "egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor",
            EmployeeID: 145,
            DateOfJoining: "08/01/2018",
            PhoneNumber: "1659121627299"
          }, {
            Name: "Ella",
            Age: 55,
            Email: "eros.nec@metus.edu",
            Street: "Ap #611-6651 Libero Street",
            City: "Springdale",
            Zip: "732210",
            Region: "Arkansas",
            Country: "Tajikistan",
            Info: "nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet.",
            EmployeeID: 146,
            DateOfJoining: "17/07/2017",
            PhoneNumber: "1647050613599"
          }, {
            Name: "Barry",
            Age: 54,
            Email: "elit.elit@Cras.ca",
            Street: "8035 Massa. Rd.",
            City: "Berlin",
            Zip: "18655-758",
            Region: "Berlin",
            Country: "French Polynesia",
            Info: "libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus",
            EmployeeID: 147,
            DateOfJoining: "02/12/2018",
            PhoneNumber: "1616121146799"
          }, {
            Name: "Amela",
            Age: 21,
            Email: "Mauris.blandit@arcueuodio.ca",
            Street: "2666 Fermentum Rd.",
            City: "Calais",
            Zip: "88448",
            Region: "Nord-Pas-de-Calais",
            Country: "Fiji",
            Info: "et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus",
            EmployeeID: 148,
            DateOfJoining: "23/04/2019",
            PhoneNumber: "1649102280399"
          }, {
            Name: "Mara",
            Age: 30,
            Email: "nec.enim.Nunc@QuisquevariusNam.edu",
            Street: "P.O. Box 638, 4316 Primis Road",
            City: "Motueka",
            Zip: "7156 HJ",
            Region: "SI",
            Country: "Mozambique",
            Info: "dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada",
            EmployeeID: 149,
            DateOfJoining: "01/06/2018",
            PhoneNumber: "1619032787599"
          }, {
            Name: "Freya",
            Age: 47,
            Email: "consectetuer@acliberonec.co.uk",
            Street: "886-8953 Eget Ave",
            City: "Istanbul",
            Zip: "R9W 5S7",
            Region: "Ist",
            Country: "Brazil",
            Info: "iaculis enim, sit amet ornare lectus justo eu arcu. Morbi",
            EmployeeID: 150,
            DateOfJoining: "24/06/2018",
            PhoneNumber: "1671041584999"
          }, {
            Name: "Baxter",
            Age: 37,
            Email: "nec.mollis.vitae@temporbibendum.org",
            Street: "7735 Hendrerit Rd.",
            City: "Istanbul",
            Zip: "2767 NF",
            Region: "Istanbul",
            Country: "Bahamas",
            Info: "nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem",
            EmployeeID: 151,
            DateOfJoining: "17/07/2018",
            PhoneNumber: "1636022151099"
          }, {
            Name: "Gil",
            Age: 61,
            Email: "a.felis@sociisnatoque.com",
            Street: "Ap #482-6850 Sed Road",
            City: "Hudiksvall",
            Zip: "1167",
            Region: "Gävleborgs län",
            Country: "Bosnia and Herzegovina",
            Info: "non enim. Mauris quis turpis vitae purus gravida sagittis. Duis",
            EmployeeID: 152,
            DateOfJoining: "08/10/2017",
            PhoneNumber: "1659112394399"
          }, {
            Name: "Shelby",
            Age: 58,
            Email: "Nulla.tempor@nonenim.edu",
            Street: "P.O. Box 682, 2660 Hendrerit St.",
            City: "Okene",
            Zip: "9679",
            Region: "Kogi",
            Country: "Puerto Rico",
            Info: "Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam",
            EmployeeID: 153,
            DateOfJoining: "10/07/2019",
            PhoneNumber: "1611041572299"
          }, {
            Name: "Jayme",
            Age: 23,
            Email: "lectus.pede@luctus.org",
            Street: "Ap #697-9286 Interdum Ave",
            City: "Curridabat",
            Zip: "26849-941",
            Region: "SJ",
            Country: "Serbia",
            Info: "nec enim. Nunc ut erat. Sed nunc est, mollis non,",
            EmployeeID: 154,
            DateOfJoining: "16/07/2018",
            PhoneNumber: "1687021575399"
          }, {
            Name: "Harper",
            Age: 18,
            Email: "semper.et.lacinia@dolorsit.com",
            Street: "200-2599 Purus. St.",
            City: "Jerez de la Frontera",
            Zip: "21316",
            Region: "AN",
            Country: "Lesotho",
            Info: "nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia",
            EmployeeID: 155,
            DateOfJoining: "14/09/2017",
            PhoneNumber: "1628053043899"
          }, {
            Name: "Wynne",
            Age: 31,
            Email: "non.egestas@pharetra.co.uk",
            Street: "224-3404 Aliquam St.",
            City: "Ockelbo",
            Zip: "Y7G 5L0",
            Region: "Gävleborgs län",
            Country: "Nicaragua",
            Info: "dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit",
            EmployeeID: 156,
            DateOfJoining: "20/02/2019",
            PhoneNumber: "1681091203699"
          }, {
            Name: "Paula",
            Age: 42,
            Email: "ultrices.posuere.cubilia@lorem.net",
            Street: "Ap #603-8371 Morbi Rd.",
            City: "Sioux City",
            Zip: "1632 HB",
            Region: "Iowa",
            Country: "United States Minor Outlying Islands",
            Info: "leo elementum sem, vitae aliquam eros turpis non enim. Mauris",
            EmployeeID: 157,
            DateOfJoining: "03/02/2019",
            PhoneNumber: "1684022204799"
          }, {
            Name: "Nola",
            Age: 65,
            Email: "quis.tristique.ac@orciUtsemper.org",
            Street: "100-5819 Consectetuer Ave",
            City: "Crotta d'Adda",
            Zip: "227519",
            Region: "LOM",
            Country: "Antarctica",
            Info: "augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna",
            EmployeeID: 158,
            DateOfJoining: "22/10/2018",
            PhoneNumber: "1603120797899"
          }, {
            Name: "Oren",
            Age: 52,
            Email: "nunc.ullamcorper.eu@luctussitamet.ca",
            Street: "2110 Orci Street",
            City: "Santa Luzia",
            Zip: "A60 8ES",
            Region: "Minas Gerais",
            Country: "Zimbabwe",
            Info: "feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam",
            EmployeeID: 159,
            DateOfJoining: "20/04/2018",
            PhoneNumber: "1650110126199"
          }, {
            Name: "Orlando",
            Age: 34,
            Email: "ac.fermentum@idsapien.com",
            Street: "P.O. Box 415, 4139 Gravida St.",
            City: "La Granja",
            Zip: "K8R 0R9",
            Region: "RM",
            Country: "Burundi",
            Info: "malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis",
            EmployeeID: 160,
            DateOfJoining: "28/01/2018",
            PhoneNumber: "1696051805199"
          }, {
            Name: "Amal",
            Age: 68,
            Email: "tincidunt@sedpede.com",
            Street: "P.O. Box 196, 6981 Scelerisque Ave",
            City: "Istanbul",
            Zip: "300655",
            Region: "Istanbul",
            Country: "Aruba",
            Info: "ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius",
            EmployeeID: 161,
            DateOfJoining: "08/03/2019",
            PhoneNumber: "1602032514799"
          }, {
            Name: "Destiny",
            Age: 30,
            Email: "auctor@maurisid.edu",
            Street: "Ap #570-8111 Phasellus Rd.",
            City: "Quinta Normal",
            Zip: "U82 2MT",
            Region: "RM",
            Country: "Fiji",
            Info: "massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede",
            EmployeeID: 162,
            DateOfJoining: "10/07/2019",
            PhoneNumber: "1627081743099"
          }, {
            Name: "Allen",
            Age: 37,
            Email: "elementum@Nullamvitae.ca",
            Street: "868-249 Fringilla Street",
            City: "Gisborne",
            Zip: "4613",
            Region: "NI",
            Country: "Spain",
            Info: "id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend",
            EmployeeID: 163,
            DateOfJoining: "12/11/2017",
            PhoneNumber: "1682010870299"
          }, {
            Name: "Daniel",
            Age: 65,
            Email: "Cum@Crasvehiculaaliquet.net",
            Street: "P.O. Box 277, 3263 Morbi Avenue",
            City: "Orilla",
            Zip: "U8 6LO",
            Region: "Ontario",
            Country: "Mali",
            Info: "urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum",
            EmployeeID: 164,
            DateOfJoining: "13/08/2018",
            PhoneNumber: "1612070886099"
          }, {
            Name: "Audra",
            Age: 35,
            Email: "Donec@atsem.edu",
            Street: "978-6468 Vulputate St.",
            City: "Vänersborg",
            Zip: "2111",
            Region: "O",
            Country: "Burundi",
            Info: "Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper",
            EmployeeID: 165,
            DateOfJoining: "03/09/2017",
            PhoneNumber: "1615072473799"
          }, {
            Name: "Doris",
            Age: 29,
            Email: "pede.Cras@augueeutellus.org",
            Street: "P.O. Box 127, 4423 Orci Road",
            City: "Tarbes",
            Zip: "1053 NQ",
            Region: "Midi-Pyrénées",
            Country: "San Marino",
            Info: "risus. In mi pede, nonummy ut, molestie in, tempus eu,",
            EmployeeID: 166,
            DateOfJoining: "27/10/2018",
            PhoneNumber: "1663021282699"
          }, {
            Name: "Yeo",
            Age: 30,
            Email: "aliquam.eros.turpis@sociosqu.com",
            Street: "Ap #551-7713 Pellentesque Ave",
            City: "Jhansi",
            Zip: "4823 QC",
            Region: "UP",
            Country: "Ethiopia",
            Info: "Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla",
            EmployeeID: 167,
            DateOfJoining: "11/10/2017",
            PhoneNumber: "1672100610599"
          }, {
            Name: "Connor",
            Age: 31,
            Email: "sagittis@etmagnaPraesent.co.uk",
            Street: "Ap #855-5020 Faucibus Av.",
            City: "Ghaziabad",
            Zip: "18997",
            Region: "UP",
            Country: "Lithuania",
            Info: "Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy",
            EmployeeID: 168,
            DateOfJoining: "29/04/2019",
            PhoneNumber: "1634021051899"
          }, {
            Name: "Tyrone",
            Age: 47,
            Email: "urna.Nunc@dictumultriciesligula.com",
            Street: "2256 Nascetur Rd.",
            City: "Santa Rita",
            Zip: "81928",
            Region: "PB",
            Country: "Palau",
            Info: "mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec",
            EmployeeID: 169,
            DateOfJoining: "26/12/2018",
            PhoneNumber: "1681122005799"
          }, {
            Name: "Desiree",
            Age: 24,
            Email: "rutrum@utmolestiein.ca",
            Street: "9365 Urna Road",
            City: "Alcalá de Henares",
            Zip: "60417",
            Region: "MA",
            Country: "Cameroon",
            Info: "nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo",
            EmployeeID: 170,
            DateOfJoining: "23/02/2019",
            PhoneNumber: "1683111437299"
          }, {
            Name: "James",
            Age: 22,
            Email: "nonummy.ut@magnaUt.com",
            Street: "126-6220 Dis Rd.",
            City: "Sylvan Lake",
            Zip: "40317",
            Region: "AB",
            Country: "Cyprus",
            Info: "at arcu. Vestibulum ante ipsum primis in faucibus orci luctus",
            EmployeeID: 171,
            DateOfJoining: "02/11/2018",
            PhoneNumber: "1646060868399"
          }, {
            Name: "Gisela",
            Age: 21,
            Email: "Duis.at@ut.com",
            Street: "9538 Malesuada St.",
            City: "Deschambault",
            Zip: "2436",
            Region: "Quebec",
            Country: "Madagascar",
            Info: "est arcu ac orci. Ut semper pretium neque. Morbi quis",
            EmployeeID: 172,
            DateOfJoining: "06/11/2017",
            PhoneNumber: "1695120843799"
          }, {
            Name: "Kylynn",
            Age: 27,
            Email: "Aenean.eget.metus@Fusce.ca",
            Street: "9301 Pede Rd.",
            City: "Gambolò",
            Zip: "38370",
            Region: "Lombardia",
            Country: "Bangladesh",
            Info: "Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue",
            EmployeeID: 173,
            DateOfJoining: "04/03/2018",
            PhoneNumber: "1638090338699"
          }, {
            Name: "Armand",
            Age: 28,
            Email: "Aliquam.erat.volutpat@noncursus.edu",
            Street: "P.O. Box 552, 8294 Tellus Rd.",
            City: "Naperville",
            Zip: "R2 2HE",
            Region: "IL",
            Country: "Bahamas",
            Info: "sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris",
            EmployeeID: 174,
            DateOfJoining: "09/12/2018",
            PhoneNumber: "1624061897099"
          }, {
            Name: "Price",
            Age: 30,
            Email: "hendrerit.Donec.porttitor@purusactellus.co.uk",
            Street: "6991 Pharetra, Rd.",
            City: "Cajazeiras",
            Zip: "2701",
            Region: "Paraíba",
            Country: "Micronesia",
            Info: "sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing",
            EmployeeID: 175,
            DateOfJoining: "28/09/2017",
            PhoneNumber: "1642051506699"
          }, {
            Name: "Merritt",
            Age: 54,
            Email: "eu.ultrices@sed.org",
            Street: "915-7055 Vel, Rd.",
            City: "Cabo de Santo Agostinho",
            Zip: "710969",
            Region: "Pernambuco",
            Country: "Macao",
            Info: "consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem,",
            EmployeeID: 176,
            DateOfJoining: "08/12/2017",
            PhoneNumber: "1606081276799"
          }, {
            Name: "Keane",
            Age: 36,
            Email: "Vivamus@elitNulla.com",
            Street: "Ap #554-7175 Ornare, Rd.",
            City: "Longvilly",
            Zip: "74022",
            Region: "LX",
            Country: "Oman",
            Info: "lectus pede et risus. Quisque libero lacus, varius et, euismod",
            EmployeeID: 177,
            DateOfJoining: "31/10/2017",
            PhoneNumber: "1631042588199"
          }, {
            Name: "Keegan",
            Age: 56,
            Email: "vel@maurisSuspendissealiquet.co.uk",
            Street: "P.O. Box 296, 1648 Morbi Street",
            City: "Santo Stefano del Sole",
            Zip: "502881",
            Region: "Campania",
            Country: "United Kingdom (Great Britain)",
            Info: "arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida",
            EmployeeID: 178,
            DateOfJoining: "17/08/2017",
            PhoneNumber: "1654021189499"
          }, {
            Name: "Abdul",
            Age: 52,
            Email: "a@Cumsociis.co.uk",
            Street: "Ap #323-8261 Fusce Ave",
            City: "Heusden",
            Zip: "77716",
            Region: "Oost-Vlaanderen",
            Country: "Marshall Islands",
            Info: "mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent",
            EmployeeID: 179,
            DateOfJoining: "13/06/2019",
            PhoneNumber: "1654052431599"
          }, {
            Name: "Evangeline",
            Age: 53,
            Email: "Aenean@urna.net",
            Street: "Ap #590-7536 Augue Street",
            City: "Palma de Mallorca",
            Zip: "24331-999",
            Region: "Illes Balears",
            Country: "El Salvador",
            Info: "Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat",
            EmployeeID: 180,
            DateOfJoining: "27/01/2019",
            PhoneNumber: "1696020804099"
          }, {
            Name: "Kirsten",
            Age: 55,
            Email: "Vivamus.non@Praesent.com",
            Street: "Ap #226-2212 Magna St.",
            City: "Gävle",
            Zip: "14409",
            Region: "Gävleborgs län",
            Country: "Cayman Islands",
            Info: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames",
            EmployeeID: 181,
            DateOfJoining: "26/07/2017",
            PhoneNumber: "1664031480899"
          }, {
            Name: "Erich",
            Age: 26,
            Email: "augue.eu@odioNam.org",
            Street: "Ap #701-9770 Et St.",
            City: "Katowice",
            Zip: "31008",
            Region: "Slaskie",
            Country: "Libya",
            Info: "Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum.",
            EmployeeID: 182,
            DateOfJoining: "29/05/2018",
            PhoneNumber: "1625100885599"
          }, {
            Name: "Talon",
            Age: 41,
            Email: "consequat.enim.diam@nuncsitamet.edu",
            Street: "P.O. Box 930, 4617 Ipsum St.",
            City: "Neder-Over-Heembeek",
            Zip: "S9L 7EY",
            Region: "Brussels Hoofdstedelijk Gewest",
            Country: "Peru",
            Info: "magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl.",
            EmployeeID: 183,
            DateOfJoining: "22/06/2019",
            PhoneNumber: "1657071534499"
          }, {
            Name: "Shea",
            Age: 39,
            Email: "egestas.rhoncus@odiovel.net",
            Street: "267-7888 Scelerisque St.",
            City: "Trollhättan",
            Zip: "501600",
            Region: "Västra Götalands län",
            Country: "Viet Nam",
            Info: "purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula",
            EmployeeID: 184,
            DateOfJoining: "24/08/2017",
            PhoneNumber: "1653112128199"
          }, {
            Name: "Avram",
            Age: 57,
            Email: "in.hendrerit.consectetuer@netusetmalesuada.org",
            Street: "6644 Sed Ave",
            City: "San Pablo",
            Zip: "22211",
            Region: "H",
            Country: "Venezuela",
            Info: "libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis",
            EmployeeID: 185,
            DateOfJoining: "16/07/2018",
            PhoneNumber: "1622070169199"
          }, {
            Name: "Ivor",
            Age: 21,
            Email: "sem.ut.cursus@sociisnatoquepenatibus.ca",
            Street: "P.O. Box 112, 6561 Volutpat. St.",
            City: "Guirsch",
            Zip: "80321",
            Region: "LX",
            Country: "Japan",
            Info: "massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero.",
            EmployeeID: 186,
            DateOfJoining: "26/07/2018",
            PhoneNumber: "1610112842499"
          }, {
            Name: "Audrey",
            Age: 32,
            Email: "porttitor.tellus.non@vitae.edu",
            Street: "186 Enim. St.",
            City: "Minneapolis",
            Zip: "08940",
            Region: "Minnesota",
            Country: "New Zealand",
            Info: "nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas.",
            EmployeeID: 187,
            DateOfJoining: "16/05/2018",
            PhoneNumber: "1699071680599"
          }, {
            Name: "Merritt",
            Age: 65,
            Email: "magna@CuraeDonectincidunt.com",
            Street: "Ap #524-4980 Eget Rd.",
            City: "Sandy",
            Zip: "76395",
            Region: "UT",
            Country: "Kenya",
            Info: "malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas,",
            EmployeeID: 188,
            DateOfJoining: "05/08/2018",
            PhoneNumber: "1626030339499"
          }, {
            Name: "Jonas",
            Age: 60,
            Email: "interdum.Curabitur@laoreet.edu",
            Street: "455-1121 Orci. Road",
            City: "Kizilcahamam",
            Zip: "3074",
            Region: "Ank",
            Country: "Bahamas",
            Info: "lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus",
            EmployeeID: 189,
            DateOfJoining: "04/04/2018",
            PhoneNumber: "1604120243099"
          }, {
            Name: "Indigo",
            Age: 59,
            Email: "amet.consectetuer.adipiscing@ligulaNullam.net",
            Street: "Ap #496-8002 Fusce St.",
            City: "North Cowichan",
            Zip: "22-852",
            Region: "British Columbia",
            Country: "Nauru",
            Info: "Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent",
            EmployeeID: 190,
            DateOfJoining: "14/09/2018",
            PhoneNumber: "1654040137699"
          }, {
            Name: "Regan",
            Age: 35,
            Email: "erat.vitae.risus@nonlaciniaat.co.uk",
            Street: "9535 Pede, Av.",
            City: "Berlin",
            Zip: "8669",
            Region: "Berlin",
            Country: "Mauritius",
            Info: "arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor",
            EmployeeID: 191,
            DateOfJoining: "12/11/2018",
            PhoneNumber: "1669062420399"
          }, {
            Name: "Magee",
            Age: 29,
            Email: "mollis.dui@porttitoreros.co.uk",
            Street: "P.O. Box 620, 131 Posuere Ave",
            City: "Vienna",
            Zip: "871012",
            Region: "Vienna",
            Country: "Saint Martin",
            Info: "auctor odio a purus. Duis elementum, dui quis accumsan convallis,",
            EmployeeID: 192,
            DateOfJoining: "24/11/2018",
            PhoneNumber: "1602122112199"
          }, {
            Name: "Kato",
            Age: 37,
            Email: "nec@velvulputateeu.edu",
            Street: "P.O. Box 410, 390 Quis Rd.",
            City: "Shreveport",
            Zip: "45122",
            Region: "LA",
            Country: "Portugal",
            Info: "aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis",
            EmployeeID: 193,
            DateOfJoining: "08/09/2018",
            PhoneNumber: "1639061302599"
          }, {
            Name: "Edan",
            Age: 30,
            Email: "non@Integervitae.org",
            Street: "Ap #688-4818 Eget, Rd.",
            City: "Newark",
            Zip: "3651 ON",
            Region: "Delaware",
            Country: "China",
            Info: "id risus quis diam luctus lobortis. Class aptent taciti sociosqu",
            EmployeeID: 194,
            DateOfJoining: "17/07/2017",
            PhoneNumber: "1683112483099"
          }, {
            Name: "Serina",
            Age: 65,
            Email: "natoque.penatibus.et@Inmi.net",
            Street: "Ap #128-9886 Urna, St.",
            City: "Wortel",
            Zip: "60006-095",
            Region: "Antwerpen",
            Country: "Iran",
            Info: "elit, a feugiat tellus lorem eu metus. In lorem. Donec",
            EmployeeID: 195,
            DateOfJoining: "10/02/2019",
            PhoneNumber: "1638022940699"
          }, {
            Name: "Colorado",
            Age: 40,
            Email: "magna.tellus@faucibuslectus.net",
            Street: "P.O. Box 462, 1193 Mi Street",
            City: "Vancouver",
            Zip: "7671",
            Region: "Washington",
            Country: "Somalia",
            Info: "tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet,",
            EmployeeID: 196,
            DateOfJoining: "19/05/2019",
            PhoneNumber: "1604070382899"
          }, {
            Name: "Jerry",
            Age: 34,
            Email: "arcu@dapibusrutrumjusto.com",
            Street: "P.O. Box 587, 3263 Cursus St.",
            City: "Newmarket",
            Zip: "170098",
            Region: "Ontario",
            Country: "El Salvador",
            Info: "pede. Cum sociis natoque penatibus et magnis dis parturient montes,",
            EmployeeID: 197,
            DateOfJoining: "23/07/2017",
            PhoneNumber: "1695090522699"
          }, {
            Name: "Ainsley",
            Age: 29,
            Email: "sed.libero@adipiscing.edu",
            Street: "9682 Tincidunt Road",
            City: "Vienna",
            Zip: "78557",
            Region: "Wie",
            Country: "France",
            Info: "volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean",
            EmployeeID: 198,
            DateOfJoining: "31/03/2019",
            PhoneNumber: "1661111267399"
          }, {
            Name: "Samson",
            Age: 60,
            Email: "consequat.enim@feugiat.ca",
            Street: "9712 Adipiscing Rd.",
            City: "Ambleside",
            Zip: "4788",
            Region: "WE",
            Country: "Gibraltar",
            Info: "mauris a nunc. In at pede. Cras vulputate velit eu",
            EmployeeID: 199,
            DateOfJoining: "09/10/2018",
            PhoneNumber: "1677012674299"
          }, {
            Name: "Ulric",
            Age: 43,
            Email: "sociis.natoque.penatibus@eleifendCras.com",
            Street: "Ap #122-8677 Magnis Street",
            City: "Salt Lake City",
            Zip: "546895",
            Region: "Utah",
            Country: "Korea, North",
            Info: "Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci,",
            EmployeeID: 200,
            DateOfJoining: "27/04/2018",
            PhoneNumber: "1615062568299"
          }];
          this.selectedEmployee = 0;
        }

        _createClass(EmployeeService, [{
          key: "getAllEmployee",
          value: function getAllEmployee() {
            return this.employeelist;
          }
        }, {
          key: "getSelectedEmployee",
          value: function getSelectedEmployee() {
            return this.employeelist[this.selectedEmployee];
          }
        }]);

        return EmployeeService;
      }();

      EmployeeService.ɵfac = function EmployeeService_Factory(t) {
        return new (t || EmployeeService)();
      };

      EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EmployeeService,
        factory: EmployeeService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      "hN/g");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherwise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map