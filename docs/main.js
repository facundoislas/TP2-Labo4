(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-cabecera>  </app-cabecera>\n\n<router-outlet></router-outlet>\n  \n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/listado-de-resultados/listado-de-resultados.component */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./servicios/mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");
/* harmony import */ var _servicios_paises_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./servicios/paises.service */ "./src/app/servicios/paises.service.ts");
/* harmony import */ var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./servicios/jugadores.service */ "./src/app/servicios/jugadores.service.ts");
/* harmony import */ var _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./servicios/archivos-jugadores.service */ "./src/app/servicios/archivos-jugadores.service.ts");
/* harmony import */ var _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/error/error.component */ "./src/app/componentes/error/error.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/menu/menu.component */ "./src/app/componentes/menu/menu.component.ts");
/* harmony import */ var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/adivina-mas-listado/adivina-mas-listado.component */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/agilidad-mas-listado/agilidad-mas-listado.component */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ruteando/ruteando.module */ "./src/app/ruteando/ruteando.module.ts");
/* harmony import */ var _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componentes/listado/listado.component */ "./src/app/componentes/listado/listado.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./componentes/jugadores-listado/jugadores-listado.component */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./servicios/juego-service.service */ "./src/app/servicios/juego-service.service.ts");
/* harmony import */ var _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./componentes/listados/listados.component */ "./src/app/componentes/listados/listados.component.ts");
/* harmony import */ var _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./componentes/juegos/juegos.component */ "./src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./componentes/cabecera/cabecera.component */ "./src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./componentes/anagrama/anagrama.component */ "./src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./componentes/listado-de-paises/listado-de-paises.component */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./componentes/mapa-de-google/mapa-de-google.component */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./componentes/input-jugadores/input-jugadores.component */ "./src/app/componentes/input-jugadores/input-jugadores.component.ts");
/* harmony import */ var _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pipes/sexo.pipe */ "./src/app/pipes/sexo.pipe.ts");
/* harmony import */ var _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./componentes/home/home.component */ "./src/app/componentes/home/home.component.ts");
/* harmony import */ var _componentes_menu_principal_menu_principal_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./componentes/menu-principal/menu-principal.component */ "./src/app/componentes/menu-principal/menu-principal.component.ts");
/* harmony import */ var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./componentes/footer/footer.component */ "./src/app/componentes/footer/footer.component.ts");
/* harmony import */ var _componentes_adivina_provincia_adivina_provincia_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./componentes/adivina-provincia/adivina-provincia.component */ "./src/app/componentes/adivina-provincia/adivina-provincia.component.ts");
/* harmony import */ var _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./componentes/piedra-papel-tijera/piedra-papel-tijera.component */ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./componentes/tateti/tateti.component */ "./src/app/componentes/tateti/tateti.component.ts");








//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


















// declaro donde quiero que se dirija
/*
const MiRuteo = [{path: 'error' , component: ErrorComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
{path: 'Adivina' , component: AdivinaElNumeroComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: '' , component: LoginComponent , pathMatch: 'full'},

{path: '**' , component: ErrorComponent} ];
*/




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_5__["AdivinaElNumeroComponent"],
                _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_6__["ListadoDeResultadosComponent"],
                _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"],
                _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_14__["PrincipalComponent"],
                _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_15__["AgilidadAritmeticaComponent"],
                _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"],
                _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__["AdivinaMasListadoComponent"],
                _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_18__["AgilidadMasListadoComponent"],
                _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_20__["ListadoComponent"],
                _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_28__["ListadosComponent"],
                _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_29__["JuegosComponent"],
                _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_30__["RegistroComponent"],
                _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_31__["MenuCardComponent"],
                _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_32__["CabeceraComponent"],
                _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_33__["QuienSoyComponent"],
                _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_34__["AnagramaComponent"],
                _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_35__["ListadoDePaisesComponent"],
                _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_36__["MapaDeGoogleComponent"],
                _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_26__["JugadoresListadoComponent"],
                _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_38__["InputJugadoresComponent"],
                _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_39__["SexoPipe"],
                _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_40__["HomeComponent"],
                _componentes_menu_principal_menu_principal_component__WEBPACK_IMPORTED_MODULE_41__["MenuPrincipalComponent"],
                _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_42__["FooterComponent"],
                _componentes_adivina_provincia_adivina_provincia_component__WEBPACK_IMPORTED_MODULE_43__["AdivinaProvinciaComponent"],
                _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_44__["PiedraPapelTijeraComponent"],
                _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_45__["TatetiComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_19__["RuteandoModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_37__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
                }),
                angularfire2__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_22__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_23__["AngularFireAuthModule"]
                // NgbModule.forRoot(MiRuteo),
                // importo el ruteo
                // RouterModule.forRoot(MiRuteo)
            ],
            providers: [_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_27__["JuegoServiceService"], _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_9__["MiHttpService"], _servicios_paises_service__WEBPACK_IMPORTED_MODULE_10__["PaisesService"], _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_12__["ArchivosJugadoresService"], _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_11__["JugadoresService"],
                _app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clases/juego-adivina-provincia.ts":
/*!***************************************************!*\
  !*** ./src/app/clases/juego-adivina-provincia.ts ***!
  \***************************************************/
/*! exports provided: JuegoAdivinaProvincia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAdivinaProvincia", function() { return JuegoAdivinaProvincia; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");


var JuegoAdivinaProvincia = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JuegoAdivinaProvincia, _super);
    function JuegoAdivinaProvincia(nombre, gano, jugador, intentos, resultado) {
        var _this = _super.call(this, nombre, gano, jugador, intentos, resultado) || this;
        _this.arrayProvicias = [
            {
                path: "bariloche.jpg",
                opciones: ["Santa Cruz", "Río Negro", "La Pampa", "Chubut"],
                opcionCorrecta: "Río Negro"
            },
            {
                path: "casa_tucuman.jpg",
                opciones: ["Tucumán", "Buenos Aires", "Santiago del Estero", "La Rioja"],
                opcionCorrecta: "Tucumán"
            },
            {
                path: "cataratas-iguazu.jpg",
                opciones: ["Formosa", "Chaco", "Entre Rios", "Misiones"],
                opcionCorrecta: "Misiones"
            },
            {
                path: "cerro-7-colores.jpg",
                opciones: ["Salta", "Jujuy", "San Luis", "Corrientes"],
                opcionCorrecta: "Jujuy"
            },
            {
                path: "chubut.jpg",
                opciones: ["Santa Cruz", "Chubut", "Tierra del Fuego", "Neuquén"],
                opcionCorrecta: "Chubut"
            },
            {
                path: "glaciar_moreno.JPG",
                opciones: ["Mendoza", "Neuquén", "Santa Cruz", "Río Negro"],
                opcionCorrecta: "Santa Cruz"
            },
            {
                path: "mendoza.jpg",
                opciones: ["Mendoza", "San Juan", "Santa Fe", "Catamarca"],
                opcionCorrecta: "Mendoza"
            },
            {
                path: "monumento_bandera.jpg",
                opciones: ["Buenos Aires", "Santa Fe", "Santiago del Estero", "Formosa"],
                opcionCorrecta: "Santa Fe"
            },
            {
                path: "obelisco.jpg",
                opciones: ["La Pampa", "Entre Rios", "Buenos Aires", "Córdoba"],
                opcionCorrecta: "Buenos Aires"
            },
            {
                path: "reloj_cucu.jpg",
                opciones: ["Córdoba", "San Juan", "Corrientes", "Río Negro"],
                opcionCorrecta: "Córdoba"
            },
            {
                path: "salta.jpg",
                opciones: ["JuJuy", "Misiones", "Catamarca", "Salta"],
                opcionCorrecta: "Salta"
            },
            {
                path: "tierra_del_fuego.jpg",
                opciones: ["Tierra del Fuego", "Chubut", "Santa Cruz", "Mendoza"],
                opcionCorrecta: "Tierra del Fuego"
            }
        ];
        _this.nombre = "Adivina la provincia";
        return _this;
    }
    JuegoAdivinaProvincia.prototype.verificar = function () {
        if (this.opcionCorrecta == this.opcionIngresada) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    JuegoAdivinaProvincia.prototype.generar = function () {
        console.log(this.arrayProvicias);
        var index = Math.floor((Math.random() * 11) + 0);
        this.elementoAdivinar = this.arrayProvicias[index];
        this.opcionCorrecta = this.elementoAdivinar["opcionCorrecta"];
        this.opcionesMostradas = this.elementoAdivinar["opciones"];
        console.log(this.elementoAdivinar);
        console.log(this.elementoAdivinar["path"]);
        console.log(this.opcionesMostradas);
    };
    return JuegoAdivinaProvincia;
}(_clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"]));



/***/ }),

/***/ "./src/app/clases/juego-adivina.ts":
/*!*****************************************!*\
  !*** ./src/app/clases/juego-adivina.ts ***!
  \*****************************************/
/*! exports provided: JuegoAdivina */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAdivina", function() { return JuegoAdivina; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");


var JuegoAdivina = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JuegoAdivina, _super);
    function JuegoAdivina(nombre, gano, jugador, intentos, resultado) {
        var _this = _super.call(this, nombre, gano, jugador, intentos, resultado) || this;
        _this.numeroSecreto = 0;
        _this.numeroIngresado = null;
        _this.nombre = "Adivina el numero";
        return _this;
    }
    JuegoAdivina.prototype.verificar = function () {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    JuegoAdivina.prototype.generarnumero = function () {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    };
    JuegoAdivina.prototype.retornarAyuda = function () {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    };
    return JuegoAdivina;
}(_clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"]));



/***/ }),

/***/ "./src/app/clases/juego-agilidad.ts":
/*!******************************************!*\
  !*** ./src/app/clases/juego-agilidad.ts ***!
  \******************************************/
/*! exports provided: JuegoAgilidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAgilidad", function() { return JuegoAgilidad; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");


var JuegoAgilidad = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JuegoAgilidad, _super);
    function JuegoAgilidad(nombre, gano, jugador, intentos, resultado) {
        return _super.call(this, "Agilidad Aritmetica", gano, jugador, intentos, resultado) || this;
    }
    JuegoAgilidad.prototype.generar = function () {
        this.primerNumero = Math.round(Math.random() * 10);
        this.segundoNumero = Math.round(Math.random() * 10);
        var numOperador = Math.round(Math.random() * 3);
        switch (numOperador) {
            case 0:
                this.operador = "+";
                this.resultado = this.primerNumero + this.segundoNumero;
                break;
            case 1:
                this.operador = "-";
                this.resultado = this.primerNumero - this.segundoNumero;
                break;
            case 2:
                this.operador = "*";
                this.resultado = this.primerNumero * this.segundoNumero;
                break;
            case 3:
                this.operador = "/";
                if (this.segundoNumero != 0)
                    this.resultado = this.primerNumero / this.segundoNumero;
                break;
        }
    };
    JuegoAgilidad.prototype.verificar = function () {
        if (this.resultado == this.resultadoUsuario) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    return JuegoAgilidad;
}(_clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"]));



/***/ }),

/***/ "./src/app/clases/juego-anagrama.ts":
/*!******************************************!*\
  !*** ./src/app/clases/juego-anagrama.ts ***!
  \******************************************/
/*! exports provided: JuegoAnagrama */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAnagrama", function() { return JuegoAnagrama; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");


var JuegoAnagrama = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JuegoAnagrama, _super);
    function JuegoAnagrama(nombre, gano, jugador, intentos, resultado) {
        var _this = _super.call(this, nombre, gano, jugador, intentos, resultado) || this;
        _this.arrayDePalabras = [
            { ordenada: "Saco", desordenada: "Cosa" },
            { ordenada: "Alicante", desordenada: "Caliente" },
            { ordenada: "Frase", desordenada: "Fresa" },
            { ordenada: "Amor", desordenada: "Roma" },
            { ordenada: "Delira", desordenada: "Lidera" },
            { ordenada: "Pedro", desordenada: "Poder" },
            { ordenada: "Resto", desordenada: "Retos" },
            { ordenada: "Trata", desordenada: "Tarta" },
            { ordenada: "Toro", desordenada: "Roto" },
            { ordenada: "Cronista", desordenada: "Cortinas" },
            { ordenada: "Eva", desordenada: "Ave" }
        ];
        _this.nombre = "Anagrama";
        return _this;
    }
    JuegoAnagrama.prototype.asignarPalabra = function () {
        var indice;
        indice = Math.floor(Math.random() * this.arrayDePalabras.length);
        console.log(this.arrayDePalabras[indice]["ordenada"]);
        this.palabraDesordenada = this.arrayDePalabras[indice]["desordenada"];
        this.palabraOrdenada = this.arrayDePalabras[indice]["ordenada"];
    };
    JuegoAnagrama.prototype.verificar = function () {
        if (this.palabraIngresada.toLowerCase() == this.palabraOrdenada.toLowerCase()) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
        return false;
    };
    return JuegoAnagrama;
}(_clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"]));



/***/ }),

/***/ "./src/app/clases/juego-piedra-papel-tijera.ts":
/*!*****************************************************!*\
  !*** ./src/app/clases/juego-piedra-papel-tijera.ts ***!
  \*****************************************************/
/*! exports provided: JuegoPiedraPapelTijera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoPiedraPapelTijera", function() { return JuegoPiedraPapelTijera; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");


var JuegoPiedraPapelTijera = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JuegoPiedraPapelTijera, _super);
    function JuegoPiedraPapelTijera(nombre, gano, jugador, intentos, resultado) {
        var _this = _super.call(this, nombre, gano, jugador, intentos, resultado) || this;
        _this.resultado = null;
        _this.opcionMaquina = null;
        _this.nombre = "Piedra, Papel o Tijera";
        return _this;
    }
    JuegoPiedraPapelTijera.prototype.verificar = function () {
        return this.gana;
    };
    JuegoPiedraPapelTijera.prototype.eleccionMaquina = function () {
        this.opcionMaquina = Math.floor(Math.random() * 3) + 1;
        console.log("Esto es la opcion elegida " + this.opcionMaquina);
        var respuesta;
        switch (this.opcionMaquina) {
            case 1:
                respuesta = "Piedra";
                break;
            case 2:
                respuesta = "Papel";
                break;
            case 3:
                respuesta = "Tijera";
                break;
        }
        this.compu = respuesta;
        return respuesta;
    };
    JuegoPiedraPapelTijera.prototype.Jugar = function (opcionUsuario) {
        var maquina = this.eleccionMaquina();
        switch (opcionUsuario) {
            case "Piedra":
                if (maquina == "Papel") {
                    this.resultado = "Perdiste, la piedra es envuelta por el papel";
                    this.gana = false;
                }
                if (maquina == "Tijera") {
                    this.resultado = "Ganaste, la piedra Rompe la Tijera";
                    this.gana = true;
                }
                if (maquina == "Piedra")
                    this.resultado = "Empataron, ambos eligieron la Piedra";
                this.gana = false;
                break;
            case "Papel":
                if (maquina == "Tijera") {
                    this.resultado = "Perdiste, la tijera corta el papel";
                    this.gana = false;
                }
                if (maquina == "Piedra") {
                    this.resultado = "Ganaste, el papel envuelve la Piedra";
                    this.gana = true;
                }
                if (maquina == "Papel") {
                    this.resultado = "Empataron, ambos eligieron Papel";
                    this.gana = false;
                }
                break;
            case "Tijera":
                if (maquina == "Piedra") {
                    this.resultado = "Perdiste, la piedra rompe la tijera";
                    this.gana = false;
                }
                if (maquina == "papel") {
                    this.resultado = "Ganaste, la tijera corta el papel";
                    this.gana = true;
                }
                if (maquina == "Tijera") {
                    this.resultado = "Empataron, ambos eligieron la tijera";
                    this.gana = false;
                }
                break;
        }
        this.gano = this.gana;
        return this.resultado;
    };
    return JuegoPiedraPapelTijera;
}(_clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"]));



/***/ }),

/***/ "./src/app/clases/juego.ts":
/*!*********************************!*\
  !*** ./src/app/clases/juego.ts ***!
  \*********************************/
/*! exports provided: Juego */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Juego", function() { return Juego; });
var Juego = /** @class */ (function () {
    function Juego(nombre, gano, jugador, intentos, resultado) {
        this.nombre = '';
        this.gano = false;
        if (nombre) {
            /*this.nombre = nombre;
      
          if (gano)
            this.gano = gano;
          if(jugador)
            this.jugador=jugador;
          else
            this.jugador= "natalia natalia";*/
            this.gano = gano;
            this.jugador = jugador;
            this.intentos = intentos;
            this.resultado = resultado;
        }
    }
    Juego.prototype.guardarLocal = function () {
        var idstring = localStorage.getItem("Id");
        console.log(idstring);
        if (idstring == null) {
            this.id = 1;
            localStorage.setItem("Id", "1");
        }
        else {
            this.id = +idstring;
            this.id = this.id + 1;
            localStorage.setItem("Id", this.id.toString());
        }
        var x = { "nombre": this.nombre,
            "jugador": this.jugador,
            "resultado": this.gano,
            "intentos": this.intentos
        };
        localStorage.setItem("partida " + this.id, JSON.stringify(x));
        console.log(localStorage.getItem("Id"));
    };
    Juego.prototype.retornarAyuda = function () {
        return "NO hay Ayuda definida";
    };
    return Juego;
}());



/***/ }),

/***/ "./src/app/clases/jugador.ts":
/*!***********************************!*\
  !*** ./src/app/clases/jugador.ts ***!
  \***********************************/
/*! exports provided: Jugador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jugador", function() { return Jugador; });
var Jugador = /** @class */ (function () {
    function Jugador() {
    }
    return Jugador;
}());



/***/ }),

/***/ "./src/app/clases/tateti.ts":
/*!**********************************!*\
  !*** ./src/app/clases/tateti.ts ***!
  \**********************************/
/*! exports provided: Tateti */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tateti", function() { return Tateti; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");


var Tateti = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Tateti, _super);
    function Tateti(nombre, gano, jugador, intentos, resultado) {
        var _this = _super.call(this, nombre, gano, jugador, intentos, resultado) || this;
        _this.nombre = "Tateti";
        return _this;
    }
    Tateti.prototype.generarTateti = function () {
        this.posiciones = [['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']];
        this.juega = 'O';
        this.jugadas = 5;
    };
    Tateti.prototype.reiniciar = function () {
        this.generarTateti();
    };
    Tateti.prototype.generarAleatorio = function () {
        this.i = Math.floor((Math.random() * 3) + 0);
        this.j = Math.floor((Math.random() * 3) + 0);
    };
    Tateti.prototype.validar = function () {
        if (this.posiciones[this.i][this.j] != "-")
            return true;
        return false;
    };
    Tateti.prototype.eleccionMaquina = function () {
        do {
            this.generarAleatorio();
            console.log("i: " + this.i + " j: " + this.j);
        } while (this.validar() && this.jugadas > 1);
        this.posiciones[this.i][this.j] = this.juega;
        this.jugadas -= 1;
        console.log(this.jugadas);
    };
    Tateti.prototype.cambiarJugador = function () {
        if (this.juega == 'O') {
            this.juega = 'X';
        }
        else
            this.juega = 'O';
    };
    Tateti.prototype.verificar = function () {
        return true;
    };
    return Tateti;
}(_clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"]));



/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nform {\n    border: 10px solid #f1f1f1;\n    padding: 10px;\n    background:gray;\n}\n\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\nbutton {\n    /*background-color: #4CAF50;*/\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n\n.aceptbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #3664F4;\n}\n\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n    width: 40%;\n    border-radius: 50%;\n}\n\n.container {\n    padding: 16px;\n}\n\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n\n#snackbar {\n    visibility: hidden;\n    min-width: 250px;\n    margin-left: -125px;\n   \n    color: #fff;\n    text-align: center;\n    border-radius: 2px;\n    padding: 16px;\n    position: fixed;\n    z-index: 1;\n    left: 50%;\n    bottom: 30px;\n    font-size: 17px;\n}\n\n#snackbar.Ganador {\n    background-color: #059F2F;\n}\n\n#snackbar.Perdedor {\n    background-color: #FF0000;\n}\n\n#snackbar.show {\n    visibility: visible;\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@-webkit-keyframes fadein {\n    from {bottom: 0; opacity: 0;} \n    to {bottom: 30px; opacity: 1;}\n}\n\n@keyframes fadein {\n    from {bottom: 0; opacity: 0;}\n    to {bottom: 30px; opacity: 1;}\n}\n\n@-webkit-keyframes fadeout {\n    from {bottom: 30px; opacity: 1;} \n    to {bottom: 0; opacity: 0;}\n}\n\n@keyframes fadeout {\n    from {bottom: 30px; opacity: 1;}\n    to {bottom: 0; opacity: 0;}\n}\n\n.fondo{\n\n    background-image: url('slider-bg-2.jpg');\n    margin-top: -60px;\n    padding: 5%;\n  }\n\n.juego{\n    width: 23%;\n    margin-left: 40%;\n    color: wheat;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWRpdmluYS1lbC1udW1lcm8vYWRpdmluYS1lbC1udW1lcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0lBQ0k7T0FDRyxjQUFjO09BQ2QsV0FBVztJQUNkO0lBQ0E7T0FDRyxXQUFXO0lBQ2Q7QUFDSjs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1COztJQUVuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLE1BQU0sU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUM1QixJQUFJLFlBQVksRUFBRSxVQUFVLENBQUM7QUFDakM7O0FBRUE7SUFDSSxNQUFNLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFDNUIsSUFBSSxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQ2pDOztBQUVBO0lBQ0ksTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0lBQy9CLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUM5Qjs7QUFFQTtJQUNJLE1BQU0sWUFBWSxFQUFFLFVBQVUsQ0FBQztJQUMvQixJQUFJLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFDOUI7O0FBRUE7O0lBRUksd0NBQXVFO0lBQ3ZFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FkaXZpbmEtZWwtbnVtZXJvL2FkaXZpbmEtZWwtbnVtZXJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmZvcm0ge1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZjFmMWYxO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDpncmF5O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYnV0dG9uIHtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7Ki9cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG5cbi5jYW5jZWxidG4ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHggMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuLmFjZXB0YnRuIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NjRGNDtcbn1cbi5pbWdjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XG59XG5cbmltZy5hdmF0YXIge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG5zcGFuLnBzdyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBzcGFuIGFuZCBjYW5jZWwgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gICAgc3Bhbi5wc3cge1xuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiAgICAuY2FuY2VsYnRuIHtcbiAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cblxuXG4jc25hY2tiYXIge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTI1cHg7XG4gICBcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG4jc25hY2tiYXIuR2FuYWRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1OUYyRjtcbn1cbiNzbmFja2Jhci5QZXJkZWRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcbn1cbiNzbmFja2Jhci5zaG93IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9IFxuICAgIHRvIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cbiAgICB0byB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xuICAgIGZyb20ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9IFxuICAgIHRvIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xuICAgIGZyb20ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XG4gICAgdG8ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XG59XG5cbi5mb25kb3tcblxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLi8uLi8uLi9kb2NzL2Fzc2V0cy9pbWFnZW5lcy9zbGlkZXItYmctMi5qcGdcIik7XG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XG4gICAgcGFkZGluZzogNSU7XG4gIH1cbiAgLmp1ZWdve1xuICAgIHdpZHRoOiAyMyU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgICBjb2xvcjogd2hlYXQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--app-menu></app-menu-->\n<body class=\"fondo\">\n<div style=\"text-align:center\">\n  <h1 style=\"\n  color: aquamarine;\n\">\n    {{nuevoJuego.nombre}}!\n  </h1>\n </div>\n<h2></h2>\n<div name=\"juego\" class=\"juego\">\n\n   <h1 style=\"color:chartreuse\">ingrese numero:  </h1>  <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"padding: 18%; font-size: 50px;\"/>\n    <h1>El numero ingresado es: {{aux}}  </h1>\n \n    <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>\n \n    <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\n \n    <h2><p *ngIf=\"nuevoJuego.numeroSecreto!=0\" [hidden]=\"ocultarVerificar\"><i class=\"fa fa-spinner fa-spin\"></i>Esperando que ingrese un número</p></h2>\n\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\n    <h3 [hidden]=\"!ocultarVerificar\">usted aún no gano </h3>\n\n\n</div>\n<div id=\"snackbar\">{{Mensajes}}</div>\n\n</body>"

/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdivinaElNumeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaElNumeroComponent", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-adivina */ "./src/app/clases/juego-adivina.ts");



var AdivinaElNumeroComponent = /** @class */ (function () {
    function AdivinaElNumeroComponent() {
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.jugador = JSON.parse(localStorage.getItem("Id"));
        this.ocultarVerificar = false;
        this.arrayResultados = JSON.parse(this.jugador);
        this.nuevoJuego = new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Adivina el Numero Secreto", false, this.jugador, 0, "0");
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.nuevoJuego.jugador = sessionStorage.getItem('user');
    }
    AdivinaElNumeroComponent.prototype.generarnumero = function () {
        this.nuevoJuego.generarnumero();
        this.intentos = 0;
    };
    AdivinaElNumeroComponent.prototype.verificar = function () {
        this.aux = this.nuevoJuego.numeroIngresado;
        this.ocultarVerificar = true;
        //console.info("numero Secreto:",this.nuevoJuego.gano);  
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.nuevoJuego.gano = true;
            this.nuevoJuego.numeroSecreto = 0;
            this.intentos += 1;
            this.nuevoJuego.jugador = sessionStorage.getItem('user');
        }
        else {
            var mensaje = void 0;
            switch (this.intentos) {
                case 0:
                    mensaje = "casi casi";
                    break;
                case 1:
                    mensaje = "No, intento fallido, animo";
                    break;
                case 2:
                    mensaje = "No,Te estaras Acercando???";
                    break;
                case 3:
                    mensaje = "No era el  " + this.nuevoJuego.numeroIngresado;
                    break;
                default:
                    mensaje = "Llegaste a tu limite de intentos, iniciar nuevo juego";
            }
            this.intentos++;
            this.MostarMensaje("#" + this.intentos + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());
            this.nuevoJuego.numeroIngresado = null;
        }
        this.nuevoJuego.intentos = this.intentos;
        this.nuevoJuego.guardarLocal();
        this.nuevoJuego.jugador = sessionStorage.getItem('user');
        console.info("numero Secreto:", this.nuevoJuego.gano);
    };
    AdivinaElNumeroComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    AdivinaElNumeroComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AdivinaElNumeroComponent.prototype, "enviarJuego", void 0);
    AdivinaElNumeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adivina-el-numero',
            template: __webpack_require__(/*! ./adivina-el-numero.component.html */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html"),
            styles: [__webpack_require__(/*! ./adivina-el-numero.component.css */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdivinaElNumeroComponent);
    return AdivinaElNumeroComponent;
}());



/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FkaXZpbmEtbWFzLWxpc3RhZG8vYWRpdmluYS1tYXMtbGlzdGFkby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdivinaMasListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaMasListadoComponent", function() { return AdivinaMasListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdivinaMasListadoComponent = /** @class */ (function () {
    function AdivinaMasListadoComponent() {
        this.listadoParaCompartir = new Array();
    }
    AdivinaMasListadoComponent.prototype.ngOnInit = function () {
    };
    AdivinaMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        // console.info("en app",this.listadoParaCompartir);
    };
    AdivinaMasListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adivina-mas-listado',
            template: __webpack_require__(/*! ./adivina-mas-listado.component.html */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html"),
            styles: [__webpack_require__(/*! ./adivina-mas-listado.component.css */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdivinaMasListadoComponent);
    return AdivinaMasListadoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/adivina-provincia/adivina-provincia.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/adivina-provincia/adivina-provincia.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n  \r\n    text-align: center;\r\n    \r\n    padding:0px;\r\n    margin: 0 auto;\r\n    background-position: center;\r\n  \r\n  }\r\n  .estilosContainer{\r\n      background-color: lightblue;\r\n      background-position: center;\r\n      background-repeat: no-repeat;\r\n      position: relative;\r\n      background-size: cover;\r\n      margin:1;\r\n      padding:6%;\r\n  }\r\n  img{\r\n      border-radius: 8px;\r\n      border : white 2px solid;\r\n  }\r\n  input [type=\"radio\"]{\r\n      padding: 5px 15px;\r\n      background: #FF4136;\r\n      border-radius: 2px;\r\n      color: #fff\r\n  }\r\n  h1{\r\n      color: yellow;\r\n      text-underline-position: above;\r\n  }\r\n  label{\r\n     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n     font-size: 25px;\r\n  }\r\n  button {\r\n      /*background-color: #4CAF50;*/\r\n      color: white;\r\n      padding: 14px 20px;\r\n      margin: 8px 0;\r\n      border: none;\r\n      cursor: pointer;\r\n      width: 50%;\r\n  }\r\n  button:hover {\r\n      opacity: 0.8;\r\n  }\r\n  .Verificarbtn {\r\n      padding: 14px 20px;\r\n      margin: 8px 0;\r\n      border: none;\r\n      cursor: pointer;\r\n      border-radius: 40px;\r\n      border: white 4px solid;\r\n      width: 50%;\r\n      background-color: green;\r\n  }\r\n  .NuevoJuegobtn {\r\n      padding: 14px 20px;\r\n      margin: 8px 0;\r\n      border: none;\r\n      cursor: pointer;\r\n      border-radius: 40px;\r\n      border: white 4px solid;\r\n      width: 50%;\r\n      background-color: orange;\r\n  }\r\n  #snackbar {\r\n      visibility: hidden;\r\n      min-width: 250px;\r\n      margin-left: -125px;\r\n     \r\n      color: #fff;\r\n      text-align: center;\r\n      border-radius: 2px;\r\n      padding: 16px;\r\n      position: fixed;\r\n      z-index: 1;\r\n      left: 50%;\r\n      bottom: 30px;\r\n      font-size: 17px;\r\n  }\r\n  #snackbar.Ganador {\r\n      background-color: #059F2F;\r\n  }\r\n  #snackbar.Perdedor {\r\n      background-color: #FF0000;\r\n  }\r\n  #snackbar.show {\r\n      visibility: visible;\r\n      -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n      animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n  }\r\n  .fondo{\r\n\r\n    background-image: url('slider-bg-2.jpg');\r\n    margin-top: -60px;\r\n    padding-bottom: 12%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWRpdmluYS1wcm92aW5jaWEvYWRpdmluYS1wcm92aW5jaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7O0lBRWxCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsMkJBQTJCOztFQUU3QjtFQUNBO01BQ0ksMkJBQTJCO01BQzNCLDJCQUEyQjtNQUMzQiw0QkFBNEI7TUFDNUIsa0JBQWtCO01BSWxCLHNCQUFzQjtNQUN0QixRQUFRO01BQ1IsVUFBVTtFQUNkO0VBQ0E7TUFDSSxrQkFBa0I7TUFDbEIsd0JBQXdCO0VBQzVCO0VBRUE7TUFDSSxpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQjtFQUNKO0VBRUE7TUFDSSxhQUFhO01BQ2IsOEJBQThCO0VBQ2xDO0VBRUE7S0FDRyx3RUFBd0U7S0FDeEUsZUFBZTtFQUNsQjtFQUVBO01BQ0ksNkJBQTZCO01BQzdCLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLFlBQVk7TUFDWixlQUFlO01BQ2YsVUFBVTtFQUNkO0VBRUE7TUFDSSxZQUFZO0VBQ2hCO0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLFlBQVk7TUFDWixlQUFlO01BQ2YsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixVQUFVO01BQ1YsdUJBQXVCO0VBQzNCO0VBQ0E7TUFDSSxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLFlBQVk7TUFDWixlQUFlO01BQ2YsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixVQUFVO01BQ1Ysd0JBQXdCO0VBQzVCO0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLG1CQUFtQjs7TUFFbkIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLGVBQWU7TUFDZixVQUFVO01BQ1YsU0FBUztNQUNULFlBQVk7TUFDWixlQUFlO0VBQ25CO0VBQ0E7TUFDSSx5QkFBeUI7RUFDN0I7RUFDQTtNQUNJLHlCQUF5QjtFQUM3QjtFQUNBO01BQ0ksbUJBQW1CO01BQ25CLGlEQUFpRDtNQUNqRCx5Q0FBeUM7RUFDN0M7RUFFQTs7SUFFRSx3Q0FBdUU7SUFDdkUsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FkaXZpbmEtcHJvdmluY2lhL2FkaXZpbmEtcHJvdmluY2lhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgLmVzdGlsb3NDb250YWluZXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplIDogY292ZXI7XHJcbiAgICAgIC1tb3otYmFja2dyb3VuZC1zaXplIDogY292ZXI7XHJcbiAgICAgIC1tb3otYmFja2dyb3VuZC1zaXplIDogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIG1hcmdpbjoxO1xyXG4gICAgICBwYWRkaW5nOjYlO1xyXG4gIH1cclxuICBpbWd7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgYm9yZGVyIDogd2hpdGUgMnB4IHNvbGlkO1xyXG4gIH1cclxuICBcclxuICBpbnB1dCBbdHlwZT1cInJhZGlvXCJde1xyXG4gICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgYmFja2dyb3VuZDogI0ZGNDEzNjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICBjb2xvcjogI2ZmZlxyXG4gIH1cclxuICBcclxuICBoMXtcclxuICAgICAgY29sb3I6IHllbGxvdztcclxuICAgICAgdGV4dC11bmRlcmxpbmUtcG9zaXRpb246IGFib3ZlO1xyXG4gIH1cclxuICBcclxuICBsYWJlbHtcclxuICAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuICBcclxuICBidXR0b24ge1xyXG4gICAgICAvKmJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7Ki9cclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICBcclxuICBidXR0b246aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG4gIFxyXG4gIC5WZXJpZmljYXJidG4ge1xyXG4gICAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICBib3JkZXI6IHdoaXRlIDRweCBzb2xpZDtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgfVxyXG4gIC5OdWV2b0p1ZWdvYnRuIHtcclxuICAgICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgYm9yZGVyOiB3aGl0ZSA0cHggc29saWQ7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICB9XHJcbiAgXHJcbiAgI3NuYWNrYmFyIHtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTEyNXB4O1xyXG4gICAgIFxyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBib3R0b206IDMwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbiAgI3NuYWNrYmFyLkdhbmFkb3Ige1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU5RjJGO1xyXG4gIH1cclxuICAjc25hY2tiYXIuUGVyZGVkb3Ige1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xyXG4gIH1cclxuICAjc25hY2tiYXIuc2hvdyB7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XHJcbiAgICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG4gIH1cclxuXHJcbiAgLmZvbmRve1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLi8uLi8uLi9kb2NzL2Fzc2V0cy9pbWFnZW5lcy9zbGlkZXItYmctMi5qcGdcIik7XHJcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMiU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/adivina-provincia/adivina-provincia.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/adivina-provincia/adivina-provincia.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fondo\">\n  <form>\n      <h1>{{nombre}}</h1>\n      <br>\n      <div style=\"\n      padding-top: 7%;\">\n    <img style=\"float: left;margin-left: 220px;\"*ngIf=\"nuevoJuego.elementoAdivinar != null\" src=\"./assets/imagenes/provincias/{{nuevoJuego.elementoAdivinar['path']}}\" height=\"325px\" width=\"325px\">\n    <br><br>\n    <div *ngFor=\"let opciones of nuevoJuego.opcionesMostradas\" >\n    <input type=\"radio\" name=\"nuevoJuego.opcionIngresada\" [(ngModel)]=\"nuevoJuego.opcionIngresada\" value=\"{{opciones}}\" ><label style=\"color: lightgreen;\">{{opciones}}</label>\n    <br><br>\n  </div>\n  <div>\n  <button class=\"NuevoJuegobtn\" *ngIf=\"nuevoJuego.elementoAdivinar == null\" (click)=\"generar()\"     >Nuevo Juego</button>\n  <button style=\"display: block;\n  margin-left: 30%;\" class=\"Verificarbtn\" [hidden]=\"ocultarVerificar\" *ngIf=\"nuevoJuego.elementoAdivinar != null\" (click)=\"verificar()\">Verificar</button>\n</div>\n</div>  \n</form>\n  <div id=\"snackbar\">{{Mensajes}}</div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/componentes/adivina-provincia/adivina-provincia.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/adivina-provincia/adivina-provincia.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdivinaProvinciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaProvinciaComponent", function() { return AdivinaProvinciaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_juego_adivina_provincia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-adivina-provincia */ "./src/app/clases/juego-adivina-provincia.ts");



var AdivinaProvinciaComponent = /** @class */ (function () {
    function AdivinaProvinciaComponent() {
        this.nombre = "Adivina la Provincia";
        this.jugador = JSON.parse(localStorage.getItem("Id"));
        this.nuevoJuego = new _clases_juego_adivina_provincia__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivinaProvincia"]("Adivina La Provincia", false, this.jugador, 0, "00");
        this.ocultarVerificar = true;
        this.puntos = 0;
        this.arrayResultados = JSON.parse(this.jugador);
        this.intentos = 0;
        //console.info(this.arrayResultados);
    }
    AdivinaProvinciaComponent.prototype.generar = function () {
        this.ocultarVerificar = false;
        this.nuevoJuego.generar();
        //console.log(this.nuevoJuego.elementoAdivinar);
    };
    AdivinaProvinciaComponent.prototype.verificar = function () {
        //console.log(this.nuevoJuego.opcionIngresada);
        if (this.nuevoJuego.verificar()) {
            this.MostarMensaje("Muy bien acertaste!!", true);
            this.nuevoJuego.nombre = "Adivina La Provincia";
            this.nuevoJuego.intentos = this.intentos + 1;
            this.intentos += 1;
        }
        else {
            if (this.intentos < 3) {
                this.nuevoJuego.nombre = "Adivina La Provincia";
                this.MostarMensaje("Elegiste la opcion incorrecta!!", false);
            }
            this.nuevoJuego.intentos = this.intentos;
        }
        this.nuevoJuego = new _clases_juego_adivina_provincia__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivinaProvincia"]("Adivina La Provincia", false, this.jugador, 0, "00");
        this.puntos += 1;
        console.log(this.puntos);
        if (this.puntos == 3) {
            console.log("intentos: " + this.intentos);
            this.nuevoJuego.jugador = sessionStorage.getItem('user');
            this.nuevoJuego.guardarLocal();
            this.puntos = 0;
            if (this.intentos > 1) {
                this.nuevoJuego.gano = true;
                this.MostarMensaje("Ganaste! Ahora empieza un nuevo juego", true);
            }
            else {
                this.nuevoJuego.gano = false;
                this.MostarMensaje("Perdiste! Ahora empieza un nuevo juego", false);
            }
            console.log(this.nuevoJuego.gano);
            this.intentos = 0;
        }
    };
    AdivinaProvinciaComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    AdivinaProvinciaComponent.prototype.ngOnInit = function () {
    };
    AdivinaProvinciaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adivina-provincia',
            template: __webpack_require__(/*! ./adivina-provincia.component.html */ "./src/app/componentes/adivina-provincia/adivina-provincia.component.html"),
            styles: [__webpack_require__(/*! ./adivina-provincia.component.css */ "./src/app/componentes/adivina-provincia/adivina-provincia.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdivinaProvinciaComponent);
    return AdivinaProvinciaComponent;
}());



/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color: #059F2F;\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: #FF0000;\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n.fondo{\r\n\r\n    background-image: url('slider-bg-2.jpg');\r\n    margin-top: -60px;\r\n    margin-bottom: -90px;\r\n  }\r\n.loader,\r\n.loader:before,\r\n.loader:after {\r\n  background: #ffffff;\r\n  -webkit-animation: load1 1s infinite ease-in-out;\r\n  animation: load1 1s infinite ease-in-out;\r\n  width: 1em;\r\n  height: 4em;\r\n}\r\n.loader {\r\n  color: #ffffff;\r\n  text-indent: -9999em;\r\n  margin: 88px auto;\r\n  margin-left: 30px;\r\n  position: absolute;\r\n  font-size: 11px;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-animation-delay: -0.16s;\r\n  animation-delay: -0.16s;\r\n}\r\n.loader:before,\r\n.loader:after {\r\n  position: absolute;\r\n  top: 0;\r\n  content: '';\r\n}\r\n.loader:before {\r\n  left: -1.5em;\r\n  -webkit-animation-delay: -0.32s;\r\n  animation-delay: -0.32s;\r\n}\r\n.loader:after {\r\n  left: 1.5em;\r\n}\r\n@-webkit-keyframes load1 {\r\n  0%,\r\n  80%,\r\n  100% {\r\n    box-shadow: 0 0;\r\n    height: 4em;\r\n  }\r\n  40% {\r\n    box-shadow: 0 -2em;\r\n    height: 5em;\r\n  }\r\n}\r\n@keyframes load1 {\r\n  0%,\r\n  80%,\r\n  100% {\r\n    box-shadow: 0 0;\r\n    height: 4em;\r\n  }\r\n  40% {\r\n    box-shadow: 0 -2em;\r\n    height: 5em;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWdpbGlkYWQtYXJpdG1ldGljYS9hZ2lsaWRhZC1hcml0bWV0aWNhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7SUFFbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlEQUFpRDtJQUNqRCx5Q0FBeUM7QUFDN0M7QUFFQTs7SUFFSSx3Q0FBdUU7SUFDdkUsaUJBQWlCO0lBQ2pCLG9CQUFvQjtFQUN0QjtBQUVBOzs7RUFHQSxtQkFBbUI7RUFDbkIsZ0RBQWdEO0VBQ2hELHdDQUF3QztFQUN4QyxVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQ0FBZ0M7RUFFaEMsd0JBQXdCO0VBQ3hCLCtCQUErQjtFQUMvQix1QkFBdUI7QUFDekI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLCtCQUErQjtFQUMvQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0U7OztJQUdFLGVBQWU7SUFDZixXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7QUFDRjtBQUNBO0VBQ0U7OztJQUdFLGVBQWU7SUFDZixXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FnaWxpZGFkLWFyaXRtZXRpY2EvYWdpbGlkYWQtYXJpdG1ldGljYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NuYWNrYmFyIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEyNXB4O1xyXG4gICBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuI3NuYWNrYmFyLkdhbmFkb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1OUYyRjtcclxufVxyXG4jc25hY2tiYXIuUGVyZGVkb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcclxufVxyXG4jc25hY2tiYXIuc2hvdyB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG59XHJcblxyXG4uZm9uZG97XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4uLy4uLy4uL2RvY3MvYXNzZXRzL2ltYWdlbmVzL3NsaWRlci1iZy0yLmpwZ1wiKTtcclxuICAgIG1hcmdpbi10b3A6IC02MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTkwcHg7XHJcbiAgfVxyXG5cclxuICAubG9hZGVyLFxyXG4ubG9hZGVyOmJlZm9yZSxcclxuLmxvYWRlcjphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDEgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBsb2FkMSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogNGVtO1xyXG59XHJcbi5sb2FkZXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xyXG4gIG1hcmdpbjogODhweCBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxufVxyXG4ubG9hZGVyOmJlZm9yZSxcclxuLmxvYWRlcjphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBjb250ZW50OiAnJztcclxufVxyXG4ubG9hZGVyOmJlZm9yZSB7XHJcbiAgbGVmdDogLTEuNWVtO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XHJcbn1cclxuLmxvYWRlcjphZnRlciB7XHJcbiAgbGVmdDogMS41ZW07XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQxIHtcclxuICAwJSxcclxuICA4MCUsXHJcbiAgMTAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDA7XHJcbiAgICBoZWlnaHQ6IDRlbTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTJlbTtcclxuICAgIGhlaWdodDogNWVtO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWQxIHtcclxuICAwJSxcclxuICA4MCUsXHJcbiAgMTAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDA7XHJcbiAgICBoZWlnaHQ6IDRlbTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTJlbTtcclxuICAgIGhlaWdodDogNWVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--app-menu></app-menu-->\n<!-- index.html -->\n\n<div class=\"fondo\">\n<div name=\"juego\" >\n  <h1 style=\"color:white; text-align:center\">Agilidad Aritmetica</h1>\n<ul style=\"list-style:none;margin-left: 417px; color:white;\">\n   <li>\n   Primer número: <input [(ngModel)]=\"nuevoJuego.primerNumero\" placeholder=\"Primer Numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\n  \n  </li>\n  <li>\n   Operador: <input [(ngModel)]=\"nuevoJuego.operador\" placeholder=\"Operador\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\n    \n  </li>\n  <li>\n   Segundo número: <input [(ngModel)]=\"nuevoJuego.segundoNumero\" placeholder=\"Segundo Numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\n    \n  </li>\n  <li>\n    Respuesta: <input [(ngModel)]=\"nuevoJuego.resultadoUsuario\" placeholder=\"ingrese Respuesta\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\n     \n   </li>\n  <li>\n    <h2 [hidden]=\"ocultarVerificar\" ><button (click)=\"verificar()\" class=\"btn btn-success btn-lg\" >Verificar {{Tiempo}} </button></h2>\n  </li>\n  <li><br>\n    <h2 [hidden]=\"!ocultarVerificar\"><button  (click)=\"NuevoJuego()\"  class=\"btn btn-outline-success btn-lg\" style=\"\n      padding: 20px;\" >Nuevo</button></h2>\n  </li>\n  <li [hidden]=\"ocultarVerificar\">\n    <h2><p><i class=\"loader\" ></i>         Esperando numero...</p></h2>\n  </li>\n</ul>\n\n</div>\n\n<div id=\"snackbar\">{{Mensajes}}</div>\n  <br><br><br><br><br><br><br><br>\n</div>"

/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AgilidadAritmeticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadAritmeticaComponent", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-agilidad */ "./src/app/clases/juego-agilidad.ts");



var AgilidadAritmeticaComponent = /** @class */ (function () {
    function AgilidadAritmeticaComponent() {
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.jugador = JSON.parse(localStorage.getItem("Id"));
        this.ocultarVerificar = true;
        this.Tiempo = 5;
        this.arrayResultados = JSON.parse(this.jugador);
        this.intentos = 0;
        this.nuevoJuego = new _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__["JuegoAgilidad"]("Agilidad Aritmetica", false, this.jugador, 0, "00");
        console.info("Inicio agilidad");
    }
    AgilidadAritmeticaComponent.prototype.ngOnInit = function () {
    };
    AgilidadAritmeticaComponent.prototype.NuevoJuego = function () {
        var _this = this;
        this.ocultarVerificar = false;
        this.nuevoJuego.generar();
        this.nuevoJuego.resultadoUsuario = null;
        this.repetidor = setInterval(function () {
            _this.Tiempo--;
            console.log("llego", _this.Tiempo);
            if (_this.Tiempo == 0) {
                clearInterval(_this.repetidor);
                _this.verificar();
                _this.ocultarVerificar = true;
                _this.Tiempo = 5;
            }
        }, 900);
    };
    AgilidadAritmeticaComponent.prototype.verificar = function () {
        this.ocultarVerificar = false;
        clearInterval(this.repetidor);
        if (this.nuevoJuego.verificar()) {
            this.MostarMensaje("Correcto. Acertaste el resultado!!", true);
            this.nuevoJuego.gano = true;
            this.nuevoJuego.nombre = "Agilidad Aritmetica";
            this.nuevoJuego.jugador = sessionStorage.getItem('user');
        }
        else {
            this.nuevoJuego.gano = false;
            this.nuevoJuego.nombre = "Agilidad Aritmetica";
            this.nuevoJuego.jugador = sessionStorage.getItem('user');
            this.MostarMensaje("Fallaste. El calculo es incorrecto!!", false);
        }
        this.nuevoJuego.guardarLocal();
        //Despues de verificar si gane o no, reinicio el juego!!
        this.Tiempo = 5;
        this.ocultarVerificar = true;
    };
    AgilidadAritmeticaComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
        console.info("objeto", x);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AgilidadAritmeticaComponent.prototype, "enviarJuego", void 0);
    AgilidadAritmeticaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agilidad-aritmetica',
            template: __webpack_require__(/*! ./agilidad-aritmetica.component.html */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html"),
            styles: [__webpack_require__(/*! ./agilidad-aritmetica.component.css */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AgilidadAritmeticaComponent);
    return AgilidadAritmeticaComponent;
}());



/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FnaWxpZGFkLW1hcy1saXN0YWRvL2FnaWxpZGFkLW1hcy1saXN0YWRvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts ***!
  \************************************************************************************/
/*! exports provided: AgilidadMasListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadMasListadoComponent", function() { return AgilidadMasListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AgilidadMasListadoComponent = /** @class */ (function () {
    function AgilidadMasListadoComponent() {
        this.listadoParaCompartir = new Array();
    }
    AgilidadMasListadoComponent.prototype.ngOnInit = function () {
    };
    AgilidadMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        console.info("en app", this.listadoParaCompartir);
    };
    AgilidadMasListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agilidad-mas-listado',
            template: __webpack_require__(/*! ./agilidad-mas-listado.component.html */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html"),
            styles: [__webpack_require__(/*! ./agilidad-mas-listado.component.css */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AgilidadMasListadoComponent);
    return AgilidadMasListadoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fondo{\r\n\r\n    background-image: url('slider-bg-2.jpg');\r\n    margin-top: -60px;\r\n  }\r\n\r\n  \r\nform {\r\n    border: 2px solid rgb(33, 243, 44);\r\n \r\n    background: rgba(52, 54, 52, 0.8);\r\n    color: white;\r\n    \r\n}\r\n\r\n  \r\nh1{\r\n    font-size: 3.5rem;\r\n    text-align: center;\r\n}\r\n\r\n  \r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n\r\n  \r\n#snackbar.Ganador {\r\n    background-color: rgba(7, 55, 214, 0.973);\r\n}\r\n\r\n  \r\n#snackbar.Perdedor {\r\n    background-color: rgb(255, 0, 0);\r\n}\r\n\r\n  \r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n  \r\n.loader {\r\n    font-size: 10px;\r\n    margin: 50px auto;\r\n    text-indent: -9999em;\r\n    width: 11em;\r\n    height: 11em;\r\n    border-radius: 50%;\r\n    background: #ffffff;\r\n    background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);\r\n    position: relative;\r\n    border: solid blue;\r\n    -webkit-animation: load3 1.4s infinite linear;\r\n    animation: load3 1.4s infinite linear;\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n  }\r\n\r\n  \r\n.loader:before {\r\n    width: 50%;\r\n    height: 50%;\r\n    background: #ffffff;\r\n    border-radius: 100% 0 0 0;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    content: '';\r\n  }\r\n\r\n  \r\n.loader:after {\r\n    \r\n    width: 75%;\r\n    height: 75%;\r\n    border-radius: 50%;\r\n    content: '';\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\r\n\r\n  \r\n@-webkit-keyframes load3 {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n  \r\n@keyframes load3 {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYW5hZ3JhbWEvYW5hZ3JhbWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSx3Q0FBdUU7SUFDdkUsaUJBQWlCO0VBQ25COzs7QUFHRjtJQUNJLGtDQUFrQzs7SUFFbEMsaUNBQWlDO0lBQ2pDLFlBQVk7O0FBRWhCOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7OztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7O0lBRW5CLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7O0FBQ0E7SUFDSSx5Q0FBeUM7QUFDN0M7OztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDOzs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixpREFBaUQ7SUFDakQseUNBQXlDO0FBQzdDOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUtuQiw4RUFBOEU7SUFDOUUsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw2Q0FBNkM7SUFDN0MscUNBQXFDO0lBQ3JDLGdDQUFnQztJQUVoQyx3QkFBd0I7RUFDMUI7OztBQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7RUFDYjs7O0FBQ0E7O0lBRUUsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsUUFBUTtFQUNWOzs7QUFDQTtJQUNFO01BQ0UsK0JBQStCO01BQy9CLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsaUNBQWlDO01BQ2pDLHlCQUF5QjtJQUMzQjtFQUNGOzs7QUFDQTtJQUNFO01BQ0UsK0JBQStCO01BQy9CLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsaUNBQWlDO01BQ2pDLHlCQUF5QjtJQUMzQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvYW5hZ3JhbWEvYW5hZ3JhbWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb25kb3tcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi4vLi4vLi4vZG9jcy9hc3NldHMvaW1hZ2VuZXMvc2xpZGVyLWJnLTIuanBnXCIpO1xyXG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgfVxyXG5cclxuICBcclxuZm9ybSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMzMsIDI0MywgNDQpO1xyXG4gXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCA1NCwgNTIsIDAuOCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxufVxyXG5cclxuaDF7XHJcbiAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jc25hY2tiYXIge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTI1cHg7XHJcbiAgIFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4jc25hY2tiYXIuR2FuYWRvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcsIDU1LCAyMTQsIDAuOTczKTtcclxufVxyXG4jc25hY2tiYXIuUGVyZGVkb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbn1cclxuI3NuYWNrYmFyLnNob3cge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XHJcbiAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxufVxyXG5cclxuXHJcbi5sb2FkZXIge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcclxuICAgIHdpZHRoOiAxMWVtO1xyXG4gICAgaGVpZ2h0OiAxMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmZmZmYgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDQyJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmZmZmIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA0MiUpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmZmZmYgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDQyJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmZmZmYgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDQyJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmZmZmYgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDQyJSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsdWU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDMgMS40cyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICBhbmltYXRpb246IGxvYWQzIDEuNHMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIH1cclxuICAubG9hZGVyOmJlZm9yZSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJSAwIDAgMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBjb250ZW50OiAnJztcclxuICB9XHJcbiAgLmxvYWRlcjphZnRlciB7XHJcbiAgICBcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDMge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbG9hZDMge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fondo\">\n\n<div class=\"container-fluid text-center\">    \n  <div class=\"row content\">\n    <div class=\"col-sm-2 sidenav\">\n    </div>\n    <div class=\"col-sm-8 text-left\"> \n      <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n      <div style=\"text-align:center\">\n        <h1 style=\"color:greenyellow;\">\n          Anagrama\n        </h1>\n       </div>\n      <h2></h2>\n      <form name=\"juego\" >\n        <div class=\"row\">\n          <div class=\"col-sm-3\"></div>\n          <div class=\"col-sm-7\">\n              \n              \n              <p> </p> \n                <h1>Que palabra se esconde en:</h1> <br> <h1 style=\"color:yellow; text-align: center\">{{nuevoJuego.palabraDesordenada}}  </h1>\n                <br /> <input [(ngModel)]=\"nuevoJuego.palabraIngresada\" placeholder=\"palabra ordenada\" name=\"palabraOrdenadaa\" type=\"text\" class=\"form-control\" style=\"width: 420px;font-size: 51px;\"/>\n                <br><br>\n                <!-- <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.esperando!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>    -->        \n                <h2><button *ngIf=\"ocultarComenzar\" (click)=\"generarPalabra()\"  class=\"btn btn-outline-primary btn-lg btn-block\">Empezá</button></h2> \n\n                <!---->\n                <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-primary btn-lg btn-block\">Verificar</button></h2>\n                \n                \n                \n                <h2><p *ngIf=\"!ocultarVerificar\" >Esperando que ingreses una palabra<p class=\"loader\" *ngIf=\"!ocultarVerificar\"></p></h2>\n          </div>\n          <div class=\"col-sm-3\"></div>\n        </div>\n\n      </form>\n      <div id=\"snackbar\">{{Mensajes}}</div> \n    <div class=\"col-sm-2 sidenav\">        \n    </div>\n  </div>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.ts ***!
  \************************************************************/
/*! exports provided: AnagramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnagramaComponent", function() { return AnagramaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_juego_anagrama__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-anagrama */ "./src/app/clases/juego-anagrama.ts");



var AnagramaComponent = /** @class */ (function () {
    function AnagramaComponent() {
        this.ocultarComenzar = true;
        this.jugador = JSON.parse(localStorage.getItem("Id"));
        this.nuevoJuego = new _clases_juego_anagrama__WEBPACK_IMPORTED_MODULE_2__["JuegoAnagrama"]("Anagrama", false, this.jugador, 0, "00");
        this.ocultarVerificar = true;
    }
    AnagramaComponent.prototype.generarPalabra = function () {
        this.nuevoJuego.asignarPalabra();
        this.contador = 0;
        this.ocultarVerificar = false;
        this.nuevoJuego.gano = false;
        this.Mensajes = "";
        this.ocultarComenzar = false;
    };
    AnagramaComponent.prototype.verificar = function () {
        this.contador++;
        this.ocultarVerificar = true;
        if (this.nuevoJuego.verificar()) {
            this.MostarMensaje("Adivinaste la palabra!!!", true);
        }
        else {
            this.mensaje = "No acertaste, buena suerte la proxima!";
            this.MostarMensaje(this.mensaje);
            this.nuevoJuego.palabraIngresada = "";
            this.nuevoJuego.palabraDesordenada = "";
        }
        console.info("Gano: ", this.nuevoJuego.gano);
        this.nuevoJuego.jugador = sessionStorage.getItem('user');
        this.nuevoJuego.guardarLocal();
        this.ocultarComenzar = true;
    };
    AnagramaComponent.prototype.MostarMensaje = function (mensaje, gano) {
        if (gano === void 0) { gano = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (gano) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            //modelo.ocultarVerificar=false;
        }, 3000);
        console.info("objeto", x);
    };
    AnagramaComponent.prototype.ngOnInit = function () {
    };
    AnagramaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anagrama',
            template: __webpack_require__(/*! ./anagrama.component.html */ "./src/app/componentes/anagrama/anagrama.component.html"),
            styles: [__webpack_require__(/*! ./anagrama.component.css */ "./src/app/componentes/anagrama/anagrama.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnagramaComponent);
    return AnagramaComponent;
}());



/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* =================================\n------------------------------------\n  EndGam - Gaming Magazine Template\n  Version: 1.0\n ------------------------------------\n ====================================*/\n\n\n\n/*----------------------------------------*/\n\n\n\n/* Template default CSS\n/*----------------------------------------*/\n\n\n\nhtml,\nbody {\n\theight: 100%;\n\tfont-family: 'Roboto', sans-serif;\n\t-webkit-font-smoothing: antialiased;\n\tfont-smoothing: antialiased;\n}\n\n\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\tmargin: 0;\n\tcolor: #111111;\n\tfont-weight: 500;\n}\n\n\n\nh1 {\n\tfont-size: 70px;\n}\n\n\n\nh2 {\n\tfont-size: 36px;\n}\n\n\n\nh3 {\n\tfont-size: 30px;\n}\n\n\n\nh4 {\n\tfont-size: 24px;\n}\n\n\n\nh5 {\n\tfont-size: 18px;\n}\n\n\n\nh6 {\n\tfont-size: 16px;\n}\n\n\n\np {\n\tfont-size: 15px;\n\tcolor: #585858;\n\tline-height: 1.6;\n\tfont-weight: 500;\n}\n\n\n\nimg {\n\tmax-width: 100%;\n}\n\n\n\ninput:focus,\nselect:focus,\nbutton:focus,\ntextarea:focus {\n\toutline: none;\n}\n\n\n\na:hover,\na:focus {\n\ttext-decoration: none;\n\toutline: none;\n}\n\n\n\nul,\nol {\n\tpadding: 0;\n\tmargin: 0;\n}\n\n\n\n::-webkit-input-placeholder {\n\tcolor: #fff;\n\tfont-style: italic;\n\ttext-transform: uppercase;\n}\n\n\n\n:-ms-input-placeholder {\n\tcolor: #fff;\n\tfont-style: italic;\n\ttext-transform: uppercase;\n}\n\n\n\n::-ms-input-placeholder {\n\tcolor: #fff;\n\tfont-style: italic;\n\ttext-transform: uppercase;\n}\n\n\n\n::placeholder {\n\tcolor: #fff;\n\tfont-style: italic;\n\ttext-transform: uppercase;\n}\n\n\n\n/*---------------------\n  Helper CSS\n-----------------------*/\n\n\n\n.section-title h2 {\n\tfont-size: 30px;\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tfont-style: italic;\n}\n\n\n\n.set-bg {\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tbackground-position: top center;\n}\n\n\n\n.spad {\n\tpadding-top: 105px;\n\tpadding-bottom: 105px;\n}\n\n\n\n.text-white h1,\n.text-white h2,\n.text-white h3,\n.text-white h4,\n.text-white h5,\n.text-white h6,\n.text-white p,\n.text-white span,\n.text-white li,\n.text-white a {\n\tcolor: #fff;\n}\n\n\n\n/*---------------------\n  Commom elements\n-----------------------*/\n\n\n\n/* buttons */\n\n\n\n.site-btn {\n\tdisplay: inline-block;\n\tborder: none;\n\tfont-size: 14px;\n\tfont-weight: 700;\n\tfont-style: italic;\n\tmin-width: 186px;\n\tpadding: 24px 30px;\n\tborder-radius: 0;\n\ttext-transform: uppercase;\n\tcolor: #081624;\n\tline-height: normal;\n\tcursor: pointer;\n\ttext-align: center;\n\tbackground: #fff;\n\tposition: relative;\n\tz-index: 1;\n}\n\n\n\n.site-btn img {\n\tposition: relative;\n\tleft: 13px;\n\twidth: auto !important;\n\tdisplay: inline-block !important;\n}\n\n\n\n.site-btn:after,\n.site-btn:before {\n\tposition: absolute;\n\tcontent: \"\";\n\twidth: 100%;\n\theight: 100%;\n\tleft: 9px;\n\ttop: 10px;\n\tbackground: #b01ba5;\n\tz-index: -2;\n\tbox-shadow: 0 0 9px 3px rgba(226, 30, 228, 0.24);\n}\n\n\n\n.site-btn:before {\n\tleft: 0;\n\ttop: 0;\n\tbackground: #fff;\n\tz-index: -1;\n}\n\n\n\n.site-btn:hover {\n\tcolor: #081624;\n}\n\n\n\n/* Preloder */\n\n\n\n#preloder {\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 999999;\n\tbackground: #000;\n}\n\n\n\n.loader {\n\twidth: 40px;\n\theight: 40px;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-top: -13px;\n\tmargin-left: -13px;\n\tborder-radius: 60px;\n\tanimation: loader 0.8s linear infinite;\n\t-webkit-animation: loader 0.8s linear infinite;\n}\n\n\n\n@keyframes loader {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t\ttransform: rotate(0deg);\n\t\tborder: 4px solid #f44336;\n\t\tborder-left-color: transparent;\n\t}\n\t50% {\n\t\t-webkit-transform: rotate(180deg);\n\t\ttransform: rotate(180deg);\n\t\tborder: 4px solid #673ab7;\n\t\tborder-left-color: transparent;\n\t}\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t\ttransform: rotate(360deg);\n\t\tborder: 4px solid #f44336;\n\t\tborder-left-color: transparent;\n\t}\n}\n\n\n\n@-webkit-keyframes loader {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t\tborder: 4px solid #f44336;\n\t\tborder-left-color: transparent;\n\t}\n\t50% {\n\t\t-webkit-transform: rotate(180deg);\n\t\tborder: 4px solid #673ab7;\n\t\tborder-left-color: transparent;\n\t}\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t\tborder: 4px solid #f44336;\n\t\tborder-left-color: transparent;\n\t}\n}\n\n\n\n/*------------------\n  Header section\n---------------------*/\n\n\n\n.header-section {\n\tposition: relative;\n\twidth: 100%;\n\tleft: 0;\n\ttop: -60px;\n\tz-index: 99;\n\tpadding: 50px 50px 0;\n\tbackground-image: url('cabecera.png');\n\theight: 33%;\n\t\n\n}\n\n\n\n.header-warp {\n\tmax-width: 1496px;\n\tmargin: 0 auto;\n}\n\n\n\n.header-social p,\n.footer-social p,\n.geme-social-share p {\n\tdisplay: inline-block;\n\tcolor: #9190a5;\n\tfont-size: 16px;\n\tpadding-top: 4px;\n}\n\n\n\n.header-social a,\n.footer-social a,\n.geme-social-share a {\n\tdisplay: -ms-inline-flex;\n\tdisplay: inline-flex;\n\twidth: 32px;\n\theight: 32px;\n\talign-items: center;\n\tjustify-content: center;\n\tborder-radius: 50%;\n\tcolor: #fff;\n\tfont-size: 12px;\n\tmargin-left: 13px;\n\ttransition: all 0.3s;\n}\n\n\n\n.header-social a:hover,\n.footer-social a:hover,\n.geme-social-share a:hover {\n\tbackground: #b01ba5;\n}\n\n\n\n.header-bar-warp {\n\tpadding: 17px 40px 0;\n\t\n\t\n}\n\n\n\n.site-logo {\n\tfloat: left;\n}\n\n\n\n.user-panel {\n\tfloat: right;\n\tfont-size: 20px;\n\tfont-weight: 500;\n\t\n\tpadding-top: 3px;\n\tdisplay: grid;\n\tmargin-top: 5px;\n\tmargin-right: -66px;\n\t\n}\n\n\n\n.user-panel a {\n\tcolor: rgb(255, 251, 4);\n\ttext-align: center;\n}\n\n\n\n.user-panel a:hover {\n\tcolor: #b01ba5;\n}\n\n\n\n.main-menu {\n\tlist-style: none;\n\ttext-align: center;\n\tpadding-top: 25px;\n\tdisplay:inline;\n}\n\n\n\n.main-menu li {\n\tdisplay: inline-block;\n\tposition: relative;\n}\n\n\n\n.main-menu li a {\n\tdisplay: block;\n\tfont-size: 30px;\n\tfont-weight: 500;\n\tcolor: rgb(41, 250, 14);\n\tmargin-right: 10px;\n\tpadding-bottom: 20px;\n\tposition: relative;\n\tpadding-right: 20px;\n}\n\n\n\n.main-menu li a:after {\n\tcontent: \"\";\n\twidth: 20px;\n\theight: 20px;\n\tright: 0;\n\ttop: 1px;\n\n\tbackground-repeat: no-repeat;\n\tbackground-position: right center;\n}\n\n\n\n.main-menu li a i {\n\tcolor: #928d92;\n\tmargin-left: 5px;\n}\n\n\n\n.main-menu li a:hover {\n\tcolor: #b01ba5;\n}\n\n\n\n.main-menu li a:hover:after {\n    color: #000\n}\n\n\n\n.main-menu li a:hover i {\n\tcolor: #b01ba5;\n}\n\n\n\n.main-menu li:hover .sub-menu {\n\tvisibility: visible;\n\topacity: 1;\n\tmargin-top: 0;\n\t\n}\n\n\n\n.main-menu li:hover>a {\n\tcolor: #b01ba5;\n}\n\n\n\n.main-menu li:hover>a:after {\n\tbackground-color: #190d36\n}\n\n\n\n.main-menu li .sub-menu {\n\tposition: absolute;\n\tlist-style: none;\n\ttext-align: center;\n\twidth: 200px;\n\tleft: 0;\n\ttop: 100%;\n\tvisibility: hidden;\n\topacity: 0;\n\tmargin-top: 20px;\n\tbackground: rgb(233, 250, 0);\n\tz-index: 99;\n\ttransition: all 0.4s;\n\tbox-shadow: 2px 7px 20px rgba(0, 0, 0, 0.4);\n}\n\n\n\n.main-menu li .sub-menu li {\n\tdisplay: block;\n}\n\n\n\n.main-menu li .sub-menu li a {\n\tdisplay: block;\n\tcolor: #000;\n\tmargin-right: 0;\n\tpadding: 8px 30px;\n\tfont-size: 20px;\n}\n\n\n\n.main-menu li .sub-menu li a:after {\n\tdisplay: none;\n}\n\n\n\n.main-menu li .sub-menu li a:hover {\n\tcolor: #b01ba5;\n}\n\n\n\n.slicknav_menu {\n\tdisplay: none;\n}\n\n\n\n/*------------------\n  Hero section\n---------------------*/\n\n\n\n.hero-slider .owl-dots {\n\tdisplay: -ms-flex;\n\tdisplay: flex;\n\tz-index: 2;\n\tleft: calc(50% - 740px);\n\tbottom: 38px;\n\tposition: relative;\n\twidth: 1496px;\n\tposition: absolute;\n}\n\n\n\n.hero-slider .owl-dots .owl-dot {\n\twidth: 44px;\n\theight: 44px;\n\tborder-radius: 50%;\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tborder: 2px solid transparent;\n\tcolor: #fff;\n\tdisplay: -ms-inline-flex;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n\n.hero-slider .owl-dots .owl-dot.active {\n\tcolor: #b01ba5;\n\tborder: 2px solid #b01ba5;\n}\n\n\n\n.hero-slider .owl-nav {\n\tmargin-top: -24px;\n\tdisplay: block;\n}\n\n\n\n.hero-slider .owl-nav .owl-next {\n\tposition: absolute;\n\ttop: 50%;\n\tright: 100px;\n}\n\n\n\n.hero-item {\n\theight: 921px;\n\tpadding-top: 125px;\n\tborder-bottom: 2px solid #b01ba5;\n}\n\n\n\n.hero-item h2 {\n\tfont-size: 160px;\n\tcolor: #fff;\n\tfont-weight: 500;\n\tline-height: 1;\n\tposition: relative;\n\ttop: 100px;\n\topacity: 0;\n}\n\n\n\n.hero-item p {\n\tfont-size: 24px;\n\tcolor: rgba(255, 255, 255, 0.4);\n\tfont-weight: 500;\n\topacity: 0.39;\n\tmargin-bottom: 70px;\n\tposition: relative;\n\ttop: 80px;\n\topacity: 0;\n}\n\n\n\n.hero-item .site-btn {\n\tposition: relative;\n\ttop: 50px;\n\topacity: 0;\n}\n\n\n\n.hero-slider .owl-item.active .hero-item h2,\n.hero-slider .owl-item.active .hero-item p,\n.hero-slider .owl-item.active .hero-item .site-btn {\n\ttop: 0;\n\topacity: 1;\n}\n\n\n\n.hero-slider .owl-item.active .hero-item h2 {\n\ttransition: all 0.5s ease 0.4s;\n}\n\n\n\n.hero-slider .owl-item.active .hero-item p {\n\ttransition: all 0.5s ease 0.6s;\n}\n\n\n\n.hero-slider .owl-item.active .hero-item .site-btn {\n\ttransition: all 0.5s ease 0.8s;\n}\n\n\n\n.hero-slider .owl-item.active .hero-item .offer-card {\n\topacity: 1;\n\t-webkit-transform: rotate(0deg);\n\ttransform: rotate(0deg);\n\ttransition: all 0.5s ease 1s;\n}\n\n\n\n/* ----------------\n  Intro section\n---------------------*/\n\n\n\n.intro-section {\n\tbackground: #0c062e;\n\tpadding: 115px 0;\n}\n\n\n\n.text-box .top-meta {\n\tfont-size: 18px;\n\tfont-weight: 500;\n\tmargin-bottom: 20px;\n}\n\n\n\n.text-box .top-meta a {\n\tcolor: #b01ba5;\n}\n\n\n\n.text-box h3 {\n\tmargin-bottom: 40px;\n\tmax-width: 370px;\n}\n\n\n\n.text-box p {\n\tfont-size: 15px;\n\tfont-weight: 500;\n\tcolor: #68647d;\n\tmargin-bottom: 35px;\n}\n\n\n\n.text-box .read-more {\n\tfont-size: 15px;\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tfont-style: italic;\n\tcolor: #fff;\n}\n\n\n\n.text-box .read-more img {\n\tmargin-left: 13px;\n}\n\n\n\n/* ----------------\n Blog Section\n---------------------*/\n\n\n\n.blog-section {\n\t/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#501755+0,2d1854+100 */\n\tbackground: #501755;\n\t/* Old browsers */\n\t/* FF3.6-15 */\n\t/* Chrome10-25,Safari5.1-6 */\n\tbackground: linear-gradient(45deg, #501755 0%, #2d1854 100%);\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#501755', endColorstr='#2d1854', GradientType=1);\n\t/* IE6-9 fallback on horizontal gradient */\n}\n\n\n\n.blog-section .section-title {\n\tmargin-bottom: 25px;\n}\n\n\n\n.blog-filter {\n\tlist-style: none;\n\tdisplay: block;\n}\n\n\n\n.blog-filter li {\n\tdisplay: inline-block;\n}\n\n\n\n.blog-filter li a {\n\tdisplay: block;\n\tcolor: #fff;\n\tpadding: 16px 36px;\n\tfont-size: 16px;\n\tfont-weight: 700;\n\tbackground: #6f2b95;\n\tline-height: 1.1;\n\tmargin-right: 7px;\n\ttransition: all 0.3s;\n\tmargin-bottom: 10px;\n}\n\n\n\n.blog-filter li a:hover {\n\tbackground: #b01ba5;\n}\n\n\n\n.blog-item {\n\tmargin-top: 86px;\n}\n\n\n\n.blog-item .blog-thumb {\n\twidth: 362px;\n\tfloat: left;\n\tmargin-right: 30px;\n}\n\n\n\n.blog-item .text-box {\n\toverflow: hidden;\n}\n\n\n\n.blog-item .text-box p {\n\tmargin-bottom: 42px;\n}\n\n\n\n.widget-item {\n\tmargin-bottom: 85px;\n}\n\n\n\n.widget-item:last-child {\n\tmargin-bottom: 0;\n}\n\n\n\n.widget-item .widget-title {\n\tcolor: #fff;\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tfont-style: italic;\n\tpadding-left: 38px;\n\tmargin-bottom: 48px;\n}\n\n\n\n.trending-widget .tw-item {\n\tmargin-bottom: 38px;\n}\n\n\n\n.trending-widget .tw-item:last-child {\n\tmargin-bottom: 0;\n}\n\n\n\n.trending-widget .tw-thumb {\n\tfloat: left;\n\tmargin-right: 17px;\n\toverflow: hidden;\n}\n\n\n\n.trending-widget .tw-text .tw-meta {\n\tcolor: #68647d;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tmargin-bottom: 7px;\n}\n\n\n\n.trending-widget .tw-text .tw-meta a {\n\tcolor: #b01ba5;\n}\n\n\n\n.trending-widget .tw-text h5 {\n\tfont-size: 18px;\n\tcolor: #fff;\n\tline-height: 1.5;\n}\n\n\n\n.categories-widget {\n\tbackground: #34164b;\n\tpadding: 55px 0 25px;\n}\n\n\n\n.categories-widget ul {\n\tlist-style: none;\n\tpadding: 0 38px;\n}\n\n\n\n.categories-widget ul li {\n\tdisplay: block;\n}\n\n\n\n.categories-widget ul li a {\n\tdisplay: inline-block;\n\tposition: relative;\n\tfont-size: 16px;\n\tcolor: #68647d;\n\tfont-weight: 500;\n\tmargin-bottom: 15px;\n\tpadding-right: 19px;\n\ttransition: all 0.2s;\n\tbackground-repeat: no-repeat;\n\tbackground-position: right -120% center;\n\tbackground-size: 11px;\n}\n\n\n\n.categories-widget ul li a:hover {\n\tcolor: #b01ba5;\n\tbackground-position: right center;\n}\n\n\n\n.search-widget {\n\tposition: relative;\n}\n\n\n\n.search-widget input {\n\twidth: 100%;\n\theight: 40px;\n\tborder: none;\n\tborder-bottom: 2px solid #72628b;\n\tbackground: none;\n\tpadding-right: 60px;\n\tcolor: #fff;\n}\n\n\n\n.search-widget button {\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\tcolor: #b01ba5;\n\tfont-weight: 700;\n\tfont-size: 14px;\n\tfont-style: italic;\n\tcursor: pointer;\n\tbackground: none;\n\tborder: none;\n\ttext-transform: uppercase;\n}\n\n\n\n.latest-comments .lc-item {\n\tmargin-bottom: 30px;\n}\n\n\n\n.latest-comments .lc-item:last-child {\n\tmargin-bottom: 0;\n}\n\n\n\n.latest-comments .lc-item .lc-avatar {\n\twidth: 64px;\n\theight: 64px;\n\tborder-radius: 50%;\n\tfloat: left;\n\tmargin-right: 12px;\n}\n\n\n\n.latest-comments .lc-item .tw-text {\n\tpadding-top: 10px;\n\tfont-size: 16px;\n\tcolor: #fff;\n\tfont-weight: 500;\n}\n\n\n\n.latest-comments .lc-item .tw-text a {\n\tcolor: #b01ba5;\n}\n\n\n\n.latest-comments .lc-item .tw-text span {\n\tcolor: #68647d;\n}\n\n\n\n/* --------------------\n  Intro video section\n-----------------------*/\n\n\n\n.intro-video-section {\n\theight: 757px;\n\tposition: relative;\n}\n\n\n\n.video-play-btn {\n\tposition: absolute;\n\tleft: calc(50% - 61px);\n\ttop: calc(50% - 61px);\n\twidth: 122px;\n\theight: 122px;\n\ttext-align: center;\n\tpadding-top: 35px;\n\tborder-radius: 50%;\n\tbackground: rgba(255, 255, 255, 0.16);\n}\n\n\n\n.video-text {\n\tmargin-bottom: 80px;\n\tpadding: 27px 0;\n\tpadding-left: 25px;\n\tposition: relative;\n}\n\n\n\n.video-text h2 {\n\tfont-size: 48px;\n\ttext-transform: uppercase;\n\tfont-style: italic;\n\tfont-weight: 700;\n\tcolor: #fff;\n\tmargin-bottom: 1px;\n}\n\n\n\n.video-text p {\n\tfont-size: 18px;\n\tcolor: #a3a1b3;\n\tfont-weight: 500;\n\tmargin-bottom: 0;\n}\n\n\n\n.video-text:after {\n\tposition: absolute;\n\tcontent: \"\";\n\twidth: 9px;\n\theight: 100%;\n\tleft: -22px;\n\ttop: 0;\n\tborder-left: 3px solid #de46d6;\n\tbackground: #fff;\n\tbox-shadow: 0 0 9px 3px rgba(226, 30, 228, 0.5);\n}\n\n\n\n/* ----------------\n  Featured section\n---------------------*/\n\n\n\n.featured-section {\n\tposition: relative;\n\toverflow: hidden;\n}\n\n\n\n.featured-bg {\n\twidth: calc(50% - 156px);\n\tfloat: left;\n\theight: 100%;\n\tleft: 0;\n\tright: 0;\n\tposition: absolute;\n}\n\n\n\n.featured-box {\n\tfloat: right;\n\twidth: calc(50% + 156px);\n\tbackground: #fff;\n\tpadding: 100px 50px 130px 79px;\n}\n\n\n\n.featured-box .text-box {\n\tmax-width: 810px;\n}\n\n\n\n.featured-box .text-box .top-meta {\n\tcolor: #68647d;\n}\n\n\n\n.featured-box .text-box h3 {\n\tfont-size: 60px;\n\tmax-width: 100%;\n}\n\n\n\n.featured-box .text-box p {\n\tfont-size: 16px;\n}\n\n\n\n.featured-box .text-box .read-more {\n\tcolor: #251e2f;\n}\n\n\n\n.gradient-bg,\n.newsletter-section {\n\tbackground: #3e0f3d;\n\t/* Old browsers */\n\t/* FF3.6-15 */\n\t/* Chrome10-25,Safari5.1-6 */\n\tbackground: linear-gradient(to right, #3e0f3d 0%, #1c0f3b 100%);\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3e0f3d', endColorstr='#1c0f3b', GradientType=1);\n\t/* IE6-9 */\n}\n\n\n\n/* --------------------\n  Newsletter section\n----------------------*/\n\n\n\n.newsletter-section {\n\tpadding: 108px 0 95px;\n\ttext-align: center;\n}\n\n\n\n.newsletter-section h2 {\n\tfont-size: 48px;\n\tcolor: #fff;\n\tfont-weight: 700;\n\tfont-style: italic;\n\ttext-transform: uppercase;\n\tmargin-bottom: 73px;\n}\n\n\n\n.newsletter-form {\n\tpadding-left: 56px;\n}\n\n\n\n.newsletter-form input {\n\tfont-size: 14px;\n\tfont-weight: 700;\n\tfont-style: italic;\n\tcolor: #fff;\n\twidth: 787px;\n\tborder: none;\n\tborder-bottom: 2px solid #9b91a6;\n\tbackground: none;\n\theight: 63px;\n\tmargin-right: 26px;\n}\n\n\n\n/* ----------------\n  Footer section\n---------------------*/\n\n\n\n.footer-section {\n\ttext-align: center;\n\t/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#330d38+0,190d36+100 */\n\tbackground: #330d38;\n\t/* Old browsers */\n\t/* FF3.6-15 */\n\t/* Chrome10-25,Safari5.1-6 */\n\tbackground: linear-gradient(to right, #330d38 0%, #190d36 100%);\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#330d38', endColorstr='#190d36', GradientType=1);\n\t/* IE6-9 */\n}\n\n\n\n.footer-section .container {\n\tposition: relative;\n\tpadding: 60px 15px 25px;\n}\n\n\n\n.footer-left-pic {\n\tposition: absolute;\n\tleft: -13px;\n\tbottom: 19px;\n}\n\n\n\n.footer-right-pic {\n\tposition: absolute;\n\tright: 50px;\n\tbottom: 19px;\n}\n\n\n\n.footer-menu {\n\tpadding-top: 62px;\n}\n\n\n\n.footer-menu li:last-child a {\n\tmargin-right: 0;\n}\n\n\n\n.footer-social {\n\tpadding-top: 20px;\n\tpadding-bottom: 40px;\n}\n\n\n\n.footer-social a:first-child {\n\tmargin-left: 0;\n}\n\n\n\n.copyright {\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tcolor: #9190a5;\n\topacity: 0.20;\n}\n\n\n\n.copyright a {\n\tcolor: #9190a5;\n}\n\n\n\n.copyright a:hover {\n\ttext-decoration: underline;\n}\n\n\n\n/* ----------------\n  Other Pages\n=====================\n---------------------*/\n\n\n\n.page-top-section {\n\theight: 355px;\n\tpadding-top: 210px;\n}\n\n\n\n.page-info {\n\tmax-width: 1496px;\n\tmargin: 0 auto;\n\tfont-size: 16px;\n\tcolor: #fff;\n\tpadding-left: 60px;\n}\n\n\n\n.page-info h2 {\n\tcolor: #fff;\n\tfont-size: 48px;\n}\n\n\n\n.site-breadcrumb a,\n.site-breadcrumb span {\n\tfont-style: italic;\n\tcolor: #fff;\n\tmargin: 0 10px;\n\tfont-weight: 700;\n}\n\n\n\n.site-breadcrumb a:first-child {\n\tmargin-left: 0;\n}\n\n\n\n.site-breadcrumb span {\n\tcolor: #c313b7;\n}\n\n\n\n/* --------------\n  Games Page\n-----------------*/\n\n\n\n.games-section {\n\tpadding: 108px 0;\n\t/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#501755+0,2d1854+100 */\n\tbackground: #501755;\n\t/* Old browsers */\n\t/* FF3.6-15 */\n\t/* Chrome10-25,Safari5.1-6 */\n\tbackground: linear-gradient(45deg, #501755 0%, #2d1854 100%);\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#501755', endColorstr='#2d1854', GradientType=1);\n\t/* IE6-9 fallback on horizontal gradient */\n}\n\n\n\n.game-filter {\n\tlist-style: none;\n\tmargin-bottom: 82px;\n}\n\n\n\n.game-filter li {\n\tdisplay: inline-block;\n\twidth: 40px;\n\theight: 34px;\n\tbackground: #503c6e;\n\tborder-radius: 17px;\n\ttransition: all 0.3s;\n}\n\n\n\n.game-filter li:hover {\n\tbackground: #c313b7;\n}\n\n\n\n.game-filter li a {\n\tfont-size: 15px;\n\tfont-weight: 700;\n\tcolor: #fff;\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n\tpadding-top: 7px;\n}\n\n\n\n.game-item {\n\tmargin-bottom: 80px;\n}\n\n\n\n.game-item h5 {\n\tfont-size: 20px;\n\tcolor: #fff;\n\tpadding-top: 30px;\n\tmargin-bottom: 20px;\n}\n\n\n\n.game-item .read-more {\n\tfont-size: 15px;\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tfont-style: italic;\n\tcolor: #b01ba5;\n}\n\n\n\n.game-item .read-more img {\n\tmargin-left: 13px;\n}\n\n\n\n.site-pagination {\n\tdisplay: -ms-flex;\n\tdisplay: flex;\n}\n\n\n\n.site-pagination a {\n\twidth: 38px;\n\theight: 44px;\n\tborder-radius: 50%;\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tborder: 2px solid transparent;\n\tcolor: #fff;\n\tdisplay: -ms-inline-flex;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n\ttransition: all 0.5s;\n}\n\n\n\n.site-pagination a.active {\n\twidth: 44px;\n\tmargin: 0 10px;\n\tcolor: #b01ba5;\n\tborder: 2px solid #b01ba5;\n}\n\n\n\n.site-pagination a.active:first-child {\n\tmargin-left: 0;\n}\n\n\n\n.game-page-sideber .widget-item {\n\tmargin-bottom: 55px;\n}\n\n\n\n/* ------------------\n  Game single Page\n---------------------*/\n\n\n\n.games-single-page,\n.review-section,\n.blog-page,\n.contact-page {\n\tpadding: 104px 0;\n\t/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#501755+0,2d1854+100 */\n\tbackground: #501755;\n\t/* Old browsers */\n\t/* FF3.6-15 */\n\t/* Chrome10-25,Safari5.1-6 */\n\tbackground: linear-gradient(45deg, #501755 0%, #2d1854 100%);\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#501755', endColorstr='#2d1854', GradientType=1);\n\t/* IE6-9 fallback on horizontal gradient */\n}\n\n\n\n.game-single-preview {\n\tmargin-bottom: 108px;\n}\n\n\n\n.game-single-content .gs-meta {\n\tfont-size: 18px;\n\tcolor: #68647d;\n\tfont-weight: 500;\n\tmargin-bottom: 20px;\n}\n\n\n\n.game-single-content .gs-meta a {\n\tcolor: #b01ba5;\n}\n\n\n\n.game-single-content .gs-title {\n\tfont-size: 60px;\n\tcolor: #fff;\n\tmargin-bottom: 40px;\n}\n\n\n\n.game-single-content h4 {\n\tcolor: #b01ba5;\n\tmargin-bottom: 20px;\n}\n\n\n\n.game-single-content p {\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tcolor: #68647d;\n\tline-height: 1.8;\n\tmargin-bottom: 70px;\n}\n\n\n\n.rating-widget {\n\tbackground: #34164b;\n\tpadding: 55px 0 30px;\n}\n\n\n\n.rating-widget ul {\n\tlist-style: none;\n\tpadding: 0 38px;\n\tmargin-bottom: 30px;\n}\n\n\n\n.rating-widget ul li {\n\tdisplay: block;\n\tfont-size: 16px;\n\tcolor: #b01ba5;\n\tfont-weight: 500;\n\tmargin-bottom: 10px;\n}\n\n\n\n.rating-widget ul li span {\n\tfloat: right;\n\tcolor: #68647d;\n}\n\n\n\n.rating-widget h5 {\n\ttext-align: right;\n\tfont-size: 36px;\n\tcolor: #fff;\n\tfont-weight: 900;\n\tpadding-right: 38px;\n}\n\n\n\n.rating-widget h5 i {\n\tfont-weight: 500;\n\tfont-size: 16px;\n\tfont-style: italic;\n\tcolor: #65607b;\n\ttext-transform: uppercase;\n\tmargin-right: 18px;\n}\n\n\n\n.rating-widget h5 span {\n\tcolor: #b01ba5;\n}\n\n\n\n.testimonials-widget {\n\tbackground: #34164b;\n\tpadding: 55px 0 50px;\n}\n\n\n\n.testimonials-widget .testim-text {\n\tpadding: 0 30px;\n}\n\n\n\n.testimonials-widget .testim-text p {\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tcolor: #68647d;\n\tline-height: 1.8;\n\tmargin-bottom: 40px;\n}\n\n\n\n.testimonials-widget .testim-text h6 {\n\tcolor: #68647d;\n\tpadding-left: 15px;\n}\n\n\n\n.testimonials-widget .testim-text h6 span {\n\tcolor: #b01ba5;\n}\n\n\n\n.game-author-section {\n\tbackground: #3a1854;\n\tpadding: 51px 0;\n\toverflow: hidden;\n}\n\n\n\n.game-author-pic {\n\twidth: 117px;\n\theight: 117px;\n\tborder-radius: 50%;\n\tfloat: left;\n\tmargin-right: 55px;\n}\n\n\n\n.game-author-info {\n\toverflow: hidden;\n\tpadding-top: 10px;\n}\n\n\n\n.game-author-info h4 {\n\tcolor: #fff;\n\tmargin-bottom: 20px;\n}\n\n\n\n.game-author-info h4 span {\n\tcolor: #b01ba5;\n}\n\n\n\n.game-author-info p {\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tcolor: #68647d;\n\tline-height: 1.8;\n\tmargin-bottom: 0;\n}\n\n\n\n/* ----------------\n  Review section\n---------------------*/\n\n\n\n.review-item {\n\tmargin-bottom: 87px;\n}\n\n\n\n.review-content {\n\tposition: relative;\n}\n\n\n\n.review-content h3 {\n\tmax-width: 100%;\n\tmargin-bottom: 35px;\n}\n\n\n\n.review-content p {\n\tmargin-bottom: 40px;\n}\n\n\n\n.review-content .rating {\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n}\n\n\n\n.review-content .rating h5 {\n\ttext-align: right;\n\tfont-size: 36px;\n\tcolor: #fff;\n\tfont-weight: 900;\n\tpadding-right: 38px;\n}\n\n\n\n.review-content .rating h5 i {\n\tfont-weight: 500;\n\tfont-size: 16px;\n\tfont-style: italic;\n\tcolor: #65607b;\n\ttext-transform: uppercase;\n\tmargin-right: 18px;\n}\n\n\n\n.review-content .rating h5 span {\n\tcolor: #c313b7;\n}\n\n\n\n/* ------------------\n\tBlog Page\n---------------------*/\n\n\n\n.blog-page .blog-filter {\n\tmargin-bottom: 77px;\n}\n\n\n\n.big-blog-item {\n\tmargin-bottom: 65px;\n}\n\n\n\n.big-blog-item .blog-thumbnail {\n\tmargin-bottom: 30px;\n}\n\n\n\n.big-blog-item .blog-content .top-meta {\n\tmargin-bottom: 15px;\n}\n\n\n\n.big-blog-item .blog-content h3 {\n\tmax-width: 100%;\n\tmargin-bottom: 25px;\n}\n\n\n\n.big-blog-item .blog-content p {\n\tmargin-bottom: 10px;\n}\n\n\n\n/* ----------------\n  Contact page\n---------------------*/\n\n\n\n.map iframe {\n\twidth: 100%;\n\theight: 600px;\n\tmargin-bottom: 104px;\n}\n\n\n\n.contact-form input,\n.contact-form textarea {\n\twidth: 100%;\n\tborder: none;\n\tbackground-color: transparent;\n\tborder-bottom: 2px solid rgba(255, 255, 255, 0.54);\n\tpadding-bottom: 20px;\n\tmargin-bottom: 30px;\n\tfont-weight: 500;\n\tfont-size: 16px;\n\tfont-style: italic;\n\tcolor: #fff;\n\tline-height: 1;\n}\n\n\n\n.contact-form textarea {\n\tline-height: 1.4;\n\theight: 156px;\n\tmargin-bottom: 48px;\n}\n\n\n\n.contact-form .site-btn img {\n\tleft: 5px;\n}\n\n\n\n.contact-text h3 {\n\tmargin-bottom: 25px;\n}\n\n\n\n.contact-text p {\n\tline-height: 1.9;\n\tcolor: #68647d;\n\tmargin-bottom: 50px;\n}\n\n\n\n.cont-info {\n\toverflow: hidden;\n\tmargin-bottom: 20px;\n}\n\n\n\n.cont-info .ci-icon {\n\tfloat: left;\n\twidth: 32px;\n\tmargin-right: 26px;\n}\n\n\n\n.cont-info .ci-text {\n\toverflow: hidden;\n\tfont-size: 16px;\n\tfont-weight: 500;\n}\n\n\n\n/* ----------------\n  Responsive\n---------------------*/\n\n\n\n@media (min-width: 1200px) {\n\t.container {\n\t\tmax-width: 1175px;\n\t}\n}\n\n\n\n@media (max-width: 1530px) {\n\t.hero-slider .owl-dots {\n\t\twidth: 1170px;\n\t\tleft: calc(50% - 585px);\n\t}\n}\n\n\n\n/* Medium screen : 992px. */\n\n\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n\t.blog-item .blog-thumb {\n\t\twidth: 250px;\n\t}\n\t.hero-item p {\n\t\tfont-size: 22px;\n\t}\n\t.hero-slider .owl-nav .owl-next {\n\t\tright: 30px;\n\t}\n\t.hero-slider .owl-dots {\n\t\twidth: 930px;\n\t\tleft: calc(50% - 465px);\n\t}\n\t.newsletter-form {\n\t\tpadding-left: 0;\n\t}\n\t.newsletter-form input {\n\t\twidth: 100%;\n\t\tmargin-right: 0;\n\t\tmargin-bottom: 40px;\n\t}\n\t.game-filter li {\n\t\twidth: 31px;\n\t\theight: 31px;\n\t}\n\t.game-filter li a {\n\t\tpadding-top: 5px;\n\t}\n}\n\n\n\n/* Tablet :768px. */\n\n\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n\t.header-bar-warp {\n\t\tpadding: 39px 15px 0;\n\t}\n\t.main-menu li a {\n\t\tmargin-right: 10px;\n\t}\n\t.hero-item h2 {\n\t\tfont-size: 110px;\n\t}\n\t.hero-item p {\n\t\tfont-size: 16px;\n\t\tpadding: 0 30px;\n\t}\n\t.hero-slider .owl-nav .owl-next {\n\t\tright: 0;\n\t}\n\t.hero-slider .owl-dots {\n\t\twidth: 690px;\n\t\tleft: calc(50% - 345px);\n\t}\n\t.blog-item .blog-thumb {\n\t\tfloat: none;\n\t\tmargin-right: 0;\n\t\twidth: 100%;\n\t\tmargin-bottom: 30px;\n\t}\n\t.featured-bg {\n\t\tdisplay: none;\n\t}\n\t.featured-box {\n\t\tfloat: none;\n\t\twidth: 100%;\n\t}\n\t.newsletter-form input {\n\t\twidth: 100%;\n\t\tmargin-right: 0;\n\t\tmargin-bottom: 40px;\n\t}\n\t.footer-right-pic {\n\t\tright: 15px;\n\t}\n\t.footer-left-pic {\n\t\tleft: -44px;\n\t}\n\t.game-filter {\n\t\ttext-align: center;\n\t}\n\t.game-filter li {\n\t\tmargin-bottom: 5px;\n\t}\n\t.game-single-content .gs-title {\n\t\tfont-size: 40px;\n\t}\n\t.review-pic img {\n\t\tmin-width: 100%;\n\t\tmargin-bottom: 30px;\n\t}\n\t.contact-text {\n\t\tmargin-bottom: 50px;\n\t}\n}\n\n\n\n/* Large Mobile :480px. */\n\n\n\n@media only screen and (max-width: 767px) {\n\t.header-bar-warp {\n\t\tpadding: 25px 20px 10px;\n\t}\n\t.main-menu.primary-menu {\n\t\tdisplay: none;\n\t}\n\t.slicknav_menu {\n\t\tdisplay: block;\n\t\tbackground: #081624;\n\t}\n\t.slicknav_btn {\n\t\tmargin-right: 10px;\n\t\tbackground: #3a3a3a;\n\t}\n\t.slicknav_nav a:hover,\n\t.slicknav_nav .slicknav_row:hover {\n\t\tbackground: #25394c;\n\t\tcolor: #fff;\n\t}\n\t.hero-item h2 {\n\t\tfont-size: 70px;\n\t}\n\t.hero-item p {\n\t\tfont-size: 18px;\n\t}\n\t.footer-right-pic,\n\t.footer-left-pic {\n\t\tdisplay: none;\n\t}\n\t.hero-slider .owl-nav .owl-next {\n\t\ttop: auto;\n\t\tbottom: 33px;\n\t\tright: 15px;\n\t\tz-index: 99;\n\t}\n\t.hero-slider .owl-dots {\n\t\twidth: 100%;\n\t\tleft: 0;\n\t\tpadding-left: 15px;\n\t}\n\t.intro-text-box {\n\t\tmargin-bottom: 40px;\n\t}\n\t.blog-item .blog-thumb {\n\t\tfloat: none;\n\t\tmargin-right: 0;\n\t\twidth: 100%;\n\t\tmargin-bottom: 30px;\n\t}\n\t.sidebar {\n\t\tpadding-top: 60px;\n\t}\n\t.featured-bg {\n\t\tdisplay: none;\n\t}\n\t.featured-box {\n\t\tfloat: none;\n\t\twidth: 100%;\n\t}\n\t.featured-box .text-box h3 {\n\t\tfont-size: 45px;\n\t}\n\t.newsletter-form {\n\t\tpadding-left: 0;\n\t}\n\t.newsletter-form input {\n\t\twidth: 100%;\n\t\tmargin-right: 0;\n\t\tmargin-bottom: 40px;\n\t}\n\t.video-text:after {\n\t\tleft: 0;\n\t}\n\t.page-top-section {\n\t\theight: 400px;\n\t\tpadding-top: 250px;\n\t}\n\t.game-filter {\n\t\ttext-align: center;\n\t}\n\t.game-filter li {\n\t\tmargin-bottom: 5px;\n\t}\n\t.game-single-content .gs-title {\n\t\tfont-size: 40px;\n\t}\n\t.review-pic img {\n\t\tmin-width: 100%;\n\t\tmargin-bottom: 30px;\n\t}\n\t.contact-text {\n\t\tmargin-bottom: 50px;\n\t}\n\t.review-content .rating {\n\t\tposition: relative;\n\t\tmargin-bottom: 20px;\n\t}\n\t.review-content .rating h5 {\n\t\ttext-align: left;\n\t\tpadding-right: 0;\n\t}\n}\n\n\n\n/* Small Mobile :320px. */\n\n\n\n@media only screen and (max-width: 479px) {\n\t.hero-item h2 {\n\t\tfont-size: 55px;\n\t\tmargin-bottom: 20px;\n\t}\n\t.hero-item p {\n\t\tfont-size: 15px;\n\t}\n\t.video-text h2 {\n\t\tfont-size: 30px;\n\t}\n\t.video-play-btn {\n\t\ttop: calc(30% - 61px);\n\t}\n\t.featured-box {\n\t\tpadding: 100px 15px;\n\t}\n\t.featured-box .text-box h3,\n\t.newsletter-section h2 {\n\t\tfont-size: 35px;\n\t}\n\t.main-menu li a {\n\t\tmargin-right: 20px;\n\t}\n\t.game-author-pic {\n\t\tfloat: none;\n\t\tmargin-bottom: 20px;\n\t}\n}\n\n\n\n.titulo\n{\n\tdisplay: inline-flex;\n\tfont-size: 40px;\n\tfont-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n\tfont-weight: 500;\n\tcolor: rgb(255, 255, 255);\n\tmargin-top: -5px;\n\ttext-align: center;\n\tpadding-right: 140px;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY2FiZWNlcmEvY2FiZWNlcmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7c0NBS3NDOzs7O0FBSXRDLDJDQUEyQzs7OztBQUMzQzsyQ0FDMkM7Ozs7QUFFM0M7O0NBRUMsWUFBWTtDQUNaLGlDQUFpQztDQUNqQyxtQ0FBbUM7Q0FDbkMsMkJBQTJCO0FBQzVCOzs7O0FBRUE7Ozs7OztDQU1DLFNBQVM7Q0FDVCxjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOzs7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOzs7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOzs7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOzs7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOzs7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOzs7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOzs7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7Ozs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7Ozs7QUFFQTs7OztDQUlDLGFBQWE7QUFDZDs7OztBQUVBOztDQUVDLHFCQUFxQjtDQUNyQixhQUFhO0FBQ2Q7Ozs7QUFFQTs7Q0FFQyxVQUFVO0NBQ1YsU0FBUztBQUNWOzs7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLHlCQUF5QjtBQUMxQjs7OztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7Ozs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCOzs7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLHlCQUF5QjtBQUMxQjs7OztBQUVBOzt3QkFFd0I7Ozs7QUFFeEI7Q0FDQyxlQUFlO0NBQ2YseUJBQXlCO0NBQ3pCLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7Ozs7QUFFQTtDQUNDLDRCQUE0QjtDQUM1QixzQkFBc0I7Q0FD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b21wb25lbnRlcy9jYWJlY2VyYS9jYWJlY2VyYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgRW5kR2FtIC0gR2FtaW5nIE1hZ2F6aW5lIFRlbXBsYXRlXG4gIFZlcnNpb246IDEuMFxuIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogVGVtcGxhdGUgZGVmYXVsdCBDU1Ncbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmh0bWwsXG5ib2R5IHtcblx0aGVpZ2h0OiAxMDAlO1xuXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHRmb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG5cdG1hcmdpbjogMDtcblx0Y29sb3I6ICMxMTExMTE7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmgxIHtcblx0Zm9udC1zaXplOiA3MHB4O1xufVxuXG5oMiB7XG5cdGZvbnQtc2l6ZTogMzZweDtcbn1cblxuaDMge1xuXHRmb250LXNpemU6IDMwcHg7XG59XG5cbmg0IHtcblx0Zm9udC1zaXplOiAyNHB4O1xufVxuXG5oNSB7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cblxuaDYge1xuXHRmb250LXNpemU6IDE2cHg7XG59XG5cbnAge1xuXHRmb250LXNpemU6IDE1cHg7XG5cdGNvbG9yOiAjNTg1ODU4O1xuXHRsaW5lLWhlaWdodDogMS42O1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG5pbWcge1xuXHRtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0OmZvY3VzLFxuc2VsZWN0OmZvY3VzLFxuYnV0dG9uOmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG5hOmhvdmVyLFxuYTpmb2N1cyB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0b3V0bGluZTogbm9uZTtcbn1cblxudWwsXG5vbCB7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEhlbHBlciBDU1Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLnNlY3Rpb24tdGl0bGUgaDIge1xuXHRmb250LXNpemU6IDMwcHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnNldC1iZyB7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XG59XG5cbi5zcGFkIHtcblx0cGFkZGluZy10b3A6IDEwNXB4O1xuXHRwYWRkaW5nLWJvdHRvbTogMTA1cHg7XG59XG5cbi50ZXh0LXdoaXRlIGgxLFxuLnRleHQtd2hpdGUgaDIsXG4udGV4dC13aGl0ZSBoMyxcbi50ZXh0LXdoaXRlIGg0LFxuLnRleHQtd2hpdGUgaDUsXG4udGV4dC13aGl0ZSBoNixcbi50ZXh0LXdoaXRlIHAsXG4udGV4dC13aGl0ZSBzcGFuLFxuLnRleHQtd2hpdGUgbGksXG4udGV4dC13aGl0ZSBhIHtcblx0Y29sb3I6ICNmZmY7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIENvbW1vbSBlbGVtZW50c1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vKiBidXR0b25zICovXG5cbi5zaXRlLWJ0biB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0Ym9yZGVyOiBub25lO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0bWluLXdpZHRoOiAxODZweDtcblx0cGFkZGluZzogMjRweCAzMHB4O1xuXHRib3JkZXItcmFkaXVzOiAwO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRjb2xvcjogIzA4MTYyNDtcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMTtcbn1cblxuLnNpdGUtYnRuIGltZyB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bGVmdDogMTNweDtcblx0d2lkdGg6IGF1dG8gIWltcG9ydGFudDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5zaXRlLWJ0bjphZnRlcixcbi5zaXRlLWJ0bjpiZWZvcmUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGxlZnQ6IDlweDtcblx0dG9wOiAxMHB4O1xuXHRiYWNrZ3JvdW5kOiAjYjAxYmE1O1xuXHR6LWluZGV4OiAtMjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOXB4IDNweCByZ2JhKDIyNiwgMzAsIDIyOCwgMC4yNCk7XG5cdGJveC1zaGFkb3c6IDAgMCA5cHggM3B4IHJnYmEoMjI2LCAzMCwgMjI4LCAwLjI0KTtcbn1cblxuLnNpdGUtYnRuOmJlZm9yZSB7XG5cdGxlZnQ6IDA7XG5cdHRvcDogMDtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0ei1pbmRleDogLTE7XG59XG5cbi5zaXRlLWJ0bjpob3ZlciB7XG5cdGNvbG9yOiAjMDgxNjI0O1xufVxuXG4vKiBQcmVsb2RlciAqL1xuXG4jcHJlbG9kZXIge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0ei1pbmRleDogOTk5OTk5O1xuXHRiYWNrZ3JvdW5kOiAjMDAwO1xufVxuXG4ubG9hZGVyIHtcblx0d2lkdGg6IDQwcHg7XG5cdGhlaWdodDogNDBweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDUwJTtcblx0bGVmdDogNTAlO1xuXHRtYXJnaW4tdG9wOiAtMTNweDtcblx0bWFyZ2luLWxlZnQ6IC0xM3B4O1xuXHRib3JkZXItcmFkaXVzOiA2MHB4O1xuXHRhbmltYXRpb246IGxvYWRlciAwLjhzIGxpbmVhciBpbmZpbml0ZTtcblx0LXdlYmtpdC1hbmltYXRpb246IGxvYWRlciAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBsb2FkZXIge1xuXHQwJSB7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0XHRib3JkZXI6IDRweCBzb2xpZCAjZjQ0MzM2O1xuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuXHQ1MCUge1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuXHRcdGJvcmRlcjogNHB4IHNvbGlkICM2NzNhYjc7XG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG5cdDEwMCUge1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuXHRcdGJvcmRlcjogNHB4IHNvbGlkICNmNDQzMzY7XG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkZXIge1xuXHQwJSB7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0XHRib3JkZXI6IDRweCBzb2xpZCAjZjQ0MzM2O1xuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuXHQ1MCUge1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcblx0XHRib3JkZXI6IDRweCBzb2xpZCAjNjczYWI3O1xuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuXHQxMDAlIHtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdFx0Ym9yZGVyOiA0cHggc29saWQgI2Y0NDMzNjtcblx0XHRib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS1cbiAgSGVhZGVyIHNlY3Rpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5oZWFkZXItc2VjdGlvbiB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGxlZnQ6IDA7XG5cdHRvcDogLTYwcHg7XG5cdHotaW5kZXg6IDk5O1xuXHRwYWRkaW5nOiA1MHB4IDUwcHggMDtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4uLy4uLy4uL2RvY3MvYXNzZXRzL2ltYWdlbmVzL2NhYmVjZXJhLnBuZ1wiKTtcblx0aGVpZ2h0OiAzMyU7XG5cdFxuXG59XG5cbi5oZWFkZXItd2FycCB7XG5cdG1heC13aWR0aDogMTQ5NnB4O1xuXHRtYXJnaW46IDAgYXV0bztcbn1cblxuLmhlYWRlci1zb2NpYWwgcCxcbi5mb290ZXItc29jaWFsIHAsXG4uZ2VtZS1zb2NpYWwtc2hhcmUgcCB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0Y29sb3I6ICM5MTkwYTU7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0cGFkZGluZy10b3A6IDRweDtcbn1cblxuLmhlYWRlci1zb2NpYWwgYSxcbi5mb290ZXItc29jaWFsIGEsXG4uZ2VtZS1zb2NpYWwtc2hhcmUgYSB7XG5cdGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleDtcblx0ZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuXHRkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHR3aWR0aDogMzJweDtcblx0aGVpZ2h0OiAzMnB4O1xuXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHQtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG5cdC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0bWFyZ2luLWxlZnQ6IDEzcHg7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmhlYWRlci1zb2NpYWwgYTpob3Zlcixcbi5mb290ZXItc29jaWFsIGE6aG92ZXIsXG4uZ2VtZS1zb2NpYWwtc2hhcmUgYTpob3ZlciB7XG5cdGJhY2tncm91bmQ6ICNiMDFiYTU7XG59XG5cbi5oZWFkZXItYmFyLXdhcnAge1xuXHRwYWRkaW5nOiAxN3B4IDQwcHggMDtcblx0XG5cdFxufVxuXG4uc2l0ZS1sb2dvIHtcblx0ZmxvYXQ6IGxlZnQ7XG59XG5cbi51c2VyLXBhbmVsIHtcblx0ZmxvYXQ6IHJpZ2h0O1xuXHRmb250LXNpemU6IDIwcHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFxuXHRwYWRkaW5nLXRvcDogM3B4O1xuXHRkaXNwbGF5OiBncmlkO1xuXHRtYXJnaW4tdG9wOiA1cHg7XG5cdG1hcmdpbi1yaWdodDogLTY2cHg7XG5cdFxufVxuXG4udXNlci1wYW5lbCBhIHtcblx0Y29sb3I6IHJnYigyNTUsIDI1MSwgNCk7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzZXItcGFuZWwgYTpob3ZlciB7XG5cdGNvbG9yOiAjYjAxYmE1O1xufVxuXG4ubWFpbi1tZW51IHtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwYWRkaW5nLXRvcDogMjVweDtcblx0ZGlzcGxheTppbmxpbmU7XG59XG5cbi5tYWluLW1lbnUgbGkge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1haW4tbWVudSBsaSBhIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogMzBweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y29sb3I6IHJnYig0MSwgMjUwLCAxNCk7XG5cdG1hcmdpbi1yaWdodDogMTBweDtcblx0cGFkZGluZy1ib3R0b206IDIwcHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLm1haW4tbWVudSBsaSBhOmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0d2lkdGg6IDIwcHg7XG5cdGhlaWdodDogMjBweDtcblx0cmlnaHQ6IDA7XG5cdHRvcDogMXB4O1xuXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcbn1cblxuLm1haW4tbWVudSBsaSBhIGkge1xuXHRjb2xvcjogIzkyOGQ5Mjtcblx0bWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLm1haW4tbWVudSBsaSBhOmhvdmVyIHtcblx0Y29sb3I6ICNiMDFiYTU7XG59XG5cbi5tYWluLW1lbnUgbGkgYTpob3ZlcjphZnRlciB7XG4gICAgY29sb3I6ICMwMDBcbn1cblxuLm1haW4tbWVudSBsaSBhOmhvdmVyIGkge1xuXHRjb2xvcjogI2IwMWJhNTtcbn1cblxuLm1haW4tbWVudSBsaTpob3ZlciAuc3ViLW1lbnUge1xuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHRvcGFjaXR5OiAxO1xuXHRtYXJnaW4tdG9wOiAwO1xuXHRcbn1cblxuLm1haW4tbWVudSBsaTpob3Zlcj5hIHtcblx0Y29sb3I6ICNiMDFiYTU7XG59XG5cbi5tYWluLW1lbnUgbGk6aG92ZXI+YTphZnRlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxOTBkMzZcbn1cblxuLm1haW4tbWVudSBsaSAuc3ViLW1lbnUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0d2lkdGg6IDIwMHB4O1xuXHRsZWZ0OiAwO1xuXHR0b3A6IDEwMCU7XG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0b3BhY2l0eTogMDtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0YmFja2dyb3VuZDogcmdiKDIzMywgMjUwLCAwKTtcblx0ei1pbmRleDogOTk7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC40cztcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuXHRib3gtc2hhZG93OiAycHggN3B4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ubWFpbi1tZW51IGxpIC5zdWItbWVudSBsaSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWFpbi1tZW51IGxpIC5zdWItbWVudSBsaSBhIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGNvbG9yOiAjMDAwO1xuXHRtYXJnaW4tcmlnaHQ6IDA7XG5cdHBhZGRpbmc6IDhweCAzMHB4O1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbi5tYWluLW1lbnUgbGkgLnN1Yi1tZW51IGxpIGE6YWZ0ZXIge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4ubWFpbi1tZW51IGxpIC5zdWItbWVudSBsaSBhOmhvdmVyIHtcblx0Y29sb3I6ICNiMDFiYTU7XG59XG5cbi5zbGlja25hdl9tZW51IHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS1cbiAgSGVybyBzZWN0aW9uXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaGVyby1zbGlkZXIgLm93bC1kb3RzIHtcblx0ZGlzcGxheTogLW1zLWZsZXg7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcblx0ei1pbmRleDogMjtcblx0bGVmdDogY2FsYyg1MCUgLSA3NDBweCk7XG5cdGJvdHRvbTogMzhweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogMTQ5NnB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5oZXJvLXNsaWRlciAub3dsLWRvdHMgLm93bC1kb3Qge1xuXHR3aWR0aDogNDRweDtcblx0aGVpZ2h0OiA0NHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGNvbG9yOiAjZmZmO1xuXHRkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXg7XG5cdGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcblx0ZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcblx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0LXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuXHQtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGVyby1zbGlkZXIgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSB7XG5cdGNvbG9yOiAjYjAxYmE1O1xuXHRib3JkZXI6IDJweCBzb2xpZCAjYjAxYmE1O1xufVxuXG4uaGVyby1zbGlkZXIgLm93bC1uYXYge1xuXHRtYXJnaW4tdG9wOiAtMjRweDtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi5oZXJvLXNsaWRlciAub3dsLW5hdiAub3dsLW5leHQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNTAlO1xuXHRyaWdodDogMTAwcHg7XG59XG5cbi5oZXJvLWl0ZW0ge1xuXHRoZWlnaHQ6IDkyMXB4O1xuXHRwYWRkaW5nLXRvcDogMTI1cHg7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjAxYmE1O1xufVxuXG4uaGVyby1pdGVtIGgyIHtcblx0Zm9udC1zaXplOiAxNjBweDtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGxpbmUtaGVpZ2h0OiAxO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRvcDogMTAwcHg7XG5cdG9wYWNpdHk6IDA7XG59XG5cbi5oZXJvLWl0ZW0gcCB7XG5cdGZvbnQtc2l6ZTogMjRweDtcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0b3BhY2l0eTogMC4zOTtcblx0bWFyZ2luLWJvdHRvbTogNzBweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IDgwcHg7XG5cdG9wYWNpdHk6IDA7XG59XG5cbi5oZXJvLWl0ZW0gLnNpdGUtYnRuIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IDUwcHg7XG5cdG9wYWNpdHk6IDA7XG59XG5cbi5oZXJvLXNsaWRlciAub3dsLWl0ZW0uYWN0aXZlIC5oZXJvLWl0ZW0gaDIsXG4uaGVyby1zbGlkZXIgLm93bC1pdGVtLmFjdGl2ZSAuaGVyby1pdGVtIHAsXG4uaGVyby1zbGlkZXIgLm93bC1pdGVtLmFjdGl2ZSAuaGVyby1pdGVtIC5zaXRlLWJ0biB7XG5cdHRvcDogMDtcblx0b3BhY2l0eTogMTtcbn1cblxuLmhlcm8tc2xpZGVyIC5vd2wtaXRlbS5hY3RpdmUgLmhlcm8taXRlbSBoMiB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwLjRzO1xuXHQtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDAuNHM7XG5cdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMC40cztcbn1cblxuLmhlcm8tc2xpZGVyIC5vd2wtaXRlbS5hY3RpdmUgLmhlcm8taXRlbSBwIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDAuNnM7XG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMC42cztcblx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwLjZzO1xufVxuXG4uaGVyby1zbGlkZXIgLm93bC1pdGVtLmFjdGl2ZSAuaGVyby1pdGVtIC5zaXRlLWJ0biB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwLjhzO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMC44cztcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwLjhzO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDAuOHM7XG59XG5cbi5oZXJvLXNsaWRlciAub3dsLWl0ZW0uYWN0aXZlIC5oZXJvLWl0ZW0gLm9mZmVyLWNhcmQge1xuXHRvcGFjaXR5OiAxO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMXM7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAxcztcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAxcztcblx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAxcztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLVxuICBJbnRybyBzZWN0aW9uXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaW50cm8tc2VjdGlvbiB7XG5cdGJhY2tncm91bmQ6ICMwYzA2MmU7XG5cdHBhZGRpbmc6IDExNXB4IDA7XG59XG5cbi50ZXh0LWJveCAudG9wLW1ldGEge1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50ZXh0LWJveCAudG9wLW1ldGEgYSB7XG5cdGNvbG9yOiAjYjAxYmE1O1xufVxuXG4udGV4dC1ib3ggaDMge1xuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xuXHRtYXgtd2lkdGg6IDM3MHB4O1xufVxuXG4udGV4dC1ib3ggcCB7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y29sb3I6ICM2ODY0N2Q7XG5cdG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi50ZXh0LWJveCAucmVhZC1tb3JlIHtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGNvbG9yOiAjZmZmO1xufVxuXG4udGV4dC1ib3ggLnJlYWQtbW9yZSBpbWcge1xuXHRtYXJnaW4tbGVmdDogMTNweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLVxuIEJsb2cgU2VjdGlvblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmJsb2ctc2VjdGlvbiB7XG5cdC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyM1MDE3NTUrMCwyZDE4NTQrMTAwICovXG5cdGJhY2tncm91bmQ6ICM1MDE3NTU7XG5cdC8qIE9sZCBicm93c2VycyAqL1xuXHQvKiBGRjMuNi0xNSAqL1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzUwMTc1NSAwJSwgIzJkMTg1NCAxMDAlKTtcblx0LyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cblx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTAxNzU1IDAlLCAjMmQxODU0IDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MDE3NTUgMCUsICMyZDE4NTQgMTAwJSk7XG5cdC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzUwMTc1NScsIGVuZENvbG9yc3RyPScjMmQxODU0JywgR3JhZGllbnRUeXBlPTEpO1xuXHQvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXG59XG5cbi5ibG9nLXNlY3Rpb24gLnNlY3Rpb24tdGl0bGUge1xuXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uYmxvZy1maWx0ZXIge1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLmJsb2ctZmlsdGVyIGxpIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYmxvZy1maWx0ZXIgbGkgYSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRjb2xvcjogI2ZmZjtcblx0cGFkZGluZzogMTZweCAzNnB4O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGJhY2tncm91bmQ6ICM2ZjJiOTU7XG5cdGxpbmUtaGVpZ2h0OiAxLjE7XG5cdG1hcmdpbi1yaWdodDogN3B4O1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcblx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5ibG9nLWZpbHRlciBsaSBhOmhvdmVyIHtcblx0YmFja2dyb3VuZDogI2IwMWJhNTtcbn1cblxuLmJsb2ctaXRlbSB7XG5cdG1hcmdpbi10b3A6IDg2cHg7XG59XG5cbi5ibG9nLWl0ZW0gLmJsb2ctdGh1bWIge1xuXHR3aWR0aDogMzYycHg7XG5cdGZsb2F0OiBsZWZ0O1xuXHRtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi5ibG9nLWl0ZW0gLnRleHQtYm94IHtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJsb2ctaXRlbSAudGV4dC1ib3ggcCB7XG5cdG1hcmdpbi1ib3R0b206IDQycHg7XG59XG5cbi53aWRnZXQtaXRlbSB7XG5cdG1hcmdpbi1ib3R0b206IDg1cHg7XG59XG5cbi53aWRnZXQtaXRlbTpsYXN0LWNoaWxkIHtcblx0bWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLndpZGdldC1pdGVtIC53aWRnZXQtdGl0bGUge1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRwYWRkaW5nLWxlZnQ6IDM4cHg7XG5cdG1hcmdpbi1ib3R0b206IDQ4cHg7XG59XG5cbi50cmVuZGluZy13aWRnZXQgLnR3LWl0ZW0ge1xuXHRtYXJnaW4tYm90dG9tOiAzOHB4O1xufVxuXG4udHJlbmRpbmctd2lkZ2V0IC50dy1pdGVtOmxhc3QtY2hpbGQge1xuXHRtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udHJlbmRpbmctd2lkZ2V0IC50dy10aHVtYiB7XG5cdGZsb2F0OiBsZWZ0O1xuXHRtYXJnaW4tcmlnaHQ6IDE3cHg7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50cmVuZGluZy13aWRnZXQgLnR3LXRleHQgLnR3LW1ldGEge1xuXHRjb2xvcjogIzY4NjQ3ZDtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5cbi50cmVuZGluZy13aWRnZXQgLnR3LXRleHQgLnR3LW1ldGEgYSB7XG5cdGNvbG9yOiAjYjAxYmE1O1xufVxuXG4udHJlbmRpbmctd2lkZ2V0IC50dy10ZXh0IGg1IHtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0bGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmNhdGVnb3JpZXMtd2lkZ2V0IHtcblx0YmFja2dyb3VuZDogIzM0MTY0Yjtcblx0cGFkZGluZzogNTVweCAwIDI1cHg7XG59XG5cbi5jYXRlZ29yaWVzLXdpZGdldCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdHBhZGRpbmc6IDAgMzhweDtcbn1cblxuLmNhdGVnb3JpZXMtd2lkZ2V0IHVsIGxpIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYXRlZ29yaWVzLXdpZGdldCB1bCBsaSBhIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6ICM2ODY0N2Q7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdHBhZGRpbmctcmlnaHQ6IDE5cHg7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjJzO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycztcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgLTEyMCUgY2VudGVyO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDExcHg7XG59XG5cbi5jYXRlZ29yaWVzLXdpZGdldCB1bCBsaSBhOmhvdmVyIHtcblx0Y29sb3I6ICNiMDFiYTU7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcbn1cblxuLnNlYXJjaC13aWRnZXQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZWFyY2gtd2lkZ2V0IGlucHV0IHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogNDBweDtcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgIzcyNjI4Yjtcblx0YmFja2dyb3VuZDogbm9uZTtcblx0cGFkZGluZy1yaWdodDogNjBweDtcblx0Y29sb3I6ICNmZmY7XG59XG5cbi5zZWFyY2gtd2lkZ2V0IGJ1dHRvbiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDA7XG5cdHRvcDogMDtcblx0Y29sb3I6ICNiMDFiYTU7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdGJvcmRlcjogbm9uZTtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmxhdGVzdC1jb21tZW50cyAubGMtaXRlbSB7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5sYXRlc3QtY29tbWVudHMgLmxjLWl0ZW06bGFzdC1jaGlsZCB7XG5cdG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5sYXRlc3QtY29tbWVudHMgLmxjLWl0ZW0gLmxjLWF2YXRhciB7XG5cdHdpZHRoOiA2NHB4O1xuXHRoZWlnaHQ6IDY0cHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0ZmxvYXQ6IGxlZnQ7XG5cdG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmxhdGVzdC1jb21tZW50cyAubGMtaXRlbSAudHctdGV4dCB7XG5cdHBhZGRpbmctdG9wOiAxMHB4O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG4ubGF0ZXN0LWNvbW1lbnRzIC5sYy1pdGVtIC50dy10ZXh0IGEge1xuXHRjb2xvcjogI2IwMWJhNTtcbn1cblxuLmxhdGVzdC1jb21tZW50cyAubGMtaXRlbSAudHctdGV4dCBzcGFuIHtcblx0Y29sb3I6ICM2ODY0N2Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEludHJvIHZpZGVvIHNlY3Rpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmludHJvLXZpZGVvLXNlY3Rpb24ge1xuXHRoZWlnaHQ6IDc1N3B4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi52aWRlby1wbGF5LWJ0biB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogY2FsYyg1MCUgLSA2MXB4KTtcblx0dG9wOiBjYWxjKDUwJSAtIDYxcHgpO1xuXHR3aWR0aDogMTIycHg7XG5cdGhlaWdodDogMTIycHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZy10b3A6IDM1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KTtcbn1cblxuLnZpZGVvLXRleHQge1xuXHRtYXJnaW4tYm90dG9tOiA4MHB4O1xuXHRwYWRkaW5nOiAyN3B4IDA7XG5cdHBhZGRpbmctbGVmdDogMjVweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udmlkZW8tdGV4dCBoMiB7XG5cdGZvbnQtc2l6ZTogNDhweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRjb2xvcjogI2ZmZjtcblx0bWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4udmlkZW8tdGV4dCBwIHtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRjb2xvcjogI2EzYTFiMztcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0bWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnZpZGVvLXRleHQ6YWZ0ZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHdpZHRoOiA5cHg7XG5cdGhlaWdodDogMTAwJTtcblx0bGVmdDogLTIycHg7XG5cdHRvcDogMDtcblx0Ym9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZGU0NmQ2O1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA5cHggM3B4IHJnYmEoMjI2LCAzMCwgMjI4LCAwLjUpO1xuXHRib3gtc2hhZG93OiAwIDAgOXB4IDNweCByZ2JhKDIyNiwgMzAsIDIyOCwgMC41KTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLVxuICBGZWF0dXJlZCBzZWN0aW9uXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uZmVhdHVyZWQtc2VjdGlvbiB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZlYXR1cmVkLWJnIHtcblx0d2lkdGg6IGNhbGMoNTAlIC0gMTU2cHgpO1xuXHRmbG9hdDogbGVmdDtcblx0aGVpZ2h0OiAxMDAlO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZmVhdHVyZWQtYm94IHtcblx0ZmxvYXQ6IHJpZ2h0O1xuXHR3aWR0aDogY2FsYyg1MCUgKyAxNTZweCk7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdHBhZGRpbmc6IDEwMHB4IDUwcHggMTMwcHggNzlweDtcbn1cblxuLmZlYXR1cmVkLWJveCAudGV4dC1ib3gge1xuXHRtYXgtd2lkdGg6IDgxMHB4O1xufVxuXG4uZmVhdHVyZWQtYm94IC50ZXh0LWJveCAudG9wLW1ldGEge1xuXHRjb2xvcjogIzY4NjQ3ZDtcbn1cblxuLmZlYXR1cmVkLWJveCAudGV4dC1ib3ggaDMge1xuXHRmb250LXNpemU6IDYwcHg7XG5cdG1heC13aWR0aDogMTAwJTtcbn1cblxuLmZlYXR1cmVkLWJveCAudGV4dC1ib3ggcCB7XG5cdGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZlYXR1cmVkLWJveCAudGV4dC1ib3ggLnJlYWQtbW9yZSB7XG5cdGNvbG9yOiAjMjUxZTJmO1xufVxuXG4uZ3JhZGllbnQtYmcsXG4ubmV3c2xldHRlci1zZWN0aW9uIHtcblx0YmFja2dyb3VuZDogIzNlMGYzZDtcblx0LyogT2xkIGJyb3dzZXJzICovXG5cdC8qIEZGMy42LTE1ICovXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMzZTBmM2QgMCUsICMxYzBmM2IgMTAwJSk7XG5cdC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCMzZTBmM2QpLCB0bygjMWMwZjNiKSk7XG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjM2UwZjNkIDAlLCAjMWMwZjNiIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzZTBmM2QgMCUsICMxYzBmM2IgMTAwJSk7XG5cdC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzNlMGYzZCcsIGVuZENvbG9yc3RyPScjMWMwZjNiJywgR3JhZGllbnRUeXBlPTEpO1xuXHQvKiBJRTYtOSAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBOZXdzbGV0dGVyIHNlY3Rpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4ubmV3c2xldHRlci1zZWN0aW9uIHtcblx0cGFkZGluZzogMTA4cHggMCA5NXB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXdzbGV0dGVyLXNlY3Rpb24gaDIge1xuXHRmb250LXNpemU6IDQ4cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdG1hcmdpbi1ib3R0b206IDczcHg7XG59XG5cbi5uZXdzbGV0dGVyLWZvcm0ge1xuXHRwYWRkaW5nLWxlZnQ6IDU2cHg7XG59XG5cbi5uZXdzbGV0dGVyLWZvcm0gaW5wdXQge1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0Y29sb3I6ICNmZmY7XG5cdHdpZHRoOiA3ODdweDtcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgIzliOTFhNjtcblx0YmFja2dyb3VuZDogbm9uZTtcblx0aGVpZ2h0OiA2M3B4O1xuXHRtYXJnaW4tcmlnaHQ6IDI2cHg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS1cbiAgRm9vdGVyIHNlY3Rpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5mb290ZXItc2VjdGlvbiB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0LyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzMzMGQzOCswLDE5MGQzNisxMDAgKi9cblx0YmFja2dyb3VuZDogIzMzMGQzODtcblx0LyogT2xkIGJyb3dzZXJzICovXG5cdC8qIEZGMy42LTE1ICovXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMzMzBkMzggMCUsICMxOTBkMzYgMTAwJSk7XG5cdC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCMzMzBkMzgpLCB0bygjMTkwZDM2KSk7XG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMzMwZDM4IDAlLCAjMTkwZDM2IDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzMzBkMzggMCUsICMxOTBkMzYgMTAwJSk7XG5cdC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzMzMGQzOCcsIGVuZENvbG9yc3RyPScjMTkwZDM2JywgR3JhZGllbnRUeXBlPTEpO1xuXHQvKiBJRTYtOSAqL1xufVxuXG4uZm9vdGVyLXNlY3Rpb24gLmNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZzogNjBweCAxNXB4IDI1cHg7XG59XG5cbi5mb290ZXItbGVmdC1waWMge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IC0xM3B4O1xuXHRib3R0b206IDE5cHg7XG59XG5cbi5mb290ZXItcmlnaHQtcGljIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogNTBweDtcblx0Ym90dG9tOiAxOXB4O1xufVxuXG4uZm9vdGVyLW1lbnUge1xuXHRwYWRkaW5nLXRvcDogNjJweDtcbn1cblxuLmZvb3Rlci1tZW51IGxpOmxhc3QtY2hpbGQgYSB7XG5cdG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmZvb3Rlci1zb2NpYWwge1xuXHRwYWRkaW5nLXRvcDogMjBweDtcblx0cGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbi5mb290ZXItc29jaWFsIGE6Zmlyc3QtY2hpbGQge1xuXHRtYXJnaW4tbGVmdDogMDtcbn1cblxuLmNvcHlyaWdodCB7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y29sb3I6ICM5MTkwYTU7XG5cdG9wYWNpdHk6IDAuMjA7XG59XG5cbi5jb3B5cmlnaHQgYSB7XG5cdGNvbG9yOiAjOTE5MGE1O1xufVxuXG4uY29weXJpZ2h0IGE6aG92ZXIge1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLVxuICBPdGhlciBQYWdlc1xuPT09PT09PT09PT09PT09PT09PT09XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4ucGFnZS10b3Atc2VjdGlvbiB7XG5cdGhlaWdodDogMzU1cHg7XG5cdHBhZGRpbmctdG9wOiAyMTBweDtcbn1cblxuLnBhZ2UtaW5mbyB7XG5cdG1heC13aWR0aDogMTQ5NnB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogI2ZmZjtcblx0cGFkZGluZy1sZWZ0OiA2MHB4O1xufVxuXG4ucGFnZS1pbmZvIGgyIHtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc2l6ZTogNDhweDtcbn1cblxuLnNpdGUtYnJlYWRjcnVtYiBhLFxuLnNpdGUtYnJlYWRjcnVtYiBzcGFuIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRjb2xvcjogI2ZmZjtcblx0bWFyZ2luOiAwIDEwcHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zaXRlLWJyZWFkY3J1bWIgYTpmaXJzdC1jaGlsZCB7XG5cdG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2l0ZS1icmVhZGNydW1iIHNwYW4ge1xuXHRjb2xvcjogI2MzMTNiNztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS1cbiAgR2FtZXMgUGFnZVxuLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uZ2FtZXMtc2VjdGlvbiB7XG5cdHBhZGRpbmc6IDEwOHB4IDA7XG5cdC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyM1MDE3NTUrMCwyZDE4NTQrMTAwICovXG5cdGJhY2tncm91bmQ6ICM1MDE3NTU7XG5cdC8qIE9sZCBicm93c2VycyAqL1xuXHQvKiBGRjMuNi0xNSAqL1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzUwMTc1NSAwJSwgIzJkMTg1NCAxMDAlKTtcblx0LyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cblx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTAxNzU1IDAlLCAjMmQxODU0IDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MDE3NTUgMCUsICMyZDE4NTQgMTAwJSk7XG5cdC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzUwMTc1NScsIGVuZENvbG9yc3RyPScjMmQxODU0JywgR3JhZGllbnRUeXBlPTEpO1xuXHQvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXG59XG5cbi5nYW1lLWZpbHRlciB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdG1hcmdpbi1ib3R0b206IDgycHg7XG59XG5cbi5nYW1lLWZpbHRlciBsaSB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0d2lkdGg6IDQwcHg7XG5cdGhlaWdodDogMzRweDtcblx0YmFja2dyb3VuZDogIzUwM2M2ZTtcblx0Ym9yZGVyLXJhZGl1czogMTdweDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4uZ2FtZS1maWx0ZXIgbGk6aG92ZXIge1xuXHRiYWNrZ3JvdW5kOiAjYzMxM2I3O1xufVxuXG4uZ2FtZS1maWx0ZXIgbGkgYSB7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Y29sb3I6ICNmZmY7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmctdG9wOiA3cHg7XG59XG5cbi5nYW1lLWl0ZW0ge1xuXHRtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuXG4uZ2FtZS1pdGVtIGg1IHtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0cGFkZGluZy10b3A6IDMwcHg7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5nYW1lLWl0ZW0gLnJlYWQtbW9yZSB7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRjb2xvcjogI2IwMWJhNTtcbn1cblxuLmdhbWUtaXRlbSAucmVhZC1tb3JlIGltZyB7XG5cdG1hcmdpbi1sZWZ0OiAxM3B4O1xufVxuXG4uc2l0ZS1wYWdpbmF0aW9uIHtcblx0ZGlzcGxheTogLW1zLWZsZXg7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcbn1cblxuLnNpdGUtcGFnaW5hdGlvbiBhIHtcblx0d2lkdGg6IDM4cHg7XG5cdGhlaWdodDogNDRweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRjb2xvcjogI2ZmZjtcblx0ZGlzcGxheTogLW1zLWlubGluZS1mbGV4O1xuXHRkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG5cdGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG5cdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcblx0LW1zLWZsZXgtcGFjazogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG5cdHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4uc2l0ZS1wYWdpbmF0aW9uIGEuYWN0aXZlIHtcblx0d2lkdGg6IDQ0cHg7XG5cdG1hcmdpbjogMCAxMHB4O1xuXHRjb2xvcjogI2IwMWJhNTtcblx0Ym9yZGVyOiAycHggc29saWQgI2IwMWJhNTtcbn1cblxuLnNpdGUtcGFnaW5hdGlvbiBhLmFjdGl2ZTpmaXJzdC1jaGlsZCB7XG5cdG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uZ2FtZS1wYWdlLXNpZGViZXIgLndpZGdldC1pdGVtIHtcblx0bWFyZ2luLWJvdHRvbTogNTVweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEdhbWUgc2luZ2xlIFBhZ2Vcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5nYW1lcy1zaW5nbGUtcGFnZSxcbi5yZXZpZXctc2VjdGlvbixcbi5ibG9nLXBhZ2UsXG4uY29udGFjdC1wYWdlIHtcblx0cGFkZGluZzogMTA0cHggMDtcblx0LyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzUwMTc1NSswLDJkMTg1NCsxMDAgKi9cblx0YmFja2dyb3VuZDogIzUwMTc1NTtcblx0LyogT2xkIGJyb3dzZXJzICovXG5cdC8qIEZGMy42LTE1ICovXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTAxNzU1IDAlLCAjMmQxODU0IDEwMCUpO1xuXHQvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MDE3NTUgMCUsICMyZDE4NTQgMTAwJSk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzUwMTc1NSAwJSwgIzJkMTg1NCAxMDAlKTtcblx0LyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG5cdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjNTAxNzU1JywgZW5kQ29sb3JzdHI9JyMyZDE4NTQnLCBHcmFkaWVudFR5cGU9MSk7XG5cdC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cbn1cblxuLmdhbWUtc2luZ2xlLXByZXZpZXcge1xuXHRtYXJnaW4tYm90dG9tOiAxMDhweDtcbn1cblxuLmdhbWUtc2luZ2xlLWNvbnRlbnQgLmdzLW1ldGEge1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGNvbG9yOiAjNjg2NDdkO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZ2FtZS1zaW5nbGUtY29udGVudCAuZ3MtbWV0YSBhIHtcblx0Y29sb3I6ICNiMDFiYTU7XG59XG5cbi5nYW1lLXNpbmdsZS1jb250ZW50IC5ncy10aXRsZSB7XG5cdGZvbnQtc2l6ZTogNjBweDtcblx0Y29sb3I6ICNmZmY7XG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5nYW1lLXNpbmdsZS1jb250ZW50IGg0IHtcblx0Y29sb3I6ICNiMDFiYTU7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5nYW1lLXNpbmdsZS1jb250ZW50IHAge1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGNvbG9yOiAjNjg2NDdkO1xuXHRsaW5lLWhlaWdodDogMS44O1xuXHRtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuXG4ucmF0aW5nLXdpZGdldCB7XG5cdGJhY2tncm91bmQ6ICMzNDE2NGI7XG5cdHBhZGRpbmc6IDU1cHggMCAzMHB4O1xufVxuXG4ucmF0aW5nLXdpZGdldCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdHBhZGRpbmc6IDAgMzhweDtcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnJhdGluZy13aWRnZXQgdWwgbGkge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogI2IwMWJhNTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnJhdGluZy13aWRnZXQgdWwgbGkgc3BhbiB7XG5cdGZsb2F0OiByaWdodDtcblx0Y29sb3I6ICM2ODY0N2Q7XG59XG5cbi5yYXRpbmctd2lkZ2V0IGg1IHtcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdGZvbnQtc2l6ZTogMzZweDtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdHBhZGRpbmctcmlnaHQ6IDM4cHg7XG59XG5cbi5yYXRpbmctd2lkZ2V0IGg1IGkge1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0Y29sb3I6ICM2NTYwN2I7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdG1hcmdpbi1yaWdodDogMThweDtcbn1cblxuLnJhdGluZy13aWRnZXQgaDUgc3BhbiB7XG5cdGNvbG9yOiAjYjAxYmE1O1xufVxuXG4udGVzdGltb25pYWxzLXdpZGdldCB7XG5cdGJhY2tncm91bmQ6ICMzNDE2NGI7XG5cdHBhZGRpbmc6IDU1cHggMCA1MHB4O1xufVxuXG4udGVzdGltb25pYWxzLXdpZGdldCAudGVzdGltLXRleHQge1xuXHRwYWRkaW5nOiAwIDMwcHg7XG59XG5cbi50ZXN0aW1vbmlhbHMtd2lkZ2V0IC50ZXN0aW0tdGV4dCBwIHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRjb2xvcjogIzY4NjQ3ZDtcblx0bGluZS1oZWlnaHQ6IDEuODtcblx0bWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnRlc3RpbW9uaWFscy13aWRnZXQgLnRlc3RpbS10ZXh0IGg2IHtcblx0Y29sb3I6ICM2ODY0N2Q7XG5cdHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLnRlc3RpbW9uaWFscy13aWRnZXQgLnRlc3RpbS10ZXh0IGg2IHNwYW4ge1xuXHRjb2xvcjogI2IwMWJhNTtcbn1cblxuLmdhbWUtYXV0aG9yLXNlY3Rpb24ge1xuXHRiYWNrZ3JvdW5kOiAjM2ExODU0O1xuXHRwYWRkaW5nOiA1MXB4IDA7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5nYW1lLWF1dGhvci1waWMge1xuXHR3aWR0aDogMTE3cHg7XG5cdGhlaWdodDogMTE3cHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0ZmxvYXQ6IGxlZnQ7XG5cdG1hcmdpbi1yaWdodDogNTVweDtcbn1cblxuLmdhbWUtYXV0aG9yLWluZm8ge1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmdhbWUtYXV0aG9yLWluZm8gaDQge1xuXHRjb2xvcjogI2ZmZjtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmdhbWUtYXV0aG9yLWluZm8gaDQgc3BhbiB7XG5cdGNvbG9yOiAjYjAxYmE1O1xufVxuXG4uZ2FtZS1hdXRob3ItaW5mbyBwIHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRjb2xvcjogIzY4NjQ3ZDtcblx0bGluZS1oZWlnaHQ6IDEuODtcblx0bWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLVxuICBSZXZpZXcgc2VjdGlvblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLnJldmlldy1pdGVtIHtcblx0bWFyZ2luLWJvdHRvbTogODdweDtcbn1cblxuLnJldmlldy1jb250ZW50IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucmV2aWV3LWNvbnRlbnQgaDMge1xuXHRtYXgtd2lkdGg6IDEwMCU7XG5cdG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi5yZXZpZXctY29udGVudCBwIHtcblx0bWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnJldmlldy1jb250ZW50IC5yYXRpbmcge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiAwO1xuXHR0b3A6IDA7XG59XG5cbi5yZXZpZXctY29udGVudCAucmF0aW5nIGg1IHtcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdGZvbnQtc2l6ZTogMzZweDtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdHBhZGRpbmctcmlnaHQ6IDM4cHg7XG59XG5cbi5yZXZpZXctY29udGVudCAucmF0aW5nIGg1IGkge1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0Y29sb3I6ICM2NTYwN2I7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdG1hcmdpbi1yaWdodDogMThweDtcbn1cblxuLnJldmlldy1jb250ZW50IC5yYXRpbmcgaDUgc3BhbiB7XG5cdGNvbG9yOiAjYzMxM2I3O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS1cblx0QmxvZyBQYWdlXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uYmxvZy1wYWdlIC5ibG9nLWZpbHRlciB7XG5cdG1hcmdpbi1ib3R0b206IDc3cHg7XG59XG5cbi5iaWctYmxvZy1pdGVtIHtcblx0bWFyZ2luLWJvdHRvbTogNjVweDtcbn1cblxuLmJpZy1ibG9nLWl0ZW0gLmJsb2ctdGh1bWJuYWlsIHtcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmJpZy1ibG9nLWl0ZW0gLmJsb2ctY29udGVudCAudG9wLW1ldGEge1xuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uYmlnLWJsb2ctaXRlbSAuYmxvZy1jb250ZW50IGgzIHtcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uYmlnLWJsb2ctaXRlbSAuYmxvZy1jb250ZW50IHAge1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tXG4gIENvbnRhY3QgcGFnZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLm1hcCBpZnJhbWUge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiA2MDBweDtcblx0bWFyZ2luLWJvdHRvbTogMTA0cHg7XG59XG5cbi5jb250YWN0LWZvcm0gaW5wdXQsXG4uY29udGFjdC1mb3JtIHRleHRhcmVhIHtcblx0d2lkdGg6IDEwMCU7XG5cdGJvcmRlcjogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQpO1xuXHRwYWRkaW5nLWJvdHRvbTogMjBweDtcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGNvbG9yOiAjZmZmO1xuXHRsaW5lLWhlaWdodDogMTtcbn1cblxuLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XG5cdGxpbmUtaGVpZ2h0OiAxLjQ7XG5cdGhlaWdodDogMTU2cHg7XG5cdG1hcmdpbi1ib3R0b206IDQ4cHg7XG59XG5cbi5jb250YWN0LWZvcm0gLnNpdGUtYnRuIGltZyB7XG5cdGxlZnQ6IDVweDtcbn1cblxuLmNvbnRhY3QtdGV4dCBoMyB7XG5cdG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5jb250YWN0LXRleHQgcCB7XG5cdGxpbmUtaGVpZ2h0OiAxLjk7XG5cdGNvbG9yOiAjNjg2NDdkO1xuXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uY29udC1pbmZvIHtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbnQtaW5mbyAuY2ktaWNvbiB7XG5cdGZsb2F0OiBsZWZ0O1xuXHR3aWR0aDogMzJweDtcblx0bWFyZ2luLXJpZ2h0OiAyNnB4O1xufVxuXG4uY29udC1pbmZvIC5jaS10ZXh0IHtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tXG4gIFJlc3BvbnNpdmVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcblx0LmNvbnRhaW5lciB7XG5cdFx0bWF4LXdpZHRoOiAxMTc1cHg7XG5cdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE1MzBweCkge1xuXHQuaGVyby1zbGlkZXIgLm93bC1kb3RzIHtcblx0XHR3aWR0aDogMTE3MHB4O1xuXHRcdGxlZnQ6IGNhbGMoNTAlIC0gNTg1cHgpO1xuXHR9XG59XG5cbi8qIE1lZGl1bSBzY3JlZW4gOiA5OTJweC4gKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuXHQuYmxvZy1pdGVtIC5ibG9nLXRodW1iIHtcblx0XHR3aWR0aDogMjUwcHg7XG5cdH1cblx0Lmhlcm8taXRlbSBwIHtcblx0XHRmb250LXNpemU6IDIycHg7XG5cdH1cblx0Lmhlcm8tc2xpZGVyIC5vd2wtbmF2IC5vd2wtbmV4dCB7XG5cdFx0cmlnaHQ6IDMwcHg7XG5cdH1cblx0Lmhlcm8tc2xpZGVyIC5vd2wtZG90cyB7XG5cdFx0d2lkdGg6IDkzMHB4O1xuXHRcdGxlZnQ6IGNhbGMoNTAlIC0gNDY1cHgpO1xuXHR9XG5cdC5uZXdzbGV0dGVyLWZvcm0ge1xuXHRcdHBhZGRpbmctbGVmdDogMDtcblx0fVxuXHQubmV3c2xldHRlci1mb3JtIGlucHV0IHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXJnaW4tcmlnaHQ6IDA7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDBweDtcblx0fVxuXHQuZ2FtZS1maWx0ZXIgbGkge1xuXHRcdHdpZHRoOiAzMXB4O1xuXHRcdGhlaWdodDogMzFweDtcblx0fVxuXHQuZ2FtZS1maWx0ZXIgbGkgYSB7XG5cdFx0cGFkZGluZy10b3A6IDVweDtcblx0fVxufVxuXG4vKiBUYWJsZXQgOjc2OHB4LiAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcblx0LmhlYWRlci1iYXItd2FycCB7XG5cdFx0cGFkZGluZzogMzlweCAxNXB4IDA7XG5cdH1cblx0Lm1haW4tbWVudSBsaSBhIHtcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdH1cblx0Lmhlcm8taXRlbSBoMiB7XG5cdFx0Zm9udC1zaXplOiAxMTBweDtcblx0fVxuXHQuaGVyby1pdGVtIHAge1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRwYWRkaW5nOiAwIDMwcHg7XG5cdH1cblx0Lmhlcm8tc2xpZGVyIC5vd2wtbmF2IC5vd2wtbmV4dCB7XG5cdFx0cmlnaHQ6IDA7XG5cdH1cblx0Lmhlcm8tc2xpZGVyIC5vd2wtZG90cyB7XG5cdFx0d2lkdGg6IDY5MHB4O1xuXHRcdGxlZnQ6IGNhbGMoNTAlIC0gMzQ1cHgpO1xuXHR9XG5cdC5ibG9nLWl0ZW0gLmJsb2ctdGh1bWIge1xuXHRcdGZsb2F0OiBub25lO1xuXHRcdG1hcmdpbi1yaWdodDogMDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHR9XG5cdC5mZWF0dXJlZC1iZyB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHQuZmVhdHVyZWQtYm94IHtcblx0XHRmbG9hdDogbm9uZTtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXHQubmV3c2xldHRlci1mb3JtIGlucHV0IHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXJnaW4tcmlnaHQ6IDA7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDBweDtcblx0fVxuXHQuZm9vdGVyLXJpZ2h0LXBpYyB7XG5cdFx0cmlnaHQ6IDE1cHg7XG5cdH1cblx0LmZvb3Rlci1sZWZ0LXBpYyB7XG5cdFx0bGVmdDogLTQ0cHg7XG5cdH1cblx0LmdhbWUtZmlsdGVyIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblx0LmdhbWUtZmlsdGVyIGxpIHtcblx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XG5cdH1cblx0LmdhbWUtc2luZ2xlLWNvbnRlbnQgLmdzLXRpdGxlIHtcblx0XHRmb250LXNpemU6IDQwcHg7XG5cdH1cblx0LnJldmlldy1waWMgaW1nIHtcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0fVxuXHQuY29udGFjdC10ZXh0IHtcblx0XHRtYXJnaW4tYm90dG9tOiA1MHB4O1xuXHR9XG59XG5cbi8qIExhcmdlIE1vYmlsZSA6NDgwcHguICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblx0LmhlYWRlci1iYXItd2FycCB7XG5cdFx0cGFkZGluZzogMjVweCAyMHB4IDEwcHg7XG5cdH1cblx0Lm1haW4tbWVudS5wcmltYXJ5LW1lbnUge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0LnNsaWNrbmF2X21lbnUge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGJhY2tncm91bmQ6ICMwODE2MjQ7XG5cdH1cblx0LnNsaWNrbmF2X2J0biB7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdGJhY2tncm91bmQ6ICMzYTNhM2E7XG5cdH1cblx0LnNsaWNrbmF2X25hdiBhOmhvdmVyLFxuXHQuc2xpY2tuYXZfbmF2IC5zbGlja25hdl9yb3c6aG92ZXIge1xuXHRcdGJhY2tncm91bmQ6ICMyNTM5NGM7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdH1cblx0Lmhlcm8taXRlbSBoMiB7XG5cdFx0Zm9udC1zaXplOiA3MHB4O1xuXHR9XG5cdC5oZXJvLWl0ZW0gcCB7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHR9XG5cdC5mb290ZXItcmlnaHQtcGljLFxuXHQuZm9vdGVyLWxlZnQtcGljIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cdC5oZXJvLXNsaWRlciAub3dsLW5hdiAub3dsLW5leHQge1xuXHRcdHRvcDogYXV0bztcblx0XHRib3R0b206IDMzcHg7XG5cdFx0cmlnaHQ6IDE1cHg7XG5cdFx0ei1pbmRleDogOTk7XG5cdH1cblx0Lmhlcm8tc2xpZGVyIC5vd2wtZG90cyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bGVmdDogMDtcblx0XHRwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cdH1cblx0LmludHJvLXRleHQtYm94IHtcblx0XHRtYXJnaW4tYm90dG9tOiA0MHB4O1xuXHR9XG5cdC5ibG9nLWl0ZW0gLmJsb2ctdGh1bWIge1xuXHRcdGZsb2F0OiBub25lO1xuXHRcdG1hcmdpbi1yaWdodDogMDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHR9XG5cdC5zaWRlYmFyIHtcblx0XHRwYWRkaW5nLXRvcDogNjBweDtcblx0fVxuXHQuZmVhdHVyZWQtYmcge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0LmZlYXR1cmVkLWJveCB7XG5cdFx0ZmxvYXQ6IG5vbmU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0LmZlYXR1cmVkLWJveCAudGV4dC1ib3ggaDMge1xuXHRcdGZvbnQtc2l6ZTogNDVweDtcblx0fVxuXHQubmV3c2xldHRlci1mb3JtIHtcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdH1cblx0Lm5ld3NsZXR0ZXItZm9ybSBpbnB1dCB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luLXJpZ2h0OiAwO1xuXHRcdG1hcmdpbi1ib3R0b206IDQwcHg7XG5cdH1cblx0LnZpZGVvLXRleHQ6YWZ0ZXIge1xuXHRcdGxlZnQ6IDA7XG5cdH1cblx0LnBhZ2UtdG9wLXNlY3Rpb24ge1xuXHRcdGhlaWdodDogNDAwcHg7XG5cdFx0cGFkZGluZy10b3A6IDI1MHB4O1xuXHR9XG5cdC5nYW1lLWZpbHRlciB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdC5nYW1lLWZpbHRlciBsaSB7XG5cdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHR9XG5cdC5nYW1lLXNpbmdsZS1jb250ZW50IC5ncy10aXRsZSB7XG5cdFx0Zm9udC1zaXplOiA0MHB4O1xuXHR9XG5cdC5yZXZpZXctcGljIGltZyB7XG5cdFx0bWluLXdpZHRoOiAxMDAlO1xuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdH1cblx0LmNvbnRhY3QtdGV4dCB7XG5cdFx0bWFyZ2luLWJvdHRvbTogNTBweDtcblx0fVxuXHQucmV2aWV3LWNvbnRlbnQgLnJhdGluZyB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdH1cblx0LnJldmlldy1jb250ZW50IC5yYXRpbmcgaDUge1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0cGFkZGluZy1yaWdodDogMDtcblx0fVxufVxuXG4vKiBTbWFsbCBNb2JpbGUgOjMyMHB4LiAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XG5cdC5oZXJvLWl0ZW0gaDIge1xuXHRcdGZvbnQtc2l6ZTogNTVweDtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHR9XG5cdC5oZXJvLWl0ZW0gcCB7XG5cdFx0Zm9udC1zaXplOiAxNXB4O1xuXHR9XG5cdC52aWRlby10ZXh0IGgyIHtcblx0XHRmb250LXNpemU6IDMwcHg7XG5cdH1cblx0LnZpZGVvLXBsYXktYnRuIHtcblx0XHR0b3A6IGNhbGMoMzAlIC0gNjFweCk7XG5cdH1cblx0LmZlYXR1cmVkLWJveCB7XG5cdFx0cGFkZGluZzogMTAwcHggMTVweDtcblx0fVxuXHQuZmVhdHVyZWQtYm94IC50ZXh0LWJveCBoMyxcblx0Lm5ld3NsZXR0ZXItc2VjdGlvbiBoMiB7XG5cdFx0Zm9udC1zaXplOiAzNXB4O1xuXHR9XG5cdC5tYWluLW1lbnUgbGkgYSB7XG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xuXHR9XG5cdC5nYW1lLWF1dGhvci1waWMge1xuXHRcdGZsb2F0OiBub25lO1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdH1cbn1cbi50aXR1bG9cbntcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGZvbnQtc2l6ZTogNDBweDtcblx0Zm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcblx0bWFyZ2luLXRvcDogLTVweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwYWRkaW5nLXJpZ2h0OiAxNDBweDtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- Header section -->\n\t<header class=\"header-section\">\n      <div class=\"header-warp\">\n        <div class=\"header-bar-warp d-flex\">\n          <div>\n            <h2 class=\"titulo\">\n           Mi Sala de Juegos</h2>\n        </div>\n          <!-- site logo -->\t\t\t\t\n          <nav class=\"top-nav-area w-100\">\n            <div class=\"user-panel\" >\n              <!--div *ngIf=\"!verificarSesion()\" >\n              <div ><a routerLink=\"/Login\" >Ingresá</a></div>\n              <div ><a routerLink=\"/Registro\" >Registrate</a></div>\n            </div-->\n              <div *ngIf=\"verificarSesion()\"><a routerLink=\"/\" (click)=\"cerrarSesion()\" >Cerrar sesion</a></div>\n            </div>\n            <!-- Menu -->\n            <ul class=\"main-menu primary-menu\" *ngIf=\"verificarSesion()\">\n              <li><a routerLink=\"/Principal\">Inicio</a></li>\n              <li><a routerLink=\"/Juegos\">Juegos</a>\n              </li>\n              <li><a routerLink=\"/Listado\">Listado de Resultados</a>\n              <li><a>Sobre Mi</a>\n                <ul class=\"sub-menu\">\n                  <li><a href=\"https://github.com/facundoislas\" target=\"blank\">En Github</a></li>\n                  <li><a routerLink=\"/QuienSoy\">Sobre Facundo Islas</a></li>\n                </ul>\n              </li>\n              \n              \n            </ul>\n            <ul class=\"main-menu primary-menu\" *ngIf=\"!verificarSesion()\">\n              <li><a >Inicio</a></li>\n              <li><a >Juegos</a>\n              </li>\n              <li><a >Listado de Resultados</a>\n              <li><a>Sobre Mi</a>\n                <ul class=\"sub-menu\">\n                  <li><a href=\"https://github.com/facundoislas\" target=\"blank\">En Github</a></li>\n                  <li><a routerLink=\"/QuienSoy\">Sobre Facundo Islas</a></li>\n                </ul>\n              </li>\n              \n              \n            </ul>\n          </nav>\n        </div>\n      </div>\n    </header>\n    <!-- Header section end -->"

/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.ts ***!
  \************************************************************/
/*! exports provided: CabeceraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabeceraComponent", function() { return CabeceraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CabeceraComponent = /** @class */ (function () {
    function CabeceraComponent(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
    }
    CabeceraComponent.prototype.verificarSesion = function () {
        var session = sessionStorage.getItem('user');
        if (session == null) {
            return false;
        }
        else {
            return true;
        }
    };
    CabeceraComponent.prototype.cerrarSesion = function () {
        this.auth.logout();
        sessionStorage.clear();
        this.logueado = false;
        this.router.navigate(['']);
        console.log("Se cierra sesion");
    };
    CabeceraComponent.prototype.ngOnInit = function () {
    };
    CabeceraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cabecera',
            template: __webpack_require__(/*! ./cabecera.component.html */ "./src/app/componentes/cabecera/cabecera.component.html"),
            styles: [__webpack_require__(/*! ./cabecera.component.css */ "./src/app/componentes/cabecera/cabecera.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CabeceraComponent);
    return CabeceraComponent;
}());



/***/ }),

/***/ "./src/app/componentes/error/error.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/error/error.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    \r\n    background-color:rgb(234, 237, 238);\r\n    background-attachment:scroll;\r\n    background-repeat:no-repeat;\r\n    background-position:center;\r\n    background-size:cover;\r\n    line-height:5px; \r\n    }\r\n    .display-1 {text-align:center;color:#e1b7b7;}\r\n    .display-1 .fa {-webkit-animation:fa-spin 5s infinite linear;animation:fa-spin 5s infinite linear;}\r\n    .display-3 {text-align:center;color:#df726a;}\r\n    .lower-case {text-align:center;}\r\n     \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxtQ0FBbUM7SUFDbkMsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZjtJQUNBLFlBQVksaUJBQWlCLENBQUMsYUFBYSxDQUFDO0lBQzVDLGdCQUFnQiw0Q0FBb0MsQ0FBcEMsb0NBQW9DLENBQUM7SUFDckQsWUFBWSxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7SUFDNUMsYUFBYSxpQkFBaUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjM0LCAyMzcsIDIzOCk7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6c2Nyb2xsO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBsaW5lLWhlaWdodDo1cHg7IFxyXG4gICAgfVxyXG4gICAgLmRpc3BsYXktMSB7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6I2UxYjdiNzt9XHJcbiAgICAuZGlzcGxheS0xIC5mYSB7YW5pbWF0aW9uOmZhLXNwaW4gNXMgaW5maW5pdGUgbGluZWFyO31cclxuICAgIC5kaXNwbGF5LTMge3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiNkZjcyNmE7fVxyXG4gICAgLmxvd2VyLWNhc2Uge3RleHQtYWxpZ246Y2VudGVyO31cclxuICAgICAiXX0= */"

/***/ }),

/***/ "./src/app/componentes/error/error.component.html":
/*!********************************************************!*\
  !*** ./src/app/componentes/error/error.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n\t\n\n\t\t\t<body style=\"\n            margin-bottom: -40px;\n        \">\t\n\t\t\t<div class=\"container-fluid\" id=\"body-container-fluid\" style=\"\n            margin-top: -92px;\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<!---- for body container ---->\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"jumbotron\">\n\t\t\t\t\t\t<h1 class=\"display-1\">4<i class=\"fa  fa-spin fa-cog fa-3x\"></i> 4</h1>\n\t\t\t\t\t\t<h1 class=\"display-3\">ERROR</h1>\n\t\t\t\t\t\t<p class=\"lower-case\">La pagina a la que quiere ingresar no existe</p>\n\t\t\t\t\t\t<p class=\"lower-case\">Por favor vuelva al inicio</p>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t <!-------mother container middle class------------------->\n\t\t\t\t\t\t \n\n\t\t\t\t</div>\n\t\t\n\t\t\t\t\n\t\t\t\t\t\t\n \n\t\t\t<div class=\"container-fluid\" id=\"footer-container-fluid\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<!---- for footer container ---->\n \t\t\t\t</div>\n\t\t\t</div>\n  \t\t\t\n\t\t\t\t\n\t\t\t\n        </div>\n    </body>\t"

/***/ }),

/***/ "./src/app/componentes/error/error.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/error/error.component.ts ***!
  \******************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");



var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/componentes/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/componentes/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/componentes/footer/footer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/footer/footer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/componentes/footer/footer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/componentes/footer/footer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"page-footer font-small blue\" style=\"background-color: rgb(4, 23, 61); height: 30%; \">\n\n  <!-- Copyright -->\n  <div class=\"footer-copyright text-center py-3\"style=\"color:aliceblue; \">© 2019 Copyright:\n    <h3 class=\"h3\" style=\"color:aliceblue ;font-family: monospace\"> Facundo Islas</h3>\n  </div>\n  <!-- Copyright -->\n\n</footer>\n<!-- Footer -->"

/***/ }),

/***/ "./src/app/componentes/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/componentes/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/componentes/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/componentes/home/home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/componentes/home/home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* =================================\n------------------------------------\n  EndGam - Gaming Magazine Template\n  Version: 1.0\n ------------------------------------\n ====================================*/\n\n\n\n/*----------------------------------------*/\n\n\n\n/* Template default CSS\n/*----------------------------------------*/\n\n\n\nhtml,\nbody {\n\theight: 100%;\n\tfont-family: 'Roboto', sans-serif;\n\t-webkit-font-smoothing: antialiased;\n\tfont-smoothing: antialiased;\n}\n\n\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\tmargin: 0;\n\tcolor: #111111;\n\tfont-weight: 500;\n}\n\n\n\nh1 {\n\tfont-size: 70px;\n}\n\n\n\nh2 {\n\tfont-size: 36px;\n}\n\n\n\nh3 {\n\tfont-size: 30px;\n}\n\n\n\nh4 {\n\tfont-size: 24px;\n}\n\n\n\nh5 {\n\tfont-size: 18px;\n}\n\n\n\nh6 {\n\tfont-size: 16px;\n}\n\n\n\np {\n\tfont-size: 15px;\n\tcolor: #585858;\n\tline-height: 1.6;\n\tfont-weight: 500;\n}\n\n\n\nimg {\n\tmax-width: 100%;\n}\n\n\n\ninput:focus,\nselect:focus,\nbutton:focus,\ntextarea:focus {\n\toutline: none;\n}\n\n\n\na:hover,\na:focus {\n\ttext-decoration: none;\n\toutline: none;\n}\n\n\n\nul,\nol {\n\tpadding: 0;\n\tmargin: 0;\n}\n\n\n\n::-webkit-input-placeholder {\n\tcolor: #fff;\n\tfont-style: italic;\n\ttext-transform: uppercase;\n}\n\n\n\n:-ms-input-placeholder {\n\tcolor: #fff;\n\tfont-style: italic;\n\ttext-transform: uppercase;\n}\n\n\n\n::-ms-input-placeholder {\n\tcolor: #fff;\n\tfont-style: italic;\n\ttext-transform: uppercase;\n}\n\n\n\n::placeholder {\n\tcolor: #fff;\n\tfont-style: italic;\n\ttext-transform: uppercase;\n}\n\n\n\n/*---------------------\n  Helper CSS\n-----------------------*/\n\n\n\n.section-title h2 {\n\tfont-size: 30px;\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tfont-style: italic;\n}\n\n\n\n.set-bg {\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tbackground-position: top center;\n}\n\n\n\n.spad {\n\tpadding-top: 105px;\n\tpadding-bottom: 105px;\n}\n\n\n\n.text-white h1,\n.text-white h2,\n.text-white h3,\n.text-white h4,\n.text-white h5,\n.text-white h6,\n.text-white p,\n.text-white span,\n.text-white li,\n.text-white a {\n\tcolor: #fff;\n}\n\n\n\n/*---------------------\n  Commom elements\n-----------------------*/\n\n\n\n/* buttons */\n\n\n\n.site-btn {\n\tdisplay: inline-block;\n\tborder: none;\n\tfont-size: 14px;\n\tfont-weight: 700;\n\tfont-style: italic;\n\tmin-width: 186px;\n\tpadding: 24px 30px;\n\tborder-radius: 0;\n\ttext-transform: uppercase;\n\tcolor: #081624;\n\tline-height: normal;\n\tcursor: pointer;\n\ttext-align: center;\n\tbackground: #fff;\n\tposition: relative;\n\tz-index: 1;\n}\n\n\n\n.site-btn img {\n\tposition: relative;\n\tleft: 13px;\n\twidth: auto !important;\n\tdisplay: inline-block !important;\n}\n\n\n\n.site-btn:after,\n.site-btn:before {\n\tposition: absolute;\n\tcontent: \"\";\n\twidth: 100%;\n\theight: 100%;\n\tleft: 9px;\n\ttop: 10px;\n\tbackground: #b01ba5;\n\tz-index: -2;\n\tbox-shadow: 0 0 9px 3px rgba(226, 30, 228, 0.24);\n}\n\n\n\n.site-btn:before {\n\tleft: 0;\n\ttop: 0;\n\tbackground: #fff;\n\tz-index: -1;\n}\n\n\n\n.site-btn:hover {\n\tcolor: #081624;\n}\n\n\n\n/* Preloder */\n\n\n\n#preloder {\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 999999;\n\tbackground: #000;\n}\n\n\n\n.loader {\n\twidth: 40px;\n\theight: 40px;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-top: -13px;\n\tmargin-left: -13px;\n\tborder-radius: 60px;\n\tanimation: loader 0.8s linear infinite;\n\t-webkit-animation: loader 0.8s linear infinite;\n}\n\n\n\n@keyframes loader {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t\ttransform: rotate(0deg);\n\t\tborder: 4px solid #f44336;\n\t\tborder-left-color: transparent;\n\t}\n\t50% {\n\t\t-webkit-transform: rotate(180deg);\n\t\ttransform: rotate(180deg);\n\t\tborder: 4px solid #673ab7;\n\t\tborder-left-color: transparent;\n\t}\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t\ttransform: rotate(360deg);\n\t\tborder: 4px solid #f44336;\n\t\tborder-left-color: transparent;\n\t}\n}\n\n\n\n@-webkit-keyframes loader {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t\tborder: 4px solid #f44336;\n\t\tborder-left-color: transparent;\n\t}\n\t50% {\n\t\t-webkit-transform: rotate(180deg);\n\t\tborder: 4px solid #673ab7;\n\t\tborder-left-color: transparent;\n\t}\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t\tborder: 4px solid #f44336;\n\t\tborder-left-color: transparent;\n\t}\n}\n\n\n\n/*------------------\n  Header section\n---------------------*/\n\n\n\n.header-section {\n\tposition: absolute;\n\twidth: 100%;\n\tleft: 0;\n\ttop: -44px;\n\tz-index: 99;\n\tpadding: 50px 50px 0;\n\tbackground-image: url('/TP-Sala-de-Juegos-ANGULAR-/assets/imagenes/cabecera.png');\n\t\n\n}\n\n\n\n.header-warp {\n\tmax-width: 1496px;\n\tmargin: 0 auto;\n}\n\n\n\n.header-social p,\n.footer-social p,\n.geme-social-share p {\n\tdisplay: inline-block;\n\tcolor: #9190a5;\n\tfont-size: 16px;\n\tpadding-top: 4px;\n}\n\n\n\n.header-social a,\n.footer-social a,\n.geme-social-share a {\n\tdisplay: -ms-inline-flex;\n\tdisplay: inline-flex;\n\twidth: 32px;\n\theight: 32px;\n\talign-items: center;\n\tjustify-content: center;\n\tborder-radius: 50%;\n\tcolor: #fff;\n\tfont-size: 12px;\n\tmargin-left: 13px;\n\ttransition: all 0.3s;\n}\n\n\n\n.header-social a:hover,\n.footer-social a:hover,\n.geme-social-share a:hover {\n\tbackground: #b01ba5;\n}\n\n\n\n.header-bar-warp {\n\tpadding: 39px 40px 0;\n\t\n\t\n}\n\n\n\n.site-logo {\n\tfloat: left;\n}\n\n\n\n.user-panel {\n\tfloat: right;\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tcolor: #fff;\n\tpadding-top: 3px;\n}\n\n\n\n.user-panel a {\n\tcolor: #fff;\n}\n\n\n\n.user-panel a:hover {\n\tcolor: #b01ba5;\n}\n\n\n\n.main-menu {\n\tlist-style: none;\n\ttext-align: center;\n\tpadding-top: 3px;\n}\n\n\n\n.main-menu li {\n\tdisplay: inline-block;\n\tposition: relative;\n}\n\n\n\n.main-menu li a {\n\tdisplay: block;\n\tfont-size: 40px;\n\tfont-weight: 500;\n\tcolor: rgb(41, 250, 14);\n\tmargin-right: 10px;\n\tpadding-bottom: 20px;\n\tposition: relative;\n\tpadding-right: 20px;\n}\n\n\n\n.main-menu li a:after {\n\tcontent: \"\";\n\twidth: 20px;\n\theight: 20px;\n\tright: 0;\n\ttop: 1px;\n\n\tbackground-repeat: no-repeat;\n\tbackground-position: right center;\n}\n\n\n\n.main-menu li a i {\n\tcolor: #928d92;\n\tmargin-left: 5px;\n}\n\n\n\n.main-menu li a:hover {\n\tcolor: #b01ba5;\n}\n\n\n\n.main-menu li a:hover:after {\n    color: #000\n}\n\n\n\n.main-menu li a:hover i {\n\tcolor: #b01ba5;\n}\n\n\n\n.main-menu li:hover .sub-menu {\n\tvisibility: visible;\n\topacity: 1;\n\tmargin-top: 0;\n}\n\n\n\n.main-menu li:hover>a {\n\tcolor: #b01ba5;\n}\n\n\n\n.main-menu li:hover>a:after {\n\tbackground-color: #190d36\n}\n\n\n\n.main-menu li .sub-menu {\n\tposition: absolute;\n\tlist-style: none;\n\ttext-align: left;\n\twidth: 220px;\n\tleft: 0;\n\ttop: 100%;\n\tpadding: 20px 0;\n\tvisibility: hidden;\n\topacity: 0;\n\tmargin-top: 50px;\n\tbackground: rgb(233, 250, 0);\n\tz-index: 99;\n\ttransition: all 0.4s;\n\tbox-shadow: 2px 7px 20px rgba(0, 0, 0, 0.4);\n}\n\n\n\n.main-menu li .sub-menu li {\n\tdisplay: block;\n}\n\n\n\n.main-menu li .sub-menu li a {\n\tdisplay: block;\n\tcolor: #000;\n\tmargin-right: 0;\n\tpadding: 8px 30px;\n\tfont-size: 20px;\n}\n\n\n\n.main-menu li .sub-menu li a:after {\n\tdisplay: none;\n}\n\n\n\n.main-menu li .sub-menu li a:hover {\n\tcolor: #b01ba5;\n}\n\n\n\n.slicknav_menu {\n\tdisplay: none;\n}\n\n\n\n/*------------------\n  Hero section\n---------------------*/\n\n\n\n.hero-slider .owl-dots {\n\tdisplay: -ms-flex;\n\tdisplay: flex;\n\tz-index: 2;\n\tleft: calc(50% - 740px);\n\tbottom: 38px;\n\tposition: relative;\n\twidth: 1496px;\n\tposition: absolute;\n}\n\n\n\n.hero-slider .owl-dots .owl-dot {\n\twidth: 44px;\n\theight: 44px;\n\tborder-radius: 50%;\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tborder: 2px solid transparent;\n\tcolor: #fff;\n\tdisplay: -ms-inline-flex;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n\n.hero-slider .owl-dots .owl-dot.active {\n\tcolor: #b01ba5;\n\tborder: 2px solid #b01ba5;\n}\n\n\n\n.hero-slider .owl-nav {\n\tmargin-top: -24px;\n\tdisplay: block;\n}\n\n\n\n.hero-slider .owl-nav .owl-next {\n\tposition: absolute;\n\ttop: 50%;\n\tright: 100px;\n}\n\n\n\n.hero-item {\n\theight: 921px;\n\tpadding-top: 125px;\n\tborder-bottom: 2px solid #b01ba5;\n}\n\n\n\n.hero-item h2 {\n\tfont-size: 160px;\n\tcolor: #fff;\n\tfont-weight: 500;\n\tline-height: 1;\n\tposition: relative;\n\ttop: 100px;\n\topacity: 0;\n}\n\n\n\n.hero-item p {\n\tfont-size: 24px;\n\tcolor: rgba(255, 255, 255, 0.4);\n\tfont-weight: 500;\n\topacity: 0.39;\n\tmargin-bottom: 70px;\n\tposition: relative;\n\ttop: 80px;\n\topacity: 0;\n}\n\n\n\n.hero-item .site-btn {\n\tposition: relative;\n\ttop: 50px;\n\topacity: 0;\n}\n\n\n\n.hero-slider .owl-item.active .hero-item h2,\n.hero-slider .owl-item.active .hero-item p,\n.hero-slider .owl-item.active .hero-item .site-btn {\n\ttop: 0;\n\topacity: 1;\n}\n\n\n\n.hero-slider .owl-item.active .hero-item h2 {\n\ttransition: all 0.5s ease 0.4s;\n}\n\n\n\n.hero-slider .owl-item.active .hero-item p {\n\ttransition: all 0.5s ease 0.6s;\n}\n\n\n\n.hero-slider .owl-item.active .hero-item .site-btn {\n\ttransition: all 0.5s ease 0.8s;\n}\n\n\n\n.hero-slider .owl-item.active .hero-item .offer-card {\n\topacity: 1;\n\t-webkit-transform: rotate(0deg);\n\ttransform: rotate(0deg);\n\ttransition: all 0.5s ease 1s;\n}\n\n\n\n/* ----------------\n  Intro section\n---------------------*/\n\n\n\n.intro-section {\n\tbackground: #0c062e;\n\tpadding: 115px 0;\n}\n\n\n\n.text-box .top-meta {\n\tfont-size: 18px;\n\tfont-weight: 500;\n\tmargin-bottom: 20px;\n}\n\n\n\n.text-box .top-meta a {\n\tcolor: #b01ba5;\n}\n\n\n\n.text-box h3 {\n\tmargin-bottom: 40px;\n\tmax-width: 370px;\n}\n\n\n\n.text-box p {\n\tfont-size: 15px;\n\tfont-weight: 500;\n\tcolor: #68647d;\n\tmargin-bottom: 35px;\n}\n\n\n\n.text-box .read-more {\n\tfont-size: 15px;\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tfont-style: italic;\n\tcolor: #fff;\n}\n\n\n\n.text-box .read-more img {\n\tmargin-left: 13px;\n}\n\n\n\n/* ----------------\n Blog Section\n---------------------*/\n\n\n\n.blog-section {\n\t/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#501755+0,2d1854+100 */\n\tbackground: #501755;\n\t/* Old browsers */\n\t/* FF3.6-15 */\n\t/* Chrome10-25,Safari5.1-6 */\n\tbackground: linear-gradient(45deg, #501755 0%, #2d1854 100%);\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#501755', endColorstr='#2d1854', GradientType=1);\n\t/* IE6-9 fallback on horizontal gradient */\n}\n\n\n\n.blog-section .section-title {\n\tmargin-bottom: 25px;\n}\n\n\n\n.blog-filter {\n\tlist-style: none;\n\tdisplay: block;\n}\n\n\n\n.blog-filter li {\n\tdisplay: inline-block;\n}\n\n\n\n.blog-filter li a {\n\tdisplay: block;\n\tcolor: #fff;\n\tpadding: 16px 36px;\n\tfont-size: 16px;\n\tfont-weight: 700;\n\tbackground: #6f2b95;\n\tline-height: 1.1;\n\tmargin-right: 7px;\n\ttransition: all 0.3s;\n\tmargin-bottom: 10px;\n}\n\n\n\n.blog-filter li a:hover {\n\tbackground: #b01ba5;\n}\n\n\n\n.blog-item {\n\tmargin-top: 86px;\n}\n\n\n\n.blog-item .blog-thumb {\n\twidth: 362px;\n\tfloat: left;\n\tmargin-right: 30px;\n}\n\n\n\n.blog-item .text-box {\n\toverflow: hidden;\n}\n\n\n\n.blog-item .text-box p {\n\tmargin-bottom: 42px;\n}\n\n\n\n.widget-item {\n\tmargin-bottom: 85px;\n}\n\n\n\n.widget-item:last-child {\n\tmargin-bottom: 0;\n}\n\n\n\n.widget-item .widget-title {\n\tcolor: #fff;\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tfont-style: italic;\n\tpadding-left: 38px;\n\tmargin-bottom: 48px;\n}\n\n\n\n.trending-widget .tw-item {\n\tmargin-bottom: 38px;\n}\n\n\n\n.trending-widget .tw-item:last-child {\n\tmargin-bottom: 0;\n}\n\n\n\n.trending-widget .tw-thumb {\n\tfloat: left;\n\tmargin-right: 17px;\n\toverflow: hidden;\n}\n\n\n\n.trending-widget .tw-text .tw-meta {\n\tcolor: #68647d;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tmargin-bottom: 7px;\n}\n\n\n\n.trending-widget .tw-text .tw-meta a {\n\tcolor: #b01ba5;\n}\n\n\n\n.trending-widget .tw-text h5 {\n\tfont-size: 18px;\n\tcolor: #fff;\n\tline-height: 1.5;\n}\n\n\n\n.categories-widget {\n\tbackground: #34164b;\n\tpadding: 55px 0 25px;\n}\n\n\n\n.categories-widget ul {\n\tlist-style: none;\n\tpadding: 0 38px;\n}\n\n\n\n.categories-widget ul li {\n\tdisplay: block;\n}\n\n\n\n.categories-widget ul li a {\n\tdisplay: inline-block;\n\tposition: relative;\n\tfont-size: 16px;\n\tcolor: #68647d;\n\tfont-weight: 500;\n\tmargin-bottom: 15px;\n\tpadding-right: 19px;\n\ttransition: all 0.2s;\n\tbackground-repeat: no-repeat;\n\tbackground-position: right -120% center;\n\tbackground-size: 11px;\n}\n\n\n\n.categories-widget ul li a:hover {\n\tcolor: #b01ba5;\n\tbackground-position: right center;\n}\n\n\n\n.search-widget {\n\tposition: relative;\n}\n\n\n\n.search-widget input {\n\twidth: 100%;\n\theight: 40px;\n\tborder: none;\n\tborder-bottom: 2px solid #72628b;\n\tbackground: none;\n\tpadding-right: 60px;\n\tcolor: #fff;\n}\n\n\n\n.search-widget button {\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\tcolor: #b01ba5;\n\tfont-weight: 700;\n\tfont-size: 14px;\n\tfont-style: italic;\n\tcursor: pointer;\n\tbackground: none;\n\tborder: none;\n\ttext-transform: uppercase;\n}\n\n\n\n.latest-comments .lc-item {\n\tmargin-bottom: 30px;\n}\n\n\n\n.latest-comments .lc-item:last-child {\n\tmargin-bottom: 0;\n}\n\n\n\n.latest-comments .lc-item .lc-avatar {\n\twidth: 64px;\n\theight: 64px;\n\tborder-radius: 50%;\n\tfloat: left;\n\tmargin-right: 12px;\n}\n\n\n\n.latest-comments .lc-item .tw-text {\n\tpadding-top: 10px;\n\tfont-size: 16px;\n\tcolor: #fff;\n\tfont-weight: 500;\n}\n\n\n\n.latest-comments .lc-item .tw-text a {\n\tcolor: #b01ba5;\n}\n\n\n\n.latest-comments .lc-item .tw-text span {\n\tcolor: #68647d;\n}\n\n\n\n/* --------------------\n  Intro video section\n-----------------------*/\n\n\n\n.intro-video-section {\n\theight: 757px;\n\tposition: relative;\n}\n\n\n\n.video-play-btn {\n\tposition: absolute;\n\tleft: calc(50% - 61px);\n\ttop: calc(50% - 61px);\n\twidth: 122px;\n\theight: 122px;\n\ttext-align: center;\n\tpadding-top: 35px;\n\tborder-radius: 50%;\n\tbackground: rgba(255, 255, 255, 0.16);\n}\n\n\n\n.video-text {\n\tmargin-bottom: 80px;\n\tpadding: 27px 0;\n\tpadding-left: 25px;\n\tposition: relative;\n}\n\n\n\n.video-text h2 {\n\tfont-size: 48px;\n\ttext-transform: uppercase;\n\tfont-style: italic;\n\tfont-weight: 700;\n\tcolor: #fff;\n\tmargin-bottom: 1px;\n}\n\n\n\n.video-text p {\n\tfont-size: 18px;\n\tcolor: #a3a1b3;\n\tfont-weight: 500;\n\tmargin-bottom: 0;\n}\n\n\n\n.video-text:after {\n\tposition: absolute;\n\tcontent: \"\";\n\twidth: 9px;\n\theight: 100%;\n\tleft: -22px;\n\ttop: 0;\n\tborder-left: 3px solid #de46d6;\n\tbackground: #fff;\n\tbox-shadow: 0 0 9px 3px rgba(226, 30, 228, 0.5);\n}\n\n\n\n/* ----------------\n  Featured section\n---------------------*/\n\n\n\n.featured-section {\n\tposition: relative;\n\toverflow: hidden;\n}\n\n\n\n.featured-bg {\n\twidth: calc(50% - 156px);\n\tfloat: left;\n\theight: 100%;\n\tleft: 0;\n\tright: 0;\n\tposition: absolute;\n}\n\n\n\n.featured-box {\n\tfloat: right;\n\twidth: calc(50% + 156px);\n\tbackground: #fff;\n\tpadding: 100px 50px 130px 79px;\n}\n\n\n\n.featured-box .text-box {\n\tmax-width: 810px;\n}\n\n\n\n.featured-box .text-box .top-meta {\n\tcolor: #68647d;\n}\n\n\n\n.featured-box .text-box h3 {\n\tfont-size: 60px;\n\tmax-width: 100%;\n}\n\n\n\n.featured-box .text-box p {\n\tfont-size: 16px;\n}\n\n\n\n.featured-box .text-box .read-more {\n\tcolor: #251e2f;\n}\n\n\n\n.gradient-bg,\n.newsletter-section {\n\tbackground: #3e0f3d;\n\t/* Old browsers */\n\t/* FF3.6-15 */\n\t/* Chrome10-25,Safari5.1-6 */\n\tbackground: linear-gradient(to right, #3e0f3d 0%, #1c0f3b 100%);\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3e0f3d', endColorstr='#1c0f3b', GradientType=1);\n\t/* IE6-9 */\n}\n\n\n\n/* --------------------\n  Newsletter section\n----------------------*/\n\n\n\n.newsletter-section {\n\tpadding: 108px 0 95px;\n\ttext-align: center;\n}\n\n\n\n.newsletter-section h2 {\n\tfont-size: 48px;\n\tcolor: #fff;\n\tfont-weight: 700;\n\tfont-style: italic;\n\ttext-transform: uppercase;\n\tmargin-bottom: 73px;\n}\n\n\n\n.newsletter-form {\n\tpadding-left: 56px;\n}\n\n\n\n.newsletter-form input {\n\tfont-size: 14px;\n\tfont-weight: 700;\n\tfont-style: italic;\n\tcolor: #fff;\n\twidth: 787px;\n\tborder: none;\n\tborder-bottom: 2px solid #9b91a6;\n\tbackground: none;\n\theight: 63px;\n\tmargin-right: 26px;\n}\n\n\n\n/* ----------------\n  Footer section\n---------------------*/\n\n\n\n.footer-section {\n\ttext-align: center;\n\t/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#330d38+0,190d36+100 */\n\tbackground: #330d38;\n\t/* Old browsers */\n\t/* FF3.6-15 */\n\t/* Chrome10-25,Safari5.1-6 */\n\tbackground: linear-gradient(to right, #330d38 0%, #190d36 100%);\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#330d38', endColorstr='#190d36', GradientType=1);\n\t/* IE6-9 */\n}\n\n\n\n.footer-section .container {\n\tposition: relative;\n\tpadding: 60px 15px 25px;\n}\n\n\n\n.footer-left-pic {\n\tposition: absolute;\n\tleft: -13px;\n\tbottom: 19px;\n}\n\n\n\n.footer-right-pic {\n\tposition: absolute;\n\tright: 50px;\n\tbottom: 19px;\n}\n\n\n\n.footer-menu {\n\tpadding-top: 62px;\n}\n\n\n\n.footer-menu li:last-child a {\n\tmargin-right: 0;\n}\n\n\n\n.footer-social {\n\tpadding-top: 20px;\n\tpadding-bottom: 40px;\n}\n\n\n\n.footer-social a:first-child {\n\tmargin-left: 0;\n}\n\n\n\n.copyright {\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tcolor: #9190a5;\n\topacity: 0.20;\n}\n\n\n\n.copyright a {\n\tcolor: #9190a5;\n}\n\n\n\n.copyright a:hover {\n\ttext-decoration: underline;\n}\n\n\n\n/* ----------------\n  Other Pages\n=====================\n---------------------*/\n\n\n\n.page-top-section {\n\theight: 355px;\n\tpadding-top: 210px;\n}\n\n\n\n.page-info {\n\tmax-width: 1496px;\n\tmargin: 0 auto;\n\tfont-size: 16px;\n\tcolor: #fff;\n\tpadding-left: 60px;\n}\n\n\n\n.page-info h2 {\n\tcolor: #fff;\n\tfont-size: 48px;\n}\n\n\n\n.site-breadcrumb a,\n.site-breadcrumb span {\n\tfont-style: italic;\n\tcolor: #fff;\n\tmargin: 0 10px;\n\tfont-weight: 700;\n}\n\n\n\n.site-breadcrumb a:first-child {\n\tmargin-left: 0;\n}\n\n\n\n.site-breadcrumb span {\n\tcolor: #c313b7;\n}\n\n\n\n/* --------------\n  Games Page\n-----------------*/\n\n\n\n.games-section {\n\tpadding: 108px 0;\n\t/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#501755+0,2d1854+100 */\n\tbackground: #501755;\n\t/* Old browsers */\n\t/* FF3.6-15 */\n\t/* Chrome10-25,Safari5.1-6 */\n\tbackground: linear-gradient(45deg, #501755 0%, #2d1854 100%);\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#501755', endColorstr='#2d1854', GradientType=1);\n\t/* IE6-9 fallback on horizontal gradient */\n}\n\n\n\n.game-filter {\n\tlist-style: none;\n\tmargin-bottom: 82px;\n}\n\n\n\n.game-filter li {\n\tdisplay: inline-block;\n\twidth: 40px;\n\theight: 34px;\n\tbackground: #503c6e;\n\tborder-radius: 17px;\n\ttransition: all 0.3s;\n}\n\n\n\n.game-filter li:hover {\n\tbackground: #c313b7;\n}\n\n\n\n.game-filter li a {\n\tfont-size: 15px;\n\tfont-weight: 700;\n\tcolor: #fff;\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n\tpadding-top: 7px;\n}\n\n\n\n.game-item {\n\tmargin-bottom: 80px;\n}\n\n\n\n.game-item h5 {\n\tfont-size: 20px;\n\tcolor: #fff;\n\tpadding-top: 30px;\n\tmargin-bottom: 20px;\n}\n\n\n\n.game-item .read-more {\n\tfont-size: 15px;\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tfont-style: italic;\n\tcolor: #b01ba5;\n}\n\n\n\n.game-item .read-more img {\n\tmargin-left: 13px;\n}\n\n\n\n.site-pagination {\n\tdisplay: -ms-flex;\n\tdisplay: flex;\n}\n\n\n\n.site-pagination a {\n\twidth: 38px;\n\theight: 44px;\n\tborder-radius: 50%;\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tborder: 2px solid transparent;\n\tcolor: #fff;\n\tdisplay: -ms-inline-flex;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n\ttransition: all 0.5s;\n}\n\n\n\n.site-pagination a.active {\n\twidth: 44px;\n\tmargin: 0 10px;\n\tcolor: #b01ba5;\n\tborder: 2px solid #b01ba5;\n}\n\n\n\n.site-pagination a.active:first-child {\n\tmargin-left: 0;\n}\n\n\n\n.game-page-sideber .widget-item {\n\tmargin-bottom: 55px;\n}\n\n\n\n/* ------------------\n  Game single Page\n---------------------*/\n\n\n\n.games-single-page,\n.review-section,\n.blog-page,\n.contact-page {\n\tpadding: 104px 0;\n\t/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#501755+0,2d1854+100 */\n\tbackground: #501755;\n\t/* Old browsers */\n\t/* FF3.6-15 */\n\t/* Chrome10-25,Safari5.1-6 */\n\tbackground: linear-gradient(45deg, #501755 0%, #2d1854 100%);\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#501755', endColorstr='#2d1854', GradientType=1);\n\t/* IE6-9 fallback on horizontal gradient */\n}\n\n\n\n.game-single-preview {\n\tmargin-bottom: 108px;\n}\n\n\n\n.game-single-content .gs-meta {\n\tfont-size: 18px;\n\tcolor: #68647d;\n\tfont-weight: 500;\n\tmargin-bottom: 20px;\n}\n\n\n\n.game-single-content .gs-meta a {\n\tcolor: #b01ba5;\n}\n\n\n\n.game-single-content .gs-title {\n\tfont-size: 60px;\n\tcolor: #fff;\n\tmargin-bottom: 40px;\n}\n\n\n\n.game-single-content h4 {\n\tcolor: #b01ba5;\n\tmargin-bottom: 20px;\n}\n\n\n\n.game-single-content p {\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tcolor: #68647d;\n\tline-height: 1.8;\n\tmargin-bottom: 70px;\n}\n\n\n\n.rating-widget {\n\tbackground: #34164b;\n\tpadding: 55px 0 30px;\n}\n\n\n\n.rating-widget ul {\n\tlist-style: none;\n\tpadding: 0 38px;\n\tmargin-bottom: 30px;\n}\n\n\n\n.rating-widget ul li {\n\tdisplay: block;\n\tfont-size: 16px;\n\tcolor: #b01ba5;\n\tfont-weight: 500;\n\tmargin-bottom: 10px;\n}\n\n\n\n.rating-widget ul li span {\n\tfloat: right;\n\tcolor: #68647d;\n}\n\n\n\n.rating-widget h5 {\n\ttext-align: right;\n\tfont-size: 36px;\n\tcolor: #fff;\n\tfont-weight: 900;\n\tpadding-right: 38px;\n}\n\n\n\n.rating-widget h5 i {\n\tfont-weight: 500;\n\tfont-size: 16px;\n\tfont-style: italic;\n\tcolor: #65607b;\n\ttext-transform: uppercase;\n\tmargin-right: 18px;\n}\n\n\n\n.rating-widget h5 span {\n\tcolor: #b01ba5;\n}\n\n\n\n.testimonials-widget {\n\tbackground: #34164b;\n\tpadding: 55px 0 50px;\n}\n\n\n\n.testimonials-widget .testim-text {\n\tpadding: 0 30px;\n}\n\n\n\n.testimonials-widget .testim-text p {\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tcolor: #68647d;\n\tline-height: 1.8;\n\tmargin-bottom: 40px;\n}\n\n\n\n.testimonials-widget .testim-text h6 {\n\tcolor: #68647d;\n\tpadding-left: 15px;\n}\n\n\n\n.testimonials-widget .testim-text h6 span {\n\tcolor: #b01ba5;\n}\n\n\n\n.game-author-section {\n\tbackground: #3a1854;\n\tpadding: 51px 0;\n\toverflow: hidden;\n}\n\n\n\n.game-author-pic {\n\twidth: 117px;\n\theight: 117px;\n\tborder-radius: 50%;\n\tfloat: left;\n\tmargin-right: 55px;\n}\n\n\n\n.game-author-info {\n\toverflow: hidden;\n\tpadding-top: 10px;\n}\n\n\n\n.game-author-info h4 {\n\tcolor: #fff;\n\tmargin-bottom: 20px;\n}\n\n\n\n.game-author-info h4 span {\n\tcolor: #b01ba5;\n}\n\n\n\n.game-author-info p {\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tcolor: #68647d;\n\tline-height: 1.8;\n\tmargin-bottom: 0;\n}\n\n\n\n/* ----------------\n  Review section\n---------------------*/\n\n\n\n.review-item {\n\tmargin-bottom: 87px;\n}\n\n\n\n.review-content {\n\tposition: relative;\n}\n\n\n\n.review-content h3 {\n\tmax-width: 100%;\n\tmargin-bottom: 35px;\n}\n\n\n\n.review-content p {\n\tmargin-bottom: 40px;\n}\n\n\n\n.review-content .rating {\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n}\n\n\n\n.review-content .rating h5 {\n\ttext-align: right;\n\tfont-size: 36px;\n\tcolor: #fff;\n\tfont-weight: 900;\n\tpadding-right: 38px;\n}\n\n\n\n.review-content .rating h5 i {\n\tfont-weight: 500;\n\tfont-size: 16px;\n\tfont-style: italic;\n\tcolor: #65607b;\n\ttext-transform: uppercase;\n\tmargin-right: 18px;\n}\n\n\n\n.review-content .rating h5 span {\n\tcolor: #c313b7;\n}\n\n\n\n/* ------------------\n\tBlog Page\n---------------------*/\n\n\n\n.blog-page .blog-filter {\n\tmargin-bottom: 77px;\n}\n\n\n\n.big-blog-item {\n\tmargin-bottom: 65px;\n}\n\n\n\n.big-blog-item .blog-thumbnail {\n\tmargin-bottom: 30px;\n}\n\n\n\n.big-blog-item .blog-content .top-meta {\n\tmargin-bottom: 15px;\n}\n\n\n\n.big-blog-item .blog-content h3 {\n\tmax-width: 100%;\n\tmargin-bottom: 25px;\n}\n\n\n\n.big-blog-item .blog-content p {\n\tmargin-bottom: 10px;\n}\n\n\n\n/* ----------------\n  Contact page\n---------------------*/\n\n\n\n.map iframe {\n\twidth: 100%;\n\theight: 600px;\n\tmargin-bottom: 104px;\n}\n\n\n\n.contact-form input,\n.contact-form textarea {\n\twidth: 100%;\n\tborder: none;\n\tbackground-color: transparent;\n\tborder-bottom: 2px solid rgba(255, 255, 255, 0.54);\n\tpadding-bottom: 20px;\n\tmargin-bottom: 30px;\n\tfont-weight: 500;\n\tfont-size: 16px;\n\tfont-style: italic;\n\tcolor: #fff;\n\tline-height: 1;\n}\n\n\n\n.contact-form textarea {\n\tline-height: 1.4;\n\theight: 156px;\n\tmargin-bottom: 48px;\n}\n\n\n\n.contact-form .site-btn img {\n\tleft: 5px;\n}\n\n\n\n.contact-text h3 {\n\tmargin-bottom: 25px;\n}\n\n\n\n.contact-text p {\n\tline-height: 1.9;\n\tcolor: #68647d;\n\tmargin-bottom: 50px;\n}\n\n\n\n.cont-info {\n\toverflow: hidden;\n\tmargin-bottom: 20px;\n}\n\n\n\n.cont-info .ci-icon {\n\tfloat: left;\n\twidth: 32px;\n\tmargin-right: 26px;\n}\n\n\n\n.cont-info .ci-text {\n\toverflow: hidden;\n\tfont-size: 16px;\n\tfont-weight: 500;\n}\n\n\n\n/* ----------------\n  Responsive\n---------------------*/\n\n\n\n@media (min-width: 1200px) {\n\t.container {\n\t\tmax-width: 1175px;\n\t}\n}\n\n\n\n@media (max-width: 1530px) {\n\t.hero-slider .owl-dots {\n\t\twidth: 1170px;\n\t\tleft: calc(50% - 585px);\n\t}\n}\n\n\n\n/* Medium screen : 992px. */\n\n\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n\t.blog-item .blog-thumb {\n\t\twidth: 250px;\n\t}\n\t.hero-item p {\n\t\tfont-size: 22px;\n\t}\n\t.hero-slider .owl-nav .owl-next {\n\t\tright: 30px;\n\t}\n\t.hero-slider .owl-dots {\n\t\twidth: 930px;\n\t\tleft: calc(50% - 465px);\n\t}\n\t.newsletter-form {\n\t\tpadding-left: 0;\n\t}\n\t.newsletter-form input {\n\t\twidth: 100%;\n\t\tmargin-right: 0;\n\t\tmargin-bottom: 40px;\n\t}\n\t.game-filter li {\n\t\twidth: 31px;\n\t\theight: 31px;\n\t}\n\t.game-filter li a {\n\t\tpadding-top: 5px;\n\t}\n}\n\n\n\n/* Tablet :768px. */\n\n\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n\t.header-bar-warp {\n\t\tpadding: 39px 15px 0;\n\t}\n\t.main-menu li a {\n\t\tmargin-right: 10px;\n\t}\n\t.hero-item h2 {\n\t\tfont-size: 110px;\n\t}\n\t.hero-item p {\n\t\tfont-size: 16px;\n\t\tpadding: 0 30px;\n\t}\n\t.hero-slider .owl-nav .owl-next {\n\t\tright: 0;\n\t}\n\t.hero-slider .owl-dots {\n\t\twidth: 690px;\n\t\tleft: calc(50% - 345px);\n\t}\n\t.blog-item .blog-thumb {\n\t\tfloat: none;\n\t\tmargin-right: 0;\n\t\twidth: 100%;\n\t\tmargin-bottom: 30px;\n\t}\n\t.featured-bg {\n\t\tdisplay: none;\n\t}\n\t.featured-box {\n\t\tfloat: none;\n\t\twidth: 100%;\n\t}\n\t.newsletter-form input {\n\t\twidth: 100%;\n\t\tmargin-right: 0;\n\t\tmargin-bottom: 40px;\n\t}\n\t.footer-right-pic {\n\t\tright: 15px;\n\t}\n\t.footer-left-pic {\n\t\tleft: -44px;\n\t}\n\t.game-filter {\n\t\ttext-align: center;\n\t}\n\t.game-filter li {\n\t\tmargin-bottom: 5px;\n\t}\n\t.game-single-content .gs-title {\n\t\tfont-size: 40px;\n\t}\n\t.review-pic img {\n\t\tmin-width: 100%;\n\t\tmargin-bottom: 30px;\n\t}\n\t.contact-text {\n\t\tmargin-bottom: 50px;\n\t}\n}\n\n\n\n/* Large Mobile :480px. */\n\n\n\n@media only screen and (max-width: 767px) {\n\t.header-bar-warp {\n\t\tpadding: 25px 20px 10px;\n\t}\n\t.main-menu.primary-menu {\n\t\tdisplay: none;\n\t}\n\t.slicknav_menu {\n\t\tdisplay: block;\n\t\tbackground: #081624;\n\t}\n\t.slicknav_btn {\n\t\tmargin-right: 10px;\n\t\tbackground: #3a3a3a;\n\t}\n\t.slicknav_nav a:hover,\n\t.slicknav_nav .slicknav_row:hover {\n\t\tbackground: #25394c;\n\t\tcolor: #fff;\n\t}\n\t.hero-item h2 {\n\t\tfont-size: 70px;\n\t}\n\t.hero-item p {\n\t\tfont-size: 18px;\n\t}\n\t.footer-right-pic,\n\t.footer-left-pic {\n\t\tdisplay: none;\n\t}\n\t.hero-slider .owl-nav .owl-next {\n\t\ttop: auto;\n\t\tbottom: 33px;\n\t\tright: 15px;\n\t\tz-index: 99;\n\t}\n\t.hero-slider .owl-dots {\n\t\twidth: 100%;\n\t\tleft: 0;\n\t\tpadding-left: 15px;\n\t}\n\t.intro-text-box {\n\t\tmargin-bottom: 40px;\n\t}\n\t.blog-item .blog-thumb {\n\t\tfloat: none;\n\t\tmargin-right: 0;\n\t\twidth: 100%;\n\t\tmargin-bottom: 30px;\n\t}\n\t.sidebar {\n\t\tpadding-top: 60px;\n\t}\n\t.featured-bg {\n\t\tdisplay: none;\n\t}\n\t.featured-box {\n\t\tfloat: none;\n\t\twidth: 100%;\n\t}\n\t.featured-box .text-box h3 {\n\t\tfont-size: 45px;\n\t}\n\t.newsletter-form {\n\t\tpadding-left: 0;\n\t}\n\t.newsletter-form input {\n\t\twidth: 100%;\n\t\tmargin-right: 0;\n\t\tmargin-bottom: 40px;\n\t}\n\t.video-text:after {\n\t\tleft: 0;\n\t}\n\t.page-top-section {\n\t\theight: 400px;\n\t\tpadding-top: 250px;\n\t}\n\t.game-filter {\n\t\ttext-align: center;\n\t}\n\t.game-filter li {\n\t\tmargin-bottom: 5px;\n\t}\n\t.game-single-content .gs-title {\n\t\tfont-size: 40px;\n\t}\n\t.review-pic img {\n\t\tmin-width: 100%;\n\t\tmargin-bottom: 30px;\n\t}\n\t.contact-text {\n\t\tmargin-bottom: 50px;\n\t}\n\t.review-content .rating {\n\t\tposition: relative;\n\t\tmargin-bottom: 20px;\n\t}\n\t.review-content .rating h5 {\n\t\ttext-align: left;\n\t\tpadding-right: 0;\n\t}\n}\n\n\n\n/* Small Mobile :320px. */\n\n\n\n@media only screen and (max-width: 479px) {\n\t.hero-item h2 {\n\t\tfont-size: 55px;\n\t\tmargin-bottom: 20px;\n\t}\n\t.hero-item p {\n\t\tfont-size: 15px;\n\t}\n\t.video-text h2 {\n\t\tfont-size: 30px;\n\t}\n\t.video-play-btn {\n\t\ttop: calc(30% - 61px);\n\t}\n\t.featured-box {\n\t\tpadding: 100px 15px;\n\t}\n\t.featured-box .text-box h3,\n\t.newsletter-section h2 {\n\t\tfont-size: 35px;\n\t}\n\t.main-menu li a {\n\t\tmargin-right: 20px;\n\t}\n\t.game-author-pic {\n\t\tfloat: none;\n\t\tmargin-bottom: 20px;\n\t}\n}\n\n\n\n.titulo\n{\n\tdisplay: inline-flex;\n\tfont-size: 40px;\n\tfont-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n\tfont-weight: 500;\n\tcolor: rgb(255, 255, 255);\n\tpadding-bottom: 40px;\n\tpadding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3NDQUtzQzs7OztBQUl0QywyQ0FBMkM7Ozs7QUFDM0M7MkNBQzJDOzs7O0FBRTNDOztDQUVDLFlBQVk7Q0FDWixpQ0FBaUM7Q0FDakMsbUNBQW1DO0NBQ25DLDJCQUEyQjtBQUM1Qjs7OztBQUVBOzs7Ozs7Q0FNQyxTQUFTO0NBQ1QsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7OztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7OztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7OztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7OztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7OztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7OztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7OztBQUVBO0NBQ0MsZUFBZTtDQUNmLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCOzs7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOzs7O0FBRUE7Ozs7Q0FJQyxhQUFhO0FBQ2Q7Ozs7QUFFQTs7Q0FFQyxxQkFBcUI7Q0FDckIsYUFBYTtBQUNkOzs7O0FBRUE7O0NBRUMsVUFBVTtDQUNWLFNBQVM7QUFDVjs7OztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7Ozs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCOzs7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLHlCQUF5QjtBQUMxQjs7OztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7Ozs7QUFFQTs7d0JBRXdCOzs7O0FBRXhCO0NBQ0MsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COzs7O0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsc0JBQXNCO0NBQ3RCLCtCQUEr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LG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0MsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0NBQ3BCO0NBQ0E7RUFDQyxpQkFBaUI7Q0FDbEI7Q0FDQTtFQUNDLGFBQWE7Q0FDZDtDQUNBO0VBQ0MsV0FBVztFQUNYLFdBQVc7Q0FDWjtDQUNBO0VBQ0MsZUFBZTtDQUNoQjtDQUNBO0VBQ0MsZUFBZTtDQUNoQjtDQUNBO0VBQ0MsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7Q0FDQTtFQUNDLE9BQU87Q0FDUjtDQUNBO0VBQ0MsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0Msa0JBQWtCO0NBQ25CO0NBQ0E7RUFDQyxrQkFBa0I7Q0FDbkI7Q0FDQTtFQUNDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7Q0FDQTtFQUNDLG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0Msa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtDQUNqQjtBQUNEOzs7O0FBRUEseUJBQXlCOzs7O0FBRXpCO0NBQ0M7RUFDQyxlQUFlO0VBQ2YsbUJBQW1CO0NBQ3BCO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxxQkFBcUI7Q0FDdEI7Q0FDQTtFQUNDLG1CQUFtQjtDQUNwQjtDQUNBOztFQUVDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsV0FBVztFQUNYLG1CQUFtQjtDQUNwQjtBQUNEOzs7O0FBQ0E7O0NBRUMsb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixzSEFBc0g7Q0FDdEgsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtDQUN6QixvQkFBb0I7Q0FDcEIsbUJBQW1CO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBFbmRHYW0gLSBHYW1pbmcgTWFnYXppbmUgVGVtcGxhdGVcbiAgVmVyc2lvbjogMS4wXG4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiBUZW1wbGF0ZSBkZWZhdWx0IENTU1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuaHRtbCxcbmJvZHkge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdGZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcblx0bWFyZ2luOiAwO1xuXHRjb2xvcjogIzExMTExMTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaDEge1xuXHRmb250LXNpemU6IDcwcHg7XG59XG5cbmgyIHtcblx0Zm9udC1zaXplOiAzNnB4O1xufVxuXG5oMyB7XG5cdGZvbnQtc2l6ZTogMzBweDtcbn1cblxuaDQge1xuXHRmb250LXNpemU6IDI0cHg7XG59XG5cbmg1IHtcblx0Zm9udC1zaXplOiAxOHB4O1xufVxuXG5oNiB7XG5cdGZvbnQtc2l6ZTogMTZweDtcbn1cblxucCB7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0Y29sb3I6ICM1ODU4NTg7XG5cdGxpbmUtaGVpZ2h0OiAxLjY7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmltZyB7XG5cdG1heC13aWR0aDogMTAwJTtcbn1cblxuaW5wdXQ6Zm9jdXMsXG5zZWxlY3Q6Zm9jdXMsXG5idXR0b246Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbmE6aG92ZXIsXG5hOmZvY3VzIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG51bCxcbm9sIHtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRjb2xvcjogI2ZmZjtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRjb2xvcjogI2ZmZjtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgSGVscGVyIENTU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uc2VjdGlvbi10aXRsZSBoMiB7XG5cdGZvbnQtc2l6ZTogMzBweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uc2V0LWJnIHtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbn1cblxuLnNwYWQge1xuXHRwYWRkaW5nLXRvcDogMTA1cHg7XG5cdHBhZGRpbmctYm90dG9tOiAxMDVweDtcbn1cblxuLnRleHQtd2hpdGUgaDEsXG4udGV4dC13aGl0ZSBoMixcbi50ZXh0LXdoaXRlIGgzLFxuLnRleHQtd2hpdGUgaDQsXG4udGV4dC13aGl0ZSBoNSxcbi50ZXh0LXdoaXRlIGg2LFxuLnRleHQtd2hpdGUgcCxcbi50ZXh0LXdoaXRlIHNwYW4sXG4udGV4dC13aGl0ZSBsaSxcbi50ZXh0LXdoaXRlIGEge1xuXHRjb2xvcjogI2ZmZjtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQ29tbW9tIGVsZW1lbnRzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qIGJ1dHRvbnMgKi9cblxuLnNpdGUtYnRuIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRib3JkZXI6IG5vbmU7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRtaW4td2lkdGg6IDE4NnB4O1xuXHRwYWRkaW5nOiAyNHB4IDMwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGNvbG9yOiAjMDgxNjI0O1xuXHRsaW5lLWhlaWdodDogbm9ybWFsO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAxO1xufVxuXG4uc2l0ZS1idG4gaW1nIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRsZWZ0OiAxM3B4O1xuXHR3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLnNpdGUtYnRuOmFmdGVyLFxuLnNpdGUtYnRuOmJlZm9yZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Y29udGVudDogXCJcIjtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0bGVmdDogOXB4O1xuXHR0b3A6IDEwcHg7XG5cdGJhY2tncm91bmQ6ICNiMDFiYTU7XG5cdHotaW5kZXg6IC0yO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA5cHggM3B4IHJnYmEoMjI2LCAzMCwgMjI4LCAwLjI0KTtcblx0Ym94LXNoYWRvdzogMCAwIDlweCAzcHggcmdiYSgyMjYsIDMwLCAyMjgsIDAuMjQpO1xufVxuXG4uc2l0ZS1idG46YmVmb3JlIHtcblx0bGVmdDogMDtcblx0dG9wOiAwO1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHR6LWluZGV4OiAtMTtcbn1cblxuLnNpdGUtYnRuOmhvdmVyIHtcblx0Y29sb3I6ICMwODE2MjQ7XG59XG5cbi8qIFByZWxvZGVyICovXG5cbiNwcmVsb2RlciB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHR6LWluZGV4OiA5OTk5OTk7XG5cdGJhY2tncm91bmQ6ICMwMDA7XG59XG5cbi5sb2FkZXIge1xuXHR3aWR0aDogNDBweDtcblx0aGVpZ2h0OiA0MHB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNTAlO1xuXHRsZWZ0OiA1MCU7XG5cdG1hcmdpbi10b3A6IC0xM3B4O1xuXHRtYXJnaW4tbGVmdDogLTEzcHg7XG5cdGJvcmRlci1yYWRpdXM6IDYwcHg7XG5cdGFuaW1hdGlvbjogbG9hZGVyIDAuOHMgbGluZWFyIGluZmluaXRlO1xuXHQtd2Via2l0LWFuaW1hdGlvbjogbG9hZGVyIDAuOHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWRlciB7XG5cdDAlIHtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHRcdGJvcmRlcjogNHB4IHNvbGlkICNmNDQzMzY7XG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG5cdDUwJSB7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG5cdFx0Ym9yZGVyOiA0cHggc29saWQgIzY3M2FiNztcblx0XHRib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cblx0MTAwJSB7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdFx0Ym9yZGVyOiA0cHggc29saWQgI2Y0NDMzNjtcblx0XHRib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRlciB7XG5cdDAlIHtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHRcdGJvcmRlcjogNHB4IHNvbGlkICNmNDQzMzY7XG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG5cdDUwJSB7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuXHRcdGJvcmRlcjogNHB4IHNvbGlkICM2NzNhYjc7XG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG5cdDEwMCUge1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0XHRib3JkZXI6IDRweCBzb2xpZCAjZjQ0MzM2O1xuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLVxuICBIZWFkZXIgc2VjdGlvblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmhlYWRlci1zZWN0aW9uIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcblx0bGVmdDogMDtcblx0dG9wOiAtNDRweDtcblx0ei1pbmRleDogOTk7XG5cdHBhZGRpbmc6IDUwcHggNTBweCAwO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlbmVzL2NhYmVjZXJhLnBuZ1wiKTtcblx0XG5cbn1cblxuLmhlYWRlci13YXJwIHtcblx0bWF4LXdpZHRoOiAxNDk2cHg7XG5cdG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaGVhZGVyLXNvY2lhbCBwLFxuLmZvb3Rlci1zb2NpYWwgcCxcbi5nZW1lLXNvY2lhbC1zaGFyZSBwIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRjb2xvcjogIzkxOTBhNTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uaGVhZGVyLXNvY2lhbCBhLFxuLmZvb3Rlci1zb2NpYWwgYSxcbi5nZW1lLXNvY2lhbC1zaGFyZSBhIHtcblx0ZGlzcGxheTogLW1zLWlubGluZS1mbGV4O1xuXHRkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG5cdGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdHdpZHRoOiAzMnB4O1xuXHRoZWlnaHQ6IDMycHg7XG5cdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG5cdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcblx0LW1zLWZsZXgtcGFjazogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRjb2xvcjogI2ZmZjtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRtYXJnaW4tbGVmdDogMTNweDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4uaGVhZGVyLXNvY2lhbCBhOmhvdmVyLFxuLmZvb3Rlci1zb2NpYWwgYTpob3Zlcixcbi5nZW1lLXNvY2lhbC1zaGFyZSBhOmhvdmVyIHtcblx0YmFja2dyb3VuZDogI2IwMWJhNTtcbn1cblxuLmhlYWRlci1iYXItd2FycCB7XG5cdHBhZGRpbmc6IDM5cHggNDBweCAwO1xuXHRcblx0XG59XG5cbi5zaXRlLWxvZ28ge1xuXHRmbG9hdDogbGVmdDtcbn1cblxuLnVzZXItcGFuZWwge1xuXHRmbG9hdDogcmlnaHQ7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y29sb3I6ICNmZmY7XG5cdHBhZGRpbmctdG9wOiAzcHg7XG59XG5cbi51c2VyLXBhbmVsIGEge1xuXHRjb2xvcjogI2ZmZjtcbn1cblxuLnVzZXItcGFuZWwgYTpob3ZlciB7XG5cdGNvbG9yOiAjYjAxYmE1O1xufVxuXG4ubWFpbi1tZW51IHtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwYWRkaW5nLXRvcDogM3B4O1xufVxuXG4ubWFpbi1tZW51IGxpIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYWluLW1lbnUgbGkgYSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDQwcHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGNvbG9yOiByZ2IoNDEsIDI1MCwgMTQpO1xuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5tYWluLW1lbnUgbGkgYTphZnRlciB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHdpZHRoOiAyMHB4O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdHJpZ2h0OiAwO1xuXHR0b3A6IDFweDtcblxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XG59XG5cbi5tYWluLW1lbnUgbGkgYSBpIHtcblx0Y29sb3I6ICM5MjhkOTI7XG5cdG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5tYWluLW1lbnUgbGkgYTpob3ZlciB7XG5cdGNvbG9yOiAjYjAxYmE1O1xufVxuXG4ubWFpbi1tZW51IGxpIGE6aG92ZXI6YWZ0ZXIge1xuICAgIGNvbG9yOiAjMDAwXG59XG5cbi5tYWluLW1lbnUgbGkgYTpob3ZlciBpIHtcblx0Y29sb3I6ICNiMDFiYTU7XG59XG5cbi5tYWluLW1lbnUgbGk6aG92ZXIgLnN1Yi1tZW51IHtcblx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0b3BhY2l0eTogMTtcblx0bWFyZ2luLXRvcDogMDtcbn1cblxuLm1haW4tbWVudSBsaTpob3Zlcj5hIHtcblx0Y29sb3I6ICNiMDFiYTU7XG59XG5cbi5tYWluLW1lbnUgbGk6aG92ZXI+YTphZnRlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxOTBkMzZcbn1cblxuLm1haW4tbWVudSBsaSAuc3ViLW1lbnUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdHdpZHRoOiAyMjBweDtcblx0bGVmdDogMDtcblx0dG9wOiAxMDAlO1xuXHRwYWRkaW5nOiAyMHB4IDA7XG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0b3BhY2l0eTogMDtcblx0bWFyZ2luLXRvcDogNTBweDtcblx0YmFja2dyb3VuZDogcmdiKDIzMywgMjUwLCAwKTtcblx0ei1pbmRleDogOTk7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC40cztcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuXHRib3gtc2hhZG93OiAycHggN3B4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ubWFpbi1tZW51IGxpIC5zdWItbWVudSBsaSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWFpbi1tZW51IGxpIC5zdWItbWVudSBsaSBhIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGNvbG9yOiAjMDAwO1xuXHRtYXJnaW4tcmlnaHQ6IDA7XG5cdHBhZGRpbmc6IDhweCAzMHB4O1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbi5tYWluLW1lbnUgbGkgLnN1Yi1tZW51IGxpIGE6YWZ0ZXIge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4ubWFpbi1tZW51IGxpIC5zdWItbWVudSBsaSBhOmhvdmVyIHtcblx0Y29sb3I6ICNiMDFiYTU7XG59XG5cbi5zbGlja25hdl9tZW51IHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS1cbiAgSGVybyBzZWN0aW9uXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaGVyby1zbGlkZXIgLm93bC1kb3RzIHtcblx0ZGlzcGxheTogLW1zLWZsZXg7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcblx0ei1pbmRleDogMjtcblx0bGVmdDogY2FsYyg1MCUgLSA3NDBweCk7XG5cdGJvdHRvbTogMzhweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogMTQ5NnB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5oZXJvLXNsaWRlciAub3dsLWRvdHMgLm93bC1kb3Qge1xuXHR3aWR0aDogNDRweDtcblx0aGVpZ2h0OiA0NHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGNvbG9yOiAjZmZmO1xuXHRkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXg7XG5cdGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcblx0ZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcblx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0LXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuXHQtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGVyby1zbGlkZXIgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSB7XG5cdGNvbG9yOiAjYjAxYmE1O1xuXHRib3JkZXI6IDJweCBzb2xpZCAjYjAxYmE1O1xufVxuXG4uaGVyby1zbGlkZXIgLm93bC1uYXYge1xuXHRtYXJnaW4tdG9wOiAtMjRweDtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi5oZXJvLXNsaWRlciAub3dsLW5hdiAub3dsLW5leHQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNTAlO1xuXHRyaWdodDogMTAwcHg7XG59XG5cbi5oZXJvLWl0ZW0ge1xuXHRoZWlnaHQ6IDkyMXB4O1xuXHRwYWRkaW5nLXRvcDogMTI1cHg7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjAxYmE1O1xufVxuXG4uaGVyby1pdGVtIGgyIHtcblx0Zm9udC1zaXplOiAxNjBweDtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGxpbmUtaGVpZ2h0OiAxO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRvcDogMTAwcHg7XG5cdG9wYWNpdHk6IDA7XG59XG5cbi5oZXJvLWl0ZW0gcCB7XG5cdGZvbnQtc2l6ZTogMjRweDtcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0b3BhY2l0eTogMC4zOTtcblx0bWFyZ2luLWJvdHRvbTogNzBweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IDgwcHg7XG5cdG9wYWNpdHk6IDA7XG59XG5cbi5oZXJvLWl0ZW0gLnNpdGUtYnRuIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IDUwcHg7XG5cdG9wYWNpdHk6IDA7XG59XG5cbi5oZXJvLXNsaWRlciAub3dsLWl0ZW0uYWN0aXZlIC5oZXJvLWl0ZW0gaDIsXG4uaGVyby1zbGlkZXIgLm93bC1pdGVtLmFjdGl2ZSAuaGVyby1pdGVtIHAsXG4uaGVyby1zbGlkZXIgLm93bC1pdGVtLmFjdGl2ZSAuaGVyby1pdGVtIC5zaXRlLWJ0biB7XG5cdHRvcDogMDtcblx0b3BhY2l0eTogMTtcbn1cblxuLmhlcm8tc2xpZGVyIC5vd2wtaXRlbS5hY3RpdmUgLmhlcm8taXRlbSBoMiB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwLjRzO1xuXHQtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDAuNHM7XG5cdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMC40cztcbn1cblxuLmhlcm8tc2xpZGVyIC5vd2wtaXRlbS5hY3RpdmUgLmhlcm8taXRlbSBwIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDAuNnM7XG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMC42cztcblx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwLjZzO1xufVxuXG4uaGVyby1zbGlkZXIgLm93bC1pdGVtLmFjdGl2ZSAuaGVyby1pdGVtIC5zaXRlLWJ0biB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwLjhzO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMC44cztcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwLjhzO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDAuOHM7XG59XG5cbi5oZXJvLXNsaWRlciAub3dsLWl0ZW0uYWN0aXZlIC5oZXJvLWl0ZW0gLm9mZmVyLWNhcmQge1xuXHRvcGFjaXR5OiAxO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMXM7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAxcztcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAxcztcblx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAxcztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLVxuICBJbnRybyBzZWN0aW9uXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaW50cm8tc2VjdGlvbiB7XG5cdGJhY2tncm91bmQ6ICMwYzA2MmU7XG5cdHBhZGRpbmc6IDExNXB4IDA7XG59XG5cbi50ZXh0LWJveCAudG9wLW1ldGEge1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50ZXh0LWJveCAudG9wLW1ldGEgYSB7XG5cdGNvbG9yOiAjYjAxYmE1O1xufVxuXG4udGV4dC1ib3ggaDMge1xuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xuXHRtYXgtd2lkdGg6IDM3MHB4O1xufVxuXG4udGV4dC1ib3ggcCB7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y29sb3I6ICM2ODY0N2Q7XG5cdG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi50ZXh0LWJveCAucmVhZC1tb3JlIHtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGNvbG9yOiAjZmZmO1xufVxuXG4udGV4dC1ib3ggLnJlYWQtbW9yZSBpbWcge1xuXHRtYXJnaW4tbGVmdDogMTNweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLVxuIEJsb2cgU2VjdGlvblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmJsb2ctc2VjdGlvbiB7XG5cdC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyM1MDE3NTUrMCwyZDE4NTQrMTAwICovXG5cdGJhY2tncm91bmQ6ICM1MDE3NTU7XG5cdC8qIE9sZCBicm93c2VycyAqL1xuXHQvKiBGRjMuNi0xNSAqL1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzUwMTc1NSAwJSwgIzJkMTg1NCAxMDAlKTtcblx0LyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cblx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTAxNzU1IDAlLCAjMmQxODU0IDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MDE3NTUgMCUsICMyZDE4NTQgMTAwJSk7XG5cdC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzUwMTc1NScsIGVuZENvbG9yc3RyPScjMmQxODU0JywgR3JhZGllbnRUeXBlPTEpO1xuXHQvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXG59XG5cbi5ibG9nLXNlY3Rpb24gLnNlY3Rpb24tdGl0bGUge1xuXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uYmxvZy1maWx0ZXIge1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLmJsb2ctZmlsdGVyIGxpIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYmxvZy1maWx0ZXIgbGkgYSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRjb2xvcjogI2ZmZjtcblx0cGFkZGluZzogMTZweCAzNnB4O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGJhY2tncm91bmQ6ICM2ZjJiOTU7XG5cdGxpbmUtaGVpZ2h0OiAxLjE7XG5cdG1hcmdpbi1yaWdodDogN3B4O1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcblx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5ibG9nLWZpbHRlciBsaSBhOmhvdmVyIHtcblx0YmFja2dyb3VuZDogI2IwMWJhNTtcbn1cblxuLmJsb2ctaXRlbSB7XG5cdG1hcmdpbi10b3A6IDg2cHg7XG59XG5cbi5ibG9nLWl0ZW0gLmJsb2ctdGh1bWIge1xuXHR3aWR0aDogMzYycHg7XG5cdGZsb2F0OiBsZWZ0O1xuXHRtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi5ibG9nLWl0ZW0gLnRleHQtYm94IHtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJsb2ctaXRlbSAudGV4dC1ib3ggcCB7XG5cdG1hcmdpbi1ib3R0b206IDQycHg7XG59XG5cbi53aWRnZXQtaXRlbSB7XG5cdG1hcmdpbi1ib3R0b206IDg1cHg7XG59XG5cbi53aWRnZXQtaXRlbTpsYXN0LWNoaWxkIHtcblx0bWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLndpZGdldC1pdGVtIC53aWRnZXQtdGl0bGUge1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRwYWRkaW5nLWxlZnQ6IDM4cHg7XG5cdG1hcmdpbi1ib3R0b206IDQ4cHg7XG59XG5cbi50cmVuZGluZy13aWRnZXQgLnR3LWl0ZW0ge1xuXHRtYXJnaW4tYm90dG9tOiAzOHB4O1xufVxuXG4udHJlbmRpbmctd2lkZ2V0IC50dy1pdGVtOmxhc3QtY2hpbGQge1xuXHRtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udHJlbmRpbmctd2lkZ2V0IC50dy10aHVtYiB7XG5cdGZsb2F0OiBsZWZ0O1xuXHRtYXJnaW4tcmlnaHQ6IDE3cHg7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50cmVuZGluZy13aWRnZXQgLnR3LXRleHQgLnR3LW1ldGEge1xuXHRjb2xvcjogIzY4NjQ3ZDtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5cbi50cmVuZGluZy13aWRnZXQgLnR3LXRleHQgLnR3LW1ldGEgYSB7XG5cdGNvbG9yOiAjYjAxYmE1O1xufVxuXG4udHJlbmRpbmctd2lkZ2V0IC50dy10ZXh0IGg1IHtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0bGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmNhdGVnb3JpZXMtd2lkZ2V0IHtcblx0YmFja2dyb3VuZDogIzM0MTY0Yjtcblx0cGFkZGluZzogNTVweCAwIDI1cHg7XG59XG5cbi5jYXRlZ29yaWVzLXdpZGdldCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdHBhZGRpbmc6IDAgMzhweDtcbn1cblxuLmNhdGVnb3JpZXMtd2lkZ2V0IHVsIGxpIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYXRlZ29yaWVzLXdpZGdldCB1bCBsaSBhIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6ICM2ODY0N2Q7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdHBhZGRpbmctcmlnaHQ6IDE5cHg7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjJzO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycztcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgLTEyMCUgY2VudGVyO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDExcHg7XG59XG5cbi5jYXRlZ29yaWVzLXdpZGdldCB1bCBsaSBhOmhvdmVyIHtcblx0Y29sb3I6ICNiMDFiYTU7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcbn1cblxuLnNlYXJjaC13aWRnZXQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZWFyY2gtd2lkZ2V0IGlucHV0IHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogNDBweDtcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgIzcyNjI4Yjtcblx0YmFja2dyb3VuZDogbm9uZTtcblx0cGFkZGluZy1yaWdodDogNjBweDtcblx0Y29sb3I6ICNmZmY7XG59XG5cbi5zZWFyY2gtd2lkZ2V0IGJ1dHRvbiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDA7XG5cdHRvcDogMDtcblx0Y29sb3I6ICNiMDFiYTU7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdGJvcmRlcjogbm9uZTtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmxhdGVzdC1jb21tZW50cyAubGMtaXRlbSB7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5sYXRlc3QtY29tbWVudHMgLmxjLWl0ZW06bGFzdC1jaGlsZCB7XG5cdG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5sYXRlc3QtY29tbWVudHMgLmxjLWl0ZW0gLmxjLWF2YXRhciB7XG5cdHdpZHRoOiA2NHB4O1xuXHRoZWlnaHQ6IDY0cHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0ZmxvYXQ6IGxlZnQ7XG5cdG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmxhdGVzdC1jb21tZW50cyAubGMtaXRlbSAudHctdGV4dCB7XG5cdHBhZGRpbmctdG9wOiAxMHB4O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG4ubGF0ZXN0LWNvbW1lbnRzIC5sYy1pdGVtIC50dy10ZXh0IGEge1xuXHRjb2xvcjogI2IwMWJhNTtcbn1cblxuLmxhdGVzdC1jb21tZW50cyAubGMtaXRlbSAudHctdGV4dCBzcGFuIHtcblx0Y29sb3I6ICM2ODY0N2Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEludHJvIHZpZGVvIHNlY3Rpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmludHJvLXZpZGVvLXNlY3Rpb24ge1xuXHRoZWlnaHQ6IDc1N3B4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi52aWRlby1wbGF5LWJ0biB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogY2FsYyg1MCUgLSA2MXB4KTtcblx0dG9wOiBjYWxjKDUwJSAtIDYxcHgpO1xuXHR3aWR0aDogMTIycHg7XG5cdGhlaWdodDogMTIycHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZy10b3A6IDM1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KTtcbn1cblxuLnZpZGVvLXRleHQge1xuXHRtYXJnaW4tYm90dG9tOiA4MHB4O1xuXHRwYWRkaW5nOiAyN3B4IDA7XG5cdHBhZGRpbmctbGVmdDogMjVweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udmlkZW8tdGV4dCBoMiB7XG5cdGZvbnQtc2l6ZTogNDhweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRjb2xvcjogI2ZmZjtcblx0bWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4udmlkZW8tdGV4dCBwIHtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRjb2xvcjogI2EzYTFiMztcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0bWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnZpZGVvLXRleHQ6YWZ0ZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHdpZHRoOiA5cHg7XG5cdGhlaWdodDogMTAwJTtcblx0bGVmdDogLTIycHg7XG5cdHRvcDogMDtcblx0Ym9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZGU0NmQ2O1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA5cHggM3B4IHJnYmEoMjI2LCAzMCwgMjI4LCAwLjUpO1xuXHRib3gtc2hhZG93OiAwIDAgOXB4IDNweCByZ2JhKDIyNiwgMzAsIDIyOCwgMC41KTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLVxuICBGZWF0dXJlZCBzZWN0aW9uXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uZmVhdHVyZWQtc2VjdGlvbiB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZlYXR1cmVkLWJnIHtcblx0d2lkdGg6IGNhbGMoNTAlIC0gMTU2cHgpO1xuXHRmbG9hdDogbGVmdDtcblx0aGVpZ2h0OiAxMDAlO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZmVhdHVyZWQtYm94IHtcblx0ZmxvYXQ6IHJpZ2h0O1xuXHR3aWR0aDogY2FsYyg1MCUgKyAxNTZweCk7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdHBhZGRpbmc6IDEwMHB4IDUwcHggMTMwcHggNzlweDtcbn1cblxuLmZlYXR1cmVkLWJveCAudGV4dC1ib3gge1xuXHRtYXgtd2lkdGg6IDgxMHB4O1xufVxuXG4uZmVhdHVyZWQtYm94IC50ZXh0LWJveCAudG9wLW1ldGEge1xuXHRjb2xvcjogIzY4NjQ3ZDtcbn1cblxuLmZlYXR1cmVkLWJveCAudGV4dC1ib3ggaDMge1xuXHRmb250LXNpemU6IDYwcHg7XG5cdG1heC13aWR0aDogMTAwJTtcbn1cblxuLmZlYXR1cmVkLWJveCAudGV4dC1ib3ggcCB7XG5cdGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZlYXR1cmVkLWJveCAudGV4dC1ib3ggLnJlYWQtbW9yZSB7XG5cdGNvbG9yOiAjMjUxZTJmO1xufVxuXG4uZ3JhZGllbnQtYmcsXG4ubmV3c2xldHRlci1zZWN0aW9uIHtcblx0YmFja2dyb3VuZDogIzNlMGYzZDtcblx0LyogT2xkIGJyb3dzZXJzICovXG5cdC8qIEZGMy42LTE1ICovXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMzZTBmM2QgMCUsICMxYzBmM2IgMTAwJSk7XG5cdC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCMzZTBmM2QpLCB0bygjMWMwZjNiKSk7XG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjM2UwZjNkIDAlLCAjMWMwZjNiIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzZTBmM2QgMCUsICMxYzBmM2IgMTAwJSk7XG5cdC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzNlMGYzZCcsIGVuZENvbG9yc3RyPScjMWMwZjNiJywgR3JhZGllbnRUeXBlPTEpO1xuXHQvKiBJRTYtOSAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBOZXdzbGV0dGVyIHNlY3Rpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4ubmV3c2xldHRlci1zZWN0aW9uIHtcblx0cGFkZGluZzogMTA4cHggMCA5NXB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXdzbGV0dGVyLXNlY3Rpb24gaDIge1xuXHRmb250LXNpemU6IDQ4cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdG1hcmdpbi1ib3R0b206IDczcHg7XG59XG5cbi5uZXdzbGV0dGVyLWZvcm0ge1xuXHRwYWRkaW5nLWxlZnQ6IDU2cHg7XG59XG5cbi5uZXdzbGV0dGVyLWZvcm0gaW5wdXQge1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0Y29sb3I6ICNmZmY7XG5cdHdpZHRoOiA3ODdweDtcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgIzliOTFhNjtcblx0YmFja2dyb3VuZDogbm9uZTtcblx0aGVpZ2h0OiA2M3B4O1xuXHRtYXJnaW4tcmlnaHQ6IDI2cHg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS1cbiAgRm9vdGVyIHNlY3Rpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5mb290ZXItc2VjdGlvbiB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0LyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzMzMGQzOCswLDE5MGQzNisxMDAgKi9cblx0YmFja2dyb3VuZDogIzMzMGQzODtcblx0LyogT2xkIGJyb3dzZXJzICovXG5cdC8qIEZGMy42LTE1ICovXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMzMzBkMzggMCUsICMxOTBkMzYgMTAwJSk7XG5cdC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCMzMzBkMzgpLCB0bygjMTkwZDM2KSk7XG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMzMwZDM4IDAlLCAjMTkwZDM2IDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzMzBkMzggMCUsICMxOTBkMzYgMTAwJSk7XG5cdC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzMzMGQzOCcsIGVuZENvbG9yc3RyPScjMTkwZDM2JywgR3JhZGllbnRUeXBlPTEpO1xuXHQvKiBJRTYtOSAqL1xufVxuXG4uZm9vdGVyLXNlY3Rpb24gLmNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZzogNjBweCAxNXB4IDI1cHg7XG59XG5cbi5mb290ZXItbGVmdC1waWMge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IC0xM3B4O1xuXHRib3R0b206IDE5cHg7XG59XG5cbi5mb290ZXItcmlnaHQtcGljIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogNTBweDtcblx0Ym90dG9tOiAxOXB4O1xufVxuXG4uZm9vdGVyLW1lbnUge1xuXHRwYWRkaW5nLXRvcDogNjJweDtcbn1cblxuLmZvb3Rlci1tZW51IGxpOmxhc3QtY2hpbGQgYSB7XG5cdG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmZvb3Rlci1zb2NpYWwge1xuXHRwYWRkaW5nLXRvcDogMjBweDtcblx0cGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbi5mb290ZXItc29jaWFsIGE6Zmlyc3QtY2hpbGQge1xuXHRtYXJnaW4tbGVmdDogMDtcbn1cblxuLmNvcHlyaWdodCB7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y29sb3I6ICM5MTkwYTU7XG5cdG9wYWNpdHk6IDAuMjA7XG59XG5cbi5jb3B5cmlnaHQgYSB7XG5cdGNvbG9yOiAjOTE5MGE1O1xufVxuXG4uY29weXJpZ2h0IGE6aG92ZXIge1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLVxuICBPdGhlciBQYWdlc1xuPT09PT09PT09PT09PT09PT09PT09XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4ucGFnZS10b3Atc2VjdGlvbiB7XG5cdGhlaWdodDogMzU1cHg7XG5cdHBhZGRpbmctdG9wOiAyMTBweDtcbn1cblxuLnBhZ2UtaW5mbyB7XG5cdG1heC13aWR0aDogMTQ5NnB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogI2ZmZjtcblx0cGFkZGluZy1sZWZ0OiA2MHB4O1xufVxuXG4ucGFnZS1pbmZvIGgyIHtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc2l6ZTogNDhweDtcbn1cblxuLnNpdGUtYnJlYWRjcnVtYiBhLFxuLnNpdGUtYnJlYWRjcnVtYiBzcGFuIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRjb2xvcjogI2ZmZjtcblx0bWFyZ2luOiAwIDEwcHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zaXRlLWJyZWFkY3J1bWIgYTpmaXJzdC1jaGlsZCB7XG5cdG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2l0ZS1icmVhZGNydW1iIHNwYW4ge1xuXHRjb2xvcjogI2MzMTNiNztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS1cbiAgR2FtZXMgUGFnZVxuLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uZ2FtZXMtc2VjdGlvbiB7XG5cdHBhZGRpbmc6IDEwOHB4IDA7XG5cdC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyM1MDE3NTUrMCwyZDE4NTQrMTAwICovXG5cdGJhY2tncm91bmQ6ICM1MDE3NTU7XG5cdC8qIE9sZCBicm93c2VycyAqL1xuXHQvKiBGRjMuNi0xNSAqL1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzUwMTc1NSAwJSwgIzJkMTg1NCAxMDAlKTtcblx0LyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cblx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTAxNzU1IDAlLCAjMmQxODU0IDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MDE3NTUgMCUsICMyZDE4NTQgMTAwJSk7XG5cdC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzUwMTc1NScsIGVuZENvbG9yc3RyPScjMmQxODU0JywgR3JhZGllbnRUeXBlPTEpO1xuXHQvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXG59XG5cbi5nYW1lLWZpbHRlciB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdG1hcmdpbi1ib3R0b206IDgycHg7XG59XG5cbi5nYW1lLWZpbHRlciBsaSB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0d2lkdGg6IDQwcHg7XG5cdGhlaWdodDogMzRweDtcblx0YmFja2dyb3VuZDogIzUwM2M2ZTtcblx0Ym9yZGVyLXJhZGl1czogMTdweDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4uZ2FtZS1maWx0ZXIgbGk6aG92ZXIge1xuXHRiYWNrZ3JvdW5kOiAjYzMxM2I3O1xufVxuXG4uZ2FtZS1maWx0ZXIgbGkgYSB7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Y29sb3I6ICNmZmY7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmctdG9wOiA3cHg7XG59XG5cbi5nYW1lLWl0ZW0ge1xuXHRtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuXG4uZ2FtZS1pdGVtIGg1IHtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0cGFkZGluZy10b3A6IDMwcHg7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5nYW1lLWl0ZW0gLnJlYWQtbW9yZSB7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRjb2xvcjogI2IwMWJhNTtcbn1cblxuLmdhbWUtaXRlbSAucmVhZC1tb3JlIGltZyB7XG5cdG1hcmdpbi1sZWZ0OiAxM3B4O1xufVxuXG4uc2l0ZS1wYWdpbmF0aW9uIHtcblx0ZGlzcGxheTogLW1zLWZsZXg7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcblx0ZGlzcGxheTogZmxleDtcbn1cblxuLnNpdGUtcGFnaW5hdGlvbiBhIHtcblx0d2lkdGg6IDM4cHg7XG5cdGhlaWdodDogNDRweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRjb2xvcjogI2ZmZjtcblx0ZGlzcGxheTogLW1zLWlubGluZS1mbGV4O1xuXHRkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG5cdGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG5cdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcblx0LW1zLWZsZXgtcGFjazogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG5cdHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4uc2l0ZS1wYWdpbmF0aW9uIGEuYWN0aXZlIHtcblx0d2lkdGg6IDQ0cHg7XG5cdG1hcmdpbjogMCAxMHB4O1xuXHRjb2xvcjogI2IwMWJhNTtcblx0Ym9yZGVyOiAycHggc29saWQgI2IwMWJhNTtcbn1cblxuLnNpdGUtcGFnaW5hdGlvbiBhLmFjdGl2ZTpmaXJzdC1jaGlsZCB7XG5cdG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uZ2FtZS1wYWdlLXNpZGViZXIgLndpZGdldC1pdGVtIHtcblx0bWFyZ2luLWJvdHRvbTogNTVweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEdhbWUgc2luZ2xlIFBhZ2Vcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5nYW1lcy1zaW5nbGUtcGFnZSxcbi5yZXZpZXctc2VjdGlvbixcbi5ibG9nLXBhZ2UsXG4uY29udGFjdC1wYWdlIHtcblx0cGFkZGluZzogMTA0cHggMDtcblx0LyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzUwMTc1NSswLDJkMTg1NCsxMDAgKi9cblx0YmFja2dyb3VuZDogIzUwMTc1NTtcblx0LyogT2xkIGJyb3dzZXJzICovXG5cdC8qIEZGMy42LTE1ICovXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTAxNzU1IDAlLCAjMmQxODU0IDEwMCUpO1xuXHQvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MDE3NTUgMCUsICMyZDE4NTQgMTAwJSk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzUwMTc1NSAwJSwgIzJkMTg1NCAxMDAlKTtcblx0LyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG5cdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjNTAxNzU1JywgZW5kQ29sb3JzdHI9JyMyZDE4NTQnLCBHcmFkaWVudFR5cGU9MSk7XG5cdC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cbn1cblxuLmdhbWUtc2luZ2xlLXByZXZpZXcge1xuXHRtYXJnaW4tYm90dG9tOiAxMDhweDtcbn1cblxuLmdhbWUtc2luZ2xlLWNvbnRlbnQgLmdzLW1ldGEge1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGNvbG9yOiAjNjg2NDdkO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZ2FtZS1zaW5nbGUtY29udGVudCAuZ3MtbWV0YSBhIHtcblx0Y29sb3I6ICNiMDFiYTU7XG59XG5cbi5nYW1lLXNpbmdsZS1jb250ZW50IC5ncy10aXRsZSB7XG5cdGZvbnQtc2l6ZTogNjBweDtcblx0Y29sb3I6ICNmZmY7XG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5nYW1lLXNpbmdsZS1jb250ZW50IGg0IHtcblx0Y29sb3I6ICNiMDFiYTU7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5nYW1lLXNpbmdsZS1jb250ZW50IHAge1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGNvbG9yOiAjNjg2NDdkO1xuXHRsaW5lLWhlaWdodDogMS44O1xuXHRtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuXG4ucmF0aW5nLXdpZGdldCB7XG5cdGJhY2tncm91bmQ6ICMzNDE2NGI7XG5cdHBhZGRpbmc6IDU1cHggMCAzMHB4O1xufVxuXG4ucmF0aW5nLXdpZGdldCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdHBhZGRpbmc6IDAgMzhweDtcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnJhdGluZy13aWRnZXQgdWwgbGkge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogI2IwMWJhNTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnJhdGluZy13aWRnZXQgdWwgbGkgc3BhbiB7XG5cdGZsb2F0OiByaWdodDtcblx0Y29sb3I6ICM2ODY0N2Q7XG59XG5cbi5yYXRpbmctd2lkZ2V0IGg1IHtcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdGZvbnQtc2l6ZTogMzZweDtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdHBhZGRpbmctcmlnaHQ6IDM4cHg7XG59XG5cbi5yYXRpbmctd2lkZ2V0IGg1IGkge1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0Y29sb3I6ICM2NTYwN2I7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdG1hcmdpbi1yaWdodDogMThweDtcbn1cblxuLnJhdGluZy13aWRnZXQgaDUgc3BhbiB7XG5cdGNvbG9yOiAjYjAxYmE1O1xufVxuXG4udGVzdGltb25pYWxzLXdpZGdldCB7XG5cdGJhY2tncm91bmQ6ICMzNDE2NGI7XG5cdHBhZGRpbmc6IDU1cHggMCA1MHB4O1xufVxuXG4udGVzdGltb25pYWxzLXdpZGdldCAudGVzdGltLXRleHQge1xuXHRwYWRkaW5nOiAwIDMwcHg7XG59XG5cbi50ZXN0aW1vbmlhbHMtd2lkZ2V0IC50ZXN0aW0tdGV4dCBwIHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRjb2xvcjogIzY4NjQ3ZDtcblx0bGluZS1oZWlnaHQ6IDEuODtcblx0bWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnRlc3RpbW9uaWFscy13aWRnZXQgLnRlc3RpbS10ZXh0IGg2IHtcblx0Y29sb3I6ICM2ODY0N2Q7XG5cdHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLnRlc3RpbW9uaWFscy13aWRnZXQgLnRlc3RpbS10ZXh0IGg2IHNwYW4ge1xuXHRjb2xvcjogI2IwMWJhNTtcbn1cblxuLmdhbWUtYXV0aG9yLXNlY3Rpb24ge1xuXHRiYWNrZ3JvdW5kOiAjM2ExODU0O1xuXHRwYWRkaW5nOiA1MXB4IDA7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5nYW1lLWF1dGhvci1waWMge1xuXHR3aWR0aDogMTE3cHg7XG5cdGhlaWdodDogMTE3cHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0ZmxvYXQ6IGxlZnQ7XG5cdG1hcmdpbi1yaWdodDogNTVweDtcbn1cblxuLmdhbWUtYXV0aG9yLWluZm8ge1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmdhbWUtYXV0aG9yLWluZm8gaDQge1xuXHRjb2xvcjogI2ZmZjtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmdhbWUtYXV0aG9yLWluZm8gaDQgc3BhbiB7XG5cdGNvbG9yOiAjYjAxYmE1O1xufVxuXG4uZ2FtZS1hdXRob3ItaW5mbyBwIHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRjb2xvcjogIzY4NjQ3ZDtcblx0bGluZS1oZWlnaHQ6IDEuODtcblx0bWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLVxuICBSZXZpZXcgc2VjdGlvblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLnJldmlldy1pdGVtIHtcblx0bWFyZ2luLWJvdHRvbTogODdweDtcbn1cblxuLnJldmlldy1jb250ZW50IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucmV2aWV3LWNvbnRlbnQgaDMge1xuXHRtYXgtd2lkdGg6IDEwMCU7XG5cdG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi5yZXZpZXctY29udGVudCBwIHtcblx0bWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnJldmlldy1jb250ZW50IC5yYXRpbmcge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiAwO1xuXHR0b3A6IDA7XG59XG5cbi5yZXZpZXctY29udGVudCAucmF0aW5nIGg1IHtcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdGZvbnQtc2l6ZTogMzZweDtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdHBhZGRpbmctcmlnaHQ6IDM4cHg7XG59XG5cbi5yZXZpZXctY29udGVudCAucmF0aW5nIGg1IGkge1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0Y29sb3I6ICM2NTYwN2I7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdG1hcmdpbi1yaWdodDogMThweDtcbn1cblxuLnJldmlldy1jb250ZW50IC5yYXRpbmcgaDUgc3BhbiB7XG5cdGNvbG9yOiAjYzMxM2I3O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS1cblx0QmxvZyBQYWdlXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uYmxvZy1wYWdlIC5ibG9nLWZpbHRlciB7XG5cdG1hcmdpbi1ib3R0b206IDc3cHg7XG59XG5cbi5iaWctYmxvZy1pdGVtIHtcblx0bWFyZ2luLWJvdHRvbTogNjVweDtcbn1cblxuLmJpZy1ibG9nLWl0ZW0gLmJsb2ctdGh1bWJuYWlsIHtcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmJpZy1ibG9nLWl0ZW0gLmJsb2ctY29udGVudCAudG9wLW1ldGEge1xuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uYmlnLWJsb2ctaXRlbSAuYmxvZy1jb250ZW50IGgzIHtcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uYmlnLWJsb2ctaXRlbSAuYmxvZy1jb250ZW50IHAge1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tXG4gIENvbnRhY3QgcGFnZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLm1hcCBpZnJhbWUge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiA2MDBweDtcblx0bWFyZ2luLWJvdHRvbTogMTA0cHg7XG59XG5cbi5jb250YWN0LWZvcm0gaW5wdXQsXG4uY29udGFjdC1mb3JtIHRleHRhcmVhIHtcblx0d2lkdGg6IDEwMCU7XG5cdGJvcmRlcjogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQpO1xuXHRwYWRkaW5nLWJvdHRvbTogMjBweDtcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGNvbG9yOiAjZmZmO1xuXHRsaW5lLWhlaWdodDogMTtcbn1cblxuLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XG5cdGxpbmUtaGVpZ2h0OiAxLjQ7XG5cdGhlaWdodDogMTU2cHg7XG5cdG1hcmdpbi1ib3R0b206IDQ4cHg7XG59XG5cbi5jb250YWN0LWZvcm0gLnNpdGUtYnRuIGltZyB7XG5cdGxlZnQ6IDVweDtcbn1cblxuLmNvbnRhY3QtdGV4dCBoMyB7XG5cdG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5jb250YWN0LXRleHQgcCB7XG5cdGxpbmUtaGVpZ2h0OiAxLjk7XG5cdGNvbG9yOiAjNjg2NDdkO1xuXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uY29udC1pbmZvIHtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbnQtaW5mbyAuY2ktaWNvbiB7XG5cdGZsb2F0OiBsZWZ0O1xuXHR3aWR0aDogMzJweDtcblx0bWFyZ2luLXJpZ2h0OiAyNnB4O1xufVxuXG4uY29udC1pbmZvIC5jaS10ZXh0IHtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tXG4gIFJlc3BvbnNpdmVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcblx0LmNvbnRhaW5lciB7XG5cdFx0bWF4LXdpZHRoOiAxMTc1cHg7XG5cdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE1MzBweCkge1xuXHQuaGVyby1zbGlkZXIgLm93bC1kb3RzIHtcblx0XHR3aWR0aDogMTE3MHB4O1xuXHRcdGxlZnQ6IGNhbGMoNTAlIC0gNTg1cHgpO1xuXHR9XG59XG5cbi8qIE1lZGl1bSBzY3JlZW4gOiA5OTJweC4gKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuXHQuYmxvZy1pdGVtIC5ibG9nLXRodW1iIHtcblx0XHR3aWR0aDogMjUwcHg7XG5cdH1cblx0Lmhlcm8taXRlbSBwIHtcblx0XHRmb250LXNpemU6IDIycHg7XG5cdH1cblx0Lmhlcm8tc2xpZGVyIC5vd2wtbmF2IC5vd2wtbmV4dCB7XG5cdFx0cmlnaHQ6IDMwcHg7XG5cdH1cblx0Lmhlcm8tc2xpZGVyIC5vd2wtZG90cyB7XG5cdFx0d2lkdGg6IDkzMHB4O1xuXHRcdGxlZnQ6IGNhbGMoNTAlIC0gNDY1cHgpO1xuXHR9XG5cdC5uZXdzbGV0dGVyLWZvcm0ge1xuXHRcdHBhZGRpbmctbGVmdDogMDtcblx0fVxuXHQubmV3c2xldHRlci1mb3JtIGlucHV0IHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXJnaW4tcmlnaHQ6IDA7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDBweDtcblx0fVxuXHQuZ2FtZS1maWx0ZXIgbGkge1xuXHRcdHdpZHRoOiAzMXB4O1xuXHRcdGhlaWdodDogMzFweDtcblx0fVxuXHQuZ2FtZS1maWx0ZXIgbGkgYSB7XG5cdFx0cGFkZGluZy10b3A6IDVweDtcblx0fVxufVxuXG4vKiBUYWJsZXQgOjc2OHB4LiAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcblx0LmhlYWRlci1iYXItd2FycCB7XG5cdFx0cGFkZGluZzogMzlweCAxNXB4IDA7XG5cdH1cblx0Lm1haW4tbWVudSBsaSBhIHtcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdH1cblx0Lmhlcm8taXRlbSBoMiB7XG5cdFx0Zm9udC1zaXplOiAxMTBweDtcblx0fVxuXHQuaGVyby1pdGVtIHAge1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRwYWRkaW5nOiAwIDMwcHg7XG5cdH1cblx0Lmhlcm8tc2xpZGVyIC5vd2wtbmF2IC5vd2wtbmV4dCB7XG5cdFx0cmlnaHQ6IDA7XG5cdH1cblx0Lmhlcm8tc2xpZGVyIC5vd2wtZG90cyB7XG5cdFx0d2lkdGg6IDY5MHB4O1xuXHRcdGxlZnQ6IGNhbGMoNTAlIC0gMzQ1cHgpO1xuXHR9XG5cdC5ibG9nLWl0ZW0gLmJsb2ctdGh1bWIge1xuXHRcdGZsb2F0OiBub25lO1xuXHRcdG1hcmdpbi1yaWdodDogMDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHR9XG5cdC5mZWF0dXJlZC1iZyB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHQuZmVhdHVyZWQtYm94IHtcblx0XHRmbG9hdDogbm9uZTtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXHQubmV3c2xldHRlci1mb3JtIGlucHV0IHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXJnaW4tcmlnaHQ6IDA7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDBweDtcblx0fVxuXHQuZm9vdGVyLXJpZ2h0LXBpYyB7XG5cdFx0cmlnaHQ6IDE1cHg7XG5cdH1cblx0LmZvb3Rlci1sZWZ0LXBpYyB7XG5cdFx0bGVmdDogLTQ0cHg7XG5cdH1cblx0LmdhbWUtZmlsdGVyIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblx0LmdhbWUtZmlsdGVyIGxpIHtcblx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XG5cdH1cblx0LmdhbWUtc2luZ2xlLWNvbnRlbnQgLmdzLXRpdGxlIHtcblx0XHRmb250LXNpemU6IDQwcHg7XG5cdH1cblx0LnJldmlldy1waWMgaW1nIHtcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0fVxuXHQuY29udGFjdC10ZXh0IHtcblx0XHRtYXJnaW4tYm90dG9tOiA1MHB4O1xuXHR9XG59XG5cbi8qIExhcmdlIE1vYmlsZSA6NDgwcHguICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblx0LmhlYWRlci1iYXItd2FycCB7XG5cdFx0cGFkZGluZzogMjVweCAyMHB4IDEwcHg7XG5cdH1cblx0Lm1haW4tbWVudS5wcmltYXJ5LW1lbnUge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0LnNsaWNrbmF2X21lbnUge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGJhY2tncm91bmQ6ICMwODE2MjQ7XG5cdH1cblx0LnNsaWNrbmF2X2J0biB7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdGJhY2tncm91bmQ6ICMzYTNhM2E7XG5cdH1cblx0LnNsaWNrbmF2X25hdiBhOmhvdmVyLFxuXHQuc2xpY2tuYXZfbmF2IC5zbGlja25hdl9yb3c6aG92ZXIge1xuXHRcdGJhY2tncm91bmQ6ICMyNTM5NGM7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdH1cblx0Lmhlcm8taXRlbSBoMiB7XG5cdFx0Zm9udC1zaXplOiA3MHB4O1xuXHR9XG5cdC5oZXJvLWl0ZW0gcCB7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHR9XG5cdC5mb290ZXItcmlnaHQtcGljLFxuXHQuZm9vdGVyLWxlZnQtcGljIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cdC5oZXJvLXNsaWRlciAub3dsLW5hdiAub3dsLW5leHQge1xuXHRcdHRvcDogYXV0bztcblx0XHRib3R0b206IDMzcHg7XG5cdFx0cmlnaHQ6IDE1cHg7XG5cdFx0ei1pbmRleDogOTk7XG5cdH1cblx0Lmhlcm8tc2xpZGVyIC5vd2wtZG90cyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bGVmdDogMDtcblx0XHRwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cdH1cblx0LmludHJvLXRleHQtYm94IHtcblx0XHRtYXJnaW4tYm90dG9tOiA0MHB4O1xuXHR9XG5cdC5ibG9nLWl0ZW0gLmJsb2ctdGh1bWIge1xuXHRcdGZsb2F0OiBub25lO1xuXHRcdG1hcmdpbi1yaWdodDogMDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHR9XG5cdC5zaWRlYmFyIHtcblx0XHRwYWRkaW5nLXRvcDogNjBweDtcblx0fVxuXHQuZmVhdHVyZWQtYmcge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0LmZlYXR1cmVkLWJveCB7XG5cdFx0ZmxvYXQ6IG5vbmU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0LmZlYXR1cmVkLWJveCAudGV4dC1ib3ggaDMge1xuXHRcdGZvbnQtc2l6ZTogNDVweDtcblx0fVxuXHQubmV3c2xldHRlci1mb3JtIHtcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdH1cblx0Lm5ld3NsZXR0ZXItZm9ybSBpbnB1dCB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luLXJpZ2h0OiAwO1xuXHRcdG1hcmdpbi1ib3R0b206IDQwcHg7XG5cdH1cblx0LnZpZGVvLXRleHQ6YWZ0ZXIge1xuXHRcdGxlZnQ6IDA7XG5cdH1cblx0LnBhZ2UtdG9wLXNlY3Rpb24ge1xuXHRcdGhlaWdodDogNDAwcHg7XG5cdFx0cGFkZGluZy10b3A6IDI1MHB4O1xuXHR9XG5cdC5nYW1lLWZpbHRlciB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdC5nYW1lLWZpbHRlciBsaSB7XG5cdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHR9XG5cdC5nYW1lLXNpbmdsZS1jb250ZW50IC5ncy10aXRsZSB7XG5cdFx0Zm9udC1zaXplOiA0MHB4O1xuXHR9XG5cdC5yZXZpZXctcGljIGltZyB7XG5cdFx0bWluLXdpZHRoOiAxMDAlO1xuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdH1cblx0LmNvbnRhY3QtdGV4dCB7XG5cdFx0bWFyZ2luLWJvdHRvbTogNTBweDtcblx0fVxuXHQucmV2aWV3LWNvbnRlbnQgLnJhdGluZyB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdH1cblx0LnJldmlldy1jb250ZW50IC5yYXRpbmcgaDUge1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0cGFkZGluZy1yaWdodDogMDtcblx0fVxufVxuXG4vKiBTbWFsbCBNb2JpbGUgOjMyMHB4LiAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XG5cdC5oZXJvLWl0ZW0gaDIge1xuXHRcdGZvbnQtc2l6ZTogNTVweDtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHR9XG5cdC5oZXJvLWl0ZW0gcCB7XG5cdFx0Zm9udC1zaXplOiAxNXB4O1xuXHR9XG5cdC52aWRlby10ZXh0IGgyIHtcblx0XHRmb250LXNpemU6IDMwcHg7XG5cdH1cblx0LnZpZGVvLXBsYXktYnRuIHtcblx0XHR0b3A6IGNhbGMoMzAlIC0gNjFweCk7XG5cdH1cblx0LmZlYXR1cmVkLWJveCB7XG5cdFx0cGFkZGluZzogMTAwcHggMTVweDtcblx0fVxuXHQuZmVhdHVyZWQtYm94IC50ZXh0LWJveCBoMyxcblx0Lm5ld3NsZXR0ZXItc2VjdGlvbiBoMiB7XG5cdFx0Zm9udC1zaXplOiAzNXB4O1xuXHR9XG5cdC5tYWluLW1lbnUgbGkgYSB7XG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xuXHR9XG5cdC5nYW1lLWF1dGhvci1waWMge1xuXHRcdGZsb2F0OiBub25lO1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdH1cbn1cbi50aXR1bG9cbntcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGZvbnQtc2l6ZTogNDBweDtcblx0Zm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcblx0cGFkZGluZy1ib3R0b206IDQwcHg7XG5cdHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/componentes/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/componentes/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"zxx\">\n<head>\n\t<title>EndGam - Gaming Magazine Template</title>\n\t<meta charset=\"UTF-8\">\n\t<meta name=\"description\" content=\"EndGam Gaming Magazine Template\">\n\t<meta name=\"keywords\" content=\"endGam,gGaming, magazine, html\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t<!-- Favicon -->\n\t<link href=\"img/favicon.ico\" rel=\"shortcut icon\"/>\n\n\t<!-- Google Font -->\n\t<link href=\"https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i,900,900i\" rel=\"stylesheet\">\n\n\n\t<!-- Stylesheets -->\n\t\n\n\n\n\n\t<!--[if lt IE 9]>\n\t\t  <script src=\"https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js\"></script>\n\t  <script src=\"https://oss.maxcdn.com/respond/1.4.2/respond.min.js\"></script>\n\t<![endif]-->\n\n</head>\n<body>\n\t\n\n\t<!-- Header section -->\n\t<header class=\"header-section\">\n\t\t<div class=\"header-warp\">\n\t\t\t<div class=\"header-bar-warp d-flex\">\n\t\t\t\t<div>\n\t\t\t\t\t<h2 class=\"titulo\">\n\t\t\t\t Mi Sala de Juegos</h2>\n\t\t\t</div>\n\t\t\t\t<!-- site logo -->\t\t\t\t\n\t\t\t\t<nav class=\"top-nav-area w-100\">\n\t\t\t\t\t<div class=\"user-panel\">\n\t\t\t\t\t\t<a href=\"\">Unirse</a> / <a href=\"\">Registrarse</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Menu -->\n\t\t\t\t\t<ul class=\"main-menu primary-menu\">\n\t\t\t\t\t\t<li><a href=\"home.html\">Inicio</a></li>\n\t\t\t\t\t\t<li><a href=\"games.html\">Juegos</a>\n\t\t\t\t\t\t\t<ul class=\"sub-menu\">\n\t\t\t\t\t\t\t\t<li><a href=\"game-single.html\">Listado de Resultados</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li><a href=\"games.html\">Sobre Facundo Islas</a>\n\t\t\t\t\t\t\t<ul class=\"sub-menu\">\n\t\t\t\t\t\t\t\t<li><a href=\"game-single.html\">En Github</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"game-single.html\">Sobre Mi</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\t<!-- Header section end -->\n\n\t</body>\n</html>\n"

/***/ }),

/***/ "./src/app/componentes/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componentes/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/componentes/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/componentes/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/componentes/input-jugadores/input-jugadores.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2lucHV0LWp1Z2Fkb3Jlcy9pbnB1dC1qdWdhZG9yZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/componentes/input-jugadores/input-jugadores.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  input-jugadores works!\n</p>\n"

/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/input-jugadores/input-jugadores.component.ts ***!
  \**************************************************************************/
/*! exports provided: InputJugadoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputJugadoresComponent", function() { return InputJugadoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputJugadoresComponent = /** @class */ (function () {
    function InputJugadoresComponent() {
    }
    InputJugadoresComponent.prototype.ngOnInit = function () {
    };
    InputJugadoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-jugadores',
            template: __webpack_require__(/*! ./input-jugadores.component.html */ "./src/app/componentes/input-jugadores/input-jugadores.component.html"),
            styles: [__webpack_require__(/*! ./input-jugadores.component.css */ "./src/app/componentes/input-jugadores/input-jugadores.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputJugadoresComponent);
    return InputJugadoresComponent;
}());



/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/juegos/juegos.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2p1ZWdvcy9qdWVnb3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.html":
/*!**********************************************************!*\
  !*** ./src/app/componentes/juegos/juegos.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/juegos/juegos.component.ts ***!
  \********************************************************/
/*! exports provided: JuegosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosComponent", function() { return JuegosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JuegosComponent = /** @class */ (function () {
    function JuegosComponent() {
    }
    JuegosComponent.prototype.ngOnInit = function () {
    };
    JuegosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-juegos',
            template: __webpack_require__(/*! ./juegos.component.html */ "./src/app/componentes/juegos/juegos.component.html"),
            styles: [__webpack_require__(/*! ./juegos.component.css */ "./src/app/componentes/juegos/juegos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JuegosComponent);
    return JuegosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fondo{\r\n\r\n    background-image: url('slider-bg-2.jpg');\r\n    margin-top: -60px;\r\n  }\r\n\r\n\r\n  .project-tab {\r\n    padding: 10%;\r\n    margin-top: -8%;\r\n}\r\n\r\n\r\n  .project-tab #tabs{\r\n    background: #007b5e;\r\n    color: #eee;\r\n}\r\n\r\n\r\n  .project-tab #tabs h6.section-title{\r\n    color: #eee;\r\n}\r\n\r\n\r\n  .project-tab #tabs .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link {\r\n    color: #3cff00;\r\n    background-color: transparent;\r\n    border-color: transparent transparent #ffe600;\r\n    border-bottom: 3px solid !important;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n  .project-tab .nav-link {\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: .25rem;\r\n    border-top-right-radius: .25rem;\r\n    color: #ffe600;\r\n    border-color: transparent transparent #ffe600;\r\n    border-bottom: 3px solid !important;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n  .project-tab .nav-link:hover {\r\n    border: none;\r\n    color: #3cff00;\r\n}\r\n\r\n\r\n  .project-tab .nav-link:before {\r\n    border: none;\r\n    color: #3cff00;\r\n}\r\n\r\n\r\n  .project-tab thead{\r\n    background: #f3f3f3;\r\n    color: #333;\r\n}\r\n\r\n\r\n  .project-tab td{\r\n    text-decoration: none;\r\n    color: rgb(255, 251, 251);\r\n    font-weight: 600;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvanVnYWRvcmVzLWxpc3RhZG8vanVnYWRvcmVzLWxpc3RhZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSx3Q0FBdUU7SUFDdkUsaUJBQWlCO0VBQ25COzs7RUFHQTtJQUNFLFlBQVk7SUFDWixlQUFlO0FBQ25COzs7RUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7OztFQUNBO0lBQ0ksV0FBVztBQUNmOzs7RUFDQTtJQUNJLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsNkNBQTZDO0lBQzdDLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOzs7RUFDQTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGNBQWM7SUFDZCw2Q0FBNkM7SUFDN0MsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7OztFQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7OztFQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7OztFQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7O0VBQ0E7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2p1Z2Fkb3Jlcy1saXN0YWRvL2p1Z2Fkb3Jlcy1saXN0YWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9uZG97XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4uLy4uLy4uL2RvY3MvYXNzZXRzL2ltYWdlbmVzL3NsaWRlci1iZy0yLmpwZ1wiKTtcclxuICAgIG1hcmdpbi10b3A6IC02MHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5wcm9qZWN0LXRhYiB7XHJcbiAgICBwYWRkaW5nOiAxMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtOCU7XHJcbn1cclxuLnByb2plY3QtdGFiICN0YWJze1xyXG4gICAgYmFja2dyb3VuZDogIzAwN2I1ZTtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG59XHJcbi5wcm9qZWN0LXRhYiAjdGFicyBoNi5zZWN0aW9uLXRpdGxle1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbn1cclxuLnByb2plY3QtdGFiICN0YWJzIC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5uYXYtdGFicyAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICMzY2ZmMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZTYwMDtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnByb2plY3QtdGFiIC5uYXYtbGluayB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuMjVyZW07XHJcbiAgICBjb2xvcjogI2ZmZTYwMDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZTYwMDtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ucHJvamVjdC10YWIgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjM2NmZjAwO1xyXG59XHJcbi5wcm9qZWN0LXRhYiAubmF2LWxpbms6YmVmb3JlIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjM2NmZjAwO1xyXG59XHJcbi5wcm9qZWN0LXRhYiB0aGVhZHtcclxuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG4ucHJvamVjdC10YWIgdGR7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjUxLCAyNTEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--ul class=\"nav nav-pills nav-justified\">\n  <li class=\"active\"><a routerLink=\"/Principal\">Ir a inicio</a></li>\n  <li><a (click)=\"TraerTodos()\">Todos los jugadores</a></li>\n  <li><a (click)=\"TraerGanadores()\">Los ganadores</a></li>\n  <li><a (click)=\"TraerPerdedores()\">Los perdedores</a></li>\n</ul>\n\n\n\n<table class=\"table table-condensed\">\n  <thead>\n    <tr>\n      <th>usuario</th>\n      <th>cuit</th>\n      <th>sexo</th>\n      <th>gano</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let jugador of listado\" >\n      <td>{{jugador.usuario}} </td>\n      <td>{{jugador.cuit}} </td> \n      <td>{{jugador.sexo | sexo| uppercase}} </td> \n      <td>{{jugador.gano}} </td> \n      \n    </tr>\n   \n  </tbody>\n</table-->\n\n<!--div *ngFor=\"let juego of listado\">\n\n<p> {{juego.nombre}} </p>\n<p> {{juego.jugador}} </p>\n\n</div-->\n<div class=\"fondo\">\n  \n    <section id=\"tabs\" class=\"project-tab\">\n      <div class=\"container\" >\n          <div class=\"row\">\n              <div class=\"col-md-6\" style=\"\n              margin-left: 25%;\">\n                  \n                  <div class=\"tab-content\" id=\"nav-tabContent\">\n                      <div class=\"tab-pane fade show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\n                          <table class=\"table\" cellspacing=\"0\" style=\"text-align:center\">\n                              <thead>\n                                    <th >Jugador</th>\n                                    \n                                  \n                              \n                              <tbody>\n                                <tr *ngFor=\"let jugador of listado\" >\n                                    <td>{{jugador}} </td>\n                                   \n                                    \n                                  </tr>\n                              </tbody>\n                          </table>\n                      </div>\n                     \n                             \n                  </div>\n              </div>\n          </div>\n      </div>\n  </section>\n  <br><br>\n  </div>"

/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.ts ***!
  \******************************************************************************/
/*! exports provided: JugadoresListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresListadoComponent", function() { return JugadoresListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JugadoresListadoComponent = /** @class */ (function () {
    function JugadoresListadoComponent() {
        this.listado = [];
    }
    JugadoresListadoComponent.prototype.ngOnInit = function () {
        this.obtenerDatos();
    };
    JugadoresListadoComponent.prototype.obtenerDatos = function () {
        var i;
        for (var i_1 = 1; i_1 < localStorage.length; i_1++) {
            var aux = i_1.toString();
            this.objeto = JSON.parse(localStorage.getItem("partida " + aux));
            this.listado.push(this.objeto['jugador']);
        }
        this.listado = this.listado.filter(function (valor, indiceActual, arreglo) { return arreglo.indexOf(valor) === indiceActual; });
    };
    JugadoresListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jugadores-listado',
            template: __webpack_require__(/*! ./jugadores-listado.component.html */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.html"),
            styles: [__webpack_require__(/*! ./jugadores-listado.component.css */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JugadoresListadoComponent);
    return JugadoresListadoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG8tZGUtcGFpc2VzL2xpc3RhZG8tZGUtcGFpc2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n Listado de paises\n</h1>\n<table class=\"table table-condensed\">\n  <thead>\n    <tr>\n      <th>Pais</th>\n      <th>Región</th>\n      <th>Nombre local</th>\n      <th>Sub Región</th>\n      <th>Población</th>\n      <th>Bandera</th>\n      <th>Capital</th>\n      <th>GPS</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let pais of listadoDePaises\">\n      <td>{{pais.name}} </td>\n      <td>{{pais.region}} </td> \n      <td>{{pais.nativeName}} </td> \n      <td>{{pais.subregion}} </td>       \n      <td>{{pais.population}} </td> \n      <td><img src='{{pais.flag}}' width=\"50px\"/> </td> \n      <td>{{pais.capital}} </td> \n      <td>{{pais.borders}} </td> \n      <td>{{pais.latlng}} </td> \n    </tr>\n   \n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListadoDePaisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoDePaisesComponent", function() { return ListadoDePaisesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_paises_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/paises.service */ "./src/app/servicios/paises.service.ts");



var ListadoDePaisesComponent = /** @class */ (function () {
    function ListadoDePaisesComponent(servicioPaises) {
        this.miServicioDePaises = servicioPaises;
    }
    ListadoDePaisesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.miServicioDePaises.listar()
            .then(function (datos) {
            console.info("listado de paises", datos);
            _this.listadoDePaises = datos;
        });
    };
    ListadoDePaisesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listado-de-paises',
            template: __webpack_require__(/*! ./listado-de-paises.component.html */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.html"),
            styles: [__webpack_require__(/*! ./listado-de-paises.component.css */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_paises_service__WEBPACK_IMPORTED_MODULE_2__["PaisesService"]])
    ], ListadoDePaisesComponent);
    return ListadoDePaisesComponent;
}());



/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fondo{\r\n\r\n    background-image: url('slider-bg-2.jpg');\r\n    margin-top: -60px;\r\n    padding: 9%;\r\n  }\r\n\r\n\r\n  .project-tab {\r\n    padding: 10%;\r\n    margin-top: -8%;\r\n}\r\n\r\n\r\n  .project-tab #tabs{\r\n    background: #007b5e;\r\n    color: #eee;\r\n}\r\n\r\n\r\n  .project-tab #tabs h6.section-title{\r\n    color: #eee;\r\n}\r\n\r\n\r\n  .project-tab #tabs .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link {\r\n    color: #3cff00;\r\n    background-color: transparent;\r\n    border-color: transparent transparent #ffe600;\r\n    border-bottom: 3px solid !important;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n  .project-tab .nav-link {\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: .25rem;\r\n    border-top-right-radius: .25rem;\r\n    color: #ffe600;\r\n    border-color: transparent transparent #ffe600;\r\n    border-bottom: 3px solid !important;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n  .project-tab .nav-link:hover {\r\n    border: none;\r\n    color: #3cff00;\r\n}\r\n\r\n\r\n  .project-tab .nav-link:before {\r\n    border: none;\r\n    color: #3cff00;\r\n}\r\n\r\n\r\n  .project-tab thead{\r\n    background: #f3f3f3;\r\n    color: #333;\r\n}\r\n\r\n\r\n  .project-tab td{\r\n    text-decoration: none;\r\n    color: rgb(251, 255, 2);\r\n    font-weight: 600;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGFkby1kZS1yZXN1bHRhZG9zL2xpc3RhZG8tZGUtcmVzdWx0YWRvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHdDQUF1RTtJQUN2RSxpQkFBaUI7SUFDakIsV0FBVztFQUNiOzs7RUFHQTtJQUNFLFlBQVk7SUFDWixlQUFlO0FBQ25COzs7RUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7OztFQUNBO0lBQ0ksV0FBVztBQUNmOzs7RUFDQTtJQUNJLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsNkNBQTZDO0lBQzdDLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOzs7RUFDQTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGNBQWM7SUFDZCw2Q0FBNkM7SUFDN0MsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7OztFQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7OztFQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7OztFQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7O0VBQ0E7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG8tZGUtcmVzdWx0YWRvcy9saXN0YWRvLWRlLXJlc3VsdGFkb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb25kb3tcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi4vLi4vLi4vZG9jcy9hc3NldHMvaW1hZ2VuZXMvc2xpZGVyLWJnLTIuanBnXCIpO1xyXG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgICBwYWRkaW5nOiA5JTtcclxuICB9XHJcblxyXG5cclxuICAucHJvamVjdC10YWIge1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTglO1xyXG59XHJcbi5wcm9qZWN0LXRhYiAjdGFic3tcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiNWU7XHJcbiAgICBjb2xvcjogI2VlZTtcclxufVxyXG4ucHJvamVjdC10YWIgI3RhYnMgaDYuc2VjdGlvbi10aXRsZXtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG59XHJcbi5wcm9qZWN0LXRhYiAjdGFicyAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLCAubmF2LXRhYnMgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjM2NmZjAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmU2MDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5wcm9qZWN0LXRhYiAubmF2LWxpbmsge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuMjVyZW07XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgY29sb3I6ICNmZmU2MDA7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmU2MDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnByb2plY3QtdGFiIC5uYXYtbGluazpob3ZlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzNjZmYwMDtcclxufVxyXG4ucHJvamVjdC10YWIgLm5hdi1saW5rOmJlZm9yZSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzNjZmYwMDtcclxufVxyXG4ucHJvamVjdC10YWIgdGhlYWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuLnByb2plY3QtdGFiIHRke1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHJnYigyNTEsIDI1NSwgMik7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--div *ngFor=\"let juego of listado\">\n\n<p> {{juego.nombre}} </p>\n<p> {{juego.jugador}} </p>\n\n</div-->\n<div class=\"fondo\">\n<!--table class=\"table table-condensed\">\n    <thead>\n      <tr>\n        <th>Juego</th>\n        <th>Jugador</th>\n        <th>Resultado</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let juego of listado\">\n        <td>{{juego.nombre}} </td>\n        <td>{{juego.jugador}} </td> \n        <td *ngIf=\"juego.gano\">Gano </td>   \n        <td *ngIf=\"!juego.gano\">Perdio</td>     \n      </tr>\n     \n    </tbody>\n  </table-->\n  <section id=\"tabs\" class=\"project-tab\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n               \n                <div class=\"tab-content\" id=\"nav-tabContent\">\n                    <div class=\"tab-pane fade show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\n                        <table class=\"table\" cellspacing=\"0\" style=\"text-align: center\">\n                            <thead>\n                                <tr>\n                                  <th>Jugador</th>\n                                  <th>Juego</th>\n                                  <th>Resultado</th>\n                                </tr>\n                            </thead>\n                            <tbody style=\"text-align: center\">\n                                <tr *ngFor=\"let juego of listado\">\n                                    <td>{{juego['usuario']}}</td>\n                                    <td>{{juego['nombre']}}</td>\n                                    <td *ngIf=\"juego['gano']\">gano</td>\n                                    <td *ngIf=\"!juego['gano']\">perdio</td>\n                                </tr>\n                                \n                            </tbody>\n                        </table>\n                    </div>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n</div>"

/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListadoDeResultadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoDeResultadosComponent", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_jugador__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/jugador */ "./src/app/clases/jugador.ts");



var ListadoDeResultadosComponent = /** @class */ (function () {
    function ListadoDeResultadosComponent() {
    }
    ListadoDeResultadosComponent.prototype.ngOnInit = function () {
        this.obtenerDatos();
    };
    ListadoDeResultadosComponent.prototype.ver = function () {
        console.info(this.listado);
    };
    ListadoDeResultadosComponent.prototype.obtenerDatos = function () {
        var i;
        this.listado = new Array();
        for (var i_1 = 1; i_1 < localStorage.length; i_1++) {
            var aux = i_1.toString();
            this.objeto = JSON.parse(localStorage.getItem("partida " + aux));
            if (this.objeto['nombre']) {
                this.jugador = new _clases_jugador__WEBPACK_IMPORTED_MODULE_2__["Jugador"]();
                this.jugador.nombre = this.objeto['nombre'];
                this.jugador.gano = this.objeto['resultado'];
                this.jugador.usuario = this.objeto['jugador'];
            }
            console.log(this.jugador);
            this.listado.push(this.jugador);
        }
        console.log(this.listado);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ListadoDeResultadosComponent.prototype, "listado", void 0);
    ListadoDeResultadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listado-de-resultados',
            template: __webpack_require__(/*! ./listado-de-resultados.component.html */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html"),
            styles: [__webpack_require__(/*! ./listado-de-resultados.component.css */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListadoDeResultadosComponent);
    return ListadoDeResultadosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/listado/listado.component.css":
/*!***********************************************************!*\
  !*** ./src/app/componentes/listado/listado.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style all font awesome icons */\n.fa {\n    padding: 20px;\n    font-size: 30px;\n    width: 50px;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 50%;\n}\n/* Add a hover effect if you want */\n.fa:hover {\n    opacity: 0.7;\n}\n/* Set a specific color for each brand */\n/* Facebook */\n.fa-facebook {\n    background: #3B5998;\n    color: white;\n}\n/* Twitter */\n.fa-twitter {\n    background: #55ACEE;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGFkby9saXN0YWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFFQSxtQ0FBbUM7QUFDbkM7SUFDSSxZQUFZO0FBQ2hCO0FBRUEsd0NBQXdDO0FBRXhDLGFBQWE7QUFDYjtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBRUEsWUFBWTtBQUNaO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9saXN0YWRvL2xpc3RhZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlIGFsbCBmb250IGF3ZXNvbWUgaWNvbnMgKi9cbi5mYSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCBpZiB5b3Ugd2FudCAqL1xuLmZhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi8qIFNldCBhIHNwZWNpZmljIGNvbG9yIGZvciBlYWNoIGJyYW5kICovXG5cbi8qIEZhY2Vib29rICovXG4uZmEtZmFjZWJvb2sge1xuICAgIGJhY2tncm91bmQ6ICMzQjU5OTg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBUd2l0dGVyICovXG4uZmEtdHdpdHRlciB7XG4gICAgYmFja2dyb3VuZDogIzU1QUNFRTtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/componentes/listado/listado.component.html":
/*!************************************************************!*\
  !*** ./src/app/componentes/listado/listado.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n\n"

/***/ }),

/***/ "./src/app/componentes/listado/listado.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/listado/listado.component.ts ***!
  \**********************************************************/
/*! exports provided: ListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoComponent", function() { return ListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/juego-service.service */ "./src/app/servicios/juego-service.service.ts");



var ListadoComponent = /** @class */ (function () {
    function ListadoComponent(servicioJuego) {
        this.miServicioJuego = servicioJuego;
    }
    ListadoComponent.prototype.ngOnInit = function () {
    };
    ListadoComponent.prototype.llamaService = function () {
        console.log("llamaService");
        this.listadoParaCompartir = this.miServicioJuego.listar();
    };
    ListadoComponent.prototype.llamaServicePromesa = function () {
        var _this = this;
        console.log("llamaServicePromesa");
        this.miServicioJuego.listarPromesa().then(function (listado) {
            _this.listadoParaCompartir = listado;
        });
    };
    ListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listado',
            template: __webpack_require__(/*! ./listado.component.html */ "./src/app/componentes/listado/listado.component.html"),
            styles: [__webpack_require__(/*! ./listado.component.css */ "./src/app/componentes/listado/listado.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_2__["JuegoServiceService"]])
    ], ListadoComponent);
    return ListadoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/listados/listados.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/listados/listados.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG9zL2xpc3RhZG9zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/listados/listados.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/listados/listados.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  listados works!\n</p>\n"

/***/ }),

/***/ "./src/app/componentes/listados/listados.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/listados/listados.component.ts ***!
  \************************************************************/
/*! exports provided: ListadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadosComponent", function() { return ListadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListadosComponent = /** @class */ (function () {
    function ListadosComponent() {
    }
    ListadosComponent.prototype.ngOnInit = function () {
    };
    ListadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listados',
            template: __webpack_require__(/*! ./listados.component.html */ "./src/app/componentes/listados/listados.component.html"),
            styles: [__webpack_require__(/*! ./listados.component.css */ "./src/app/componentes/listados/listados.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListadosComponent);
    return ListadosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/login/login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nform {\n  \n    padding: 10px;\n}\n\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\nbutton {\n    background-color: rgb(6, 75, 6);\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n    float: right;\n}\n\n.aceptbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #3664F4;\n}\n\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n    width: 40%;\n    border-radius: 50%;\n}\n\n.container {\n    padding: 16px;\n}\n\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n\n.fondo{\n\n    background-image: url('slider-bg-2.jpg');\n    margin-top: -60px;\n    padding:4%;\n  }\n\nhtml,body{\nbackground-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');\nbackground-size: cover;\nbackground-repeat: no-repeat;\nheight: 100%;\nfont-family: 'Numans', sans-serif;\n}\n\n.container{\nheight: 100%;\nalign-content: center;\n}\n\n.card{\nheight: 370px;\nmargin-top: auto;\nmargin-bottom: auto;\nwidth: 400px;\nbackground-color: rgba(0,0,0,0.5) !important;\ndisplay: inline-table\n}\n\n.card-header h3{\ncolor: white;\n}\n\n.social_icon{\nposition: absolute;\nright: 20px;\ntop: -45px;\n}\n\n.input-group-prepend span{\nwidth: 50px;\nbackground-color: #FFC312;\ncolor: white;\nborder:0 !important;\n}\n\ninput:focus{\noutline: 0 0 0 0  !important;\nbox-shadow: 0 0 0 0 !important;\n\n}\n\n.remember{\ncolor: white;\n}\n\n.remember input\n{\nwidth: 20px;\nheight: 20px;\nmargin-left: 15px;\nmargin-right: 5px;\n}\n\n.login_btn{\ncolor: black;\nbackground-color: #FFC312;\nwidth: 100px;\n}\n\n.login_btn:hover{ \ncolor: black;\nbackground-color: white;\n}\n\n.links{\ncolor: white;\n}\n\n.links a{\nmargin-left: 4px;\n}\n\n#snackbar {\n    visibility: hidden;\n    min-width: 250px;\n    margin-left: -125px;\n   \n    color: #fff;\n    text-align: center;\n    border-radius: 2px;\n    padding: 16px;\n    position: fixed;\n    z-index: 1;\n    left: 50%;\n    bottom: 30px;\n    font-size: 17px;\n}\n\n#snackbar.Ganador {\n    background-color: rgb(110, 47, 5);\n    color:white;\n}\n\n#snackbar.show {\n    visibility: visible;\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUEsb0VBQW9FOztBQUNwRTtJQUNJO09BQ0csY0FBYztPQUNkLFdBQVc7SUFDZDtJQUNBO09BQ0csV0FBVztJQUNkO0FBQ0o7O0FBRUE7O0lBRUksd0NBQXVFO0lBQ3ZFLGlCQUFpQjtJQUNqQixVQUFVO0VBQ1o7O0FBSUY7QUFDQSxpRkFBaUY7QUFDakYsc0JBQXNCO0FBQ3RCLDRCQUE0QjtBQUM1QixZQUFZO0FBQ1osaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0EsWUFBWTtBQUNaLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLFlBQVk7QUFDWiw0Q0FBNEM7QUFDNUM7QUFDQTs7QUFJQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsVUFBVTtBQUNWOztBQUVBO0FBQ0EsV0FBVztBQUNYLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1osbUJBQW1CO0FBQ25COztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7O0FBRUEsV0FBVztBQUNYLFlBQVk7QUFDWixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWTtBQUNaLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1osdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7O0lBRW5CLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFHQTtJQUNJLGlDQUFpQztJQUNqQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELHlDQUF5QztBQUM3QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmZvcm0ge1xuICBcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNzUsIDYpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbn1cblxuLmNhbmNlbGJ0biB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLmFjZXB0YnRuIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NjRGNDtcbn1cbi5pbWdjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XG59XG5cbmltZy5hdmF0YXIge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG5zcGFuLnBzdyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBzcGFuIGFuZCBjYW5jZWwgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gICAgc3Bhbi5wc3cge1xuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiAgICAuY2FuY2VsYnRuIHtcbiAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5mb25kb3tcblxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLi8uLi8uLi9kb2NzL2Fzc2V0cy9pbWFnZW5lcy9zbGlkZXItYmctMi5qcGdcIik7XG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XG4gICAgcGFkZGluZzo0JTtcbiAgfVxuXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVtYW5zJyk7XG5cbmh0bWwsYm9keXtcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2dldHdhbGxwYXBlcnMuY29tL3dhbGxwYXBlci9mdWxsL2EvNS9kLzU0NDc1MC5qcGcnKTtcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuaGVpZ2h0OiAxMDAlO1xuZm9udC1mYW1pbHk6ICdOdW1hbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGFpbmVye1xuaGVpZ2h0OiAxMDAlO1xuYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZHtcbmhlaWdodDogMzcwcHg7XG5tYXJnaW4tdG9wOiBhdXRvO1xubWFyZ2luLWJvdHRvbTogYXV0bztcbndpZHRoOiA0MDBweDtcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KSAhaW1wb3J0YW50O1xuZGlzcGxheTogaW5saW5lLXRhYmxlXG59XG5cblxuXG4uY2FyZC1oZWFkZXIgaDN7XG5jb2xvcjogd2hpdGU7XG59XG5cbi5zb2NpYWxfaWNvbntcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnJpZ2h0OiAyMHB4O1xudG9wOiAtNDVweDtcbn1cblxuLmlucHV0LWdyb3VwLXByZXBlbmQgc3BhbntcbndpZHRoOiA1MHB4O1xuYmFja2dyb3VuZC1jb2xvcjogI0ZGQzMxMjtcbmNvbG9yOiB3aGl0ZTtcbmJvcmRlcjowICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OmZvY3Vze1xub3V0bGluZTogMCAwIDAgMCAgIWltcG9ydGFudDtcbmJveC1zaGFkb3c6IDAgMCAwIDAgIWltcG9ydGFudDtcblxufVxuXG4ucmVtZW1iZXJ7XG5jb2xvcjogd2hpdGU7XG59XG5cbi5yZW1lbWJlciBpbnB1dFxue1xud2lkdGg6IDIwcHg7XG5oZWlnaHQ6IDIwcHg7XG5tYXJnaW4tbGVmdDogMTVweDtcbm1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubG9naW5fYnRue1xuY29sb3I6IGJsYWNrO1xuYmFja2dyb3VuZC1jb2xvcjogI0ZGQzMxMjtcbndpZHRoOiAxMDBweDtcbn1cblxuLmxvZ2luX2J0bjpob3ZlcnsgXG5jb2xvcjogYmxhY2s7XG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpbmtze1xuY29sb3I6IHdoaXRlO1xufVxuXG4ubGlua3MgYXtcbm1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbiNzbmFja2JhciB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMjVweDtcbiAgIFxuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuXG4jc25hY2tiYXIuR2FuYWRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMCwgNDcsIDUpO1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG4jc25hY2tiYXIuc2hvdyB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/componentes/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/componentes/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fondo\">\n <!--div class=\"container\" >\n  <div class=\"jumbotron\" style=\"padding:50px;width: 50%;margin-left: 250px;background: none;margin-bottom: -31px;margin-top: -89px;\">\n    <form action=\"return true;\">\n      <div class=\"imgcontainer\">\n        <img src=\"./assets/imagenes/login.png\" alt=\"Avatar\" class=\"avatar\" max-width=\"104\" >\n      </div>\n\n      <div class=\"container\">\n        <label><b>Usuario</b></label>\n        <input type=\"text\" placeholder=\"Usuario\"  [(ngModel)]=\"user.email\"  name=\"uname\" required>\n\n        <label><b>Clave</b></label>\n        <input type=\"password\" placeholder=\"Clave\"  [(ngModel)]=\"user.password\" name=\"psw\" required>\n\n        \n            \n        <button *ngIf=\"logeando\"  (click)=\"MoverBarraDeProgreso()\" >Ingresar</button>\n        <button *ngIf=\"logeando\"  (click)=\"admin()\" >Ingresar como admin</button>\n        <button *ngIf=\"logeando\"  (click)=\"invitado()\" >Ingresar como invitado</button>\n       \n        <div *ngIf=\"!logeando\" class=\"progress\">\n            <div class=\"progress-bar progress-bar-info progress-bar-striped active\" [class]=\"clase\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"ProgresoDeAncho\" >\n              {{progresoMensaje}} - {{progreso}}%\n            </div>\n        </div>\n       \n        <input type=\"checkbox\" checked=\"checked\"> Recordar mis datos\n      </div>\n\n      <div class=\"container\" >\n        <button type=\"button\" class=\"cancelbtn\" (click)=\"borrar()\">Cancelar</button>\n        <button type=\"button\" class=\"aceptbtn\" routerLink=\"/Registro\" >Registrarse</button>\n        <span class=\"psw\">Te olvidaste <a href=\"#\">la clave?</a></span>\n      </div>\n     \n    </form>\n  </div>\n</div>\n</div-->\n\n<div class=\"container\">\n\t<div class=\"d-flex justify-content-center h-100\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h3>Ingreso</h3>\n\t\n\t\t\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"input-group form-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"\tfa fa-user\"></i></span>\n            </div>\n            <input type=\"text\" placeholder=\"Usuario\" class=\"form-control\" [(ngModel)]=\"user.email\"  name=\"uname\" required>\n\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-group form-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fa fa-key\"></i></span>\n            </div>\n            <input type=\"password\" placeholder=\"Clave\" class=\"form-control\"  [(ngModel)]=\"user.password\" name=\"psw\" required>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\" *ngIf=\"logeando\">\n              <button  class=\"btn btn-primary\" (click)=\"MoverBarraDeProgreso()\" >Ingresar</button>\n              <button   class=\"btn btn-primary\" (click)=\"admin()\" >Ingresar como admin</button>\n              <button class=\"btn btn-primary\"  (click)=\"invitado()\" >Ingresar como invitado</button>\n          </div>\n          <div *ngIf=\"!logeando\" class=\"progress\">\n              <div class=\"progress-bar progress-bar-info progress-bar-striped active\" [class]=\"clase\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"ProgresoDeAncho\" >\n                {{progresoMensaje}} - {{progreso}}%\n              </div>\n          </div>\n        \n  \n        <div class=\"container\" *ngIf=\"logeando\" >\n          <button type=\"button\" class=\"cancelbtn\" (click)=\"borrar()\">Cancelar</button>\n          <button type=\"button\" class=\"aceptbtn\" routerLink=\"/Registro\" >Registrarse</button>\n          \n        </div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n  </div>\n  <div>\n    <div id=\"snackbar\">{{Mensaje}}</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/observable/TimerObservable */ "./node_modules/rxjs-compat/_esm5/observable/TimerObservable.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, auth) {
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.user = { email: '', password: '' };
        this.progresoMensaje = "esperando...";
        this.logeando = true;
        this.clase = "progress-bar progress-bar-info progress-bar-striped ";
        this.progreso = 0;
        this.ProgresoDeAncho = "0%";
        var session = sessionStorage.getItem('user');
        if (session == null) {
            this.logueado = false;
        }
        else {
            this.logueado = true;
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Entrar = function () {
        var _this = this;
        this.auth.loginUser(this.user.email, this.user.password).then(function (user) {
            _this.router.navigate(['/Principal']);
            sessionStorage.setItem("user", _this.user.email);
            sessionStorage.setItem("muestra", "true");
        })
            .catch(function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.progreso = 0;
                this.ProgresoDeAncho = "0%";
                this.MostarMensaje("Error al loguearse", true);
                this.logeando = true;
                return [2 /*return*/];
            });
        }); });
    };
    LoginComponent.prototype.MoverBarraDeProgreso = function () {
        var _this = this;
        this.logeando = false;
        this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
        this.progresoMensaje = "Iniciando comprobacion";
        var timer = rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_4__["TimerObservable"].create(200, 50);
        this.subscription = timer.subscribe(function (t) {
            console.log("inicio");
            _this.progreso = _this.progreso + 1;
            _this.ProgresoDeAncho = _this.progreso + 20 + "%";
            switch (_this.progreso) {
                case 15:
                    _this.clase = "progress-bar progress-bar-warning progress-bar-striped active";
                    _this.progresoMensaje = "Verificando Usuario...";
                    break;
                case 30:
                    _this.clase = "progress-bar progress-bar-Info progress-bar-striped active";
                    _this.progresoMensaje = "Verificando contraseña..";
                    break;
                case 60:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando Info del dispositivo..";
                    break;
                case 75:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Desencriptacion de clave ..";
                    break;
                case 85:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Clave ok, ingresando..";
                    break;
                case 100:
                    console.log("final");
                    _this.subscription.unsubscribe();
                    _this.Entrar();
                    break;
            }
        });
        //this.logeando=true;
    };
    LoginComponent.prototype.borrar = function () {
        this.user.email = null;
        this.user.password = null;
    };
    LoginComponent.prototype.admin = function () {
        this.user.email = "admin@gmail.com";
        this.user.password = "111111";
    };
    LoginComponent.prototype.invitado = function () {
        this.user.email = "invitado@gmail.com";
        this.user.password = "222222";
    };
    LoginComponent.prototype.MostarMensaje = function (mensaje, gano) {
        this.Mensaje = mensaje;
        var x = document.getElementById("snackbar");
        if (gano)
            x.className = "show Ganador";
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            //modelo.ocultarVerificar=false;
        }, 3000);
        console.info("objeto", x);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/componentes/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/componentes/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n    height: 300px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWFwYS1kZS1nb29nbGUvbWFwYS1kZS1nb29nbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21hcGEtZGUtZ29vZ2xlL21hcGEtZGUtZ29vZ2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\"  (mapClick)=\"mapClicked($event)\">\n   \n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n<input type =\"text\" [(ngModel)]=\"lat\" />\n<input type=\"text\" [(ngModel)]=\"lng\"/> "

/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.ts ***!
  \************************************************************************/
/*! exports provided: MapaDeGoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaDeGoogleComponent", function() { return MapaDeGoogleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapaDeGoogleComponent = /** @class */ (function () {
    function MapaDeGoogleComponent() {
        this.title = 'El Primer mapa';
        this.lat = 33.678418;
        this.lng = 5.809007;
        // google maps zoom level
        this.zoom = 8;
    }
    MapaDeGoogleComponent.prototype.ngOnInit = function () {
    };
    MapaDeGoogleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mapa-de-google',
            template: __webpack_require__(/*! ./mapa-de-google.component.html */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.html"),
            styles: [__webpack_require__(/*! ./mapa-de-google.component.css */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapaDeGoogleComponent);
    return MapaDeGoogleComponent;
}());



/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Add rounded corners to the top left and the top right corner of the image */\nimg {\n    border-radius: 5px 5px 0 0;\n    width: 200px;\n    height: 200px;\n}\n/* Add some padding inside the card container */\n.container {\n    padding: 2px 16px;\n    display: -webkit-box;\n}\n.fondo{\n\n    background-image: url('slider-bg-2.jpg');\n    margin-top: -60px;\n  }\n.box4{position:relative; padding: 10px;}\n.box4:before{width:0;height:200%;background:rgba(0,0,0,.5);position:absolute;top:0;left:-250px;bottom:0;-webkit-transform:skewX(-36deg);transform:skewX(-36deg);transition:all .5s ease 0s}\n.box4:hover:before{width:200%}\n.box4 img{width:100%;}\n.box4:hover img{width:100%; -webkit-filter: blur(5px); filter: blur(5px)}\n.box4 .box-content{width:100%;height:100%;padding-top:10%;position:absolute;top:0;left:0;-webkit-transform:scale(0);transform:scale(0);transition:all .3s ease 0s;text-align: center;}\n.box4 .icon,.box5 .icon{list-style:none;padding:0}\n.box4:hover .box-content{-webkit-transform:scale(1);transform:scale(1)}\n.box4 .title{font-size:22px;font-weight:700;color:rgb(168, 5, 5);margin:0 0 10px; }\n.box4 .post{display:block;font-size:15px;font-weight:600;color:rgb(8, 0, 0);margin-bottom:20px; text-align: center}\n.box4 .icon{margin:0}\n.box4 .icon li{display:inline-block}\n.box4 .icon li a{display:block;width:35px;height:35px;line-height:35px;font-size:20px;background:#fff;color:#ee4266;margin-right:10px;transition:all .3s ease 0s}\n.box5 .icon,.box5 .icon li{display:inline-block}\n@media only screen and (max-width:990px){.box4{margin-bottom:30px}\n}\n@media only screen and (max-width:767px){.box4:before{left:-400px}\n.box4:hover:before{width:300%}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS1jYXJkL21lbnUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUFDLCtDQUErQztBQUNoRDtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFHRTs7SUFFRSx3Q0FBdUU7SUFDdkUsaUJBQWlCO0VBQ25CO0FBRUEsTUFBTSxpQkFBaUIsRUFBRSxhQUFhLENBQUM7QUFDekMsYUFBYSxPQUFPLENBQUMsV0FBVyxDQUFDLHlCQUF5QixDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLCtCQUF1QixDQUF2Qix1QkFBdUIsQ0FBQywwQkFBMEI7QUFDMUosbUJBQW1CLFVBQVU7QUFDN0IsVUFBVSxVQUFVLENBQUM7QUFDckIsZ0JBQWdCLFVBQVUsRUFBRSx5QkFBZ0IsRUFBaEIsaUJBQWlCO0FBQzdDLG1CQUFtQixVQUFVLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLDBCQUFrQixDQUFsQixrQkFBa0IsQ0FBQywwQkFBMEIsQ0FBQyxrQkFBa0IsQ0FBQztBQUMxSix3QkFBd0IsZUFBZSxDQUFDLFNBQVM7QUFDakQseUJBQXlCLDBCQUFpQixDQUFqQixrQkFBa0I7QUFDM0MsYUFBYSxjQUFjLENBQUMsZUFBZSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsRUFBRTtBQUNsRixZQUFZLGFBQWEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixFQUFFLGtCQUFrQjtBQUNsSCxZQUFZLFFBQVE7QUFDcEIsZUFBZSxvQkFBb0I7QUFDbkMsaUJBQWlCLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLDBCQUEwQjtBQUNoSywyQkFBMkIsb0JBQW9CO0FBQy9DLHlDQUF5QyxNQUFNLGtCQUFrQjtBQUNqRTtBQUNBLHlDQUF5QyxhQUFhLFdBQVc7QUFDakUsbUJBQW1CLFVBQVU7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9tZW51LWNhcmQvbWVudS1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBZGQgcm91bmRlZCBjb3JuZXJzIHRvIHRoZSB0b3AgbGVmdCBhbmQgdGhlIHRvcCByaWdodCBjb3JuZXIgb2YgdGhlIGltYWdlICovXG5pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufS8qIEFkZCBzb21lIHBhZGRpbmcgaW5zaWRlIHRoZSBjYXJkIGNvbnRhaW5lciAqL1xuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMnB4IDE2cHg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG59XG4gIFxuICBcbiAgLmZvbmRve1xuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4uLy4uLy4uL2RvY3MvYXNzZXRzL2ltYWdlbmVzL3NsaWRlci1iZy0yLmpwZ1wiKTtcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgfVxuXG4gIC5ib3g0e3Bvc2l0aW9uOnJlbGF0aXZlOyBwYWRkaW5nOiAxMHB4O31cbi5ib3g0OmJlZm9yZXt3aWR0aDowO2hlaWdodDoyMDAlO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNSk7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDotMjUwcHg7Ym90dG9tOjA7dHJhbnNmb3JtOnNrZXdYKC0zNmRlZyk7dHJhbnNpdGlvbjphbGwgLjVzIGVhc2UgMHN9XG4uYm94NDpob3ZlcjpiZWZvcmV7d2lkdGg6MjAwJX1cbi5ib3g0IGltZ3t3aWR0aDoxMDAlO31cbi5ib3g0OmhvdmVyIGltZ3t3aWR0aDoxMDAlOyBmaWx0ZXI6IGJsdXIoNXB4KX1cbi5ib3g0IC5ib3gtY29udGVudHt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3BhZGRpbmctdG9wOjEwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zaXRpb246YWxsIC4zcyBlYXNlIDBzO3RleHQtYWxpZ246IGNlbnRlcjt9XG4uYm94NCAuaWNvbiwuYm94NSAuaWNvbntsaXN0LXN0eWxlOm5vbmU7cGFkZGluZzowfVxuLmJveDQ6aG92ZXIgLmJveC1jb250ZW50e3RyYW5zZm9ybTpzY2FsZSgxKX1cbi5ib3g0IC50aXRsZXtmb250LXNpemU6MjJweDtmb250LXdlaWdodDo3MDA7Y29sb3I6cmdiKDE2OCwgNSwgNSk7bWFyZ2luOjAgMCAxMHB4OyB9XG4uYm94NCAucG9zdHtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZToxNXB4O2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjpyZ2IoOCwgMCwgMCk7bWFyZ2luLWJvdHRvbToyMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXJ9XG4uYm94NCAuaWNvbnttYXJnaW46MH1cbi5ib3g0IC5pY29uIGxpe2Rpc3BsYXk6aW5saW5lLWJsb2NrfVxuLmJveDQgLmljb24gbGkgYXtkaXNwbGF5OmJsb2NrO3dpZHRoOjM1cHg7aGVpZ2h0OjM1cHg7bGluZS1oZWlnaHQ6MzVweDtmb250LXNpemU6MjBweDtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6I2VlNDI2NjttYXJnaW4tcmlnaHQ6MTBweDt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZSAwc31cbi5ib3g1IC5pY29uLC5ib3g1IC5pY29uIGxpe2Rpc3BsYXk6aW5saW5lLWJsb2NrfVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MHB4KXsuYm94NHttYXJnaW4tYm90dG9tOjMwcHh9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpey5ib3g0OmJlZm9yZXtsZWZ0Oi00MDBweH1cbi5ib3g0OmhvdmVyOmJlZm9yZXt3aWR0aDozMDAlfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fondo\">\n\n  <h3 class=\"text-center\" style=\"color:white\">Juegos</h3>\n  <div class=\"container mt-40\">\n    \n    <div class=\"row mt-30\">\n        <div class=\"col-md-4 col-sm-6\">\n            <div class=\"box4\">\n              <img class=\"img-thumbnail\"   src=\"./assets/imagenes/cerebro.jpg\" alt=\"Avatar\">\n                <div class=\"box-content\">\n                    <h3 class=\"title\">Agilidad Aritmetica</h3>\n                    <span class=\"post\">Pone a prueba tus conocimientos en matematica</span>\n                    <p><button class=\"btn btn-danger\"  (click)=\"Juego('Agilidad')\">Jugar</button></p>\n                    <ul class=\"icon\">\n                      <li><a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> </li>\n                <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a> </li>\n                <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> </li>\n                <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a> </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4 col-sm-6\">\n            <div class=\"box4\">\n              <img  class=\"img-thumbnail\"  src=\"./assets/imagenes/adivina.png\" alt=\"Avatar\">\n                <div class=\"box-content\">\n                    <h3 class=\"title\">Numero Secreto</h3>\n                    <span class=\"post\">Podes adivinar el numero elegido por la maquina?</span>\n                    <p><button class=\"btn btn-danger\"  (click)=\"Juego('Adivina')\">Jugar</button></p>\n                    <ul class=\"icon\">\n                      <li><a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> </li>\n                <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a> </li>\n                <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> </li>\n                <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a> </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4 col-sm-6\">\n            <div class=\"box4\">\n              <img class=\"img-thumbnail\" src=\"./assets/imagenes/ppt.jpg\" alt=\"Avatar\">\n                <div class=\"box-content\">\n                    <h3 class=\"title\">Piedra, Papel o Tijera</h3>\n                    <span class=\"post\">El clasico juego en internet</span>\n                    <p><button class=\"btn btn-danger\"  (click)=\"Juego('PPT')\">Jugar</button></p>\n                    <ul class=\"icon\">\n                      <li><a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> </li>\n                <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a> </li>\n                <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> </li>\n                <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a> </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-md-4 col-sm-6\">\n          <div class=\"box4\">\n            <img  class=\"img-thumbnail\"  src=\"./assets/imagenes/adivinaprovincia.png\" alt=\"Avatar\">\n              <div class=\"box-content\">\n                  <h3 class=\"title\">Adivina Provincia</h3>\n                  <span class=\"post\">Cuanto sabes de geografia Argentina?</span>\n                  <p><button class=\"btn btn-danger\"  (click)=\"Juego('AdivinaProvincia')\">Jugar</button></p>\n                  <ul class=\"icon\">\n                    <li><a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> </li>\n                <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a> </li>\n                <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> </li>\n                <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a> </li>\n                  </ul>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6\">\n        <div class=\"box4\">\n          <img  class=\"img-thumbnail\"  src=\"./assets/imagenes/anagrama.jpg\" alt=\"Avatar\">\n            <div class=\"box-content\">\n                <h3 class=\"title\">Anagrama</h3>\n                <span class=\"post\">Que palabra se forma con estas letras?</span>\n                <p><button class=\"btn btn-danger\"  (click)=\"Juego('Anagrama')\">Jugar</button></p>\n                <ul class=\"icon\">\n                  <li><a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> </li>\n                <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a> </li>\n                <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> </li>\n                <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a> </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-4 col-sm-6\">\n      <div class=\"box4\">\n        <img  class=\"img-thumbnail\"  src=\"./assets/imagenes/tateti.png\" alt=\"Avatar\">\n          <div class=\"box-content\">\n              <h3 class=\"title\">TaTeTi</h3>\n              <span class=\"post\">Suerte para ti</span>\n              <p><button class=\"btn btn-danger\"  (click)=\"Juego('Tateti')\">Jugar</button></p>\n              <ul class=\"icon\">\n                <li><a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> </li>\n                <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a> </li>\n                <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> </li>\n                <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a> </li>\n              </ul>\n          </div>\n      </div>\n  </div>\n    </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCardComponent", function() { return MenuCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MenuCardComponent = /** @class */ (function () {
    function MenuCardComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuCardComponent.prototype.ngOnInit = function () {
    };
    MenuCardComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
            case 'AdivinaProvincia':
                this.router.navigate(['/Juegos/AdivinaProvincia']);
                break;
            case 'PPT':
                this.router.navigate(['/Juegos/PiedraPapelTijera']);
                break;
            case 'Anagrama':
                this.router.navigate(['/Juegos/Anagrama']);
                break;
            case 'Tateti':
                this.router.navigate(['/Juegos/Tateti']);
                break;
        }
    };
    MenuCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-card',
            template: __webpack_require__(/*! ./menu-card.component.html */ "./src/app/componentes/menu-card/menu-card.component.html"),
            styles: [__webpack_require__(/*! ./menu-card.component.css */ "./src/app/componentes/menu-card/menu-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MenuCardComponent);
    return MenuCardComponent;
}());



/***/ }),

/***/ "./src/app/componentes/menu-principal/menu-principal.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/menu-principal/menu-principal.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* GLOBAL STYLES\n-------------------------------------------------- */\n/* Padding below the footer and lighter body text */\n.fondo{\n  display: inline-flex;\n  background-image: url('slider-bg-2.jpg');\n  -webkit-margin-before: 101px;\n          margin-block-start: 101px;\n  margin-top: -60px;\n}\n/* CUSTOMIZE THE CAROUSEL\n  -------------------------------------------------- */\n/* MARKETING CONTENT\n  -------------------------------------------------- */\n/* Center align the text within the three columns below the carousel */\n.marketing .col-lg-6 {\n    margin-bottom: 1.5rem;\n    text-align: center;\n    \n  }\n.marketing h2 {\n    font-weight: normal;\n  }\n.fondo .col-lg-6 p {\n    margin-right: 10.75rem;\n    margin-left: -7.25rem;\n  \n  }\np{\n    text-align: center;\n    color:white;\n    font-size: 20px;\n  }\nh2\n  {\n    color:yellowgreen;\n    text-align: left;\n  }\n/* Featurettes\n  ------------------------- */\n.featurette-divider {\n    margin: 5rem 0; /* Space out the Bootstrap <hr> more */\n  }\n/* RESPONSIVE CSS\n  -------------------------------------------------- */\n@media (min-width: 40em) {\n    /* Bump up size of carousel content */\n    .carousel-caption p {\n      margin-bottom: 1.25rem;\n      font-size: 1.25rem;\n      line-height: 1.4;\n    }\n  \n    .featurette-heading {\n      font-size: 50px;\n    }\n  }\n@media (min-width: 62em) {\n    .featurette-heading {\n      margin-top: 7rem;\n    }\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS1wcmluY2lwYWwvbWVudS1wcmluY2lwYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtvREFDb0Q7QUFDcEQsbURBQW1EO0FBRW5EO0VBQ0Usb0JBQW9CO0VBQ3BCLHdDQUF1RTtFQUN2RSw0QkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUlFO3NEQUNvRDtBQUlwRDtzREFDb0Q7QUFFcEQsc0VBQXNFO0FBQ3RFO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjs7RUFFcEI7QUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLHFCQUFxQjs7RUFFdkI7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtFQUNqQjtBQUNBOztJQUVFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7QUFHQTs2QkFDMkI7QUFFM0I7SUFDRSxjQUFjLEVBQUUsc0NBQXNDO0VBQ3hEO0FBRUE7c0RBQ29EO0FBRXBEO0lBQ0UscUNBQXFDO0lBQ3JDO01BQ0Usc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9tZW51LXByaW5jaXBhbC9tZW51LXByaW5jaXBhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR0xPQkFMIFNUWUxFU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIFBhZGRpbmcgYmVsb3cgdGhlIGZvb3RlciBhbmQgbGlnaHRlciBib2R5IHRleHQgKi9cblxuLmZvbmRve1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4uLy4uLy4uL2RvY3MvYXNzZXRzL2ltYWdlbmVzL3NsaWRlci1iZy0yLmpwZ1wiKTtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxMDFweDtcbiAgbWFyZ2luLXRvcDogLTYwcHg7XG59XG5cblxuICBcbiAgLyogQ1VTVE9NSVpFIFRIRSBDQVJPVVNFTFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBcbiAgXG4gIFxuICAvKiBNQVJLRVRJTkcgQ09OVEVOVFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBcbiAgLyogQ2VudGVyIGFsaWduIHRoZSB0ZXh0IHdpdGhpbiB0aGUgdGhyZWUgY29sdW1ucyBiZWxvdyB0aGUgY2Fyb3VzZWwgKi9cbiAgLm1hcmtldGluZyAuY29sLWxnLTYge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gIH1cbiAgLm1hcmtldGluZyBoMiB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICAuZm9uZG8gLmNvbC1sZy02IHAge1xuICAgIG1hcmdpbi1yaWdodDogMTAuNzVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IC03LjI1cmVtO1xuICBcbiAgfVxuICBwe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgaDJcbiAge1xuICAgIGNvbG9yOnllbGxvd2dyZWVuO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIFxuICAvKiBGZWF0dXJldHRlc1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIFxuICAuZmVhdHVyZXR0ZS1kaXZpZGVyIHtcbiAgICBtYXJnaW46IDVyZW0gMDsgLyogU3BhY2Ugb3V0IHRoZSBCb290c3RyYXAgPGhyPiBtb3JlICovXG4gIH1cbiAgXG4gIC8qIFJFU1BPTlNJVkUgQ1NTXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xuICAgIC8qIEJ1bXAgdXAgc2l6ZSBvZiBjYXJvdXNlbCBjb250ZW50ICovXG4gICAgLmNhcm91c2VsLWNhcHRpb24gcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICB9XG4gIFxuICAgIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcbiAgICAuZmVhdHVyZXR0ZS1oZWFkaW5nIHtcbiAgICAgIG1hcmdpbi10b3A6IDdyZW07XG4gICAgfVxuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/menu-principal/menu-principal.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/menu-principal/menu-principal.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fondo\">\n    <!-- Three columns of text below the carousel -->\n    <div class=\"row\" style=\"    margin-top: 20px;\n    margin-left: 224px;     margin-right: 0px;\">\n      <div class=\"col-lg-6\">\n          <img _ngcontent-c3=\"\" alt=\"Generic placeholder image\" class=\"rounded-circle\" height=\"235\" src=\"./assets/imagenes/saladejuegos.png\" width=\"243\">\n        <h2>Sala de Juegos</h2>\n        <p>Los mejores juegos para agilizar tu mente y poder entretenerte. La mas divertida experiencia</p>\n        <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" routerLink=\"/Juegos\">Jugar</a></p>\n      </div><!-- /.col-lg-4 -->\n      <div class=\"col-lg-6\">\n          <img _ngcontent-c3=\"\" alt=\"Generic placeholder image\" class=\"rounded-circle\" height=\"235\" src=\"./assets/imagenes/listado.jpg\" width=\"243\">\n        <h2>Listados de Resultados</h2>\n        <p>Conoce quienes son los jugadores mas ganadores</p>\n        <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" routerLink=\"/Listado\">Ver listado</a></p>\n      </div><!-- /.col-lg-4 -->\n      <div class=\"col-lg-6\"><br><br><br>\n          <img _ngcontent-c3=\"\" alt=\"Generic placeholder image\" class=\"rounded-circle\" height=\"235\" src=\"./assets/imagenes/jugadores.png\" width=\"243\">\n        <h2 style=\"margin-left:55px;\">Jugadores</h2>\n        <p>Listado de los jugadores de esta web</p>\n        <p><a class=\"btn btn-danger btn-lg\" href=\"#\" role=\"button\" routerLink=\"/Jugadores\">Jugadores</a></p>\n      </div><!-- /.col-lg-4 -->\n      <div class=\"col-lg-6\"><br><br>\n          <img _ngcontent-c3=\"\" alt=\"Generic placeholder image\" class=\"rounded-circle\" height=\"235\" src=\"./assets/imagenes/Configuracion.png\" width=\"243\">\n        <h2>Configuracion</h2>\n        <p>Ingresa para realizar las configuraciones que prefieras en los juegos</p>\n        <p><a class=\"btn btn-danger btn-lg\" href=\"#\" role=\"button\" routerLink=\"/Configuracion\">Configurar</a></p>\n      </div><!-- /.col-lg-4 -->\n    </div><!-- /.row -->\n\n"

/***/ }),

/***/ "./src/app/componentes/menu-principal/menu-principal.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/menu-principal/menu-principal.component.ts ***!
  \************************************************************************/
/*! exports provided: MenuPrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPrincipalComponent", function() { return MenuPrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuPrincipalComponent = /** @class */ (function () {
    function MenuPrincipalComponent() {
    }
    MenuPrincipalComponent.prototype.ngOnInit = function () {
    };
    MenuPrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-principal',
            template: __webpack_require__(/*! ./menu-principal.component.html */ "./src/app/componentes/menu-principal/menu-principal.component.html"),
            styles: [__webpack_require__(/*! ./menu-principal.component.css */ "./src/app/componentes/menu-principal/menu-principal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuPrincipalComponent);
    return MenuPrincipalComponent;
}());



/***/ }),

/***/ "./src/app/componentes/menu/menu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/componentes/menu/menu.component.html":
/*!******************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--div>\n    <button routerLink=\"/Principal\">Principal</button>\n    <button (click)=\"Juego('Adivina')\">Adivina</button>\n    <button (click)=\"Juego('Agilidad')\">Agilidad</button>\n    <button (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</button>\n    <button (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</button>  \n    <button routerLink=\"/error\">Error</button>\n  \n</div-->\n\n<!--nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a routerLink=\"/Juegos\">Juegos</a></li>\n        <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\n        <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\n        <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\n        <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\n        </ul>\n    </div>\n  </nav-->\n  <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n                                  \n          </button>\n          <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a routerLink=\"/Juegos\">Menú de Juegos</a></li>\n                <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\n                <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\n                <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\n                <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\n              </ul>\n              <ul class=\"nav navbar-nav navbar-right\">\n                  <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\n                  <li><a href=\"/Login\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\n                </ul>\n        </div>\n      </div>\n    </nav>\n      \n   "

/***/ }),

/***/ "./src/app/componentes/menu/menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.ts ***!
  \****************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MenuComponent = /** @class */ (function () {
    function MenuComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
        }
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/componentes/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/componentes/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background: #000;\r\n    font-family: \"Lucida Grande\", \"Lucida Sans\", Arial, Sans-serif;\r\n}\r\n\r\n#juego {\r\n    background: url('img.jpg') 0 0 no-repeat;\r\n    padding: 0;\r\n    width: 800px;\r\n    margin: 1em auto;\r\n    height: 360px;\r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n    margin: 1em;\r\n    color:white;\r\n}\r\n\r\n#piedra,\r\n#papel,\r\n#tijera{\r\n    width: 130px;\r\n    height: 130px;\r\n    border-radius:50%;\r\n    margin: 0;\r\n    border: 1px solid rgba(0,0,0,0);\r\n    padding: 0;\r\n    display:inline-block;\r\n    position:relative;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\n\r\n#piedra:hover,\r\n#papel:hover,\r\n#tijera:hover{\r\n    background: rgba(0,0,0,0.2);\r\n    \r\n}\r\n\r\n#piedra {\r\n    margin: 8em 0 0 8em;\r\n}\r\n\r\n#papel {\r\n    margin: 8em 0 0 5em;\r\n}\r\n\r\n#tijera {\r\n    margin: 8em 0 0 5em;\r\n}\r\n\r\n#informacion {\r\n    background: #000;\r\n    margin-left: 30em;\r\n    padding: 0 1em;\r\n    width: 800px;\r\n}\r\n\r\n#informacion p{\r\n    float: left;\r\n}\r\n\r\n#efecto {\r\n    position: absolute;\r\n    background: rgba(0,0,0,0.9);\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 4;\r\n    transition: all 0.1s;\r\n}\r\n\r\n#efecto h1 {\r\n    text-align: center;\r\n    font-size: 5em;\r\n    color: #fff;\r\n    margin: 2em 0 0;\r\n    padding: 0;\r\n    line-height: 1em;\r\n}\r\n\r\n#efecto h3 {\r\n    text-align: center;\r\n    font-size: 3em;\r\n    line-height: 1em;\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #ddd;\r\n}\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n\r\n#snackbar.Ganador {\r\n    background-color: #059F2F;\r\n}\r\n\r\n#snackbar.Perdedor {\r\n    background-color: #FF0000;\r\n}\r\n\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n.fondo{\r\n\r\n    background-image: url('slider-bg-2.jpg');\r\n    margin-top: -100px\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcGllZHJhLXBhcGVsLXRpamVyYS9waWVkcmEtcGFwZWwtdGlqZXJhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsOERBQThEO0FBQ2xFOztBQUVBO0lBQ0ksd0NBQStEO0lBQy9ELFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUM7SUFDRyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFHQTs7O0lBR0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsU0FBUztJQUNULCtCQUErQjtJQUMvQixVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFDQTs7O0lBR0ksMkJBQTJCOztBQUUvQjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixXQUFXO0lBQ1gsTUFBTTtJQUNOLE9BQU87SUFDUCxVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1COztJQUVuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLE1BQU0sU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUM1QixJQUFJLFlBQVksRUFBRSxVQUFVLENBQUM7QUFDakM7O0FBRUE7SUFDSSxNQUFNLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFDNUIsSUFBSSxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQ2pDOztBQUVBO0lBQ0ksTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0lBQy9CLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUM5Qjs7QUFFQTtJQUNJLE1BQU0sWUFBWSxFQUFFLFVBQVUsQ0FBQztJQUMvQixJQUFJLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFDOUI7O0FBR0E7O0lBRUksd0NBQXVFO0lBQ3ZFO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9waWVkcmEtcGFwZWwtdGlqZXJhL3BpZWRyYS1wYXBlbC10aWplcmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgU2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2p1ZWdvIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VuZXMvaW1nLmpwZykgMCAwIG5vLXJlcGVhdDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgaGVpZ2h0OiAzNjBweDtcclxufVxyXG5cclxuIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuXHJcbiNwaWVkcmEsXHJcbiNwYXBlbCxcclxuI3RpamVyYXtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMCk7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI3BpZWRyYTpob3ZlcixcclxuI3BhcGVsOmhvdmVyLFxyXG4jdGlqZXJhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgXHJcbn1cclxuI3BpZWRyYSB7XHJcbiAgICBtYXJnaW46IDhlbSAwIDAgOGVtO1xyXG59XHJcblxyXG4jcGFwZWwge1xyXG4gICAgbWFyZ2luOiA4ZW0gMCAwIDVlbTtcclxufVxyXG4jdGlqZXJhIHtcclxuICAgIG1hcmdpbjogOGVtIDAgMCA1ZW07XHJcbn1cclxuXHJcbiNpbmZvcm1hY2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwZW07XHJcbiAgICBwYWRkaW5nOiAwIDFlbTtcclxuICAgIHdpZHRoOiA4MDBweDtcclxufVxyXG5cclxuI2luZm9ybWFjaW9uIHB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2VmZWN0byB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOSk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XHJcbn1cclxuXHJcbiNlZmVjdG8gaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMmVtIDAgMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG59XHJcbiNlZmVjdG8gaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4jc25hY2tiYXIge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTI1cHg7XHJcbiAgIFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4jc25hY2tiYXIuR2FuYWRvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU5RjJGO1xyXG59XHJcbiNzbmFja2Jhci5QZXJkZWRvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xyXG59XHJcbiNzbmFja2Jhci5zaG93IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO30gXHJcbiAgICB0byB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxuICAgIHRvIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dCB7XHJcbiAgICBmcm9tIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fSBcclxuICAgIHRvIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xyXG4gICAgZnJvbSB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cclxuICAgIHRvIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxyXG59XHJcblxyXG5cclxuLmZvbmRve1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLi8uLi8uLi9kb2NzL2Fzc2V0cy9pbWFnZW5lcy9zbGlkZXItYmctMi5qcGdcIik7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTAwcHhcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fondo\">\n\n  <h1>Juega Contra la Maquina</h1>\n  <div id=\"juego\" >\n  <div  (click)=\"generar('Piedra')\" id=\"piedra\"></div>\n      <div  (click)=\"generar('Papel')\" id=\"papel\"></div>\n      <div  (click)=\"generar('Tijera')\" id=\"tijera\"></div>\n</div>\n\n<div id=\"snackbar\">{{Mensajes}}</div>\n<br>\n</div>"

/***/ }),

/***/ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PiedraPapelTijeraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiedraPapelTijeraComponent", function() { return PiedraPapelTijeraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_juego_piedra_papel_tijera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-piedra-papel-tijera */ "./src/app/clases/juego-piedra-papel-tijera.ts");



var PiedraPapelTijeraComponent = /** @class */ (function () {
    function PiedraPapelTijeraComponent() {
        this.jugador = JSON.parse(localStorage.getItem("Id"));
        this.nuevoJuego = new _clases_juego_piedra_papel_tijera__WEBPACK_IMPORTED_MODULE_2__["JuegoPiedraPapelTijera"]("Piedra, Papel o Tijera", false, this.jugador, 0, "0");
        this.ocultarVerificar = true;
        this.arrayResultados = JSON.parse(this.jugador);
        this.intentos = 0;
        this.nuevoJuego.resultado = null;
        console.info(this.arrayResultados);
    }
    PiedraPapelTijeraComponent.prototype.generar = function (eleccion) {
        this.ocultarVerificar = false;
        this.nuevoJuego.resultado = this.nuevoJuego.Jugar(eleccion);
        this.MostarMensaje(this.nuevoJuego.resultado, this.nuevoJuego.gana);
        console.log(this.nuevoJuego.gana);
        this.nuevoJuego.jugador = sessionStorage.getItem('user');
        this.nuevoJuego.intentos = this.intentos + 1;
        this.intentos = 0;
        this.nuevoJuego.intentos = this.intentos;
        console.log("maquina " + this.nuevoJuego.compu);
        console.log("usuario " + eleccion);
        console.log(this.nuevoJuego.resultado);
        this.nuevoJuego.guardarLocal();
        this.nuevoJuego = new _clases_juego_piedra_papel_tijera__WEBPACK_IMPORTED_MODULE_2__["JuegoPiedraPapelTijera"]("Piedra, Papel o Tijera", false, this.jugador, 0, "0");
        //Despues de verificar si gane o no, reinicio el juego!!
    };
    PiedraPapelTijeraComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    PiedraPapelTijeraComponent.prototype.ngOnInit = function () {
    };
    PiedraPapelTijeraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-piedra-papel-tijera',
            template: __webpack_require__(/*! ./piedra-papel-tijera.component.html */ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html"),
            styles: [__webpack_require__(/*! ./piedra-papel-tijera.component.css */ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PiedraPapelTijeraComponent);
    return PiedraPapelTijeraComponent;
}());



/***/ }),

/***/ "./src/app/componentes/principal/principal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagenDeMenu{\nwidth: 80px;\nheight: 70px;\n}\n\n.hero-text {\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    color: #100000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcHJpbmNpcGFsL3ByaW5jaXBhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9wcmluY2lwYWwvcHJpbmNpcGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VuRGVNZW51e1xud2lkdGg6IDgwcHg7XG5oZWlnaHQ6IDcwcHg7XG59XG5cbi5oZXJvLXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGNvbG9yOiAjMTAwMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-principal></app-menu-principal>\n\n"

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.ts ***!
  \**************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent() {
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    PrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-principal',
            template: __webpack_require__(/*! ./principal.component.html */ "./src/app/componentes/principal/principal.component.html"),
            styles: [__webpack_require__(/*! ./principal.component.css */ "./src/app/componentes/principal/principal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.imagenDeQuienSoy{\n    width: 100%;\n   \n    }\nbody {\n    font: 20px Montserrat, sans-serif;\n    line-height: 1.8;\n    color: #f5f6f7;\n}\np {font-size: 16px;}\n.margin {margin-bottom: 45px;}\n.bg-1 { \n    background-color: #1abc9c; /* Green \n    color: #ffffff;\n}\n.bg-2 { \n    background-color: #474e5d; /* Dark Blue \n    color: #ffffff;\n}\n.bg-3 { \n    background-color: #ffffff; /* White \n    color: #555555;\n}\n.bg-4 { \n    background-color: #2f2f2f; /* Black Gray \n    color: #fff;\n}\n.container-fluid {\n    padding-top: 70px;\n    padding-bottom: 70px;\n}\n.navbar {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    letter-spacing: 5px;\n}\n.navbar-nav  li a:hover {\n    color: #1abc9c !important;\n}\n\n*/\n.fondo{\n\n    background-image: url('slider-bg-2.jpg');\n    margin-top: -60px;\n  }\nbody {\n    font-family: 'Roboto';font-size: 16px;\n}\n.aboutus-section {\n    padding: 90px 0;\n}\n.aboutus-title {\n    font-size: 30px;\n    letter-spacing: 0;\n    line-height: 32px;\n    margin: 0 0 39px;\n    padding: 0 0 11px;\n    position: relative;\n    text-transform: uppercase;\n    color: chartreuse;\n    text-align: center;\n}\n.aboutus-title::after {\n    background: #fdb801 none repeat scroll 0 0;\n    bottom: 0;\n    content: \"\";\n    height: 10px;\n    left: 0;\n    position: absolute;\n    width: 100%;\n}\n.aboutus-text {\n    color: #ced5ec;\n    font-size: 20px;\n    line-height: 22px;\n    margin: 0 0 35px;\n}\na:hover, a:active {\n    color: #ffb901;\n    text-decoration: none;\n    outline: 0;\n}\n.aboutus-more {\n    border: 1px solid #fdb801;\n    border-radius: 25px;\n    color: #fdb801;\n    display: inline-block;\n    font-size: 14px;\n    font-weight: 700;\n    letter-spacing: 0;\n    padding: 7px 20px;\n    text-transform: uppercase;\n}\n.feature .feature-box .iconset {\n    background: transparent none repeat scroll 0 0;\n    float: left;\n    position: relative;\n    width: 6%;\n}\n.feature .feature-box .feature-content h4 {\n    color: chartreuse;\n    font-size: 18px;\n    letter-spacing: 0;\n    line-height: 22px;\n    margin: 0 0 0px;\n}\n.feature .feature-box .feature-content {\n    float: left;\n    width: 78%;\n}\n.feature .feature-box .feature-content h4 {\n    color: chartreuse;\n    font-size: 18px;\n    letter-spacing: 0;\n    line-height: 22px;\n    margin: 0 0 5px;\n}\n.feature .feature-box .feature-content p {\n    color: #cee409;\n    font-size: 20px;\n\n}\n.icon {\n    color : #f4b841;\n    padding:0px;\n    font-size:40px;\n    border: 1px solid #fdb801;\n    border-radius: 100px;\n    color: #fdb801;\n    font-size: 28px;\n    height: 70px;\n    line-height: 70px;\n    text-align: center;\n    width: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcXVpZW4tc295L3F1aWVuLXNveS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTRDQztBQUNEOztJQUVJLHdDQUF1RTtJQUN2RSxpQkFBaUI7RUFDbkI7QUFFRjtJQUNJLHFCQUFxQixDQUFDLGVBQWU7QUFDekM7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osT0FBTztJQUNQLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSw4Q0FBOEM7SUFDOUMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBR0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcXVpZW4tc295L3F1aWVuLXNveS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyouaW1hZ2VuRGVRdWllblNveXtcbiAgICB3aWR0aDogMTAwJTtcbiAgIFxuICAgIH1cbmJvZHkge1xuICAgIGZvbnQ6IDIwcHggTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuICAgIGNvbG9yOiAjZjVmNmY3O1xufVxucCB7Zm9udC1zaXplOiAxNnB4O31cbi5tYXJnaW4ge21hcmdpbi1ib3R0b206IDQ1cHg7fVxuLmJnLTEgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzljOyAvKiBHcmVlbiBcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5iZy0yIHsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NGU1ZDsgLyogRGFyayBCbHVlIFxuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuLmJnLTMgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSBcbiAgICBjb2xvcjogIzU1NTU1NTtcbn1cbi5iZy00IHsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmYyZjsgLyogQmxhY2sgR3JheSBcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuLm5hdmJhciB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cbi5uYXZiYXItbmF2ICBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzFhYmM5YyAhaW1wb3J0YW50O1xufVxuXG4qL1xuLmZvbmRve1xuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4uLy4uLy4uL2RvY3MvYXNzZXRzL2ltYWdlbmVzL3NsaWRlci1iZy0yLmpwZ1wiKTtcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgfVxuICBcbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztmb250LXNpemU6IDE2cHg7XG59XG5cbi5hYm91dHVzLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDkwcHggMDtcbn1cbi5hYm91dHVzLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgbWFyZ2luOiAwIDAgMzlweDtcbiAgICBwYWRkaW5nOiAwIDAgMTFweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogY2hhcnRyZXVzZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWJvdXR1cy10aXRsZTo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZGI4MDEgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3R0b206IDA7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYWJvdXR1cy10ZXh0IHtcbiAgICBjb2xvcjogI2NlZDVlYztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgbWFyZ2luOiAwIDAgMzVweDtcbn1cblxuYTpob3ZlciwgYTphY3RpdmUge1xuICAgIGNvbG9yOiAjZmZiOTAxO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBvdXRsaW5lOiAwO1xufVxuLmFib3V0dXMtbW9yZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZkYjgwMTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGNvbG9yOiAjZmRiODAxO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmZlYXR1cmUgLmZlYXR1cmUtYm94IC5pY29uc2V0IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNiU7XG59XG5cblxuLmZlYXR1cmUgLmZlYXR1cmUtYm94IC5mZWF0dXJlLWNvbnRlbnQgaDQge1xuICAgIGNvbG9yOiBjaGFydHJldXNlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBtYXJnaW46IDAgMCAwcHg7XG59XG5cblxuLmZlYXR1cmUgLmZlYXR1cmUtYm94IC5mZWF0dXJlLWNvbnRlbnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA3OCU7XG59XG4uZmVhdHVyZSAuZmVhdHVyZS1ib3ggLmZlYXR1cmUtY29udGVudCBoNCB7XG4gICAgY29sb3I6IGNoYXJ0cmV1c2U7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIG1hcmdpbjogMCAwIDVweDtcbn1cbi5mZWF0dXJlIC5mZWF0dXJlLWJveCAuZmVhdHVyZS1jb250ZW50IHAge1xuICAgIGNvbG9yOiAjY2VlNDA5O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcblxufVxuLmljb24ge1xuICAgIGNvbG9yIDogI2Y0Yjg0MTtcbiAgICBwYWRkaW5nOjBweDtcbiAgICBmb250LXNpemU6NDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmRiODAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGNvbG9yOiAjZmRiODAxO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA3MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.html":
/*!****************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fondo\">\n<div class=\"aboutus-section\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-3 col-sm-6 col-xs-12\">\n              <div class=\"aboutus\">\n                  <h2 class=\"aboutus-title\">Sobre Facundo Islas</h2>\n                  <p class=\"aboutus-text\">Soy Facundo Islas, estudiante de la carrera de tecnicatura en programacion en la Universidad Tecnologica Nacional (UTN), curso 4B </p>\n                  <p class=\"aboutus-text\">Para ver mi repositorio podes hacer click en el siguiente boton:</p>\n                  <a class=\"aboutus-more\" href=\"http://www.github.com/facundoislas\" target=\"blank\">Mi Github</a>\n              </div>\n          </div>\n          <div class=\"col-md-3 col-sm-6 col-xs-12\">\n              <div class=\"aboutus-banner\">\n                <img src=\"./assets/imagenes/quiensoy.jpg\" class=\"img-responsive margin imagenDeQuienSoy\"  alt=\"Image\">\n              </div>\n          </div>\n          <div class=\"col-md-5 col-sm-6 col-xs-12\">\n              <div class=\"feature\"><br><br><br>\n                  <div class=\"feature-box\">\n                      <div class=\"clearfix\">\n                          <div class=\"iconset\">\n                              <span class=\"glyphicon glyphicon-cog icon\"></span>\n                          </div>\n                          <div class=\"feature-content\">\n                              <h4>Mi Juego: Adivina la provincia</h4>\n                              <p>El juego consiste en adivinar la provincia a partir de una imagen mostrada.\n                                Entre 4 opciones.\n                              </p>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"feature-box\">\n                      <div class=\"clearfix\">\n                          <div class=\"iconset\">\n                              <span class=\"glyphicon glyphicon-cog icon\"></span>\n                          </div>\n                          <div class=\"feature-content\">\n                              <h4>Objetivo</h4>\n                              <p>Saber cuanto sabes de geografia Argentina a partir de reconocer monumentos historicos o paisajes.</p>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"feature-box\">\n                      \n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.ts ***!
  \**************************************************************/
/*! exports provided: QuienSoyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuienSoyComponent", function() { return QuienSoyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuienSoyComponent = /** @class */ (function () {
    function QuienSoyComponent() {
    }
    QuienSoyComponent.prototype.ngOnInit = function () {
    };
    QuienSoyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quien-soy',
            template: __webpack_require__(/*! ./quien-soy.component.html */ "./src/app/componentes/quien-soy/quien-soy.component.html"),
            styles: [__webpack_require__(/*! ./quien-soy.component.css */ "./src/app/componentes/quien-soy/quien-soy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuienSoyComponent);
    return QuienSoyComponent;
}());



/***/ }),

/***/ "./src/app/componentes/registro/registro.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\n/* Set a style for all buttons */\n\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\n/* Extra styles for the cancel button */\n\n.cancelbtn {\n    padding: 14px 20px;\n    background-color: #f44336;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n\n.cancelbtn,.signupbtn {float:left;width:50%}\n\n/* Add padding to container elements */\n\n.container {\n    padding: 16px;\n}\n\n/* The Modal (background) */\n\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n    border: 1px solid #888;\n    width: 98%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button (x) */\n\n.close {\n    position: absolute;\n    right: 35px;\n    top: 15px;\n    color: #000;\n    font-size: 40px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: red;\n    cursor: pointer;\n}\n\n/* Clear floats */\n\n.clearfix::after {\n    content: \"\";\n    clear: both;\n    display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n\n@media screen and (max-width: 300px) {\n    .cancelbtn, .signupbtn {\n       width: 100%;\n    }\n}\n\n.fondo{\n\n    background-image: url('slider-bg-2.jpg');\n    margin-top: -60px;\n    padding: 3%\n  }\n\n/*-----for border----*/\n\n.container{\n\tfont-family:Roboto,sans-serif;\n\t  background-image:url(https://image.freepik.com/free-vector/dark-blue-blurred-background_1034-589.jpg) ;\n    \n     border-style: 1px solid grey;\n     padding: 5%;\n     text-align: center;\n     opacity: 0.8;\n     max-width: 500px;\n \n     \n}\n\n/*--- for label of first and last name---*/\n\n.lastname{\n\t margin-left: 10px;\n     font-family: sans-serif;\n     font-size: 14px;\n     color: white;\n     margin-top: 10px;\n}\n\n.firstname{\n\t margin-left: 1px;\n     font-family: sans-serif;\n     font-size: 14px;\n     color: white;\n     margin-top: 5px;\n}\n\n#lname{\n\t margin-top:5px;\n}\n\n/*---for heading-----*/\n\n.heading{\n\t -webkit-text-decoration:bold;\n\t         text-decoration:bold;\n\t text-align : center;\n\t font-size:30px;\n\t color:#F96;\n\t padding-top:10px;\n}\n\n/*-------for email----------*/\n\n/*------label----*/\n\n#email{\n\t  margin-top: 5px;\n}\n\n/*-----------for Password--------*/\n\n/*-------label-----*/\n\n.mail{\n\t margin-left: 44px;\n     font-family: sans-serif;\n     color: white;\n     font-size: 14px;\n     margin-top: 13px;\n}\n\n.pass{\n\t color: white;\n     margin-top: 9px;\n     font-size: 14px;\n     font-family: sans-serif;\n     margin-left: 6px;\n     margin-top: 9px;\n}\n\n#password{\n margin-top: 6px;\n}\n\n/*------------for phone Number--------*/\n\n/*----------label--------*/\n\n.pno{\n\t font-size: 18px;\n     margin-left: -13px;\n     margin-top: 10px;\n     color: #ff9;\n\t\n}\n\n/*--------------for Gender---------------*/\n\n/*--------------label---------*/\n\n.gender {\n\t color: white;\n     font-family: sans-serif;\n     font-size: 14px;\n     margin-left: 28px;\n     margin-top: 8px;\n}\n\n/*---------- for Input type--------*/\n\n.col-xs-4.male{\n\t color: white;\n     font-size: 13px;\n     margin-top: 9px;\n     padding-bottom: 16px;\n}\n\n.col-xs-4.female {\n     color: white;\n     font-size: 13px;\n     margin-top: 9px;\n     padding-bottom: 16px;\n\t padding-right: 95px;\n}\n\n/*------------For submit button---------*/\n\n.sbutton{\n\t color: white;\n     font-size: 20px;\n     border: 1px solid white;\n     background-color: #080808;\n     width: 32%;\n     margin-left: 41%;\n     margin-top: 16px;\n\t box-shadow: 0px 2px 2px 0px white;\n  \t   \n   }\n\n.btn.btn-warning:hover {\n    box-shadow: 2px 1px 2px 3px #99ccff;\n\tbackground:#5900a6;\n\tcolor:#fff;\n\ttransition: background-color 1.15s ease-in-out,border-color 1.15s ease-in-out,box-shadow 1.15s ease-in-out;\n\t\n}\t \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBLGdDQUFnQzs7QUFDaEM7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUEsdUNBQXVDOztBQUN2QztJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUEsMkRBQTJEOztBQUMzRCx1QkFBdUIsVUFBVSxDQUFDLFNBQVM7O0FBRTNDLHNDQUFzQzs7QUFDdEM7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLDJCQUEyQjs7QUFDM0I7SUFDSSxhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0IsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtJQUN4RCxpQkFBaUI7QUFDckI7O0FBRUEsc0JBQXNCOztBQUN0QjtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0IsRUFBRSxzREFBc0Q7SUFDaEYsc0JBQXNCO0lBQ3RCLFVBQVUsRUFBRSxvREFBb0Q7QUFDcEU7O0FBRUEseUJBQXlCOztBQUN6QjtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBLGlCQUFpQjs7QUFDakI7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUEsNkVBQTZFOztBQUM3RTtJQUNJO09BQ0csV0FBVztJQUNkO0FBQ0o7O0FBQ0E7O0lBRUksd0NBQXVFO0lBQ3ZFLGlCQUFpQjtJQUNqQjtFQUNGOztBQUdGLHNCQUFzQjs7QUFDdEI7Q0FDQyw2QkFBNkI7R0FDM0Isc0dBQXNHOztLQUVwRyw0QkFBNEI7S0FDNUIsV0FBVztLQUNYLGtCQUFrQjtLQUNsQixZQUFZO0tBQ1osZ0JBQWdCOzs7QUFHckI7O0FBQ0EsMENBQTBDOztBQUMxQztFQUNFLGlCQUFpQjtLQUNkLHVCQUF1QjtLQUN2QixlQUFlO0tBQ2YsWUFBWTtLQUNaLGdCQUFnQjtBQUNyQjs7QUFDQTtFQUNFLGdCQUFnQjtLQUNiLHVCQUF1QjtLQUN2QixlQUFlO0tBQ2YsWUFBWTtLQUNaLGVBQWU7QUFDcEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUdBLHNCQUFzQjs7QUFDdEI7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFDQSw2QkFBNkI7O0FBQzNCLGtCQUFrQjs7QUFDcEI7R0FDRyxlQUFlO0FBQ2xCOztBQUNBLGtDQUFrQzs7QUFDN0Isb0JBQW9COztBQUN6QjtFQUNFLGlCQUFpQjtLQUNkLHVCQUF1QjtLQUN2QixZQUFZO0tBQ1osZUFBZTtLQUNmLGdCQUFnQjtBQUNyQjs7QUFDQTtFQUNFLFlBQVk7S0FDVCxlQUFlO0tBQ2YsZUFBZTtLQUNmLHVCQUF1QjtLQUN2QixnQkFBZ0I7S0FDaEIsZUFBZTtBQUNwQjs7QUFDQTtDQUNDLGVBQWU7QUFDaEI7O0FBQ0EsdUNBQXVDOztBQUNqQywwQkFBMEI7O0FBQ2hDO0VBQ0UsZUFBZTtLQUNaLGtCQUFrQjtLQUNsQixnQkFBZ0I7S0FDaEIsV0FBVzs7QUFFaEI7O0FBRUEsMENBQTBDOztBQUNyQywrQkFBK0I7O0FBQ3BDO0VBQ0UsWUFBWTtLQUNULHVCQUF1QjtLQUN2QixlQUFlO0tBQ2YsaUJBQWlCO0tBQ2pCLGVBQWU7QUFDcEI7O0FBRUssb0NBQW9DOztBQUN6QztFQUNFLFlBQVk7S0FDVCxlQUFlO0tBQ2YsZUFBZTtLQUNmLG9CQUFvQjtBQUN6Qjs7QUFDQTtLQUNLLFlBQVk7S0FDWixlQUFlO0tBQ2YsZUFBZTtLQUNmLG9CQUFvQjtFQUN2QixtQkFBbUI7QUFDckI7O0FBQ0EseUNBQXlDOztBQUN6QztFQUNFLFlBQVk7S0FDVCxlQUFlO0tBQ2YsdUJBQXVCO0tBQ3ZCLHlCQUF5QjtLQUN6QixVQUFVO0tBQ1YsZ0JBQWdCO0tBQ2hCLGdCQUFnQjtFQUNuQixpQ0FBaUM7O0dBRWhDOztBQUNIO0lBQ0ksbUNBQW1DO0NBQ3RDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsMEdBQTBHOztBQUUzRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIEV4dHJhIHN0eWxlcyBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cbi5jYW5jZWxidG4ge1xuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cbi5jYW5jZWxidG4sLnNpZ251cGJ0biB7ZmxvYXQ6bGVmdDt3aWR0aDo1MCV9XG5cbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuLm1vZGFsIHtcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xuLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogOTglOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xufVxuXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xuLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDM1cHg7XG4gICAgdG9wOiAxNXB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsb3NlOmhvdmVyLFxuLmNsb3NlOmZvY3VzIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQ2xlYXIgZmxvYXRzICovXG4uY2xlYXJmaXg6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gICAgLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuLmZvbmRve1xuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4uLy4uLy4uL2RvY3MvYXNzZXRzL2ltYWdlbmVzL3NsaWRlci1iZy0yLmpwZ1wiKTtcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgICBwYWRkaW5nOiAzJVxuICB9XG5cblxuLyotLS0tLWZvciBib3JkZXItLS0tKi9cbi5jb250YWluZXJ7XG5cdGZvbnQtZmFtaWx5OlJvYm90byxzYW5zLXNlcmlmO1xuXHQgIGJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvZGFyay1ibHVlLWJsdXJyZWQtYmFja2dyb3VuZF8xMDM0LTU4OS5qcGcpIDtcbiAgICBcbiAgICAgYm9yZGVyLXN0eWxlOiAxcHggc29saWQgZ3JleTtcbiAgICAgcGFkZGluZzogNSU7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgb3BhY2l0eTogMC44O1xuICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuIFxuICAgICBcbn1cbi8qLS0tIGZvciBsYWJlbCBvZiBmaXJzdCBhbmQgbGFzdCBuYW1lLS0tKi9cbi5sYXN0bmFtZXtcblx0IG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICBjb2xvcjogd2hpdGU7XG4gICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZmlyc3RuYW1le1xuXHQgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgY29sb3I6IHdoaXRlO1xuICAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4jbG5hbWV7XG5cdCBtYXJnaW4tdG9wOjVweDtcbn1cblx0ICBcblxuLyotLS1mb3IgaGVhZGluZy0tLS0tKi9cbi5oZWFkaW5ne1xuXHQgdGV4dC1kZWNvcmF0aW9uOmJvbGQ7XG5cdCB0ZXh0LWFsaWduIDogY2VudGVyO1xuXHQgZm9udC1zaXplOjMwcHg7XG5cdCBjb2xvcjojRjk2O1xuXHQgcGFkZGluZy10b3A6MTBweDtcbn1cbi8qLS0tLS0tLWZvciBlbWFpbC0tLS0tLS0tLS0qL1xuICAvKi0tLS0tLWxhYmVsLS0tLSovXG4jZW1haWx7XG5cdCAgbWFyZ2luLXRvcDogNXB4O1xufVxuLyotLS0tLS0tLS0tLWZvciBQYXNzd29yZC0tLS0tLS0tKi9cbiAgICAgLyotLS0tLS0tbGFiZWwtLS0tLSovXG4ubWFpbHtcblx0IG1hcmdpbi1sZWZ0OiA0NHB4O1xuICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgY29sb3I6IHdoaXRlO1xuICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgIG1hcmdpbi10b3A6IDEzcHg7XG59XG4ucGFzc3tcblx0IGNvbG9yOiB3aGl0ZTtcbiAgICAgbWFyZ2luLXRvcDogOXB4O1xuICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICBtYXJnaW4tdG9wOiA5cHg7XG59XG4jcGFzc3dvcmR7XG4gbWFyZ2luLXRvcDogNnB4O1xufVxuLyotLS0tLS0tLS0tLS1mb3IgcGhvbmUgTnVtYmVyLS0tLS0tLS0qL1xuICAgICAgLyotLS0tLS0tLS0tbGFiZWwtLS0tLS0tLSovXG4ucG5ve1xuXHQgZm9udC1zaXplOiAxOHB4O1xuICAgICBtYXJnaW4tbGVmdDogLTEzcHg7XG4gICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgIGNvbG9yOiAjZmY5O1xuXHRcbn1cdFxuXG4vKi0tLS0tLS0tLS0tLS0tZm9yIEdlbmRlci0tLS0tLS0tLS0tLS0tLSovXG4gICAgIC8qLS0tLS0tLS0tLS0tLS1sYWJlbC0tLS0tLS0tLSovXG4uZ2VuZGVyIHtcblx0IGNvbG9yOiB3aGl0ZTtcbiAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgbWFyZ2luLWxlZnQ6IDI4cHg7XG4gICAgIG1hcmdpbi10b3A6IDhweDtcbn1cblxuICAgICAvKi0tLS0tLS0tLS0gZm9yIElucHV0IHR5cGUtLS0tLS0tLSovXG4uY29sLXhzLTQubWFsZXtcblx0IGNvbG9yOiB3aGl0ZTtcbiAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuLmNvbC14cy00LmZlbWFsZSB7XG4gICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuXHQgcGFkZGluZy1yaWdodDogOTVweDtcbn1cdFxuLyotLS0tLS0tLS0tLS1Gb3Igc3VibWl0IGJ1dHRvbi0tLS0tLS0tLSovXG4uc2J1dHRvbntcblx0IGNvbG9yOiB3aGl0ZTtcbiAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA4MDgwODtcbiAgICAgd2lkdGg6IDMyJTtcbiAgICAgbWFyZ2luLWxlZnQ6IDQxJTtcbiAgICAgbWFyZ2luLXRvcDogMTZweDtcblx0IGJveC1zaGFkb3c6IDBweCAycHggMnB4IDBweCB3aGl0ZTtcbiAgXHQgICBcbiAgIH1cbi5idG4uYnRuLXdhcm5pbmc6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDJweCAxcHggMnB4IDNweCAjOTljY2ZmO1xuXHRiYWNrZ3JvdW5kOiM1OTAwYTY7XG5cdGNvbG9yOiNmZmY7XG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMS4xNXMgZWFzZS1pbi1vdXQsYm9yZGVyLWNvbG9yIDEuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgMS4xNXMgZWFzZS1pbi1vdXQ7XG5cdFxufVx0ICJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/registro/registro.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--body>\n  <div class=\"jumbotron\">\n    <h2 id=\"terminos\">Terminos y condiciones</h2>\n    <p>El Gobierno de la República Argentina (en adelante el “Gobierno Nacional”) no es responsable por los daños y perjuicios que puedan surgir, incluyendo, sin límite, daños, pérdidas o gastos directos, indirectos, que surjan en relación con el uso de los Activos Digitales o la imposibilidad de uso, en relación con cualquier falla en el vencimiento, error, omisión, interrupción, defecto, demora en la operación o transmisión, virus de computadora o falla del sistema de línea, aún en el caso de que el Gobierno Nacional o sus representantes fueran informados sobre la posibilidad de dichos daños, pérdidas o gastos.</p>\n    <p>El Gobierno Nacional no controla ni garantiza la ausencia de virus ni de otros elementos en los contenidos que puedan producir alteraciones en su sistema informático (software y hardware) o en los documentos electrónicos y ficheros almacenados en su sistema informático.</p>\n    <p>El Gobierno Nacional no puede garantizar que la transmisión de información por parte de los Usuarios sea completamente segura. El Usuario asume este riesgo.</p>\n   \n  </div>\n  <strong><p>No leer lo anterior, es solo un ejemplo sacado de https://www.argentina.gob.ar/terminos-y-condiciones </p></strong>\n  <button onclick=\"document.getElementById('id01').style.display='block'\" style=\"width:auto;\">Acepto</button>\n  <button  class=\"cancelbtn\"  routerLink=\"/Principal\" style=\"width:auto;\">No acepto</button>\n  <div id=\"id01\" class=\"modal\">\n    <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"Close Modal\">×</span>\n    <form class=\"modal-content animate\" >\n      <div class=\"container\">\n        <label><b>Email</b></label>\n        <input type=\"text\" placeholder=\"Ingresa tu correo\" name=\"email\" required>\n  \n        <label><b>Clave</b></label>\n        <input type=\"password\" placeholder=\"Aca la clave\" name=\"psw\" required>\n  \n        <label><b>Repita la clave</b></label>\n        <input type=\"password\" placeholder=\"Aca repeti la misa clave  de arriba\" name=\"psw-repeat\" required>\n        <input type=\"checkbox\" checked=\"checked\">Recordar mis datos\n        <p>creando la cuenta aceptando los<a  onclick=\"document.getElementById('id01').style.display='none'\"  >Terminos y condiciones</a>.</p>\n  \n        <div class=\"clearfix\">\n          <button type=\"button\" onclick=\"document.getElementById('id01').style.display='none'\" class=\"cancelbtn\">Me arrepenti</button>\n          <button type=\"submit\" class=\"signupbtn\">Registrarme</button>\n        </div>\n      </div>\n    </form>\n  </div>\n  \n  <script>\n  // Get the modal\n  var modal = document.getElementById('id01');\n  \n  // When the user clicks anywhere outside of the modal, close it\n  window.onclick = function(event) {\n      if (event.target == modal) {\n          modal.style.display = \"none\";\n      }\n  }\n  </script>\n  \n  </body-->\n  <body class=\"fondo\">\n    <div class=\"container\">\n    <!---heading---->\n        <header class=\"heading\"> Formulario de Registro</header>\n     <!---Form starting----> \n     <div class=\"row \">\n      <!--- For Name---->\n            <div class=\"col-sm-12\">\n                <div class=\"row\">\n              <div class=\"col-xs-4\">\n                        <label class=\"firstname\">Nombre</label> </div>\n                <div class=\"col-xs-8\">\n                    <input type=\"text\" name=\"fname\" id=\"fname\" placeholder=\"Enter your First Name\" class=\"form-control \">\n                </div>\n             </div>\n        </div>\n        \n        <!-----For email---->\n        <div class=\"col-sm-12\">\n            <div class=\"row\">\n              <div class=\"col-xs-4\">\n                    <label class=\"mail\" >Correo :</label></div>\n              <div class=\"col-xs-8\"\t>\t \n                   <input type=\"email\" name=\"email\"  id=\"email\"placeholder=\"Enter your email\" class=\"form-control\" >\n                </div>\n            </div>\n        </div>\n      <!-----For Password and confirm password---->\n             <div class=\"col-sm-12\">\n                <div class=\"row\">\n                <div class=\"col-xs-4\">\n                        <label class=\"pass\">Contraseña :</label></div>\n             <div class=\"col-xs-8\">\n                      <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Ingresa tu contra\" class=\"form-control\">\n            </div>\n             </div>\n         </div>\n         \n        <!-----------For Phone number-------->\n            <div class=\"col-sm-12\">\n            <div class =\"row\">\n                    <div class=\"col-xs-4 \">\n                <label class=\"gender\">Genero:</label>\n            </div>\n          \n              <div class=\"col-xs-4 male\">\t \n                <input type=\"radio\" name=\"gender\"  id=\"gender\" value=\"boy\">Masculino\n            </div>\n            \n            <div class=\"col-xs-4 female\">\n                <input type=\"radio\"  name=\"gender\" id=\"gender\" value=\"girl\" >Femenino\n              </div>\n         \n            </div>\n            <div class=\"col-sm-12\">\n                <div class=\"btn btn-warning\">Enviar</div>\n          </div>\n          <br>\n          <div class=\"col-sm-12\">\n            <div class=\"btn btn-warning\" routerLink=\"/\">Loguearse</div>\n      </div>\n        </div>\n      </div>\t \n             \n        \n   </div>\n   "

/***/ }),

/***/ "./src/app/componentes/registro/registro.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.ts ***!
  \************************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
var RegistroComponent = /** @class */ (function () {
    /* constructor( private miConstructor:FormBuilder) { }
     email=new FormControl('',[Validators.email]);
     formRegistro:FormGroup=this.miConstructor.group({
       usuario:this.email
     });*/
    function RegistroComponent() {
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/componentes/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/componentes/registro/registro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/componentes/tateti/tateti.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/tateti/tateti.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fondo{\r\n\r\n    background-image: url('slider-bg-2.jpg');\r\n    margin-top: -60px;\r\n    padding: 4%;\r\n  }\r\n\r\n\r\n.casilla {\r\n    height: 5rem;\r\n    margin: 0.5rem;\r\n    font-size: 3rem;\r\n    border-radius:25px;\r\n    background-color: aqua;\r\n    width: 10rem;\r\n    border: solid yellow;\r\n}\r\n\r\n\r\n#snackbar {\r\n  visibility: hidden;\r\n  min-width: 250px;\r\n  margin-left: -125px;\r\n \r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 2px;\r\n  padding: 16px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 50%;\r\n  bottom: 30px;\r\n  font-size: 17px;\r\n}\r\n\r\n\r\n#snackbar.Ganador {\r\n  background-color: #059F2F;\r\n}\r\n\r\n\r\n#snackbar.Perdedor {\r\n  background-color: #FF0000;\r\n}\r\n\r\n\r\n#snackbar.show {\r\n  visibility: visible;\r\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n\r\n@-webkit-keyframes fadein {\r\n  from {bottom: 0; opacity: 0;} \r\n  to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n\r\n@keyframes fadein {\r\n  from {bottom: 0; opacity: 0;}\r\n  to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n\r\n@-webkit-keyframes fadeout {\r\n  from {bottom: 30px; opacity: 1;} \r\n  to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n\r\n@keyframes fadeout {\r\n  from {bottom: 30px; opacity: 1;}\r\n  to {bottom: 0; opacity: 0;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvdGF0ZXRpL3RhdGV0aS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHdDQUF1RTtJQUN2RSxpQkFBaUI7SUFDakIsV0FBVztFQUNiOzs7QUFHRjtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7RUFFbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7RUFDWixlQUFlO0FBQ2pCOzs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlEQUFpRDtFQUNqRCx5Q0FBeUM7QUFDM0M7OztBQUVBO0VBQ0UsTUFBTSxTQUFTLEVBQUUsVUFBVSxDQUFDO0VBQzVCLElBQUksWUFBWSxFQUFFLFVBQVUsQ0FBQztBQUMvQjs7O0FBRUE7RUFDRSxNQUFNLFNBQVMsRUFBRSxVQUFVLENBQUM7RUFDNUIsSUFBSSxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQy9COzs7QUFFQTtFQUNFLE1BQU0sWUFBWSxFQUFFLFVBQVUsQ0FBQztFQUMvQixJQUFJLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFDNUI7OztBQUVBO0VBQ0UsTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0VBQy9CLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3RhdGV0aS90YXRldGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb25kb3tcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi4vLi4vLi4vZG9jcy9hc3NldHMvaW1hZ2VuZXMvc2xpZGVyLWJnLTIuanBnXCIpO1xyXG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgICBwYWRkaW5nOiA0JTtcclxuICB9XHJcblxyXG5cclxuLmNhc2lsbGEge1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOjI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgYm9yZGVyOiBzb2xpZCB5ZWxsb3c7XHJcbn1cclxuXHJcbiNzbmFja2JhciB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMjVweDtcclxuIFxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4jc25hY2tiYXIuR2FuYWRvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1OUYyRjtcclxufVxyXG4jc25hY2tiYXIuUGVyZGVkb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XHJcbn1cclxuI3NuYWNrYmFyLnNob3cge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxuICBhbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgZnJvbSB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO30gXHJcbiAgdG8ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWluIHtcclxuICBmcm9tIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxyXG4gIHRvIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dCB7XHJcbiAgZnJvbSB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO30gXHJcbiAgdG8ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZW91dCB7XHJcbiAgZnJvbSB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cclxuICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/tateti/tateti.component.html":
/*!**********************************************************!*\
  !*** ./src/app/componentes/tateti/tateti.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"fondo\">\n    <h1 style=\"color:yellow; text-align: center\">TaTeTi</h1>\n<div style=\"text-align: center\">\n    <button mat-raised-button (click)=\"presion(0,0)\" class=\"casilla\">{{nuevoJuego.posiciones[0][0]}}</button>\n    <button mat-raised-button (click)=\"presion(0,1)\" class=\"casilla\">{{nuevoJuego.posiciones[0][1]}}</button>\n    <button mat-raised-button (click)=\"presion(0,2)\" class=\"casilla\">{{nuevoJuego.posiciones[0][2]}}</button>\n    <br>\n    <button mat-raised-button (click)=\"presion(1,0)\" class=\"casilla\">{{nuevoJuego.posiciones[1][0]}}</button>\n    <button mat-raised-button (click)=\"presion(1,1)\" class=\"casilla\">{{nuevoJuego.posiciones[1][1]}}</button>\n    <button mat-raised-button (click)=\"presion(1,2)\" class=\"casilla\">{{nuevoJuego.posiciones[1][2]}}</button>\n    <br>\n    <button mat-raised-button (click)=\"presion(2,0)\" class=\"casilla\">{{nuevoJuego.posiciones[2][0]}}</button>\n    <button mat-raised-button (click)=\"presion(2,1)\" class=\"casilla\">{{nuevoJuego.posiciones[2][1]}}</button>\n    <button mat-raised-button (click)=\"presion(2,2)\" class=\"casilla\">{{nuevoJuego.posiciones[2][2]}}</button>\n  </div>\n  <div style=\"text-align: center\">\n    <button mat-button class=\"btn btn-warning btn-lg\" (click)=\"nuevoJuego.reiniciar()\">Reiniciar</button>\n  </div>\n\n  <div id=\"snackbar\">{{Mensajes}}</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/componentes/tateti/tateti.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/tateti/tateti.component.ts ***!
  \********************************************************/
/*! exports provided: TatetiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TatetiComponent", function() { return TatetiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_tateti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/tateti */ "./src/app/clases/tateti.ts");



var TatetiComponent = /** @class */ (function () {
    function TatetiComponent() {
        this.jugador = JSON.parse(localStorage.getItem("Id"));
        this.nuevoJuego = new _clases_tateti__WEBPACK_IMPORTED_MODULE_2__["Tateti"]("Tateti", false, this.jugador, 0, "0");
        this.ocultarVerificar = true;
        this.arrayResultados = JSON.parse(this.jugador);
    }
    TatetiComponent.prototype.generar = function () {
        this.ocultarVerificar = false;
        this.nuevoJuego.generarTateti();
        this.nuevoJuego = new _clases_tateti__WEBPACK_IMPORTED_MODULE_2__["Tateti"]("Tateti", false, this.jugador, 0, "0");
    };
    TatetiComponent.prototype.presion = function (fila, columna) {
        if (this.nuevoJuego.posiciones[fila][columna] == '-' && this.nuevoJuego.jugadas > 0) {
            this.nuevoJuego.posiciones[fila][columna] = this.nuevoJuego.juega;
            this.nuevoJuego.cambiarJugador();
            this.nuevoJuego.eleccionMaquina();
            this.nuevoJuego.cambiarJugador();
            this.quienGano();
        }
    };
    TatetiComponent.prototype.quienGano = function () {
        if (this.verificarGano('O')) {
            this.MostarMensaje("Sos un genio, le ganaste a la inteligencia artificial", true);
            this.nuevoJuego.gano = true;
            this.nuevoJuego.jugador = sessionStorage.getItem('user');
            this.nuevoJuego.guardarLocal();
            this.nuevoJuego.generarTateti();
        }
        if (this.verificarGano('X')) {
            this.MostarMensaje("La maquina te gano", false);
            this.nuevoJuego.gano = false;
            this.nuevoJuego.jugador = sessionStorage.getItem('user');
            this.nuevoJuego.guardarLocal();
            this.nuevoJuego = new _clases_tateti__WEBPACK_IMPORTED_MODULE_2__["Tateti"]("Tateti", false, this.jugador, 0, "0");
            this.nuevoJuego.generarTateti();
        }
        if (this.nuevoJuego.jugadas == 0 && this.nuevoJuego.juega == 'X') {
            this.nuevoJuego.gano = false;
            this.nuevoJuego.jugador = sessionStorage.getItem('user');
            this.nuevoJuego.guardarLocal();
            this.MostarMensaje("empate", false);
        }
    };
    TatetiComponent.prototype.verificarGano = function (ficha) {
        if (this.nuevoJuego.posiciones[0][0] == ficha && this.nuevoJuego.posiciones[0][1] == ficha && this.nuevoJuego.posiciones[0][2] == ficha)
            return true;
        if (this.nuevoJuego.posiciones[1][0] == ficha && this.nuevoJuego.posiciones[1][1] == ficha && this.nuevoJuego.posiciones[1][2] == ficha)
            return true;
        if (this.nuevoJuego.posiciones[2][0] == ficha && this.nuevoJuego.posiciones[2][1] == ficha && this.nuevoJuego.posiciones[2][2] == ficha)
            return true;
        if (this.nuevoJuego.posiciones[0][0] == ficha && this.nuevoJuego.posiciones[1][0] == ficha && this.nuevoJuego.posiciones[2][0] == ficha)
            return true;
        if (this.nuevoJuego.posiciones[0][1] == ficha && this.nuevoJuego.posiciones[1][1] == ficha && this.nuevoJuego.posiciones[2][1] == ficha)
            return true;
        if (this.nuevoJuego.posiciones[0][2] == ficha && this.nuevoJuego.posiciones[1][2] == ficha && this.nuevoJuego.posiciones[2][2] == ficha)
            return true;
        if (this.nuevoJuego.posiciones[0][0] == ficha && this.nuevoJuego.posiciones[1][1] == ficha && this.nuevoJuego.posiciones[2][2] == ficha)
            return true;
        if (this.nuevoJuego.posiciones[0][2] == ficha && this.nuevoJuego.posiciones[1][1] == ficha && this.nuevoJuego.posiciones[2][0] == ficha)
            return true;
    };
    TatetiComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    TatetiComponent.prototype.ngOnInit = function () {
        this.nuevoJuego.generarTateti();
    };
    TatetiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tateti',
            template: __webpack_require__(/*! ./tateti.component.html */ "./src/app/componentes/tateti/tateti.component.html"),
            styles: [__webpack_require__(/*! ./tateti.component.css */ "./src/app/componentes/tateti/tateti.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TatetiComponent);
    return TatetiComponent;
}());



/***/ }),

/***/ "./src/app/pipes/sexo.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/sexo.pipe.ts ***!
  \************************************/
/*! exports provided: SexoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SexoPipe", function() { return SexoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SexoPipe = /** @class */ (function () {
    function SexoPipe() {
    }
    SexoPipe.prototype.transform = function (value, args) {
        if (value = 'M') {
            return "machito";
        }
        else {
            return "señorita";
        }
    };
    SexoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sexo'
        })
    ], SexoPipe);
    return SexoPipe;
}());



/***/ }),

/***/ "./src/app/ruteando/ruteando.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ruteando/ruteando.module.ts ***!
  \*********************************************/
/*! exports provided: RuteandoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuteandoModule", function() { return RuteandoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentes/adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentes/error/error.component */ "./src/app/componentes/error/error.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componentes/adivina-mas-listado/adivina-mas-listado.component */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componentes/agilidad-mas-listado/agilidad-mas-listado.component */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componentes/listado/listado.component */ "./src/app/componentes/listado/listado.component.ts");
/* harmony import */ var _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../componentes/juegos/juegos.component */ "./src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../componentes/jugadores-listado/jugadores-listado.component */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var _componentes_adivina_provincia_adivina_provincia_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../componentes/adivina-provincia/adivina-provincia.component */ "./src/app/componentes/adivina-provincia/adivina-provincia.component.ts");
/* harmony import */ var _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../componentes/piedra-papel-tijera/piedra-papel-tijera.component */ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../componentes/anagrama/anagrama.component */ "./src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../componentes/tateti/tateti.component */ "./src/app/componentes/tateti/tateti.component.ts");


// importo del module principal


















// declaro donde quiero que se dirija
var MiRuteo = [
    { path: 'Jugadores', component: _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_15__["JugadoresListadoComponent"] },
    { path: '', component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'Login', component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'QuienSoy', component: _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_14__["QuienSoyComponent"] },
    { path: 'Registro', component: _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_12__["RegistroComponent"] },
    { path: 'Principal', component: _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_6__["PrincipalComponent"] },
    { path: 'Listado', component: _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_10__["ListadoComponent"] },
    { path: 'Juegos',
        component: _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_11__["JuegosComponent"],
        children: [{ path: '', component: _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_13__["MenuCardComponent"] },
            { path: 'Adivina', component: _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_3__["AdivinaElNumeroComponent"] },
            { path: 'AdivinaMasListado', component: _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_8__["AdivinaMasListadoComponent"] },
            { path: 'AgilidadaMasListado', component: _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_9__["AgilidadMasListadoComponent"] },
            { path: 'Agilidad', component: _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_7__["AgilidadAritmeticaComponent"] },
            { path: 'AdivinaProvincia', component: _componentes_adivina_provincia_adivina_provincia_component__WEBPACK_IMPORTED_MODULE_16__["AdivinaProvinciaComponent"] },
            { path: 'Anagrama', component: _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_18__["AnagramaComponent"] },
            { path: 'PiedraPapelTijera', component: _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_17__["PiedraPapelTijeraComponent"] },
            { path: 'Tateti', component: _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_19__["TatetiComponent"] }]
    },
    { path: '**', component: _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"] },
    { path: 'error', component: _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"] }
];
var RuteandoModule = /** @class */ (function () {
    function RuteandoModule() {
    }
    RuteandoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(MiRuteo)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], RuteandoModule);
    return RuteandoModule;
}());



/***/ }),

/***/ "./src/app/servicios/archivos-jugadores.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/servicios/archivos-jugadores.service.ts ***!
  \*********************************************************/
/*! exports provided: ArchivosJugadoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivosJugadoresService", function() { return ArchivosJugadoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");



var ArchivosJugadoresService = /** @class */ (function () {
    function ArchivosJugadoresService(miHttp) {
        this.miHttp = miHttp;
        this.api = "http://localhost:8080/jugadoresarchivo/apirestjugadores/";
    }
    ArchivosJugadoresService.prototype.traerJugadores = function (ruta) {
        return this.miHttp.httpGetO(this.api + ruta)
            .toPromise()
            .then(function (data) {
            console.log("Archivo jugadores");
            // console.log( data );
            return data;
        }, function (err) {
            console.log(err);
        });
    };
    ArchivosJugadoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"]])
    ], ArchivosJugadoresService);
    return ArchivosJugadoresService;
}());



/***/ }),

/***/ "./src/app/servicios/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/servicios/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
        console.log('Hello AuthProvider Provider');
    }
    // Login de usuario
    AuthService.prototype.loginUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.reject(err); });
    };
    Object.defineProperty(AuthService.prototype, "Session", {
        // Devuelve la session
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    // Logout de usuario
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut().then(function () {
            // hemos salido
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/servicios/juego-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/servicios/juego-service.service.ts ***!
  \****************************************************/
/*! exports provided: JuegoServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoServiceService", function() { return JuegoServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clases/juego-adivina */ "./src/app/clases/juego-adivina.ts");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");




var JuegoServiceService = /** @class */ (function () {
    function JuegoServiceService(miHttp) {
        this.miHttp = miHttp;
        this.peticion = this.miHttp.httpGetO("http://localhost:3003");
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    JuegoServiceService.prototype.listar = function () {
        this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(function (data) {
            console.log(data);
        })
            .catch(function (err) {
            console.log(err);
        });
        this.peticion
            .subscribe(function (data) {
            console.log("En listar");
            console.log(data);
        }, function (err) {
            console.info("error: ", err);
        });
        var miArray = new Array();
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 1", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Pepe", true));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 3", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 4", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 5", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 6", false));
        return miArray;
    };
    JuegoServiceService.prototype.listarPromesa = function () {
        this.peticion
            .subscribe(function (data) {
            console.log("En listarPromesa");
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        var promesa = new Promise(function (resolve, reject) {
            var miArray = new Array();
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 1", false, "promesa"));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("PepePromesa", true));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 3", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 4", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 5", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 6", false));
            resolve(miArray);
        });
        return promesa;
    };
    JuegoServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_3__["MiHttpService"]])
    ], JuegoServiceService);
    return JuegoServiceService;
}());



/***/ }),

/***/ "./src/app/servicios/jugadores.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicios/jugadores.service.ts ***!
  \************************************************/
/*! exports provided: JugadoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresService", function() { return JugadoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./archivos-jugadores.service */ "./src/app/servicios/archivos-jugadores.service.ts");



var JugadoresService = /** @class */ (function () {
    //peticion:any;
    function JugadoresService(miHttp) {
        this.miHttp = miHttp;
        // this.peticion = this.miHttp.traerJugadores();
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    JugadoresService.prototype.traertodos = function (ruta, filtro) {
        var _this = this;
        return this.miHttp.traerJugadores(ruta).then(function (data) {
            console.info("jugadores service", data);
            _this.filtrado = data;
            var ganador;
            if (filtro == "ganadores") {
                ganador = true;
            }
            else {
                ganador = false;
            }
            _this.filtrado = _this.filtrado.filter(function (data) { return data.gano === ganador || filtro == "todos"; });
            return _this.filtrado;
        })
            .catch(function (errror) {
            console.log("error");
            return _this.filtrado;
        });
    };
    JugadoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["ArchivosJugadoresService"]])
    ], JugadoresService);
    return JugadoresService;
}());



/***/ }),

/***/ "./src/app/servicios/mi-http/mi-http.service.ts":
/*!******************************************************!*\
  !*** ./src/app/servicios/mi-http/mi-http.service.ts ***!
  \******************************************************/
/*! exports provided: MiHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiHttpService", function() { return MiHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);







var MiHttpService = /** @class */ (function () {
    function MiHttpService(http) {
        this.http = http;
    }
    MiHttpService.prototype.httpGetP = function (url) {
        return this.http
            .get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    MiHttpService.prototype.httpPostP = function (url, objeto) {
        return this.http
            .get(url)
            .subscribe(function (data) {
            console.log(data);
            return data;
        });
    };
    MiHttpService.prototype.httpGetO = function (url) {
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err.json().error || 'Server error'); });
    };
    MiHttpService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    MiHttpService.prototype.handleError = function (error) {
        return error;
    };
    MiHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], MiHttpService);
    return MiHttpService;
}());



/***/ }),

/***/ "./src/app/servicios/paises.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servicios/paises.service.ts ***!
  \*********************************************/
/*! exports provided: PaisesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisesService", function() { return PaisesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");



var PaisesService = /** @class */ (function () {
    function PaisesService(miHttp) {
        this.miHttp = miHttp;
    }
    PaisesService.prototype.listar = function () {
        return this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(function (data) {
            console.log(data);
            return data;
        })
            .catch(function (err) {
            console.log(err);
            return null;
        });
        //return null;
    };
    PaisesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"]])
    ], PaisesService);
    return PaisesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyB-0QF1A2VINGfWr-VS0LzFGG4_Mj8FJLM",
        authDomain: "usuarios-d42dc.firebaseapp.com",
        databaseURL: "https://usuarios-d42dc.firebaseio.com",
        projectId: "usuarios-d42dc",
        storageBucket: "usuarios-d42dc.appspot.com",
        messagingSenderId: "284760046985"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\fislas\Desktop\labo 4\salaJuegos\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map