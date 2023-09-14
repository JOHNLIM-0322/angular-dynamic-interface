
export interface NOPResponse {
    NopEnvironment: NOPEnvironment;
    NopResult: NOPResult;
    NopData : NOPData;
}


export interface NOPData {
    NopList: NOPList;
    NopFilter: NOPFilter;
 }

export interface NOPFilter {
    OPRMSL_RESOURCE_SELECT: string;
}

export interface NOPList {
    tHeader: string[];
    tFormat: string[];
    tBody: string[][];
}

 export interface NOPItem {
    key: string;
    value: string;
 }

 export interface NOPResult {
    object :string;
    function: string;
    objPath: string[];
    helpID: number;
    helpUrl: string;
 }

 export interface NOPEnvironment {
    sessionID: string;
    apiVersion: number;
    dateFormat: string;
    timeFormat: string;
    language: number;
    decimalChar: string;
    NopServerIndicator: NOPServerIndicator;
 }

 export interface NOPServerIndicator {
    text: string;
    position: string;
    color: string;
    background: string;
 }
 
//  "title":"Entire Operations",
//  "path":[
//      "OP"
//  ],
//  "message":"NOW0002 - Logon successful, session 2BA35E44EF79BBECD5A10CE482E39158 opened.",
//  "creationExxUser":"NATQA",
//  "creationUserType":"A"

export interface NOPData_LG {
    title:string;
    path: string[];
    message:string;
    creationExxUser: string;
    creationUserType: string;
}