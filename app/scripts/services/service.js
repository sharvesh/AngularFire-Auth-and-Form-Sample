'use strict';

angular.module('myApp.services', ['firebase'])

  .factory("authService", function($firebaseAuth, $rootScope) {
    $rootScope.userData = {};
    var auth = $firebaseAuth();

    function signInWithPopup(type) {
      return $firebaseAuth.$signInWithPopup(type);
    }

    function setUserData(data) {
      $rootScope.activeSession = true;
      $rootScope.userData = angular.copy(data.providerData[0]);
      if ($rootScope.userData.displayName == null) {
        $rootScope.userData.displayName = $rootScope.userData.email;
      }
      return $rootScope.userData;
    }

    function getUserData() {
      return $rootScope.userData;
    }

    function removeUserData() {
      $rootScope.activeSession = false;
      $rootScope.userData = {};
      return $rootScope.userData;
    }
    // return $firebaseAuth();
    return {
      auth: auth,
      signInWithPopup: signInWithPopup,
      setUserData: setUserData,
      getUserData: getUserData,
      removeUserData: removeUserData
    };
  })
  .factory("claimService", function($firebaseArray) {

    var ref = firebase.database().ref().child('list');

    function addNew(userData) {
      var list = $firebaseArray(ref);
      return list.$add(userData);
    }

    return {
      ref: ref,
      add: addNew
    };
  })
  .factory('currencyData', function() {
    /*http://www.localeplanet.com/api/auto/currencymap.json*/
    return {
      "AED": {
        "symbol": "AED",
        "symbol_native": "\u062f.\u0625.\u200f",
        "group": "Others",
        "code": "AED",
        "display": "AED (\u062f.\u0625.\u200f)"
      },
      "AFN": {
        "symbol": "AFN",
        "symbol_native": "\u060b",
        "group": "Others",
        "code": "AFN",
        "display": "AFN (\u060b)"
      },
      "ALL": {
        "symbol": "ALL",
        "symbol_native": "Lek",
        "group": "Others",
        "code": "ALL",
        "display": "ALL (Lek)"
      },
      "AMD": {
        "symbol": "AMD",
        "symbol_native": "\u0564\u0580.",
        "group": "Others",
        "code": "AMD",
        "display": "AMD (\u0564\u0580.)"
      },
      "AOA": {
        "symbol": "AOA",
        "symbol_native": "Kz",
        "group": "Others",
        "code": "AOA",
        "display": "AOA (Kz)"
      },
      "ARS": {
        "symbol": "ARS",
        "symbol_native": "$",
        "group": "Others",
        "code": "ARS",
        "display": "ARS ($)"
      },
      "AUD": {
        "symbol": "AU$",
        "symbol_native": "$",
        "group": "Others",
        "code": "AUD",
        "display": "AU$ ($)"
      },
      "AWG": {
        "symbol": "AWG",
        "symbol_native": "Afl.",
        "group": "Others",
        "code": "AWG",
        "display": "AWG (Afl.)"
      },
      "AZN": {
        "symbol": "AZN",
        "symbol_native": "\u043c\u0430\u043d.",
        "group": "Others",
        "code": "AZN",
        "display": "AZN (\u043c\u0430\u043d.)"
      },
      "BAM": {
        "symbol": "BAM",
        "symbol_native": "KM",
        "group": "Others",
        "code": "BAM",
        "display": "BAM (KM)"
      },
      "BBD": {
        "symbol": "BBD",
        "symbol_native": "$",
        "group": "Others",
        "code": "BBD",
        "display": "BBD ($)"
      },
      "BDT": {
        "symbol": "BDT",
        "symbol_native": "\u09f3",
        "group": "Others",
        "code": "BDT",
        "display": "BDT (\u09f3)"
      },
      "BGN": {
        "symbol": "BGN",
        "symbol_native": "\u043b\u0432.",
        "group": "Others",
        "code": "BGN",
        "display": "BGN (\u043b\u0432.)"
      },
      "BHD": {
        "symbol": "BHD",
        "symbol_native": "\u062f.\u0628.\u200f",
        "group": "Others",
        "code": "BHD",
        "display": "BHD (\u062f.\u0628.\u200f)"
      },
      "BIF": {
        "symbol": "BIF",
        "symbol_native": "FBu",
        "group": "Others",
        "code": "BIF",
        "display": "BIF (FBu)"
      },
      "BMD": {
        "symbol": "BMD",
        "symbol_native": "$",
        "group": "Others",
        "code": "BMD",
        "display": "BMD ($)"
      },
      "BND": {
        "symbol": "BND",
        "symbol_native": "$",
        "group": "Others",
        "code": "BND",
        "display": "BND ($)"
      },
      "BOB": {
        "symbol": "BOB",
        "symbol_native": "Bs",
        "group": "Others",
        "code": "BOB",
        "display": "BOB (Bs)"
      },
      "BRL": {
        "symbol": "R$",
        "symbol_native": "R$",
        "group": "Others",
        "code": "BRL",
        "display": "R$ (R$)"
      },
      "BWP": {
        "symbol": "BWP",
        "symbol_native": "P",
        "group": "Others",
        "code": "BWP",
        "display": "BWP (P)"
      },
      "BYR": {
        "symbol": "BYR",
        "symbol_native": "BYR",
        "group": "Others",
        "code": "BYR",
        "display": "BYR (BYR)"
      },
      "BZD": {
        "symbol": "BZD",
        "symbol_native": "$",
        "group": "Others",
        "code": "BZD",
        "display": "BZD ($)"
      },
      "CAD": {
        "symbol": "CA$",
        "symbol_native": "$",
        "group": "Others",
        "code": "CAD",
        "display": "CA$ ($)"
      },
      "CDF": {
        "symbol": "CDF",
        "symbol_native": "FrCD",
        "group": "Others",
        "code": "CDF",
        "display": "CDF (FrCD)"
      },
      "CHF": {
        "symbol": "CHF",
        "symbol_native": "CHF",
        "group": "Others",
        "code": "CHF",
        "display": "CHF (CHF)"
      },
      "CLP": {
        "symbol": "CLP",
        "symbol_native": "$",
        "group": "Others",
        "code": "CLP",
        "display": "CLP ($)"
      },
      "CNY": {
        "symbol": "CN\u00a5",
        "symbol_native": "CN\u00a5",
        "group": "Others",
        "code": "CNY",
        "display": "CN\u00a5 (CN\u00a5)"
      },
      "COP": {
        "symbol": "COP",
        "symbol_native": "$",
        "group": "Others",
        "code": "COP",
        "display": "COP ($)"
      },
      "CRC": {
        "symbol": "CRC",
        "symbol_native": "\u20a1",
        "group": "Others",
        "code": "CRC",
        "display": "CRC (\u20a1)"
      },
      "CVE": {
        "symbol": "CVE",
        "symbol_native": "CVE",
        "group": "Others",
        "code": "CVE",
        "display": "CVE (CVE)"
      },
      "CZK": {
        "symbol": "CZK",
        "symbol_native": "K\u010d",
        "group": "Others",
        "code": "CZK",
        "display": "CZK (K\u010d)"
      },
      "DJF": {
        "symbol": "DJF",
        "symbol_native": "Fdj",
        "group": "Others",
        "code": "DJF",
        "display": "DJF (Fdj)"
      },
      "DKK": {
        "symbol": "DKK",
        "symbol_native": "kr",
        "group": "Others",
        "code": "DKK",
        "display": "DKK (kr)"
      },
      "DOP": {
        "symbol": "DOP",
        "symbol_native": "$",
        "group": "Others",
        "code": "DOP",
        "display": "DOP ($)"
      },
      "DZD": {
        "symbol": "DZD",
        "symbol_native": "\u062f.\u062c.\u200f",
        "group": "Others",
        "code": "DZD",
        "display": "DZD (\u062f.\u062c.\u200f)"
      },
      "EGP": {
        "symbol": "EGP",
        "symbol_native": "\u062c.\u0645.\u200f",
        "group": "Others",
        "code": "EGP",
        "display": "EGP (\u062c.\u0645.\u200f)"
      },
      "ERN": {
        "symbol": "ERN",
        "symbol_native": "Nfk",
        "group": "Others",
        "code": "ERN",
        "display": "ERN (Nfk)"
      },
      "ETB": {
        "symbol": "ETB",
        "symbol_native": "\u1265\u122d",
        "group": "Others",
        "code": "ETB",
        "display": "ETB (\u1265\u122d)"
      },
      "EUR": {
        "symbol": "\u20ac",
        "symbol_native": "\u20ac",
        "group": "Others",
        "code": "EUR",
        "display": "\u20ac (\u20ac)"
      },
      "GBP": {
        "symbol": "\u00a3",
        "symbol_native": "\u00a3",
        "group": "Others",
        "code": "GBP",
        "display": "\u00a3 (\u00a3)"
      },
      "GEL": {
        "symbol": "GEL",
        "symbol_native": "GEL",
        "group": "Others",
        "code": "GEL",
        "display": "GEL (GEL)"
      },
      "GHS": {
        "symbol": "GHS",
        "symbol_native": "GHS",
        "group": "Others",
        "code": "GHS",
        "display": "GHS (GHS)"
      },
      "GNF": {
        "symbol": "GNF",
        "symbol_native": "FG",
        "group": "Others",
        "code": "GNF",
        "display": "GNF (FG)"
      },
      "GTQ": {
        "symbol": "GTQ",
        "symbol_native": "Q",
        "group": "Others",
        "code": "GTQ",
        "display": "GTQ (Q)"
      },
      "GYD": {
        "symbol": "GYD",
        "symbol_native": "GYD",
        "group": "Others",
        "code": "GYD",
        "display": "GYD (GYD)"
      },
      "HKD": {
        "symbol": "HK$",
        "symbol_native": "$",
        "group": "Others",
        "code": "HKD",
        "display": "HK$ ($)"
      },
      "HNL": {
        "symbol": "HNL",
        "symbol_native": "L",
        "group": "Others",
        "code": "HNL",
        "display": "HNL (L)"
      },
      "HRK": {
        "symbol": "HRK",
        "symbol_native": "kn",
        "group": "Others",
        "code": "HRK",
        "display": "HRK (kn)"
      },
      "HUF": {
        "symbol": "HUF",
        "symbol_native": "Ft",
        "group": "Others",
        "code": "HUF",
        "display": "HUF (Ft)"
      },
      "IDR": {
        "symbol": "IDR",
        "symbol_native": "Rp",
        "group": "Others",
        "code": "IDR",
        "display": "IDR (Rp)"
      },
      "ILS": {
        "symbol": "\u20aa",
        "symbol_native": "\u20aa",
        "group": "Others",
        "code": "ILS",
        "display": "\u20aa (\u20aa)"
      },
      "INR": {
        "symbol": "\u20b9",
        "symbol_native": "\u20b9",
        "group": "Others",
        "code": "INR",
        "display": "\u20b9 (\u20b9)"
      },
      "IQD": {
        "symbol": "IQD",
        "symbol_native": "\u062f.\u0639.\u200f",
        "group": "Others",
        "code": "IQD",
        "display": "IQD (\u062f.\u0639.\u200f)"
      },
      "IRR": {
        "symbol": "IRR",
        "symbol_native": "\ufdfc",
        "group": "Others",
        "code": "IRR",
        "display": "IRR (\ufdfc)"
      },
      "ISK": {
        "symbol": "ISK",
        "symbol_native": "kr",
        "group": "Others",
        "code": "ISK",
        "display": "ISK (kr)"
      },
      "JMD": {
        "symbol": "JMD",
        "symbol_native": "$",
        "group": "Others",
        "code": "JMD",
        "display": "JMD ($)"
      },
      "JOD": {
        "symbol": "JOD",
        "symbol_native": "\u062f.\u0623.\u200f",
        "group": "Others",
        "code": "JOD",
        "display": "JOD (\u062f.\u0623.\u200f)"
      },
      "JPY": {
        "symbol": "\u00a5",
        "symbol_native": "\uffe5",
        "group": "Others",
        "code": "JPY",
        "display": "\u00a5 (\uffe5)"
      },
      "KES": {
        "symbol": "KES",
        "symbol_native": "Ksh",
        "group": "Others",
        "code": "KES",
        "display": "KES (Ksh)"
      },
      "KHR": {
        "symbol": "KHR",
        "symbol_native": "\u17db",
        "group": "Others",
        "code": "KHR",
        "display": "KHR (\u17db)"
      },
      "KMF": {
        "symbol": "KMF",
        "symbol_native": "CF",
        "group": "Others",
        "code": "KMF",
        "display": "KMF (CF)"
      },
      "KRW": {
        "symbol": "\u20a9",
        "symbol_native": "\u20a9",
        "group": "Others",
        "code": "KRW",
        "display": "\u20a9 (\u20a9)"
      },
      "KWD": {
        "symbol": "KWD",
        "symbol_native": "\u062f.\u0643.\u200f",
        "group": "Others",
        "code": "KWD",
        "display": "KWD (\u062f.\u0643.\u200f)"
      },
      "KZT": {
        "symbol": "KZT",
        "symbol_native": "\u20b8",
        "group": "Others",
        "code": "KZT",
        "display": "KZT (\u20b8)"
      },
      "LBP": {
        "symbol": "LBP",
        "symbol_native": "\u0644.\u0644.\u200f",
        "group": "Others",
        "code": "LBP",
        "display": "LBP (\u0644.\u0644.\u200f)"
      },
      "LKR": {
        "symbol": "LKR",
        "symbol_native": "\u0dbb\u0dd4.",
        "group": "Others",
        "code": "LKR",
        "display": "LKR (\u0dbb\u0dd4.)"
      },
      "LRD": {
        "symbol": "LRD",
        "symbol_native": "$",
        "group": "Others",
        "code": "LRD",
        "display": "LRD ($)"
      },
      "LTL": {
        "symbol": "LTL",
        "symbol_native": "Lt",
        "group": "Others",
        "code": "LTL",
        "display": "LTL (Lt)"
      },
      "LVL": {
        "symbol": "LVL",
        "symbol_native": "Ls",
        "group": "Others",
        "code": "LVL",
        "display": "LVL (Ls)"
      },
      "LYD": {
        "symbol": "LYD",
        "symbol_native": "\u062f.\u0644.\u200f",
        "group": "Others",
        "code": "LYD",
        "display": "LYD (\u062f.\u0644.\u200f)"
      },
      "MAD": {
        "symbol": "MAD",
        "symbol_native": "\u062f.\u0645.\u200f",
        "group": "Others",
        "code": "MAD",
        "display": "MAD (\u062f.\u0645.\u200f)"
      },
      "MDL": {
        "symbol": "MDL",
        "symbol_native": "MDL",
        "group": "Others",
        "code": "MDL",
        "display": "MDL (MDL)"
      },
      "MGA": {
        "symbol": "MGA",
        "symbol_native": "MGA",
        "group": "Others",
        "code": "MGA",
        "display": "MGA (MGA)"
      },
      "MKD": {
        "symbol": "MKD",
        "symbol_native": "MKD",
        "group": "Others",
        "code": "MKD",
        "display": "MKD (MKD)"
      },
      "MMK": {
        "symbol": "MMK",
        "symbol_native": "K",
        "group": "Others",
        "code": "MMK",
        "display": "MMK (K)"
      },
      "MOP": {
        "symbol": "MOP",
        "symbol_native": "MOP",
        "group": "Others",
        "code": "MOP",
        "display": "MOP (MOP)"
      },
      "MUR": {
        "symbol": "MUR",
        "symbol_native": "MUR",
        "group": "Others",
        "code": "MUR",
        "display": "MUR (MUR)"
      },
      "MXN": {
        "symbol": "MX$",
        "symbol_native": "$",
        "group": "Others",
        "code": "MXN",
        "display": "MX$ ($)"
      },
      "MYR": {
        "symbol": "MYR",
        "symbol_native": "RM",
        "group": "Common",
        "code": "MYR",
        "display": "MYR (RM)"
      },
      "MZN": {
        "symbol": "MZN",
        "symbol_native": "MTn",
        "group": "Others",
        "code": "MZN",
        "display": "MZN (MTn)"
      },
      "NAD": {
        "symbol": "NAD",
        "symbol_native": "$",
        "group": "Others",
        "code": "NAD",
        "display": "NAD ($)"
      },
      "NGN": {
        "symbol": "NGN",
        "symbol_native": "\u20a6",
        "group": "Others",
        "code": "NGN",
        "display": "NGN (\u20a6)"
      },
      "NIO": {
        "symbol": "NIO",
        "symbol_native": "C$",
        "group": "Others",
        "code": "NIO",
        "display": "NIO (C$)"
      },
      "NOK": {
        "symbol": "NOK",
        "symbol_native": "kr",
        "group": "Others",
        "code": "NOK",
        "display": "NOK (kr)"
      },
      "NPR": {
        "symbol": "NPR",
        "symbol_native": "\u0928\u0947\u0930\u0942",
        "group": "Others",
        "code": "NPR",
        "display": "NPR (\u0928\u0947\u0930\u0942)"
      },
      "NZD": {
        "symbol": "NZ$",
        "symbol_native": "$",
        "group": "Others",
        "code": "NZD",
        "display": "NZ$ ($)"
      },
      "OMR": {
        "symbol": "OMR",
        "symbol_native": "\u0631.\u0639.\u200f",
        "group": "Others",
        "code": "OMR",
        "display": "OMR (\u0631.\u0639.\u200f)"
      },
      "PAB": {
        "symbol": "PAB",
        "symbol_native": "B\/.",
        "group": "Others",
        "code": "PAB",
        "display": "PAB (B\/.)"
      },
      "PEN": {
        "symbol": "PEN",
        "symbol_native": "S\/.",
        "group": "Others",
        "code": "PEN",
        "display": "PEN (S\/.)"
      },
      "PHP": {
        "symbol": "PHP",
        "symbol_native": "\u20b1",
        "group": "Others",
        "code": "PHP",
        "display": "PHP (\u20b1)"
      },
      "PKR": {
        "symbol": "PKR",
        "symbol_native": "\u20a8",
        "group": "Others",
        "code": "PKR",
        "display": "PKR (\u20a8)"
      },
      "PLN": {
        "symbol": "PLN",
        "symbol_native": "z\u0142",
        "group": "Others",
        "code": "PLN",
        "display": "PLN (z\u0142)"
      },
      "PYG": {
        "symbol": "PYG",
        "symbol_native": "\u20b2",
        "group": "Others",
        "code": "PYG",
        "display": "PYG (\u20b2)"
      },
      "QAR": {
        "symbol": "QAR",
        "symbol_native": "\u0631.\u0642.\u200f",
        "group": "Others",
        "code": "QAR",
        "display": "QAR (\u0631.\u0642.\u200f)"
      },
      "RON": {
        "symbol": "RON",
        "symbol_native": "RON",
        "group": "Others",
        "code": "RON",
        "display": "RON (RON)"
      },
      "RSD": {
        "symbol": "RSD",
        "symbol_native": "\u0434\u0438\u043d.",
        "group": "Others",
        "code": "RSD",
        "display": "RSD (\u0434\u0438\u043d.)"
      },
      "RUB": {
        "symbol": "RUB",
        "symbol_native": "\u0440\u0443\u0431.",
        "group": "Others",
        "code": "RUB",
        "display": "RUB (\u0440\u0443\u0431.)"
      },
      "RWF": {
        "symbol": "RWF",
        "symbol_native": "FR",
        "group": "Others",
        "code": "RWF",
        "display": "RWF (FR)"
      },
      "SAR": {
        "symbol": "SAR",
        "symbol_native": "\u0631.\u0633.\u200f",
        "group": "Others",
        "code": "SAR",
        "display": "SAR (\u0631.\u0633.\u200f)"
      },
      "SDG": {
        "symbol": "SDG",
        "symbol_native": "SDG",
        "group": "Others",
        "code": "SDG",
        "display": "SDG (SDG)"
      },
      "SEK": {
        "symbol": "SEK",
        "symbol_native": "kr",
        "group": "Others",
        "code": "SEK",
        "display": "SEK (kr)"
      },
      "SGD": {
        "symbol": "SGD",
        "symbol_native": "$",
        "group": "Common",
        "code": "SGD",
        "display": "SGD ($)"
      },
      "SOS": {
        "symbol": "SOS",
        "symbol_native": "SOS",
        "group": "Others",
        "code": "SOS",
        "display": "SOS (SOS)"
      },
      "STD": {
        "symbol": "STD",
        "symbol_native": "Db",
        "group": "Others",
        "code": "STD",
        "display": "STD (Db)"
      },
      "SYP": {
        "symbol": "SYP",
        "symbol_native": "\u0644.\u0633.\u200f",
        "group": "Others",
        "code": "SYP",
        "display": "SYP (\u0644.\u0633.\u200f)"
      },
      "THB": {
        "symbol": "\u0e3f",
        "symbol_native": "\u0e3f",
        "group": "Others",
        "code": "THB",
        "display": "\u0e3f (\u0e3f)"
      },
      "TND": {
        "symbol": "TND",
        "symbol_native": "\u062f.\u062a.\u200f",
        "group": "Others",
        "code": "TND",
        "display": "TND (\u062f.\u062a.\u200f)"
      },
      "TOP": {
        "symbol": "TOP",
        "symbol_native": "T$",
        "group": "Others",
        "code": "TOP",
        "display": "TOP (T$)"
      },
      "TRY": {
        "symbol": "TRY",
        "symbol_native": "TL",
        "group": "Others",
        "code": "TRY",
        "display": "TRY (TL)"
      },
      "TTD": {
        "symbol": "TTD",
        "symbol_native": "$",
        "group": "Others",
        "code": "TTD",
        "display": "TTD ($)"
      },
      "TWD": {
        "symbol": "NT$",
        "symbol_native": "NT$",
        "group": "Others",
        "code": "TWD",
        "display": "NT$ (NT$)"
      },
      "TZS": {
        "symbol": "TZS",
        "symbol_native": "TSh",
        "group": "Others",
        "code": "TZS",
        "display": "TZS (TSh)"
      },
      "UAH": {
        "symbol": "UAH",
        "symbol_native": "\u20b4",
        "group": "Others",
        "code": "UAH",
        "display": "UAH (\u20b4)"
      },
      "UGX": {
        "symbol": "UGX",
        "symbol_native": "USh",
        "group": "Others",
        "code": "UGX",
        "display": "UGX (USh)"
      },
      "USD": {
        "symbol": "$",
        "symbol_native": "$",
        "group": "Common",
        "code": "USD",
        "display": "$ ($)"
      },
      "UYU": {
        "symbol": "UYU",
        "symbol_native": "$",
        "group": "Others",
        "code": "UYU",
        "display": "UYU ($)"
      },
      "UZS": {
        "symbol": "UZS",
        "symbol_native": "UZS",
        "group": "Others",
        "code": "UZS",
        "display": "UZS (UZS)"
      },
      "VEF": {
        "symbol": "VEF",
        "symbol_native": "Bs.F.",
        "group": "Others",
        "code": "VEF",
        "display": "VEF (Bs.F.)"
      },
      "VND": {
        "symbol": "\u20ab",
        "symbol_native": "\u20ab",
        "group": "Others",
        "code": "VND",
        "display": "\u20ab (\u20ab)"
      },
      "XAF": {
        "symbol": "FCFA",
        "symbol_native": "FCFA",
        "group": "Others",
        "code": "XAF",
        "display": "FCFA (FCFA)"
      },
      "XOF": {
        "symbol": "CFA",
        "symbol_native": "CFA",
        "group": "Others",
        "code": "XOF",
        "display": "CFA (CFA)"
      },
      "YER": {
        "symbol": "YER",
        "symbol_native": "\u0631.\u064a.\u200f",
        "group": "Others",
        "code": "YER",
        "display": "YER (\u0631.\u064a.\u200f)"
      },
      "ZAR": {
        "symbol": "ZAR",
        "symbol_native": "R",
        "group": "Others",
        "code": "ZAR",
        "display": "ZAR (R)"
      },
      "ZMK": {
        "symbol": "ZMK",
        "symbol_native": "ZK",
        "group": "Others",
        "code": "ZMK",
        "display": "ZMK (ZK)"
      }
    };
  })

;
